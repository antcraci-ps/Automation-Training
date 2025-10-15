const flag = true

if(flag)
{
    console.log("all good")
}
else
{
    console.log("not good")
}

if(!flag)
{
    console.log("all good")
}
else
{
    console.log("not good")
}

console.log("..................................................")

i = 0

while(i<5)
{
    i++
    console.log(i)
}

console.log("..................................................")

x = 3 

do
{
    x++
    
    console.log(x)
}
while(x<10);
{
    console.log(x)
}

console.log("..................................................")

for(let k = 0; k <= 5; k++)
{
    console.log(k)
}

console.log("..................................................")


// from 1 to 10 give me common multiple values of 2 and 5
for(let k = 1; k <= 10; k++)
{
    if(k % 2 == 0 && k % 5 == 0) // use && for both conditions to be true; use ||(or) for only 1 condition to be true
    console.log(k)
}

console.log("...........2.......................................")

// from 1 to 100 give me common multiple values of 2 and 5 but display only the first 3 numbers

let n = 0

for(let k = 1; k <= 100; k++)
{
    if(k % 2 == 0 && k % 5 == 0) // use && for both conditions to be true; use ||(or) for only 1 condition to be true
    {
        console.log(k)
        if(n++ && n == 3)
        break
    }
    
}