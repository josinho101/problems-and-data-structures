const LruCache = require("./index");

test("should remove unused items", () => {
  const cache = new LruCache(2);
  cache.put(1, 1);
  cache.put(2, 2);

  // should remove 1
  cache.put(3, 3);
  expect(cache.get(1)).toEqual(-1);

  // should remove 2 and add 1
  cache.put(1, 1);
  expect(cache.get(2)).toEqual(-1);

  // should remove 3 and add 2
  cache.put(2, 2);
  expect(cache.get(3)).toEqual(-1);

  // should move 1 to front and move 2 to back
  expect(cache.get(1)).toEqual(1);

  // should remove 2
  cache.put(3, 3);
  expect(cache.get(2)).toEqual(-1);
});
