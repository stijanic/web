var friends = new Object();
 
friends.bill = new Object();
friends.steve = new Object();
 
friends.bill.firstName = "Bill";
friends.bill.lastName = "Goby"; 
friends.bill.number = "12345";
friends.bill.address = ["5 road to Nowhere", "Nowhere City", "Noland"];

friends.steve.firstName = "Steve";
friends.steve.lastName = "Toby";
friends.steve.number = "67890";
friends.steve.address = ["10 road to Nowhere", "Nowhere City", "Noland"];

var list = function(friends) {
    for (var person in friends) {
        console.log(person);
    }
}

var search = function(firstName) {
    for (var person in friends) {
    	console.log(person); //key
    	console.log(friends[person]); //object
        if (friends[person].firstName === firstName) {
            console.log(friends[person].firstName); //value
            console.log(friends[person].lastName); //value
            console.log(friends[person].number); //value
            console.log(friends[person].address); //value
            return friends[person];
        }
    }
}