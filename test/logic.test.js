const { calculatePrice, combinationSum } = require('../src/logic');


describe("Testing Logic functions", () => {
    it("Testing combinationSum", () => {
        const candidates = [50,75,100,120];
        const target = 250;
        const result = combinationSum(candidates, target);

        expect(result.length).toEqual(5);
        expect(result[0]).toEqual([50,50,50,50,50])
    })

    it("Testing calculatePrice", () => {
        const candidates = [[50,50,50,50,50]];
        const result = calculatePrice(candidates);

        expect(result).toEqual([295]);
    })
})