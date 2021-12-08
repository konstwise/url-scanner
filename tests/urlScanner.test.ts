import * as scan from '../src/core/urlScanner'

const sut = new scan.UrlScanner();

test('returns empty array on scanning blank string', () => {
  expect(sut.scan("")).toEqual([]);
});