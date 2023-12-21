function isString(data: string | number): boolean {
    if (typeof data === 'string') {
        return true;
    } else {
        return false
    };
};

let someArr: any[] = [2, 'a', false, 'b', 4, 9, 'l'];

function stringsFilter(arr: any[]) {
    return arr.filter(item => typeof item === 'string');
};

interface ForSomeObject {
    name: string,
    description: string,
    quantity: number
}

let someObj: ForSomeObject = {
    name: 'Apple watch',
    description: 'Lorem ipsum dolor',
    quantity: 3
};

function propertySearch(obj: ForSomeObject) {
    if ('quantity' in obj && typeof obj.quantity === 'number') {
        return obj.quantity;
    } else {
        return false
    };
};


function descriptionPresence(obj: ForSomeObject): boolean {
    if ('description' in obj) {
        return true;
    } else {
        return false;
    };
};

function quantityPresence(obj: ForSomeObject): boolean {
    if ('quantity' in obj) {
        return true;
    } else {
        return false;
    };
};

function quantityIsNumber(obj: ForSomeObject): boolean {
    if (typeof obj.quantity === 'number') {
        return true;
    } else {
        return false;
    };
};


function objectNarrowing(obj: ForSomeObject): boolean {
    if (descriptionPresence(obj) && quantityPresence(obj) && quantityIsNumber(obj)) {
        return true;
    } else {
        return false;
    };
};



let someVar: string | number | boolean;

function actions(value: string | number | boolean ) {
    if (typeof value === 'string') {
        return `Hello, ${value}`;
    } else if (typeof value === 'number') {
        return value + 1;
    } else if (typeof value === 'boolean') {
        return !value;
    };
};



function checkFunction(value: any): boolean {
    if (typeof value === 'function') {
        return true;
    } else {
        return false;
    };
};

function activation(value: any) {
    if (checkFunction(value)) {
        value();
    };
};


class Animal {
    numberOfPaws: number;
    presenceOfWings: boolean;

    constructor(numberOfPaws: number, presenceOfWings: boolean) {
        this.numberOfPaws = numberOfPaws;
    }
}

class Cat extends Animal {
    meow() {
        alert('meow');
    }
};


class Dog extends Animal {
    woof() {
        alert('woof');
    };
};

function checkInstance(value: Cat | Dog) {
    if (value instanceof Cat) {
        alert('its cat')
    } else if ((value instanceof Dog)) {
        alert('its dog')
    };
};

