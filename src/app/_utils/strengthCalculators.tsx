import { StrengthType } from "../_types/StrengthTypes";

export const PasswordStrengthCalculator = (password: string) => {
  let pwValue = 0;
  pwValue = additionalMetrics(password) - penaltiesMetrics(password);
  return pwValue > 56
    ? StrengthType.HIGH
    : pwValue > 28
    ? StrengthType.MEDIUM
    : StrengthType.LOW;
};

const additionalMetrics = (pw: string) => {
  let points = 0;
  let countChars = countChar(pw);

  /** Number of characters */
  points += countChars.length * 4;

  /** Upper case */
  points += countChars.upper * 2;

  /** Lower case */
  points += countChars.lower * 2;

  /** Numbers */
  points += countChars.numbers * 4;

  /** Symbols */
  points += countChars.symbols * 6;
  return points;
};

const penaltiesMetrics = (pw: string) => {
  let penalties = 0;
  let countChars = countChar(pw);

  penalties += countChars.letters ? pw.length : 0;
  penalties += countChars.onlyNumber ? pw.length : 0;

  return penalties;
};

const countChar = (str: string) => {
  const upperCase = str.match(/[A-Z]/g);
  const lowerCase = str.match(/[a-z]/g);
  const numbers = str.match(/\d/g);
  const symbols = str.match(/[!@#$%&]/g);
  const onlyLetters = str.match(/^[a-zA-Z]+$/g);
  const onlyNumbers = str.match(/^[\d]+$/g);

  const countUpper = upperCase ? upperCase.length : 0;
  const countLower = lowerCase ? lowerCase.length : 0;
  const countNumbers = numbers ? numbers.length : 0;
  const countSymbols = symbols ? symbols.length : 0;

  return {
    upper: countUpper,
    lower: countLower,
    numbers: countNumbers,
    symbols: countSymbols,
    length: str.length,
    letters: onlyLetters,
    onlyNumber: onlyNumbers,
  };
};
