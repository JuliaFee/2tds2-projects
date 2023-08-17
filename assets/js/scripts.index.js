// const companies = ["apple", "google", "facebok"];

// companies.forEach(company => {
// console.log(`hey, ${company}!`);
// })

// const names = ["whinds", "freeway", "barbie", "ken"];

// names.forEach(name => {
// console.log(`hi, ${name}!`);
// })

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(numbers);

// numbers.forEach((number, index) => {
//     if(number % 2 == 0){
//      console.log(number + ` está na posição [${index}] do array`);
//     }
// });

class Car{
    constructor(marca, modelo){
        this.marca = marca;
        this.modelo = modelo;
    }
}

class CarList{
    constructor(){
        this.cars = [];
    }
    addNewCar(car){
        this.cars.push(car);
        }    
}

const alotofcars = new CarList();

function showCar(){
var marca = document.getElementById("marca").value;
var modelo = document.getElementById("modelo").value;

const car = new Car(marca, modelo);

alotofcars.addNewCar(car);

document.getElementById("marca").value = "";
document.getElementById("modelo").value = "";

alotofcars.cars.forEach(car => {
    console.log(`Marca: ${car.marca} - Modelo: ${car.modelo}`);
});

}





 