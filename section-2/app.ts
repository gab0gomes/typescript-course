function add(n1: number, n2: number): number {
    return n1 + n2;
}

function printResult(num: number): void {
    console.log('Result: ' + num);
}

printResult(add(1, 2));

let combineValues: (a: number, b: number) => number;

combineValues = add;

console.log(combineValues(8, 8));

function addAndHandle(n1: number, n2: number, cb: (a: number) => void) {
    const result = add(n1, n2);
    cb(result);
} 

addAndHandle(10, 20, (number) => {
    console.log(number);
});