// 18: rest - as-parameter
// To do: make all tests pass, leave the assert lines unchanged!

describe('Rest parameters in functions', () => {
    it('must be the last parameter', () => {
      //const fn = (...rest, veryLast) => {
      const fn = (...rest) => {
        // removed 'veryLast' in the parameter to make the last parameter
        assert.deepEqual([1, 2], rest);
      };
      fn(1, 2);
    });
    it('can be used to get all other parameters', () => {
      //const fn = (firstParam, secondParam, rest) => {
      const fn = (firstParam, secondParam,...rest) => {
        //add '...' before rest pulls 3 and 4 but leaves null and 2
        // adding ...rest says im pulling the 'rest'
        assert.deepEqual([3,4], rest);
      };
      fn(null, 2, 3, 4);
    });
    it('makes `arguments` obsolete', () => {
      //const fn = () => {
      const fn = (...args) => {
        assert.deepEqual([42, 'twenty three', 'win'], args);
        //we made it obsolete by identifing args in rest '...args'
      };
      fn(42, 'twenty three', 'win');
    });
    it('eliminate `arguments`!!!', () => {
      //const fn = () => arguments;
      const fn = (...args) => args;
      const [firstArg, ...rest] = fn(1, 2, 3);
      //not sure why resting args and changing arguments to args on the 
      // right side works 
      assert.deepEqual([2, 3], rest);
    });
  });
  
  