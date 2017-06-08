const words = (string) => {
    const a = splitString(string);

    const b = [...new Set(a)];

    const c = {};

    for (let i = 0; i < b.length; i++) {
      const word = b[i];
      let count = 0;
      for (let j = 0; j < a.length; j++) {
        if (a[j] === word) {
          count++;
        }
      }
      c[word] = count;
    }

    return c;
}

const splitString = (string) => {
    const array = [];
    let substring = '';

    for (let i = 0; i < string.length; i++) {
      const char = string[i];
      if (/\s/.test(char)) {
        if (substring) {
          array.push(substring);
        }
        substring = '';
      } else {
        substring += char;
      }
    }

    if (substring) {
      array.push(substring);
    }

    return array;
}

module.exports = words;
