function primes(number1, number2){
    var result=0;
    if(number1 >number2){
        result= Math.floor(Math.sqrt(number1))-Math.floor(Math.sqrt(number2));
        if(Math.floor(Math.sqrt(number2))==Math.sqrt(number2)){
            result++;
        }
    }
    else{
        result= Math.floor(Math.sqrt(number2))-Math.floor(Math.sqrt(number1));
        if(Math.floor(Math.sqrt(number1))==Math.sqrt(number1)){
            result++;
        }
    }
    return result;
    
}
console.log(primes(3,9));
console.log(primes(17,24));
console.log(primes(1,1000000000));