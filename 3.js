let k = 3;
let n = 35;
let sum = 0;
let p = 1;
for (i = k; i <= n; i++) {
	if (i % 3 === 0) {
		sum += i;
	}
	if (i % 3 !== 0 && i % 7 === 0) {
		p = p * i;
	}
}
console.log(sum);
console.log(p);
