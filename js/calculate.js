var cost_money1 = document.getElementById("cost_money[1]");
var cost_money2 = document.getElementById("cost_money[2]");
var cost_money3 = document.getElementById("cost_money[3]");
var totalPrice = document.getElementById("totalPrice");
cost_money1.onchange = function() {
  var total = parseInt(cost_money1.value) + parseInt(cost_money1.value);
  totalPrice.value = total;
}
cost_money2.onchange = function() {
  var total = parseInt(cost_money2.value) + parseInt(cost_money2.value);
  totalPrice.value = total;
}

cost_money3.onchange = function() {
  var total = parseInt(cost_money3.value) + parseInt(cost_money3.value);
  totalPrice.value = total;
}
