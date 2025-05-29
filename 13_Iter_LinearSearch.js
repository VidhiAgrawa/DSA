class IterativeLinear{
    search( target, arr ){
        for (let i = 0; i < arr.length; i++) {
            if( arr[i] == target ){
                return arr[i]
            }
        }        
    }
}

const data = new IterativeLinear()
console.log( data.search( 20, [10, 20, 30] ) )