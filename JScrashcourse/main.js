/*console.log('Hello World');
console.error('This is an Error!');
console.warn('this is a warning')*/
//ES6 or Es2016...ES stand for ECMAscript
//let()we can reassign value using let), const, var
// Always use const unless u now you need to reassign it!!

/*
let score=30;
score= 10;
console.log(score);
*/

//datatypes: String, Numbers, Boolean, null, undefined, Symbol
/*const name='John';
const age= 30;
const rating= 4.5;
const iscool= true;
const x= null;
const y= undefined;
let z;
console.log(typeof z)

//concatenation
const name= 'John';
const age= 30;
const hello='My name is '+ name +' and I am '+ age;
// Template String
//const hello=('My name is ${name} and I am ${age}')
console.log(hello);


const s='Hello world';
console.log(s.length);
console.log(s.toUpperCase);
console.log(s.toLowerCase);
console.log(s.substring(0,5));
console.log(s.substring(0,5),s.toUpperCase);
console.log(s.split(''));
const t= 'technology, computers, it,code';
console.log(t.split(', '))


//Arrays

const numbers= new Array(1,2,3,4,5);
console.log(numbers);
const fruits=['apple', 'oranges', 'pears', 10, true];
fruits[3]= 'grapes';//replaces 10
fruits.push('mangoes');// adds at end
fruits.unshift('strawberry')//adds at front
fruits.pop();//pops from back
console.log(Array.isArray(fruits));//checks wheather an array exists
console.log(fruits.indexOf('oranges'));
console.log(fruits);

//Object Literals: key:value pairs
const person={
	firstName:'john',
	lastName:'doe',
	age: 30,
	hobbies:['music', 'movies','sports'],
	address:{
		street:'50 main st',
		city:'boston',
		state:'NY'
	}
}
console.log(person);
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);

const{firstName, lastName, address:{city}}= person;//a feature
console.log(firstName, lastName, city);

person.email='satya@gmail.com'
console.log(person);

//Array of Objects and JSON
const todos=[
   {
   	 id:1,
   	 text:'Take out Trash',
   	 iscompleted: true
   },
   {
   	 id:2,
   	 text:'Meeting with boss',
   	 iscompleted: true
   },
   {
   	 id:3,
   	 text:'Dentist appt',
   	 iscompleted: false
   }
];

console.log(todos);
console.log(todos[1].text);

const todojson=JSON.stringify(todos);
console.log(todojson);

// for loop
for(let i=0; i<10; i++){
	console.log(i);
}
//while loop
let i=0;
while(i<10){
	console.log('thr number:'+ i);
	i++;
}

for(let todo of todos){
	console.log(todo.id);
}

//forEach, map(Returns an array), filter

todos.forEach(function(todo){
   console.log(todo.text);
});

const todoText= todos.map(function(todo){
   return todo.text;
});
console.log(todoText);

const todocompleted= todos.filter(function(todo){
   return todo.iscompleted === true;
});
console.log(todocompleted);

const todocompletedd= todos.filter(function(todo){
   return todo.iscompleted === true;
}).map(function(todo){
	return todo.text;
});
console.log(todocompletedd);


//Conditionals

const x=10;
const y=10;
if(x>5 || y>10){
	console.log('x is 10');
}
else if(x>10){
	cconsole.log('x is greater than 10');
}
else{
	console.log('x is less than 10');
}

//Ternary Operator
const x=10;
const color= x>10 ? 'red' : 'blue';
console.log(color);

//Switch Case
switch(color){
	case 'red':
	   console.log('color is red');
	   break;
	case 'blue':
	   console.log('color is red');
	   break;
	default:
	   console.log('Color is other');
	   break;
}

//Functions

function addnums(n1, n2){
	return n1+n2;
}
console.log(addnums(5,4));


const addnumss=(n1=1, n2=1)=>{
   return n1+n2;
};
console.log(addnumss(5,5));


//OOPs
 //Constructor Function
function Person(firstName, lastName, dob){
	this.firstName= firstName;
	this.lastName= lastName;
	this.dob= new Date(dob);
}
Person.prototype.getbirthyear= function(){
		return this.dob.getFullYear();
	    }
Person.prototype.getfullname= function(){
		return (this.firstName+' '+this.lastName);
	    }
// Instantiate Object

const person1= new Person('John', 'Doe', '4-3-1980');
const person2= new Person('Marry', 'arg', '7-9-1979');
console.log(person1);
console.log(person2.firstName);
console.log(person1.dob);
console.log(person1.getbirthyear());
console.log(person1.getfullname());


//Class
class Person{
	constructor(firstName, lastName, dob){
		this.firstName= firstName;
		this.lastName= lastName;
		this.dob= new Date(dob);
	}


getbirthyear(){
		return this.dob.getFullYear();
	    }

getfullname(){
		return (this.firstName+' '+this.lastName);
	    }
}
const person1= new Person('John', 'Doe', '4-3-1980');
const person2= new Person('Marry', 'arg', '7-9-1979');
console.log(person1);
console.log(person2.firstName);
console.log(person1.dob);
console.log(person1.getbirthyear());
console.log(person1.getfullname());
*/


