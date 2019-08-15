// Напиши функцию formatString(string) принимающую строку в параметр string.
// Если длина строки не превышает 40 символов, функция возвращает ее
// в исходном виде.
// Если длина больше 40 символов, то функция обрезает строку до 40-ка
// символов и добавляет в конец строки троеточие '...', после чего
// возвращает укороченную версию.

const formatString = function(string, lgh = 40) {
    if (string.length <= lgh) {
      return string;
    } else if (string.length > lgh) {
      const charArray = string.split("");
      charArray.splice(lgh + 1, string.length, "...");
      return charArray.join("");
    }
  }

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// вернется оригинальная строка

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// вернется форматированная строка

console.log(formatString("Curabitur ligula sapien."));
// вернется оригинальная строка

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
// вернется форматированная строка



