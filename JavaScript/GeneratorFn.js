function* simple() {
    yield `Hello`;
    yield 'World';
}

const iterate = simple();
console.log(iterate.next());
console.log(iterate.next());
