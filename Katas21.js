// 21: spread - with-strings
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Spread syntax with strings', () => {
    it('expands each character of a string by prefixing it with `...`', function() {
      //const [b, a] = [...'ab'];
      const [a, b] = [...'ab'];
      //switch the a and b variables 
      assert.equal(a, 'a');
      assert.equal(b, 'b');
    });
    it('expands any kind of character', function() {
      //const arr = [...'12'];
      const arr = [...'1 ☢ 2'];
      // 
      assert.deepEqual(arr, ['1', ' ', '☢', ' ', '2']);
    });
    it('works anywhere inside an array (must not be last)', function() {
      //const letters = ['a', 'bcd', 'e', 'f'];
      const letters = ['a', ... 'bcd', 'e', 'f'];
      // adding the spread help create the 6 elements 
      assert.equal(letters.length, 6);
    });
    it('don`t confuse with the rest operator', function() {
      //const [...rest] = ['1234', ...'5'];
      const [...rest] = [...'1234', ...'5'];
      // added spead before '1234'
      assert.deepEqual(rest, [1, 2, 3, 4, 5]);
    });
    it('can also be used as function parameter', function() {
      //const max = Math.max('12345');
      const max = Math.max(...'12345');
      // the spread will need to go before the one needed to spread out
      assert.deepEqual(max, 5);
    });
  });
  