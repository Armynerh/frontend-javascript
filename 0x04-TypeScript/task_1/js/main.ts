// teacher.ts

interface Teacher {
  readonly firstName: string;        // only settable at initialization
  readonly lastName: string;         // only settable at initialization
  fullTimeEmployee: boolean;         // always defined
  yearsOfExperience?: number;        // optional
  location: string;                   // always defined
  [key: string]: any;                // allow extra properties like contract
}

// Example usage
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,   // extra attribute allowed by index signature
};

console.log(teacher3);
