const app = require('./src/app')
const PORT = 3005

const server = app.listen(3005, () =>{
    console.log(`WSV running on port ${PORT}`)
})

process.on('SIGINT', () =>{
    server.close(() => console.log('Exit Server Express'))
})