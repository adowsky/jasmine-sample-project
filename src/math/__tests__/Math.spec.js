import AdvancedMath from "../Math"

describe("Decomposition into prime factors", () => {
    [
        "123",
         null, 
         undefined, 
         true, 
         {}, 
         11.2
    ].forEach(value => {
        it(`should throw on ${typeof(value)} value type`, () => {
            //when && then
            expect(() => AdvancedMath.decomposeIntoPrimeFactors(value)).toThrow()
        })
    });
    
    [
        [1, []],
        [2, [2]],
        [4, [2,2]],
        [6,[2,3]]
    ].forEach(params => {
        it(`should return ${params[1]} for ${params[0]} value`, () => {
            //given
            const value = params[0]

            //when
            const actual = AdvancedMath.decomposeIntoPrimeFactors(value)

            //then
            expect(actual).toEqual(params[1])
        })
    });
})