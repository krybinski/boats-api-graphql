export default {
  Query: {
    allUsers: (parent, args, { models }) =>
      models.User.findAll(),
    getUser: (parent, { id }, { models }) =>
      models.User.findOne({ where: {id} })
  },

  Mutation: {
    createUser: (parent, { firstName, lastName, email, passwordHash }, { models }) =>
      models.User.create({ firstName, lastName, email, passwordHash }),
    updateUser: (parent, { id, firstName, lastName, email, passwordHash }, { models }) =>
      models.User.update({ firstName, lastName, email, passwordHash }, { where: { id } }),
    deleteUser: (parent, { id }, { models }) =>
      models.User.destroy({ where: { id } })  
  }
}