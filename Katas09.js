// 9: object-literals - basics
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('The object literal allows for new shorthands', () => {
    const x = 1;
    const y = 2;
    describe('with variables', () => {
      it('the short version for `{x: x}` is {x}', () => {
        //const short = {x};
        const short = {y};
        // we are using the short hand here and calling for"y"
        assert.deepEqual(short, {y: y});
      });
      it('works with multiple variables too', () => {
        //const short = {x, y: z};
        const short = {x, y};
        // same as above we are short hand calling for only "x"
        // and "y" only and not z
        assert.deepEqual(short, {x: x, y: y});
      });
    });
    describe('with methods', () => {
      const func = () => func;
      it('using the name only uses it as key', () => {
        //const short = {it};
        const short = {func};
        // the function is call for "func", in this case we short hand
        // and replace "it" with "func"
        assert.deepEqual(short, {func: func});
      });
      it('a different key must be given explicitly, just like before ES6', () => {
        //const short = {func};
        const short = {otherKey:func};
        // this case we can't use short hand due to explicityly calling for a key
        // we inserted "otherKey:" in front of func
        assert.deepEqual(short, {otherKey: func});
      });
      it('inline functions, can written as `obj={func(){}}` instead of `obj={func:function(){}}`', () => {
        const short = {
          //inlineFunc: 'I am inline'
          inlineFunc() {
          return 'I am inline'}
        };
        // we changed the function to a short hand version "obj={fun(){}"
        assert.deepEqual(short.inlineFunc(), 'I am inline');
      });
    });
  });
  