// calculateDiscount()
// isAdult()
// formatUserName()



function calculateDiscount(price, discount) {
  return price - (price * discount);
}

function isAdult(age) {
  return age >= 18;
}

function formatUserName(user) {
  return user.firstName + " " + user.lastName;
}



module.exports = { calculateDiscount, isAdult, formatUserName };