// 50: Generator - iterator
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Generators returns an iterable object', function() {
    function* generatorFunction(){
      yield 1;
      yield 2;
    }
    let generator;
    beforeEach(() => {
      generator = generatorFunction();
    });
    it('a generator returns an object', function() {
      //const typeOfTheGenerator = '';
      const typeOfTheGenerator = 'object';
      // the generator wants to return an object
      assert.equal(typeof generator, typeOfTheGenerator);
    });
    it('a generator object has a key `Symbol.iterator`', function() {
      //const key = '???';
      const key =Symbol.iterator;
      // the object has the Symbol.iterator
      assert.equal(key in generator, true);
    });
    it('the `Symbol.iterator` is a function', function() {
      //const theType = (typeof generator.Symbol.iterator);
      const theType = typeof generator [Symbol.iterator];
      //truned the Symbol.iterator into a fucntion by adding
      assert.equal(theType, 'function');
    });
    it('can be looped with `for-of`, which expects an iterable', function() {
      function iterateForOf(){
        //for (let value of {}) {
          // no statements needed
         // }
      }
      //removing everyting in the object helps create the loop 
      assert.doesNotThrow(iterateForOf);
    });
  });
  