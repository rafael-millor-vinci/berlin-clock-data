import { BerlinCLock } from "../src/app.js";

describe("the first line ",function() {
    let berlinClock = new BerlinCLock();

    it("minuteLine given 0.00 should return XXXX",function () {

        

        let result = berlinClock.minuteLine(0)

        expect(result).toBe("XXXX");
    });
});