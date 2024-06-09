const bcrypt = require('bcryptjs');

// Password to hash
const password = 'password123';

// Hash the password
bcrypt.hash(password, 12, (err, hash) => {
  if (err) {
    return console.error('Error hashing password:', err);
  }
  console.log('Generated hash:', hash);

  // Compare the password with the generated hash
  bcrypt.compare(password, hash, (err, result) => {
    if (err) {
      return console.error('Error during comparison:', err);
    }
    console.log('Password comparison result:', result);
  });
});
