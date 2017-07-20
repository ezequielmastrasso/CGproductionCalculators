function updateInformationPanel (){


    /*mind dump
    Critical path calculation:
      Shots Lighting:
        For shots Lighting the critical path will be giving by the longest Artist task list.
        This could be approximatted* by calculating the amount of hero, establishing,
        master, and child shots that each artist will have in their queue.
        Critical path mean=
        (heroDifficultMean(heroDifficultCount/teamCapacity)+
        (heroMediumMean(heroMediumCount/teamCapacity)+
        (heroEasyMean(heroEasyCount/teamCapacity)+
        (establishingDifficultMean(establishingDifficultCount/teamCapacity)+
        (establishingMediumMean(establishingMediumCount/teamCapacity)+
        (establishingEasyMean(establishingEasyCount/teamCapacity)+
        (masterDifficultMean(masterDifficultShotCount/TeamCapacity))+
        (masterMediumMean(masterMediumShotCount/TeamCapacity))+
        (masterEasyMean(masterEasyShotCount/TeamCapacity))+
        (childDifficultMean(childDifficultShotCount/TeamCapacity))+
        (childMediumMean(childMediumShotCount/TeamCapacity))+
        (childEasyMean(childEasyShotCount/TeamCapacity));

      Asset Single
        Critical path will be given by the amount of assets diff, med, and easy and artist will have in its queue
        Approximated by:
        Critical path mean=
        (assetDifficultMean(assetDifficultCount/teamCapacity)+
        (assetMediumMean(assetMediumCount/teamCapacity)+
        (assetEasyMean(assetEasyCount/teamCapacity)+

    */
    var leadArtists =getInputValue("leadsArtistsCountInput");
    var artist =getInputValue("artistCountInput");
		var juniorArtists=getInputValue("juniorArtistsCountInput");
    var artistsCapacity=getInputValue("artistsCapacityInput");
    var juniorArtistsCapacity=getInputValue("juniorArtistsCapacityInput");
    var leadArtistsCapacity=getInputValue("leadArtistsCapacityInput");
    var assetCount =getInputValue("assetCountInput");
    
    var assetDifficultPercentage =getInputValue("assetDifficultPercentageInput");
    var assetMediumPercentage =getInputValue("assetMediumPercentageInput");
    var assetEasyPercentage =getInputValue("assetEasyPercentageInput");
    var dailyworkingHours =getInputValue("dailyWorkingHoursInput");
    var dailyReviewHours =getInputValue("dailyReviewHoursInput");
    var yearWorkingDays =getInputValue("yearWorkingDaysInput");
    var entitledHolidays =getInputValue("entitledHolidaysInput");
    var averageSickDays =getInputValue("averageSickDaysInput");
    var leavePercent = daysPercentage (yearWorkingDays,entitledHolidays)
    var sickPercent = daysPercentage (yearWorkingDays,averageSickDays)
    console.log("leavePercent: ", leavePercent)
    console.log("sickPercent: ", sickPercent)

    var assetEstimateDifficultBest =getInputValue("assetEstimateDifficultBestInput");
    var assetEstimateDifficultMostLikely =getInputValue("assetEstimateDifficultMostLikelyInput");
    var assetEstimateDifficultWorst =getInputValue("assetEstimateDifficultWorstInput");

    var assetEstimateMediumBest =getInputValue("assetEstimateMediumBestInput");
    var assetEstimateMediumMostLikely =getInputValue("assetEstimateMediumMostLikelyInput");
    var assetEstimateMediumWorst =getInputValue("assetEstimateMediumWorstInput");

    var assetEstimateEasyBest =getInputValue("assetEstimateEasyBestInput");
    var assetEstimateEasyMostLikely =getInputValue("assetEstimateEasyMostLikelyInput");
    var assetEstimateEasyWorst =getInputValue("assetEstimateEasyWorstInput");




    //toCalculate

    //Asset count
    var assetDifficultCount = (assetCount*assetDifficultPercentage)/100;
    console.log("assetCount",assetCount);
    console.log("assetDifficultPercentage",assetDifficultPercentage);
    writeToPage("assetDifficultCountInfo",assetDifficultCount);
    var assetMediumCount = (assetCount*assetMediumPercentage)/100;
    writeToPage("assetMediumCountInfo",assetMediumCount);
    var assetEasyCount = (assetCount*assetEasyPercentage)/100;
    writeToPage("assetEasyCountInfo",assetEasyCount);

    
    //mean
    var assetThreePointDifficult =threePointWeighted(assetEstimateDifficultBest,assetEstimateDifficultMostLikely,assetEstimateDifficultWorst)
    writeToPage("assetThreePointDifficultInfo",assetThreePointDifficult.toFixed(2));
    var assetThreePointMedium = threePointWeighted(assetEstimateMediumBest,assetEstimateMediumMostLikely,assetEstimateMediumWorst)
    writeToPage("assetThreePointMediumInfo",assetThreePointMedium.toFixed(2));
    var assetThreePointEasy = threePointWeighted(assetEstimateEasyBest, assetEstimateEasyMostLikely,assetEstimateEasyWorst);
    writeToPage("assetThreePointEasyInfo",assetThreePointEasy.toFixed(2));
    //totals
    var assetDifficultMean = assetThreePointDifficult*assetDifficultCount;
    writeToPage("assetDifficultMeanInfo",assetDifficultMean.toFixed(2));
    var assetMediumMean =assetThreePointMedium*assetMediumCount;
    writeToPage("assetMediumMeanInfo",assetMediumMean.toFixed(2));
    var assetEasyMean =assetThreePointEasy*assetEasyCount;
    writeToPage("assetEasyMeanInfo",assetEasyMean.toFixed(2));
    var totalMean = assetDifficultMean+ assetMediumMean+assetEasyMean ;
    writeToPage("totalMeanInfo",totalMean.toFixed(2));
    
    //team capacity
    actualWorkingHoursPerDay=dailyworkingHours-dailyReviewHours;
    dayMultiplier=actualWorkingHoursPerDay/dailyworkingHours
    console.log("actualWorkingHoursPerDay: ", actualWorkingHoursPerDay)
    console.log("dayMultiplier: ", dayMultiplier)

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
    

    //criticalPathMean
    var criticalPathDifficultAssets=assetDifficultCount*(assetThreePointDifficult/teamCapacity);
    var criticalPathMediumAssets=assetMediumCount*(assetThreePointMedium/teamCapacity);
    var criticalPathEasyAssets=assetEasyCount*(assetThreePointEasy/teamCapacity);
    criticalPathMean=criticalPathDifficultAssets+criticalPathMediumAssets+criticalPathEasyAssets;
    console.log("criticalPathDifficultAssets---: ", criticalPathDifficultAssets)
    console.log("criticalPathMediumAssets: ", criticalPathMediumAssets)
    console.log("criticalPathEasyAssets: ", criticalPathEasyAssets)
    console.log("criticalPathMean: ", criticalPathMean)
    writeToPage("criticalPathMean",criticalPathMean.toFixed(2));
    

    

    
    var projectManDays = assetDifficultMean+assetMediumMean+assetEasyMean;
    writeToPage("projectManDaysInfo",projectManDays.toFixed(2));

    //variance
    var varianceAssetDifficult = variance(assetEstimateDifficultBest,assetEstimateDifficultWorst);
    writeToPage("varianceAssetDifficultInfo",varianceAssetDifficult.toFixed(2));
    var varianceAssetMedium = variance(assetEstimateMediumBest,assetEstimateMediumWorst);    
    writeToPage("varianceAssetMediumInfo",varianceAssetMedium.toFixed(2));
    var varianceAssetEasy = variance(assetEstimateEasyBest,assetEstimateEasyWorst);
    writeToPage("varianceAssetEasyInfo",varianceAssetEasy.toFixed(2));

    //Standard Deviation
    var assetStandardDeviationDifficult = stardardDeviation(assetEstimateDifficultBest,assetEstimateDifficultWorst);
    writeToPage("assetStandardDeviationDifficultInfo",assetStandardDeviationDifficult.toFixed(2));
    var assetStandardDeviationMedium =stardardDeviation(assetEstimateMediumBest,assetEstimateMediumWorst); 
    writeToPage("assetStandardDeviationMediumInfo",assetStandardDeviationMedium.toFixed(2));
    var assetStandardDeviationEasy =stardardDeviation(assetEstimateEasyBest,assetEstimateEasyWorst);
    writeToPage("assetStandardDeviationEasyInfo",assetStandardDeviationEasy.toFixed(2));

    //days and working year
    var totalTeamHolidays=(leadArtists+artist+juniorArtists)*entitledHolidays;
    writeToPage("totalTeamHolidaysInfo",totalTeamHolidays);
    var totalTeamSickDays=(leadArtists+artist+juniorArtists)*averageSickDays;
    writeToPage("totalTeamSickDaysInfo",totalTeamSickDays);    

    var startDate = getInputDate("startDate");
    var proposedDate = getInputDate("endDate");

    proposedDuration= dateDifference(startDate,proposedDate);
    writeToPage("proposedDuration",proposedDuration);    
    
    
    console.log("proposedDuration",proposedDuration);

    
    

    //criticalPathVariance
    var criticalPathVarianceDifficultAssets=varianceAssetDifficult*assetDifficultCount;
    var criticalPathVarianceMediumAssets=varianceAssetMedium*assetMediumCount;
    var criticalPathVarianceEasyAssets=varianceAssetEasy*assetEasyCount;
    criticalPathVariance=criticalPathVarianceDifficultAssets+criticalPathVarianceMediumAssets+criticalPathVarianceEasyAssets;
    criticalPathStandardDeviation=Math.sqrt(criticalPathVariance,2);
    writeToPage("criticalPathVariance",criticalPathVariance.toFixed(4));
    writeToPage("criticalPathStndDeviation",criticalPathStandardDeviation.toFixed(4));

    var Z=(proposedDuration-criticalPathMean)/criticalPathStandardDeviation;
    writeToPage("Z",Z.toFixed(4));

    probabilities=normalDistribution(proposedDuration,criticalPathMean,criticalPathStandardDeviation)
    console.log("probabilities",probabilities);
    writeToPage("probEndDateInfo",probabilities.toFixed(4)*100+"%");
    
    
  
    google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Assets', 'Percentage'],
          ['Difficult',  assetDifficultPercentage],
          ['Medium',  assetMediumPercentage],
          ['Easy',  assetEasyPercentage]
         
          
        ]);
        var data2 = google.visualization.arrayToDataTable([
          ['Assets', 'Percentage'],
          ['Difficult',  assetDifficultCount],
          ['Medium',  assetMediumCount],
          ['Easy',  assetEasyCount]
          
        ]);
        var data3 = google.visualization.arrayToDataTable([
          ['Shots', 'Percentage'],
          ['difficult mandays',     assetDifficultMean],
          ['medium man days',     assetMediumMean],
          ['easy man days',     assetEasyMean]

          
        ]);

       var options = {'chartArea': {'width': '100%', 'height': '80%'},
              legend: { position: 'top', maxLines: 3 },
              legend: { textStyle: { color: 'white' }},
              backgroundColor: '#3d3d3d',
              fontSize: 12,
              hAxis: {
                  textStyle:{color: '#FFF'}
              },
               colors: ['#FF1D2D', '#f56f27', '#f5aa27']
    };
       var options2 = {'chartArea': {'width': '100%', 'height': '80%'},
                legend: { position: 'top', maxLines: 3 },
                backgroundColor: '#3d3d3d',
              legend: { textStyle: { color: 'white' }},
              fontSize: 12,
              hAxis: {
                  textStyle:{color: '#FFF'}
              },
               colors: ['#FF1D2D', '#f56f27', '#f5aa27', '#f3b49f']
    };


        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        var chart2 = new google.visualization.PieChart(document.getElementById('piechart2'));
        var chart3 = new google.visualization.PieChart(document.getElementById('piechart3'));

        chart.draw(data, options);
        chart2.draw(data2, options2);
        chart3.draw(data3, options);

        
      var data4 = google.visualization.arrayToDataTable([
        ['Genre', 'difficult', 'Medium', 'Easy',{ role: 'annotation' } ],
        ['assets', assetDifficultCount, assetMediumCount, assetEasyCount, "Total: "+assetCount],
      ]);

      var options = {
        legend: { position: 'top', maxLines: 3 },
        bar: { groupWidth: '75%' },
        colors: ['#FF1D2D', '#f56f27', '#f5aa27'],
        backgroundColor: '#3d3d3d',
        fontSize: 12,
        fontName: 'Open Sans', 
        legend: { position: 'top', maxLines: 3 },
              legend: { textStyle: { color: 'white' }},
              hAxis: {
                  textStyle:{color: '#FFF'}
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
