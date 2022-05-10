function findOdd(A) {

    function howManyTimes(array,number){
     let count = 0
      for(let i = 0 ; i < array.length ; i++){
        if(array[i]== number){
          count = count + 1
        }
      }
      return count
    }
    return A.map((x,i,arr) => x = [x,howManyTimes(A,x)] ).filter(x=> x[1] % 2 != 0 ).map(x=> x = x[0] )[0]
  }




  /*

  6kyu- Find the odd int


  Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript


BEST SOLUTİONS

-------------------------------------------------------------------------------------------------------

const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

-------------------------------------------------------------------------------------------------------

function findOdd(A) {
  return A.reduce(function(c,v){return c^v;},0);
}

-------------------------------------------------------------------------------------------------------

function findOdd(arr) {
  return arr.find((item, index) => arr.filter(el => el == item).length % 2)
}

-------------------------------------------------------------------------------------------------------