const checkString = (str) => {
  let length = str.split("").length;
  if (length >= 1 && length <= 10) {
    return true;
  }
};

let reverseString = (str) => {
  let reversed = str.split("").reverse().join("");
  return reversed;
};

test("checkString should return 8", () => {
  //arrange and act
  let result = checkString("Canergio");
  //assert
  expect(result).toBe(true);
});

test("reverse string", () => {
  //arrange and act
  let result = reverseString("boxer");
  //assert
  expect(result).toBe("rexob");
});

