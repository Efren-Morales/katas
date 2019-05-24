// 62: Map - `has()` 
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`map.has()` indicates whether an element with a key exists', function() {
    it('finds nothing in an empty map', function() {
      let map = new Map();
      //const hasKey = map.hazz(void 0);
      const hasKey = map.has(void 0);
      //hazz needed to be spelled has
      assert.equal(hasKey, false);
    });
    it('finds an element by it`s key', function() {
      let map = new Map([['key', 'VALUE']]);
      //const hasKey = map.has('');
      const hasKey = map.has('key');
      //input the 'key' name will find the element
      assert.equal(hasKey, true);
    });
    it('finds `undefined` as key too', function() {
      let map = new Map([[void 0, 'not defined key']]);
      //const hasUndefinedAsKey = map;
      const hasUndefinedAsKey = map.has();
      //it's telling us when the function is empty it'll be undefined
      assert.equal(hasUndefinedAsKey, true);
    });
    it('does not coerce keys', function() {
      let map = new Map([[1, 'one']]);
      //const findsStringOne = true;
      const findsStringOne =map.has(true);
      //needed to put true inside the function of map.has()
      assert.equal(map.has('1'), findsStringOne);
    });
    it('after removal (using `map.delete(<key>)`) it doesnt find the element anymore', function() {
      let map = new Map([[1, 'one']]);
      map.delete (1);
      // created a function map.delete with 1 in the function
      assert.equal(map.has(1), false);
    });
    it('adding an item (using `map.set(key, value)`) later will make `has()` return true', function() {
      let map = new Map();
      map.set(void 0,'one');
      //wants us to use the map.set with void 0 inside the function
      assert.equal(map.has(void 0), true);
    });
  });