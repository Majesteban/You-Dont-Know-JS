// How much is this new phone going to cost me?

// Constants and Variables
const TAX_RATE = 0.0825; // 8.25% Sales TAX_RATE
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;
const SPENDING_THRESHOLD = 350; // The most I am willing to spend.

var bankBalance = prompt( "Please enter your current bank balance:" );
var phoneCount = 0;
var baseAmount = (PHONE_PRICE + ACCESSORY_PRICE)
var total = 0;

//Functions
function calculateFinalPurchaseAmount(amt) {

  amt = amt + (amt * TAX_RATE);

  return amt;
}

function formatAmount() {
  return total.toFixed(2);
}

// Program

// Keep adding phones and accessories until spending threshold is reached.
while ( total < SPENDING_THRESHOLD) {
  total = baseAmount * phoneCount;
  phoneCount++;
  console.log(total);
}

total = calculateFinalPurchaseAmount(total);
console.log(total);

total = formatAmount();
console.log(total);

console.log(bankBalance);

if (total < bankBalance) {
  console.log("Ring 'er up!'")
}
