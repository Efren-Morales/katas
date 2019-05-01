// 13: destructuring - defaults
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('When destructuring you can also provide default values', () => {
    it('just assign a default value, like so `a=1`', () => {
      //const [a:1] = [];
      const [a=1] = [];
      //we indicated if anything is empty it will equal a=1 
      assert.equal(a, 1);
    });
    it('for a missing value', () => {
      //const [b=2] = [1,,3];
      const [,b=2] = [1,,3];
      //added a comma before 'b' indicates when a space is identified it will 
      // equal 2
      assert.equal(b, 2);
    });
    it('in an object', () => {
      //const [a, b=2] = {a: 1};
      const {a, b=2} = {a: 1};
      //turning the left side into an object to equal the right side 
      assert.equal(b, 2);
    });
    it('if the value is undefined', () => {
      //const {a, b} = {a: 1, b: void 0};
      const {a, b=2} = {a: 1, b: void 0};
      // defining the left side as b=2 creates a defualt which is needed 
      assert.strictEqual(b, 2);
    });
    it('also a string works with defaults', () => {
      //const [b=2] = '1';
      const [a, b=2] = '1';
      // b=2 was taken care of and we needed to define a
      // a, on the left side defined a =1
      assert.equal(a, '1');
      assert.equal(b, 2);
    });
  });
  