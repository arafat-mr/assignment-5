let sum = convertedWorkDoneCount;
function workDone(number) {
  sum += 1;
  return sum;
}
//
let substraction = convertedWorkPendingCount;
function workPending(number) {
  substraction -= 1;
  return substraction;
}