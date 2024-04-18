// Define DirectorInterface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Define TeacherInterface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Implement Director class
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Implement Teacher class
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }
  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// Implement createEmployee function
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" and salary less than 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// Eg usage
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

// Define isDirector function as a type predicate
function isDirector(employee: Director | Teacher): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
  }
  
  // Define executeWork function
  function executeWork(employee: Director | Teacher): string {
    if (isDirector(employee)) {
      return employee.workDirectorTasks();
    } else {
      return employee.workTeacherTasks();
    }
  }
  
  // Example usage
  console.log(executeWork(createEmployee(200)));
  console.log(executeWork(createEmployee(1000)));

  // Define string literal type Subjects
type Subjects = 'Math' | 'History';

// Define teachClass function
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else if (todayClass === 'History') {
    return 'Teaching History';
  } else {
    return 'Invalid class';
  }
}

// Example usage
console.log(teachClass('Math'));
console.log(teachClass('History')); 
