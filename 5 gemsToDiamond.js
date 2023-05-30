//Problem5: This function takes 3 number values as input
//multiplies the numbers with certain values and then sums all of them together
//if the sum total is greater than 2000 the it subtracts 2000 from the total and returns it else it returns the total
function  gemsToDiamond(frnd1, frnd2, frnd3)
{
    if((typeof(frnd1) !== "number") || (typeof(frnd2) !== "number") || (typeof(frnd3) !== "number"))
    {
        return "Enter numbers only";
    }
    diamond1= frnd1 * 21;
    diamond2= frnd2 * 32;
    diamond3= frnd3 * 43;
    let total= diamond1 + diamond2 + diamond3;
    if(total>(1000*2))
    {
        let ans= total-2000;
        return ans;
    }
    else
    {
        return total;
    }
}
const ans=gemsToDiamond(100, 5, 1);
console.log(ans);