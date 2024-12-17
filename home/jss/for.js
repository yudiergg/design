$(document).ready(function(){
    let sum = 0
    for (let i = 1; i <6; i++)
        sum += i
    document.write(`1부터 5까지 더하면 ${sum}`)

    let sum1 = 0
    for (let i = 1; i < 1001; i++)
        sum1 += i
    document.write(`1부터 1000까지 더하면 ${sum1}`)
})