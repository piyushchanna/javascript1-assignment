array = [1,2,4,3,5,67,5,4,7,8,9];
var min =10000
var max =0
for (x in array){
	
	if(array[x] < min)
	{	console.log(min);
		min=array[x];
	}
	if(array[x] > max)
	{
		console.log(max);
		max=array[x];
	}
}

console.log("min : " + min + " max : " + max)
