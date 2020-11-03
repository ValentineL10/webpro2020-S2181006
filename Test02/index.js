 //1//
 const calcAge = () => {
     let age = 2019 - 1987;
     console.log(age);
 }
 const yearUntilRetirement = (year,firstName) => {
   let age =60-age;
    if(retirement > 0){
      console.log(`${object}${firstName} retired in ${retirement} years.`);
    }
    else{
      console.log(`${object}${firstName} is already retired`);
    }
  }
  yearUntilRetirement(1987,'Jhon');

  //2
const addNumber = (a, b, c, d, e, f, g) => {
    let numbers = [a, b, c, d, e, f, g];
    let sum = 0;
    let i = numbers.map(item=>{
      return sum+=item
    })
    console.log(i);
}
addNumber(1,2,3,4,5,6,7)

 //3
let phi = 3.14;
let power = 2;
let radius = 0;
 
let calculateArea = (radius, power) => {
  return phi * Math.pow(radius, power);
};
 
radius = 21;
let area21 = calculateArea(radius, 2);
 
radius = 7;
let area7 = calculateArea(radius, 2);
 
console.log(`Area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);
 
//4
const makeAjaxRequest = (url = 'www.google.com', method = 'GET') => {
    if (!method) {
        method = 'GET';
   }
   console.log(url, method);
}

makeAjaxRequest();

//4
const makeAjaxRequest = (url = 'www.google.com', method = 'GET') => {
    if (!method) {
        method = 'GET';
   }
   console.log(url, method);
}

makeAjaxRequest();

//BAGIAN 2
//1
const WarnaKesukaan = (warna='putih') =>{
    return console.log(`Warna kesukaan saya adalah ${warna}`)
    }
    
    WarnaKesukaan('Biru');
//2.
let namaBuah1 = ['apel', ' mangga'];
let namaBuah2 = ['sirsak', 'semangka']

let semuaNamaBuah = [...namaBuah1,...namaBuah2];

console.log (semuaNamaBuah)