function outer1(){
    let a = 3;
return function outer(){
    a  = 67;
    
    return function inner(){
        let b=6;
        return a;
    }
}
}

let x = outer1();
console.log(x()());