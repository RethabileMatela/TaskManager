import { DataTypes, Model } from 'sequelize';
import sequelizeDatabase from './sequeliseUsers';

class SequeliseUser extends Model {
    public id!: string; // Using string for UUID
    public name!: string;
    public role!: string;
}

SequeliseUser.init(
    {
        id: {
            type: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,},
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        sequelize: sequelizeDatabase,
        tableName: "users", // Make sure this matches your table name
    }
);

export default SequeliseUser;


export let users: SequeliseUser[] = [];
