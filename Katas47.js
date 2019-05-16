47: Set - basics
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Set` lets you store unique values of any type', function(){
  it('`Set` is a new global constructor function', function() {
    //const typeOfSet = '???';
    const typeOfSet = 'function';
    // the assertion error to the right called for 'function'on the right
    assert.equal(typeof Set, typeOfSet);
  });
  it('every value in a set is unique', function() {
    let set = new Set();
    set.add(1);
    set.add(1);
    //const expectedSize = 2;
    const expectedSize = 1;
    //because the 1st set.add (1) makes the 2nd identical set null
    //therefore I made the const expectedSize = 1
    assert.equal(set.size, expectedSize);
  });
  it('the string "1" is different to the number 1', function() {
    let set = new Set();
    set.add(1);
    set.add("1");
    //becase "1"is different we added a chain of set.add to return 2
    assert.equal(set.size, 2);
  });
  it('even NaN is equal to NaN', function() {
    let set = new Set();
    set.add(NaN);
    //set.add(Na);
    set.add(NaN);
    //we are showing NaN are the same which returns only 1 
    assert.equal(set.size, 1);
  });
  it('+0 and -0 are seen as equal', function() {
    let set = new Set();
    set.add(+0);
    set.add(0);
    //set.add('-0');
    set.add(-0);
    // removing the string from -0 made it equal to +0
    assert.deepEqual([...set.values()], [+0]);
  });
});
