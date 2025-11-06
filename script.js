function mincost(arr)
{ 
//write your code here
// return the min cost
	if (arr.length <= 1) return 0;

    let heap = [...arr];
    heap.sort((a, b) => a - b);

    let totalCost = 0;

    while (heap.length > 1) {
        // Take two smallest
        let first = heap.shift();
        let second = heap.shift();

        let cost = first + second;
        totalCost += cost;

        heap.push(cost);
        heap.sort((a, b) => a - b);
    }
    return totalCost;
}

module.exports=mincost;
