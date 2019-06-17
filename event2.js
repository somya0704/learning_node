const Event = require('events');
const event = new Event();

class Person extends Event{
    constructor(name){
        super();
        this._name = name;
    }
//getter method
    get name(){
        return this._name;
    }
}  

//setter method
   let cat = new Person('Cat');
     
     cat.on('name', () => {
         console.log('my name is ' + cat.name);
     });

     cat.emit('name');
