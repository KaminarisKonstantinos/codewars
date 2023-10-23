// i is the imaginary unit, it is defined by i²=−1i² = -1i²=−1, therefore it is a solution to x²+1=0x² + 1 = 0x²+1=0.
// Your Task

// Complete the function pofi that returns iii to the power of a given non-negative integer in its simplest form, as a string (answer may contain iii).

// My solution

function pofi(n){
    return ['1', 'i', '-1', '-i'][n%4];
}