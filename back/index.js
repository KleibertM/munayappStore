const app = require('./src/server')
const { PORT } = require('./src/config');
    
app.listen(PORT, () => {
        console.log('Server raised in port: ' + PORT);
    })