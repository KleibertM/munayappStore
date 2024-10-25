const app = require('./src/server')
const { PORT } = require('./src/config');
const { conn } = require('./src/db');


conn.sync({ force: false})
// conn.sync({ force: true})
.then(() => {
    // conn.authenticate()
    app.listen(PORT, () => {
        console.log('Server raised in port: ' + PORT);
    })
}).catch((error)=> {
    console.log("Error while connecting to the database", error)
});