//console.log(window);

//alert(1);

//Single Element Selectors
 /*  
 const form= document.getElementById('my-form');
 console.log(form);
*/
//console.log(document.querySelector('.container'));

//Multiple Element Selectors

//console.log(document.querySelectorAll('.item'));// always use this nowadays
//console.log(document.getElementsByClassName('item'));
//console.log(document.getElementsByTagName('li'));

/*const items = document.querySelectorAll('.item');
items.forEach(function(item){console.log(item)});





const ul= document.querySelector('.items');
//ul.remove();
//ul.lastElementChild.remove();
ul.firstElementChild.textContent= 'Hello';
ul.children[1].innerText='Brad';
ul.lastElementChild.innerHTML = '<h1>Hello<h1>';

const btn = document.querySelector('.btn');
btn.style.background = 'red';
*/

//const btn = document.querySelector('.btn');
/*
btn.addEventListener('click', (e) =>{
	e.preventDefault();
	//console.log('click');
	//console.log(e);
    //console.log(e.target);
    //console.log(e.target.className);
    //we can get all diff attribute of the events we create.
    //document.querySelector('#my-form').style.background= '#ccc';
    //document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items')
    .lastElementChild.innerHTML='<h1>Hello<h1>';
});
*/
/*
btn.addEventListener('mouseover', (e) =>{
	e.preventDefault();
	//console.log('click');
	//console.log(e);
    //console.log(e.target);
    //console.log(e.target.className);
    //we can get all diff attribute of the events we create.
    //document.querySelector('#my-form').style.background= '#ccc';
    //document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items')
    .lastElementChild.innerHTML='<h1>Hello<h1>';
});

btn.addEventListener('mouseout', (e) =>{
	e.preventDefault();
	//console.log('click');
	//console.log(e);
    //console.log(e.target);
    //console.log(e.target.className);
    //we can get all diff attribute of the events we create.
    //document.querySelector('#my-form').style.background= '#ccc';
    //document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items')
    .lastElementChild.innerHTML='<h1>Hello<h1>';
});
*/

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit); 

function onSubmit(e){
	e.preventDefault();
	//console.log(nameInput.value);

	if(nameInput.value === '' || emailInput.value === ''){
		msg.classList.add('error');
		msg.innerHTML = 'Please Enter all Fields';

		setTimeout(()=> msg.remove(), 3000);
    }else{
    	const li= document.createElement('li');
    	li.appendChild(document.createTextNode(nameInput.value + ':' + emailInput.value));
    	userList.appendChild(li);

    	//clear fields
    	nameInput.value= '';
    	emailInput.value= '';
    }
}