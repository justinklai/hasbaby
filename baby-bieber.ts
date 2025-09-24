/**
 * Problem: Searching for the whole word "baby" in a string is tricky because 
 * simple string search functions like .includes() can match substrings. 
 * For example, "babysit" or "Babylon" should NOT match "baby" as a whole word.
 * We must ensure we match only "baby" surrounded by word boundaries (spaces, 
 * punctuation, start/end of string). This can be done using regular expressions 
 * with the \b word boundary marker.
/**
 * Problem: Searching for the whole word "baby" in a string is tricky because
 * simple string search functions like .includes() can match substrings.
 * For example, "babysit" or "Babylon" should NOT match "baby" as a whole word.
 * We must ensure we match only "baby" surrounded by non-alphanumeric characters
 * (spaces, punctuation, start/end of string). Using a custom regex that treats
 * letters and digits as word characters avoids treating underscores as word
 * characters (which \b would consider part of a word).
 */

// Example array of lyrics (you would import your baby-bieber-lyrics.ts file)
const bieberBaby = [
  'Oh-ooh-whoa-oh-oh-oh-oh',
  'Oh-ooh-whoa-oh-oh-oh-oh',
  'Oh-ooh-whoa-oh, oh-oh-oh-oh',
  'You know you love me (yo), I know you care (uh-huh)',
  "Just shout whenever (yo), and I'll be there (uh-huh)",
  'Baby, baby, baby oh', // example line that contains the word 'baby'
];

// Function to check if the array contains at least one whole word "baby".
// This regex matches 'baby' when it's preceded by start-of-string or a
// non-alphanumeric, and followed by end-of-string or a non-alphanumeric.
const BABY_REGEX = /(?:^|[^A-Za-z0-9])baby(?:[^A-Za-z0-9]|$)/i;

function hasBaby(lines: string[]): boolean {
  return lines.some((line) => BABY_REGEX.test(line));
}

// Function to count how many lines contain the whole word "baby".
function numBabies(lines: string[]): number {
  return lines.filter((line) => BABY_REGEX.test(line)).length;
}

// ----- Test Cases -----
console.log('Test hasBaby:');
console.log(hasBaby(bieberBaby)); // true, there is at least one line with 'baby'
console.log(hasBaby(bieberBaby.slice(0, 4))); // false, first 4 lines have no 'baby'
console.log(hasBaby(['Babylon is amazing'])); // false, 'baby' is not a whole word
console.log(hasBaby(['baby!', 'I love you'])); // true, 'baby!' counts
console.log(hasBaby(['BABY_beiber'])); // true, underscore counts as non-alphanumeric here

console.log('\nTest numBabies:');
console.log(numBabies(bieberBaby)); // counts only lines with 'baby'
console.log(numBabies(bieberBaby.slice(0, 4))); // 0
console.log(numBabies(['baby!', 'BABY_beiber', 'Babylon', 'babysit'])); // 2
