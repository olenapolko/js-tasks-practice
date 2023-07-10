// Task 1
function findDifference(arr) {
    if (!Array.isArray(arr)) return "The function accepts only arrays.";
    if (arr.some((element) => isNaN(element))) return "All elements of the array should be numbers.";
    if (arr.length < 2) return 0;
    const sortedArr = [...arr].sort((a, b) => a - b);
    return sortedArr[sortedArr.length - 1] - sortedArr[0];
}

// console.log(findDifference([1, 2, 3, -4]));
// console.log(findDifference([16]));

// ____________________________________________________________________________________________________

// Task 2
function filterWordsByLength(str, num) {
    if (typeof str !== "string" || typeof num !== "number") {
        return "Incorrect type of data";
    }

    return str.split(/\W+/).filter((word) => word.length > num);
}

// console.log(filterWordsByLength('The sun sets in a blaze of colors over the horizon.', 5));
// console.log(filterWordsByLength(8, 7));

// ____________________________________________________________________________________________________

// Task 3
function doesFunctionEndWith(str, strEnd) {
    if (typeof str !== "string" && typeof strEnd !== "string") {
        return "Please, enter a string";
    }

    return str.endsWith(strEnd);
}

// console.log(doesFunctionEndWith('Lorem ipsum dolor sit amet consectetur adipisicing elit', 'elit'));
// console.log(doesFunctionEndWith(4, 5));

// ____________________________________________________________________________________________________

// Task 4
// Option 1
function findAverageValues(arr) {
    if (!Array.isArray(arr) || arr.length < 2) {
        return "The function accepts only arrays with length bigger than 2.";
    }

    const result = arr.reduce((averageValues, currValue, index) => {
        if (index < arr.length - 1) {
            averageValues.push((currValue + arr[index + 1]) / 2);
        }
        return averageValues;
    }, []);

    return result;
}

// console.log(findAverageValues([2, -2, 2, -2, 2]));
// console.log(findAverageValues([1, 3, 5, 1, -10]));

// Option 2
function findAverageValues2(arr) {
    if (!Array.isArray(arr) || arr.length < 2) {
        return "The function accepts only arrays with length bigger than 2.";
    }

    const averageValues = [];

    for (let i = 0; i < arr.length - 1; i++) {
        averageValues.push((arr[i] + arr[i + 1]) / 2);
    }

    return averageValues;
}

// console.log(findAverageValues2([2, -2, 2, -2, 2]));
// console.log(findAverageValues2([1, 3, 5, 1, -10]));

// ____________________________________________________________________________________________________

// Task 5
// Option 1 (with regular expression)
function countVowels(str) {
    if (!typeof str === "string") return "Invalid data type";
    const vowels = /[aeiou]/gi;
    return str.match(vowels) ? str.match(vowels).length : 0;
}

// console.log(countVowels('Celebration'));
// console.log(countVowels('Palm'));

// Option 2 (without regular expression)
function countVowels2(str) {
    if (!typeof str === "string") return "Invalid data type";

    const vowels = ["a", "e", "i", "o", "u"];
    const strLower = str.toLowerCase();
    let count = 0;

    for (let i = 0; i < strLower.length; i++) {
        if (vowels.includes(strLower[i])) {
            count++;
        }
    }

    return count;
}

// console.log(countVowels2('Celebration'));
// console.log(countVowels2('Palm'));

// ____________________________________________________________________________________________________

//Task 5.2
//Option 1
function removeABC(str) {
    if (typeof str !== "string") return "Invalid data type";
    const modifiedStr = str.replace(/[abc]/gi, "");
    return modifiedStr !== str ? modifiedStr : null;
}

//Option 2
const RemoveABC2 = (str) => typeof str === "string" ? str.replace(/[abc]/gi, "") !== str ? str.replace(/[abc]/gi, "") : null : "Invalid data type";

// console.log(removeABC("This might be a bit hard"));
// console.log(removeABC("hello world!"));

// ____________________________________________________________________________________________________

// Task 6
// Option 1
function findUniqueElements(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) return "Function accepts only arrays.";
    const uniqueElements = arr1.concat(arr2).sort((a, b) => a - b).filter((elem, index, arr) => {
        return arr.indexOf(elem) === index;
    });

    return uniqueElements;
}

