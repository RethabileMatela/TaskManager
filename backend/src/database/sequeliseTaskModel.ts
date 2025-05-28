import { DataTypes, Model } from 'sequelize';
import sequelizeUsersDatabase from './sequeliseUsers';

class SequeliseTask extends Model {
    public taskId!: string; // Using string for UUID
    public title!: string;
    public description!: string;
    public createdById!: string;
}

SequeliseTask.init(
    {
        taskId: {
            type: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        createdById: {
            type: DataTypes.UUIDV4,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        sequelize: sequelizeUsersDatabase,
        tableName: "tasks", // Make sure this matches your table name
    }
);

export default SequeliseTask;