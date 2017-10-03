// @flow

type characterType = {
  id: number,
  name: string,
  username: string,
  description: string,
  image: string,
  lifePool: number,
};

class Character {
  id: number;
  name: string;
  username: string;
  image: string;
  lifePool: number;
  constructor(data: characterType) {
    this.id = data.id;
    this.name = data.name;
    this.username = data.username;
    this.image = data.image;
    this.lifePool = data.lifePool;
  }
}

const Resolvers = {
  characters: () => {
    const data: Array<Object> = [
      {
        id: 1,
        name: 'serge',
        username: 'faultless',
        description: '',
        image: '',
        lifePool: 100,
      },
      {
        id: 2,
        name: 'hug',
        username: 'paratoner',
        description: '',
        image: '',
        lifePool: 200,
      },
      {
        id: 1,
        name: 'brown',
        username: 'dark',
        description: '',
        image: '',
        lifePool: 300,
      },
    ];
    const newCharacters: Array<Character> = data;
    return newCharacters;
  },
};

export default Resolvers;
