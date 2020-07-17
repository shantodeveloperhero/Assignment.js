// feetToMile

function feetToMile(feet){
    var mile = feet / 5280;
    return mile;

}
var result = feetToMile(8490);
console.log(result);

// woodCalculator

function woodCalculator(chair, table, bed){
    var chaircount = chair * 1;
    var tablecount = table * 3;
    var bedcount = bed * 5;
    var totalwood = chaircount + tablecount + bedcount;
    return totalwood;
}
var woodresult = woodCalculator(6, 8, 10);
console.log(woodresult);

// brickCalculator

function brickCalculator(n){
    let i,sum,need,sum1 = 0,sum2 = 0,sum3 =0;
    for(i = 1; i <= n; i++){
        if(i > 0 && i <= 10){
            sum1 = sum1 + 1;
        }
        else if(i > 10 && i <= 20){
            sum2 = sum2 + 1;
        }
        else{
            sum3 = sum3 + 1;
        }
    }
    sum = sum1 * 15 + sum2 * 12 + sum3 * 10;
    need = sum * 1000;
    return need;
} 
var bricksresult = brickCalculator(10);
console.log(bricksresult);



// tinyFriend

function tinyFriend(name){
    let i, array=[name.length];
    for(i=0;i<name.length;i++){
        let nameLength=name[i].length;
        array[i]=nameLength;      
    }
    let smallLength=array[0];
    let smallName=name[0];
    for(i=1;i<array.length;i++){
       if(smallLength>array[i]){
            smallLength=array[i];
            smallName=name[i];      
       } 
    }
    return smallName;    
    }
    
  



