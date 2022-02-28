// ES5
/*
let list = {
    category: 'phone',
    names: ['phone 1', 'phone2', 'phone 3'],
    call: function () {
        var self = this;
        this.names.map(function (name){
            console.log(`${self.category} ${name}`)
        })
    }
}
*/





// ES6

let list = {
    category: 'phone',
    names: ['phone 1', 'phone2', 'phone 3'],
    call: function () {
        this.names.map( (name)=>{
            console.log(`${this.category} ${name}`)
        })
    }
}


list.call();