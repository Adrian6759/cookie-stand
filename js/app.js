'use strict';

// #pragma: Global Variables

let shopHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
Shop.allShops = [];

let myForm = document.getElementById('newStore');
let cookieHourlyList = document.getElementById('table');

//Constructor
function Shop(city, minCustomers, maxCustomers, avgCookiesPerCust){
  this.city = city;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.totalCookies = 0;
  this.hourlyCookies = [];
  Shop.allShops.push(this);
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
  // let table = document.getElementById('table');
  let tableHeadRow = document.createElement('tr');
  cookieHourlyList.appendChild(tableHeadRow);
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



function tableFooter() {
  // let tableFoot = document.getElementById('table');
  let tableFootRow = document.createElement('tr');
  tableFootRow.id = 'tableRow1';
  cookieHourlyList.appendChild(tableFootRow);
  let totals = document.createElement('td');
  totals.textContent = 'Totals';
  tableFootRow.appendChild(totals);
  let grandTotalCookies = 0;
  for (let i = 0; i < shopHours.length; i++) {
    let totalHourlyCookies = 0;
    for (let j = 0; j < Shop.allShops.length; j++) {
      totalHourlyCookies += Shop.allShops[j].hourlyCookies[i];
      grandTotalCookies += Shop.allShops[j].hourlyCookies[i];
    }
    let totals1 = document.createElement('th');
    totals1.textContent = totalHourlyCookies;
    tableFootRow.appendChild(totals1);
  }
  let totals2 = document.createElement('th');
  totals2.textContent = grandTotalCookies;
  tableFootRow.appendChild(totals2);
}



//Create Object Using Constructor
let seattle = new Shop('seattle',23, 65, 6.3);
let tokyo = new Shop('tokyo',3, 24, 1.2);
let dubai = new Shop('dubai', 11, 38, 3.7);
let paris = new Shop('paris', 20, 38, 2.3);
let lima = new Shop('lima', 2, 16, 4.6);

// #pragma: Helper Functions - Utilities
//Grabbed from MDN Docs
function randomCustomer(minCustomers, maxCustomers) {
  return Math.floor(Math.random() * (maxCustomers - minCustomers +1) + minCustomers);
}
tableHeader();

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

tableFooter();

//Step 3: Define our Callback
function handleSubmit(event) {
  event.preventDefault();

  let city = event.target.city.value;

  let minCustomers = event.target.minCustomers.value;
  let maxCustomers = event.target.maxCustomers.value;
  let avgCookiesPerCust = event.target.avgCookiesPerCust.value;
  let newStore = new Shop(city, minCustomers, maxCustomers, avgCookiesPerCust);
  let removeFooter = document.getElementById('tableRow1');
  removeFooter.remove();
  newStore.render();
  myForm.reset();
  tableFooter();

}
//Step 2 Attach Event Listener: (type of event, callback function)
myForm.addEventListener('submit', handleSubmit);
