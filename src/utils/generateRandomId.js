export const generateRandomId = () =>
  Math.random().toString(16).substring(2, 8) +
  Date.now().toString().substring(9);

export const assignId = obj => ({...obj, id: generateRandomId()});
