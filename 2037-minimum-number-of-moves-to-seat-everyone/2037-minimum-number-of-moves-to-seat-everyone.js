/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
    seats.sort((a, b) => a - b);
    students.sort((a, b) => a - b);
  
    let cnt = 0;
    seats.forEach((s, i) => {
      cnt += Math.abs(s - students[i]);
    })

    return cnt;
};