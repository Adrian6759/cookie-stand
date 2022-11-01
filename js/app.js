'use strict';

// #pragma: Global Variables

let shopHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// #pragma: Object Literals

let seattle ={
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiesPerCust: 6.3,
  totalCookies: 0,
  hourlyCookies:[],
  getHourlyCookies: function() {
    for(let i=0; i < shopHours.length; i++){
      let customerNumber = randomCustomer(this.minCustomers, this.maxCustomers);
      let cookieNumber = Math.round(customerNumber * this.avgCookiesPerCust);
      this.hourlyCookies.push(cookieNumber);
    }
  },
  render(){
    let cookieHourlyList = document.getElementById('seattle');
    for (let j = 0; j < shopHours.length; j++){
      const listItems = document.createElement('li');
      listItems.textContent = `${shopHours[j]}: ${this.hourlyCookies[j]} cookies`;
      cookieHourlyList.appendChild(listItems);
    }
  }

};
seattle.getHourlyCookies();
console.log(seattle);
seattle.render();

let tokyo = {
  minCustomers:3,
  maxCustomers:24,
  avgCookiesPerCust:1.2,
  hourlyCookies:[],
  getHourlyCookies: function() {
    for (let j=0; j < shopHours.length; j++){
      let customerNumber = randomCustomer(this.minCustomers, this.maxCustomers);
      let cookieNumber = Math.round(customerNumber * this.avgCookiesPerCust);
      this.hourlyCookies.push(cookieNumber);
    }
  },
  render() {
    let cookieHourlyList = document.getElementById('tokyo');
    for (let j = 0; j < shopHours.length; j++){
      const listItems = document.createElement('li');
      listItems.textContent = `${shopHours[j]}: ${this.hourlyCookies[j]} cookies`;
      cookieHourlyList.appendChild(listItems);
    }
  }
};
tokyo.getHourlyCookies();
console.log(tokyo);
tokyo.render();

let dubai = {
  minCustomers:11,
  maxCustomers:38,
  avgCookiesPerCust:3.7,
  hourlyCookies:[],
  gethourlyCookies: function() {
    for (let k=0; k < shopHours.length; k++){
      let customerNumber = randomCustomer(this.minCustomers, this.maxCustomers);
      let cookieNumber = Math.round(customerNumber * this.avgCookiesPerCust);
      this.hourlyCookies.push(cookieNumber);
    }
  },

  render() {
    let cookieHourlyList = document.getElementById('dubai');
    for (let j = 0; j < shopHours.length; j++) {
      const listItems = document.createElement('li');
      listItems.textContent = `${shopHours[j]}: ${this.hourlyCookies[j]} cookies `
      cookieHourlyList.appendChild(listItems);
    }
  }
};
dubai.gethourlyCookies();
console.log(dubai);
dubai.render();

let paris = {
  minCustomers:20,
  maxCustomers:38,
  avgCookiesPerCust:2.3,
  hourlyCookies:[],
  gethourlyCookies: function() {
    for (let l=0; l < shopHours.length; l++) {
      let customerNumber = randomCustomer(this.minCustomers, this.maxCustomers);
      let cookieNumber = Math.round(customerNumber *
        this.avgCookiesPerCust);
      this.hourlyCookies.push(cookieNumber);
    }
  },

  render() {
    let cookieHourlyList = document.getElementById('paris');
    for (let j = 0; j < shopHours.length; j++) {
      const listItems = document.createElement('li');
      listItems.textContent = `${shopHours[j]}: ${this.hourlyCookies[j]} cookies`;
      cookieHourlyList.appendChild(listItems);
    }

  }

};
paris.gethourlyCookies();
console.log(paris);
paris.render();

let lima = {
  minCustomers:2,
  maxCustomers:16,
  avgCookiesPerCust:4.6,
  hourlyCookies:[],
  gethourlyCookies: function() {
    for (let m=0; m < shopHours.length; m++) {
      let customerNumber = randomCustomer(this.minCustomers, this.avgCookiesPerCust,this.maxCustomers);
      let cookieNumber = Math.round(customerNumber *
        this.avgCookiesPerCust);
      this.hourlyCookies.push(cookieNumber);
    }
  },
  render () {
    let cookieHourlyList = document.getElementById('lima');
    for (let j = 0; j < shopHours.length; j++) {
      const listItems = document.createElement('li');
      listItems.textContent = `${shopHours[j]}: ${this.hourlyCookies[j]} cookies`;
      cookieHourlyList.appendChild(listItems); 
    }

  }
};
lima.gethourlyCookies();
console.log(lima);
lima.render();


// #pragma: Helper Functions - Utilities
//Grabbed from MDN Docs
function randomCustomer(minCustomers, maxCustomers) {
  return Math.floor(Math.random() * (maxCustomers - minCustomers +1) + minCustomers);
}
// function cookieArr(hourlyCookies) {
//   let totalCookies = 0
//   for (let j= 0; j < this.hourlyCookies.length; j++) {
//   return [a,b]
//   };



