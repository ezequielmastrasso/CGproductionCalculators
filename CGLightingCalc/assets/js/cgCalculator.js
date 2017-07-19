function getInputValue(id){
  //checks form input element for an input, if empty return the placeholder instead
  var mytextvalue = document.getElementById(id).value;
  if (mytextvalue ==""){
        mytextvalue =document.getElementById(id).placeholder;
        //console.log(id, mytextvalue);
        try{document.getElementById(id.replace("Input", "Info")).innerHTML=mytextvalue;}
        catch(err){}
        console.log(id, ": ", mytextvalue);
        return parseFloat(mytextvalue);
    }
  else{
    //console.log(id, mytextvalue);
    try{document.getElementById(id.replace("Input", "Info")).innerHTML=mytextvalue;}
    catch(err){}
    console.log(id, ": ", mytextvalue);
    return parseFloat(mytextvalue);
  }
}

function getInputDate(id){
  //checks form input element for an input, if empty return the placeholder instead
  var mytextvalue = document.getElementById(id).value;
  if (mytextvalue ==""){
        mytextvalue =document.getElementById(id).placeholder;
        //console.log(id, mytextvalue);
        //document.getElementById(id.replace("Input", "Info")).innerHTML=mytextvalue;
        console.log(id, ": ", mytextvalue);
        return mytextvalue.replace("/","-");
    }
  else{
    //console.log(id, mytextvalue);
    //document.getElementById(id.replace("Input", "Info")).innerHTML=mytextvalue;
    console.log(id, ": ", mytextvalue);
    return mytextvalue.replace("/","-");
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





function dateDifference(start, end) {

  // Copy date objects so don't modify originals

  var s = new Date(start);
  var e = new Date(end);

    var addOneMoreDay = 0;
    if( s.getDay() == 0 || s.getDay() == 6 ) {
    addOneMoreDay = 1;
  }

  // Set time to midday to avoid dalight saving and browser quirks
  s.setHours(12,0,0,0);
  e.setHours(12,0,0,0);

  // Get the difference in whole days
  var totalDays = Math.round((e - s) / 8.64e7);

  // Get the difference in whole weeks
  var wholeWeeks = totalDays / 7 | 0;

  // Estimate business days as number of whole weeks * 5
  var days = wholeWeeks * 5;

  // If not even number of weeks, calc remaining weekend days
  if (totalDays % 7) {
    s.setDate(s.getDate() + wholeWeeks * 7);

    while (s < e) {
      s.setDate(s.getDate() + 1);

      // If day isn't a Sunday or Saturday, add to business days
      if (s.getDay() != 0 && s.getDay() != 6) {
        ++days;
      }
      //s.setDate(s.getDate() + 1);
    }
  }
  var weekEndDays = totalDays - days + addOneMoreDay;
  return totalDays-weekEndDays + addOneMoreDay +1;
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

function normalDistribution(Z,M,SD) {
    
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
    return Prob;
}

function writeToPage(domString,text){
  document.getElementById(domString).innerHTML=text;
  console.log(domString, ": ", text);
}

function daysPercentage (yearWorkingDays, holidayDaysEntitled){
  //% of entitled holidays in a calendar year
  return ((holidayDaysEntitled*100)/yearWorkingDays)
}