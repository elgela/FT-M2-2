var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if (matchFunc(startEl)) resultSet.push(startEl);

  for (let i = 0; i < startEl.children.length; i++) {
    let child = startEl.children[i];
    let result = traverseDomAndCollectElements(matchFunc, child);
    resultSet = [...resultSet, ...result];
  }
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function (selector) {
  // tu código aquí
  // let firstChar = selector[0]; //primero declarar por variable la posición [0] del string 
  //para luego identificar de que tipo es
  if (selector[0] === '#') return 'id';
  if (selector[0] === '.') return 'class';
  if (selector.split('.').length >= 2) return 'tag.class'; //selector.includes('.')
  return 'tag';
  
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") {
    // matchFunction = (elem) => elem.id === selector.slice(1);
    matchFunction = (elem) => {
      if (`#${elem.id}` === selector) return true;
      return false;
    }
  } else if (selectorType === "class") {
    matchFunction = (elem) => {
      for (const className of elem.classList) {
        if (`.${className}` === selector) return true;
      }
      return false;
    }
  } else if (selectorType === "tag.class") {
    matchFunction = (elem) => {
      const [tag, className] = selector.split('.');

      return matchFunctionMaker(tag)(elem) && matchFunctionMaker(`.${className}`)(elem);
    }
  } else if (selectorType === "tag") {
    matchFunction = (elem) => {
      if (elem.tagName.toLowerCase() === selector) return true;
      return false;
    }
  }
  return matchFunction;
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
