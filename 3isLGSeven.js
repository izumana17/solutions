//Problem3: This function takes a number input
//we have to find out the difference between input value and 7. If this difference is smaller than 7, then ywe have to return that subtraction. Otherwise ywe will have to return double of the input.
function isLGSeven(number)
{
    if(typeof(number) !== "number")
    {
        return "please insert a number";
    }
    let difference=number-7;
    if(difference<7)
    {
        return difference;
    }
    else
    {
        let ans=number*2;
        return ans;
    }
}
const ans=isLGSeven(15);
console.log(ans);