// console.log(findUniqueElements([1, 2, 3], [100, 2, 1, 10]));

// Option 2
function findUniqueElements2(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) return "Function accepts only arrays.";

    const combinedSortedArr = arr1.concat(arr2).sort((a, b) => a - b);
    const uniqueElements = [];

    for (let i = 0; i < combinedSortedArr.length; i++) {
        if (uniqueElements.indexOf(combinedSortedArr[i]) === -1) {
            uniqueElements.push(combinedSortedArr[i]);
        }
    }

    return uniqueElements;
}

// console.log(findUniqueElements2([1, 2, 3], [100, 2, 1, 10]));

// ____________________________________________________________________________________________________

//Task 7
function swapKeysAndValues(obj) {
    if (typeof obj !== "object" || obj === null || Array.isArray(obj)) return "Invalid data type";
    return Object.fromEntries(Object.entries(obj).map(([key, value]) => [value, key]));
}

// console.log(swapKeysAndValues({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));

// ____________________________________________________________________________________________________

// Task 8
function calculateDifference(items, insurance) {
    if (typeof items !== "object" || items === null || Array.isArray(items) || typeof insurance !== "number") {
        return "Invalid input: The first parameter must be an object and the second one - a number.";
    }

    const totalValue = Object.values(items).reduce((acc, curr) => acc + curr, 0);
    return totalValue <= insurance ? "The sum of item values must be greater than the insurance limit." : totalValue - insurance;
}

// console.log(calculateDifference({ "baseball bat": 20 }, 5));
// console.log(calculateDifference({ skate: 10, painting: 20 }, 19));
// console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400));

// ____________________________________________________________________________________________________

//Task 9
function doesBrickFit(a, b, c, w, h) {
    if ([...arguments].some((item) => item <= 0 || typeof item !== "number")) return "Function accepts only positive numbers";
    if ((a <= w && b <= h) || (a <= h && b <= w)) return true;
    if ((a <= w && c <= h) || (a <= h && c <= w)) return true;
    if ((b <= w && c <= h) || (b <= h && c <= w)) return true;

    return false;
}

// console.log(doesBrickFit(1, 1, 1, 1, 1));
// console.log(doesBrickFit(1, 2, 1, 1, 1));
// console.log(doesBrickFit(1, 2, 2, 1, 1));

// ____________________________________________________________________________________________________

// Task 10
// Option 1 (with regular expression)
const extractFileName = (filePath) => {
    if (!filePath || typeof filePath !== "string") return "Function accepts only valid string paths";
    return filePath.match(/[^\\/]*(?=\.[^.]+$)/)[0];
};

// console.log(extractFileName('c:\\WebServers\\home\\testsite\\www\\myfile.txt'));

// Option 2 (without regular expression)
function extractFileName2(filePath) {
    if (!filePath || typeof filePath !== "string") return "Function accepts only valid string paths";
    const splittedBySlashes = filePath.split("\\");
    const result = splittedBySlashes[splittedBySlashes.length - 1].split(".")[0];

    return result;
}

// console.log(extractFileName2('c:\\WebServers\\home\\testsite\\www\\myfile.txt'));

// ____________________________________________________________________________________________________

// Task 11
function isCyclicShiftPossible(str1, str2) {
    if (typeof str1 !== "string" || typeof str2 !== "string") return "Incorrect data";
    if (str1.length !== str2.length) return false;

    for (let i = 0; i < str1.length; i++) {
        str2 = str2.slice(1) + str2[0];
        if (str2 === str1) return true;
    }

    return false;
}

// console.log(isCyclicShiftPossible('pigeon', 'geonpi'));
// console.log(isCyclicShiftPossible('watermelon', 'onmelwater'));

// ____________________________________________________________________________________________________

// Task 12
function sortIntoTwoArrays(arr) {
    if (!Array.isArray(arr)) return "The function accepts only arrays.";

    const b = [];
    const c = [];

    while (arr.length > 0) {
        const sortedArr = arr.sort((a, b) => a - b);
        const elemDiffs = sortedArr.slice(1).map((el, index) => Math.abs(el - arr[index]));
        const smallestDiffIndex = elemDiffs.indexOf(Math.min(...elemDiffs));

        if (arr[smallestDiffIndex] > arr[smallestDiffIndex + 1]) {
            b.push(arr[smallestDiffIndex + 1]);
            c.push(arr[smallestDiffIndex]);
        } else {
            b.push(arr[smallestDiffIndex]);
            c.push(arr[smallestDiffIndex + 1]);
        }

        arr.splice(smallestDiffIndex, 2);
    }

    return { b, c };
}

