/*
Author: Theodore Moore
Coding Challenge 06/17/2022 Part 2
*/
function merge(list){
    var result=[];
    while(true){
        let minimum=501;
        let grabbed=-1;
        for(let i=0; i<list.length; i++){
            if(list[i].length==0){
                list.splice(i, 1)
            }
        }
        if (list.length==0){
            return result;
        }
        for(let i=0; i<list.length; i++){

            if(minimum>list[i][0]){
                minimum=list[i][0];
                grabbed=i;
            }
        }
        result.push(minimum);
        list[grabbed]=list[grabbed].slice(1);

    }
}
console.log(merge([[1,4,5],[1,3,4],[2,6]]));
console.log(merge([[]]));
console.log(merge([]));