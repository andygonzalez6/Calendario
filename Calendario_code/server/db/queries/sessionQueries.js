const q = require('./query_handler');
const bcrypt = require('bcrypt')

const loginUser = async (email, password) => {
    try {
    const query = 'SELECT * FROM users WHERE email = $1';
    const values = [email];
    const user = await q.handle_query(query, values);
    if (!user) {
        // User not found
        return null;
      }
  
      // Compare the provided password with the hashed password from the database
      const isPasswordValid = await bcrypt.compare(password, user.password);
  
      if (isPasswordValid) {
        // Passwords match, return the user data without the password
        const { password, ...userDataWithoutPassword } = user;
        return userDataWithoutPassword;
      } else {
        // Passwords do not match
        return null;
      }
    } catch (error) {
      // Handle database query error
      console.error('Error during login:', error);
      throw error; // Propagate the error to the caller or handle it accordingly
    }
  
  };


module.exports = {
    loginUser,
}