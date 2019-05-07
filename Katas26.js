// 26: class - more-extends
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Classes can inherit from another', () => {
    it('extend an `old style` "class", a function, still works', () => {
      //let A;
      //class B extends A {}
      let A = function(){};
      class B extends A {}
      //letting A = a function and extending class B works
      assert.equal(new B() instanceof A, true);
    });
    
    describe('prototypes are as you know them', () => {
      class A {}
      class B extends A {}
      it('A is the prototype of B', () => {
        //const isIt = A.isPrototypeOf(null);
        const isIt = A.isPrototypeOf(B);
  // in order to make it true we need to say A is a prototype of B
        assert.equal(isIt, true);
      });
      it('A`s prototype is also B`s prototype', () => {
        //const proto = B;
        const proto = B.prototype;
  // if A's and B's are the same prototype's '.prototype' works for both
        // Remember: don't touch the assert!!! :)
        assert.equal(A.prototype.isPrototypeOf(proto), true);
      });
    });
  
    describe('`extends` using an expression', () => {
      it('e.g. the inline assignment of the parent class', () => {
        let A;
        //class B extends (A = {}) {}
        class B extends (A = class {}) {}
  //class A was recongized above      
        assert.equal(new B() instanceof A, true);
      });
      it('or calling a function that returns the parent class', () => {
        const returnParent = (beNull) => beNull ? null : class {};
        //class B extends returnParent {}
        class B extends (returnParent(true)) {}
        assert.equal(Object.getPrototypeOf(B.prototype), null);
      });
    });
  });
  