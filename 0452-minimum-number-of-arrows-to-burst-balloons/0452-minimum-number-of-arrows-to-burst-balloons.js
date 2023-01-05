/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    points.sort((a, b) => a[0] - b[0]);
    
    let cnt = 1;
    let overlap = points[0];
    
    points.forEach((p) => {
        if(overlap[1] < p[0]){
            cnt++;
            overlap = p;
        } else {
            const a = Math.max(overlap[0], p[0]);
            const b = Math.min(overlap[1], p[1]);
            overlap = [a, b];
        }
    })
    
    return cnt;
};