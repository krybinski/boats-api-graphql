export default `
  type Car {
    id: Int!
    title: String!
    description: String!
    userId: Int!
    user: User!
  }

  extend type Query {
    allCars: [Car!]!
  }

  extend type Mutation {
    createCar(title: String!, description: String!): Car
  }
`;