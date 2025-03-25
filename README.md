# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.


//


Name: Kane Kriz

Most Recent Edit: 25 March 2025

Feedback Request 1 Date: X


//


RESPONSE:
The time complexity of my implementation can be analysed as follows:
To compute a theta bound for the algorithm's worst case runtime, we must first consider how the functionality of the implementation is accomplished.

First, we can consider the outer loop expressed via `for(var currentSubArrSize = 1; currentSubarrSize < arrSize; currentSubarrSize *= 2)`.
The outer loop's behvaior can be seen as currentSubarrSize begins set at 1, and doubles until currentSubarrSize is greater than or equal to the value of arrSize.

We can figure out how many times this iterates through via computing the number of times currentSubarrSize is able to double prior to reaching arrSize.
This can be expressed through considering the equation: 
2^k >= n
Solving this equation gives us the number of iterations that the outer loop will experience, at k >= log_2(n)

Next we must consider the behavior of the actual merging process within the code.
This is accomplished through the inner loop `for(var leftStartPos = 0; leftStartPos < arrSize; leftStartPos += 2 * currentSubarrSize)`, and the code's behavior within.

The inner loop behavior can be explained as follows:
The inner loop iterates through the array in sections of size 2* currentSubarrSize.
As we are aiming to compute the worst case complexity, we must consider the worst case of this inner loop being forced to iterate the maximum amount of times for a given array size.
Knowing this, the inner loop can be observed to run O(n / (2*currentSubarrSize)) times given each iteration of the outer loop.

The actual behavior of the inner loop (actual merging process) takes Θ(n) time as the time taken is dependent upon iterating through the entire array in order to properly merge the subarrays.

Using these separate calculations for the iteration requirements of the outer and inner loop functionality of the implementation, we now can compute the overall theta bound for worst case runtime.
This can be done through combining the number of iterations of the outer loop with the time taken for the merging process withn each iteration of the inner loop.

The outer loop runs log_2(n) times, and within each iteration, the merging process takes Θ(n) time. 
Due to this, the total time complexity is Θ(log⁡_2(n) * n) = Θ(nlog⁡_2(n))

As logarithms that have different bases from one another are proportional, and in Θ asymptotic notation constant factors are ignored in the overall calculation, this total time complexity can be simplified (away from the log_2 expressed above).
The simplified theta bound for the worst case complexity would then be Θ(nlog⁡n).


//


Plagiarism Acknowledgement: I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.


Citations:

Note: Consulted separate in-place and iterative merge sort examples below to help with fixing the logic of my code, cited below.
Intentionally avoided using any resource that would show accomplishing an in-place and iterative mergesort within the same implementation, as that is the point of me to accomplish during this exercise.

GeeksforGeeks. “InPlace Merge Sort.” GeeksforGeeks, 21 Nov. 2018, www.geeksforgeeks.org/in-place-merge-sort/.

Sryheni, Said. “Non-Recursive Merge Sort | Baeldung on Computer Science.” Www.baeldung.com, 24 Sept. 2020, www.baeldung.com/cs/non-recursive-merge-sort.

“Math.min() - JavaScript | MDN.” Developer.mozilla.org, developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min.
