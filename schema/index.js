import userSchema from './user';
import carSchema from './car';

const linkSchema = `
  type Query {
    _: Boolean
  }


  type Mutation {
    _: Boolean
  }
`;

export default [linkSchema, userSchema, carSchema];