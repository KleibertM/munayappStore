const server = require('./src/app');
const { PORT } = require('./src/config');
// const PORT = 3001;
const {conn} = require('./src/db')


conn.sync({ force: false})
.then(() => {
    server.listen(PORT, () => {
        console.log('Server raised in port: ' + PORT);
    })
}).catch((error)=> {
    console.log("Error while connecting to the database", error)
});