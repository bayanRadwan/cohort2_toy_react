// Take an array of strings and return each unique string in array with a value for
// how many times it occurs. Return the arrays in another array sorted from greatest 
// to least 

//input: ['car', 'bike', 'train', 'bike', 'car', 'truck', 'car']
//output: [['car', 3], ['bike', 2], ['train', 1], ['truck', 1]]

// input: ['blue', 'red', 'orange', 'orange', 'red']
// output: [['orange', 2], ['red', 2], ['blue', 1]]

var uniqNum=function(array){
	var arr=[];
	var count = 0;
	var newarr=[];
	for(var i = 0 ; i < array.length; i++){
		if(array[i] === array[i++] ){
			count++;
			// array.shift()
			newarr.push(array.shift(),count)
			
		}else if(array.length > 0){
			uniqNum(array)
		}
	}
	arr.push(newarr);
	return arr;
	}	


