//1


let inputField = document.getElementById('inputField') 
let inputFieldText = document.getElementById('inputFieldText') 

inputField.addEventListener('change' , () => {
    if (inputField.value < 0 || inputField.value > 100) {
        inputFieldText.textContent = ' please enter value between 0 and 100 '
        inputField.classList.add('errorInput')
        inputFieldText.classList.add('errorText')
    } else {
        inputFieldText.textContent =''
        inputField.classList.remove('errorInput')
        inputFieldText.classList.remove('errorText')
    }
})



//2 , 3



let grade = 80;

if (grade >= 90 && grade <= 100) {
console.log("Grade A");
} else if (grade < 90 && grade >= 80) {
console.log("Grade B");
} else if (grade < 80 && grade >= 70) {
console.log("Grade C");
} else if (grade < 70 && grade >= 60) {
console.log("Grade D");
} else if (grade < 60 && grade >= 0) {
console.log("Grade F");
} else {
console.log("Please enter a degree between 100 and 0");
}

let grade2 = 95;
let gradeMessage;

switch (true) {
    case grade2 >= 90 && grade2 <= 100:
        gradeMessage = "Grade A";
        break;
    case grade2 < 90 && grade2 >= 80:
        gradeMessage = "Grade B";
        break;
    case grade2 < 80 && grade2 >= 70:
        gradeMessage = "Grade C";
        break;
    case grade2 < 70 && grade2 >= 60:
        gradeMessage = "Grade D";
        break;
    case grade2 < 60 && grade2 >= 0:
        gradeMessage = "Grade F";
        break;
    default:
        gradeMessage = "Please enter a degree between 0 and 100";
}

console.log(gradeMessage);


//4



for (let i = 1; i < 6; i++) {
if (i === 1) {
    console.log(`${i}`);
} else if (i === 2) {
    console.log(`${i}${i}`);
} else if (i === 3) {
    console.log(`${i}${i}${i}`);
} else if (i === 4) {
    console.log(`${i}${i}${i}${i}`);
} else if (i === 5) {
    console.log(`${i}${i}${i}${i}${i}`);
}
}

let j = 1;

while (j < 6) {
if (j === 1) {
    console.log(`${j}`);
} else if (j === 2) {
    console.log(`${j}${j}`);
} else if (j === 3) {
    console.log(`${j}${j}${j}`);
} else if (j === 4) {
    console.log(`${j}${j}${j}${j}`);
} else if (j === 5) {
    console.log(`${j}${j}${j}${j}${j}`);
}
j++;
}

let k = 1;

do {
if (k === 1) {
    console.log(`${k}`);
} else if (k === 2) {
    console.log(`${k}${k}`);
} else if (k === 3) {
    console.log(`${k}${k}${k}`);
} else if (k === 4) {
    console.log(`${k}${k}${k}${k}`);
} else if (k === 5) {
    console.log(`${k}${k}${k}${k}${k}`);
}
k++;
} while (k < 6);



//5



let x = 5;
let y = 5;
let z = 4;

console.log(
(x === y && " x and y are equal") ||
    (x === z && "z and x are equal") ||
    (y === z && "y and z are equal") ||
    ((y === x) === z && "x , y and z are equal")
);



//6



let score = 50 ;

console.log(score += 10)
console.log(score -= 5)
console.log(score += score)
console.log(score /= 5)



//7 , 8



let ageInput = document.getElementById('ageInput')
let ticketPrice = document.getElementById('ticketPrice')
let ageButton = document.getElementById('ageButton')
let text = 'Your Text price is :'

ageButton.addEventListener('click'  , ()=> {
    if (ageInput.value != '' && ageInput.value > 0 ) {
        if (ageInput.value < 5 && ageInput.value >= 0) {
            ticketPrice.textContent = `${text} free`
        } else if (ageInput.value >= 5 && ageInput.value <= 12) {
            ticketPrice.textContent = `${text} $10`
        } else if (ageInput.value >= 13 && ageInput.value <= 60) {
            ticketPrice.textContent = `${text} $20`
        } else if (ageInput.value > 60) {
            ticketPrice.textContent = `${text} $15`
        }
        ticketPrice.classList.remove('errorText')
        ageInput.classList.remove('errorInput')
    } else {
        ticketPrice.textContent = 'Please enter valid age!'
        ticketPrice.classList.add('errorText')
        ageInput.classList.add('errorInput')
    }
})



//9



let yearInput = document.getElementById('yearInput')
let yearValue = document.getElementById('yearValue')
let yearButton = document.getElementById('yearButton')
let text2 = 'This Year is :'

yearButton.addEventListener('click'  , ()=> {
    if (yearInput.value != '' && yearInput.value > 0 ) {
        if (yearInput.value % 4 === 0) {
            yearValue.textContent = `${text2} Leap Year`
        } else {
            yearValue.textContent = `${text2} not a Leap Year`
        }
        yearValue.classList.remove('errorText')
        yearInput.classList.remove('errorInput')
    } else {
        yearValue.textContent = 'Please enter valid year!'
        yearValue.classList.add('errorText')
        yearInput.classList.add('errorInput')
    }
})



//10



let numberInput = document.getElementById('numberInput')
let numberValue = document.getElementById('numberValue')
let numberButton = document.getElementById('numberButton')

numberButton.addEventListener('click'  , ()=> {
    if (numberInput.value != '' || numberInput.value < 0 ) {
        numberValue.innerText = ''
        for (let i = 1 ; i < 11 ; i++){
            console.log(numberInput.value * i)
            numberValue.innerText += `${numberInput.value * i} , ` 
        }
        /*
            using While 
        
        let i = 1 ;
        while(i < 11 ) {
            console.log(numberInput.value * i)
            numberValue.innerText += `${numberInput.value * i} , ` ;
            i++             
        }
        
        */ 
    } else {
        numberValue.textContent = 'Please enter valid Number!'
    }
})



//11



for(let num = 2 ; num < 51 ; num++) {
    let primeNum = true ; 
    for(let i = 2 ; i <= Math.sqrt(num) ; i++) {
        if (num % i === 0) {
            primeNum = false ;
            break;
        }
    }
    if (primeNum) {
        console.log(`Number ${num} is Prime Number`)
    }
}



//12



let arr = ['*' , '*' , '*' , '*' , '*'] 

for(let i = 5 ; i > 0 ; i--) {
    if(i == 5) {
        console.log(arr.join(''))
    } 
    if (i == 4 ) {
        arr.pop()
        console.log(arr.join(''))
    } 
    if (i == 3 ) {
    arr.pop()
        console.log(arr.join(''))
    } 
    if (i == 2 ) {
        arr.pop()
        console.log(arr.join(''))
    } 
    if (i == 1 ) {
        arr.pop()
        console.log(arr.join(''))
    } 
}


//13


for( let i = 1 ; i < 51 ; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz => ' + i)
    } else if (i % 3 == 0) {
        console.log('Fizz => ' + i)
    } else if (i % 5 == 0 ) {
        console.log('Buzz => ' + i)
    }
}

for( let i = 1 ; i<51 ; i++) {
    console.log(
        (i % 3 == 0 && i % 5 == 0  && ('FizzBuzz => ' + i)) ||
        (i % 3 == 0 && ('Fizz => ' + i)) ||
        (i % 5 == 0 && ('Buzz => ' + i)) 
    )
}