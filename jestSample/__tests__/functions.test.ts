// todo: ここに単体テストを書いてみましょう！
import * as functions from "../functions";

test('sumOfArray', () => {
    expect(functions.sumOfArray([1,2,3,4])).toBe(10);
});

test('asyncSumOfArray',() => {
    return functions.asyncSumOfArray([1]).then((res: any) => {
        expect(res).toBe(1);
    })
});

test('asyncSumOfArray',() => {
    return functions.asyncSumOfArray([1,2,3,4]).then((res: any) => {
        expect(res).toBe(10);
    })
});

test('asyncSumOfArraySometimesZero',() => {
    return functions.asyncSumOfArraySometimesZero([1,2,3,4]).then((res: any) => {
        expect(res).toBe(10);
    })
})