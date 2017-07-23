


function updateInformationPanel (){
    

    var leadArtists =getInputValue("leadsArtistsCountInput");
  	var artist =getInputValue("artistCountInput");
		var juniorArtists=getInputValue("juniorArtistsCountInput");
    var shotCount =getInputValue("shotCountInput");
  	var sequenceCount =getInputValue("sequenceCountInput");
		var assetBShotsPerSequence=getInputValue("assetBShotsPerSequenceInput");
    var artistsCapacity=getInputValue("artistsCapacityInput");
    var juniorArtistsCapacity=getInputValue("juniorArtistsCapacityInput");
    var leadArtistsCapacity=getInputValue("leadArtistsCapacityInput");


    //INPUT %
    var assetAShotsPercentage=getInputValue("assetAShotsPercentageInput");
    var assetCShotsPercentage=getInputValue("assetCShotsPercentageInput");
    var assetDShotsPercentage=getInputValue("assetDShotsPercentageInput");

		
    //estimates AssetA
    //difficult
    var estimateAssetADifficultBest =threePointAssetD=getInputValue("estimateAssetADifficultBestInput");
    var estimateAssetADifficultMostLikely=threePointAssetD=getInputValue("estimateAssetADifficultMostLikelyInput");
    var estimateAssetADifficultWorst=threePointAssetD=getInputValue("estimateAssetADifficultWorstInput");
    //medium
    var estimateAssetAMediumBest=threePointAssetD=getInputValue("estimateAssetAMediumBestInput");
    var estimateAssetAMediumMostLikely=threePointAssetD=getInputValue("estimateAssetAMediumMostLikelyInput");
    var estimateAssetAMediumWorst=threePointAssetD=getInputValue("estimateAssetAMediumWorstInput");
    //easy
    var estimateAssetAEasyBest=threePointAssetD=getInputValue("estimateAssetAEasyBestInput");
    var estimateAssetAEasyMostLikely=threePointAssetD=getInputValue("estimateAssetAEasyMostLikelyInput");
    var estimateAssetAEasyWorst=threePointAssetD=getInputValue("estimateAssetAEasyWorstInput");

    //estimates AssetB
    //difficult
    var estimateAssetBDifficultBest=threePointAssetD=getInputValue("estimateAssetBDifficultBestInput");
    var estimateAssetBDifficultMostLikely=threePointAssetD=getInputValue("estimateAssetBDifficultMostLikelyInput");
    var estimateAssetBDifficultWorst=threePointAssetD=getInputValue("estimateAssetBDifficultWorstInput");
    //medium
    var estimateAssetBMediumBest=threePointAssetD=getInputValue("estimateAssetBMediumBestInput");
    var estimateAssetBMediumMostLikely=threePointAssetD=getInputValue("estimateAssetBMediumMostLikelyInput");
    var estimateAssetBMediumWorst=threePointAssetD=getInputValue("estimateAssetBMediumWorstInput");
    //easy
    var estimateAssetBEasyBest=threePointAssetD=getInputValue("estimateAssetBEasyBestInput");
    var estimateAssetBEasyMostLikely=threePointAssetD=getInputValue("estimateAssetBEasyMostLikelyInput");
    var estimateAssetBEasyWorst=threePointAssetD=getInputValue("estimateAssetBEasyWorstInput");

    //estimates AssetC
    //difficult
    var estimateAssetCDifficultBest=threePointAssetD=getInputValue("estimateAssetCDifficultBestInput");
    var estimateAssetCDifficultMostLikely=threePointAssetD=getInputValue("estimateAssetCDifficultMostLikelyInput");
    var estimateAssetCDifficultWorst=threePointAssetD=getInputValue("estimateAssetCDifficultWorstInput");
    //medium
    var estimateAssetCMediumBest=threePointAssetD=getInputValue("estimateAssetCMediumBestInput");
    var estimateAssetCMediumMostLikely=threePointAssetD=getInputValue("estimateAssetCMediumMostLikelyInput");
    var estimateAssetCMediumWorst=threePointAssetD=getInputValue("estimateAssetCMediumWorstInput");
    //easy
    var estimateAssetCEasyBest=threePointAssetD=getInputValue("estimateAssetCEasyBestInput");
    var estimateAssetCEasyMostLikely=threePointAssetD=getInputValue("estimateAssetCEasyMostLikelyInput");
    var estimateAssetCEasyWorst=threePointAssetD=getInputValue("estimateAssetCEasyWorstInput");

    //estimates AssetD
    //difficult
    var estimateAssetDDifficultBest=threePointAssetD=getInputValue("estimateAssetDDifficultBestInput");
    var estimateAssetDDifficultMostLikely=threePointAssetD=getInputValue("estimateAssetDDifficultMostLikelyInput");
    var estimateAssetDDifficultWorst=threePointAssetD=getInputValue("estimateAssetDDifficultWorstInput");
    //medium
    var estimateAssetDMediumBest=threePointAssetD=getInputValue("estimateAssetDMediumBestInput");
    var estimateAssetDMediumMostLikely=threePointAssetD=getInputValue("estimateAssetDMediumMostLikelyInput");
    var estimateAssetDMediumWorst=threePointAssetD=getInputValue("estimateAssetDMediumWorstInput");
    //easy
    var estimateAssetDEasyBest=threePointAssetD=getInputValue("estimateAssetDEasyBestInput");
    var estimateAssetDEasyMostLikely=threePointAssetD=getInputValue("estimateAssetDEasyMostLikelyInput");
    var estimateAssetDEasyWorst=threePointAssetD=getInputValue("estimateAssetDEasyWorstInput"); 

    //shots count
    var assetAShotsCount= (shotCount*assetAShotsPercentage)/100;    
    var assetBShotsCount= assetBShotsPerSequence*sequenceCount;
    var assetBShotsPercentage=(100*assetBShotsCount)/shotCount;
    var assetCShotsCount= (shotCount*assetCShotsPercentage)/100;    
    var assetDShotsCount= (shotCount*assetDShotsPercentage)/100;

    //INPUT %
    var assetADifficultShotsPercentage=getInputValue("assetAShotsDifficultPercentageInput");
    var assetAMediumShotsPercentage=getInputValue("assetAShotsMediumPercentageInput");
    var assetAEasyShotsPercentage=getInputValue("assetAShotsEasyPercentageInput");
    var assetBDifficultShotsPercentage=getInputValue("assetBShotsDifficultPercentageInput");
    var assetBMediumShotsPercentage=getInputValue("assetBShotsMediumPercentageInput");
    var assetBEasyShotsPercentage=getInputValue("assetBShotsEasyPercentageInput");
    var assetCDifficultShotsPercentage=getInputValue("assetCShotsDifficultPercentageInput");
    var assetCMediumShotsPercentage=getInputValue("assetCShotsMediumPercentageInput");
    var assetCEasyShotsPercentage=getInputValue("assetCShotsEasyPercentageInput");
    var assetDDifficultShotsPercentage=getInputValue("assetDShotsDifficultPercentageInput");
    var assetDMediumShotsPercentage=getInputValue("assetDShotsMediumPercentageInput");
    var assetDEasyShotsPercentage=getInputValue("assetDShotsEasyPercentageInput");
    //calculate each shot type/difficulty Count
    var assetAShotsDifficultCount=(getInputValue("assetAShotsDifficultPercentageInput")*assetAShotsCount)/100;
    var assetAShotsMediumCount=(getInputValue("assetAShotsMediumPercentageInput")*assetAShotsCount)/100;
    var assetAShotsEasyCount=(getInputValue("assetAShotsEasyPercentageInput")*assetAShotsCount)/100;
    var assetBShotsDifficultCount=(getInputValue("assetBShotsDifficultPercentageInput")*assetBShotsCount)/100;
    var assetBShotsMediumCount=(getInputValue("assetBShotsMediumPercentageInput")*assetBShotsCount)/100;    var assetBShotsEasyCount=(getInputValue("assetBShotsEasyPercentageInput")*assetBShotsCount)/100;
    var assetCShotsDifficultCount=(getInputValue("assetCShotsDifficultPercentageInput")*assetCShotsCount)/100;
    var assetCShotsMediumCount=(getInputValue("assetCShotsMediumPercentageInput")*assetCShotsCount)/100;
    var assetCShotsEasyCount=(getInputValue("assetCShotsEasyPercentageInput")*assetCShotsCount)/100;
    var assetDShotsDifficultCount=(getInputValue("assetDShotsDifficultPercentageInput")*assetDShotsCount)/100;
    var assetDShotsMediumCount=(getInputValue("assetDShotsMediumPercentageInput")*assetDShotsCount)/100;
    var assetDShotsEasyCount=(getInputValue("assetDShotsEasyPercentageInput")*assetDShotsCount)/100;

    //team capacity
    var dailyworkingHours=getInputValue("dailyWorkingHoursInput");
    var dailyReviewHours=getInputValue("dailyReviewHoursInput");    
    var yearWorkingDays=getInputValue("yearWorkingDaysInput");
    var entitledHolidays=getInputValue("entitledHolidaysInput");
    var averageSickDays=getInputValue("averageSickDaysInput");
    var leavePercent = daysPercentage (yearWorkingDays,entitledHolidays)
    var sickPercent = daysPercentage (yearWorkingDays,averageSickDays)
    actualWorkingHoursPerDay=dailyworkingHours-dailyReviewHours;
    dayMultiplier=actualWorkingHoursPerDay/dailyworkingHours
    console.log("actualWorkingHoursPerDay: ", actualWorkingHoursPerDay)
    console.log("dayMultiplier: ", dayMultiplier)

     //days and working year
    var totalTeamHolidays=(leadArtists+artist+juniorArtists)*entitledHolidays;
    writeToPage("totalTeamHolidaysInfo",totalTeamHolidays);
    var totalTeamSickDays=(leadArtists+artist+juniorArtists)*averageSickDays;
    writeToPage("totalTeamSickDaysInfo",totalTeamSickDays);    

    var teamCapacity =((artist*artistsCapacity)+(leadArtists*leadArtistsCapacity)+(juniorArtists*juniorArtistsCapacity))*dayMultiplier;
    //duplicate it to have the original value for calculations
    var originalTeamCapacity=teamCapacity;
    console.log("teamCapacityInfo before idle and leave: ", teamCapacity)
    //busy idle ratio
    var busyIdleRatio =getInputValue("busyIdleRatio");
    teamCapacity=teamCapacity*busyIdleRatio;
    console.log("teamCapacityInfo after idle: ", teamCapacity)
    teamCapacity=teamCapacity-((originalTeamCapacity*leavePercent)/100)
    console.log("teamCapacityInfo after leave",teamCapacity);
    teamCapacity=teamCapacity-((originalTeamCapacity*sickPercent)/100)
    console.log("teamCapacityInfo after sick",teamCapacity);
    writeToPage("teamCapacityInfo",teamCapacity.toFixed(2));

    shotsAssetADifficult=calculateAsset("assetADifficult",
                    assetAShotsDifficultCount,
                    estimateAssetADifficultBest,
                    estimateAssetADifficultMostLikely,
                    estimateAssetADifficultWorst,
                    teamCapacity)
    shotsAssetAMedium=calculateAsset("assetAMedium",
                    assetAShotsMediumCount,
                    estimateAssetAMediumBest,
                    estimateAssetAMediumMostLikely,
                    estimateAssetAMediumWorst,
                    teamCapacity)
    shotsAssetAEasy=calculateAsset("assetAEasy",
                    assetAShotsEasyCount,
                    estimateAssetAEasyBest,
                    estimateAssetAEasyMostLikely,
                    estimateAssetAEasyWorst,
                    teamCapacity)

    shotsAssetBDifficult=calculateAsset("AssetBDifficult",
                    assetBShotsDifficultCount,
                    estimateAssetBDifficultBest,
                    estimateAssetBDifficultMostLikely,
                    estimateAssetBDifficultWorst,
                    teamCapacity)
    shotsAssetBMedium=calculateAsset("AssetBMedium",
                    assetBShotsMediumCount,
                    estimateAssetBMediumBest,
                    estimateAssetBMediumMostLikely,
                    estimateAssetBMediumWorst,
                    teamCapacity)
    shotsAssetBEasy=calculateAsset("AssetBEasy",
                    assetBShotsEasyCount,
                    estimateAssetBEasyBest,
                    estimateAssetBEasyMostLikely,
                    estimateAssetBEasyWorst,
                    teamCapacity)

    shotsAssetCDifficult=calculateAsset("AssetCDifficult",
                    assetCShotsDifficultCount,
                    estimateAssetCDifficultBest,
                    estimateAssetCDifficultMostLikely,
                    estimateAssetCDifficultWorst,
                    teamCapacity)
    shotsAssetCMedium=calculateAsset("AssetCMedium",
                    assetCShotsMediumCount,
                    estimateAssetCMediumBest,
                    estimateAssetCMediumMostLikely,
                    estimateAssetCMediumWorst,
                    teamCapacity)
    shotsAssetCEasy=calculateAsset("AssetCEasy",
                    assetCShotsEasyCount,
                    estimateAssetCEasyBest,
                    estimateAssetCEasyMostLikely,
                    estimateAssetCEasyWorst,
                    teamCapacity)

    shotsAssetDDifficult=calculateAsset("AssetDDifficult",
                    assetDShotsDifficultCount,
                    estimateAssetDDifficultBest,
                    estimateAssetDDifficultMostLikely,
                    estimateAssetDDifficultWorst,
                    teamCapacity)
    shotsAssetDMedium=calculateAsset("AssetDMedium",
                    assetDShotsMediumCount,
                    estimateAssetDMediumBest,
                    estimateAssetDMediumMostLikely,
                    estimateAssetDMediumWorst,
                    teamCapacity)
    shotsAssetDEasy=calculateAsset("AssetDEasy",
                    assetDShotsEasyCount,
                    estimateAssetDEasyBest,
                    estimateAssetDEasyMostLikely,
                    estimateAssetDEasyWorst,
                    teamCapacity)    
      

    
    var startingDate  =0;
    var endDate  =0;


    //criticalPathMeans
    var criticalPathAssetAShots= shotsAssetADifficult.meanCriticalPath+shotsAssetAMedium.meanCriticalPath+shotsAssetAEasy.meanCriticalPath
    var criticalPathAssetBShots= shotsAssetBDifficult.meanCriticalPath+shotsAssetBMedium.meanCriticalPath+shotsAssetBEasy.meanCriticalPath
    var criticalPathAssetCShots= shotsAssetCDifficult.meanCriticalPath+shotsAssetCMedium.meanCriticalPath+shotsAssetCEasy.meanCriticalPath
    var criticalPathAssetDShots= shotsAssetDDifficult.meanCriticalPath+shotsAssetDMedium.meanCriticalPath+shotsAssetDEasy.meanCriticalPath

    
    criticalPathMean=criticalPathAssetAShots+criticalPathAssetBShots+criticalPathAssetCShots+criticalPathAssetDShots;
    console.log("criticalPathAssetA---: ", criticalPathAssetAShots)
    console.log("criticalPathAssetB: ", criticalPathAssetBShots)
    console.log("criticalPathAssetC: ", criticalPathAssetCShots)
    console.log("criticalPathAssetD: ", criticalPathAssetDShots)
    console.log("criticalPathMean: ", criticalPathMean)
    writeToPage("criticalPathMean",criticalPathMean.toFixed(2));

    //projectManDaysInfo
    var totalShotMean=shotsAssetADifficult.meanTotal+
                      shotsAssetAMedium.meanTotal+
                      shotsAssetAEasy.meanTotal+
                      shotsAssetBDifficult.meanTotal+
                      shotsAssetBMedium.meanTotal+
                      shotsAssetBEasy.meanTotal+
                      shotsAssetCDifficult.meanTotal+
                      shotsAssetCMedium.meanTotal+
                      shotsAssetCEasy.meanTotal+
                      shotsAssetDDifficult.meanTotal+
                      shotsAssetDMedium.meanTotal+
                      shotsAssetDEasy.meanTotal;
    var projectManDays =totalShotMean;  //totalmean/teamCapacity
    writeToPage("projectManDaysInfo",projectManDays.toFixed(2));
    writeToPage("totalMeanInfo",projectManDays.toFixed(2));
    
    
    document.getElementById("projectManDaysInfo").innerHTML=projectManDays.toFixed(2);;

    var startDate = getInputDate("startDate");
    var proposedDate = getInputDate("endDate");

    proposedDuration= dateDifference(startDate,proposedDate);
    writeToPage("proposedDuration",proposedDuration);   
    console.log("proposedDuration",proposedDuration);

    totalCriticalPathVariance=shotsAssetADifficult.criticalPathVarianceTotal+
                      shotsAssetAMedium.criticalPathVarianceTotal+
                      shotsAssetAEasy.criticalPathVarianceTotal+
                      shotsAssetBDifficult.criticalPathVarianceTotal+
                      shotsAssetBMedium.criticalPathVarianceTotal+
                      shotsAssetBEasy.criticalPathVarianceTotal+
                      shotsAssetCDifficult.criticalPathVarianceTotal+
                      shotsAssetCMedium.criticalPathVarianceTotal+
                      shotsAssetCEasy.criticalPathVarianceTotal+
                      shotsAssetDDifficult.criticalPathVarianceTotal+
                      shotsAssetDMedium.criticalPathVarianceTotal+
                      shotsAssetDEasy.criticalPathVarianceTotal;

    writeToPage("criticalPathVariance",totalCriticalPathVariance.toFixed(4));
    

    criticalPathStandardDeviation=Math.sqrt(totalCriticalPathVariance,2);
    writeToPage("criticalPathStndDeviation",criticalPathStandardDeviation.toFixed(4));
    var Z=(proposedDuration-criticalPathMean)/criticalPathStandardDeviation;
    writeToPage("Z",Z.toFixed(4));
    probabilities=normalDistribution(proposedDuration,criticalPathMean,criticalPathStandardDeviation)
    console.log("probabilities",probabilities.toFixed(4));
    writeToPage("probEndDateInfo",(probabilities*100).toFixed(4)+"%");

    //0.9495
    //0.9505
    //95%: 1.645
    //expecte duration:totalShotMean
    //diviation: criticalPathStandardDeviation
    percent95=1.645*criticalPathStandardDeviation+criticalPathMean
    percent80=0.85*criticalPathStandardDeviation+criticalPathMean
    console.log(percent95)
    console.log(percent80)
    writeToPage("the80",percent80.toFixed(1)+ " days");
    writeToPage("the95",percent95.toFixed(1)+ " days");

    



    
    google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Shots', 'Percentage'],
          ['AssetA Difficult',     assetAShotsDifficultCount],
          ['AssetA Medium',  assetAShotsMediumCount],
          ['AssetA Easy', assetAShotsEasyCount],
          ['AssetB Difficult',     assetBShotsDifficultCount],
          ['AssetB Medium',  assetBShotsMediumCount],
          ['AssetB Easy', assetBShotsEasyCount],
          ['AssetC Difficult',    assetCShotsDifficultCount],
          ['AssetC Medium',    assetCShotsMediumCount],
          ['AssetC Easy',    assetCShotsEasyCount],
          ['AssetD Difficult',    assetDShotsDifficultCount],
          ['AssetD Medium',    assetDShotsMediumCount],
          ['AssetD Easy',    assetDShotsEasyCount]
          
        ]);
        var data2 = google.visualization.arrayToDataTable([
          ['Shots', 'Percentage'],
          ['AssetA',     assetAShotsCount],
          ['AssetB',     assetBShotsCount],
          ['AssetC',    assetCShotsCount],
          ['AssetD',    assetDShotsCount],
        ]);
        var data3 = google.visualization.arrayToDataTable([
          ['Shots', 'Percentage'],
          ['AssetA Difficult',     shotsAssetADifficult.mean],
          ['AssetA Medium',  shotsAssetAMedium.mean],
          ['AssetA Easy', shotsAssetAEasy.mean],
          ['AssetB Difficult',    shotsAssetBDifficult.mean],
          ['AssetB Medium',  shotsAssetBMedium.mean],
          ['AssetB Easy', shotsAssetBEasy.mean],
          ['AssetC Difficult',    shotsAssetCDifficult.mean],
          ['AssetC Medium',    shotsAssetCMedium.mean],
          ['AssetC Easy',    shotsAssetCEasy.mean],
          ['AssetD Difficult',    shotsAssetDDifficult.mean],
          ['AssetD Medium',    shotsAssetDMedium.mean],
          ['AssetD Easy',    shotsAssetDEasy.mean],
          
        ]);

       var options = {'chartArea': {'width': '100%', 'height': '80%'},
              legend: { position: 'top', maxLines: 3 },
              legend: { textStyle: { color: 'white' }},
              fontSize: 10,
              backgroundColor: '#3d3d3d',
              hAxis: {
                  textStyle:{color: '#FFF',}
              },
               colors: ['#df3d48', '#d87844', '#d8a244']
    };
       var options2 = {'chartArea': {'width': '100%', 'height': '80%'},
                legend: { position: 'top', maxLines: 3 },
                backgroundColor: '#3d3d3d',
                        fontSize: 10,
              legend: { textStyle: { color: 'white'}},
              hAxis: {
                  textStyle:{color: '#FFF'}
              },
               colors: ['#df3d48', '#d87844', '#d8a244', '#d8c244']
    };


        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        var chart2 = new google.visualization.PieChart(document.getElementById('piechart2'));
        var chart3 = new google.visualization.PieChart(document.getElementById('piechart3'));

        chart.draw(data, options);
        chart2.draw(data2, options2);
        chart3.draw(data3, options);

        
      var data4 = google.visualization.arrayToDataTable([
        ['Genre', 'difficult', 'Medium', 'Easy',{ role: 'annotation' } ],
        ['assetA', assetAShotsDifficultCount, assetAShotsMediumCount, assetAShotsEasyCount, "Total: "+assetAShotsCount],
        ['assetB', assetBShotsDifficultCount, assetBShotsMediumCount, assetBShotsEasyCount, "Total: "+assetBShotsCount],
        ['AssetC', assetCShotsDifficultCount, assetCShotsMediumCount, assetCShotsEasyCount, "Total: "+assetCShotsCount],
        ['AssetD', assetDShotsDifficultCount, assetDShotsMediumCount, assetDShotsEasyCount, "Total: "+assetDShotsCount]
      ]);

      var options = {
        legend: { position: 'top', maxLines: 3, fontSize: 1},
        bar: { groupWidth: '75%' },
        colors: ['#df3d48', '#d87844', '#d8a244'],
        backgroundColor: '#3d3d3d',
        fontSize: 10,
        fontName: 'Open Sans', 
        legend: { position: 'top', maxLines: 3 },
              legend: { textStyle: { color: '#FFF' }},
              hAxis: {
                  textStyle:{color: '#FFF'},
              },
              vAxis: {
                  textStyle:{color: '#FFF'},
              },
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