const {config} = require('dotenv')
config()
const PORT = 3001;
const HOSTS = 'http://localhost:5173';
module.exports = {
    PORT,
    HOSTS
}