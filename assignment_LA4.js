let custoQueue = [];

let customerName = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];

for (let customer of custoList){
    custoQueue.push(customer);
    console.log(`Customer ${custoQueue.length()} : ${customer} has entered the Queue. `);
}

while (true){
    console.log("\nCurrent Queue:");
    for (let i = 0; i < custoQueue.length(); i++){
        console.log(`${i + 1}.${custoQueue[i]}`);
    }
}

