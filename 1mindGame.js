//This function takes a number input and multiplies the number with 3 then adds 10 then divides it by 2 and finally subtracts 5 from it.
//then returns the value
function mindGame(number){
    if(typeof(number) !== "number")
    {
        return "please insert a number";
    }
    let a=number*3;
    let b=a+10;
    let c=b/2;
    let d=c-5;
    return d;
}
const ans=mindGame(33);
console.log(ans);
