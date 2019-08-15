"use strict";
// Напиши функцию logItems(array), которая получает массив и
// использует цикл for, который для каждого элемента массива
// будет выводить в консоль сообщение в формате [номер элемента] -
// [значение элемента].
// Нумерация должна начинаться с 1. К примеру для первого
//  элемента массива ['Mango', 'Poly', 'Ajax'] с индексом 0
//  будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'.

// DECLARED FUNCTION

const logItems = function(arg) {
  for (let i = 0; i < arg.length; i++) {
    console.log(`${i + 1} - ${arg[i]}`);
  }
};

// =========================================================
const array1 = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];
const array2 = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
// =========================================================

console.log("FIRST ARRAY");
logItems(array1);
console.log("SECOND ARRAY");
logItems(array2);
