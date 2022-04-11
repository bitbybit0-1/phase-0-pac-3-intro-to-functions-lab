function shout(x){
    console.log(x);
    return x.toUpperCase();
}

function logShout(y){
    console.log(shout(y));
}
function whisper(z){
    console.log(z);
    return z.toLowerCase();
}
function logWhisper(w){
    console.log(whisper(w));
}
function sayHiToHeadphonedRoommate(x){

 if (x===x.toLowerCase()){

 return "I can't hear you!"
 } 
if (x===x.toUpperCase()) {
return "YES INDEED!" }
else {
    return "I would love to!"
}

}