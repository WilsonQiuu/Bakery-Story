const Item = function (name, profit, apm, time) {
    this.name = name;
    this.profit = profit;
    this.apm = apm;
    this.time = time;
};

const compare = (b, a) => b.profit - a.profit;

let oven = [
    { "Name": "Love_Letter_Cupcakes", "Cost": 1220, "Price": 1900, "Quantity": 475, "Time": 120 },
    { "Name": "Ras-Heart_Tart", "Cost": 1220, "Price": 1900, "Quantity": 475, "Time": 120 },
    { "Name": "Heart_Punch", "Cost": 1480, "Price": 2500, "Quantity": 625, "Time": 240 },
    { "Name": "Chocolate_Cookies", "Cost": 40, "Price": 140, "Quantity": 140, "Time": 5 },
    { "Name": "Brownies", "Cost": 30, "Price": 110, "Quantity": 110, "Time": 1 },
    { "Name": "Blueberry_Muffins", "Cost": 110, "Price": 390, "Quantity": 130, "Time": 15 },
    { "Name": "Chocolate_Cake", "Cost": 380, "Price": 700, "Quantity": 350, "Time": 60 },
    { "Name": "Peach_Cobbler", "Cost": 740, "Price": 1200, "Quantity": 300, "Time": 180 },
    { "Name": "Chocolate_Tart", "Cost": 2480, "Price": 6000, "Quantity": 1500, "Time": 1440 },
    { "Name": "Carrot_Cake", "Cost": 1720, "Price": 3400, "Quantity": 850, "Time": 720 },
    { "Name": "Instant_Pudding", "Cost": 200, "Price": 352, "Quantity": 88, "Time": 5 },
    { "Name": "Croissant", "Cost": 1180, "Price": 2100, "Quantity": 525, "Time": 120 },
    { "Name": "Coco_Cream_Muffins", "Cost": 2680, "Price": 4700, "Quantity": 1175, "Time": 360 },
    { "Name": "Red_Velvet_Cookies", "Cost": 4360, "Price": 7100, "Quantity": 1775, "Time": 180 },
    { "Name": "Chocolate_Cherry_Trifle", "Cost": 4620, "Price": 8500, "Quantity": 2125, "Time": 480 },
    { "Name": "PB_Chocolate_Cake", "Cost": 460, "Price": 700, "Quantity": 175, "Time": 30 },
    { "Name": "Fruit_Tart", "Cost": 1500, "Price": 2600, "Quantity": 650, "Time": 360 },
    { "Name": "Pool_Pie", "Cost": 2400, "Price": 4800, "Quantity": 1200, "Time": 720 },
    { "Name": "Gymnastic_Cake", "Cost": 3540, "Price": 8100, "Quantity": 2025, "Time": 1140 },
    { "Name": "Yule_Log", "Cost": 2300, "Price": 4000, "Quantity": 1000, "Time": 360 },
    { "Name": "Holiday_Cupcake", "Cost": 3660, "Price": 7000, "Quantity": 1750, "Time": 600 },
    { "Name": "Pumpkin_Pie", "Cost": 5340, "Price": 14000, "Quantity": 1750, "Time": 2880 },
    { "Name": "Strawberry_Cake", "Cost": 1400, "Price": 2300, "Quantity": 575, "Time": 240 },
    { "Name": "Holiday_Waffles", "Cost": 1320, "Price": 2100, "Quantity": 525, "Time": 120 },
    { "Name": "Cronut", "Cost": 1790, "Price": 6700, "Quantity": 1675, "Time": 450 },
    { "Name": "Sticky_Cake", "Cost": 2240, "Price": 4500, "Quantity": 1125, "Time": 720 },
    { "Name": "Heart_toast", "Cost": 1400, "Price": 2300, "Quantity": 575, "Time": 360 },
    { "Name": "Marchmallow_Chicks", "Cost": 2700, "Price": 4700, "Quantity": 1175, "Time": 360 },
    { "Name": "Sugar_Cookies", "Cost": 5240, "Price": 12700, "Quantity": 1270, "Time": 1440 },
    { "Name": "Celebration_cupcakes", "Cost": 2300, "Price": 4000, "Quantity": 1000, "Time": 360 },
    { "Name": "Brawny_Muffin", "Cost": 2360, "Price": 3900, "Quantity": 975, "Time": 240 },
    { "Name": "Banana_Bread", "Cost": 3780, "Price": 8200, "Quantity": 1025, "Time": 960 },
    { "Name": "Berry_Flan", "Cost": 3440, "Price": 5700, "Quantity": 1425, "Time": 240 },
    { "Name": "Chocolate_flan", "Cost": 4700, "Price": 9000, "Quantity": 2250, "Time": 600 },
    { "Name": "basic_Flan", "Cost": 4720, "Price": 8700, "Quantity": 2175, "Time": 480 },
    { "Name": "Wagashi", "Cost": 1400, "Price": 2200, "Quantity": 550, "Time": 120 },
    { "Name": "Mochi_Ice_Cream", "Cost": 2040, "Price": 3400, "Quantity": 850, "Time": 240 },
    { "Name": "Strawberry_cheesecake", "Cost": 2800, "Price": 5100, "Quantity": 1275, "Time": 480 },
    { "Name": "Dango", "Cost": 2300, "Price": 4200, "Quantity": 1050, "Time": 480 },
    { "Name": "Raspberry_macarons", "Cost": 1040, "Price": 1600, "Quantity": 400, "Time": 60 },
    { "Name": "Vanilla_Cupcake", "Cost": 2800, "Price": 4700, "Quantity": 1175, "Time": 240 },
    { "Name": "Quilcakes", "Cost": 2160, "Price": 3500, "Quantity": 875, "Time": 180 },
    { "Name": "Well-done_toast", "Cost": 3240, "Price": 5900, "Quantity": 1475, "Time": 480 },
    { "Name": "Daisy_Cake", "Cost": 2740, "Price": 4800, "Quantity": 1200, "Time": 360 },
    { "Name": "Crow_pie", "Cost": 3060, "Price": 5400, "Quantity": 1350, "Time": 360 },
    { "Name": "Red_Velvet_Cake", "Cost": 6100, "Price": 14700, "Quantity": 1225, "Time": 1440 },
    { "Name": "Black_Forest_Cake", "Cost": 6880, "Price": 15500, "Quantity": 3875, "Time": 1080 },
    { "Name": "Turkish_Delights", "Cost": 1520, "Price": 2500, "Quantity": 625, "Time": 240 },
    { "Name": "Citrine_Cake", "Cost": 3040, "Price": 5100, "Quantity": 1275, "Time": 240 },
    { "Name": "Red_Berry_Delights", "Cost": 4160, "Price": 7600, "Quantity": 1900, "Time": 480 },
    { "Name": "Valentine_Cookies", "Cost": 5040, "Price": 12200, "Quantity": 1525, "Time": 1440 },
    { "Name": "Blueberry_Buckle", "Cost": 5960, "Price": 14400, "Quantity": 3600, "Time": 1440 },
    { "Name": "Soccer_Cake_Pops", "Cost": 2280, "Price": 3700, "Quantity": 925, "Time": 180 },
    { "Name": "Lemon_Muffin", "Cost": 2080, "Price": 3600, "Quantity": 900, "Time": 300 },
    { "Name": "Gingerbread_Cookies", "Cost": 3420, "Price": 6000, "Quantity": 750, "Time": 360 },
    { "Name": "Cherry_Muffin", "Cost": 2980, "Price": 6000, "Quantity": 1500, "Time": 720 }
]
let drinks = [
    { "Name": "Coffee", "Cost": 30, "Price": 110, "Quantity": 110, "Time": 5 },
    { "Name": "Espresso", "Cost": 250, "Price": 900, "Quantity": 450, "Time": 240 },
    { "Name": "Hot_Chocolate", "Cost": 750, "Price": 3300, "Quantity": 825, "Time": 960 },
    { "Name": "Latte", "Cost": 3020, "Price": 7300, "Quantity": 730, "Time": 1440 },
    { "Name": "Egg_Nog", "Cost": 1580, "Price": 2900, "Quantity": 580, "Time": 480 },
    { "Name": "Heart_Coffee", "Cost": 1760, "Price": 2900, "Quantity": 725, "Time": 240 },
    { "Name": "Chamomile_Tea", "Cost": 740, "Price": 1100, "Quantity": 275, "Time": 60 },
    { "Name": "Sparkling_Cider", "Cost": 1940, "Price": 3400, "Quantity": 850, "Time": 360 },
    { "Name": "Mocha", "Cost": 800, "Price": 1200, "Quantity": 300, "Time": 30 },
    { "Name": "Love_Potion", "Cost": 4640, "Price": 11200, "Quantity": 1120, "Time": 1440 },
    { "Name": "Green_Juice", "Cost": 1320, "Price": 2100, "Quantity": 525, "Time": 120 },
    { "Name": "Chocolate Milkshake", "Cost": 2920, "Price": 5400, "Quantity": 1350, "Time": 480 },
    { "Name": "Red_Juice", "Cost": 2100, "Price": 3600, "Quantity": 900, "Time": 300 }
]
// { "Name": "", "Cost": , "Price": , "Quantity": , "Time":  },
let icecream = [
    { "Name": "Chocolate_Scoop", "Cost": 1660, "Price": 2600, "Quantity": 650, "Time": 120 },
    { "Name": "Spumoni", "Cost": 2640, "Price": 4200, "Quantity": 1050, "Time": 120 },
    { "Name": "Green_Tea_Scoop", "Cost": 2660, "Price": 4400, "Quantity": 1100, "Time": 240 },
    { "Name": "Banana_Split_Sundae", "Cost": 3840, "Price": 7000, "Quantity": 1750, "Time": 480 },
    { "Name": "Vanilla_Scoop", "Cost": 4520, "Price": 11900, "Quantity": 2975, "Time": 2880 },
    { "Name": "Strawberry_Scoop", "Cost": 4620, "Price": 10000, "Quantity": 2500, "Time": 960 }
]

