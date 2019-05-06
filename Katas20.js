// 20: spread - with-arrays
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Spread syntax with arrays', () => {
    describe('basically', () => {
      it('expands the items of an array by prefixing it with `...`', function() {
        const middle = [1, 2, 3];
        //const arr = [0, middle, 4];
        const arr = [0, ...middle, 4];
        // spread is called in the beginning or the middle
        assert.deepEqual(arr, [0, 1, 2, 3, 4]);
      });
      it('an empty array expanded is no item', function() {
        //const arr = [0, [], 1];
        const arr = [0, ...[], 1];
        // adding the spread in the middle with the array eliminates it
        assert.deepEqual(arr, [0, 1]);
      });
    });
    describe('is (in a way) the opposite to the rest syntax', function() {
      it('both use `...` to either expand all items and collect them', function() {
        //const [...rest] = [...[,1, 2, 3, 4, 5]];
        const [...rest] = [...[1, 2, 3, 4, 5]];
        //removed the comma infront of the 1
        assert.deepEqual(rest, [1, 2, 3, 4, 5]);
      });
      it('rest syntax must be last in an array, spread can be used in any place', function() {
        //const [a, b, ...rest] = [1, [2, 3], 4, 5];
        const [a, b, ...rest] = [1,... [2,3], 4, 5];
        //added a spead after 1
        assert.equal(a, 1);
        assert.equal(b, 2);
        assert.deepEqual(rest, [3, 4, 5]);
      });
    });
    describe('used as function parameter', () => {
      it('prefix with `...` to spread as function params', function() {
        const magicNumbers = [1, 2];
        const fn = (magicA, magicB) => {
          assert.deepEqual(magicNumbers[0], magicA);
          assert.deepEqual(magicNumbers[1], magicB);
        };
        //fn(magicNumbers);
        fn(...magicNumbers);
        // added a spread to the function
        
      });
      it('pass an array of numbers to Math.max()', function() {
        //const max = Math.max(...[23, 0, 42, 43]);
        const max = Math.max(...[23, 0, 42,]);
        // removed 43 due to the assert calling 42 the max
        assert.equal(max, 42);
      });
    });  
    describe('used as constructor parameter', () => {
      it('just like in a function call (is not possible using `apply`)', () => {
        class X {
          constructor(a, b, c) { return [a, b, c]; }
        }
        //const args = [1];
        const args = [1,2,3];
        //the const args needed to mirror the constructor (a,b,c)
        assert.deepEqual(new X(...args), [1, 2, 3]);
      });
    });
  });
  