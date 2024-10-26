const getRandomArrayElemtnt = (elements) => elements[createRandomNumbers(0, elements.length - 1)()];
const generatePhoto = createRandomNumbers(1, 25);
const url = createRandomNumbers(1, 25);
const generateNumbersOfLikes = createRandomNumbers(15, 200);
const user = createRandonNumbers(1, 100000);
const avatar = createRandomNumbers(1, 6);

const createComment = () => (
  {
    id: user(),
    avatar: 'img/avatar-${ avatar() }.svg',
    massage: getRandonArrayElement(massage),
    names: getRandomArrayElement(name),
  }
);

const createPhotoDescription = () => ({
  id: generatePhotoId(),
  url: `photos/${ url() }.jpg`,
  description: "Тут должно быть описание изображения",
  likes: generateNumbersOfLikes(),
  comments: Array.from({length: getRandomInteger(0, 38)}, createComment)
  }
);

const similarPhotoDescriptions = Array.from({length: 25}, createPhotoDescription);
