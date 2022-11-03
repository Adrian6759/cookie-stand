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




// function tableFooter() {
//   let tableFoot = document.getElementById('table');
//   let tableFootRow = document.createElement('tr');
//   tableFoot.appendChild(tableFootRow);
//   let totals = document.createElement('tfoot');
//   totals.textContent = 'Totals';
//   tableFoot.appendChild(totals);
//   let grandTotal = 0;
//   for (let i = 0; i < hourlyCookies.length; i++){
//     let allHourlyCookies = 0;
//     for (let j = 0; j < allShops.length; j++){
//       allHourlyCookies += allShops[j].shopHours[i];
//       grandTotal += allShops[j].shopHours[i];
//     }
//     let tableFoot1 = document.createElement('th');
//     tableFoot1.textContent = allHourlyCookies;
//     tableFootRow.appendChild(tableFoot1);
//   }
//   let tableFoot1 = document.createElement('th');
//   tableFoot1.textContent = grandTotal;
//   tableFoot.appendChild(tableFoot1);
//   tableFoot.appendChild(tableFootRow);

//   let tableFoot = document.getElementById('table');
//   const tableFootRow = document.createElement('tr');
//   let tableHeader = document.createElement('th');
//   let totals = document.createElement('tfoot');
//   tableHeader.textContent = 'Totals';
//   tableFoot.appendChild(totals);
//   tableFootRow.appendChild(tableHeader);
//   let grandTotal = 0;
// for (let i = 0; i < hourlyCookies.length; i++){
//   let allHourlyCookies = 0;
//   for (let j = 0; j < allShops.length; j++){
//     allHourlyCookies += allShops[j].shopHours[i];
//     grandTotal += allShops[j].shopHours[i];
//     }



//Create Object Using Constructor
let seattle = new Shop('seattle',23, 65, 6.3);
let tokyo = new Shop('tokyo',3, 24, 1.2);
let dubai = new Shop('dubai', 11, 38, 3.7);
let paris = new Shop('paris', 20, 38, 2.3);
let lima = new Shop('lima', 2, 16, 4.6);
console.log(allShops);
// tableFooter();
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
