/** @desc a character with basic info and a picture. */
const Character = `
  type Character {
    id: Int!
    name: String!
    username: String!
    description: String
    image: String
    lifePool: Int!
  }
`;

export default Character;
