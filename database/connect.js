const mongoose = require('mongoose');

async function connect() {
    mongoose.set('strictQuery', false);
    try {
        await mongoose.connect(process.env.MONGODBURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    } catch (err) {
        process.exit(1)
    }
    mongoose.connection.once("open", () => {
    });
    mongoose.connection.on("error", (err) => {
        process.exit(1)
    });
    return;
}

module.exports = connect