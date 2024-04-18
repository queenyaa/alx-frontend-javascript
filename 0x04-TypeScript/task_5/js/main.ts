// Define interfaces MajorCredits and MinorCredits
interface MajorCredits {
  credits: number;
  brand: string; // Brand property to uniquely identify MajorCredits
}

interface MinorCredits {
  credits: number;
  brand: string; // Brand property to uniquely identify MinorCredits
}

// Define functions sumMajorCredits and sumMinorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "MajorCredits"
  };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "MinorCredits"
  };
}

// Test the functions
const subject1Major: MajorCredits = { credits: 3, brand: "Subject1" };
const subject2Major: MajorCredits = { credits: 4, brand: "Subject2" };

const subject1Minor: MinorCredits = { credits: 2, brand: "Subject1" };
const subject2Minor: MinorCredits = { credits: 1, brand: "Subject2" };

const totalMajor = sumMajorCredits(subject1Major, subject2Major);
const totalMinor = sumMinorCredits(subject1Minor, subject2Minor);

console.log("Total Major Credits:", totalMajor);
console.log("Total Minor Credits:", totalMinor);
