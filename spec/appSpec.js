import { BerlinCLock } from "../src/app.js";

describe("the first line ", function () {
  let berlinClock = new BerlinCLock();

  let date = new Date();

  console.log("DATE : "+date.getMinutes());
  console.log("DATE : "+Number(date.getMinutes()));
  let dateMinute = Number(date.getMinutes());

  it("minuteLine given 0.00 should return XXXX", function () {
    let result = berlinClock.minuteLine(dateMinute);

    expect(result).toBe("XXXX");
  });
  it("minuteLine given 0.00 should return XXXX", function () {
    let result = berlinClock.minuteLine(dateMinute);

    expect(result).toBe("JXXX");
  });
  it("minuteLine given 0.00 should return XXXX", function () {
    let result = berlinClock.minuteLine(dateMinute);

    expect(result).toBe("JJXX");
  });
  it("minuteLine given 0.00 should return XXXX", function () {
    let result = berlinClock.minuteLine(dateMinute);

    expect(result).toBe("JJJX");
  });
  it("minuteLine given 0.00 should return XXXX", function () {
    let result = berlinClock.minuteLine(dateMinute);

    expect(result).toBe("JJJJ");
  });
});
