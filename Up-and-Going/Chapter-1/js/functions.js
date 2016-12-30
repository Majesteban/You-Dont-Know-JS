/********example*******/
function printAmount() {
  console.log( amount.toFixed( 2 ) );
}

var amount = 99.99;

printAmount(); // "99.99"

amount = amount * 2;

printAmount(); // "199.98"


/********example*******/
//function printAmount(amt) {
  //console.log( amt.toFixed( 2 ) );
//}

function formatAmount() {
  return "$" + amount.toFixed( 2 );
}

amount = 99.99;

printAmount( amount * 2 ); // "199.98"

amount = formatAmount();
console.log ( amount );

/********example*******/
const TAX_RATE = 0.08;

function calculateFinalPurchaseAmount() {
  // calculate the new amount with the tax
  amount = amount + (amount * TAX_RATE);

  // return the new amount
  return amount;
}

var amount = 99.99;

amount = calculateFinalPurchaseAmount( amount );

console.log( amount.toFixed( 2 ) ); // "107.99"
