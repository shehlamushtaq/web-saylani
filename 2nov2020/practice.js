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

    var count = 0;
    var start = 0;
    var searchItemLength = name.length;

// function doubleNum (arr) {
//     var nArr = [];
//     for (var i = 0; i<arr.length; i++){
//         //  nArr[i] = arr[i]*2 
//         nArr.push(arr[i]*2)
//     }
//     return nArr
// }
// ===========================Q1+++++++++++++++

// var name = "my name is shehla mushtaq";
// console.log(titlecase(name))
// function titlecase(str) {
     
   
//         var nstring = str.split(' ')
//         for(var i=0; i<str.length; i++){
//     //    nstring[i].toUpperCase()
// var myname =    nstring(i)
// var s =charAt(i).toUpperCase()

//    }
// }

//count of voweles=============================================
var name = "shehla mushtaq";
console.log(findVowel(name))

        ind = str.indexOf(name, start);

        if (ind != -1) {
            count++;
            start = ind + searchItemLength;
        } else {
            break;
        }

function findVowel(str){
    var count = 0;
    var nstr;
    for (var i=0; i<str.length; i++){
        nstr = str.charAt(i).toLowerCase()
        if (nstr=="a" || nstr=="e" || nstr=="i" || nstr=="o" ||nstr =="u"){
            count++
        }
    }
    return count

}


}










