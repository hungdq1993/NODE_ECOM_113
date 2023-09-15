const app = require("./src/app");
const configMongose = require("./src/config/config.mongose");


const {port} = configMongose;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

process.on('SIGINT', () => {
    console.log('Bye bye!');
    process.exit();
})
