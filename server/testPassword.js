const bcrypt = require('bcryptjs');

const testPassword = async () => {
  const password = 'password123';
  const hashedPassword = await bcrypt.hash(password, 12);
  console.log('Hashed Password:', hashedPassword);

  const isMatch = await bcrypt.compare(password, hashedPassword);
  console.log('Password valid:', isMatch);
};

testPassword();