// console.log(sortIntoTwoArrays([1, 3, 5, 8, 9, 15, 20, 26])); //-----> b: [8, 1, 15, 5]; c: [9, 3, 20, 26]
// console.log(sortIntoTwoArrays([]));  //-----> b: []; c: []

// ____________________________________________________________________________________________________

// Task 13
function formatLine(str) {
    if (typeof str !== "string") return "The function accepts only strings";
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const emailRegex = /\S+@\S+\.\S+/g;
    const digitsRegex = /\d{4,}/g;

    let modifiedStr = str.replace(urlRegex, "[посилання заборонено]").replace(emailRegex, "[контакти заборонені]").replace(digitsRegex, "");

    let result = modifiedStr.slice(0, 1).toUpperCase() + modifiedStr.slice(1);

    if (result.length > str.length) {
        setInterval(() => alert("Do you need help?"), 5000);
    }

    return result;
}

// console.log(formatLine("to get more info please visit https://animalslover@gmail.com, email me at animalslover@gmail.com or contact me by 380333333333 any time."));

// ____________________________________________________________________________________________________

// Task 14
// Option 1 (Parentheses)
const checkParenthesesBalance = (text) => {
    if (typeof text !== "string" || text.length < 2) return "Function accepts only strings with at least 2 symbols. ";
    const parentheses = [];

    for (let i = 0; i < text.length; i++) {
        if (text[i] === "(") parentheses.push("(");
        else if (text[i] === ")" && !parentheses.pop()) return false;
    }

    return parentheses.length === 0;
};

// console.log(checkParenthesesBalance('Lorem ipsum dolor (sit) amet (consectetur) adipisicing elit.'));
// console.log(checkParenthesesBalance('(('));

// Option 2 (All brackets)
const checkBracketsBalance = (text) => {
    if (typeof text !== "string" || text.length < 2) return "Function accepts only strings with at least 2 symbols. ";

    const openingBrackets = ["(", "[", "{", "<"];
    const closingBrackets = [")", "]", "}", ">"];

    const parentheses = [];

    for (let i = 0; i < text.length; i++) {
        if (openingBrackets.includes(text[i])) {
            parentheses.push(text[i]);
        } else if (closingBrackets.includes(text[i])) {
            const lastOpeningBracket = parentheses.pop();
            const correspondingOpeningBracket = openingBrackets[closingBrackets.indexOf(text[i])];
            if (lastOpeningBracket !== correspondingOpeningBracket) {
                return false;
            }
        }
    }

    return parentheses.length === 0;
};

// console.log(checkBracketsBalance('Lorem {ipsum} dolor [sit] amet (consectetur) adipisicing <elit>.'));
// console.log(checkBracketsBalance('Lorem} ipsum dolor (sit)) amet (consectetur) adipisicing elit.'));
// console.log(checkBracketsBalance('{}'));

document.querySelector("#my-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const inputValue = document.querySelector("#input").value;
    const resultParagraph = document.querySelector("#output");
    const isUserInputValid = checkBracketsBalance(inputValue);

    if (isUserInputValid) {
        resultParagraph.innerHTML += inputValue;
        resultParagraph.addEventListener("copy", (e) => {
            e.preventDefault();
        });
        window.oncontextmenu = () => false;
        window.onkeydown = () => false;
    }
});

// ____________________________________________________________________________________________________

