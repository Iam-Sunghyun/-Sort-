/**
 * 
 * @param {number[]} absolutes 
 * @param {string[]} signs 
 * @returns {number} answer
 */
 function solution(absolutes, signs) {
  var answer = 0;

  absolutes.forEach((element, i) => {
    signs[i] === true ? answer += element : answer += -element;

  });

  return answer;
}


console.log(solution([4, 7, 12], [true,false,true]));
