//Problem4: This function takes an array input
//And calculates the number of negative numbers and returns it
function  findingBadData(arr)
{
    if(Array.isArray(arr) !== true)
    {
        return "please insert an array";
    }
    let i=0;
    let j=0;
    while(i<arr.length)
    {
        let element=arr[i];
        if(element<0)
        {
            j++;
        } 
        i++;     
    }
    return j;
}
let arr=[2, -5, -7, -13];
const ans=findingBadData(arr);
console.log(ans);
