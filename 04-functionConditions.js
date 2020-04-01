// Create a function that takes in one argument that is passed through
// a conditional statement. (For example, something like our haunted
// house door() function.) Print some resulting text to the console. Test all
// of your conditions to make sure you can receive all of your results back.

function stream(num) {
  if (num == 1){
    return "Netflix";
  } else if (num == 2) {
    return "Hulu";
  } else if (num == 3) {
    return "Youtube"
  } else if (num ==  4) {
    return "Disney+";
  } else if (num == 5) {
    return "HBO";
  } else if (num == 6) {
    return "Amazon Prime Video";
  } else {
  return "Pick a number between 1-6"};
}

console.log(stream(1));
console.log(stream(2));
console.log(stream(3));
console.log(stream(4));
console.log(stream(5));
console.log(stream(6));
console.log(stream(7));
