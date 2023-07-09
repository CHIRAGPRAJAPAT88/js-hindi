const accountId =  144553
let accountEmail = "chirag@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 //   not allowed 

accountEmail = "ch@google.com"
var accountPassword = "212121"
accountCity = "Bengalur"

console.log(accountId);

/* 
Perfer not to use var
because of issue in block  scope and  functional scope
*/

console.table([accountId, accountEmail , accountPassword , accountCity , accountState]);