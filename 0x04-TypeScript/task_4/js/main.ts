/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Java.ts" />

// Teacher object
const cTeacher: Subjects.Teacher = {
  firstName: "Guillaume",
  lastName: "Salva",
  experienceTeachingC: 10
};

// Subject instances (without namespace prefix)
const cpp = new Cpp();
const java = new Java();
const react = new React();

// Cpp
console.log("C++");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Java
console.log("Java");
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// React
console.log("React");
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

// Export constants if needed
export { cpp, java, react, cTeacher };