import score from './scores.js';

const listOfScores = (arr) => {
  let list = '';
  arr.forEach((element) => {
    list += score(element);
  });
  return list;
};

export default listOfScores;