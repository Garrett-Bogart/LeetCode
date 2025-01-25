function climbStairs(n: number): number {
    const memoizedFib = new Map<number, number>()
    return fib(n, memoizedFib);
};

function fib(n: number, memoizedFib: Map<number, number>): number {
    if(memoizedFib.has(n)) return memoizedFib.get(n) ?? 0;
    if(n == 0) return 1;
    if(n == 1) return 1;
    memoizedFib.set(n, fib(n-1, memoizedFib) + fib(n-2, memoizedFib));
    return memoizedFib.get(n) ?? 0
}

console.log(climbStairs(10))