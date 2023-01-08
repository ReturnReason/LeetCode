/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    if(points.length === 1) return 1;
    
    const len = points.length;
    let result = 0;
    
    for(let i = 0; i < len - 1; i++){
        const [x1, y1] = points[i];
        
        const map = new Map();
        for(let j = i + 1; j < len; j++){
            const [x2, y2] = points[j];
            
            let slope = Number.MAX_SAFE_INTEGER;
            
            if(x2 !== x1){
               slope = (y2 - y1) / (x2 - x1);
            }
            
            let slopeCount = map.get(slope) || 0;
            map.set(slope, slopeCount + 1);
        }

        let pointMax = [...map].reduce((a,c)=>Math.max(a,c[1]),0);
        result = Math.max(pointMax, result);
    }
    
    return result + 1;
};