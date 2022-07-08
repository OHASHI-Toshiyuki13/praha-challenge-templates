// todo: ここに単体テストを書いてみましょう！
import * as functions from "../functions";

test('sumOfArray', () => {
    expect(functions.sumOfArray([1,2,3,4])).toBe(10);
});

//これは失敗するテスト
test('asyncSumOfArray',() => {
    expect(functions.asyncSumOfArray([1])).toBe(1);
});