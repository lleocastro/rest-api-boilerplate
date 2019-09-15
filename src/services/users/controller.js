import bcrypt from 'bcrypt';

import { encode } from '../../utils/auth';

import {
  EMAIL_OR_PASSWORD_INCORRECT,
} from '../../constants';

export default class Controller {
  static async authenticate({ body }, res, { sequelize: { User } }) {
    const user = await User.findOne({ where: { email: body.email } });
    
    let token = null;

    if (user) {
      const { dataValues } = user;

      const match = await bcrypt.compare(body.password, dataValues.password);

      if (match) {
        token = encode({
          id: dataValues.id,
          email: dataValues.email,
        });

        return res.json({ token });
      }
    }

    return res.status(400).json({
      errors: [ { msg: EMAIL_OR_PASSWORD_INCORRECT } ],
    });
  }
}
