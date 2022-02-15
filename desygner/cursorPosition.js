const getRelativeCursorPosition = (textArrays, currentCursorPosition) => {
    let total = 0;
    let lineIndex;
    let relativeCursorPosition;
    for (let i = 0; i < textArrays.length; i++) {
        total += textArrays[i];
        if (total > currentCursorPosition) {
        lineIndex = i;
        relativeCursorPosition = currentCursorPosition - (total - textArrays[i]);
        break;
        }
    }
    return [lineIndex, relativeCursorPosition];
};

const getAbsoluteCursorPosition = (textArrays, lineIndex, relativeCursorPosition) => {
	let absoluteCursorPosition = 0;
	for (let i = 0; i < lineIndex; i++) {
		absoluteCursorPosition += textArrays[i];
	}
	absoluteCursorPosition += relativeCursorPosition;
	return absoluteCursorPosition;
}

let textArrays = [5, 8, 4];
let currentCursorPosition = 14;

let result = getRelativeCursorPosition(textArrays, currentCursorPosition);
let lineIndex = result[0];
let relativeCursorPosition = result[1];

console.log(getAbsoluteCursorPosition(textArrays, lineIndex, relativeCursorPosition));