// Task 15
const generatePassword = () => {
    const allCharacters = "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
    const uppercaseCharacters = allCharacters.match(/[A-Z]/);
    const minLength = 6;
    const maxLength = 20;
    const underscoresQuantity = 1;
    const capitalsQuantity = 2;
    const maxNumbersQuantity = 5;

    const passwordLength = Math.floor(
        Math.random() * (maxLength - minLength + 1) + minLength
    );
    let result = "";
    let currentNumberQuantity = 0;

    for (let i = 0; i < passwordLength - 1; i++) {
        const randomSymbol = allCharacters[Math.floor(Math.random() * allCharacters.length)];

        if (+randomSymbol && +result[i - 1]) continue;
        if (+randomSymbol && currentNumberQuantity < maxNumbersQuantity)++currentNumberQuantity;
        if (+randomSymbol && currentNumberQuantity > maxNumbersQuantity) continue;

        result += randomSymbol;
    }

    for (let i = 0; i < underscoresQuantity; i++) {
        const underlineIndex = Math.floor(Math.random() * result.length);
        result = result.slice(0, underlineIndex) + "_" + result.slice(underlineIndex);
    }

    while (!result.match(/[A-Z]/g) || result.match(/[A-Z]/g).length < capitalsQuantity) {
        const randomIndex = Math.floor(Math.random() * uppercaseCharacters.length);
        const randomCharacter = uppercaseCharacters[randomIndex];
        result = result.replace(/[a-z]/, randomCharacter);
    }

    return result;
};

// console.log(generatePassword());

// ____________________________________________________________________________________________________

// Task 16
const reorderArr = (arr) => {
    if (!Array.isArray(arr) || arr.length < 2) {
        return "The function should take only arrays with the lenght no less then 2";
    }

    const sortedArr = [...arr].sort((a, b) => a - b);
    const res = new Array(sortedArr.length);

    for (let i = 0, j = arr.length - 1; i < arr.length; i++) {
        res[i % 2 === 0 ? i / 2 : j--] = sortedArr[i];
    }

    return res;
};

const myArr = [6, 2, 1, 8, 9];
// console.log(reorderArr(myArr));

// ____________________________________________________________________________________________________

// Task 17
function sortStringByFrequency(str) {
    const charCount = {};
    let lowerStr = str.toLowerCase();

    for (let char of lowerStr) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    const sortedChars = Object.keys(charCount).sort((a, b) => charCount[b] - charCount[a]);
    let sortedString = "";

    for (let char of sortedChars) {
        sortedString += char.repeat(charCount[char]);
    }

    return sortedString;
}

// console.log(sortStringByFrequency('Abracadabra'));

// ____________________________________________________________________________________________________

// Task 18
const findLongestCommonSubstring = (str1, str2) => {
    if (typeof str1 !== "string" || typeof str2 !== "string") return "Incorrect data";
    if (str1.length === 0 || str2.length === 0) return "";

    const matrix = Array(str2.length + 1).fill(0).map(() => Array(str1.length + 1).fill(0));
    let maxLength = 0;
    let result = "";

    for (let i = 1; i <= str2.length; i++) {
        for (let j = 1; j <= str1.length; j++) {
            if (str1.charAt(j - 1) === str2.charAt(i - 1) && str1.charAt(j - 1) !== " ") {
                matrix[i][j] = matrix[i - 1][j - 1] + 1;
                if (matrix[i][j] > maxLength) {
                    maxLength = matrix[i][j];
                    result = str1.slice(j - maxLength, j);
                }
            } else {
                matrix[i][j] = 0;
            }
        }
    }

    return result;
};

// console.log(findLongestCommonSubstring('MAN YONER', 'SINYONERAL'));

// ____________________________________________________________________________________________________

// Task 19
const transformToCaesarCipher = (str, number) => {
    if (typeof str !== "string" || isNaN(number)) {
        return "The function must accept a string as the first parameter and a number as the second.";
    }

    const ukrainianAlphabet = "абвгґдеєжзиіїйклмнопрстуфхцчшщьюя";
    const englishAlphabet = "abcdefghijklmnopqrstuvwxyz";

    const alphabet = ukrainianAlphabet + ukrainianAlphabet.toUpperCase() + englishAlphabet + englishAlphabet.toUpperCase();

    return str.split("").reduce((acc, item) => {
        if (!alphabet.includes(item)) {
            return acc + item;
        }

        const charIndex = alphabet.indexOf(item);
        const newIndex = (charIndex + number) % alphabet.length;
        const encryptedChar = alphabet[newIndex];

        return acc + encryptedChar;
    }, "");
};

// console.log(transformToCaesarCipher("The quick brown fox jumps over the lazy dog", 3));
// console.log(transformToCaesarCipher("Швидка коричнева лисиця скаче через пса", 3)); // :))

// ____________________________________________________________________________________________________

