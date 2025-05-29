class recurrLinearSearch{
    search( target, index, arr ){
        
        if( index >= arr.length ){
            return false
        }
        if( arr[index] == target ){
            return arr[index]
        }
        
        return this.search( target, index+1, arr )
    }
}

const data = new recurrLinearSearch()
console.log("Got: ", data.search( 8, 0, [1, 2, 3, 4, 5] ) )