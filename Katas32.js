// 32: array - `Array.prototype.find` 
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Array.prototype.find` makes finding items in arrays easier', () => {
    it('takes a compare function', function() {
      //const found = [true].find(true);
      const found = [true].find(item => item === true);
      
      assert.equal(found, true);
    });
    it('returns the first value found', function() {
      const found = [0, 1, 2].find(item => item > 1);
      // all we needed to add was 2 in the array
      assert.equal(found, 2);
    });
    it('returns `undefined` when nothing was found', function() {
      //const found = [1, 2, 3].find(item => item === 2);
      const found = [1, 2, 3].find(item => item === 0);
      //changing the item to be anything but 1,2,3 will return undefined
      assert.equal(found, void 0);
    });
    it('combined with destructuring complex compares become short', function() {
      const bob = {name: 'Bob'};
      const alice = {name: 'Alice'};
      //const found = [bob, alice].find(({name}) => name);
      const found = [bob, alice].find(({name}) => name ==="Alice");
      //identified the return 'alice' at the end
      assert.equal(found, alice);
    });
  });
  