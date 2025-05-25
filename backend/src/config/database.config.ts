import { Sequelize } from "sequelize";

const connectDB = new Sequelize(
    process.env.DB_NAME || "mydatabase",
    "",
    "",
    {
        dialect: "sqlite",
        storage: "./database.sqlite",
        logging: false,
    }
)
export default connectDB;