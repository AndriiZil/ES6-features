function averageOf(...numbers) {
    let sum = 0;

    for (let number of numbers) {
        sum += number;
    }

    return sum / numbers.length;
}

let average = averageOf(5, 6, 2, 1);

console.log(average); // 3.5