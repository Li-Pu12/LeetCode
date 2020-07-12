import Sort from "../../../../algorithm/sort/js/index.js";
import examples from "./examples";

describe("test function Buble Sort", () => {
    it("test buble sort with numbers", () => {
        examples.numbers.forEach((example) =>
            expect(Sort.bubleSort(example[0])).toEqual(example[1])
        );
    });
});
