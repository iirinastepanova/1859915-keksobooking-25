
/**
 * Функция для вывода случайного целого числа из диапазона
 * @param {Number} min — минимальное число
 * @param {Number} max — максимальное число
 * @return {integer} — случайное число
 */

 function getRandomPositiveInteger (a, b) {

  const min = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const max = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (max - min + 1) + min;

  return Math.floor(result);
}

getRandomPositiveInteger(3,5);

/**
 * Функция для вывода случайного числа с плавающей запятой из диапазона
 * @param {Number} min — минимальное число
 * @param {Number} max — максимальное число
 * @param {Number} digits — число знаков после запятой
 * @return {float} — случайное число с плавающей запятой
 */
 function getRandomPositiveFloat (a, b, digits = 1) {

  const min = Math.min(Math.abs(a), Math.abs(b));
  const max = Math.max(Math.abs(a), Math.abs(b));

  const result = Math.random() * (max - min) + min;
  return +result.toFixed(digits);
 }

getRandomPositiveFloat(2, 5, 2);



/**
Структура каждого объекта должна быть следующей:
offer, объект — содержит информацию об объявлении. Состоит из полей:
address, строка — адрес предложения. Для простоты пусть пока составляется из географических координат по маске {{location.lat}}, {{location.lng}}.
features, массив строк — массив случайной длины из значений: wifi, dishwasher, parking, washer, elevator, conditioner. Значения не должны повторяться.
description, строка — описание помещения. Придумайте самостоятельно
photos, массив строк — массив случайной длины из значений: https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg, https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg, https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg.
location, объект — местоположение в виде географических координат. Состоит из двух полей:
lat, число с плавающей точкой — широта, случайное значение от 35.65000 до 35.70000.
lng, число с плавающей точкой — долгота, случайное значение от 139.70000 до 139.80000.
 */


const TITLES = [
  'Райское место',
  'Уютный уголок',
  'Прекрасное жилье',
  'Счастье путешественника'
];

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const CHECK_IN_OUT = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DESCRIPTION = [
  'Шикарное жилье с видом на горы',
  'Панорамные окна для встречи заката',
  'Тихое местечко для размеренного отдыха',
  'Номер для деловых поездок и командировок',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const SIMILAR_OFFERS_COUNT = 10;

/**
 * Функция для выбора случайного элемента из массива
 * @param {Array} elements — массив
 * @return {} — случайный элемент
 */
const getRandomArrayElement = (elements) => {
  return elements[getRandomPositiveInteger(0, elements.length - 1)];
};

//Функция для генерации массива случайной длины
const getRandomArray = function (array) {
  let randomArray = [];
  let arrayLength = getRandomPositiveInteger(1, array.length);

  for (let i = 0; i < arrayLength; i++) {
    randomArray = array.push(array[i]);
  }
  return randomArray;
}

const getRandomArray = function (array) {
  let length = array.length;
  let arrayLength = getRandomPositiveInteger(1, length);
  let randomArray = Array(arrayLength);

  for (let i = 0; i < arrayLength; i++) {
    randomArray = array.push(array[i]);
  }
  return randomArray;
}


let avatarNumber = 0;

const createOffer = () => {

  avatarNumber = Number(avatarNumber) + 1;

  if (avatarNumber < 10) {
    avatarNumber = '0' + avatarNumber;
  }

  const lat = getRandomPositiveFloat(35.65000, 35.70000, 5);
  const lng = getRandomPositiveFloat(139.70000, 139.80000, 5);

  return {
    author: {
      avatar: 'img/avatars/user' + avatarNumber + '.png'
    },
    offer: {
      title: getRandomArrayElement(TITLES),
      adress: `${lat} , ${lng}`,
      price: getRandomPositiveInteger(0, 200000),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomPositiveInteger(1, 10),
      guests: getRandomPositiveInteger(1, 40),
      checkin: getRandomArrayElement(CHECK_IN_OUT),
      checkout: getRandomArrayElement(CHECK_IN_OUT),
      features: '',
      description: getRandomArrayElement(DESCRIPTION),
      photos: getRandomArray(PHOTOS),
    },
    location: {
      lat: lat,
      lng: lng,
    }
  };
};

// console.log(
//   createOffer()
// );

const similarOffers = Array.from({length: SIMILAR_OFFERS_COUNT}, createOffer);
console.log(similarOffers);
