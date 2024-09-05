
function fibonacciLoop(n) {
    let a = 0, b = 1, c;
    if (n === 0) return a;
    if (n === 1) return b;
    for (let i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
}

function fibonacciRecursion(n) {
    if (n <= 1) return n;
    return fibonacciRecursion(n - 1) + fibonacciRecursion(n - 2);
}


function displayFibonacci() {
    const loopResult = document.getElementById('loop-result');
    const recursionResult = document.getElementById('recursion-result');

    let loopContent = '<h3>Loop Results:</h3>';
    for (let i = 0; i <= 10; i++) {
        loopContent += `<p>fib(${i}) = ${fibonacciLoop(i)}</p>`;
    }
    loopResult.innerHTML = loopContent;

    let recursionContent = '<h3>Recursion Results:</h3>';
    for (let i = 0; i <= 10; i++) {
        recursionContent += `<p>fib(${i}) = ${fibonacciRecursion(i)}</p>`;
    }
    recursionResult.innerHTML = recursionContent;
}


displayFibonacci();
