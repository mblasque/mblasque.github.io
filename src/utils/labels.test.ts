import { labels, _labels } from "./labels";

const expectedKeys = ["about"];

describe("Labels", () => {
    _labels.forEach((label) => {
        test.only(`Test if there is content for both languages for key ${label.key}`, () => {
            expect(label.en).not.toBe("");
            expect(label.pt).not.toBe("");
        })
    });

    test("Check if we have all expectedKeys", () => {
        expect(expectedKeys.length).toBe(_labels.length);

        expectedKeys.forEach((key) => {
            expect(_labels.filter((label) => { label.key == key })).toBeGreaterThan(0);
        })
    })

    test("Label func should return expect value", () => {
        
    });
});