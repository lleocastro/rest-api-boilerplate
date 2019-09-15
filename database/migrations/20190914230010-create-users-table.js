export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      email: { allowNull: false, type: Sequelize.STRING(100), unique: true },
      password_hash: { allowNull: false, type: Sequelize.STRING(255) },
      created_at: { allowNull: false, type: Sequelize.DATE },
      updated_at: { allowNull: false, type: Sequelize.DATE },
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('users');
  },
};
