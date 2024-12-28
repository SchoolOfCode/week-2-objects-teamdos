// Import the members from script.js
const { member1, member2, member3 } = require('./script.js');

// test for testing member objects
describe('Member Objects Definition Tests', () => {
    // Test if member1, member2, and member3 are defined
    test('member1 should be defined', () => {
        expect(member1).toBeDefined();
    });

    test('member2 should be defined', () => {
        expect(member2).toBeDefined();
    });

    test('member3 should be defined', () => {
        expect(member3).toBeDefined();
    });
});

