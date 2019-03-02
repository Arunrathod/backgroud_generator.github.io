var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var h3 = document.querySelector('h3');
var body = document.getElementById('gradient');

//body.style.background = 'red';

function setGradient() {
    body.style.background = 
        "linear-gradient(to right, "
        +color1.value
        +" , "
        +color2.value
        +")";
        
    h3.textContent = body.style.background +";";
}

color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);

const player = 'bobby';
let exper = 100;
let wizard = false;

if (exper > 90){
    let wizard = true;
}

//Destructuring object 
    const player1 = {
        name: 'bobby',
        experience: 100,
        wizardLevel: false
    }

    /* Earlier to assign variable from obj we use to do
        const name = player1.name;
        const experience = player1.experience;
        let wizardLevel = player1.wizardLevel;
    */

    //But now with ES6 we can do like this
    const {name, experience} = player1;
    let {wizardLevel} = player1;

// Object Properties (Dynamic Object Properties)
    const player2 = 'john snow';
    const obj = {
        [player2]: 'hello',
        [1+2]: 'hihi'
    }
    
// When Property and value are same
    const a = 'simmon';
    const b = true;
    const c = {};
    
    const obj1 = { a, b, c};
    
 //Template String
    const player3 = 'Sally',
          age = 34,
          pet = 'Horse';
    const greeting = "Hello "+name+", you seem to be "+age - 10+". What a lovely "+pet+" you have.";
    const greetingBest = `Hello ${player3}, you seem to be ${age - 10}. What a lovely ${pet} you have`;
    
// Default Arguments
        function greet (name = '', age = 30, pet = 'cat'){
            return `Hello ${name}, you seem to be ${age - 10}. What a lovely ${pet} you have`;
        }
        
//Symbol

    let sym1 = Symbol();
    let sym2 = Symbol('foo');
    let sym3 = Symbol('foo');
    
    sym2 === sym3;
    
//Arrow Function
    function add (a,b){
        return a + b;
    }
    
    const add2 = (a,b) => a+b;
    
    const add3 = (a,b) => {
        return a + b;
    }