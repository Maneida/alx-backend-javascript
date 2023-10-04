const weakMap = new WeakMap();

const queryAPI = (endpoint) => {
  let total = weakMap.get(endpoint) || 0;
  if (total >= 5) throw new Error("Endpoint load is high");
  weakMap.set(endpoint, total += 1);
  return total;
};

export { weakMap, queryAPI };
