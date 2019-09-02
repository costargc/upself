// https://en.wikipedia.org/wiki/Jaro%E2%80%93Winkler_distance


exports.jaro = function (str1, str2) {
    var lenStr1 = str1.length,
        lenStr2 = str2.length,
        matchWindow = Math.max(lenStr1, lenStr2) / 2 - 1,
        transpositions = 0,
        matches = 0,
        letter = '';

    // Test if swapping strX & lenStrX if stra is longer then str2 for proformance ??
    // another option is to bail out of the stepping once we are outside of the context of the other string
    // the issue is that with string lengths of 11 & 2 you wouldn't want to go through the loop 11 times

    /* find matches & transpositions */
    for (var i in str2) {
        letter = str2[i];
        if (str1.slice(i, i + matchWindow).indexOf(letter) > -1) { /* match */
            matches++;
        } else if (str1.slice(i - matchWindow, i).indexOf(letter) > -1) { /* transposition */
            matches++; transpositions++;
        }
    };
    return (1 / 3 * (matches / lenStr1 + matches / lenStr2 + (matches - transpositions) / matches));
};

// Case sensitive JaroWinkler
// str1 is the test string
exports.jaroWinkler_CS = function (str1, str2, p) {
    p = p || 0.1;
    var dj = exports.jaro(str1, str2), l = 0;

    for (var i = 0; i < 4; i++) { /* find length of prefix match (max 4) */
        if (str1[i] == str2[i]) { l++; } else { break; }
    }

    return dj + (l * p * (1 - dj));
};

// in this we force all to lowercase to test
String.prototype.jaroWinkler = function (abbreviation) {
    return exports.jaroWinkler_CS(this.toLowerCase(), abbreviation.toLowerCase());
};


// test jaro/jarowinkler/jaroscore
// console.log('jaro. ' + exports.jaro("who r u?", 'What is your name?'));
// console.log('jarowinkler. ' + exports.jaroWinkler_CS("who r u?",'What is your name?'));
// console.log('jaroscore. ' + "who r u?".jaroWinkler('What is your name?'));

// test normal
// console.log('Q1. ' + "who r u?".jaroscore('What is your name?'));
//   console.log('Q2. '+"who r u?".jaroscore('How are you?'));
//   console.log('Q3. '+"who r u?".jaroscore('who are you?'));
//   console.log('Q4. '+"who arer u?".jaroscore('who are you?'));
//   console.log('Q5. '+"who arer you".jaroscore('who are you?'));
//   console.log('Q6. '+"who are you".jaroscore('who are you?'));

// reverse test
//   console.log('Q1rev. '+"What is your name?".jaroscore('who r u?'));
//   console.log('Q2rev. '+"How are you?".jaroscore('who r u?'));
//   console.log('Q3rev. '+"who are you?".jaroscore('who r u?'));
//   console.log('Q4rev. '+"who are you?".jaroscore('who arer u?'));
//   console.log('Q5rev. '+"who are you?".jaroscore('who arer you'));
//   console.log('Q6rev. '+"who are you?".jaroscore('who are you'));
