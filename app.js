const promotion = {};
console.log(promotion.limit); // undefined
console.log(promotion.limit?.abccc); // TypeError: Cannot read property 'abccc' of undefined
