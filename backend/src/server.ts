import app from './app';
import config from './config/config';
import sequelizeDatabase from './database/sequeliseUsers';


sequelizeDatabase.sync().then(() => {
	console.log("connect to db");
});


app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});

// http://localhost:9000/api/users