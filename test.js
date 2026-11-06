const gradeTracker = require('./grade-tracker');

gradeTracker.addStudent('Alice', { Math: 90, English: 85, Science: 88 });
gradeTracker.addStudent('Bob', { Math: 55, English: 60, Science: 58 });
gradeTracker.addStudent('Charlie', { Math: 95, English: 92, Science: 96 });

console.log('All students:', gradeTracker.students);
console.log('Get Alice:', gradeTracker.getStudent('Alice'));
console.log('Alice average:', gradeTracker.getStudentAverage('Alice'));
console.log('Math class average:', gradeTracker.getSubjectAverage('Math'));
console.log('Top student:', gradeTracker.getTopStudent().name);
console.log('Struggling:', gradeTracker.getStrugglingStudents().map(s => s.name));
console.log('Class average:', gradeTracker.getClassAverage());
console.log('Remove Bob:', gradeTracker.removeStudent('Bob'));
console.log('After remove:', gradeTracker.students.map(s => s.name));