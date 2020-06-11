// https://www.codewars.com/kata/55f2c3dde50947271200006a/train/javascript

function addProperty(obj, prop, value) {
    if(obj[prop] !== undefined) {
        throw 'Error';
    }
    obj[prop] = value;
    return obj;
}