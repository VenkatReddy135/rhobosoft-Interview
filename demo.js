

//find missing number

 var array1=[1,3,4,5];
 function absent(arr){
    var mia= [], 
	min= Math.min.apply('',arr),
	max= Math.max.apply('',arr);
    while(min<max){
        if(arr.indexOf(++min)== -1) mia.push(min);
    }
    return mia;
}

console.log(absent(array1));


//sort and sqare even numbers

var array2=[1,5,3,4,6,2];
  
 var sortarry=array2.sort(function(a, b){return a - b});
 
  var squarearray=[];
  for(var i=0;i < sortarry.length;i++){
    if(sortarry[i]%2===0){
	squarearray.push(sortarry[i]*sortarry[i]);
	}
  }
  console.log(squarearray.join(' '));
  
// sum of numbers
var array=[1,5,3,4,6,2];
 total=0;
 for(var x=0;x<array.length;x++){
 
 total+=array[x];
 
 }
 console.log(total);

 //chess board
 var size = 8; //this is the variable setting
 
 var board = "";//this is the empty string we're going to add either ' ' , '#' or newline
 
 for (var y = 0; y < size; y++) {   /*in the outer loop we add newline to seperate rows*/
   for (var x = 0; x < size; x++) {/*every inner loop rappresents a line, and alternatively it's adding either ' ' or '#' to the string that's being populated*/
     if ((x + y) % 2 == 0)
       board += " ";
     else
       board += "#";
   }
   board += "\n";
 }
 
 console.log(board);


