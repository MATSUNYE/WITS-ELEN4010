const electiveOne = {
    courseCode: 'ELEN4010',
    yearOffered: 4
    }
    const electiveTwo = {
    courseCode: 'ELEN4001',
    yearOffered: 4
    }
    const electiveThree = {
    courseCode: 'ELEN4020',
    yearOffered: 4
    }
    const electiveFour = {
    courseCode: 'ELEN4017',
    yearOffered: 4
    }
    let students = [
    {
    name: 'Kwezi',
    studentNumber: 453528,
    yearOfStudy: 4,
    electives: [electiveOne, electiveTwo, electiveThree]
    },
    {
    name: 'Pieter',
    studentNumber: 454345,
    yearOfStudy: 3,
    electives: [electiveOne, electiveTwo, electiveFour]
    },
    {
    name: 'Jade',
   c: 678345,
    yearOfStudy: 4,
    electives: [electiveTwo, electiveThree, electiveFour]
    },
    {
    name: 'Kiren',
    studentNumber: 567893,
    yearOfStudy: 4,
    electives: [electiveOne, electiveTwo, electiveThree]
    }
    ]
    //Add username
   
    var temp = getCookie("user")
    if(temp !==null){let mystring =getCookie("user");
    let hearder_1= document.getElementById('hearder1');
    hearder_1.innerHTML="Hello "+mystring+"!";}
  
        var setuser =document.getElementById('add-user');
        setuser.addEventListener('click',function(e){
        let user = document.getElementById('user-name');
      
        document.cookie="user="+user.value+";"+"expires=Fri,28 Aug 2020 12:00:00 UTC;path=/";
        const x=document.cookie;
        let mystring =getCookie("user");
        let hearder_1= document.getElementById('hearder1');
        hearder_1.innerHTML="Hello "+mystring; 
    })
   


//Display studentss
var searchtext =document.querySelector('#add-student');
searchtext.addEventListener('click',function(e){
// DO SOMETHING
const ans = students;

ans.forEach(element => {
let paragraph = document.createElement('p');

let student = document.getElementById('students')
student.appendChild(paragraph) // Append <p> to the <div>
paragraph.innerHTML = element.name+' '+'<button id="delete" onclick ="remove()">delete</button>';
 })})
 
     

 // set a cookie
 function setCookie(cname,cvalue) {
    //var d = new Date();
    //d.setTime(d.getTime() + (exdays*24*60*60*1000));
   // var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue;// + ";" + expires + ";path=/";
  }
// get a cookie
function getCookie(name) {
    function escape(s) { return s.replace(/([.*+?\^${}()|\[\]\/\\])/g, '\\$1'); };
    var match = document.cookie.match(RegExp('(?:^|;\\s*)' + escape(name) + '=([^;]*)'));
    return match ? match[1] : null;
} 