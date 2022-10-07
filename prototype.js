console.log("Proto Tyepe");

// object Literal:object.prototype

let obj  ={
    Name:"omprakash",
    pogramming:"react",
}

function Obj(givename){
    this.name =givename
}

Obj.prototype.getName =function(){
    return this.name;
}
let Obj2 =new Obj("Drak king")

console.log(Obj2);
