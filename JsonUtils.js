JsonUtil = {
  CONSTRUCTOR_STRING = "".constructor,
  CONSTRUCTOR_ARRAY = [].constructor,
  CONSTRUCTOR_OBJECT = ({}).constructor,
  isObject: function (value) {
    return value && value.constructor === CONSTRUCTOR_OBJECT;
  },
  isEmptyObject: function (value) {
    return isObject(value) && Object.keys(value) === 0;
  }
}