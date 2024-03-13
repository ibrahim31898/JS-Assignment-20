// Questions PDF 14-20:
// Chapter 14 (If statements nested)
// 1.
var password = prompt("Enter your password:");
if (password !== "") { 
    if (password.length <= 5) { 
        alert("Password must be greater than 5"); 
    } else { 
        alert("OK"); 
    } 
}

// 2.
if (a === 1) { 
    if (c === "Max") { 
        alert("OK"); 
    } 
}

// 3.
if (a === 1 && c === "Max") { 
    alert("OK"); 
}

// 4.
var num1 = 5, num2 = 5;
if (num1 === num2 && num1 <= num2) { 
    alert("Equal"); 
}


// 1. 
var emptyArray = [];

// 2. 
var stringArray = ["hello"];

// 3. 
var alphabet = ["h", "i", "j", "k"];
alert(alphabet[2]);

// 4. 
var alphabetLength = ["h", "i", "j", "k", "l", "m", "n", "o"].length;

// 5. 
var singleElementArray = ["first element"];
singleElementArray[1] = "second element";
alert(singleElementArray[1]);


// Chapter 16 (Array II)

// 1.
var arrayWithOneElement = ["one element"];
arrayWithOneElement.push("second element");
alert(arrayWithOneElement[arrayWithOneElement.length - 1]);

// 2. 
var Alphabet = ["h", "i", "j", "k"];
Alphabet.pop();

// 3.
var Alphabet = ["h", "i", "j", "k"];
Alphabet.push(123);


// Chapter 16 (Array III):

// 1. 
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.shift();

// 2. 
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.unshift(1, 2, 3);

// 3. 
var oneElementArray = ["first element"];
oneElementArray.unshift("new first element");
alert(oneElementArray[0]);

// 4. 
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.splice(2, 0, "L");

// 5. 
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
var regSizes = sizes.slice(0, 3);

// 6. 
var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(pets.indexOf("dog") + 1, 0, "elephant", "lion");
pets.splice(pets.indexOf("cat"), 3);

// 7. 
var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(pets.indexOf("cat"), 2);

// 8. 
var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
var reducedPets = pets.slice(3, 5);


// Chapter 17 - 20 (for Loops):
// 1. 
for (var i = 0; i < 10; i++) {
    
}

// 2.
for (var i = 0; i <= 11; i++) {
    
}

// 3. Missing characters: ;<=++
for (var i = 0; i <= 4; i++)

// 4.
for (var j = 0; j < 100; j++) {
    
}

// 5. 
for (var i = 3; i > 0; i--) {
    
}

// 6.
var arrayLength = array.length;

// 7.
var flag = true;

// 8.
for (var i = 0; i < pets.length; i++) {
    
}

// 9.
for (var i = 1; i <= 10; i++) {
    if (i === 2) {
        alert("Counter is: " + i);
        break;
    }
}

// 10.
var userInput = prompt("Enter first name");
for (var i = 0; i < userNames.length; i++) {
    if (userNames[i] === userInput) {
        alert("Enter");
        break;
    } else {
        alert("Please write correct user name");
    }
}

// 11.
var matchFound = false;
for (var i = 0; i < list.length; i++) {
    if (userInput === list[i]) {
        alert("Match found");
        matchFound = true;
        break;
    }
}
if (!matchFound) {
    alert("Match not found");
}

// 12.
var firstArr = ["a", "b", "c", "d", "e", "f"];
var secondArr = [1, 2, 3, 4, 5, 6];
for (var i = 0; i < firstArr.length; i++) {
    for (var j = 0; j < secondArr.length; j++) {
        console.log(firstArr[i] + secondArr[j]);
    }
}


// Chapter 14-16 pdf:
// 1.
var studentsLiteral = [];

// 2. 
var studentsObject = new Array();

// 3. 
var stringsArray = ["string1", "string2", "string3"];

// 4. 
var numbersArray = [1, 2, 3, 4, 5];

// 5. 
var booleanArray = [true, false, true];

// 6. 
var mixedArray = ["string", 1, true];

// 7. 
var qualifications = [
    "SSC",
    "HSC",
    "BCS",
    "BS",
    "BCOM",
    "MS",
    "M. Phil.",
    "PhD"
];

document.write("<h2>Qualifications:</h2>");
document.write("<ol>");
for (var i = 0; i < qualifications.length; i++) {
    document.write("<li>" + qualifications[i] + "</li>");
}
document.write("</ol>");


