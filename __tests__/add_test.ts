const {add} = require('../add')

describe("add", () => {
    describe("given an empty string input", () => {
        it('returns 0', () => {
            expect(add("")).toBe(0)
        })
    })

    describe("given a single characters number string input", () => {
        it("returns the single number given", () => {
            expect(add("1")).toBe(1)
            expect(add("2")).toBe(2)
        })
    })

    describe("given a multiple character number string input", () => {
        it("returns multiple characters number", () => {
            expect(add("123")).toBe(123)
        })
    })

    describe("given a two characters number string input", () => {
        it("returns the sum of the 2 characters", () => {
            expect(add("1,2")).toBe(3)
        })
    })

    describe("given a two characters number string input", () => {
        it("returns the sum of the 2 characters", () => {
            expect(add("11,22")).toBe(33)
        })
    })

    describe("given a three characters number string input", () => {
        it("returns the sum of the 3 characters", () => {
            expect(add("1,2,3")).toBe(6)
        })
    })

    describe("given negative number", () => {
        it("throws an error", () => {
            expect(() => {add("-1")}).toThrow("Negative not supported")
        })
    })
})