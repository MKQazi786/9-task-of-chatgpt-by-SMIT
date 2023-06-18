window.Factorial = (event) => {
    event.preventDefault();

    let userinput1 = parseInt(document.getElementById("task 1").value);

    let result = 1

    for (let i = 1; i <= userinput1; i++) {
        result *= i;

    }

    console.log("Task 1:", result)

    document.getElementById("result1").innerHTML = `The Factorial Of <b>'${userinput1}'</b> is <b>'${result}'</b>`;
}

window.vowelsRemoving = (event) => {
    event.preventDefault();

    let userinput2 = document.getElementById("task 2").value

    userinput2 = userinput2.toLowerCase();

    let result2 = userinput2.replace(/[aeiou]/g, '')

    console.log("Task 2: ", result2)

    document.getElementById("result2").innerHTML = `your <b>'${userinput2}'</b> after removing of vowels is become this <b>'${result2}'</b>`;
}

window.largestNumberOnTop = (event) => {
    event.preventDefault();

    let userinput3 = document.getElementById("task 3").value;

    let a = userinput3.split(",");

    let result3 = Math.max(...a)

    console.log("Task 3: ", result3)

    document.getElementById("result3").innerHTML = `In this your numbers <b>'${userinput3}'</b> after extracting the largest number is <b>'${result3}'</b>`;
}

window.capitalizedEachFirstLetter = (event) => {
    event.preventDefault();

    let userinput4 = document.getElementById("task 4").value;

    let a = userinput4.split(' ')

    let result4 = []
    for (let i = 0; i < a.length; i++) {
        result4.push(a[i].charAt(0).toUpperCase() + a[i].slice(1));
    }


    console.log("Task 4: ", result4.join(' '));

    document.getElementById("result4").innerHTML = `your <b>'${userinput4}'</b> after each letter capitalized is become this <b>'${result4.join(' ')}'</b>`;
}

window.calculateAverage = (event) => {
    event.preventDefault();

    let userinput5 = document.getElementById("task 5").value.split(",");

    let a = userinput5.map(parseFloat);

    let sum = a.reduce((total, userinput5) => total + userinput5)

    let result5 = sum / a.length

    console.log("Task 5:", result5)

    document.getElementById("result5").innerHTML = `In this your <b>'${userinput5}'</b> after calculating average then become this <b>'${result5}'</b>`;
}

window.palindromeString = (event) => {
    event.preventDefault();

    let userinput6 = document.getElementById("task 6").value;

    let a = userinput6.toString().toLowerCase();

    let b = a.split("").reverse().join('')

    let result6;
    if (a === b) {
        result6 = `your '<b>${userinput6}</b>' is a palindrom`
    } else {
        result6 = `your '<b>${userinput6}</b>' is not a palindrom`
    }

    console.log("Task 6:", result6)

    document.getElementById("result6").innerHTML = result6;
}
window.palindromeString = (event) => {
    event.preventDefault();

    let userinput6 = document.getElementById("task 6").value;

    let a = userinput6.toString().toLowerCase();

    let b = a.split("").reverse().join('')

    let result6;
    if (a === b) {
        result6 = `your '<b>${userinput6}</b>' is a palindrom`
    } else {
        result6 = `your '<b>${userinput6}</b>' is not a palindrom`
    }

    console.log("Task 6:", result6)

    document.getElementById("result6").innerHTML = result6;
}

window.ascendingString = (event) => {
    event.preventDefault();

    let userinput7 = document.getElementById("task 7").value;

    let result7 = userinput7.toString().split(",").sort().join(', ');

    console.log("Task 7:", result7)

    document.getElementById("result7").innerHTML = `In this your <b>'${userinput7}'</b> after ascending in alphabetical order become this <b>'${result7}'</b>`;
}

window.primeNumber = (event) => {
    event.preventDefault();

    let userinput8 = parseInt(document.getElementById("task 8").value);

    let result8;

    if (userinput8 < 2) {
        result8 = `your <b>'${userinput8}'</b> is not a <b>prime number</b>`

    } else {
        result8 = `your <b>'${userinput8}'</b> is a <b>prime number</b>`

        for (let i = 2; i <= Math.sqrt(userinput8); i++) {
            if (userinput8 % i === 0) {
                result8 = `your <b>'${userinput8}'</b> is not a <b>prime number</b>`
                break;
            }

        }
    }

    console.log("Task 8:", result8)

    document.getElementById("result8").innerHTML = result8
}

window.sortedArrayObject = (event) => {
    event.preventDefault();

    let userinput9 = document.getElementById("task 9").value;
    let userinput9check = document.getElementById("objectProperty").value

    let result9;

    if (userinput9check === "nameAsc") {

        result9 = userinput9.toString().split(",").sort().join(', ');
        result9 = `your <b>'${userinput9}'</b>  after ascending is <b>'${result9}'</b> ` 
    }
    else if (userinput9check === "nameDesc") {

        result9 = userinput9.toLowerCase().split(",").sort().reverse();
        result9 = `your <b>'${userinput9}'</b>  after descending is <b>'${result9}'</b> ` 
    }
    else if (userinput9check === "numberAsc") {
        result9 = userinput9.split(',')
        result9 = result9.sort((a ,b) =>parseInt(a) - parseInt(b));
        result9 = `your <b>'${userinput9}'</b>  after ascending is <b>'${result9}'</b> ` 
    }
    else if(userinput9check === "numberDesc"){
        result9 = userinput9.split(',')
        result9 = result9.sort((a ,b) =>parseInt(a) - parseInt(b));
        result9 = result9.reverse()
        result9 = `your <b>'${userinput9}'</b>  after descending is <b>'${result9}'</b> ` 
    }

    else if(userinput9check === "totalNoString"){
       let a = userinput9.split(",");
       let totalLength = a.length;
       result9 = `your <b>'${userinput9}'</b> after counting your total string is <b>"${totalLength}"</b>` 
    }

    console.log("Task 9:",result9)

    document.getElementById("result9").innerHTML = result9
}