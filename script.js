// array  use index [i] [1]..  .length
const person = [
    "Gustav",
    "Andersson",
    "Borås",
    "Hund"
];
// while (person.length < 5) {
//     console.log("array")
//     break;
// }

for(i=0; person.length; i++) {
    if(person[i] === "Gustav") {
        alert("hej");
        break;
    }
}


// object use .firstname etc. 
var me = {
    firstname: "Gustav",
    lastname: "Andersson",
    city: "Borås",
    pet: "Hund"
};
while(me.lastname = "Gustav") {
    console.log("object")
    break;

}

