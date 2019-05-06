// 22: class - creation
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Class creation', () => {
    it('is as simple as `class XXX {}`', function() {
      // TestClass;
       class TestClass{}
       //added the name class before test class and added an object {}
      const instance = new TestClass();
      assert.equal(typeof instance, 'object');
    });
    it('a class is block scoped', () => {
     
      //removing 'class Inside {}' syntax creates  'undefined' in the assert
      {class Inside {}}
      // leaving above syntax makes a scope withing a scope not being defined
      assert.equal(typeof Inside, 'undefined');
    });
    it('the `constructor` is a special method', function() {
      //class User {
        //constructor(id) {}
      //}
        class User {
        constructor(id) {
          this.id = id;
        }
      }
      // calling the constructor(id) ' this.id = id' helped identifiy
      // the .id in assert
      const user = new User(42);
      assert.equal(user.id, 42);
    });
    it('defining a method by writing it inside the class body', function() {
      //class User {}
      class User {
        writesTests() {
          return false;
        }
      }
      //added the writesTest () in the body and returned false
      const notATester = new User();
      assert.equal(notATester.writesTests(), false);
    });
    it('multiple methods need no commas (opposed to object notation)', function() {
      //class User {
        //wroteATest() { this.everWroteATest = true; }
        //isLazy() {  }
     // }
      //const tester = new User();
      
      class User {
        wroteATest() { this.everWroteATest = true; }
        isLazy() { return !this.everWroteATest }
      }
      
      const tester = new User();
      
      assert.equal(tester.isLazy(), true);
      tester.wroteATest();
      assert.equal(tester.isLazy(), false);
    });
    it('anonymous class', () => {
      //const classType = typeof {};
      const classType = typeof class {};
      //calling 'typeof' 'class' creates an anonymous class
      assert.equal(classType, 'function');
    });
  });
  