// 1
const students = [
    { id: 1, student: "Alice", year: 10, grades: { french: [8, 9, 3, 9, 10, 11], english: [20, 20, 20, 19, 18, 20], mathematics: [10, 12, 15, 7, 19, 20] } },
    { id: 2, student: "Bob", year: 10, grades: { french: [12, 12, 13, 11, 14, 15], english: [17, 18, 14, 19, 20, 12], mathematics: [12, 15, 16, 2, 20, 20] } },
    { id: 3, student: "Charlie", year: 10, grades: { french: [16, 17, 15, 15, 19, 16], english: [10, 14, 13, 16, 10, 12], mathematics: [14, 17, 13, 12, 12, 14] } },
    { id: 4, student: "Diana", year: 10, grades: { french: [9, 10, 13, 14, 15, 15], english: [13, 13, 14, 15, 17, 16], mathematics: [20, 19, 13, 14, 15, 10] } },
    { id: 5, student: "wawa", year: 10, grades: { french: [16, 17, 15, 12, 11, 10], english: [20, 20, 17, 15, 16, 13], mathematics: [17, 20, 19, 9, 11, 13] } }
];

// 2
function averageStudentSubject(student, subject) {
    if (subject in student.grades) {
        return student.grades[subject].reduce((add, number) => (add + number)) / student.grades[subject].length;
    }
    return "Subject doesn't exist.";
}

console.log(averageStudentSubject(students[0], "french"));

// 3
function averageStudent(student) {
    return student.map()
}

console.log(averageStudent(students[0]));
//     return Object.keys(student.grades).map((subject) => student.grades[subject].reduce((add, number) => (add + number)) / student.grades[subject].length);
