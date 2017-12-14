const RATE = 6.7;

let amount = 6000 / RATE;

// cash part
let usdt = 0;

// coin part
let btcCount = 0;

// final wallet
let last = amount;

let prices = [
  6253, 6533, 7012, 7261, 7265, 7476, 7274, 7143, 7390, 7255, 
  6965, 6548, 6098, 6354, 6598, 7058, 7486, 7844, 7711, 7842,
  8116, 8131, 8196, 8188, 8184, 8490, 9096, 9666, 9972, 9999
];

prices.forEach((price, index) => {
  if (index === 0) {
    // initial: buy coins
    usdt = amount / 2;
    btcCount = (amount / 2) / price;
  } else {
    let btcAmount = btcCount * price;
    let total = btcAmount + usdt;
    let half = total / 2;

    // reblance
    if (usdt > half) {
      // coin price grow down
      btcCount += (usdt - half) / price;
    } else {
      // coin price grow up
      btcCount -= (btcAmount - half) / price;
    }
    
    usdt = half;
    last = usdt + btcCount * price;
  }
  
  // round index
  console.error(`#${index + 1} ${usdt.toFixed(2)} ${btcCount.toFixed(2)} ${(btcCount * price).toFixed(2)}, total = ${last.toFixed(2)}`);
});

// conclusion:
// 1. the last price is very important
// 2. the lowest price the very important (coins+)

console.error(`\nlast = ${(last * RATE).toFixed(2)}, earnings = ${((last - amount) * 100 / amount).toFixed(2)}%`);

