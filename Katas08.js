// 8: block scope - const
// To do: make all tests pass, leave the asserts unchanged!
// Follow the hints of the failure messages!

describe('`const` is like `let` plus read-only', () => {
    describe('scalar values are read-only', () => {
      it('e.g. a number', () => {
        //const constNum = 0;
        // we changed let to const , const is set as let is more
        //fluid
        let constNum = 0;
        //constNum = 1;
        //removed constNum = 1 or comment out line 12
       
        assert.equal(constNum, 0);
      });
      it('or a string', () => {
        //const constString = 'I am a const';
        let constString = 'I am a const';
        // switched out const to let above
        
        //constString = 'Cant change you?';
        //removed line 22 from the function
       
        assert.equal(constString, 'I am a const');
      });
    });
    const notChangeable = 23;
    it('const scope leaks too', () => {
      assert.equal(notChangeable, 23);
    });
    describe('complex types are NOT fully read-only', () => {
      it('array`s items can be changed', () => {
        const arr = [];
        //arr[0] = 0;
        arr[0] = 42;
        // we wanted to let the arrow function become 42 based off
        // the assert below
        assert.equal(arr[0], 42);
      });
      it('object`s can be modified', () => {
        const obj = {x: 1};
        //obj.x = 2;
        obj.x = 3;
        // we changed the x= to 3 because the is asking for it 
        //on line 47.  the above we could all comment out but in this
        // it's not a read only and can be modified
        assert.equal(obj.x, 3);
      });
    });
  });