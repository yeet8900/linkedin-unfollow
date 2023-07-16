
//navigate to this website : https://www.expunctis.com/2019/03/07/Not-so-random.html
//took that website just for the purpose of demonstration
//paste the following code into console into the dev tools and observe the behaviour.
var but = document.getElementById("randomize");
for (a = 0; a < 200; a++) {
    setTimeout(() => { but.click(); }, 0); //action is queued in the event loop, effect will show up once the main thread is free, that is, when all the code in this window has been executed.
    console.log("hi");// gets printed first 
}
const fib = (n) => {
    if (n <= 1) {
        return n;
    }
    else {
        return fib(n - 1) + fib(n - 2)
    }
}

var num = fib(42); //no reason for 42, except that it's apparently the answer ;)
num // gets printed first