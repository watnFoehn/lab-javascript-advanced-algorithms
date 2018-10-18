class StackDataStructure {
   constructor(){
    this.stackControl = [],
    this.MAX_SIZE = 10
    
  }
  isEmpty(){
          return this.stackControl.length === 0
  }

  canPush(){
    return this.stackControl.length < this.MAX_SIZE
        
    //else { return 'Stack Overflow'}
  }

  push(value){
    if(this.canPush()){
    this.stackControl.push(value)
    return this.stackControl
    }
    else {return 'Stack Overflow'}
  }

  pop(){
      if(this.isEmpty()){return 'Stack Underflow'}
        else {
            return this.stackControl[this.stackControl.length -1]
        }
  }

  
}


