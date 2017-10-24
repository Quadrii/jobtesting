var package_prices = new Array();
package_prices["static"]=20;
package_prices["advanced"]=25;
package_prices["professional"]=35;
package_prices["enterprise"]=75;

function getWebsitePrice() {
	var package_price = document.getElementsByName('selectedwebsite');

	for (i=0; i < package_price.length; i++) {
		if (package_price[i].checked) {
			user_input = package_price[i].value;
		}
	}

	return package_prices[user_input];
}

function domainPrice() {
	var domainPrice = document.getElementById('noCheckk');

	if(domainPrice.checked) {
		return(10000);
	} else {
		return(0);
	}
}