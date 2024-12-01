// Import the ourTeam object and logFavouriteAnimals function from script.js
const { ourTeam, logFavouriteAnimals } = require('../../script');

// Test for Logging favourite animals of each team member
describe('Logging Tests', () => {
    // Test to spy on console.log and check favouriteAnimal logging
    test('should log the favouriteAnimal of each team member', () => {
        // Spy on console.log
        console.log = jest.fn();

        // Call the function to log favourite animals
        logFavouriteAnimals();

        // Check if console.log was called the expected number of times
        expect(console.log).toHaveBeenCalledTimes(3); // Expecting it to be called 3 times

        // Check that console.log was called with any value for each member's favouriteAnimal
        Object.values(ourTeam).forEach(member => {
            expect(console.log).toHaveBeenCalledWith(member.favouriteAnimal);
        });

        // Restore the original console.log
        console.log.mockRestore();
    });
});