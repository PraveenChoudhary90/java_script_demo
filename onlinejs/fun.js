function countvowel(str)
{
let count = 0;
for(let char of str)
{
    if(char === "a" || char === "e" || char ==="i" || char==="o" || char === "u")
    {
        count++;
    }
    console.log(str);
}
return count;


}
countvowel("praveenchoudharyseonicity");
