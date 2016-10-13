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

$($div1).text('The average price is $23.63');


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

$($div2).text('1970s Coors Banquet Glass Beer Pitcher' + 'The Three Broomsticks Customizable Beer Stein Mug, Harry Potter Inspired, hogsmeade village, harry potter gift, three broomsticks mug' + 'Hand Painted Colorful Feather Glass');


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

$($div3).text('1970s Schlitz Malt Liquor Glass Beer Pitcher costs £18');


//Answer 4

var woodItems = items.filter(function(item, i, arr) {
  if(item.materials.includes('wood')) {
    return true;
  }
}).map(function(item, i,arr) {
  return item.title;
});
console.log(woodItems);

$($div4).text('SALE Mid Century Siesta Ware White Mug with Anchor - Set of 3 is made of wood.' + 'Bottle cap catcher personalized. Man cave gift for him- Wooden Beer pub sign - Groomsmen wedding Gift is made of wood.' + 'Medium Size, Welcome To Our Firepit-Where Friends And Marshmallows Get Toasted At The Same Time-Painted Wood Sign-Custom Colors is made of wood.' + 'Magnetic Wall Mount Bottle Opener Barware Set - Stainless Steel or Black - Personalized if you like! is made of wood.' + 'Engraved Pocket Knife, Personalized Groomsmen Gift, Ring Bearer Gift, Graduation Gift, 4 Knives is made of wood.');


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

$($div5).text('Qty of 2 Groomsmen Gift - Stainless Steel Personalized Bottle Opener - NO Capcatcher has 9 materials: wall mount bottle opener, wedding, man cave, christmas gift, guy gift, fathers day, home bar, beer, bar.' + 'The Three Broomsticks Customizable Beer Stein Mug, Harry Potter  Inspired, hogsmeade village, harry potter gift, three broomsticks mug  has 13 materials: glass, sandblast cabinet, vinyl, beer glass, pint glass, etched pint glass, etched glass, etched beer glass, 16 oz pint, beer gift, etched harry potter glass, the three broomsticks glass, personalized harry potter glass');

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

$($div6).text('18 were made by their sellers');
