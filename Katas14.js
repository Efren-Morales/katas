// 14: destructuring - parameters
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Destructuring function parameters', () => {
    describe('destruct parameters', () => {
      it('multiple params from object', () => {
        //const fn = ({id}, {name}) => {
        const fn = ({id, name}) => {
          //we removed the 2 objects and made one object with a set of curly 
          // brackets
          assert.equal(id, 42);
          assert.equal(name, 'Wolfram');
        };
        const user = {name: 'Wolfram', id: 42};
        fn(user);
      });
      
      
      it('multiple params from array/object', () => {
        //const fn = ([{name}]) => {
        const fn = ([,{name}]) => {
          // created 2 objects, one infront of the 1st object to identify name
          // to eaqual Alice
          assert.equal(name, 'Alice');
        };
        const users = [{name: 'nobody'}, {name: 'Alice', id: 42}];
        fn(users);
      });
    });
    describe('default values', () => {
      it('for simple values', () => {
        //const fn = (id, name='Bobby') => {
        const fn = (id, name='Bob') => {
          //the message was calling bobby = bob 
          // we changed bobby to bob based off the assert
          assert.strictEqual(id, 23);
          assert.strictEqual(name, 'Bob');
        };
        fn(23);
      });
      it('for a missing array value', () => {
        const defaultUser = {id: 23, name: 'Joe'};
        //const fn = ([user]) => {
        const fn = ([user,defaultUser ]) => {
          // we were only calling user in the array and not defaultUser
          // added defaultUser to the array will have us call defaultUser
          assert.deepEqual(user, defaultUser);
        };
        fn([]);
      });
      it('mix of parameter types', () => {
        //const fn = (id, [arr], {obj}) => {
        const fn = (id=1,[arr=2],{obj=3}) => {
          //made id, arr, obj = what is defined below 
          assert.equal(id, 1);
          assert.equal(arr, 2);
          assert.equal(obj, 3);
        };
        fn(void 0, [], {});
      });
    });
  });