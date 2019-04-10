const functions= require('./functions')


test('addition on a range of numbers -10 to 10',()=>{
	for (let a = -10; a <= 10; a++) {
		for (let b = -10; b <= 10; b++) {
			expect(functions.add(a,b)).toBe(a+b);
		}
	}
});

test('subtraction on a range of numbers -10 to 10',()=>{
	for (let a = -10; a <= 10; a++) {
		for (let b = -10; b <= 10; b++) {
			expect(functions.subtract(a,b)).toBe(a-b);
		}
	}
});

test('multiplication on a range of numbers -10 to 10',()=>{
	for (let a = -10; a <= 10; a++) {
		for (let b = -10; b <= 10; b++) {
			expect(functions.multiply(a,b)).toBe(a*b);
		}
	}
});

test('integer division on a range of numbers -10 to 10',()=>{
	for (let a = -10; a <= 10; a++) {
		for (let b = -10; b <= 10; b++) {
			if (b === 0) {
				expect(functions.divide(a,b)).toBeUndefined();
			}
			else {
				expect(functions.divide(a,b)).toBe(a/b);
			}
		}
	}
});
