class StringBuilder {
    #value;

    constructor(value) {
        this.#value = value;
    }

    getValue() {
        return this.#value;
    }
    padEnd(str) {
        this.#value += str;
        return this;
    }
    padStart(str) {
        this.#value += str;
        return this;
    }
    padBoth(str) {
        this.padStart(str) + this.padEnd(str);
        return this;
    }
}
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="