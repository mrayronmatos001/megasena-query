const form = document.querySelector("form");
const input = document.querySelector("input");
const result = document.querySelector(".result");

Nums = [
    [1, 8, 18, 41, 42, 53, 59, 60],
    [6, 11, 31, 36, 37, 41, 53, 55],
    [16, 17, 22, 29, 30, 43, 53, 55],
    [2, 5, 11, 26, 31, 32, 55, 57],
    [15, 25, 32, 37, 38, 43, 52, 54],
    [20, 23, 28, 37, 41, 50, 52, 58],
    [4, 23, 31, 37, 54, 55, 59, 60],
    [13, 23, 28, 31, 32, 47, 53, 60],
    [6, 16, 30, 34, 40, 46, 50, 58],
    [4, 11, 12, 28, 38, 43, 47, 50],
    [5, 13, 26, 28, 32, 33, 39, 51],
    [7, 8, 15, 19, 22, 24, 27, 45],
    [1, 4, 5, 9, 13, 18, 24, 30],
    [8, 20, 21, 27, 36, 37, 45, 56],
    [1, 8, 18, 24, 36, 48, 53, 55],
    [2, 6, 13, 21, 46, 54, 58, 59],
    [5, 24, 27, 29, 31, 35, 37, 54],
    [2, 3, 15, 30, 33, 34, 49, 52],
    [10, 12, 39, 47, 51, 52, 55, 57],
    [9, 24, 32, 40, 41, 47, 53, 57],
    [1, 8, 14, 25, 28, 50, 54, 56],
    [4, 10, 11, 31, 35, 40, 43, 57],
    [4, 5, 18, 23, 25, 40, 51, 60],
    [7, 10, 20, 27, 37, 41, 42, 58],
    [2, 7, 13, 17, 26, 46, 56, 58],
    [14, 17, 26, 37, 41, 43, 48, 57],
    [6, 9, 18, 19, 29, 39, 45, 59],
    [6, 24, 27, 30, 32, 33, 59, 60],
    [7, 10, 15, 45, 48, 51, 55, 60],
    [13, 33, 34, 35, 37, 38, 49, 52],
    [3, 4, 15, 23, 24, 47, 48, 53],
    [6, 26, 31, 34, 39, 45, 50, 59],
    [16, 24, 25, 37, 40, 46, 53, 54],
    [16, 19, 23, 24, 25, 32, 44, 55],
    [8, 12, 15, 36, 39, 53, 58, 60],
    [16, 17, 18, 28, 35, 38, 52, 56],
    [7, 12, 13, 25, 31, 32, 41, 49],
    [1, 11, 31, 35, 37, 48, 49, 50],
    [9, 16, 25, 35, 39, 43, 51, 53],
    [12, 18, 19, 24, 43, 46, 51, 53],
    [4, 11, 28, 32, 39, 46, 51, 59],
    [2, 15, 21, 30, 36, 42, 38, 55],
    [3, 18, 25, 31, 37, 44, 50, 58],
    [1, 6, 9, 12, 16, 26, 48, 60],
    [7, 9, 26, 38, 44, 47, 52, 54],
    [3, 10, 14, 19, 28, 29, 41, 56],
    [16, 17, 23, 30, 36, 38],
    [5, 7, 22, 33, 38, 42],
    [3, 4, 7, 12, 37, 42],
    [26, 36, 37, 40, 44, 54],
    [23, 26, 37, 43, 47, 48],
    [3, 30, 32, 44, 45, 60],
    [10, 22, 38, 39, 41, 49],
    [3, 19, 20, 21, 40, 48],
    [4, 5, 8, 27, 28, 59],
    [5, 9, 17, 54, 55, 57],
    [4, 6, 15, 24, 28, 29],
    [11, 15, 28, 43, 44, 55],
    [9, 20, 29, 32, 33, 46],
    [13, 19, 33, 37, 51, 57],
    [10, 14, 35, 42, 48, 53],
    [2, 13, 27, 31, 36, 44],
    [17, 27, 33, 44, 49, 56],
    [3, 11, 29, 35, 46, 58],
    [14, 17, 35, 40, 52, 55],
    [9, 15, 32, 43, 48, 52],
    [11, 21, 28, 37, 51, 55],
    [10, 17, 29, 32, 46, 48],
    [3, 7, 12, 18, 28, 52],
    [8, 14, 26, 35, 54, 58],
    [11, 19, 21, 22, 1, 7],
    [5, 10, 22, 28, 43, 49],
    [12, 19, 20, 37, 44, 58],
    [1, 9, 22, 27, 35, 38],
    [7, 17, 19, 35, 36, 45],
    [3, 17, 18, 31, 45, 59],
    [9, 11, 25, 45, 46, 53],
    [1, 15, 28, 33, 35, 58],
    [12, 15, 20, 43, 52, 53],
    [10, 12, 21, 25, 37, 43],
    [3, 11, 13, 27, 29, 40],
    [2, 3, 6, 10, 11, 28],
    [6, 11, 18, 23, 28, 32],
    [11, 6, 16, 18, 28, 23],
    [5, 12, 23, 34, 41, 53],
    [9, 15, 27, 33, 42, 56],
    [1, 19, 25, 37, 44, 50],
    [3, 16, 28, 35, 48, 54],
    [7, 10, 23, 28, 33, 57],
    [7, 15, 23, 36, 42, 58],
    [5, 8, 21, 39, 44, 53],
    [5, 17, 21, 30, 32, 46],
    [5, 10, 23, 34, 37, 53],
    [6, 8, 14, 32, 34, 51],
    [3, 11, 29, 32, 47, 51],
    [4, 9, 22, 34, 36, 51],
    [3, 9, 12, 25, 31, 49],
    [1, 6, 12, 16, 26, 48],
    [3, 7, 15, 26, 38, 42],
    [4, 14, 29, 5, 31, 36],
    [3, 16, 28, 42, 44, 53],
    [1, 7, 14, 21, 28, 29]
]

form.onsubmit = e => {
    e.preventDefault();
    const inputNumStr = input.value.split(" ");
    const prizeNums = inputNumStr.map(num => Number(num));
    let nearbyNums = [];
    let maxLength = 0;
    result.innerHTML = '';
    
    Nums.forEach(sequence => {
        const commonNumbers = prizeNums.filter(num => sequence.includes(num));
        
        if (maxLength < commonNumbers.length) {
            maxLength = commonNumbers.length;
            nearbyNums = [];
        }

        if(commonNumbers.length === maxLength) {
            nearbyNums.push([sequence, commonNumbers]);
        }
    });

    nearbyNums.forEach(megasenaNums => {
        const p = document.createElement("p");
        megasenaNums[0].forEach(num => {
            if (megasenaNums[1].includes(num)) {
                p.innerHTML += `<strong>${num}</strong> `;
            } else {
                p.innerHTML += `${num} `;
            }
        })
        result.append(p);
    });
}