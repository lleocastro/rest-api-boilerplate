import '@babel/polyfill';

import { generatePasswordHash } from '../../src/utils/auth';

export default {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert('users', [{
      email: 'adao@system.com.br',
      password_hash: await generatePasswordHash(process.env.ADAO_PASSWORD),
      created_at: new Date(),
      updated_at: new Date(),
    }], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
