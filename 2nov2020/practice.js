//calculator=============================

// var first =parseInt( prompt(`ENTER YOUR FIRST NUMBER`));
// var second  = parseInt( prompt(`ENTER YOUR SECOND NUMBER`));
// var operation  = prompt(`ENTER YOUR OPERATOR`);

// function calculation (num1, num2, operation) {
//     if (operation == "+") {                        
//         var addition = (num1+num2);
//         return addition 
//     } else if (operation == "-") {
//         var subtract = (num1-num2);
//         return subtract   
//     } else if (operation == "*") {
//         var multiply = (num1*num2);
//         return multiply
//     } else if (operation == "/") {
//         var division = (num1/num2);
//         return division
//     } else if (operation == "%") {
//         var remainder = num1%num2        
//         return remainder
//     }
  
// }

// var result = calculation(first , second , operation);
// var resultString = `${first} ${operation} ${second} = ${result}`;
// document.write(resultString);

//===================================================================================
// City Enterence
//========================================================

// var cityName = prompt(`What is your city name?
// "Karachi" "Lahore" or "Quetta"`)

// var msg = cityGreetings(cityName)
// document.write(msg)

// function cityGreetings (name){

//     name = name.toLowerCase()

//     switch (name){

//         case "karachi": {
//             return (`Welcome to city of lights "Karachi"`)
//         }

//         case "lahore": {
//             return (`Welcome to historical city "Lahore"`)
//         }

//         case "quetta": {
//             return (`Welcome to cold city "Quetta"`)
//         }

//     }
// }

// calculator=============================

// var first =parseInt( prompt(`ENTER YOUR FIRST NUMBER`));
// var second  = parseInt( prompt(`ENTER YOUR SECOND NUMBER`));
// var operation  = prompt(`ENTER YOUR OPERATOR`);

// function calculation (num1, num2, operation) {
//     if (operation == "+") {                        
//         var addition = (num1+num2);
//         return addition 
//     } else if (operation == "-") {
//         var subtract = (num1-num2);
//         return subtract   
//     } else if (operation == "*") {
//         var multiply = (num1*num2);
//         return multiply
//     } else if (operation == "/") {
//         var division = (num1/num2);
//         return division
//     } else if (operation == "%") {
//         var remainder = num1%num2        
//         return remainder
//     }
  
// }

// var result = calculation(first , second , operation);
// var resultString = `${first} ${operation} ${second} = ${result}`;
// document.write(resultString);

//===================================================================================
// City Enterence
//========================================================

// var cityName = prompt(`What is your city name?
// "Karachi" "Lahore" or "Quetta"`)

// var msg = cityGreetings(cityName)
// document.write(msg)

// function cityGreetings (name){

//     name = name.toLowerCase()

//     switch (name){

//         case "karachi": {
//             return (`Welcome to city of lights "Karachi"`)
//         }

//         case "lahore": {
//             return (`Welcome to historical city "Lahore"`)
//         }

//         case "quetta": {
//             return (`Welcome to cold city "Quetta"`)
//         }

//     }
// }

//=============================op operators==========================


// var a , b, result;

// a = 2
// b = 1
// document.write(` value of a =  ${a} 
// value of a =  ${b}`);

// result = --a - --b + ++b + b--; 
// document.write(`complete result =  ${result}
// First Step = --a; = ${--a}
// second step = --a - --b = ${--a - --b}`)
//=======================================================

