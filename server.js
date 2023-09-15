const app = require("./src/app");

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

process.on('SIGINT', () => {
    console.log('Bye bye!');
    process.exit();
})
