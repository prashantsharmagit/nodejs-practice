/**
 * First, print each vowel in  on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in .
 * Second, print each consonant (i.e., non-vowel) in  on a new line in the same order as it appeared in .
 */


function vowelsAndConsonants(s) {
    for (const x of s) {
        if (x=="a" || x=="e" || x=="i" || x=="o" || x=="u") {
            console.log(x);
        }
    }
    for (const x of s) {
        if (x!="a" && x!="e" && x!="i" && x!="o" && x!="u") {
            console.log(x);
        }
    }
}

var str = "javascriptLoops";
str = str.toLowerCase();
vowelsAndConsonants(str);