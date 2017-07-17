function getInputValue(id){
  //checks form input element for an input, if empty return the placeholder instead
  var mytextvalue = document.getElementById(id).value;
  if (mytextvalue ==""){
        mytextvalue =document.getElementById(id).placeholder;
        //console.log(id, mytextvalue);
        return parseFloat(mytextvalue);
    }
  else{
    //console.log(id, mytextvalue);
    return parseFloat(mytextvalue);
  }
}

function threePointWeighted (best, mostLikely, worst){
  return ((best+(mostLikely*4)+worst)/6)
}

function stardardDeviation (best, worst){
  return ((worst-best)/6)
}

function variance (best, worst){
  return Math.pow(((worst-best)/6),2)
}

function getBusinessDatesCount(startDate, endDate) {
    var count = 0;
    var curDate = startDate;
    while (curDate <= endDate) {
        var dayOfWeek = curDate.getDay();
        if(!((dayOfWeek == 6) || (dayOfWeek == 0)))
           count++;
        curDate.setDate(curDate.getDate() + 1);
    }
    return count;
}

function normalcdf(X){   //HASTINGS.  MAX ERROR = .000001
	var T=1/(1+.2316419*Math.abs(X));
	var D=.3989423*Math.exp(-X*X/2);
	var Prob=D*T*(.3193815+T*(-.3565638+T*(1.781478+T*(-1.821256+T*1.330274))));
	if (X>0) {
		Prob=1-Prob
	}
	return Prob
}   

function compute(form) {
    Z=eval(form.argument.value)
    M=eval(form.mean.value)
    SD=eval(form.stdev.value)
    with (Math) {
		if (SD<0) {
			alert("The standard deviation must be nonnegative.")
		} else if (SD==0) {
		    if (Z<M){
		        Prob=0
		    } else {
			    Prob=1
			}
		} else {
			Prob=normalcdf((Z-M)/SD);
			Prob=round(100000*Prob)/100000;
		}
	}
    form.result.value = Prob;
}