// 8. 
var studentNames = ["Michael", "John", "Tony"];
var scores = [320, 230, 480];

for (var i = 0; i < studentNames.length; i++) {
    var percentage = (scores[i] / 500) * 100;
    document.write("Score of " + studentNames[i] + " is " + scores[i] + ". Percentage: " + percentage + "%<br>");
}


// 9. 
var colors = ["Red", "Green", "Blue"];
// a.
var new1 = prompt("Enter color to add to the beginning:");
colors.unshift(new1);
console.log(colors);
// b. 
var new2 = prompt("Enter color to add to the end:");
colors.push(new2);
console.log(colors);
// c. 
colors.unshift("Yellow", "Orange");
console.log(colors);
// d.
colors.shift();
console.log(colors);
// e. 
colors.pop();
console.log(colors);
// f.
var indexStr = prompt("Enter index to add color:");
var index = parseInt(indexStr); 
var new3 = prompt("Enter color:");
colors.splice(index, 0, new3);
console.log(colors);
// g.
var deleteIndex = prompt("Enter index to delete color(s):");
var deleteCount = prompt("Enter number of colors to delete:");
colors.splice(deleteIndex, deleteCount);
console.log(colors);

// 10.
var scores = [320, 230, 480, 120];
scores.sort();
document.write("Scores of Students: " + scores.join(", ") + "<br>");
document.write("Ordered Scores of Students: " + scores.join(", "));

// 11.
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cities.slice(2, 4);
document.write("Cities list: " + cities.join(", ") + "<br>");
document.write("Selected cities list: " + selectedCities.join(", "));

// 12. 
var arr = ["This", "is", "my", "cat"];
var stringResult = arr.join(" ");
document.write("Array: " + arr.join(", ") + "<br>");
document.write("String: " + stringResult);

// 13. 
var devices = ["keyboard", "mouse", "printer", "monitor"];
document.write("Devices:<br>");
for (var i = 0; i < devices.length; i++) {
    document.write("Out: " + devices[i] + "<br>");
}

// 14.

var devices = ["keyboard", "mouse", "printer", "monitor"];
document.write("Devices:<br>");
for (var i = devices.length - 1; i >= 0; i--) {
    document.write("Out: " + devices[i] + "<br>");
}

// 15.
var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<select>");
for (var i = 0; i < phoneManufacturers.length; i++) {
    document.write("<option>" + phoneManufacturers[i] + "</option>");
}
document.write("</select>");


// Chapter 17-20 pdf:
// 1. 
var multiDimArray = [];

// 2. 
var matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];

// 3. 
for (var i = 1; i <= 10; i++) {
    console.log(i);
}

// 4. 
var tableNumber = parseInt(prompt("Enter the number for multiplication table:"));
var tableLength = parseInt(prompt("Enter the length of the multiplication table:"));
for (var i = 1; i <= tableLength; i++) {
    console.log(tableNumber + " * " + i + " = " + (tableNumber * i));
}

// 5. 
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// 6. 
// a. 
document.write("Counting: ");
for (var i = 1; i <= 15; i++) {
    document.write(i + ", ");
}
document.write("<br>");

// b. 
document.write("Reverse counting: ");
for (var i = 10; i >= 1; i--) {
    document.write(i + ", ");
}
document.write("<br>");

// c.
document.write("Even: ");
for (var i = 0; i <= 20; i += 2) {
    document.write(i + ", ");
}
document.write("<br>");

// d.
document.write("Odd: ");
for (var i = 1; i <= 19; i += 2) {
    document.write(i + ", ");
}
document.write("<br>");

// e.
document.write("Series: ");
for (var i = 2; i <= 20; i += 2) {
    document.write(i + "k, ");
}
document.write("<br>");

// 7. 
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Enter item to search:");
var found = false;
for (var i = 0; i < A.length; i++) {
    if (A[i] === userInput) {
        found = true;
        break;
    }
}
if (found) {
    alert("Item found in the list.");
} else {
    alert("Item not found in the list.");
}

// 8.
var numbers = [24, 53, 78, 91, 12];
var largest = numbers[0];
for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}
console.log("Largest number: " + largest);

// 9.
var smallest = numbers[0];
for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
        smallest = numbers[i];
    }
}
console.log("Smallest number: " + smallest);

// 10.
document.write("Multiples of 5 ranging from 1 to 100: ");
for (var i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        document.write(i + ", ");
    }
}
document.write("<br>");

