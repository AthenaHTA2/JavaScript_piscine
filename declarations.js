const escapeStr = '\'`\\\\/\""\'';
const arr = [4, '2'];
const obj = {
    'str': 'string',
    'num': 1,
    'bool': true,
    'undef': undefined,
};
const nested = {
    'arr': [4, undefined, '2'],
    'obj': {
        'str': "string",
        'num': 7,
        'bool': true,
    }
};

let a = nested.arr;
let b = nested.obj;

Object.freeze(nested);
Object.freeze(a);
Object.freeze(b);
