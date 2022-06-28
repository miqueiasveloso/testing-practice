import analyzeArray from "../modules/analyzeArray";

test('analyze array', () => {
    expect(analyzeArray([1, 2, 3, 4, 5])).toStrictEqual({
      average: 3,
      min: 1,
      max: 5,
      length: 5
    })
  })