/** 
 * Wilson Qiu
 * Console App
 * Reads the recipes from a console app and then caclulates the best recipes
 */

const fs = require('fs');
const readline = require('readline-sync');

const Item = function (name, cost, price, quantity, time) {
    this.name = name;
    this.cost = cost;
    this.price = price;
    this.quantity = quantity;
    this.time = time;
};

const compare = (a, b) => b.profit - a.profit;

const main = function () {
    const inFile = 'stove_Recipes.txt';
    let app = '';
    app = readline.question('(input 1 for Stove 2 for drinks): ');
    if (app === '2') {
        inFile = 'drinks_Recipes.txt';
    }

    const input = fs.readFileSync(inFile, 'utf8');
    const items = [];
    let name;
    let cost;
    let price;
    let quantity;
    let time;
    let lower;
    let stoves;
    let amountPerMinute;
    lower = readline.question('How long will you be gone for? (Minutes): ');
    lower = parseInt(lower, 10);
    let x = NaN;
    if (Number.isNaN(lower)) { // if no time is entered it assumes you are not leaving the game 
        lower = 1;
    }
    stoves = readline.question('Enter number of appliances: ');
    stoves = parseInt(stoves, 10);
    if (Number.isNaN(stoves)) { // if no input it defaults to 1 stove (duh)
        stoves = 1;
    }


    const lines = input.split('\n');
    for (let i = 0; i < lines.length; i += 1) {
        [name, cost, price, quantity, time] = lines[i].split(' ');
        cost = parseFloat(cost);
        price = parseFloat(price);
        quantity = parseInt(quantity, 10);
        time = parseInt(time, 10);

        const item = new Item(name, cost, price, quantity, time);
        item.time = Math.max(time, lower);
        const ppu = (price - cost) / quantity;
        amountPerMinute = Math.min(45.0, quantity * stoves / Math.max(time, lower));
        item.apm = amountPerMinute;
        item.profit = ppu * amountPerMinute;
        items.push(item);
    }

    items.sort(compare);
    for (let i = items.length - 1; i >= 0; i -= 1) {
        console.log(`${items[i].name.padEnd(30, ' ')} \t ${items[i].profit.toFixed(4)} \t\t Per minute /45: ${items[i].apm} \t Time: ${items[i].time}`);
        console.log('');
    }
    console.log(items.length);
};

main();
