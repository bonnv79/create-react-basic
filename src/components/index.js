function sum() {
  let total = 0;

  for (let i = 0; i < arguments.length; i += 1) {
    total += arguments[i];
  }

  return total;
}

function multip() {
  let res = 1;

  for (let i = 0; i < arguments.length; i += 1) {
    res *= arguments[i];
  }

  return res;
}

export { sum, multip };