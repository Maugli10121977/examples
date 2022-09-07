let size = Number(process.argv[2]);
if (size % 2 != 0) {
  size += 1;
}
let even_string = '';
let uneven_string = '';

while (even_string.length < size) {
  for (let count=0; count < size; count++) {
    if (count % 2 === 0) {
      even_string += '**';
      uneven_string += '##';
    } else if (count % 2 !== 0) {
        even_string += '##';
        uneven_string += '**';
    }
  }
}
for (let count=0; count < (size / 2); count++) {
  console.log(`${even_string}\n${uneven_string}`);
}
