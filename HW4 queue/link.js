/* Тема на домашнюю проработку: структуры данных и алгоритмы. Каждому необходимо реализовать
 Linked List, queue, stack на чистом JS. 
 так же разобраться в алгоритмах сортировки (merge, selection, insertion sort) 

 Тебе будет доп задание, чтобы хоть как-то закрыть твои минусы - реализуешь и дерево
 */

class lList {
  constructor(initValue = 0) {
    this.list = {
      head: {
        value: initValue,
      },
    }
  }
  getList = () => {
    return this.list
  }
  addNewData = (data) => {
    this._getLast().next = { value: data }
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
}

class queue {
    constructor(initValue = [0,1,2,3,4,5,6,7,8,9,10]) {
      this.mass= initValue
    }
    getList = () => {
      return this.mass
    }
     lifo = () => {
      return this.mass.pop();
    }
    fifo = () => {
        return this.mass.shift();
      }
  }



let oneDirectionList = new lList(1)


oneDirectionList.addNewData(2)
oneDirectionList.addNewData(3)
oneDirectionList.addNewData(4)
console.log(oneDirectionList.getList())


let qe = new queue()
console.log(qe.fifo())
console.log(qe.lifo())
console.log(qe.getList())