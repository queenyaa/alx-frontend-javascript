/// <reference path="Teacher.ts" />

namespace Subjects {
    export class Subject {
      teacher: Subjects.Teacher; // Use fully qualified name Subjects.Teacher
  
      set setTeacher(teacher: Teacher) { // Use fully qualified name Subjects.Teacher
        this.teacher = teacher;
      }
    }
  }
  export { Subjects };
