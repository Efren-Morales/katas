// 48: Set - add
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`add()` appends a new element to the end of a Set object.', function(){
    let set;
    beforeEach(() => set = new Set());
    it('adds every value, of any type, only once', function() {
      const fn = () => {};
      set.add(1);
      set.add(1);
      set.add(fn);
      //set.add({fn});
      set.add(fn);
      //removing the curly braces from fn will show 2 sets as fn
      //which adds only one value for fn which is needed
      assert.equal(set.size, 2);
    });
    it('is chainable', function() {
      //set.add.add;
      set.add(1);
      set.add(2);
      //created a chain function with 2 unique values to make the 
      //assertion true
      assert.equal(set.has(2), true);
    });
    it('call without params adds undefined', function() {
      //set.add
      set.add();
      // adding () to the set.add
      assert.equal(set.has(void 0), true);
    });
    it('0, -0 and +0 are equal', function() {
      //set.add();
      //set.add();
      set.add(0)
      set.add(-0)
      set.add(+0)
      //adding a chain and inputing the 3 differnt shows it's true
      assert.equal(set.has(+0), true);
    });
  });
  