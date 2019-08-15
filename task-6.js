"use strict";

// Напиши функцию checkForSpam(str), принимающую 1 параметр string - строку.
//  Функция проверяет ее на содержание слов spam и sale.
//  Если нашли зарещенное слово то функция возвращает true,
//  если запрещенных слов нет функция возвращает false.
//  Слова в строке могут быть в произвольном регистре.
// Вызовы функции для проверки работоспособности твоей реализации.
// console.log(checkForSpam('Latest technology news')); // false
// console.log(checkForSpam('JavaScript weekly newsletter')); // false
// console.log(checkForSpam('Get best sale offers now!')); // true
// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

"use strict";

const spamWords = ["spam", "sale"];

const checkForSpam = function(string) {
  string = string.toLowerCase();
  for (let spamWord of spamWords) {
    if (string.includes(spamWord)) {
      return true;
    }
  }
  return false;
};

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
