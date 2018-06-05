// exporting single Es6 class

class Father {
	getName(){
		return "Venkat";
	}
	getGender(){
		return "M";
	}
}

class Son extends Father {
	getName(){
		return "Prakash";
	}
	getCity(){
		return "Hyderabad";
	}
}

module.exports = Son;