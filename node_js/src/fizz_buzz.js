let count = 1;
while (count <= 100) {
  if (count % 3 == 0 && count % 5 != 0) {
    console.log('Fizz');
  } else if (count % 5 == 0 && count % 3 != 0) {
      console.log('Buzz');
  } else if (count % 3 == 0 && count % 5 == 0) {
      console.log('FizzBuzz');
  } else {
      console.log(count);
  }
  count++
}
