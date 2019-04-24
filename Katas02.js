describe('Template string, can contain multiline content', function() {
    it('wrap it in backticks (`) and add a newline, to span across two lines', function() {
      //var normalString = `line1 //// line3`;
      var normalString = `line1\n\nline3`; // changed out the forward 
      // slashes and replaced them with back slashes. Added "n" as well.
      
  
      assert.equal(normalString, 'line1\n\nline3');
    });
    it('even over more than two lines', function() {
      //var multiline = ``;
      var multiline = `\n\n\n`;// added 3 more lines to equal 4 lines
      // back slashes with n was needed to make this happen
          
        
      assert.equal(multiline.split('\n').length, 4);
    });
    describe('and expressions inside work too', function() {
      var x = 42;
      it('like simple variables', function() {
        //var multiline = `line 1 $ {x}`;
        var multiline = `line 1\n${x}`;//bunched up the $ and {x} to the right and returned them
      //to show an additinal line.  added \n next to 1 to add another line
  
        assert.equal(multiline, 'line 1\n\n    42');
      });
      it('also here spaces matter', function() {
        //var multiline = ``;
        var multiline = `\n\n42`;// added 2 more lines before the 42
  
        assert.equal(multiline, '\n\n42');
      });
    });
  });
  