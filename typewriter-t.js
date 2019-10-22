const sentence = "hello ted and colin";

// for (const char of sentence) {
//   setTimeout(() => {
//     process.stdout.write(char);
// }, timer += 50)};

// if (timer === sentence.length * 50) {
//   setTimeout(() => {
//     process.stdout.write('\n');
//   }, timer)
// }

const test2 = function(string) {
  let timer = 0;
  for (let i = 0; i < string.length; i++) {
    setTimeout(() => {
      process.stdout.write(string[i]);
      if(i === string.length - 1) {
        process.stdout.write('\n');
      }
  }, timer += 50)};
  
}

test2(sentence);