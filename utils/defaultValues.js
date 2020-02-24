export const defaultDeck = {
  list: [0, 1, 2],
  refById: {
    0: {
      title: 'React',
      cards: [1, 2],
      id: 0,
    },
    1: {
      title: 'Javascript',
      cards: [3],
      id: 1,
    },
    2: {
      title: 'Others',
      cards: [0],
      id: 2,
    }
  },
  lastId: 2,
};

export const defaultCard = {
  list: [0, 1, 2, 3],
  refById: {
    0: {
      id: 0,
      question: 'Does React Native work with Android?',
      answer: 'Yes!'
    },
    1: {
      id: 1,
      question: 'What is React?',
      answer: 'A library for managing user interfaces'
    },
    2: {
      id: 2,
      question: 'Where do you make Ajax requests in React?',
      answer: 'The componentDidMount lifecycle event'
    },
    3: {
      id: 3,
      question: 'What is a closure?',
      answer: 'The combination of a function and the lexical environment within which that function was declared.'
    }
  },
  lastId: 3,
}
