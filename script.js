let statement = "A long time ago in a country far away from Nigeria...";
var wordlen=statement.length;
console.log(wordlen)

// for A
console.log(statement.slice(0, 1));
console.log(statement.substring(0, 1));
console.log(statement.substr(0, 1));

// for ago
console.log(statement.slice(12, 16));
console.log(statement.substring(12, 16));
console.log(statement.substr(12, 3));

// for Country
console.log(statement.slice(20, 28));
console.log(statement.substring(20, 28));
console.log(statement.substr(20, 8));

// for away
console.log(statement.slice(32, 37));
console.log(statement.substring(32, 37));
console.log(statement.substr(32, 5));

// for Nigeria
console.log(statement.slice(42, 50));
console.log(statement.substring(42, 50));
console.log(statement.substr(42, 8));

// for ...
console.log(statement.slice(50, 54));
console.log(statement.substring(50, 54));
console.log(statement.substr(50, 4));



