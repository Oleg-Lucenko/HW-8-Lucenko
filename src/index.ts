function isString(data: unknown): data is string {
    if (typeof data === 'string') {
        return true;
    } else {
        return false
    };
};

let someArr: any[] = [2, 'a', false, 'b', 4, 9, 'l'];

function stringsFilter(arr: any[]): string[] | [] {
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


function descriptionPresence(obj: ForSomeObject): boolean{
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

function actions(value: string | number | boolean ): string | number | boolean | undefined {
    if (typeof value === 'string') {
        return `Hello, ${value}`;
    } else if (typeof value === 'number') {
        return value + 1;
    } else if (typeof value === 'boolean') {
        return !value;
    };
};



function checkFunction(value: any): value is Function {
    if (typeof value === 'function') {
        return true;
    } else {
        return false;
    };
};

function activation(value: any): void {
    if (checkFunction(value)) {
        value();
    };
};


class Animal {
    run() {
        console.log('run');
    };
};

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

function checkInstance(value: Cat | Dog): void {
    if (value instanceof Cat) {
        alert('its cat')
    } else if ((value instanceof Dog)) {
        alert('its dog')
    };
};

