const CONSTRUCTOR_STRING = "".constructor;
const CONSTRUCTOR_ARRAY = [].constructor;
const CONSTRUCTOR_OBJECT = ({}).constructor;

var isObject = function(value) {
  if (!value) return false;
  return (value.constructor === CONSTRUCTOR_OBJECT);
};

var isEmptyObject = function(value) {
  return (isObject(value) && Object.keys(value).length === 0);
};

var getDottedAttributes =  function(value) {
  if (!isObject(value)) return [];
  if (isEmptyObject(value)) return [];
  const dottedAttributes = [];
  recursiveDottedAttribute(dottedAttributes, value);
  return dottedAttributes;
}

var recursiveDottedAttribute = function(attributes, value, key) {
  if (isObject(value) && !isEmptyObject(value)) {
    Object.keys(value).forEach(childKey => {
      let concatenatedChildKey = key? key + '.' + childKey: childKey;
      recursiveDottedAttribute(attributes, value[childKey], concatenatedChildKey);
    });
  } else {
    attributes.push(key);
  }
}

exports.isObject = isObject;
exports.isEmptyObject = isEmptyObject;
exports.getDottedAttributes = getDottedAttributes;