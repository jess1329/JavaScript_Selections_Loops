console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

let num = 1;

while (num <= 100) {
  if (num % 2 == 0) {
      num++;
      continue;
}
console.log(num);
num++;

}

let num = 1;

do {
    if (num % 2 == 1) {
        console.log(num)
    }
    num++;
} while (num <= 100);

let stops = [2, 3, 4, 7, 8, 9];

for (let floor = 1; floor <= totalFloors; floor++){
    if (stops.includes(floor)) {
        console.log('Stopped at floor $(floor),');
    }
    if (stops.indexOf(floor) == stops.length - 1) {
        break;
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for(let i = 1; i <= 100; i++) {
  if (i % 3 == 0 &&  i % 5 == 0) {
      console.log('${i} FIZZBUZZ');
  } else if (i % 5 == 0) {
      console.log('${i} BUZZ');
  } else if (i % 3 == 0) {
      console.log('${i} FIZZ');
  } else {
      console.log(i);

      }
  }





}
