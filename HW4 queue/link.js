/* Тема на домашнюю проработку: структуры данных и алгоритмы. Каждому необходимо реализовать
 Linked List, queue, stack на чистом JS. 
 так же разобраться в алгоритмах сортировки (merge, selection, insertion sort) 

 Тебе будет доп задание, чтобы хоть как-то закрыть твои минусы - реализуешь и дерево
 */

class lList {
  constructor(initValue = 0) {
    this.list = {
      value: initValue,
    }
  }
  getList = () => {
    return this.list
  }

  getFirstValue = () => {
    return this.list.value
  }

  getLastValue = () => {
    return this._getLast().value
  }

  _getLast() {
    let lastValue = this.list
    if (lastValue) {
      while (lastValue.next) {
        lastValue = lastValue.next
      }
    }
    return lastValue
  }

  addLast = (data) => {
    this._getLast().next = { value: data }
  }

  removeLast = () => {
    let lastValue = this.list
    if (lastValue) {
      while (lastValue.next.next) {
        lastValue = lastValue.next
      }
    }
    lastValue.next = null
  }

  removeFirst = () => {
    this.list = this.list.next
  }
  addFirst = (data) => {
    const newFirst = {
      value: data,
      next: this.list,
    }
    this.list = newFirst
  }
}
console.log('list + fifo lifo')
let oneDirectionList = new lList(1)
oneDirectionList.addLast(2)
oneDirectionList.addLast(3)
oneDirectionList.addLast(4)

//fifo
oneDirectionList.addFirst('fifo')
oneDirectionList.removeFirst()
console.log(oneDirectionList.getFirstValue())

//lifo
oneDirectionList.addLast('lifo')
oneDirectionList.removeLast()
console.log(oneDirectionList.getLastValue())
console.log(oneDirectionList.getList())
//------------------------------------------------------------------
class queue {
  constructor(initValue = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
    this.mass = initValue
  }
  getList = () => {
    return this.mass
  }
  lifo = () => {
    return this.mass.pop()
  }
  fifo = () => {
    return this.mass.shift()
  }
}

console.log('queue+stack')
let qe = new queue()
console.log(qe.fifo())
console.log(qe.lifo())
console.log(qe.getList())
//------------------------------------------------------------------
class tree {
  constructor(data = null) {
    this.root = this._addSt(data)
  }

  getList = () => {
    return this.root
  }

  _addSt(data) {
    return { value: data, left: null, right: null }
  }

  add(data) {
    if (this.root) {
      let current = this.root
      while (current) {
        if (data === current.value) return undefined
        if (data < current.value) {
          if (current.left === null) {
            current.left = this._addSt(data)
            return this
          }
          current = current.left
        } else {
          if (current.right === null) {
            current.right = this._addSt(data)
            return this
          }
          current = current.right
        }
      }
    }
  }

  find(data) {
    if (!this.root) return false

    let current = this.root
    let found = false
    while (current && !found) {
      if (data < current.value) {
        current = current.left
      } else if (data > current.value) {
        current = current.right
      } else {
        found = current
      }
    }

    return found
  }
}

console.log('tree')
const appleTree = new tree(1)
appleTree.add(20)
appleTree.add(30)
appleTree.add(19)
appleTree.add(18)

console.log(appleTree.find(18))
console.log(appleTree.getList())

let arrForSort = [2, -1, 7, 0, 5, 8, 4, 9, 3, 6]
console.log('selectSort')
function selectSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}
console.log(selectSort([...arrForSort]))

console.log('mergeSort')
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr
  }

  let middleIndex = Math.floor(arr.length / 2)
  let biggerThenMiddlePart = []
  let smallerThenMiddlePart = []

  for (let i = 0; i < arr.length; i++) {
    if (i === middleIndex) continue
    if (arr[i] < arr[middleIndex]) {
      smallerThenMiddlePart.push(arr[i])
    } else {
      biggerThenMiddlePart.push(arr[i])
    }
  }
  return [
    ...mergeSort(smallerThenMiddlePart),
    arr[middleIndex],
    ...mergeSort(biggerThenMiddlePart),
  ]
}
console.log(mergeSort(arrForSort))

console.log('insertSort')
function insertSort(arr) {
  let key, j
  for (let i = 1; i < arr.length; i++) {
    key = arr[i]
    j = i - 1
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j]
      j = j - 1
    }
    arr[j + 1] = key
  }

  return arr
}
console.log(insertSort(arrForSort))
