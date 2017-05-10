function MinMax(a){
	var min = Math.min.apply(Math, a);
	var max = Math.max.apply(Math, a);
	if(min == max){
	   var c = [min];
	   return c;
	}
	var c = [min, max];
	return c;
}