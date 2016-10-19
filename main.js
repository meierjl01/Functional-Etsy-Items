var $div1 = $('.answer1');
var $div2 = $('.answer2');
var $div3 = $('.answer3');
var $div4 = $('.answer4');
var $div5 = $('.answer5');
var $div6 = $('.answer6');

//Answer 1

var mappedPrices = items.map(function(item, i, arr) {
    return item.price;
  });
console.log(mappedPrices);

var returnPrice = mappedPrices.reduce(function(returnValueSoFar, number, i, arr) {
	return (returnValueSoFar + number);
}, 0);

var avg = returnPrice/items.length;

console.log(avg);

$($div1).text('The average price is $' + avg);


//Answer 2

var filteredItem = items.filter(function(item) {
  if (item.price > 14 && item.price < 18) {
    return true;
  }
}).map(function(item, i, arr) {
    return item.title;
})
;
console.log(filteredItem);

$($div2).text(filteredItem);


//Answer 3

var filteredCurrencyCode = items.filter(function(item, i, arr) {
  if(item.currency_code === 'GBP') {
    return true;
  }
}).map(function(item, i, arr) {
  return item.title;
});

console.log(filteredCurrencyCode);

var filteredCC = items.filter(function(item, i, arr) {
  if(item.currency_code === 'GBP') {
    return true;
  }
}).map(function(item, i, arr) {
  return item.price;
});

console.log(filteredCC);

$($div3).text(filteredCC+ filteredCurrencyCode);


//Answer 4

var woodItems = items.filter(function(item, i, arr) {
  if(item.materials.includes('wood')) {
    return true;
  }
}).map(function(item, i,arr) {
  return item.title;
});
console.log(woodItems);

$($div4).text(woodItems);


//Answer 5

var numMaterials = items.filter(function(item, i, arr) {
  if (item.materials.length >= 8) {
  return true;
}
}).map(function(item, i, arr) {
  return item.title;
});

var complexMaterials = items.filter(function(item, i, arr) {
  if (item.materials.length >= 8) {
  return true;
}
}).map(function(item, i, arr) {
  return item.materials;
});

console.log(numMaterials);
console.log(complexMaterials);

$($div5).text(numMaterials + complexMaterials);

//Answer 6

var bySellers = items.filter(function(item,i, arr) {
  if (item.who_made === 'i_did') {
    return true;
  }
}).map(function(item, i, arr) {
  return item.length;
});

console.log(bySellers.length);

var bySeller = bySellers.length;

console.log(bySeller);

$($div6).text(bySeller +' were made by their sellers');
