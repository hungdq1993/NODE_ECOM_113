const app = require("./src/app");
const configMongose = require("./src/config/config.mongose");


const {port} = configMongose;

/**
 * @description : Start server
 */

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

/**
 * @description: Handle exit process
 */
process.on('SIGINT', () => {
    console.log('Bye bye!');
    process.exit();
})

process.on('SIGTERM', () => {
    console.log('Bye bye 113!');
});
