# DsaStart

## Fibonacci Sequence

The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1. The sequence goes: 

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

Formally, the Fibonacci sequence is defined by the recurrence relation:

- F(n) = F(n-1) + F(n-2) for n > 1
- F(0) = 0
- F(1) = 1

## Difference Between Loop and Recursion Models

### Loop Model
In the loop-based approach, we use an iterative method to compute the Fibonacci number. This involves initializing two variables to store the first two numbers of the sequence and then updating these variables in a loop until we reach the desired position in the sequence.

**Advantages:**
- **Efficiency:** Iteration generally uses less memory because it does not involve multiple function calls and stack operations.
- **Performance:** Better suited for large inputs due to constant space complexity.

**Disadvantages:**
- **Less intuitive for some problems:** While efficient, it may be less straightforward to implement for certain complex problems compared to recursion.

### Recursion Model
In the recursive approach, the function calls itself to break down the problem into smaller subproblems until it reaches the base case. Each function call computes Fibonacci numbers by summing the results of two smaller Fibonacci computations.

**Advantages:**
- **Simplicity:** Recursion can be more intuitive and simpler to implement for problems defined in terms of smaller subproblems.
- **Clean Code:** Recursive solutions often lead to cleaner and more readable code.

**Disadvantages:**
- **Performance Issues:** Recursive implementations can be less efficient due to repeated calculations and a high number of function calls, which increases the time and space complexity.
- **Stack Overflow:** Large inputs can lead to stack overflow errors due to deep recursion.

## Big O Notation

### Loop Model
The time complexity of the iterative approach to computing the Fibonacci sequence is **O(n)**, where **n** is the position in the sequence. This is because the algorithm performs a single loop from 2 to **n**, making it linear in relation to the input size.

The space complexity is **O(1)**, as it only uses a fixed amount of extra space regardless of the input size.

### Recursion Model
The time complexity of the naive recursive approach is **O(2^n)**. This is because each call generates two more calls, leading to an exponential growth in the number of function calls. The recursion tree grows exponentially with the input size, resulting in inefficient performance for large inputs.

The space complexity of the recursive approach is **O(n)** due to the call stack. Each recursive call adds a new frame to the call stack, and the maximum depth of the stack is **n**.

**Conclusion:** While recursion provides a more intuitive solution for the Fibonacci sequence, it is less efficient than iteration. For large inputs, iterative methods are generally preferred due to their better time and space complexity.

