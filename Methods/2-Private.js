function Classroom(students, teacher) {

    function disp() {
        alert(this.students.join(", "));
    }

    this.students = students;
    this.teacher = teacher;

    disp();
}

var classRoom = new Classroom(["John", "Bob"], "Mr. Smith");
// Fails, as disp is not a public property of the object
classRoom.disp();