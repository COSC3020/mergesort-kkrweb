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


RESPONSE: Not Complete
The time complexity of my implementation can be analysed as follows:
To compute a theta bound for the algorithm's worst case runtime, we must first consider how the functionality of the implementation is accomplished.

First, we can consider the outer loop expressed via `for(var currentSubArrSize = 1; currentSubarrSize < arrSize; currentSubarrSize *= 2)`.
The outer loop's behvaior can be seen as currentSubarrSize begins set at 1, and doubles until currentSubarrSize is greater than or equal to the value of arrSize.

We can figure out how many times this iterates through via computing the number of times currentSubarrSize is able to double prior to reaching arrSize.
This can be expressed through considering the equation: ............
Solving this equation gives us the number of iterations that the outer loop will experience, at ........

Next we must consider the behavior of the actual merging process within the code.
This is accomplished through the inner loop `for(var leftStartPos = 0; leftStartPos < arrSize; leftStartPos += 2 * currentSubarrSize)`.
The inner loop behavior can be explained as follows:
......

Using these separate calculations for the iteration requirements of the outer and inner loop functionality of the implementation, we now can compute the overall theta bound for worst case runtime.
This can be done through........


//


Plagiarism Acknowledgement: I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

Citations:

Note: Consulted separate in-place and iterative merge sort examples below to help with fixing the logic of my code, cited below.
Intentionally avoided using any resource that would show accomplishing an in-place and iterative mergesort within the same implementation, as that is the point of me to accomplish during this exercise.

GeeksforGeeks. “InPlace Merge Sort.” GeeksforGeeks, 21 Nov. 2018, www.geeksforgeeks.org/in-place-merge-sort/.

Sryheni, Said. “Non-Recursive Merge Sort | Baeldung on Computer Science.” Www.baeldung.com, 24 Sept. 2020, www.baeldung.com/cs/non-recursive-merge-sort.

“Math.min() - JavaScript | MDN.” Developer.mozilla.org, developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min.
