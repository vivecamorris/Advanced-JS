var myObject = {name: "Viveca"};
var neighborsObject = {name: "Ellen"};

var setName = function(obj, name) {
	obj["name"] = name;
	// could also write to accomplish the same thing:
	// obj.name = name;
};

// Another way to accomplish this same functionality:

var Viveca = {
	name: "Viveca",
	setName: function(name) {
		this.name = name;
	}
};

