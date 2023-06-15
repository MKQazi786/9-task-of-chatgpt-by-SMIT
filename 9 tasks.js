window.Factorial = (event) => {
        event.preventDefault();

   let userinput1 = parseInt(document.getElementById("task 1").value);

    let result = 1

    for (let i = 1; i <= userinput1; i++) {
        result *= i;

    }

    console.log("Task 1:",result)
    
    document.getElementById("result1").innerHTML = `The Factorial Of <b>'${userinput1}'</b> is <b>'${result}'</b>`;
}

window.vowelsRemoving = (event) => {
    event.preventDefault();

    let userinput2 = document.getElementById("task 2").value
    
    userinput2 = userinput2.toLowerCase();
    
    let result2 = userinput2.replace(/[aeiou]/g,'')
    
    console.log("Task 2: ",result2)
    
    document.getElementById("result2").innerHTML = `your <b>'${userinput2}'</b> after removing of vowels is become this <b>'${result2}'</b>`;
}

window.largestNumberOnTop = (event) => {
    event.preventDefault();
    
    let userinput3 = document.getElementById("task 3").value;

    let a = userinput3.split(",");
    
    let result3 = Math.max(...a)
    
    console.log("Task 3: ",result3)
    
    document.getElementById("result3").innerHTML = `In this your numbers <b>'${userinput3}'</b> after extracting the largest number is <b>'${result3}'</b>`;
}

window.capitalizedEachFirstLetter = (event) => {
    event.preventDefault();

    let userinput4 = document.getElementById("task 4").value;

    let a = userinput4.split(' ')

    let result4 = []
    for (let i = 0 ; i < a.length; i++){
        result4.push(a[i].charAt(0).toUpperCase() + a[i].slice(1));
    }
    
    
    console.log("Task 4: ",result4.join(' '));

    document.getElementById("result4").innerHTML = `your <b>'${userinput4}'</b> after each letter capitalized is become this <b>'${result4.join(' ')}'</b>`;
}

window.calculateAverage = (event) => {
    event.preventDefault();
    
    let userinput5 = document.getElementById("task 5").value.split(",");
    
    let a = userinput5.map(parseFloat);

    let sum = a.reduce((total,userinput5) => total + userinput5)

    let result5 = sum / a.length

    console.log("Task 5:",result5)

    document.getElementById("result5").innerHTML = `In this your <b>'${userinput5}'</b> after calculating average then become this <b>'${result5}'</b>`;
}