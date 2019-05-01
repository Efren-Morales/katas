// 11: destructuring - string
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Destructuring also works on strings', () => {
    it('destructure every character, just as if the string was an array', () => {
      //let a, b, c = 'abc';
      let [a, b, c] = 'abc';
      // we destructured the variable with brackets and now a = a
      assert.deepEqual([a, b, c], ['a', 'b', 'c']);
    });
    it('missing characters are undefined', () => {
      //const [a, c] = 'ab';
      const [a,c] = 'a';
      //removed b from right side since it's not defined or needed.
      assert.equal(c, void 0);
    });
    it('unicode character work too', () => {
      //const [space, coffee] = 'a ☕';
      const [a,space,coffee] = 'a ☕';
      // added an "a" before "space" to mimic what's on the right side
      assert.equal(coffee, '\u{2615}');
    });
  });