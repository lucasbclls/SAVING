let tatu = 10;
if(true){
    let tatu = 20;
    console.log(tatu);
}
console.log(tatu);

// function declaration
function soma(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}


// function declaration
function soma(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

//hoisting nao funciona com function expression. so com function.
// armazeana a funcao dentro de uma variavel: mult(2,2)
//function expression: termina com ;
const mult = function(a,b){
    return a * b
};

//arguments & parameters
const speak = function(name){
    console.log(`bom dia ${name}`);
};

const fale = function(name='Capitao', time='Noturno'){
   console.log(`Hello ${name} ${time}`);

};


// pi * raio ^ 2
const calcAreaCircunf = function(raio){
    let area = 3.14 * raio**2
    return area
    // return 3.14 * raio**2 // ou retornar diretamente
}

console.log(calcAreaCircunf(2))


//arrow function: termina com ; = >
const calcAreaCirc = (raio) => {
    return 3.14 * raio**2
};

//arrow function =>: termina com ;
//sem argumento: precisa ()
const calcAreaCirc2 = () => {
    return 3.14
};

//arrow function: termina com ;
//se for somente um paramentro pode tirar o ()
//mas se tiver mais de um parametro precisa do ()
const calcAreaCirc3 = raio => {
    return 3.14 * raio**2
};

const calcAreaCirc5 = raio => { 3.14 * raio**2
};

const calcAreaCirc6 = raio => 3.14 * raio**2;

const sum = (a, b) => {
  return (a + b);
}

const sum2 = (a,b) => a+b;

//attention when return an object:
//No exemplo acima, nós estamos retornando apenas a soma 
//de dois números. 
//Essa sintaxe é válida para qualquer tipo de dado sendo retornado 
//exceto para objetos.

//Para retornar um objeto de forma explícita 
//(com o corpo da função, e o return), nós faríamos assim:
const person = () => {
    return {
      name: 'John',
      surname: 'Doe',
      age: 30
    }
  };
  
  
  //Agora, se retornar de forma implícita, 
  //teríamos que fazer da seguinte forma:
  const person2 = () => ({
    name: 'John',
    surname: 'Doe',
    age: 30
  });
  
  console.log(person());

  console.log(person2());

  let numeros = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121];

// fazer uma arrow function que verifica quantos numeros
// do array são impares
const contaImpares = (vet) =>{
    return vet.filter(num => num%2 !=0).length
};

const contaImpares2 = (vet) =>vet.filter(num => num%2 !=0).length;

console.log(contaImpares2(numeros))

// callbacks & forEach
//quando vc passa uma funcao como argumento
//a funcao que eh passada como argumento 
//eh uma funcao callback 

const myFunc = (callBackFunc)=>{
    // algum codigo
    let value = 50;
    callBackFunc(value);
};
 
//myFunc recebe uma funcao como argumento: declarei a funcao
/*
myFunc(function(value){
    //alum codigo
    console.log(value);
});
*/

//object literals
let user2 = {
    name: 'cristal'// name eh uma chave e cristal um valor
};

// vou armazenar 2 objetos no array:
const blogs = [
    {title: 'why mac & cheese rules', likes: 30},
    {title: 'speed race', likes: 30000}
];

console.log(blogs);


let user= {
    name: 'cristal',// name eh uma chave e cristal um valor
    age: 30,
    email:'cristal@gmail.com',
    location: 'VilaVelha',
    //blogs:['youtube originals - AI', 'speed racer'],
    blogs:[{title: 'why mac & cheese rules', likes: 30},
            {title: 'speed race', likes: 30000}
    ],
    login: function(){
        console.log('the user logged in');
    },
    logout: function(){
        console.log('the user logged out');
    },
    logBlogs: function(){
        //console.log(blogs); // gera erro
        //console.log(this.blogs) // se refere ao objeto user
        //this: context object
        console.log('este user escreveu');
        //forEach precisa de uma callback function
        this.blogs.forEach(blog =>{ // cada blog representa um objeto
            console.log(blog.title, blog.likes);
        })

    }
};
console.log(user);
console.log(user.age);
console.log(user['email']);


const key = 'location'
console.log(user[key]);

console.log(typeof user);

// add methods
user.login();
user.logout();
user.logBlogs();

let frutas2 = [
    {
        name: 'banana'
    },
    {   
        name: 'pera'
    },
    {
        name: 'uva'
    },
    {
        name: 'amora'
    }];
       
// operador ternario    
frutas2 = frutas2.sort((a,b)=> (a.name < b.name)? -1:(a.name>b.name)?1:0);
console.log(frutas2);

vetNum = [3,0,5,1];

console.log(vetNum.sort());

//1)
// fazer uma funcao que gera  e retorna um vetor de objetos
// os objetos tem 3 atributos: nome, idade, cpf
// retronar 5 objetos

//2)
// armazenar os objetos em uma varivel, vetor.

//3)
// Fazer uma arrow function que recebe o vetor de objetos
// e retorna este vetor ordenado. Ordenar pelo atributo nome.

//4)
//armazenar o retorno da arrow function em uma outra variavel
//e exibir seu conteudo.

//5) fazer uma funcao que ordena por qualquer atributo do objeto: 
//string ou numero.


//Desestruturacao
// expo snack
