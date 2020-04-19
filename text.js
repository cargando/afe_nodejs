var m = 10;
var n = 25;

function sum(a, b) {

  var res = a + b;

  return "Результат сложения " + a + " и " + b + " = " + res;
}

function sumArgs() {
  var myArgs = process.argv.slice(2);
  var result = 0;

  myArgs.forEach(function (item) {
    result += +item; // +item -> Number(item) - приведение типа к числу
  })
  return result;
}

var result = sum(m, n);
// console.log(result);
console.log("Как было запущено приложение: ", process.argv);

console.log("Результат сложения аргументов: ", sumArgs());


