import { Sequelize } from 'sequelize';
import { OPEN_READWRITE } from 'sqlite3';
import fs from 'fs';

const databasePath = './users.db';

if (!fs.existsSync(databasePath)) {
    fs.writeFileSync(databasePath, ''); // Create an empty database file if it doesn't exist
}

const sequelizeTasksDatabase = new Sequelize({
    dialect: 'sqlite',
    storage: databasePath, // Specify the database file
    dialectOptions: {
        mode: OPEN_READWRITE, // Open the database in read-write mode
    },
    logging: false,
});

sequelizeTasksDatabase.sync(); // Synchronize the database

export default sequelizeTasksDatabase;

