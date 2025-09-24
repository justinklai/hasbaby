/**
 * Problem: Searching for the whole word "baby" in a string is tricky because 
 * simple string search functions like .includes() can match substrings. 
 * For example, "babysit" or "Babylon" should NOT match "baby" as a whole word.
 * We must ensure we match only "baby" surrounded by word boundaries (spaces, 
 * punctuation, start/end of string). This can be done using regular expressions 
 * with the \b word boundary marker.
 */

// Example array of lyrics (you would import your baby-bieber-lyrics.ts file)
const bieberBaby = [
  "Oh-ooh-whoa-oh-oh-oh-oh",
  "Oh-ooh-whoa-oh-oh-oh-oh",
  "Oh-ooh-whoa-oh, oh-oh-oh-oh",
  "You know you love me (yo), I know you care (uh-huh)",
  "Just shout whenever (yo), and I'll be there (uh-huh)",
];

// Function to check if the array contains at least one whole word "baby"
function hasBaby(lines: string[]): boolean {
  // Regex explanation: \b = word boundary, i = case-insensitive
  const regex = /\bbaby\b/i;
  // .some returns true if any element matches the regex
  return lines.some((line) => regex.test(line));
}

// Function to count how many lines contain the whole word "baby"
function numBabies(lines: string[]): number {
  const regex = /\bbaby\b/i;
  // .filter keeps only lines that match the regex, .length counts them
  return lines.filter((line) => regex.test(line)).length;
}

// ----- Test Cases -----
console.log("Test hasBaby:");
console.log(hasBaby(bieberBaby)); // true, there are lines with "baby"
console.log(hasBaby(bieberBaby.slice(0, 4))); // false, first 4 lines have no "baby"
console.log(hasBaby(["Babylon is amazing"])); // false, "baby" is not a whole word
console.log(hasBaby(["baby!", "I love you"])); // true, "baby!" counts
console.log(hasBaby(["BABY_beiber"])); // true, "BABY_beiber" counts

console.log("\nTest numBabies:");
console.log(numBabies(bieberBaby)); // counts only lines with "baby"
console.log(numBabies(bieberBaby.slice(0, 4))); // 0
console.log(numBabies(["baby!", "BABY_beiber", "Babylon", "babysit"])); // 2
