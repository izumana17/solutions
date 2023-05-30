//Problem2: This function takes a string input and calculates the number of characters in it.
//if the number of character is even then it returns even else it returns off
function evenOdd(str)
{
    if(typeof(str) !== "string")
    {
        return "please insert a string";
    }
    let size=str.length;
    if(size%2==0)
    {
        return 'even';
    }
    else
    {
        return 'odd';
    }
}
const ans=evenOdd('Jack ma');
console.log(ans);
