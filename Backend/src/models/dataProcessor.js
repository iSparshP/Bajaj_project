// backend/models/dataProcessor.js
exports.processData = (data) => {
  let numbers = [];
  let alphabets = [];
  let highestAlphabet = "";

  for (const item of data) {
    if (!isNaN(item)) {
      numbers.push(parseInt(item));
    } else if (/^[a-zA-Z]$/.test(item)) {
      alphabets.push(item.toUpperCase());
      if (item.toUpperCase() > highestAlphabet) {
        highestAlphabet = item.toUpperCase();
      }
    }
  }

  return {
    numbers,
    alphabets,
    highest_alphabet: highestAlphabet ? [highestAlphabet] : [],
  };
};
