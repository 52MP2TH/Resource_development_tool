function Person(name){
    let a=name;
    return {
     getA:function (){
            return a;
        },
    setA:function(x){
            a=x;
        }
    }
}

let name = Person("sam");