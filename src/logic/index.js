
export const combinationSum = function(candidates, target) {

    let res = [];
    let temp = [];

    const fun = (sum, index) => {
        if (sum == target) {
            res.push([...temp]);
            return;
        }
        let len = candidates.length;

        for (let i = index; i < len; i++) {
            if (sum + candidates[i] <= target) {
                temp.push(candidates[i]);
                fun(sum + candidates[i], i);
                temp.pop();
            }
        }
    }

    fun(0, 0);
    return res;

  };

export const calculatePrice = function(combinations){
    const myMap = new Map([
        [50,59],
        [75,62],
        [100,90],
        [120,111]
    ]);
    // let sum = [0]*combinations.length;
    let sum = new Array(combinations.length).fill(0);
    for (let i=0; i<(combinations.length); i++){
        for (let j=0; j<(combinations[i].length); j++){
            sum[i] += parseInt(myMap.get(combinations[i][j]));
            // sum[i] += 1;
        }
    }
    return sum;
};
