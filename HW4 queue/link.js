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

class tree {
  constructor(data = null) {
    data ? this._addSt(data, this.root) : (this.root = null)
  }

  getList = () => {
    return this.root
  }

  _addSt(data, point) {
    point.data = data
    point.left = null
    point.right = null
  }

  add(data) {
    if (this.root) {
      let current = this.root
      while (current) {
        if (value === current.value) return undefined
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode
            return this
          }
          current = current.left
        } else {
          if (current.right === null) {
            current.right = newNode
            return this
          }
          current = current.right
        }
      }
    }
  }
}

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



let qe = new queue()
console.log(qe.fifo())
console.log(qe.lifo())
console.log(qe.getList())



let treee = new tree()
console.log(qe.fifo())
console.log(qe.lifo())
console.log(qe.getList())
