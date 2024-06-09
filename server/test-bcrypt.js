const bcrypt = require('bcryptjs');

const password = 'password123';
const hashedPassword = '$2a$10$sYuIaeCb2Nry8foj7P4qSudTGcYZGOit30ee8lVhgzQd/kA8Vi9mK'; // Use the hash from your logs

bcrypt.compare(password, hashedPassword, (err, isMatch) => {
  if (err) {
    console.error('Error during manual password comparison:', err);
  } else {
    console.log('Manual password comparison result:', isMatch);
  }
});
