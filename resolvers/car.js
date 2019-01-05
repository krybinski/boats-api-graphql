import { combineResolvers } from 'graphql-resolvers';
import { isAuthenticated } from './auth';

export default {
  Query: {
    allCars: (parent, args, { models }) =>
      models.Car.findAll()
  },

  Car: {
    user: async (car, args, { models }) =>
      models.User.findOne({ where: { id: car.userId }})
  },

  Mutation: {
    createCar: combineResolvers(isAuthenticated, (parent, { title, description }, { models, userId }) =>
      models.Car.create(title, description, userId)
    )
  }
}