const app = require('./app')
const PORT = 8080;
const dotenv = require('dotenv');

//setting up config file

dotenv.config({ path:'./config/config.env'})

app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}`);
  });
