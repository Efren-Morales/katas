// 44: Map - basics
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Map` is a key/value map', function(){
    it('`Map` is a new global constructor function', function() {
      //const typeOfMap = '???';
      const typeOfMap = 'function';
      // map is another type of function
      assert.equal(typeof Map, typeOfMap);
    });
    it('provides `new Map().set()` to add key+value pair, `get()` to read it by key', function() {
      //let map = new Map();
      //map.set('key', 'null');
      //const value = map.get();
      let map = new Map();
      map.set('key', 'value');
      const value = map.get('key');
      // we returned 'value' from 'key' and called 'key' in the map.get()
       assert.equal(value, 'value');
    });
    it('`has()` tells if map has the given key', function() {
      //let map = new Map();
      //map.set('key', 'value');
      //const hasIt = map.hazz;
      
      let map = new Map();
      map.set('key', 'value');
      const hasIt = map.has('key');
      //const hasIt needed to = map.has() in order to make it true "key"
      // needed to be called  from the map.set ()
      assert.equal(hasIt, true);
    });
    it('a map is iterable', function() {
      //let map = new Map();
      //map.set('1', 'one');
      //map.set('2', 'two');
      //const mapAsArray = map; // hint: kata #29 http://tddbin.com/#?kata=es6/language/array-api/from
      
      let map = new Map();
      map.set('1', 'one');
      map.set('2', 'two');
      const mapAsArray = Array.from(map); // hint: kata #29 http://tddbin.com/#?kata=es6/language/array-api/from
      //`Array.from` converts an array-like object or list into an Array'
      
      assert.deepEqual(mapAsArray, [['1', 'one'], ['2', 'two']]);
    });
    it('complex types can be keys', function() {
      //const obj = {x: 1};
      //const otherObj = {x: 1};
      //let map = new Map();
      //map.set(obj, '');
      //map.set(otherObj, '');
      
      const obj = {x: 1};
      const otherObj = {x: 1};
      let map = new Map();
      map.set(obj, '');
      //we removed map.set(otherObj, '')
      
      
      assert.equal(map.has(otherObj), false);
    });
  });
  