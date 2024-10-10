function sortNumbers(order) {
    const input = document.getElementById('numbers').value;
    const resultElement = document.getElementById('sortedResult');

    if (!/^[0-9,\s]+$/.test(input)) {
        resultElement.textContent = "please enter the numbers that is separated by commas.";
        return;
    }

    const numbersArray = input.split(',').map(Number);

    numbersArray.sort((a, b) => order === 'asc' ? a - b : b - a);

    resultElement.textContent = `Sorted Numbers (${order}): ${numbersArray.join(', ')}`;
}
