var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},i={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in i){var r=i[e];delete i[e];var n={id:e,exports:{}};return o[e]=n,r.call(n.exports,n,n.exports),n.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){i[e]=o},e.parcelRequired7c6=r),r("7Y9D8");for(let e=0;e<Number(amount.value);e+=1)(Number(delay.value),Number(step.value),void Math.random()).then((({position:e,delay:o})=>{Notify.success(`:белая_галочка: Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{Notify.failure(`:х: Rejected promise ${e} in ${o}ms`)}));
//# sourceMappingURL=03-promises.60bae9f3.js.map
