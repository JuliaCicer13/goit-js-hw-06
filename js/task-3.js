class StringBuilder {
    #value;

    constructor(value) {
        this.#value = value;
    }

    getValue() {
        return this.#value;
    }
    padEnd(str) {
       return this.#value = this.#value + str;
    
    }
    padStart(str) {
        this.#value = str + this.#value;
        return this;
    }
    padBoth(str) {
     
        return this.#value = this.padStart(str).padEnd(str);
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