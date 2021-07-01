/*
Prime Number Search

Write an algorithm that finds a digit in the array that can be split to maximal number of prime numbers

Sample: 
Input: [12, 3, 5] -> 12 = 2 x 2 x 3 (3 numbers); 3 and 5 are prime by nature, so our winner will be number 12.

Output: 12.
Constraints: 
Length of the input array: 2 ≤ |arr| ≤ 10
Array should contain only digits, decimals and letters are not allowed

Functional Description:
Application should utilize class PrimeFactorDetector and method 
getMaxPrime that has input param array of digits and returns a single digit that can be split to maximal number of primes
*/

class PrimeFactorDetector {
  _isConstraintsFree = (arr) => {
    if (arr.length >= 2 && arr.length <= 10) {
      for (let current of arr) {
        if (isNaN(current)) {
          return false
        }
      }
      return true
    }
    return false
  }
  _factorize = (x) => {
    let resultFactors = []
    for (let i = 2; i <= Math.sqrt(x); i++) {
      while (x % i == 0) {
        resultFactors.push(i)
        x = x / i
      }
    }
    if (x != 1) {
      resultFactors.push(x)
    }
    return resultFactors.length
  }

  getMaxPrime = (arr) => {
    if (this._isConstraintsFree(arr)) {
      const answerArray = []
      for (let curr of arr) {
        answerArray.push({ number: curr, value: this._factorize(curr) })
      }
      answerArray.sort((a, b) => (a.value > b.value ? -1 : 1))
      return answerArray[0].number
    } else {
      return false
    }
  }
}

let getPrime = new PrimeFactorDetector()
console.log(getPrime.getMaxPrime([1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 1]))
console.log(getPrime.getMaxPrime([1]))
console.log(getPrime.getMaxPrime([1, 2, 'c', 3]))
console.log(getPrime.getMaxPrime([12, 3, 5]))
console.log(getPrime.getMaxPrime([20, 576, 4188, 20]))

