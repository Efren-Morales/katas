// 12: destructuring - object
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Destructure objects', () => {
    it('by surrounding the left-hand variable with `{}`', () => {
      //const x = {x: 1};
      const {x}= {x: 1};
      //curlys braces were added to the x on the left side to pull only the 
      //x value on the right side
      assert.equal(x, 1);
    });
    describe('nested', () => {
      it('multiple objects', () => {
        const magic = {first: 23, second: 42};
        //const {magic: [second]} = {magic};
        const {magic: {second}} = {magic};
        //we need to call "second" and curly braces are needed because 'second: 42'
        // above is in curly braces
        assert.equal(second, 42);
      });
      it('object and array', () => {
        //const {z:[x]} = {z: [23, 42]};
        const {z:[,x]} = {z: [23,42]};
        // 'x' in the array =ed '0' and needed to = 1
        // added a comma before the x to make x = 2 or in this case '42'
        assert.equal(x, 42);
      });
      it('array and object', () => {
        //const [,{lang}] = [null, [{env: 'browser', lang: 'ES6'}]];
        const [,[{lang}]] = [null, [{env: 'browser', lang: 'ES6'}]];
        //added brackets around lang on the left side
        // doing so mimic's the right side with an array in an array which will
        // look for lang in the object
        assert.equal(lang, 'ES6');
      });
    });
    describe('interesting', () => {
      it('missing refs become undefined', () => {
        //const {z} = {x: 1, z: 2};
        const {z} = {x: 1, p:0 };
        // to make z void we got rid of 'z' in the object on the right
        assert.equal(z, void 0);
      });
      it('destructure from builtins (string)', () => {
        //const {substr} = 1;
        const {substr} = '1';
        //turned 1 on the right side into a ''
        assert.equal(substr, String.prototype.substr);
      });
    });
  });
  