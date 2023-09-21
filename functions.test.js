import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./functions";

test("capitalize", () => {
  expect(capitalize("testStRing")).toBe("TestStRing");
  expect(capitalize("ollehWorld")).toBe("OllehWorld");
  expect(capitalize("last")).toBe("Last");
});

test("reverseString", () => {
  expect(reverseString("eheh")).toBe("hehe");
  expect(reverseString("123")).toBe("321");
  expect(reverseString("dlrow olleh")).toBe("hello world");
});

test("calculator", () => {
  const calculatorTest = calculator();
  expect(calculatorTest.add(1, 2)).toBe(3);
  expect(calculatorTest.subtract(1, 2)).toBe(-1);
  expect(calculatorTest.divide(1, 2)).toBe(0.5);
  expect(calculatorTest.multiply(1, 2)).toBe(2);
});

test("caesarCipher", () => {
  expect(caesarCipher("abcdefghijklmnopqrstvwxyZ", 27)).toBe(
    "bcdefghijklmnopqrstuwxyzA"
  );
  expect(caesarCipher("abcdefghijklmnopqrstvwxyZ", 0)).toBe(
    "abcdefghijklmnopqrstvwxyZ"
  );
  expect(caesarCipher("a !,.", 1)).toBe("b !,.");
});

test("analyzeArray", () => {
  const analyzeArrayTest = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(analyzeArrayTest.average).toBe(4);
  expect(analyzeArrayTest.min).toBe(1);
  expect(analyzeArrayTest.max).toBe(8);
  expect(analyzeArrayTest.length).toBe(6);
});
