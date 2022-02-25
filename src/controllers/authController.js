import model from '../../server/models'

const { User } = model

class Users {
  static signUp (req, res) {
    const { full_name, email, phone_number, password } = req.body
    return User
      .create({
        full_name,
        email,
        phone_number,
        password
      })
      .then(userData => res.status(201).send({
        success: true,
        message: 'User successfully created',
        userData
      }))
  }
}

export default Users
