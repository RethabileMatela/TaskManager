import { Sequelize } from 'sequelize';

const sequelizeDatabase = new Sequelize({
  dialect: 'sqlite',
  storage: './users.db', // Specify the database file
  logging: false,
});

export default sequelizeDatabase;