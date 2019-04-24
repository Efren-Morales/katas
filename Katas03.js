
describe('Tagged template strings, are an advanced form of template strings', function() {
    it('syntax: prefix a template string with a function to call (without "()" around it)', function() {
      function tagFunction(s) {
        return s.toString();
      }
      //var evaluated = tagFunc `template string`;
      var evaluated = tagFunction `template string`;//this was called w/o using ()
      // changed tagFunc to tagFunction which was declared
      assert.equal(evaluated, 'template string');
    });
    describe('the tag function can access each part of the template', function() {
      describe('the 1st parameter receives only the pure strings of the template string', function() {
        function tagFunction(strings) {
          return strings;
        }
        it('the strings are an array', function() {
          //var result = 'template string';
          var result = tagFunction`template string`;
          // inserted "tagFunction" before the string and replaced
          // the single quotes to back ticks. 
          assert.deepEqual(tagFunction`template string`, result);
        });
        it('expressions are NOT passed to it', function() {
          //var tagged = tagFunction`one${23}`;
          var tagged = tagFunction`one${1}two`; // added "two" to the end
          //found out replacing any number but 2 in the curly braces will work
          
          assert.deepEqual(tagged, ['one', 'two']);
        });
      });
      describe('the 2nd and following parameters contain the values of the processed substitution', function() {
        var one = 1;
        var two = 2;
        var three = 3;
        it('the 2nd parameter contains the first expression`s value', function() {
          //function firstValueOnly(strings, first_value) {
          function firstValueOnly(strings, first_value) {
            return first_value;
          }// returned "firstValue"
          assert.equal(firstValueOnly`uno ${one}, dos ${two}`, 1);
        });
        it('the 3rd parameter contains the second expression`s value', function() {
          //function firstValueOnly(strings, firstValue, ____) {
            //return secondValue;
          //}
          function firstValueOnly(strings, firstValue, secondValue) {
            return secondValue;
          }
          //added a secondValue to the string to return secondValue
          assert.equal(firstValueOnly`uno ${one}, dos ${two}`, 2);
        });
        it('using ES6 rest syntax, all values can be accessed via one variable', function() {
          function valuesOnly(stringsArray, ...allValues) { // using the new ES6 rest syntax
            return allValues;
          }
          //needed to created a return "allValues" is what we added to the return
          assert.deepEqual(valuesOnly`uno=${one}, dos=${two}, tres=${three}`, [1, 2, 3]);
        });
      });
    });
  });