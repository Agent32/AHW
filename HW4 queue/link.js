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
      return ( 
    {value : data,
    left : null,
    right : null} )
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

find(data){
      if(!this.root) return false
      
      let current = this.root
      let found = false
      while(current && !found){
            if(data < current.value){
              current = current.left
             } else if(data > current.value){
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

