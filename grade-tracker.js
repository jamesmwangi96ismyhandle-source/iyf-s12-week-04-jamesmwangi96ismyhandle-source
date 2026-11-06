// Student Grade Tracker

const gradeTracker = {
    students: [],

    // 1. Add a new student
    addStudent(name, grades) {
        this.students.push({ name, grades });
    },

    // 2. Get a student by name
    getStudent(name) {
        return this.students.find(student => student.name === name) || null;
    },

    // 3. Calculate a student's average grade
    getStudentAverage(name) {
        const student = this.getStudent(name);

        if (!student) {
            return null;
        }

        const grades = Object.values(student.grades);
        const total = grades.reduce((sum, grade) => sum + grade, 0);

        return total / grades.length;
    },

    // 4. Get class average for a subject
    getSubjectAverage(subject) {
        if (this.students.length === 0) {
            return 0;
        }

        const total = this.students.reduce((sum, student) => {
            return sum + (student.grades[subject] || 0);
        }, 0);

        return total / this.students.length;
    },

    // 5. Get the student with the highest average
    getTopStudent() {
        if (this.students.length === 0) {
            return null;
        }

        return this.students.reduce((topStudent, student) => {
            if (
                this.getStudentAverage(student.name) >
                this.getStudentAverage(topStudent.name)
            ) {
                return student;
            }

            return topStudent;
        });
    },

    // 6. Get students struggling below a threshold
    getStrugglingStudents(threshold = 60) {
        return this.students.filter(student =>
            this.getStudentAverage(student.name) < threshold
        );
    },

    // 7. Remove a student by name
    removeStudent(name) {
        const index = this.students.findIndex(student => student.name === name);

        if (index !== -1) {
            this.students.splice(index, 1);
            return true;
        }

        return false;
    },

    // 8. Get overall class average
    getClassAverage() {
        if (this.students.length === 0) {
            return 0;
        }

        const total = this.students.reduce((sum, student) => {
            return sum + this.getStudentAverage(student.name);
        }, 0);

        return total / this.students.length;
    }
};

module.exports = gradeTracker;