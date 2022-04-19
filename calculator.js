const calculator = {
    plus: function (a, b) {
        console.log(a + b);
    },
    minus: function (a, b) {
        console.log(a - b);
    },
    div: function (a, b) {
        console.log(a / b);
    },
    multi: function (a, b) {
        console.log(a * b);
    },
    powerof: function (a, b) {
        console.log(a ** b);
    },
};

calculator.add(2, 3);
calculator.minus(2, 3);
calculator.div(2, 3);
calculator.multi(2, 3);
calculator.powerof(2, 3);
