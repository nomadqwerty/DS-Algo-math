let alpha = "abcdefghijklmnopqrstuvwxyz";
alpha = alpha.split("");
let s = "there-is-a-man";
s = s.split("");
let ind = [];
console.log(s);
for (let i = 0; i < s.length; i++) {
  if (alpha.includes(s[i])) {
    ind.push(alpha.indexOf(s[i]) + 3);
  }
}
// console.log(ind);

for (let i = 0; i < s.length; i++) {
  if (s[i] !== "-") {
    console.log(i);
    s[i] = alpha[ind[i]];
  }
}
console.log(s.join(""));
