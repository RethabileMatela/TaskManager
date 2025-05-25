import { DataTypes, Model } from 'sequelize';
import connectDB from '../config/database.config';

interface UserAttributes {
	id: string;
	name: string;
	role: boolean;
}

export class UserInstance extends Model<UserAttributes> {}

UserInstance.init(
	{
		id: {
			type: DataTypes.UUIDV4,
			primaryKey: true,
			allowNull: false,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		role: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false,
		},
	},
	{
		sequelize: connectDB,
		tableName: 'UsersTable',
        timestamps: true,
	}
);
