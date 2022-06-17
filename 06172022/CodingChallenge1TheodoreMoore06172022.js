/**
 *Coding Challenge 6/17/2022 Part 1
 */

function median(listOne, listTwo){
    var totalLength= listTwo.length +listOne.length;



    var A;
    var B;
    if(listOne.length<=listTwo.length){
        A=listOne;
        B=listTwo;
    }
    else{
        B=listOne;
        A=listTwo;
    }
    let l=0;
    let r=A.length-1;

    let medianFound= false;
    while(!medianFound){
        let leftA=Math.floor((l+r)/2);
        let leftAValue;
        let rightAValue;
        if(leftA<0){
            leftAValue=-1;
            rightAValue=A[0];
        }
        else if(leftA==A.length-1){
            leftAValue=A[leftA];
            rightAValue=1001;
        }
        else{
            leftAValue=A[leftA];
            rightAValue=A[leftA+1];
        }
        let leftB=Math.floor(totalLength/2)-leftA-2;
        let leftBValue;
        let rightBValue;
        if(leftB<0){
            leftBValue=-1;
            rightBValue=B[0];
        }
        else if(leftB==B.length-1){
            leftBValue=B[leftB];
            rightBValue=1001;
        }
        else{
            leftBValue=B[leftB];
            rightBValue=B[leftB+1];
        }



        if(leftAValue<=rightBValue && leftBValue <= rightAValue){
            if(totalLength%2==1){
                return Math.min(rightAValue,rightBValue);
            }
            else{
                return ((Math.max(leftAValue, leftBValue)+Math.min(rightAValue, rightBValue))/2);
            }
        }
        else if(leftAValue>rightBValue){
            r=leftB-1;
        }
        else{
            l=leftA+1
        }


    }
}
console.log(median([1,3],[2]));
console.log(median([1,2],[3,4]));