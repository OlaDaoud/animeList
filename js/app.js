/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
'use strict';
var animeArray=[];
var WatchLisTable = function () {
  var animeName = animeName;
  var animeCat = animeCategory;
  var season = getRndInteger(1,7);
  WatchLisTable.push.all(animeArray);
};
console.log(animeArray);

// create the table
var tableHeaders = ['Anime Title', 'Category', 'Random Season', 'Remove'];
var container = Document.getElementbyId('toWatchResults');
var tableE1 = document.createElement('table');
container.appendchild(tableE1);
var thE1 = document.createElement('th');
tableE1.appendchild(thE1);
thE1.textContent = this.tableHeaders;
for(i=0, i<animeArray.length, i++);
var trE1 = document.createElement('tr');
tableE1.appendchild(thE1);
thE1.textContent = this.animeArray[i];

//Check and load data from local storage
function animeWatchList() {
  var savedAnime = JSON.parse('Anime Title', 'animeCategory', 'RandomSeason','deleteBtn');
};

//helper function 
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

getRndInteger();
WatchLisTable();