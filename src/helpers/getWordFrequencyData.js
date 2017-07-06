export default function getWordFrequencyData(words) {

  return words.reduce((data, word) => {

    if (! (word in data)) {
      data[word] = 1;
    }
    else {
      data[word] += 1;
    }
    return data;
  }, {});
}
