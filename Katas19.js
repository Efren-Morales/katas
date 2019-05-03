// 19: rest - with-destructuring
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Rest parameters with destructuring', () => {
  it('must be last', () => {
    //const [...all, last] = [1, 2, 3, 4];
    const [...all] = [1, 2, 3, 4];
    //'last' was an invalid element and was removed to make the ...rest
    // work
    assert.deepEqual(all, [1, 2, 3, 4]);
  });
  it('assign rest of an array to a variable', () => {
    //const [...all] = [1, 2, 3, 4];
    const [a,...all ] = [1, 2, 3, 4];
    //made 'a' the variable and assigned 'rest' to it in the array
    assert.deepEqual(all, [2, 3, 4]);
  });
  // the following are actually using `spread` ... oops, to be fixed #TODO
  it('concat differently', () => {
    const theEnd = [3, 4];
    //const allInOne = [1, 2, ...[theEnd]];
    const allInOne = [1, 2, ...theEnd];
    //removed the brackets from '...theEnd'
    assert.deepEqual(allInOne, [1, 2, 3, 4]);
  });
  it('`apply` made simple, even for constructors', () => {
    const theDate = [2015, 1, 1];
    //const date = new Date(theDate);
    const date = new Date(...theDate);
    // needed to rest 'theDate'
    assert.deepEqual(new Date(2015, 1, 1), date);
  });
});
