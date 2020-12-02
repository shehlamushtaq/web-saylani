

const multi = (a=2, b=0) =>
{
    var c =  a*b
    return c
}
console.log(`Product of 2 numbers : ` + multi(9 , 4))

const square = (a) => 
{
    return a*a
}

console.log(`Square of a number =  ` + square(4))

const nowdate = () =>
{
    var c = new Date()
    var date = c.getDate()
    var day = c.getMonth()+1
    var year = c.getFullYear()
    var full = `Date of Today : 
    ` + date + " / " + day + " / " + year
    return full
}
console.log(nowdate())


var arr = [2,4,3]
const newArr = arr.map((item)=>{
    return item*item
})

console.log(newArr)



var num1 = [16 , 49 , 81]
const num2 = num1.map((num)=>{
    let s = Math.sqrt(num)
    return s
})

console.log( num2)

var num1 = [shehla, mina , samina]

const num2 = num1.map((item , index)=>{
    let s = ``
    return s
})

console.log( num2)

//https://docs.google.com/presentation/d/1scEVd9pD5eqw-0SBRTLwhxB0v2DzfIsWGzDPlVS7eqI/edit#slide=id.p