function main() {
    const table = document.querySelector("#result");
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }

    let recipes = [];
    let app = "";
    app = document.getElementById("appliance").value;
    if (app == "drink_mixer") {
        recipes = drinks;
    }
    else if (app == "oven") {
        recipes = oven;
    }
    else if (app == "icecream") {
        recipes = icecream;
    }
    const items = [];
    let lower;
    let stoves;

    let amountPerMinute;
    lower = document.getElementById("time").value;
    lower = parseInt(lower, 10);

    stoves = document.getElementById("number").value;
    stoves = parseInt(stoves, 10);

    for (let i = 0; i < recipes.length; i += 1) {
        // gets the values
        let cost = parseFloat(recipes[i].Cost);
        let price = parseFloat(recipes[i].Price);
        let quantity = parseInt(recipes[i].Quantity, 10);
        let time = parseInt(recipes[i].Time, 10);
        let name = recipes[i].Name;

        const ppu = (price - cost) / quantity;
        amountPerMinute = Math.min(45.0, quantity * stoves / Math.max(time, lower));
        const item = new Item(name, (ppu * amountPerMinute), amountPerMinute, time);
        items.push(item);
    }


    items.sort(compare);


    let result = document.getElementById("result");

    for (let i = items.length - 1; i >= 0; i -= 1) {
        // add a new row to the table
        let row = result.insertRow(-1);

        // add the data to the new row
        let nameCell = row.insertCell(0);
        nameCell.innerHTML = items[i].name.padEnd(3, ' ');

        let profitCell = row.insertCell(1);

        profitCell.innerHTML = Math.round(items[i].profit * 100) / 100.0;

        let apmCell = row.insertCell(2);
        apmCell.innerHTML = Math.round(items[i].apm * 100) / 100.0;

        let timeCell = row.insertCell(3);
        timeCell.innerHTML = items[i].time;
    };
}

