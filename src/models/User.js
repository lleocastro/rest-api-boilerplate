import { generatePasswordHash } from '../utils/auth';

export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      field: 'email',
      validate: { isEmail: true },
    },
    password: {
      type: DataTypes.STRING,
      field: 'password_hash',
      validate: { min: 6 },
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at',
      validate: { isDate: true },
    },
  }, { sequelize });

  User.beforeCreate(async ({ dataValues }) => {
    const phash = await generatePasswordHash(dataValues.password);
    dataValues.password = phash;
    return dataValues;
  });

  return User;
};
