var package_prices = new Array();
package_prices["static"]=20;
package_prices["advanced"]=25;
package_prices["professional"]=35;
package_prices["enterprise"]=75;


var hosting_prices = new Array();
hosting_prices["None"]=0;
hosting_prices["small slice"]=5;
hosting_prices["medium slice"]=5;
hosting_prices["large slice"]=7;

function getWebsitePrice() {
	var package_price = document.getElementsByName('selectedwebsite');

	for (i=0; i < package_price.length; i++) {
		if (package_price[i].checked) {
			user_input = package_price[i].value;
		}
	}

	return package_prices[user_input];
}

function getHostingPrice() {
	var hostSelect = document.getElementById('filling');

	return hosting_prices[hostSelect.value];
}

function getDomainPrice() {
	var domainPrice = document.getElementById('noCheckk');

	if(domainPrice.checked) {
		return(10000);
	} else {
		return(0);
	}
}

function calculateTotal() {
	var total = getWebsitePrice() + getDomainPrice();
	var totalEl = document.getElementById('totalPrice');

	document.getElementById('totalPrice').innerHTML = "Your Total is: $" + total;
	totalEl.style.display = 'block';
}

function hideTotal() {
	var totalEl = document.getElementById('totalPrice');
	totalEl.style.display = 'none';
}