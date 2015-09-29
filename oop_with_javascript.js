function myobject() {
	this.containedValue = 0;
	this.othercontainedValue = 1;
	this.anothercontainedValue = 2;
}

var mything = new myobject();

alert(mything.containedValue);
alert(mything.othercontainedValue);
alert(mything.anothercontainedValue);
