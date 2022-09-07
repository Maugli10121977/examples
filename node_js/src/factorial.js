let num = Number(process.argv[2]);

function factorial(num) {
  let count = 0;
  let result = 1;
  while (count < num) {
    result = result + (result * count);
    count += 1;
  } //while (count < num)
  return result;
} //function factorial(num)

function help() {
  return `Этот скрипт нужно запускать с аргументом в виде целого положительного числа (но не 1).`;
} //function help()

result = factorial(num);

if (result.valueOf() === (1 || NaN)) {
  console.log(help());
} else {
  console.log(result);
}
