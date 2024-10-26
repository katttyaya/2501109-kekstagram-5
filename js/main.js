const message = (
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
);

const name = (
  'Екатерина',
  'Александр',
  'Елизавета',
  'Анна',
  'Степан',
  'Антон',
  'Михаил'
);

const getRandomInt = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

function createRandomNumbers(min, max) {
  const previousValues = [];

  return function () {
    let currentValues = getRandomInt(min, max);
    if (previousValues.length >= (max - min + 1)) {
        return null;
    }
    while (previousValues.includes(currentValues)) {
      currentValues = getRandomInt(min, max);
    }
    previousValues.push(currentValues);
    return currentValues;
  };
}

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
