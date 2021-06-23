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

const answ = getValue(bigObj, 'hiddenJem')
console.log(answ)
