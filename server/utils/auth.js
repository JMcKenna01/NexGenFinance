const jwt = require('jsonwebtoken');
const { GraphQLError } = require('graphql');

const secret = process.env.JWT_SECRET || 'fallbackSecret';
const expiration = '2h';

module.exports = {
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      console.log('No token found');
      return { user: null };
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      console.log('Token verified:', data);
      return { user: data };
    } catch (error) {
      console.log('Invalid token', error.message);
      return { user: null };
    }
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};