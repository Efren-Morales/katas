describe('`let` restricts the scope of the variable to the current block', () => {
    describe('`let` vs. `var`', () => {
      it('`var` works as usual, it`s scope is the function', () => {
        if (true) {
          //let varX = true;
          var varX = true;
          // switch let to var, showing us that let and var are doing 
          // the same thing. let only presist in the scope where Var 
          // reaches outside of the scope
        }
        assert.equal(varX, true);
      });
      it('`let` restricts scope to inside the block', () => {
        if (true) {
          //var letX = true;
          let letX = true;
          // changed var to let in this case. Just remember that let involes 
          // only what's inside the scope and Var reaches outside of the scope
        }
        assert.throws(() => console.log(letX));
      });
    });
  
    describe('`let` usage', () => {
      it('`let` use in `for` loops', () => {
        let obj = {x: 1};
        //for (var key in obj) {}
        for (let key in obj) {}
        // read above comments
        assert.throws(() => console.log(key));
      });
      it('create artifical scope, using curly braces', () => {
        {
          //var letX = true;
          let letX = true;
          // the word var can be used globALLY where let only deals with the
          //scope
        }
        assert.throws(() => console.log(letX));
      });
    });
  });
  