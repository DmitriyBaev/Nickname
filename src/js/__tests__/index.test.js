import Validator
  from '../index';

test('correct', () => {
  const one = new Validator('maverick');
  const result = one.validateUsername();

  expect(result).toEqual(true);
});

test('correct', () => {
  const one = new Validator('maverick123maverick');
  const result = one.validateUsername();

  expect(result).toEqual(true);
});

test('correct', () => {
  const one = new Validator('the-maverick');
  const result = one.validateUsername();

  expect(result).toEqual(true);
});

test('correct', () => {
  const one = new Validator('the_maverick');
  const result = one.validateUsername();

  expect(result).toEqual(true);
});

test('notCorrect', () => {
  const one = new Validator('maverick1234maverick');
  const result = one.validateUsername();

  expect(result).toEqual(false);
});

test('notCorrect', () => {
  const one = new Validator('петя');
  const result = one.validateUsername();

  expect(result).toEqual(false);
});

test('notCorrect', () => {
  const one = new Validator('100maverick');
  const result = one.validateUsername();

  expect(result).toEqual(false);
});

test('notCorrect', () => {
  const one = new Validator('maverick100');
  const result = one.validateUsername();

  expect(result).toEqual(false);
});

test('notCorrect', () => {
  const one = new Validator('-maverick-');
  const result = one.validateUsername();

  expect(result).toEqual(false);
});

test('notCorrect', () => {
  const one = new Validator('_maverick_');
  const result = one.validateUsername();

  expect(result).toEqual(false);
});
