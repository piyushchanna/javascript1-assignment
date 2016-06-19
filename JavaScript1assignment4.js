array = [1,2,4,3,5,67,5,4,7,8,9];
 +var min =0
 +var max =100
 +for (x in array):
 +	if(x < min):
 +		x=min;
 +	if(x > max):
 +		x=max;
 +
 +document.log(min , max);