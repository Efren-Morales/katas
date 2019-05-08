// 28: class - super in constructor
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Inside a class`s constructor `super()` can be used', () => {
    it('`extend` a class and use `super()` to call the parent constructor', () => {
      //class A {constructor() { this.levels = 1; }}
      //class B {constructor() {this.levels++;}}
      class A {constructor() { this.levels = 1; }}
      class B extends A {constructor() {super();this.levels++;}}
      //class b needed to extend from class A.  It asked to name
      // the class super().  this was all done on line 10
      assert.equal(new B().levels, 2);
    });
    it('`super()` may also take params', () => {
     //class A {constructor(startValue=1, addTo=1) { this.counter = startValue + addTo; }}
      //class B extends A {constructor(...args) {super();this.counter++; }
      class A {constructor(startValue=1, addTo=1) { this.counter = startValue + addTo; }}
      class B extends A {constructor(...args) {super(...args);this.counter++; }}
      // super() took in the (...args); on line 19
      assert.equal(new B(42, 2).counter, 45);
    });
    it('it is important where you place your `super()` call!', () => {
      //class A {inc() { this.countUp = 1; }}
     // class B extends A {inc() {super.inc();this.countUp = 2;
          //return this.countUp;}}
          
      //class A {inc() { this.countUp = 1; }}
      //class B extends A {inc() {super.inc();this.countUp = 2;
          //return this.countUp;}}
          
      class A {inc() { this.countUp = 1; }}
      class B extends A {inc() {this.countUp = 2; super.inc();
      //needed to move super.inc() on the left to render the 1
          return this.countUp;}}    
      assert.equal(new B().inc(), 1);
    });
    it('use `super.constructor` to find out if there is a parent constructor', () => {
      class ParentClassA {constructor() {"parent"}}
      class B extends ParentClassA {constructor() {super();
          //this.isTop = '' + super.konstructer;}}
          this.isTop = '' + super.Constructor;}}
  //konstructer is misspelled fixing it will fix the 'undefined' 
      assert(new B().isTop.includes('ParentClassA'), new B().isTop);
    });
  });
  