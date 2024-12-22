//Simple Queueing System for Customer Service

//Hash function to calculate the index for customer names
function hashFunction(name) {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash += name.charCodeAt(i);
    }
    return hash % 5; // Using modulo 5 to fit the table size of 5
}

//Customer service queue
const customers = new Array(5).fill(null); // Hashed table to store customer names
const queue = []; // Array to manage the order of customers in the queue

//Function to add a customer to the queue
function addCustomer(name) {
    const index = hashFunction(name);
    customers[index] = name; // Store the customer's name in the hashed table
    queue.push(name); // Add the customer's name to the end of the queue
    console.log(`Customer ${name} added with number ${queue.length}`);
}

//Function to service a customer by their queue number
function serviceCustomer(number) {
    if (number < 1 || number > queue.length) {
        alert("Invalid number. Please enter a valid customer number.");
        return;
    }
    
    const customerName = queue[number - 1]; // Get the customer's name from the queue
    customers[hashFunction(customerName)] = null; // Remove the customer's name from the hashed table
    queue.splice(number - 1, 1); // Remove the customer from the queue using splice for accurate index handling
    console.log(`Servicing customer: ${customerName}`);
    console.log("Updated hashed table:", customers); // Display the updated hashed table
}

//Adding customers to the queue
addCustomer("Elaine"); // Add Elaine to the queue
addCustomer("Althea"); // Add Althea to the queue
addCustomer("Angelo"); // Add Angelo to the queue
addCustomer("Lito"); // Add Lito to the queue
addCustomer("Engelbert"); // Add Engelbert to the queue

//Display current queue status
console.log("Current Queue:", queue); // Show the current state of the queue

//Simulate servicing a customer by asking for their number
const serviceNumber = parseInt(prompt("Enter the customer number to be serviced (1-5):")); // Prompt user for customer number
serviceCustomer(serviceNumber); // Service the specified customer

//Final display of the updated queue and hashed table status
console.log("Final Queue:", queue); // Show the final state of the queue
console.log("Final Hashed Table:", customers); // Show the final state of the hashed table
