// Kane Kriz
// UWYO COSC 3020
// Iterative, In-Place Mergesort Exercise
// 24 March 2025
//


//iterative and in place version of mergesort
// cite logic help where applicable

//kind of bought into not using a helper here, could have potentially made this logically easier to follow and eventually fix towards functionality

//expanded comments as I was getting lost in the logic trying to fix the functionality bugs

//

function mergesort(array) 
{
    var arrSize = array.length; //convienence
    
    for(var currentSubarrSize = 1; currentSubarrSize < arrSize; currentSubarrSize *= 2) 
    {
        //iterating through the array
        //merging pairs of subarrays of increasing size (via currentSubarrSize doubling between iterations)
        
        for(var leftStartPos = 0; leftStartPos < arrSize; leftStartPos += 2 * currentSubarrSize) 
        {
            //calculating the middle position midPos
            var midPos = Math.min(leftStartPos + currentSubarrSize, arrSize);
            //midPos also acts as the end of the left sub array
            //as well as logically also the beginning of the right subarray
        
            var rightEndPos = Math.min(leftStartPos + 2 * currentSubarrSize, arrSize);  //calculating ending position of right subarray
            
            var leftSubArrPos = leftStartPos; 
            var rightSubArrPos = midPos;     
            
            //temp array to store the merged result of the two subarrays, used deeper below.
            var tempArr = [];
            
            //merging the two subarrays into tempArr in sorted order
            //comparing elements from the left and right subarrays and add the smaller one to `tempArr`.
            while(leftSubArrPos < midPos && rightSubArrPos < rightEndPos) 
            {
                if(array[leftSubArrPos] <= array[rightSubArrPos]) 
                {
                    //if the current element in the left subarray is smaller or equal add it to `tempArr` and move the left ptr forward
                    tempArr.push(array[leftSubArrPos]);
                    leftSubArrPos++;
                } 
                    
                else 
                {
                    //if not, add the current element from the right subarray to tempArr, move the right ptr forward
                    tempArr.push(array[rightSubArrPos]);
                    rightSubArrPos++;
                }
            }

            //logic surrounding of the remaining potential leftover elements below
            while(leftSubArrPos < midPos) 
            {
                tempArr.push(array[leftSubArrPos]);
                leftSubArrPos++;
            }
        
            while(rightSubArrPos < rightEndPos) 
            {
                tempArr.push(array[rightSubArrPos]);
                rightSubArrPos++;
            }
            
            for(var i = 0; i < tempArr.length; i++) //copying of the merged elements from tempArr back into the original array
            {
                array[leftStartPos + i] = tempArr[i];
            }
        }
    }
    
    return array; //return sorted
}

//
