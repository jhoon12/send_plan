import {Sequelize} from 'sequelize';
import path from  'path';
const env =  process.env.NODE_ENV || 'development';

const config = require(path.join(__dirname, '..', 'config', 'config.json'))[env];

const db = {}
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
)

export default sequelize;

