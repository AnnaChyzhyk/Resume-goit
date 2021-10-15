// string 
// number
// boolean
// null
// undefiend
// object

let value = 0;

const button = document.getElementById('btn');
const button2 = document.getElementById('btn2');

const func = () => {
    console.log(value++);
}

button.addEventListener('click', func);

button2.addEventListener('click', () => { 
    console.log(value--);
})

let obj = {
    name: 'Anna',
    age: 50
};

obj.age