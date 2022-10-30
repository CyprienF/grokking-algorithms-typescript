let low: number;
let high: number;
let guess: number;
let mid: number;

const binarySearch = (item: number, numbers: number[]): number | null => {
	low = 0;
	high = numbers.length - 1;
	
	while (low <= high) {
		mid = Math.floor((low + high) / 2);
		guess = numbers[mid];
		
		if (guess === item) {
			return mid;
		}
		
		if (guess > item) {
			high = mid - 1;
		}
		
		if (guess < item) {
			low = mid + 1;
		}
	}
	
	return null;
};

console.log(binarySearch(56, [1, 3, 8, 9, 15, 24, 32, 56, 74]));
console.log(binarySearch(8, [1, 3, 8, 9, 15, 24, 32, 56, 74]));
console.log(binarySearch(10, [1, 3, 8, 9, 15, 24, 32, 56, 74]));
