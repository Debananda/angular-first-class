const personArr = [
  { id: 1, name: 'abcd' },
  { id: 2, name: 'efg' },
  { id: 3, name: 'xyz' },
  { id: 4, name: 'kdb' }
];

let per = {};

/*for(let i =0; i < personArr.length; i++){
    const perObj = personArr[i];
    if(perObj.id === 2){
      per = perObj
    }
  }*/

/*personArr.forEach(function(perObj){
    if(perObj.id === 2){
      per = perObj
    }
  })*/

/*personArr.forEach((perObj, idx) => {
  if (perObj.id === 2) {
    per = perObj;
    per.index = idx;
  }
});*/

per = personArr.find(perObj => perObj.id === 2);

// const modifiedArr = [];

/*personArr.forEach((perObj, idx) => {
  modifiedArr.push({
    ...perObj,
    index: idx
  });
});*/

/*const modifiedArr = personArr.map((perObj, idx) => {
  return {
    ...perObj,
    index: idx
  };
});

console.log(modifiedArr);*/

// modifiedArr[0].name = '123';
// console.log(personArr, modifiedArr);

// const filteredPerArr = personArr.filter(per => per.id !== 2);
// const filteredPerArr = personArr.filter(per => per.name.length === 3);

// console.log(filteredPerArr);

function testFunction(name, ...args) {
  console.log(`${name} ${args[0]} ${args[1]} ${args[2]}`);
}

testFunction('test', '1', '1', 'test');
