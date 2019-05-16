// 49: Generator - creation
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Generators can be created in multiple ways', function() {
    it('the most common way is by adding `*` after `function`', function() {
      //function g() {}
      function* g() {}
      //added the `*` after the word function to correctly create the 
      //generator function
      assertIsGenerator(g());
    });
    it('as a function expression, by adding a `*` after `function`', function() {
      //let g = function() {};
      let g = function*() {};
      //adding the `*` in the function expression does the same as the
      //one above
      assertIsGenerator(g());
    });
    it('inside an object by prefixing the function name with `*`', function() {
      //let obj = {
      let obj = {*
      //simply added the`*` in the object also creates a generator
        g() {}
      };
      assertIsGenerator(obj.g());
    });
    it('computed generator names, are just prefixed with a `*`', function() {
      const generatorName = 'g';
      //let obj = {
      let obj = {*
      //prefixing the object with * will compute a generator name
        [generatorName]() {}
      };
      assertIsGenerator(obj.g());
    });
    it('inside a class the same way', function() {
      const generatorName = 'g';
      //class Klazz {
      class Klazz {*
      //doing the same with class like above will also compute a 
      //generator name
        [generatorName]() {}
      }
      assertIsGenerator(new Klazz().g());
    });
  
    function assertIsGenerator(gen) {
      const toStringed = '' + gen;
      assert.equal(toStringed, '[object Generator]');
    }
  });
  