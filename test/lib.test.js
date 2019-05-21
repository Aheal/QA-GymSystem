const lib = require('../logic/lib');
const db = require('../logic/db');

describe('Log in', () =>{
    beforeEach(() => {
        db.getPass = jest.fn().mockReturnValue({pass:'123'});
    });
    it('Should return success cause the pass is correct', () => {
        const data = {user:"Aheal",pass:'123'}; 

        result = lib.login(data);
        expect(result).toBe('success');
    });
    it('Should return failure cause the pass is incorrect', () => {
        const data = {user:"Aheal",pass:'1'}; 

        result = lib.login(data);
        expect(result).toBe('failure');
    });
    it('Should return failure cause the pass is missing', () => {
        const data = {user:"Aheal",pass:''}; 

        result = lib.login(data);
        expect(result).toBe('failure');
    });
});