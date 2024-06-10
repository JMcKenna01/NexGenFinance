const bcrypt = require('bcryptjs');

const password = 'password123';

// Generate a new hash for the password
bcrypt.genSalt(10, (err, salt) => {
  if (err) {
    console.error('Error generating salt:', err);
    return;
  }
  bcrypt.hash(password, salt, (err, newHashedPassword) => {
    if (err) {
      console.error('Error hashing password:', err);
      return;
    }
    console.log('New hashed password:', newHashedPassword);

    // Compare the plain text password with the new hash
    bcrypt.compare(password, newHashedPassword, (err, isMatch) => {
      if (err) {
        console.error('Error during password comparison:', err);
      } else {
        console.log('Password comparison result:', isMatch);
      }
    });
  });
});
