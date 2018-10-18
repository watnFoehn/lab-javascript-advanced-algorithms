class QueueDataStructure  {
    constructor(){
        this.queueControl = [],
        this.MAX_SIZE = 10
    
    }
    isEmpty(){
        return this.queueControl.length === 0
    }
  
    canEnqueue(){
        return this.queueControl.length < this.MAX_SIZE
    }
  
    enqueue(value){
        if(this.canEnqueue()){
            this.queueControl.push(value)
            return this.queueControl.reverse()
            }
            else {return 'Queue Overflow'}
    }
  
    dequeue(){
        if(this.isEmpty()){return 'Queue Underflow'}
        else {
            return this.queueControl[this.queueControl.length -1]
        }
    }
  
}
