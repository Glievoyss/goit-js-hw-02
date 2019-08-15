"use strict";

// Напиши фукцнию findLongestWord(string), которая принимает
//  параметром произвольную строку (в строке будут только слова
//      и пробелы) и возвращает самое длинное слово в этой строке.
// Вызовы функции для проверки работоспособности твоей реализации.

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'
console.log(findLongestWord("Google do a roll")); // 'Google'
console.log(findLongestWord("May the force be with you")); // 'force'

function findLongestWord(string) {
  let LongtWord;
  let lngWord = 0;
  const words = string.split(" ");
  for (const word of words) {
    // console.log(" Длина слова -", word, "= ", word.length);
    if (word.length >= lngWord) {
      lngWord = word.length;
      LongtWord = word;
    }
    // console.log("Пока что самое длинное слово ", LongtWord);
    // alert("pause");
  }
  return "Cамое длинное слово в массиве - ", LongtWord;
}
