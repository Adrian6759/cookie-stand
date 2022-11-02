'use strict';

// #pragma: Global Variables

let shopHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
let allShops = [];

// #pragma: Object Literals


//Constructor
function Shop(city, minCustomers, maxCustomers, avgCookiesPerCust){
  this.city = city;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.totalCookies = 0;
  this.hourlyCookies = [];
  allShops.push(this);
}



//Prototype
Shop.prototype.getHourlyCookies = function() {
  for(let i=0; i < shopHours.length; i++){
    let customerNumber = randomCustomer(this.minCustomers, this.maxCustomers);
    let cookieNumber = Math.round(customerNumber * this.avgCookiesPerCust);
    this.hourlyCookies.push(cookieNumber);
    this.totalCookies += cookieNumber;
  }
};
let cookieHourlyList = document.getElementById('table');
//  let allHours = document.getElementById('tr');
Shop.prototype.render = function() {
  this.getHourlyCookies();
  let tableRow = document.createElement('tr');
  let locationName = document.createElement('td');
  locationName.textContent = this.city;
  tableRow.appendChild(locationName);
  cookieHourlyList.appendChild(tableRow);
  // let shopHours = document.createElement('thead');
  // shopHours.textContent = this.shopHours;
  // shopHoursList.appendChild(shopHours);

  for (let j = 0; j < shopHours.length; j++){
    const listItems = document.createElement('td');
    listItems.textContent = this.hourlyCookies[j];
    tableRow.appendChild(listItems);
  }
  const total = document.createElement('td');
  total.textContent = this.totalCookies;
  tableRow.appendChild(total);
};
  


function tableHeader() {
  let table = document.getElementById('table');
  let tableHeadRow = document.createElement('tr');
  table.appendChild(tableHeadRow);
  let blankSpot = document.createElement('th');
  blankSpot.textContent = '  ';
  tableHeadRow.appendChild(blankSpot);
  for (let j = 0; j < shopHours.length; j++){
    const allHours = document.createElement('th');
    allHours.textContent = shopHours[j];
    tableHeadRow.appendChild(allHours);
  }
  let totalsSpot = document.createElement('th');
  totalsSpot.textContent = 'Daily Location Total';
  tableHeadRow.appendChild(totalsSpot);
}
tableHeader();

function tableFooter() {
  let tableFoot = document.getElementById('table');
  let tableFootRow = document.createElement('tr');
  tableFoot.appendChild(tableFootRow);
  let totals = document.createElement('tfoot');
  totals.textContent = 'Totals';
  tableFoot.appendChild(totals);
}
tableFooter();
// let tableHeader = document.createElement('th');
// let allHours = document.createElement('th');
// allHours.textContent = this.shopHours;
// tableHeader.appendChild(allHours);



// let shopHours = document.createElement('tr');
//  tableElem.appendChild(trElem);
// let th1Elem = document.createElement('th');
// Shop.prototype.getAllCookieSales = function() {
//   let cookieHourlyTotal = document.getElementById('seattle');
//   for (let k= 0; k < this.hourlyCookies.length; k++);
//   const totalCookiesTwo = document.createElement('li');
//   cookieHourlyTotal.appendChild(totalCookiesTwo);
//   this.totalCookiesTwo += this.hourlyCookies;

// };

//Create Object Using Constructor
let seattle = new Shop('seattle',23, 65, 6.3);
let tokyo = new Shop('tokyo',3, 24, 1.2);
let dubai = new Shop('dubai', 11, 38, 3.7);
let paris = new Shop('paris', 20, 38, 2.3);
let lima = new Shop('lima', 2, 16, 4.6);
console.log(allShops);

// #pragma: Helper Functions - Utilities
//Grabbed from MDN Docs
function randomCustomer(minCustomers, maxCustomers) {
  return Math.floor(Math.random() * (maxCustomers - minCustomers +1) + minCustomers);
}

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

// let seattle ={
//   minCustomers: 23,
//   maxCustomers: 65,
//   avgCookiesPerCust: 6.3,
//   totalCookies: 0,
//   hourlyCookies:[],
//   getHourlyCookies: function() {
//     for(let i=0; i < shopHours.length; i++){
//       let customerNumber = randomCustomer(this.minCustomers, this.maxCustomers);
//       let cookieNumber = Math.round(customerNumber * this.avgCookiesPerCust);
//       this.hourlyCookies.push(cookieNumber);
//       this.totalCookies += cookieNumber;
//     }
//   },
//   render(){
//     let cookieHourlyList = document.getElementById('seattle');
//     for (let j = 0; j < shopHours.length; j++){
//       const listItems = document.createElement('li');
//       listItems.textContent = `${shopHours[j]}: ${this.hourlyCookies[j]} cookies`;
//       cookieHourlyList.appendChild(listItems);
//     }
//     const total = document.createElement('li');
//     total.textContent = `total: ${this.totalCookies}`;
//     cookieHourlyList.appendChild(total);
//   }


// };

// seattle.getHourlyCookies();
//console.log(seattle);

// function cookieArr(hourlyCookies) {
//   let totalCookies = 0
//   for (let j= 0; j < this.hourlyCookies.length; j++) {
//   return [a,b]
//   };










