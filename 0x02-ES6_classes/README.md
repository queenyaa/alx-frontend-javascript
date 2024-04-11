## Readme of 0x02-ES6_classes
---

### Introduction
---

1. **Classes in ES6**: ES6 introduced classes as a syntactic sugar over JavaScript's existing prototype-based inheritance. Classes provide a more familiar and convenient syntax for defining object-oriented programming structures. They allow you to define constructors, methods, and inheritance hierarchies in a more intuitive way.

2. **Metaprogramming**: Metaprogramming is a programming technique where a program can manipulate itself or other programs as data during runtime. It allows for dynamic code generation, reflection, macro systems, and other advanced programming patterns. Metaprogramming can enhance flexibility and adaptability but requires careful handling due to increased complexity.

3. **Static Methods**: Static methods in a class are defined with the `static` keyword and are associated with the class itself rather than with instances of the class. They can be called directly on the class and are often used for utility functions, factory methods, or namespacing.

4. **Symbols**: Symbols are unique and immutable values introduced in ES6. They are often used as property keys for object properties, providing a way to create private or hidden properties that are inaccessible via property enumeration. Symbols can also be used for metaprogramming purposes, such as dynamic property names or customizing object behavior.

5. **Combining Metaprogramming with Symbols**: By combining metaprogramming techniques with symbols, developers can achieve powerful programming patterns. Symbols can be used for private members, dynamic property names, customizing object behavior, and more, enhancing the flexibility and expressiveness of JavaScript code.

In summary, classes in ES6 provide a more structured approach to object-oriented programming, while metaprogramming and symbols offer advanced techniques for dynamic code manipulation and customization. These concepts empower developers to create more flexible, maintainable, and powerful JavaScript applications.

---

### Task 0 : 0-classroom.js
---

Task 0 lays the foundation for building a `ClassRoom` class, which serves as a fundamental component in many educational or organizational systems. Here are some key reasons why Task 0 is important:

1. **Encapsulation**: By defining the `ClassRoom` class with a constructor that initializes the `maxStudentsSize` attribute, Task 0 demonstrates the concept of encapsulation. Encapsulation allows you to bundle data (attributes) and methods (behavior) together within a class, hiding the implementation details from the outside world.

2. **Abstraction**: Task 0 abstracts away the complexity of managing a classroom by providing a simple interface for setting and retrieving the maximum number of students allowed in the class. This abstraction allows other parts of the program to interact with the `ClassRoom` class without needing to understand its internal implementation.

3. **Code Organization**: Defining the `ClassRoom` class in a separate file (`0-classroom.js`) promotes code organization and modularity. This separation of concerns makes the codebase easier to maintain and understand, especially as it grows in complexity.

4. **Reusability**: Once the `ClassRoom` class is implemented, it can be reused throughout the project or even in other projects. This reusability saves time and effort by allowing developers to leverage existing code rather than reinventing the wheel.

5. **Testing and Debugging**: Task 0 provides a starting point for writing tests to ensure that the `ClassRoom` class behaves as expected. Testing helps identify and fix bugs early in the development process, improving the overall quality and reliability of the software.

In summary, Task 0 sets the groundwork for creating a versatile and robust `ClassRoom` class, which is essential for modeling classroom environments in educational applications, scheduling systems, and various other software solutions.

---

### Task 1 : 1-make_classroom.js
---


