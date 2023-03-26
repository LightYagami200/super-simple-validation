// Imports
import { describe, test, expect } from '@jest/globals';
import { isEmail, isPhone, isHexColor, isUrl, isCssColor, isDiscordId, isDateTime, isCCNumber, isCCExp } from '../index';

// Test Suite
describe('Validation', () => {

  test('Is Email? (Good Email)', () => expect(isEmail('some-email@example.com')).toBe(true));

  test('Is Email? (Bad Email)', () => expect(isEmail('some-email')).toBe(false));

  test('Is Email? (Empty Email)', () => expect(isEmail('')).toBe(false));

  test('Is Phone? (Good Phone)', () => expect(isPhone('+86-12345678901')).toBe(true));

  test('Is Phone? (Good Phone without -)', () => expect(isPhone('+8612345678901')).toBe(true));

  test('Is Phone? (Bad Phone)', () => expect(isPhone('1234')).toBe(false));

  test('Is hex color? (Good hex color)', () => expect(isHexColor('#000000')).toBe(true));

  test('Is hex color? (Good hex color with 8 digits)', () => expect(isHexColor('#000000aa')).toBe(true));

  test('Is hex color? (Bad hex color)', () => expect(isHexColor('000000')).toBe(false));

  test('Is url? (Good url)', () => expect(isUrl('https://www.example.com')).toBe(true));

  test('Is url? (good url without https)', () => expect(isUrl('www.example.com')).toBe(true));

  test('Is url? (good url without www)', () => expect(isUrl('example.com')).toBe(false));

  test('Is url? (bad url)', () => expect(isUrl('example')).toBe(false));

  test('Is url? (bad url)', () => expect(isUrl('example-.com')).toBe(false));

  test('Is css color? (Good css color)', () => expect(isCssColor('red')).toBe(true));

  test('Is css color? (Good css color)', () => expect(isCssColor('rgb(255, 0, 0)')).toBe(true));

  test('Is css color? (Good css color)', () => expect(isCssColor('rgba(255, 0, 0, 0.5)')).toBe(true));

  test('Is css color? (Good css color)', () => expect(isCssColor('hsl(0, 100%, 50%)')).toBe(true));

  test('Is css color? (Good css color)', () => expect(isCssColor('hsla(0, 100%, 50%, 0.5)')).toBe(true));

  test('Is css color? (Good css color)', () => expect(isCssColor('#000000')).toBe(true));

  test('Is css color? (Good css color)', () => expect(isCssColor('#000000aa')).toBe(true));

  test('Is css color? (Bad css color)', () => expect(isCssColor('000000')).toBe(false));

  test('Is css color? (Bad css color)', () => expect(isCssColor('000000aa')).toBe(false));

  test('Is css color? (Bad css color)', () => expect(isCssColor('rgb(255, 0, 0')).toBe(false));

  test('Is discord id? (Good discord id)', () => expect(isDiscordId('973608903801708634')).toBe(true));

  test('Is discord id? (Bad discord id)', () => expect(isDiscordId('xyz')).toBe(false));

  test('Is discord id? (Bad discord id)', () => expect(isDiscordId('12357498')).toBe(false));

  test('Is date time? (Good date time)', () => expect(isDateTime('2021-01-01T00:00:00.000Z')).toBe(true));

  test('Is date time? (Good date time)', () => expect(isDateTime('10 Jan 2022')).toBe(true));

  test('Is date time? (Bad date time)', () => expect(isDateTime('maybe 10th of jan?')).toBe(false));

  test('Is credit card number? (Mastercard)', () => expect(isCCNumber('5555555555554444')).toBe(true));

  test('Is credit card number? (Visa with spaces)', () => expect(isCCNumber('4111 1111 1111 1111')).toBe(true));

  test('Is credit card number? (AMEX with dashes)', () => expect(isCCNumber('3782-822463-10005')).toBe(true));

  test('Is credit card number? (Bad credit card number)', () => expect(isCCNumber('1234567890123456')).toBe(false));

  test('Is credit card number? (Good lunh)', () => expect(isCCNumber('4539 1488 0343 6467', true)).toBe(true));

  test('Is credit card number? (Bad lunh)', () => expect(isCCNumber('2720 9919 5662 0573', true)).toBe(false));

  test('Is credit card expiration? (Good expiration)', () => expect(isCCExp('01/22')).toBe(true));

  test('Is credit card expiration? (Good expiration)', () => expect(isCCExp('01/2022')).toBe(true));

  test('Is credit card expiration? (Bad expiration)', () => expect(isCCExp('01/202')).toBe(false));
});