var country = ["Afghanistan","Albania","Algeria","Andorra","Angola",
"Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba",
"Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh",
"Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan",
"Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil",
"British Virgin Islands","Brunei","Bulgaria","Burkina Faso",
"Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands",
"Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica",
"Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic",
"Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt",
"El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands",
"Faroe Islands","Fiji","Finland","France","French Polynesia",
"French West Indies","Gabon","Gambia","Georgia","Germany","Ghana",
"Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey",
"Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary",
"Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man",
"Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya",
"Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia",
"Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia",
"Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania",
"Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro",
"Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands",
"Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger"
,"Nigeria","Norway","Oman","Pakistan","Palestine","Panama",
"Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal",
"Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda",
"Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite",
"Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore",
"Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka",
"St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan",
"Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan",
"Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago",
"Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine",
"United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela"
,"Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];   
//==========================find the index number of==========================
// var task = "pakistan";
// //  document.write(country.indexOf(task))
// // var found = false;
// for (var i = 0; i<=country.length; i++ ) {

//     if (country[i].toLowerCase() == task) {
//         document.write(i);
//         break
//     }
// var ind = findIndex(country , "india")
// document.write(ind)
    


// function findIndex(arr , name){
  
//     for (var i = 0; i<arr.length; i++ ) {

//         if (arr[i].toLowerCase() == name) {
//             return i
//         }                
//     }
//     return -1

// }
//================find in arrey the elements which Start With ==============================

// document.write(findList(country , "h"))

// function findList (arr , lat) {
//     var temp = [];
//     var countryStr;
    
//     for ( var i = 0; i<arr.length; i++){
//     countryStr = arr[i]
//         if ( countryStr.charAt(0).toLowerCase() == lat.toLowerCase()) {
//             temp.push(countryStr)
//         }
//     }
//     return temp;
// }
//==============================find the elements that have tan in its speling========

// document.write(findTan(country , "b"))


// function findTan ( arr , tan) {
//     var temp = [];
//     var countryStr;
//     for ( var i = 0; i<arr.length; i++) {
//         countryStr = arr[i]
//         for ( var j = 0 ; j<countryStr.length; j++) {
//             if ( countryStr.charAt(j).toLowerCase() == tan.toLowerCase() ) {
//                 temp.push (countryStr)
//                 break
//             }    
//         }
   
//     } 
//     return temp
//}
//======to do=========================================================================

// var courses = [];

// for (var i = 0; i<5; i++) {
//     courses [i] = prompt(`enter the name of course ${i+1} ` )
    
// }
// alert( ` Names of All the courses you have Entered
// ` + courses)

// var editCourse = []

// for (var i = 0; i<5; i++) {
//     editCourse[i] =  prompt(`Name of course ${i+1} = ${courses [i]}
//     Edit the course name if you want , other wise press Enter `, courses[i] )
  
// }
//  alert( `All The Names of your Selected courses  
//  `+ editCourse)
//=======================for multi charechtor searching===================
// document.write(multiChar(country , 'tan'))

// function multiChar (arr , lat) {
//     var temp = [] 
//     var str;
//     for ( var i = 0; i< arr.length; i++) {
//         str = arr[i]
//         //for (var j = 0; j<str.length; j++){
            
//         var newStr = str.indexOf( lat)
//             // if (  lat === (str.slice(newStr , lat.length) )) {
//         if ( newStr != -1) {
//             temp.push(str)
//         //    break
//         }
//         //} 
//     }
//     return temp
// }





// console.log(courses)



// var p1 = `Asim  is the Elder son of Iqtidar Ahmed man. Asim is a good man. Asim is the Elder son of Iqtidar Ahmed. Asim is a good man. Asim is the Elder son of Iqtidar Ahmed. Asim is a good man. Asim is the Elder son of Iqtidar Ahmed. Asim is a good man. Asim is the Elder son of Iqtidar Ahmed. Asim is a good man.`;
// document.write(findNameCount(p1 , "man"));


// function findNameCount (str , name){
//     var a =str.split(' ' );
//     //console.log(a);
//     var count = 0;
//     for (var i = 0; i<a.length; i++){

//       if (a[i] == name ){
//           //count = ++count;
//           count++;
//       }   
//     }
//     return count
// }    

// function findNameCount (str , name) {
//     var count = 0;
//     //for ( var i = 0; i<str.length; i++){
//         var temp = str.match(/asim/g)

//         if (temp) {
//             count = temp.length;
//         } 
//     //}
//     return count
// }
///==================================================
// function findNameCount (str, name) {

//     var count = 0;
//     var start = 0;
//     var searchItemLength = name.length;

//     var ind;

//     while (true) {

//         ind = str.indexOf(name, start);

//         if (ind != -1) {
//             count++;
//             start = ind + searchItemLength;
//         } else {
//             break;
//         }

//     }

//     return count;


// }

//========= same work with forEach() function and with for() loop=======
// var arr1 = [3,5,7,9,10];
// console.log(arr1)
// var arr2 = [];

// console.log(arr2)

//     arr1.forEach(myfunction );

//     function myfunction(element){
//         arr2.push(element*2);
//     }

    // var count = 0;
    // var start = 0;
    // var searchItemLength = name.length;

// function doubleNum (arr) {
//     var nArr = [];
//     for (var i = 0; i<arr.length; i++){
//         //  nArr[i] = arr[i]*2 
//         nArr.push(arr[i]*2)
//     }
//     return nArr
// }
// ================================================================
//Write a JavaScript function that accepts a string as a parameter and converts the first letter
// of each word of the string in upper case.
//=======================================================================

// var name = "she is my friend and her name is hina";
// console.log(titlecase(name))

// function titlecase(str) {
//         var nstring = str.split(' ')
//         for(var i=0; i<nstring.length; i++){
//             var myname = nstring[i]
//             console.log(myname)
//             var upString = myname.charAt(0).toUpperCase()
//             var remaing = myname.slice(1,(myname.length))
//         //    myname = myname.replace()
//                 nstring[i] = upString+remaing
                

//         }
//         return nstring.join(" ")
// }

//count of voweles=============================================
// var name = "shehla mushtaq";
// console.log(findVowel(name))

//         ind = str.indexOf(name, start);

//         if (ind != -1) {
//             count++;
//             start = ind + searchItemLength;
//         } else {
//             break;
//         }

// function findVowel(str){
//     var count = 0;
//     var nstr;
//     for (var i=0; i<str.length; i++){
//         nstr = str.charAt(i).toLowerCase()
//         if (nstr=="a" || nstr=="e" || nstr=="i" || nstr=="o" ||nstr =="u"){
//             count++
//         }
//     }
//     return count

// }}
//=========================================================================================
//16 write a program that serach the word "the brown fox" in the paragraph 
//"the quick brown fox jumps over the lazy dog"
// and replace it with "the white cat" use slice method and then make it with builtin function)
//==========================================================================================

// var  str = "  the quick brown fox  jump over the lazy dog   ";
// console.log(str);
// console.log(toReplace(str ,  "the quick brown fox" ,"the white cat" ));

// function toReplace(str ,oldString, newString ){
// //     var oldIndex = str.indexOf(oldString);
// //     var lofOldStr = oldString.length
// // var strToReplace = str.slice(oldIndex, lofOldStr )

// var temp = str.replace(oldString , newString);
// return temp
//  }
//===============================================================================
//14 Write a program that takes string and find exclaimation point in the string.(use charAt and indexOf)
//15 Write a program that takes string and find if user has given two spaces.
// wirte the msg "2 spaces found" if there are two spaces in the text
//=====================================================================
// var str = prompt("entre the sentence")
// var newStr=findSpace(str)
// console.log(newStr)
// console.log(findExclamation(str))

// function findSpace(sentence){
//     var ind = sentence.indexOf("  ")
//     if (ind !== -1){
//     console.log(" oops double space found");
//     }
// }
// function findExclamation(sentence){
    
//     var ind = sentence.indexOf("!")
//     if (ind !== -1){
//     console.log("  sign of Exclamation found");
// }
// }
// //==========================================




//===================================================================================
//17 Write a JavaScript function to format a number up to specified decimal places.
// Go to the editor Test Data : console.log(decimals(2.100212, 2)); 
//"2.10" console.log(decimals(2.100212, 3)); //2.100 console.log(decimals(2100, 2)); 
// 2100.00=========================================================================


// var input = +prompt('enter any number')
// var afterfloat = +prompt (' how much after decimal upto , enter the number')
// console.log( input+` , `+ afterfloat)

//  format(input , afterfloat)



// function format (str , num){
//         // var value = parseFloat(str);
        
//         var formateNumber = Number(str).toFixed(num);
//         console.log("number after formate = "+ formateNumber )
// }
//==========================================
//generate random number
//========================================
// var days = [`monday`,`tuesday`,`wednesday`,`thursday`,`friday`,`saturday`]
// var index =Math.round( ((Math.random()*4)+1))
// console.log(days[index]);
// console.log(index);
//=======================================================================
//Date and Time
//=======================================================================
//================================================================
//calculate the days of your age
//==============================================================

// var now = new Date();
// console.log("Now = " +now);


// var dob = new Date('May 01, 1978');
// console.log(" Date Of Birth = "+ dob);

// var diff = now.getTime() - dob.getTime();
// console.log("Difference = "+ diff);

// var days =Math.round( diff/(1000*60*60*24));
// console.log("days = "+ days);

//==================================================================
//Calculate hours from now till Tomorrow
//===================================================================
// var now = new Date();
// console.log("Now = " +now);

// var tomorow = new Date("Nov 05 2020 9:00:00")
// console.log("tomorow = " +tomorow);

// var diff = tomorow.getTime() - now.getTime();
// var hours =Math.round(diff/(1000*60*60))
// console.log("Remaing Hours = " +hours)

//==============================================================
//Create a function that tells current time in Y-m-d format.
//================================================================
// currentTime();

// function currentTime(){
//     var now = new Date();
// var year = now.getFullYear();
// var month = now.getMonth()+1;
// var dat = now.getDate()+1;

//     console.log(now)
//     console.log(year+"-" + month +"-" + dat)
//     console.log(year+"-" + month +"-" + dat)
  
// }


//==============================================================
//Create a function that tells current time in Y-m-d format.
//================================================================
// currentDate();

// function currentDate(){
//     var now = new Date();
// var year = now.getFullYear();
// var month = now.getMonth()+1;
// var dat = now.getDate();

//     console.log(now)
//     console.log(year+"-" + month +"-" + dat)
//     console.log(year+"-" + month +"-" + dat)
  
// }

// //==============================================================
// //Create a function that tells current time from Date object in H:i:s format
// //===================================================================
// timeFunction();

// function timeFunction(){
//     var now = new Date()
//     // var time = now.getTime()
//     var hh = now.getHours();
//     var mm = now.getMinutes();
//     var ss = now.getSeconds();


//     console.log(MakeDoubleDigit(hh) + ':' + MakeDoubleDigit(mm) + ':' + MakeDoubleDigit(ss));

// }

// console.log(ShowTimeInAMPM ("20:25:30"));

// function MakeDoubleDigit (num) {

//     if (num > 9) {
//         return num;
//     } else {
//         return "0" + num;
//     }

// }

// function ShowTimeInAMPM (timeInHHMMSS) {

//     var arr = timeInHHMMSS.split(':');
//     var hh = arr[0];
//     var am_pm = '';

//     if (hh < 12) {
//         am_pm = 'AM';
//     } else {
//         am_pm = 'PM';
//     }

//     if (hh > 12) {
//         hh = hh - 12;
//     }

//     arr[0] = MakeDoubleDigit(hh);

//     var new_time = arr.join(':');
//     return new_time + ' ' + am_pm;
         
// }
//=================================================================================
//                              switch statment
//================================================================================
// var days = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
// var n = prompt("enter the number the number from 0 -to- 6")
// switch (days[n]) {
//     case 'monday':
//         console.log("This is Monday")
//         break;
//     case 'tuesday':
//         console.log("This is tuesday")
//         break;
//     case 'wednesday':
//         console.log("This is wednesday")
//         break;
//     case 'thursday':
//         console.log("This is thursday")
//         break;
//     case 'friday':
//         console.log("This is friday")
//         break;
//     case 'saturday':
//         console.log("This is saturday")
//         break;
//     case 'sunday':
//         console.log("This is sunday")
//         break;

//     default:
//         console.log("you have entered wrong number")
//         break;
// }

//================================================================================
// trafic signal
//========================================================
// var signal = prompt("enter the colour red , yellow , green")
// switch (signal) {
//     case 'red':
//         console.log('Stop right now')
//         break;
//     case 'green':
//         console.log('You can go now')
//         break;
//     case 'yellow':
//         console.log('ready to go')
//         break;

    
//     default:

//         break;
// }

//==================================================================================
                //   calculate the circumference of circle
//==================================================================================
// var r = +prompt('enter the radius')
// var a = circumference(r)
// console.log(a)


// function circumference(num){
   
//    var pi = Math.PI//3.14
//    var c = 2*pi*num
//    return c
// }
//==================================================================================
        //calculate the area of circle
//==================================================================================

// var r = +prompt('enter the radius')
// var a = circleArea(r)
// console.log( "Area of Circle is = " + a)


// function circleArea(num){
   
//    var pi = Math.PI //3.14
//    var rr = Math.pow(num , 2)
//    var c = (pi*rr).toFixed(2)
//    return c
// }

//==================================================================================
        //program which ask user to enter a number if number
        // is equal to your variable print "you have won" else again
        // ask user to enter number
//==================================================================================

var mynumber = 3;
var yurNumber = prompt('Enter a number from 1-to-10')

while (mynumber != yurNumber) {
   var n= prompt('Again Enter a number from 1-to-10')

   if (n==mynumber){
        console.log('wow you have won')
        break;
    }
}















