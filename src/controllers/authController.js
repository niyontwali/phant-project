import { User } from '../../server/models/index'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import authConfig from '../../server/config/auth'

// login user
// login(req, res) {

// },

// register user
module.exports.signUp = function (req, res) {
  // hashing our password
  const password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds))
  // create user
  User.create({
    full_name: req.body.full_name,
    email: req.body.email,
    phone_number: req.body.phone_number,
    password: password
  }).then(user => {
    // create token
    const token = jwt.sign({ user: user }, authConfig.secret, {
      expiresIn: authConfig.expires
    })
    res.json({
      user: user,
      token: token
    })
  }).catch(err => {
    res.status(500).json({
      err
    })
  })
}
