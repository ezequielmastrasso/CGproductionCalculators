function updateInformationPanel (){
    

    var leadArtists =getInputValue("leadsArtistsCountInput");
    document.getElementById("leadsArtistsCountInfo").innerHTML=leadArtists;
    console.log("leadArtists: ", leadArtists);

  	var artist =getInputValue("artistCountInput");
    document.getElementById("artistCountInfo").innerHTML=artist;
    console.log("artistsCount: ", artist)

		var juniorArtists=getInputValue("juniorArtistsCountInput");
    document.getElementById("juniorArtistsCountInfo").innerHTML=juniorArtists;
    console.log("juniorArtists: ", juniorArtists)

    var shotCount =getInputValue("shotCountInput");
    document.getElementById("shotCountInfo").innerHTML=shotCount;
    console.log("shotCount: ", shotCount);

  	var sequenceCount =getInputValue("sequenceCountInput");
    document.getElementById("sequenceCountInfo").innerHTML=sequenceCount;
    console.log("artistsCount: ", sequenceCount)


		var establishingShotsPerSequence=getInputValue("establishingShotsPerSequenceInput");
    document.getElementById("establishingShotsPerSequenceInfo").innerHTML=establishingShotsPerSequence;
    console.log("establishingShotsPerSequence: ", establishingShotsPerSequence)
		
    var artistsCapacity=getInputValue("artistsCapacityInput");
    document.getElementById("artistsCapacityInfo").innerHTML=artistsCapacity;
    console.log("artistsWorkingCapacity: ", artistsCapacity)

    var juniorArtistsCapacity=getInputValue("juniorArtistsCapacityInput");
    document.getElementById("juniorArtistsCapacityInfo").innerHTML=juniorArtistsCapacity;
    console.log("juniorArtistsWorkingCapacity: ", juniorArtistsCapacity)

    var leadArtistsCapacity=getInputValue("leadArtistsCapacityInput");
    document.getElementById("leadArtistsCapacityInfo").innerHTML=leadArtistsCapacity;
    console.log("leadArtistsWorkingCapacity: ", leadArtistsCapacity)

    
		
    //estimates Hero
    //difficult
    var estimateHeroDifficultBest=threePointChild=getInputValue("estimateHeroDifficultBestInput");
    console.log("estimateHeroDifficultBest: ", estimateHeroDifficultBest)
    var estimateHeroDifficultMostLikely=threePointChild=getInputValue("estimateHeroDifficultMostLikelyInput");
    console.log("estimateHeroDifficultMostLikely: ", estimateHeroDifficultMostLikely)
    var estimateHeroDifficultWorst=threePointChild=getInputValue("estimateHeroDifficultWorstInput");
    console.log("estimateHeroDifficultWorst: ", estimateHeroDifficultWorst)
    //medium
    var estimateHeroMediumBest=threePointChild=getInputValue("estimateHeroMediumBestInput");
    console.log("estimateHeroMediumBest: ", estimateHeroMediumBest)
    var estimateHeroMediumMostLikely=threePointChild=getInputValue("estimateHeroMediumMostLikelyInput");
    console.log("estimateHeroMediumMostLikely: ", estimateHeroMediumMostLikely)
    var estimateHeroMediumWorst=threePointChild=getInputValue("estimateHeroMediumWorstInput");
    console.log("estimateHeroMediumWorst: ", estimateHeroMediumWorst)
    //easy
    var estimateHeroEasyBest=threePointChild=getInputValue("estimateHeroEasyBestInput");
    console.log("estimateHeroEasyBest: ", estimateHeroEasyBest)
    var estimateHeroEasyMostLikely=threePointChild=getInputValue("estimateHeroEasyMostLikelyInput");
    console.log("estimateHeroEasyMostLikely: ", estimateHeroEasyMostLikely)
    var estimateHeroEasyWorst=threePointChild=getInputValue("estimateHeroEasyWorstInput");
    console.log("estimateHeroEasyWorst: ", estimateHeroEasyWorst)


    //3 point means
    var threePointHeroDifficult=threePointWeighted(estimateHeroDifficultBest, estimateHeroDifficultMostLikely,estimateHeroDifficultWorst);
    var threePointHeroMedium=threePointWeighted(estimateHeroMediumBest, estimateHeroMediumMostLikely,estimateHeroMediumWorst);
    var threePointHeroEasy=threePointWeighted(estimateHeroEasyBest, estimateHeroEasyMostLikely,estimateHeroEasyWorst);
    document.getElementById("threePointHeroDifficultInfo").innerHTML=threePointHeroDifficult.toFixed(2);
    document.getElementById("threePointHeroMediumInfo").innerHTML=threePointHeroMedium.toFixed(2);
    document.getElementById("threePointHeroEasyInfo").innerHTML=threePointHeroEasy.toFixed(2);

    //standard Deviation hero
    var standardDeviationHeroDifficult=stardardDeviation(estimateHeroDifficultBest,estimateHeroDifficultWorst);
    var standardDeviationHeroMedium=stardardDeviation(estimateHeroMediumBest,estimateHeroMediumWorst);
    var standardDeviationHeroEasy=stardardDeviation(estimateHeroEasyBest,estimateHeroEasyWorst);
    document.getElementById("standardDeviationHeroDifficultInfo").innerHTML=standardDeviationHeroDifficult.toFixed(2);
    document.getElementById("standardDeviationHeroMediumInfo").innerHTML=standardDeviationHeroMedium.toFixed(2);
    document.getElementById("standardDeviationHeroEasyInfo").innerHTML=standardDeviationHeroEasy.toFixed(2);


    //variance hero
    var varianceHeroDifficult=variance(estimateHeroDifficultBest,estimateHeroDifficultWorst);
    var varianceHeroMedium=variance(estimateHeroMediumBest,estimateHeroMediumWorst);
    var varianceHeroEasy=variance(estimateHeroEasyBest,estimateHeroEasyWorst);
    document.getElementById("varianceHeroDifficultInfo").innerHTML=varianceHeroDifficult.toFixed(2);
    document.getElementById("varianceHeroMediumInfo").innerHTML=varianceHeroMedium.toFixed(2);
    document.getElementById("varianceHeroEasyInfo").innerHTML=varianceHeroEasy.toFixed(2);

    var heroShotsCount= (shotCount*heroShotsPercentage)/100;
    document.getElementById("heroShotsCountInfo").innerHTML=heroShotsCount.toFixed(0);
    

    //INPUT %
    var heroDifficultShotsPercentage=getInputValue("heroShotsDifficultPercentageInput");
    document.getElementById("heroShotsDifficultPercentageInfo").innerHTML=heroDifficultShotsPercentage;
    console.log("heroDifficultShotsPercentage: ", heroDifficultShotsPercentage)

    var heroMediumShotsPercentage=getInputValue("heroShotsMediumPercentageInput");
    document.getElementById("heroShotsMediumPercentageInfo").innerHTML=heroMediumShotsPercentage;
    console.log("heroMediumShotsPercentage: ", heroMediumShotsPercentage)

    var heroEasyShotsPercentage=getInputValue("heroShotsEasyPercentageInput");
    document.getElementById("heroShotsEasyPercentageInfo").innerHTML=heroEasyShotsPercentage;
    console.log("heroEasyShotsPercentage: ", heroEasyShotsPercentage)

    //calculate each shot type/difficulty Count
    var heroShotsDifficultCount=(getInputValue("heroShotsDifficultPercentageInput")*heroShotsCount)/100;
    document.getElementById("heroShotsDifficultCountInfo").innerHTML=heroShotsDifficultCount.toFixed(0);
    console.log("heroShotsDifficultCount: ", heroShotsDifficultCount)

    var heroShotsMediumCount=(getInputValue("heroShotsMediumPercentageInput")*heroShotsCount)/100;
    document.getElementById("heroShotsMediumCountInfo").innerHTML=heroShotsMediumCount.toFixed(0);
    console.log("heroShotsMediumCount: ", heroShotsMediumCount)

    var heroShotsEasyCount=(getInputValue("heroShotsEasyPercentageInput")*heroShotsCount)/100;
    document.getElementById("heroShotsEasyCountInfo").innerHTML=heroShotsEasyCount.toFixed(0);
    console.log("heroShotsEasyCount: ", heroShotsEasyCount)


    //means
    var heroShotsDifficultMean=threePointHeroDifficult*heroShotsDifficultCount
    document.getElementById("heroShotsDifficultMeanInfo").innerHTML=heroShotsDifficultMean.toFixed(0);
    console.log("heroShotsDifficultMean: ", heroShotsDifficultMean)

    var heroShotsMediumMean=threePointHeroMedium*heroShotsMediumCount
    document.getElementById("heroShotsMediumMeanInfo").innerHTML=heroShotsMediumMean.toFixed(0);
    console.log("heroShotsMediumMean: ", heroShotsMediumMean)

    var heroShotsEasyMean=threePointHeroEasy*heroShotsEasyCount
    document.getElementById("heroShotsEasyMeanInfo").innerHTML=heroShotsEasyMean.toFixed(0);
    console.log("threePointHeroEasy:heroShotsCount ", threePointHeroEasy,heroShotsCount);

    var heroShotsMean=heroShotsDifficultMean+heroShotsMediumMean+heroShotsEasyMean
    document.getElementById("totalMeanHeroInfo").innerHTML=heroShotsMean;
    console.log("totalMeanHeroInfo: ", heroShotsMean)


    //total Mean
    var totalShotMean=heroShotsMean+establishingShotsMean+masterShotsMean+childShotsMean;
    document.getElementById("totalMeanInfo").innerHTML=totalShotMean.toFixed(0);
    console.log("totalShotMean: ", totalShotMean)

    //Standard deviation totals Hero
    var standardDeviationHeroDifficultTotal=Math.sqrt(standardDeviationHeroDifficult*heroShotsDifficultCount);
    document.getElementById("standardDeviationHeroDifficultTotalInfo").innerHTML=standardDeviationHeroDifficultTotal.toFixed(2);
    var standardDeviationHeroMediumTotal=Math.sqrt(standardDeviationHeroMedium*heroShotsMediumCount);
    document.getElementById("standardDeviationHeroMediumTotalInfo").innerHTML=standardDeviationHeroMediumTotal.toFixed(2);
    var standardDeviationHeroEasyTotal=Math.sqrt(standardDeviationHeroEasy*heroShotsEasyCount);
    document.getElementById("standardDeviationHeroEasyTotalInfo").innerHTML=standardDeviationHeroEasyTotal.toFixed(2);
    
    
    var standardDeviationHeroTotal=standardDeviationHeroDifficultTotal+standardDeviationHeroMediumTotal+standardDeviationHeroEasyTotal;
    document.getElementById("standardDeviationHeroTotalInfo").innerHTML=standardDeviationHeroTotal.toFixed(2);

    
    
    var startingDate  =0;
    var endDate  =0;

  
    
    var dailyworkingHours=getInputValue("dailyWorkingHoursInput");
    document.getElementById("dailyworkingHoursInfo").innerHTML=dailyworkingHours;
    console.log("dailyworkingHours: ", dailyworkingHours)

    var dailyReviewHours=getInputValue("dailyReviewHoursInput");
    document.getElementById("dailyReviewHoursInfo").innerHTML=dailyReviewHours;
    console.log("dailyReviewHours: ", dailyReviewHours)
    var yearWorkingDays=getInputValue("yearWorkingDaysInput");
    document.getElementById("yearWorkingDaysInfo").innerHTML=yearWorkingDays;
    console.log("yearWorkingDays: ", yearWorkingDays)

    var entitledHolidays=getInputValue("entitledHolidaysInput");
    document.getElementById("entitledHolidaysInfo").innerHTML=entitledHolidays;
    console.log("entitledHolidays: ", entitledHolidays)

    var averageSickDays=getInputValue("averageSickDaysInput");
    document.getElementById("averageSickDaysInfo").innerHTML=averageSickDays;
    console.log("averageSickDays: ", averageSickDays)

    actualWorkingHoursPerDay=dailyworkingHours-dailyReviewHours;
    dayMultiplier=actualWorkingHoursPerDay/dailyworkingHours
    console.log("actualWorkingHoursPerDay: ", actualWorkingHoursPerDay)
    console.log("dayMultiplier: ", dayMultiplier)

    




    //total holiday and sick days 
    var totalTeamHolidays=(leadArtists+artist+juniorArtists)*entitledHolidays;
    document.getElementById("totalTeamHolidaysInfo").innerHTML=totalTeamHolidays;
    console.log("totalTeamHolidays: ", totalTeamHolidays)

    var totalTeamSickDays=(leadArtists+artist+juniorArtists)*averageSickDays;
    document.getElementById("totalTeamSickDaysInfo").innerHTML=totalTeamSickDays;
    console.log("totalTeamSickDays: ", totalTeamSickDays)

    var teamCapacity=((artist*artistsCapacity)+(leadArtists*leadArtistsCapacity)+(juniorArtists*juniorArtistsCapacity))*dayMultiplier;
    document.getElementById("teamCapacityInfo").innerHTML=teamCapacity.toFixed(2);;
    console.log("teamCapacity: ", teamCapacity)
    
    var totalManDaysBest =0;  //total manDays the production will take - best case
    var totalManDaysMostLikely  =0; //total manDays the production will take - most Likely
    var totalManDaysWorst  =0; //total manDays the production will take - worst case
    

    //projectManDaysInfo
    var projectManDays =totalShotMean/teamCapacity;  //totalmean/teamCapacity
    document.getElementById("projectManDaysInfo").innerHTML=projectManDays.toFixed(2);;
    console.log("projectManDays: ", projectManDays)
    
    
    google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Shots', 'Percentage'],
          ['Hero Difficult',     heroShotsDifficultCount],
          ['Hero Medium',  heroShotsMediumCount],
          ['Hero Easy', heroShotsEasyCount],
          ['Establishing Difficult',     establishingShotsDifficultCount],
          ['Establishing Medium',  establishingShotsMediumCount],
          ['Establishing Easy', establishingShotsEasyCount],
          ['Master Difficult',    masterShotsDifficultCount],
          ['Master Medium',    masterShotsMediumCount],
          ['Master Easy',    masterShotsEasyCount],
          ['Child Difficult',    childShotsDifficultCount],
          ['Child Medium',    childShotsMediumCount],
          ['Child Easy',    childShotsEasyCount]
          
        ]);
        var data2 = google.visualization.arrayToDataTable([
          ['Shots', 'Percentage'],
          ['Hero',     heroShotsCount],
          ['Establishing',     establishingShotsCount],
          ['Master',    masterShotsCount],
          ['Child',    childShotsCount],
        ]);
        var data3 = google.visualization.arrayToDataTable([
          ['Shots', 'Percentage'],
          ['Hero Difficult',     heroShotsDifficultMean],
          ['Hero Medium',  heroShotsMediumMean],
          ['Hero Easy', heroShotsEasyMean],
          ['Establishing Difficult',     establishingShotsDifficultMean],
          ['Establishing Medium',  establishingShotsMediumMean],
          ['Establishing Easy', establishingShotsEasyMean],
          ['Master Difficult',    masterShotsDifficultMean],
          ['Master Medium',    masterShotsMediumMean],
          ['Master Easy',    masterShotsEasyMean],
          ['Child Difficult',    childShotsDifficultMean],
          ['Child Medium',    childShotsMediumMean],
          ['Child Easy',    childShotsEasyMean]
          
        ]);

       var options = {'chartArea': {'width': '100%', 'height': '80%'},
               colors: ['#e0440e', '#e6693e', '#ec8f6e']
    };
       var options2 = {'chartArea': {'width': '100%', 'height': '80%'},
               colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f']
    };


        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        var chart2 = new google.visualization.PieChart(document.getElementById('piechart2'));
        var chart3 = new google.visualization.PieChart(document.getElementById('piechart3'));

        chart.draw(data, options);
        chart2.draw(data2, options2);
        chart3.draw(data3, options);

        
      var data4 = google.visualization.arrayToDataTable([
        ['Genre', 'difficult', 'Medium', 'Easy',{ role: 'annotation' } ],
        ['hero', heroShotsDifficultCount, heroShotsMediumCount, heroShotsEasyCount, "Total: "+heroShotsCount],
        ['establishing', establishingShotsDifficultCount, establishingShotsMediumCount, establishingShotsEasyCount, "Total: "+establishingShotsCount],
        ['Master', masterShotsDifficultCount, masterShotsMediumCount, masterShotsEasyCount, "Total: "+masterShotsCount],
        ['Child', childShotsDifficultCount, childShotsMediumCount, childShotsEasyCount, "Total: "+childShotsCount]
      ]);

      var options = {
        legend: { position: 'top', maxLines: 3 },
        bar: { groupWidth: '75%' },
        colors: ['#e0440e', '#e6693e', '#ec8f6e'],
        isStacked: true
      };

      var chart4= new google.visualization.BarChart(document.getElementById('chart_div'));
      chart4.draw(data4, options);

        
      }

      google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawMultSeries);

function drawMultSeries() {
    }


}

//Usage

var startDate = new Date('07/05/2017');
var endDate = new Date('07/20/2017');
var numOfDates = getBusinessDatesCount(startDate,endDate);
console.log("numOfDates",numOfDates)


	$(document).ready(function(){
		var date_input=$('input[name="date"]'); //our date input has the name "date"
		var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
		date_input.datepicker({
			format: 'mm/dd/yyyy',
			container: container,
			todayHighlight: true,
			autoclose: true,
		})
	})
