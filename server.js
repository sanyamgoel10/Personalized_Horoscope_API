// Config
const { port } = require('./config/config.js');

// Express App
const app = require('./app.js');

// Database Service
const DatabaseService = require('./services/databaseService.js');

const startServer = async () => {
    try {
        // Connect Database
        await DatabaseService.connectToDatabase();

        // Start Server
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};

startServer();