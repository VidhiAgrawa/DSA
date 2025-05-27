let num = 787
let rev = 0

let temp = num 
while( temp != 0 ){
    let mod = ( temp % 10 )
    rev = rev * 10 + mod
    temp = Math.floor(temp / 10)

}

if( num == rev ){
    console.log("matched")
}