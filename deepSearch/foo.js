const bigObj = {
  field1: {
    field1_1: { hiddenJem: 21 },
    field1_2: {
      hiddenJem: 12,
    },
  },
  field2: {
    field2_1: {
      hiddenJem: 24,
    },
    field2_2: {
      literaryNothing: 0,
      field2_2_1: {
        hiddenJem: 44,
      },
    },
  },
}
var t0 = performance.now();
function getValue(mObj, target) {
  const mainAnsw = []
  const adress = []
  function recurse(obj, deepth = -1) {
    typeof deepth == 'number' ? ++deepth : (deepth = 0)

    for (let curr in obj) {
      adress[deepth] = curr

      if (typeof obj[curr] === 'object') {
        recurse(obj[curr], deepth)
      } else {
        if (Object.keys(obj)[0] === target) {
          mainAnsw.push({ path: [...adress], value: obj[target] })
        }
      }
    }
  }
  recurse(mObj)
  return mainAnsw
}

t0 = performance.now();
const answ = getValue(bigObj, 'hiddenJem')
console.log(answ)
var t1 = performance.now();
console.log("Call to getValue took " + (t1 - t0) + " milliseconds.");


const searchValueByKey = (obj, key) => {
  const result = [];
  if (typeof obj !== "object") {
    return;
  }
  if (obj.hasOwnProperty(key)) {
    return [{ value: obj[key], path: [key] }];
  }
  for (let objKey of Object.keys(obj)) {
    const internalResult = searchValueByKey(obj[objKey], key);
    if (internalResult && internalResult.length) {
      internalResult.forEach((item) => {
        item.path.unshift(objKey);
        result.push(item);
      });
    }
  }
  return result;
};

const answ2 = searchValueByKey(bigObj, 'hiddenJem')
console.log(answ2)
t1 = performance.now();

console.log("Call to searchValueByKey took " + (t1 - t0) + " milliseconds.");