// Task 20
function areAnagrams(stringOne, stringTwo) {
    if (typeof stringOne !== "string" || typeof stringTwo !== "string") return "Function must accept only strings";
    if (stringOne.length !== stringTwo.length) return false;
    let resOne = stringOne.toLowerCase().split("").sort().join("");
    let resTwo = stringTwo.toLowerCase().split("").sort().join("");
    return resOne === resTwo ? true : false;
}

// console.log(areAnagrams('plaYers', 'Parsley'));
// console.log(areAnagrams('apPle', 'cucumber'));

// ____________________________________________________________________________________________________

//Task 21
//Option 1
class University {
    constructor() {
        this.students = [];
    }

    addStudent(studentId, name, faculty, course) {
        const student = { studentId, name, faculty, course };
        this.students.push(student);
    }

    removeStudent(studentId) {
        this.students = this.students.filter((student) => student.studentId !== studentId);
    }

    getStudentById(studentId) {
        return this.students.find((student) => student.studentId === studentId);
    }

    getStudentsByCourse(course) {
        return this.students.filter((student) => student.course === course);
    }

    getStudentsByFaculty(faculty) {
        return this.students.filter((student) => student.faculty === faculty);
    }
}

const university = new University();

// university.addStudent(1, "JLeanne Graham", "Computer Science", "Practical React");
// university.addStudent(2, "Clementine Bauch", "Applied Mathematics", "Advanced Python");
// university.addStudent(3, "Ervin Howell", "Computer Science", "Practical React");
// university.addStudent(4, "Chelsey Dietrich", "Applied Mathematics", "Devops fundamentals");

// console.log(university.students);
// console.log(university.getStudentById(2));
// console.log(university.getStudentsByCourse("Practical React"));
// console.log(university.getStudentsByFaculty("Computer Science"));

//Option 2
const uni = {
    students: [],

    addStudent(studentId, name, faculty, course) {
        const student = { studentId, name, faculty, course };
        this.students.push(student);
    },

    removeStudent(studentId) {
        this.students = this.students.filter((student) => student.studentId !== studentId);
    },

    getStudentById(studentId) {
        return this.students.find((student) => student.studentId === studentId);
    },

    getStudentsByCourse(course) {
        return this.students.filter((student) => student.course === course);
    },

    getStudentsByFaculty(faculty) {
        return this.students.filter((student) => student.faculty === faculty);
    }
}

// uni.addStudent(1, "JLeanne Graham", "Computer Science", "Practical React");
// uni.addStudent(2, "Clementine Bauch", "Applied Mathematics", "Advanced Python");
// uni.addStudent(3, "Ervin Howell", "Computer Science", "Practical React");
// uni.addStudent(4, "Chelsey Dietrich", "Applied Mathematics", "Devops fundamentals");

// console.log(uni.students);
// console.log(uni.getStudentById(2));
// console.log(uni.getStudentsByCourse("Practical React"));
// console.log(uni.getStudentsByFaculty("Computer Science"));
// uni.removeStudent(2)
// console.log(uni.students);

// ____________________________________________________________________________________________________

// Task 22
function analyzeText(text) {
    if (typeof text !== "string") {
        return "The function accepts only strings";
    }

    let result = {
        statistics: {},
        frequentWords: [],
    };

    const words = text.toLowerCase().match(/\b(?![\d~`!@#$%^&*()_+-={}[\]|:;'"<>?])\w+\b/g);

    const wordsAmount = words ? words.length : 0;
    const sentencesAmount = text.split(/[.!?]+/).length - 1;
    const charactersAmount = text.replace(/\s/g, "").length;

    result.statistics.numberOfWords = wordsAmount;
    result.statistics.numberOfSentences = sentencesAmount;
    result.statistics.numberOfCharacters = charactersAmount;

    const wordCount = {};

    words?.forEach((word) => {
        wordCount[word] = (wordCount[word] || 0) + 1;
    });

    const sortedWords = Object.entries(wordCount).sort((a, b) => b[1] - a[1]);
    const frequentWords = sortedWords.slice(0, 3).map(([word, count]) => ({ word, occurrences: count }));

    result.frequentWords = frequentWords.length > 0 ? frequentWords : [];

    return result;
}

// console.log(analyzeText("If you tame me, then we shall need each other. To me, you will be unique in all the world. To you, I shall be unique in all the world."));
// console.log(analyzeText(''));

