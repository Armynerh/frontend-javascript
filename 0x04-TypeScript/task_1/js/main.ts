// task_1/js/main.ts

interface Teacher {
  readonly firstName: string;        // readonly → only set at initialization
  readonly lastName: string;         // readonly → only set at initialization
  fullTimeEmployee: boolean;         // mandatory
  location: string;                  // mandatory
  yearsOfExperience?: number;        // optional
  [propName: string]: any;           // allow any other attributes
}

// Example usage
const teacher1: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'London',
};

const teacher2: Teacher = {
  firstName: 'Jane',
  lastName: 'Smith',
  fullTimeEmployee: false,
  location: 'New York',
  yearsOfExperience: 5,
  contract: false,   // extra property allowed
};

console.log(teacher1);
console.log(teacher2);
