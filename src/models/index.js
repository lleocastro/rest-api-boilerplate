import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';

const basename = path.basename(__filename);

const db = {};

const sequelize = new Sequelize(require('../../config/sequelize'));

try {
  fs.readdirSync(__dirname).filter(file => {
      return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    }).forEach((file) => {
      const model = require(path.join(__dirname, file)).default(sequelize, Sequelize.DataTypes);
      db[model.name] = model;
    });
} catch (err) {
  global.console.error(err);
}

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
