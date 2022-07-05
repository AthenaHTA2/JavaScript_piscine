const escapeStr = '\'`\\\\/\""\'';
const arr = [2, '2'];
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

object.freeze(nested);
object.freeze(arr);
object.freeze(obj);
