for( i=0 ; i<=100 ; i++)
 +{
 +	if(i%3==0  && i%5==0)
 +		document.log("FIZZBUZZ");
 +	else if(i%3==0)
 +		document.log("FIZZ");
 +	else if(i%5==0)
 +		document.log("BUZZ");
 +	else
 +		document.log(i);
 +} 