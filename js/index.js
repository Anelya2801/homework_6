// ex-1

// const celsiusInput = prompt("Введите температуру в градусах Цельсия:");
// const result = convertToFar(parseFloat(celsiusInput));
// function convertToFar(celsius) {
//     return (celsius * 9 / 5) + 32;
//   }
// console.log("Температура в фаренгейтах: " + result);
  

// ex-2

// function numberOfValidator() {
//     const userInput = prompt("Введите целое число");
//     if (userInput === null) {
//         return "Вы нажали \"Отмена\"";
//     } else if (isNaN(userInput)) {
//         return "Вы ввели не число";
//     } else if (userInput > 0) {
//         return "Вы ввели положительное число";
//     } else if (userInput < 0) {
//         return "Вы ввели отрицательное число";
//     } else {
//         return "Вы ввели ноль";
//     }
// }

// alert(numberOfValidator());


// ex-3
// function multiply(num1, num2) {
//     if (num1 && num2) {
//         let result = 0;
//         for (let i = 0; i < num2; i++) {
//             result += num1;
//       }
//       return result;
//     } else {
//         return "Оба параметра обязательны";
//     }
// }
  
// console.log(multiply(2, 5)); // 10
// console.log(multiply(3, 3)); // 9
// console.log(multiply(10, 12)); // 120
// console.log(multiply(4)); // "Оба параметра обязательны"


// ex-4
// const mathInput = parseFloat(prompt("Введите число:"));
// const powInput = parseFloat(prompt("Введите степень:"));
// function power(pow, math) {
//     math = math || 2; 
//     let result = 1;
//     for (let i = 0; i < pow; i++) {
//         result *= math;
//     }
//     return result;
// }
// console.log(power(powInput, mathInput));


// ex-5
// function countChars(char, str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countChars('b', 'bbbbb'));          // 5
// console.log(countChars('s', 'mississippi'));    // 4
// console.log(countChars('w', 'hello'));          // 0
// console.log(countChars('B', 'book'));           // 0


// ex-6
// function calculateAverage(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     return sum / array.length;
// }
// var southData = [13, 15, 19, 26, 21, 22, 23];
// var westData = [15, 14, 16, 18, 17, 24, 25];
// var eastData = [20, 17, 19, 15, 24, 25, 26];
// var northData = [19, 18, 23, 20, 23, 19, 31];
// var allData = southData.concat(westData, eastData, northData);
// var averageTemperature = calculateAverage(allData);
// console.log("Средняя температура: " + averageTemperature);


// ex-7

// function isPalindrome(str) {
//     str = str.toLowerCase().replace(/\s/g, '');
//     let left = 0;
//     let right = str.length - 1;
//     while (left < right) {
//         if (str[left] !== str[right]) {
//             return false;
//         }
//         left++;
//         right--;
//     }
//     return true;
// }
// console.log(isPalindrome("топот")); // true
// console.log(isPalindrome("анна"));  // true
// console.log(isPalindrome("hello")); // false
// console.log(isPalindrome("Ollo"));  // true

// ex-8

// function generateRandomPassword(length) {
//     const alf = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//     let password = "";
//     for (let i = 0; i < length; i++) {
//         const randomIndex = Math.floor(Math.random() * alf.length);
//         password += alf[randomIndex];
//     }
//     return password;
// }
// const passwordLength = 8;
// const randomPassword = generateRandomPassword(passwordLength);
// console.log(randomPassword);


// ex - 9
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}
const number = 5;
const result = factorial(number);
console.log("Факториал", number, "равен", result);
