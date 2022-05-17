// Remember the acronym UPS check

// Step One (Understand). We have to understand the problem.
// 1. What is the unknown?
// return an array with all the values flattened

// 2. What are the data inputs?
// array of arrays
// 3. Can you restate the problem in your own words?
// return an array with all the values flattened

// 4. Can the unknown be determined from the data inputs?
// yes

// 5. Is the data inputs sufficient to determine the unknown? Insufficient? Redundant? Contradictory?

// sufficient

// 6. How should I label important pieces of data input that are a part of the problem?
// arr

// 7. Draw a figure. Introduce suitable notation.

// Step Two (Plan). Come up with concrete examples to help you understand the problem better. Find a connection between the data inputs and the unknown. You may be obliged to consider auxiliary problems if an immediate connection cannot be found.
// 8.  Have you seen it before? Or have you seen the same problem in a slightly different form? Do you know a related problem?
// yes but not recursively

// 9.   Do you know a coding strategy that could be useful? Look at the unknown! And try to think of a familiar problem having the same or a similar unknown. Here is a problem related to yours and solve before. Could you use it? Could you use its result? Could you use its method?

// someRecursive

// 10. Start with a simple example. Could you restate the problem? Could you restate it still differently?
// 11. What about examples with empty inputs? Any other edge case examples? What examples with invalid inputs?
// see notes

// 12. Progress to more complex examples. What is your updated plan here to find a solution?
// 13. If you still cannot solve the proposed problem, try to solve first some related problem. Could you imagine a more accessible related problem? A more general problem? A more special problem? An analogous problem? Could you solve a part of the problem? Keep only a part of the data inputs, drop the other part; how far is the unknown then determined, how can it vary? Could you derive something useful from the data? Could you think of other data appropriate to determine the unknown? Could you change the unknown or the data, or both if necessary, so that the new unknown and the new data are nearer to each other? Did you use all the data? Did you use the whole of the data inputs? Have you taken into account all essential notions involved in the problem?

// Step Three (Solve). Carry out your plan of the solution and check each one of your steps in pseudocode.
// 14.  Can you see clearly that the step is correct?

// see pseudocode

// IV. 	Step Four (Check). Examine the solution obtained and refactor.
// 15.  Can you check your result?
// 16.  Can you check the argument?
// 17.  Can you derive the result differently?
// 18.  Can you see it at a glance?
// 19.  Can you make the code DRYer and refactor?
// 20.  Can you improve the performance?
// 21.   How have other people solved this problem?

function flatten(arr) {
  const newArr =[];
 
  // base case
  if (arr.length === 0) return newArr;

  for(i in arr[0]){
    newArr.push(arr[i]);
  }
  // recursive 
  return newArr.concat(flatten(arr.slice(1,arr.length)));
}
/*

stack -> [] Recursion

Loop condition:
steps needs to be done repeatedly.

Base Condition :
Where should you end a substep, 
so that you can pop an element form stack.


[[1, 2, 3], [2, 4], [4, 5, 6, 7]]
[1, 2, 3, 2, 4, 4, 5, 6, 7,]

temp_arr = []
i = 0
n = len(arr) 
while i< n:
    sub = arr[i]
    for each in sub:
        temp_arr.append(each)
    increment i

2 loops 1 temp-array
arr = [[1,2,3],[2, 4]] - arr 2
arr[0] = 3
arr[1] = 2

[1,2,3] [2,4]
[1,2,3, 2, 4, ...]
const temp = []
flatten(arr, 0, temp)

def flatter(arr, index, temp):
    length = len(arr)
    
    if index==length:
       return temp

    for each in arr[index]:
        temp.append(each)
    
    flatten(arr, index+1, temp)


flatten ([[1,2,3], [2,4]], 0, [])
- temp = [1,2,3]
  - flatten([[1,2,3],[2,4]], 1, [1,2,3])
   - temp = [1,2,3,2,4]
    - flatten([...], 2,[1,2,3,2,4])
      -- return temp





*/
[1,2,3]+[2,4] = [1,2,3,2,4]




}
