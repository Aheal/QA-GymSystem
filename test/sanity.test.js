var sanity = require('../logic/sanity'); 

describe('noNumbers', () => {
    it('should return a string with out number in it' , () => {
        const result = sanity.noNumbers('Alex9')
        expect(result).toBe('Alex');
    });
});
describe('noLetters', () => {
    it('should return a number with out letters in it' , () => {
        expect(result).toBe('9');
    });
});  
