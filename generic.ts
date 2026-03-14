function display<T>(value: T): T {
    return value;
}
console.log(display<number>(10));
console.log(display<string>("Lakshya"));