window.Factorial = (event) => {
        event.preventDefault();

   let userinput1 = parseInt(document.getElementById("task 1").value);

    let result = 1

    for (let i = 1; i <= userinput1; i++) {
        result *= i;

    }

    document.getElementById("result1").innerHTML = `The Factorial Of <b>'${userinput1}'</b> is <b>'${result}'</b>`;
}

window.VowelsRemoving = (event) => {
     event.preventDefault();

    let userinput2 = document.getElementById("task 2").value;
    userinput2= userinput2.toLowerCase();
    
    let result2 = userinput2.replace(/[aeiou]/g,'');

    document.getElementById("result2").innerHTML = `your <b>'${userinput2}'</b> after removing of vowels is become this <b>'${result2}'</b>`;
}