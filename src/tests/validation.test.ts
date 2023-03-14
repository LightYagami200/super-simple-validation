// Imports
import { describe, test, expect } from '@jest/globals';
import { isEmail, isPhone, isHexColor } from '../index';

// Test Suite
describe('Validation', () => {

  test('Is Email? (Good Email)', () => {
    const email = 'some-email@example.com';

    expect(isEmail(email)).toBe(true);
  });

  test('Is Email? (Bad Email)', () => {
    const email = 'some-email';

    expect(isEmail(email)).toBe(false);
  });

  test('Is Email? (Empty Email)', () => {
    const email = '';

    expect(isEmail(email)).toBe(false);
  });

  test('Is Phone? (Good Phone)', () => {
    const phone = '+86-12345678901';

    expect(isPhone(phone)).toBe(true);
  });

  test('Is Phone? (Good Phone without -)', () => {
    const phone = '+8612345678901';

    expect(isPhone(phone)).toBe(true);
  });

  test('Is Phone? (Bad Phone)', () => {
    const phone = '1234';

    expect(isPhone(phone)).toBe(false);
  });

  test('Is hex color? (Good hex color)', () => {
    const color = '#000000';

    expect(isHexColor(color)).toBe(true);
  });

  test('Is hex color? (Good hex color with 8 digits)', () => {
    const color = '#000000aa';

    expect(isHexColor(color)).toBe(true);
  });

  test('Is hex color? (Bad hex color)', () => {
    const color = '000000';

    expect(isHexColor(color)).toBe(false);
  });
});
