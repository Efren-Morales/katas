// 55: Number - isInteger
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Number.isInteger()` determines if a value is an integer', function(){
    it('`isInteger` is a static function on `Number`', function() {
      //const whatType = 'method';
      const whatType = 'function';
      //needed to change method to function
      assert.equal(typeof Number.isInteger, whatType);
    });
    describe('zero in different ways', function() {
      it('0 is an integer', function() {
        //const zero = null;
        const zero = 0;
        //const zero is 0 needed to change null to 0
        assert(Number.isInteger(zero));
      });
      it('0.000', function() {
        //const veryZero = 0.000001;
        const veryZero = 0.00000;
        //canst is calling for very zero, needed to remove the 1 
        assert(Number.isInteger(veryZero));
      });
      it('the string "0" is NOT an integer', function() {
        //const stringZero = 0;
        const stringZero = '0';
        // zero needed to be made into a string and not an integer
        assert(Number.isInteger(stringZero) === false);
      });
    });
    describe('one in different ways', function() {
      it('0.111 + 0.889', function() {
        //const rest = 0.88;
        const rest = 0.889;
        //const rest was missing the 9 in 0.889
        assert(Number.isInteger(0.111 + rest));
      });
      it('0.5 + 0.2 + 0.2 + 0.1 = 1 ... isn`t it?', function() {
        //const oneOrNot = 0.5 + 0.2 + 0.3;
        const oneOrNot = 0.5 + 0.2 + 0.3 +0.1;
        //needed to add 0.1 
        assert(Number.isInteger(oneOrNot) === false);
      });
      it('parseInt`ed "1" is an integer', function() {
        //const convertedToInt = Number.parse('1.01');
        const convertedToInt = Number.parseInt('1.01');
        //number.parse is missing Int
        assert(Number.isInteger(convertedToInt));
      });
    });
    describe('what is not an integer', function() {
      it('`Number()` is an integer', function() {
        //const numberOne = Number;
        const numberOne = Number();
        //needed to ()after the Number
        assert(Number.isInteger(numberOne));
      });
      it('`{}` is NOT an integer', function() {
        //const isit = Number.isWhat({});
        const isit = Number.isInteger({});
        //needed to change isWhat to isInteger
        assert(isit === false);
      });
      it('`0.1` is not an integer', function() {
        //const isit = Number(0.1);
        const isit = Number.isInteger(0.1);
        //needed to add .isInteger to make this false
        assert(isit === false);
      });
      it('`Number.Infinity` is not an integer', function() {
        //const isit = Number.isInteger(Number.MAX_VALUE);
        const isit = Number.isInteger(Number.Infinity);
        //needed to call number.infinity opposed to number.MAX_VALUE
        assert(isit === false);
      });
      it('`NaN` is not an integer', function() {
        //const isit = Number.isFloat(NaN);
        const isit = Number.isInteger(NaN);
        // changed Number.isFloat to Number.isInteger
        assert(isit === false);
      });
    });
  });
  