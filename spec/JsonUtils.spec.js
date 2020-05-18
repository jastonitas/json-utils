const JsonUtil = require('./../JsonUtils');

describe("Json Utils Test", function() {
  var foo = 1;
  const someFunction = function () {return ''};
  const nonEmptyArray = [1, 2, 3, 4, 5];
  const validObject = { property1: 'value1', property2: 2, 'property3': 'value3'};
  const validMultilevelObject = { propertyA: validObject, propertyB: nonEmptyArray, 'propertyC': []};
  const emptyObject = {};
  const emptyArray = [];
  const emptyStringSingleQuotes = '';
  const emptyStringDoubleQuotes = "";

  beforeEach(function() {
    foo = 0;
    foo += 1;
  });

  afterEach(function() {
    foo = 0;
  });

  it("isObject should return true if we pass a valid object as argument.", function() {
    expect(JsonUtil.isObject(validObject)).toEqual(true);
  });

  it("isObject should return true if we pass a void object {} as argument.", function() {
    expect(JsonUtil.isObject(emptyObject)).toEqual(true);
  });

  it("isObject should return false if we pass null as argument.", function() {
    expect(JsonUtil.isObject(null)).toEqual(false);
  });

  it("isObject should return false if we pass a function as argument.", function() {
    expect(JsonUtil.isObject(someFunction)).toEqual(false);
  });

  it("isObject should return false if we pass nothing as argument.", function() {
    expect(JsonUtil.isObject()).toEqual(false);
  });

  it("isObject should return false if we pass a void string '' as argument.", function() {
    expect(JsonUtil.isObject(emptyStringSingleQuotes)).toEqual(false);
  });

  it("isObject should return false if we pass a void string \"\" as argument.", function() {
    expect(JsonUtil.isObject(emptyStringDoubleQuotes)).toEqual(false);
  });

  it("isObject should return false if we pass a empty array [] as argument.", function() {
    expect(JsonUtil.isObject(emptyArray)).toEqual(false);
  });

  //----------
  it("isEmptyObject should return true if we pass a empty object as argument.", function() {
    expect(JsonUtil.isEmptyObject(emptyObject)).toEqual(true);
  });

  it("isEmptyObject should return false if we pass a non empty object as argument.", function() {
    expect(JsonUtil.isEmptyObject(validObject)).toEqual(false);
  });

  it("isEmptyObject should return false if we pass a non empty object as argument.", function() {
    expect(JsonUtil.isEmptyObject(emptyArray)).toEqual(false);
  });

  it("isEmptyObject should return false if we pass a function as argument.", function() {
    expect(JsonUtil.isEmptyObject(someFunction)).toEqual(false);
  });

  it("isEmptyObject should return false if we pass a empty string '' as argument.", function() {
    expect(JsonUtil.isEmptyObject(emptyStringSingleQuotes)).toEqual(false);
  });

  it("isEmptyObject should return false if we pass a empty string \"\" as argument.", function() {
    expect(JsonUtil.isEmptyObject(emptyStringDoubleQuotes)).toEqual(false);
  });

  //--
  it("getDottedAttributes should return a valid array if we pass a valid multilevel json object as argument", function() {
    var dottedAttributes = JsonUtil.getDottedAttributes(validMultilevelObject);
    expect(dottedAttributes).toEqual([
      'propertyA.property1',
      'propertyA.property2',
      'propertyA.property3',
      'propertyB',
      'propertyC'
    ]);
  });

  it("getDottedAttributes should return a empty array if we pass an array as argument", function() {
    var dottedAttributes = JsonUtil.getDottedAttributes(nonEmptyArray);
    expect(dottedAttributes).toEqual([]);
  });

  it("getDottedAttributes should return a empty array if we pass an empty array as argument", function() {
    var dottedAttributes = JsonUtil.getDottedAttributes(emptyArray);
    expect(dottedAttributes).toEqual([]);
  });

});