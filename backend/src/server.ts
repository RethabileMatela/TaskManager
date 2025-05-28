import app from './app';
import config from './config/config';
import sequelizeTasksDatabase from './database/sequeliseTasks';
import sequelizeUsersDatabase from './database/sequeliseUsers';



sequelizeUsersDatabase.sync().then(() => {
	console.log("connect to users table");
});

sequelizeTasksDatabase.sync().then(() => {
	console.log("connect to tasks table");
});

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});

// http://localhost:9000/api/users