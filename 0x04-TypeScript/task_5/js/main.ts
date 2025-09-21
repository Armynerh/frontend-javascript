// Define branded interfaces
export interface MajorCredits {
  credits: number;
  _brand: "major"; // unique identifier for branding
}

export interface MinorCredits {
  credits: number;
  _brand: "minor"; // unique identifier for branding
}

// Function to sum major credits
export function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _brand: "major"
  };
}

// Function to sum minor credits
export function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _brand: "minor"
  };
}
