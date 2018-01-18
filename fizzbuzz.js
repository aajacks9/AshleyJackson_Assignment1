for (var i = 1; i <= 100; i++ )
{
    if(i % 3 == 0 && i % 5 == 0)
        {
        console.log('FizzBuzz');
        }
    else if ( i % 3 == 0 )
        {
        console.log('Fizz')
        }

    else if ( i % 5 == 0 )
    {
        console.log('Buzz')
    }
    else {
        console.log(i);
    }
}



/*I need a counter that only counts the prime numbers
I also need a function that determines if a number is prime or not
I also need a function that stops the counter after it reaches the 1000th prime number
so i need to go through each number determine if it is prime, if so then add it to the count
then start the function again until the count is 1000
then display that final number that was counted*/


var c = 0
function IsPrime(value) {

    for (var i = 2; i < value; i++) {
        var remainder = value % i;
        if (remainder === 0)
            return false;
        if (value > 1)
            (c++);
    }

    if c === 1000
        return value
}




