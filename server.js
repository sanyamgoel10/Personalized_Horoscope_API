// Config
const dotenv = require('dotenv');
dotenv.config();

// Express App
const app = require("./app.js");

const startServer = async () => {
    try {    
        // Start Server
        app.listen(process.env.port, () => {
            console.log(`Server running on port ${process.env.port}`);
        });
    } catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
};

startServer();