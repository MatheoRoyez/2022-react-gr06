// Check if `csr` has achieved threshold.
const isAchieved = (csr) => {
  if (csr.threshold.behaviour === "lowerThanValue") {
    if (Number(csr.value) < Number(csr.threshold.value)) return true;
    return false;
  }
  if (csr.threshold.behaviour === "higherThanValue") {
    if (Number(csr.value) > Number(csr.threshold.value)) return true;
    return false;
  }
  return false;
};

// Compare function for SDG numbers `num1` and `num2`.
const sortBySdgNumber = (num1, num2) => {
  let current = 0;
  const p1 = num1.split("."),
    p2 = num2.split(".");

  // Find where the two numbers deviate.
  while (
    current < p1.length - 1 &&
    current < p2.length - 1 &&
    p1[current] === p2[current]
  ) {
    current += 1;
  }

  let n1 = p1[current],
    n2 = p2[current];

  // Compare.
  if (!isNaN(n1)) {
    return !isNaN(n2) ? Number(n1) - Number(n2) : -1;
  }
  return !isNaN(n2) ? 1 : n1.localeCompare(n2);
};

module.exports = { isAchieved, sortBySdgNumber };
