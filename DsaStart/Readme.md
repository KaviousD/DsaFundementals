# DsaStart

## Fibonacci Sequence

The Fibonacci sequence is a list of numbers where each number is the sum of the two numbers before it. It usually starts with 0 and 1, so the sequence looks like this:

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

To find a number in the sequence, you add up the two numbers right before it. For example, to get the 5th number, you add 3 and 2 to get 5.

## Loop vs. Recursion

### Loop Method
Using a loop to find Fibonacci numbers means using a repeating set of instructions. You start with the first two numbers and keep updating them until you get to the number you want.

**Pros:**
- **Efficient:** It uses less memory and runs faster because it doesn’t have to call itself over and over.
- **Simple:** It’s usually easier to handle big numbers because it doesn’t slow down as much.

**Cons:**
- **Less Intuitive:** It might be harder to understand at first compared to the recursive method.

### Recursion Method
Using recursion means the function calls itself to solve the problem. Each call breaks the problem into smaller pieces until it gets to the simplest case.

**Pros:**
- **Simple Code:** The code can be easier to write and understand because it breaks the problem down in a natural way.
- **Clean:** The solution often looks neat and organized.

**Cons:**
- **Slow:** It can be slower and use more memory because it makes a lot of calls to itself.
- **Risk of Crash:** With very large numbers, it can crash because it uses up a lot of memory.

## Big O Notation

### Loop Method
The loop method has a time complexity of **O(n)**, which means it takes a time that grows linearly with the size of the input. If you want the 10th number, it will take a bit more time than finding the 5th number, but not much.

The space complexity is **O(1)**, meaning it uses a fixed amount of memory regardless of the size of the input.

### Recursion Method
The recursive method has a time complexity of **O(2^n)**. This means the time it takes grows really quickly as the input gets larger. For big numbers, it becomes very slow.

The space complexity is **O(n)** because each function call uses up memory, and the maximum amount of memory used is proportional to the size of the input.

**Summary:** The loop method is usually better for larger inputs because it’s faster and uses less memory. Recursion is easier to understand and write but can be slower and use more memory for large numbers.
