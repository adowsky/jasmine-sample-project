export default class AdvancedMath {
    static decomposeIntoPrimeFactors(value) {
        if(typeof(value) !== "number" || !Number.isInteger(value) || value < 0) {
            throw Error(`Passing ${value} is not the best idea. You should try with something numeric`)
        }

        const result = []
        let nextFactor = 3
        const process = (factor) => {
            while (value % factor == 0) {
                result.push(factor);
                value /= factor;
            }
        }

        process(2);
        while(value > 1) {
            if(nextFactor*nextFactor > value) {
                // there is no factors less than sqared root of value => value is prime
                result.push(value)
                break
            }

            process(nextFactor)
            nextFactor += 2 
        }

        return result;
    } 

}