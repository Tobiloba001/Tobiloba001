'use strict';
/*
const Person = function (firstName, birthYear) {
  //Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //Never do this
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const jonas = new Person('Jonas', 900);
console.log(jonas);

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
const Glory = new Person('Tobi', 25);
console.log(matilda, jack, Glory);

console.log(jonas instanceof Person);
const jay = 'Jay';
console.log(jay instanceof Person);

//Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();

Person.hey = function () {
  console.log('Hey there 🧏‍♂️');
};
Person.hey();

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(jonas));

// Person.prototype.species = 'Homo Sapiens';
// console.log(jonas.species);
/*
console.log(jonas.hasOwnProperty('firstName'));

console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__);

const arr = [3, 5, 6, 7, 3, 22, 4, 7, 9, 0, 4];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique);

/////Exercise
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
const bmwAcc = new Car('BMW', 120);

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} going at ${this.speed}`);
};

bmwAcc.accelerate();
bmwAcc.accelerate();

function lame(dd) {
  console.log(`this is ${dd}`);
}
lame('ffhh');

//class expression
// const PersonCl = class{}

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  //instance
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not full name`);
  }

  get fullName() {
    return this._fullName;
  }

  //Ststic method
  static hey() {
    console.log('Hey there 🧏‍♂️');
    console.log(this);
  }
}
PersonCl.hey();

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
console.log(PersonCl.prototype);
console.log(jessica.__proto__ === PersonCl.prototype);
// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
jessica.greet();
console.log(jessica.age);

const walter = new PersonCl('walter white', 1965);

const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    return this.movements.push(mov);
  },
};
console.log(account.latest);
account.latest = 50;
console.log(account.movements);

class PersonClass {
  constructor(firstLame, birthDate) {
    this.firstLame = firstLame;
    this.birthDate = birthDate;
  }
}

// Object.create()
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstLame, birthYear) {
    this.firstLame = firstLame;
    this.birthYear = birthYear;
  },
};

const Glowry = Object.create(PersonProto);
console.log(Glowry);
Glowry.name = 'Glory';
Glowry.birthYear = '1997';
Glowry.calcAge();

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1950);
sarah.calcAge();

class Fist {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed} km/h`);
  }

  get speedUs() {
    return `${this.make} going at the ${this.speed / 1.6} mi/h`;
  }
  set speedUs(conv) {
    this.speed = conv * 1.6;
  }
}

const mike = new Fist('BMW', 110);
mike.accelerate();
console.log(mike.speedUs);
mike.speedUs = 50;
console.log(mike);
// const jessica = new PersonCl('Jessica Davis', 1996);

///Inheritance between classes: Constructor function
const Person = function (firstName, birthYear) {
  //Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const track = new Person('Femi', 2000);

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};
console.log(track);
console.log(Person.prototype);
Student.prototype = Object.create(Person.prototype);
console.log(Student.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} amd i study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');

Student.prototype.constructor = Student;
console.log(mike);
mike.introduce();

////Exercise////////
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
// const bmwAcc = new Car('BMW', 120);

Car.prototype.accelerate = function () {
  this.speed += 10;
  this.charge -= 1;
  console.log(
    `${this.make} going at ${this.speed} with a charge of ${this.charge}%`
  );
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
  console.log(this.charge);
};

const vovlo = new EV('Tesla', 20, 10);
const eletricCar = new EV('Golf', 44, 15);
// eletricCar.chargeBattery().accelerate();

vovlo.chargeBattery(100);

vovlo.accelerate();

///Inheritance between classes: ES6 Classes
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  //instances
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not full name`);
  }

  get fullName() {
    return this._fullName;
  }

  //Ststic method
  static hey() {
    console.log('Hey there 🧏‍♂️');
    console.log(this);
  }
}
PersonCl.hey();

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} ${this.course}`);
  }
}

const martha = new StudentCl('Matha Jones', 2003, 'Computer science');
console.log(martha);
martha.introduce();
martha.calcAge();


//Inheritance between objects
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstLame, birthYear) {
    this.firstLame = firstLame;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
steven.init('Glory', 1000);
steven.calcAge();

//Inheriting the PersonProto features
//StudentProt = prototype like PersonProto
const studentProto = Object.create(PersonProto);
studentProto.init = function (firstLame, birthYear, course) {
  PersonProto.init.call(this, firstLame, birthYear);
  this.course = course;
};

studentProto.introduce = function () {
  console.log(`My name is ${this.firstLame} ${this.course}`);
};
const jay = Object.create(studentProto);
jay.init('glory', 2000, 'Geology');
jay.introduce();
jay.calcAge();
*/
class Account {
  //Public fields (only on the instances)
  locale = navigator.language;

  //Private Fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    //Protected property
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening  an account ${owner}`);
  }

  //Public Interface
  getMovement() {
    return this.#movements;
  }
  deposit(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  _approveLoan() {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
// acc1.#movements.push(33);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovement());
// console.log(acc1.#pin);
console.log(acc1);

function add(a) {
  return function (b) {
    return a + b;
  };
}

console.log(add(4)(5));
