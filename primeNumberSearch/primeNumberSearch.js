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

/*

 b=a-1;
    while(a%b!=0) {
        b--;
    }

*/


const isReady = (arr) => {
  if (arr.length >= 2 && arr.length <= 10) {
    for (current of arr) {
      if (isNaN(current)) {
        return false
      }
    }
    return true
  }
  return false
}


class PrimeFactorDetector {
  getMaxPrime = (arr) => {
    if (isReady(arr)) {
      return 1
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
