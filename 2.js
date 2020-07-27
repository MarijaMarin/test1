{
	let n = 5;
	let red = '';
	for (i = 1; i <= n; i++) {
		str = ' '.repeat(n - i);
		str1 = '*'.repeat(i * 2 - 1);
		console.log(str + str1 + str);
	}
	st1 = '*'.repeat(n);
	st2 = ' ';
	let red1 = st1 + st2 + st1;
	console.log(red1);

	for (i = n; i <= n; i--) {
		str = ' '.repeat(n - i);
		str1 = '*'.repeat(i * 2 - 1);
		console.log(str + str1 + str);
	}
}
