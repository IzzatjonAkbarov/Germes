// let str = "Hello WorlD";
// let all = "";
// for (i = 0; i < str.length; i++) {
//   finalresult = str[i];
//   if (finalresult == finalresult.toUpperCase()) {
//     all += finalresult.toLowerCase();
//   } else if (finalresult == finalresult.toLowerCase()) {
//     all += finalresult.toUpperCase();
//   } else {
//     console.log("errror");
//   }
// }
// console.log(all);

// ------------->

// --------------------------------------------------->
// let str = "apple banana apple banana".split(" ");
// word = "apple";
// count = 0;
// for (i = 0; i < str.length; i++) {
//   if (str[i] == word) {
//     count += 1;
//   }
// }
// console.log(count);
let words = "Lorem ipsum dolor";
let word = words.split(" ");
let word2 = "";
for (i = 0; i < word.length; i++) {
  word2 += " " + word[i].split("").reverse().join("");
}
console.log(word2);
