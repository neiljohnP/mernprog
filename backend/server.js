const app = require('./app');
const connectDatabase = require('./config/database.js')
const PORT = 8080;
const dotenv = require('dotenv');

//setting up config file

dotenv.config({ path: 'backend/config/config.env'})


//connecting to database
connectDatabase();

app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}`);
  });
