/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    for (let i = 0; i < asteroids.length; i++) {
        let currentAst = asteroids[i];
        let nextAst = asteroids[i + 1];

        if (currentAst > 0 && nextAst < 0) {
            if (Math.abs(currentAst) === Math.abs(nextAst)) {
                asteroids.splice(i,2);
                i = -1;
                continue;
            }
            if (Math.abs(currentAst) > Math.abs(nextAst)) {
                asteroids.splice(i + 1,1)
                i = -1;
                continue;
            };
            if (Math.abs(currentAst) < Math.abs(nextAst)) {
                asteroids.splice(i,1);
                i = -1;
                continue;
            } ;
        }
    }
    return asteroids;
};