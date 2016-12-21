var amount = 99.99;

amount = amount * 2;

console.log( amount );

// convert 'amount' to a string, and
// add "$" on the beginning.
amount = "$" + String( amount );

console.log( amount );

var TAX_RATE = 0.08; // 8% sales tax

amount = 99.99;

amount = amount * 2;

amount = amount + (amount * TAX_RATE);

console.log( amount );              // 215.9784
console.log( amount.toFixed( 2 ) ); // "215.98"
