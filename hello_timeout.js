// Instead of printing the entire sentence together, have our code print out each of the three words one at a time, 1 second apart.

const helloArray = ["4311o", "th3r3", "w0r1d"];

for (let i = 0; i < helloArray.length; i++) {
  setTimeout(() => {
    console.log(helloArray[i]);
  }, (i + 1) * 1000);
}