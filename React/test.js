function myFunc() {
    this.name = "hello";

    this.sample = function () {
        return function () {
            console.log(this.name);
        }.bind(this);
    }
}

var smp = new myFunc();
console.log(smp.name);
var fun = smp.sample()();