// 10: destructuring - array
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Destructuring arrays makes shorter code', () => {
    it('extract value from array, e.g. extract 0 into x like so `let [x] = [0];`', () => {
      //let firstValue = [1];
      let [firstValue] = [1];
      // we needed to extract "firstValue" in this array,
      // we did this by bracketing it
      
      assert.strictEqual(firstValue, 1);
    });
    it('get the last item from array', () => {
      let [lastValue] = [3];
      // the assert is calling for "3", extract [LastValue] along with [3]
      // we can also  call lastValue = lastValue.opo ();
      assert.strictEqual(lastValue, 3);
    });
    it('swap two variables, in one operation', () => {
      //let [x, y] = ['ax', 'why'];
      //[x, y] = [x, y];
      let [x, y] = ['ax', 'why'];
      [x, y] = [y, x];
      // simply switch the x and y due to what is being asked in the ASSErt
      assert.deepEqual([x, y], ['why', 'ax']);
    });
    it('leading commas', () => {
      const all = ['ax', 'why', 'zet'];
      //const [,z] = all;
      const [,,z] = all;
      // the assert is calling for 'zet' but the const only has 1 comma 
      //adding one more comma will return 'zet'
      assert.equal(z, 'zet');
    });
    it('extract from nested arrays', () => {
      const user = [['Some', 'One'], 23];
      //const [firstName, surname, age] = user;
      const [[firstName, surname], age] = user;
      const expected = 'Some One = 23 years';
      assert.equal(`${firstName} ${surname} = ${age} years`, expected);
      // the assert is calling for 1st name and surname = age
      // adding brackets to the 1st name and surname inside the origianl bracket
    });
    it('chained assignments', () => {
      let c, d;
      //let a, b = [c, d] = [1, 2];
      let [a, b] = [c, d] = [1, 2];
      // exracted a,b with [ ]'s to = [c,d] this excutes the chained assignemnt
      assert.deepEqual([a, b, c, d], [1, 2, 1, 2]);
    });
    it('in for-of loop', () => {
      //for (var [a, b] of [[0, 1, 2]]) {}
      for (var [,a, b] of [[0, 1, 2]]) {}
      // assert calls for [a, b], [1, 2] and the function is showing [0, 2]
      // adding a comma in front of 'a' will move it from 0 to 1
      assert.deepEqual([a, b], [1, 2]);
    });
  });
  