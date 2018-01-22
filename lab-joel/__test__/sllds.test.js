const solution = require('../lib/sllds.js');

describe('sllds.js', () => {

  describe('testing insert head', () => {
    test('testing input value should insert element at x index', () => {
      let testInsertHead = new solution.LinkedList();
      testInsertHead.add(2);
      testInsertHead.add(7);
      testInsertHead.add(8);
      testInsertHead.add(13);
      testInsertHead.add(100);
      testInsertHead.addAt(Math.ceil(testInsertHead.size()/2)-1, 'Hello!');

      expect(testInsertHead.elementAt(testInsertHead.indexOf(testInsertHead.elementAt(Math.ceil(testInsertHead.size()/2)-1)))).toBe('Hello!');
    });
  });

  describe('testing insert end', () => {
    test('testing input is at the end of list', () => {
      let testInsertEnd = new solution.LinkedList();
      testInsertEnd.add(2);
      testInsertEnd.add(7);
      testInsertEnd.add(8);
      testInsertEnd.addAt(testInsertEnd.size()-1, 14);
      testInsertEnd.remove(testInsertEnd.elementAt(testInsertEnd.size()-1));
      console.log(testInsertEnd.elementAt(0));
      expect(testInsertEnd.elementAt(testInsertEnd.size()-1)).toBe(14);
    });
  });

  describe('testing reverse list', () => {
    test('testing list has been reversed', () => {
      let testReverseList = new solution.LinkedList();
      testReverseList.add(1);
      testReverseList.add(2);
      console.log('second', testReverseList.head().Node());
      expect(testReverseList.head().reverseList().toBe({head: {value: 2, next: {value: 1, next:null}}}));

    });
  });
});
