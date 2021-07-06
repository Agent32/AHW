/* Тема на домашнюю проработку: структуры данных и алгоритмы. Каждому необходимо реализовать
 Linked List, queue, stack на чистом JS. 
 так же разобраться в алгоритмах сортировки (merge, selection, insertion sort) 

 Тебе будет доп задание, чтобы хоть как-то закрыть твои минусы - реализуешь и дерево
 */


 class lList {

    constructor (initValue=0){
        this.list ={
            head:{
                value: initValue
            }
        }
    }

    getList = () =>{
        return this.list
    }

    addNewData=(data) => {

         this.getLast().next = { value: data }
    }
    getLast() {
        let lastValue = this.list;
        if (lastValue) {
            while (lastValue.next) {
                lastValue = lastValue.next
            }
        }
        return lastValue
    }
 }

 let oneDirectionList=  new lList(1)

 console.log(oneDirectionList.getList( ))
 oneDirectionList.addNewData(2)
 oneDirectionList.addNewData(3)
 oneDirectionList.addNewData(4)