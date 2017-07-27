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

    

    //Asset count
    var assetDifficultCount = (assetCount*assetDifficultPercentage)/100;
    console.log("assetCount",assetCount);
    console.log("assetDifficultPercentage",assetDifficultPercentage);
    var assetMediumCount = (assetCount*assetMediumPercentage)/100;
    var assetEasyCount = (assetCount*assetEasyPercentage)/100;
    
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

    
    //toCalculate
    assetDifficult=calculateAsset("assetDifficult",
                assetDifficultCount,
                assetEstimateDifficultBest,
                assetEstimateDifficultMostLikely,
                assetEstimateDifficultWorst,
                teamCapacity)
    assetMedium=calculateAsset("assetMedium",
                assetMediumCount,
                assetEstimateMediumBest,
                assetEstimateMediumMostLikely,
                assetEstimateMediumWorst,
                teamCapacity)
    assetEasy=calculateAsset("assetEasy",
                assetEasyCount,
                assetEstimateEasyBest,
                assetEstimateEasyMostLikely,
                assetEstimateEasyWorst,
                teamCapacity)


    //criticalPathMean
    var criticalPathMean=assetDifficult.meanCriticalPath+assetMedium.meanCriticalPath+assetEasy.meanCriticalPath;

    console.log("criticalPathDifficultAssets---: ", assetDifficult.meanCriticalPath)
    console.log("criticalPathMediumAssets: ", assetMedium.meanCriticalPath)
    console.log("criticalPathEasyAssets: ", assetEasy.meanCriticalPath)
    console.log("criticalPathMean: ", criticalPathMean)
    writeToPage("criticalPathMean",criticalPathMean.toFixed(2));

    

    
    var projectManDays = assetDifficult.meanTotal+assetMedium.meanTotal+assetEasy.meanTotal;
    writeToPage("projectManDaysInfo",projectManDays.toFixed(2));
    writeToPage("totalMeanInfo",projectManDays.toFixed(2));

    //variance
    var varianceAssetDifficult = variance(assetEstimateDifficultBest,assetEstimateDifficultWorst);
    var varianceAssetMedium = variance(assetEstimateMediumBest,assetEstimateMediumWorst);    
    var varianceAssetEasy = variance(assetEstimateEasyBest,assetEstimateEasyWorst);

    //Standard Deviation
    var assetStandardDeviationDifficult = stardardDeviation(assetEstimateDifficultBest,assetEstimateDifficultWorst);
    var assetStandardDeviationMedium =stardardDeviation(assetEstimateMediumBest,assetEstimateMediumWorst); 
    var assetStandardDeviationEasy =stardardDeviation(assetEstimateEasyBest,assetEstimateEasyWorst);

    //days and working year
    var totalTeamHolidays=(leadArtists+artist+juniorArtists)*entitledHolidays;
    writeToPage("totalTeamHolidaysInfo",totalTeamHolidays);
    var totalTeamSickDays=(leadArtists+artist+juniorArtists)*averageSickDays;

    writeToPage("totalTeamSickDaysInfo",totalTeamSickDays);    

    
    

    //criticalPathVariance
    var criticalPathVarianceDifficultAssets=varianceAssetDifficult*assetDifficultCount;
    var criticalPathVarianceMediumAssets=varianceAssetMedium*assetMediumCount;
    var criticalPathVarianceEasyAssets=varianceAssetEasy*assetEasyCount;
    criticalPathVariance=criticalPathVarianceDifficultAssets+criticalPathVarianceMediumAssets+criticalPathVarianceEasyAssets;
    criticalPathStandardDeviation=Math.sqrt(criticalPathVariance,2);
    writeToPage("criticalPathVariance",criticalPathVariance.toFixed(4));
    writeToPage("criticalPathStndDeviation",criticalPathStandardDeviation.toFixed(4));



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
          ['difficult mandays',     assetDifficult.mean],
          ['medium man days',     assetMedium.mean],
          ['easy man days',     assetEasy.mean]

          
        ]);

       var options = {'chartArea': {'width': '100%', 'height': '80%'},
              legend: { position: 'top', maxLines: 3 },
              legend: { textStyle: { color: 'white' }},
              backgroundColor: '#3d3d3d',
              fontSize: 10,
              hAxis: {
                  textStyle:{color: '#FFF'}
              },
               colors: ['#85a56c', '#50795b', '#4c6453']
    };
       var options2 = {'chartArea': {'width': '100%', 'height': '80%'},
                legend: { position: 'top', maxLines: 3 },
                backgroundColor: '#3d3d3d',
              legend: { textStyle: { color: 'white' }},
              fontSize: 10,
              pieSliceText: 'value',
              hAxis: {
                  textStyle:{color: '#FFF'}
              },
               colors: ['#85a56c', '#50795b', '#4c6453']
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
        colors: ['#85a56c', '#50795b', '#4c6453'],
        backgroundColor: '#3d3d3d',
        fontSize: 10,
        pieSliceText: 'value',
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
