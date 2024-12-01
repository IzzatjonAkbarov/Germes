// task1_________________________________1
// let str = "JavaScriptIsAmazing";
// let start = 4;
// let end = 14;
// let str2 = str.slice(start, end).toLowerCase();
// console.log(str2);
// task1_________________________________2
// let str = "   fidfvwfdwfvwnd space here   ";
// let str2 = str.trim();
// let sum = "";
// for (i = 0; i < str2.length; i++) {
//   if (str2[i] == " ") {
//     sum += i + " ";
//   }
// }
// console.log(sum);

// task1_________________________________3
// let str = "apple123banana456orange789";
// let allowed = "abcdefghijklmnopqrstuvdxyz";
// let result = "";
// for (i = 0; i < str.length; i++) {
//   // console.log(str[i]);
//   for (j = 0; j < allowed.length; j++) {
//     // console.log(allowed[j]);
//     if (str[i] == allowed[j]) {
//       result += str[i];
//     }
//   }
// }
// console.log(result);
// task1_________________________________4 vaqtim yetmadi ustoz ishlab tashab qoyaman

// let str = "apple orange apple banana orange ";
// let str2 = str.trim().split(" ");
// let res = "";
// for (i = 0; i < str2.length; i++) {
//   for (j = 0; j < str2.length; j++) {
//     if (str2[i] == str2[j]) {
//       res += str2[i];
//     }
//   }
// }
// console.log(res);
