let a = 1
let b = -7
let c = 12

let D = b * b - 4 * a * c


if( D < 0 ){
    console.log("D is imaginary")
}else{
    let root = Math.sqrt(D)

    
    let root1 = Math.floor(( -b + root ) / (2 * a)) 
    let root2 = Math.floor(( -b - root ) / (2 * a)) 
    
    console.log( "[" , root1, ",", root2, "]" )

}
