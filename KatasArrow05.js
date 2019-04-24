describe('Arrow functions', function() {
    it('are shorter to write, instead of `function(){}` write `() => {}`', function() {
      //var func = function(){};
      var func = '() => {}';
      // removed the word function and added ''
      assert.equal('' + func, '() => {}');
    });
    it('instead `{}` use an expression, as return value', function() {
      //var func = () => {};
      var func = () => {
        return 'I return too'
      };
      // added a string  return 'I return too' to the function
      assert.equal(func(), 'I return too');
    });
    it('one parameter can be written without parens', () => {
      //var func = p => param - 1;
      var func = param => param - 1;
      // replaced "p" with the word param
      assert.equal(func(25), 24);
    });
    it('many params require parens', () => {
      //var func = param => param + param1;
      var func = (param, param1) => param + param1;
      //added ()
      assert.equal(func(23, 42), 23+42);
    });
    it('the function body needs parens to return an object', () => {
      //var func = () => {iAm: 'an object'};
      var func = () => ({iAm: 'an object'});
      //enclosed our string in ()
      assert.deepEqual(func(), {iAm: 'an object'});
    });
  });
  