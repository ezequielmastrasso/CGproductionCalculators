


function updateInformationPanel (){
    

    var leadArtists =getInputValue("leadsArtistsCountInput");
  	var artist =getInputValue("artistCountInput");
		var juniorArtists=getInputValue("juniorArtistsCountInput");
    var shotCount =getInputValue("shotCountInput");
  	var sequenceCount =getInputValue("sequenceCountInput");
		var establishingShotsPerSequence=getInputValue("establishingShotsPerSequenceInput");
    var artistsCapacity=getInputValue("artistsCapacityInput");
    var juniorArtistsCapacity=getInputValue("juniorArtistsCapacityInput");
    var leadArtistsCapacity=getInputValue("leadArtistsCapacityInput");


    //INPUT %
    var uniqueShotsPercentage=getInputValue("uniqueShotsPercentageInput");
    var masterShotsPercentage=getInputValue("masterShotsPercentageInput");
    var childShotsPercentage=getInputValue("childShotsPercentageInput");

		
    //estimates Unique
    //difficult
    var estimateUniqueDifficultBest =threePointChild=getInputValue("estimateUniqueDifficultBestInput");
    var estimateUniqueDifficultMostLikely=threePointChild=getInputValue("estimateUniqueDifficultMostLikelyInput");
    var estimateUniqueDifficultWorst=threePointChild=getInputValue("estimateUniqueDifficultWorstInput");
    //medium
    var estimateUniqueMediumBest=threePointChild=getInputValue("estimateUniqueMediumBestInput");
    var estimateUniqueMediumMostLikely=threePointChild=getInputValue("estimateUniqueMediumMostLikelyInput");
    var estimateUniqueMediumWorst=threePointChild=getInputValue("estimateUniqueMediumWorstInput");
    //easy
    var estimateUniqueEasyBest=threePointChild=getInputValue("estimateUniqueEasyBestInput");
    var estimateUniqueEasyMostLikely=threePointChild=getInputValue("estimateUniqueEasyMostLikelyInput");
    var estimateUniqueEasyWorst=threePointChild=getInputValue("estimateUniqueEasyWorstInput");

    //estimates Establishing
    //difficult
    var estimateEstablishingDifficultBest=threePointChild=getInputValue("estimateEstablishingDifficultBestInput");
    var estimateEstablishingDifficultMostLikely=threePointChild=getInputValue("estimateEstablishingDifficultMostLikelyInput");
    var estimateEstablishingDifficultWorst=threePointChild=getInputValue("estimateEstablishingDifficultWorstInput");
    //medium
    var estimateEstablishingMediumBest=threePointChild=getInputValue("estimateEstablishingMediumBestInput");
    var estimateEstablishingMediumMostLikely=threePointChild=getInputValue("estimateEstablishingMediumMostLikelyInput");
    var estimateEstablishingMediumWorst=threePointChild=getInputValue("estimateEstablishingMediumWorstInput");
    //easy
    var estimateEstablishingEasyBest=threePointChild=getInputValue("estimateEstablishingEasyBestInput");
    var estimateEstablishingEasyMostLikely=threePointChild=getInputValue("estimateEstablishingEasyMostLikelyInput");
    var estimateEstablishingEasyWorst=threePointChild=getInputValue("estimateEstablishingEasyWorstInput");

    //estimates Master
    //difficult
    var estimateMasterDifficultBest=threePointChild=getInputValue("estimateMasterDifficultBestInput");
    var estimateMasterDifficultMostLikely=threePointChild=getInputValue("estimateMasterDifficultMostLikelyInput");
    var estimateMasterDifficultWorst=threePointChild=getInputValue("estimateMasterDifficultWorstInput");
    //medium
    var estimateMasterMediumBest=threePointChild=getInputValue("estimateMasterMediumBestInput");
    var estimateMasterMediumMostLikely=threePointChild=getInputValue("estimateMasterMediumMostLikelyInput");
    var estimateMasterMediumWorst=threePointChild=getInputValue("estimateMasterMediumWorstInput");
    //easy
    var estimateMasterEasyBest=threePointChild=getInputValue("estimateMasterEasyBestInput");
    var estimateMasterEasyMostLikely=threePointChild=getInputValue("estimateMasterEasyMostLikelyInput");
    var estimateMasterEasyWorst=threePointChild=getInputValue("estimateMasterEasyWorstInput");

    //estimates Child
    //difficult
    var estimateChildDifficultBest=threePointChild=getInputValue("estimateChildDifficultBestInput");
    var estimateChildDifficultMostLikely=threePointChild=getInputValue("estimateChildDifficultMostLikelyInput");
    var estimateChildDifficultWorst=threePointChild=getInputValue("estimateChildDifficultWorstInput");
    //medium
    var estimateChildMediumBest=threePointChild=getInputValue("estimateChildMediumBestInput");
    var estimateChildMediumMostLikely=threePointChild=getInputValue("estimateChildMediumMostLikelyInput");
    var estimateChildMediumWorst=threePointChild=getInputValue("estimateChildMediumWorstInput");
    //easy
    var estimateChildEasyBest=threePointChild=getInputValue("estimateChildEasyBestInput");
    var estimateChildEasyMostLikely=threePointChild=getInputValue("estimateChildEasyMostLikelyInput");
    var estimateChildEasyWorst=threePointChild=getInputValue("estimateChildEasyWorstInput"); 

    //shots count
    var uniqueShotsCount= (shotCount*uniqueShotsPercentage)/100;    
    var establishingShotsCount= establishingShotsPerSequence*sequenceCount;
    var establishingShotsPercentage=(100*establishingShotsCount)/shotCount;
    var masterShotsCount= (shotCount*masterShotsPercentage)/100;    
    var childShotsCount= (shotCount*childShotsPercentage)/100;

    //INPUT %
    var uniqueDifficultShotsPercentage=getInputValue("uniqueShotsDifficultPercentageInput");
    var uniqueMediumShotsPercentage=getInputValue("uniqueShotsMediumPercentageInput");
    var uniqueEasyShotsPercentage=getInputValue("uniqueShotsEasyPercentageInput");
    var establishingDifficultShotsPercentage=getInputValue("establishingShotsDifficultPercentageInput");
    var establishingMediumShotsPercentage=getInputValue("establishingShotsMediumPercentageInput");
    var establishingEasyShotsPercentage=getInputValue("establishingShotsEasyPercentageInput");
    var masterDifficultShotsPercentage=getInputValue("masterShotsDifficultPercentageInput");
    var masterMediumShotsPercentage=getInputValue("masterShotsMediumPercentageInput");
    var masterEasyShotsPercentage=getInputValue("masterShotsEasyPercentageInput");
    var childDifficultShotsPercentage=getInputValue("childShotsDifficultPercentageInput");
    var childMediumShotsPercentage=getInputValue("childShotsMediumPercentageInput");
    var childEasyShotsPercentage=getInputValue("childShotsEasyPercentageInput");
    //calculate each shot type/difficulty Count
    var uniqueShotsDifficultCount=(getInputValue("uniqueShotsDifficultPercentageInput")*uniqueShotsCount)/100;
    var uniqueShotsMediumCount=(getInputValue("uniqueShotsMediumPercentageInput")*uniqueShotsCount)/100;
    var uniqueShotsEasyCount=(getInputValue("uniqueShotsEasyPercentageInput")*uniqueShotsCount)/100;
    var establishingShotsDifficultCount=(getInputValue("establishingShotsDifficultPercentageInput")*establishingShotsCount)/100;
    var establishingShotsMediumCount=(getInputValue("establishingShotsMediumPercentageInput")*establishingShotsCount)/100;    var establishingShotsEasyCount=(getInputValue("establishingShotsEasyPercentageInput")*establishingShotsCount)/100;
    var masterShotsDifficultCount=(getInputValue("masterShotsDifficultPercentageInput")*masterShotsCount)/100;
    var masterShotsMediumCount=(getInputValue("masterShotsMediumPercentageInput")*masterShotsCount)/100;
    var masterShotsEasyCount=(getInputValue("masterShotsEasyPercentageInput")*masterShotsCount)/100;
    var childShotsDifficultCount=(getInputValue("childShotsDifficultPercentageInput")*childShotsCount)/100;
    var childShotsMediumCount=(getInputValue("childShotsMediumPercentageInput")*childShotsCount)/100;
    var childShotsEasyCount=(getInputValue("childShotsEasyPercentageInput")*childShotsCount)/100;

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

    shotsUniqueDifficult=calculateAsset("uniqueDifficult",
                    uniqueShotsDifficultCount,
                    estimateUniqueDifficultBest,
                    estimateUniqueDifficultMostLikely,
                    estimateUniqueDifficultWorst,
                    teamCapacity)
    shotsUniqueMedium=calculateAsset("uniqueMedium",
                    uniqueShotsMediumCount,
                    estimateUniqueMediumBest,
                    estimateUniqueMediumMostLikely,
                    estimateUniqueMediumWorst,
                    teamCapacity)
    shotsUniqueEasy=calculateAsset("uniqueEasy",
                    uniqueShotsEasyCount,
                    estimateUniqueEasyBest,
                    estimateUniqueEasyMostLikely,
                    estimateUniqueEasyWorst,
                    teamCapacity)

    shotsEstablishingDifficult=calculateAsset("EstablishingDifficult",
                    establishingShotsDifficultCount,
                    estimateEstablishingDifficultBest,
                    estimateEstablishingDifficultMostLikely,
                    estimateEstablishingDifficultWorst,
                    teamCapacity)
    shotsEstablishingMedium=calculateAsset("EstablishingMedium",
                    establishingShotsMediumCount,
                    estimateEstablishingMediumBest,
                    estimateEstablishingMediumMostLikely,
                    estimateEstablishingMediumWorst,
                    teamCapacity)
    shotsEstablishingEasy=calculateAsset("EstablishingEasy",
                    establishingShotsEasyCount,
                    estimateEstablishingEasyBest,
                    estimateEstablishingEasyMostLikely,
                    estimateEstablishingEasyWorst,
                    teamCapacity)

    shotsMasterDifficult=calculateAsset("MasterDifficult",
                    masterShotsDifficultCount,
                    estimateMasterDifficultBest,
                    estimateMasterDifficultMostLikely,
                    estimateMasterDifficultWorst,
                    teamCapacity)
    shotsMasterMedium=calculateAsset("MasterMedium",
                    masterShotsMediumCount,
                    estimateMasterMediumBest,
                    estimateMasterMediumMostLikely,
                    estimateMasterMediumWorst,
                    teamCapacity)
    shotsMasterEasy=calculateAsset("MasterEasy",
                    masterShotsEasyCount,
                    estimateMasterEasyBest,
                    estimateMasterEasyMostLikely,
                    estimateMasterEasyWorst,
                    teamCapacity)

    shotsChildDifficult=calculateAsset("ChildDifficult",
                    childShotsDifficultCount,
                    estimateChildDifficultBest,
                    estimateChildDifficultMostLikely,
                    estimateChildDifficultWorst,
                    teamCapacity)
    shotsChildMedium=calculateAsset("ChildMedium",
                    childShotsMediumCount,
                    estimateChildMediumBest,
                    estimateChildMediumMostLikely,
                    estimateChildMediumWorst,
                    teamCapacity)
    shotsChildEasy=calculateAsset("ChildEasy",
                    childShotsEasyCount,
                    estimateChildEasyBest,
                    estimateChildEasyMostLikely,
                    estimateChildEasyWorst,
                    teamCapacity)    
      

    
    var startingDate  =0;
    var endDate  =0;


    //criticalPathMeans
    var criticalPathUniqueShots= shotsUniqueDifficult.meanCriticalPath+shotsUniqueMedium.meanCriticalPath+shotsUniqueEasy.meanCriticalPath
    var criticalPathEstablishingShots= shotsEstablishingDifficult.meanCriticalPath+shotsEstablishingMedium.meanCriticalPath+shotsEstablishingEasy.meanCriticalPath
    var criticalPathMasterShots= shotsMasterDifficult.meanCriticalPath+shotsMasterMedium.meanCriticalPath+shotsMasterEasy.meanCriticalPath
    var criticalPathChildShots= shotsChildDifficult.meanCriticalPath+shotsChildMedium.meanCriticalPath+shotsChildEasy.meanCriticalPath

    
    criticalPathMean=criticalPathUniqueShots+criticalPathEstablishingShots+criticalPathMasterShots+criticalPathChildShots;
    console.log("criticalPathUnique---: ", criticalPathUniqueShots)
    console.log("criticalPathEstablishing: ", criticalPathEstablishingShots)
    console.log("criticalPathMaster: ", criticalPathMasterShots)
    console.log("criticalPathChild: ", criticalPathChildShots)
    console.log("criticalPathMean: ", criticalPathMean)
    writeToPage("criticalPathMean",criticalPathMean.toFixed(2));

    //projectManDaysInfo
    var totalShotMean=shotsUniqueDifficult.meanTotal+
                      shotsUniqueMedium.meanTotal+
                      shotsUniqueEasy.meanTotal+
                      shotsEstablishingDifficult.meanTotal+
                      shotsEstablishingMedium.meanTotal+
                      shotsEstablishingEasy.meanTotal+
                      shotsMasterDifficult.meanTotal+
                      shotsMasterMedium.meanTotal+
                      shotsMasterEasy.meanTotal+
                      shotsChildDifficult.meanTotal+
                      shotsChildMedium.meanTotal+
                      shotsChildEasy.meanTotal;
    var projectManDays =totalShotMean;  //totalmean/teamCapacity
    writeToPage("projectManDaysInfo",projectManDays.toFixed(2));
    writeToPage("totalMeanInfo",projectManDays.toFixed(2));
    
    
    document.getElementById("projectManDaysInfo").innerHTML=projectManDays.toFixed(2);;

    var startDate = getInputDate("startDate");
    var proposedDate = getInputDate("endDate");

    proposedDuration= dateDifference(startDate,proposedDate);
    writeToPage("proposedDuration",proposedDuration);   
    console.log("proposedDuration",proposedDuration);

    totalCriticalPathVariance=shotsUniqueDifficult.criticalPathVarianceTotal+
                      shotsUniqueMedium.criticalPathVarianceTotal+
                      shotsUniqueEasy.criticalPathVarianceTotal+
                      shotsEstablishingDifficult.criticalPathVarianceTotal+
                      shotsEstablishingMedium.criticalPathVarianceTotal+
                      shotsEstablishingEasy.criticalPathVarianceTotal+
                      shotsMasterDifficult.criticalPathVarianceTotal+
                      shotsMasterMedium.criticalPathVarianceTotal+
                      shotsMasterEasy.criticalPathVarianceTotal+
                      shotsChildDifficult.criticalPathVarianceTotal+
                      shotsChildMedium.criticalPathVarianceTotal+
                      shotsChildEasy.criticalPathVarianceTotal;

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

    

    //RENDER
    var renderEstimateUniqueBest =  getInputValue("renderEstimateUniqueBestInput");
    var renderEstimateUniqueMostLikely =  getInputValue("renderEstimateUniqueMostLikelyInput");
    var renderEstimateUniqueWorst =  getInputValue("renderEstimateUniqueWorstInput");

    var renderEstimateEstablishingBest =  getInputValue("renderEstimateEstablishingBestInput");
    var renderEstimateEstablishingMostLikely =  getInputValue("renderEstimateEstablishingMostLikelyInput");
    var renderEstimateEstablishingWorst =  getInputValue("renderEstimateEstablishingWorstInput");

    var renderEstimateMasterBest =  getInputValue("renderEstimateMasterBestInput");
    var renderEstimateMasterMostLikely =  getInputValue("renderEstimateMasterMostLikelyInput");
    var renderEstimateMasterWorst =  getInputValue("renderEstimateMasterWorstInput");

    var renderEstimateChildBest =  getInputValue("renderEstimateChildBestInput");
    var renderEstimateChildMostLikely =  getInputValue("renderEstimateChildMostLikelyInput");
    var renderEstimateChildWorst =  getInputValue("renderEstimateChildWorstInput");

    var renderFarmNodesCount =  getInputValue("renderFarmNodesCountInput");
    var renderFarmCoresPerNode =  getInputValue("renderFarmCoresPerNodeInput");
    var renderFarmDownTime =  getInputValue("renderFarmDownTimeInput");
    var renderFarmBusyIdle =  getInputValue("renderFarmBusyIdleInput");
    
    var renderEstimateUniqueRerendering =  getInputValue("renderEstimateUniqueRerenderingInput");
    var renderEstimateEstablishingRerendering =  getInputValue("renderEstimateEstablishingRerenderingInput");
    var renderEstimateMasterRerendering =  getInputValue("renderEstimateMasterRerenderingInput");
    var renderEstimateChildRerendering =  getInputValue("renderEstimateChildRerenderingInput");

    var renderAverageFramesPerShot =  getInputValue("renderAverageFramesPerShotInput");
    

    console.log("renderFarmDownTime",1-renderFarmDownTime )
    console.log("renderFarmBusyIdle",renderFarmBusyIdle )
    var farmCapacity=renderFarmNodesCount*(1-renderFarmDownTime)*(renderFarmBusyIdle);
    console.log("farmCapacity",farmCapacity )

    var renderUnique=calculateAssetRender("renderUnique",
                                          uniqueShotsCount,
                                          renderEstimateUniqueBest,
                                          renderEstimateUniqueMostLikely,
                                          renderEstimateUniqueWorst,
                                          renderEstimateUniqueRerendering,
                                          farmCapacity,
                                          renderAverageFramesPerShot)
    var renderEstablishing=calculateAssetRender("Establishing",
                                          establishingShotsCount,
                                          renderEstimateEstablishingBest,
                                          renderEstimateEstablishingMostLikely,
                                          renderEstimateEstablishingWorst,
                                          renderEstimateEstablishingRerendering,
                                          farmCapacity,
                                          renderAverageFramesPerShot)  
    var renderMaster=calculateAssetRender("Master",
                                          masterShotsCount,
                                          renderEstimateMasterBest,
                                          renderEstimateMasterMostLikely,
                                          renderEstimateMasterWorst,
                                          renderEstimateMasterRerendering,
                                          farmCapacity,
                                          renderAverageFramesPerShot)  
    var renderChild=calculateAssetRender("Child",
                                          childShotsCount,
                                          renderEstimateChildBest,
                                          renderEstimateChildMostLikely,
                                          renderEstimateChildWorst,
                                          renderEstimateChildRerendering,
                                          farmCapacity,
                                          renderAverageFramesPerShot)  
    renderCriticalPathMean=renderUnique.meanCriticalPath+renderEstablishing.meanCriticalPath+renderMaster.meanCriticalPath+renderChild.meanCriticalPath
    
    console.log('renderAverageFramesPerShot = ' + renderAverageFramesPerShot)

    console.log('Unique Count = ' + uniqueShotsCount)
    console.log('Unique frameCount  = ' + renderUnique.count)
    console.log('Unique minutes per frame  = ' + renderUnique.mean)
    console.log('Unique minutes total  = ' + renderUnique.meanTotal)
    console.log('Unique Hours total  = ' + renderUnique.meanTotal/60)
    console.log('Unique Days total  = ' + (renderUnique.meanTotal/60)/24)

    console.log('Establishing Count = ' + establishingShotsCount)
    console.log('Establishing frameCount = ' + renderEstablishing.count)
    console.log('Establishing minutes per frame  = ' + renderEstablishing.mean)
    console.log('Establishing minutes total  = ' + renderEstablishing.meanTotal)
    console.log('Establishing Hours total  = ' + renderEstablishing.meanTotal/60)
    console.log('Establishing Days total  = ' + (renderEstablishing.meanTotal/60)/24)
    
    console.log('Master Count = ' + masterShotsCount)
    console.log('Master Unique = ' + renderMaster.count)
    console.log('Master minutes per frame  = ' + renderMaster.mean)
    console.log('Master minutes total  = ' + renderMaster.meanTotal)
    console.log('Master Hours total  = ' + renderMaster.meanTotal/60)
    console.log('Master Days total  = ' + (renderMaster.meanTotal/60)/24)
    
    console.log('Child Count = ' + childShotsCount)
    console.log('Child Unique = ' + renderChild.count)
    console.log('Child minutes per frame  = ' + renderChild.mean)
    console.log('Child minutes total  = ' + renderChild.meanTotal)
    console.log('Child Hours total  = ' + renderChild.meanTotal/60)
    console.log('Child Days total  = ' + (renderChild.meanTotal/60)/24)

    console.log('Total Render in Minutes = ' + renderCriticalPathMean)
    writeToPage("totalMinutesRenderInfo",renderCriticalPathMean.toFixed(0));
    console.log('Total Render in Hours = ' + renderCriticalPathMean/60)
    console.log('Total Render in Days = ' + (renderCriticalPathMean/60)/24)
    writeToPage("totalHoursRenderInfo",((renderCriticalPathMean/60)).toFixed(0));
    writeToPage("totalDaysRenderInfo",((renderCriticalPathMean/60)/24).toFixed(0));
    
    writeToPage("uniqueTotalMinutesRenderInfo",renderUnique.meanTotal.toFixed(0));
    writeToPage("establishingTotalMinutesRenderInfo",renderEstablishing.meanTotal.toFixed(0));
    writeToPage("masterTotalMinutesRenderInfo",renderMaster.meanTotal.toFixed(0));
    writeToPage("childTotalMinutesRenderInfo",renderChild.meanTotal.toFixed(0));
    

    var renderTotalCriticalPathVariance=renderUnique.criticalPathVarianceTotal+
                                    renderEstablishing.criticalPathVarianceTotal+
                                    renderMaster.criticalPathVarianceTotal+
                                    renderChild.criticalPathVarianceTotal;
    var renderCriticalPathStandardDeviation=Math.sqrt(renderTotalCriticalPathVariance,2);
    



    renderPercent95=1.645*renderCriticalPathStandardDeviation+renderCriticalPathMean
    renderPercent80=0.85*renderCriticalPathStandardDeviation+renderCriticalPathMean
    renderPercent50=0.5*renderCriticalPathStandardDeviation+renderCriticalPathMean
    console.log(percent95)
    console.log(percent80)
    writeToPage("the50Render",((renderPercent50/60)/24).toFixed(1)+ " days");
    writeToPage("the80Render",((renderPercent80/60)/24).toFixed(1)+ " days");
    writeToPage("the95Render",((renderPercent95/60)/24).toFixed(1)+ " days");
    

    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Shots', 'Percentage'],
          ['Unique Difficult',     uniqueShotsDifficultCount],
          ['Unique Medium',  uniqueShotsMediumCount],
          ['Unique Easy', uniqueShotsEasyCount],
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
          ['Unique',     uniqueShotsCount],
          ['Establishing',     establishingShotsCount],
          ['Master',    masterShotsCount],
          ['Child',    childShotsCount],
        ]);
        var data3 = google.visualization.arrayToDataTable([
          ['Shots', 'Percentage'],
          ['Unique Difficult',     shotsUniqueDifficult.meanTotal],
          ['Unique Medium',  shotsUniqueMedium.meanTotal],
          ['Unique Easy', shotsUniqueEasy.meanTotal],
          ['Establishing Difficult',    shotsEstablishingDifficult.meanTotal],
          ['Establishing Medium',  shotsEstablishingMedium.meanTotal],
          ['Establishing Easy', shotsEstablishingEasy.meanTotal],
          ['Master Difficult',    shotsMasterDifficult.meanTotal],
          ['Master Medium',    shotsMasterMedium.meanTotal],
          ['Master Easy',    shotsMasterEasy.meanTotal],
          ['Child Difficult',    shotsChildDifficult.meanTotal],
          ['Child Medium',    shotsChildMedium.meanTotal],
          ['Child Easy',    shotsChildEasy.meanTotal],
          
        ]);

        var dataRender1 = google.visualization.arrayToDataTable([
          ['Shots', 'Percentage'],
          ['Unique Difficult',     uniqueShotsDifficultCount],
          ['Unique Medium',  uniqueShotsMediumCount],
          ['Unique Easy', uniqueShotsEasyCount],
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
        var dataRender2 = google.visualization.arrayToDataTable([
          ['FrameCount', 'Percentage'],
          ['Unique',     renderUnique.count],
          ['Establishing',     renderEstablishing.count],
          ['Master',    renderMaster.count],
          ['Child',    renderChild.count],
        ]);
        var dataRender3 = google.visualization.arrayToDataTable([
          ['Shots', 'Percentage'],
          ['Unique Difficult',     ((renderUnique.meanCriticalPath/60)/24)],
          ['Establishing Difficult',    ((renderEstablishing.meanCriticalPath/60)/24)],
          ['Master Difficult',    ((renderMaster.meanCriticalPath/60)/24)],
          ['Child Difficult',    ((renderChild.meanCriticalPath/60)/24)],
          
        ]);

        

       var options = {'chartArea': {'width': '100%', 'height': '90%'},
              legend: { position: 'top', maxLines: 3 },
              legend: { textStyle: { color: 'white' }},
              fontSize: 10,
              pieSliceText: 'value',
              backgroundColor: '#3d3d3d',
              hAxis: {
                  textStyle:{color: '#FFF',}
              },
              colors: ['#cd5332', '#9c442d', '#784438', '#9e608d', '#75546c', '#614e5f','#4976b4','#486181','#47576a','#85a56c','#50795b','#4c6453'],
    };
       var options2 = {'chartArea': {'width': '100%', 'height': '90%'},
                legend: { position: 'top', maxLines: 3 },
                backgroundColor: '#3d3d3d',
                        fontSize: 10,
                        pieSliceText: 'value',
              legend: { textStyle: { color: 'white'}},
              hAxis: {
                  textStyle:{color: '#FFF'}
              },
              colors: ['#cd5332', '#9e608d','#4976b4','#85a56c'],
    };


        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        var chart2 = new google.visualization.PieChart(document.getElementById('piechart2'));
        var chart3 = new google.visualization.PieChart(document.getElementById('piechart3'));
        var chart5 = new google.visualization.PieChart(document.getElementById('renderPiechart2'));
        var chart6 = new google.visualization.PieChart(document.getElementById('renderPiechart3'));


        chart.draw(data, options);
        chart2.draw(data2, options2);
        chart3.draw(data3, options);
        chart5.draw(dataRender2, options2);
        chart6.draw(dataRender3, options);
        

        
      var data4 = google.visualization.arrayToDataTable([
        ['Genre', 'difficult',{ role: 'style' }, 'Medium',{ role: 'style' }, 'Easy',{ role: 'annotation' } ,{ role: 'style' }],
        ['unique', uniqueShotsDifficultCount, '#cd5332', uniqueShotsMediumCount, '#9c442d', uniqueShotsEasyCount, "Total: "+uniqueShotsCount, '#784438'],
        ['establishing', establishingShotsDifficultCount, '#9e608d', establishingShotsMediumCount, '#75546c', establishingShotsEasyCount, "Total: "+establishingShotsCount, '#614e5f'],
        ['Master', masterShotsDifficultCount, '#4976b4', masterShotsMediumCount, '#486181', masterShotsEasyCount, "Total: "+masterShotsCount, '#47576a'],
        ['Child', childShotsDifficultCount, '#85a56c', childShotsMediumCount, '#50795b', childShotsEasyCount, "Total: "+childShotsCount, '#4c6453']
      ]);

      var renderData4 = google.visualization.arrayToDataTable([
        ['Genre', 'difficult',{ role: 'style' }, 'Medium',{ role: 'style' }, 'Easy',{ role: 'annotation' } ,{ role: 'style' }],
        ['unique', uniqueShotsDifficultCount, '#cd5332', uniqueShotsMediumCount, '#9c442d', uniqueShotsEasyCount, "Total: "+uniqueShotsCount, '#784438'],
        ['establishing', establishingShotsDifficultCount, '#9e608d', establishingShotsMediumCount, '#75546c', establishingShotsEasyCount, "Total: "+establishingShotsCount, '#614e5f'],
        ['Master', masterShotsDifficultCount, '#4976b4', masterShotsMediumCount, '#486181', masterShotsEasyCount, "Total: "+masterShotsCount, '#47576a'],
        ['Child', childShotsDifficultCount, '#85a56c', childShotsMediumCount, '#50795b', childShotsEasyCount, "Total: "+childShotsCount, '#4c6453']
      ]);

      var options = {
        'chartArea': {'width': '80%', 'height': '70%'},
        legend: { position: 'top', maxLines: 3, fontSize: 1},
        bar: { groupWidth: '75%' },
        backgroundColor: '#3d3d3d',
        fontSize: 10,
        pieSliceText: 'value',
        fontName: 'Open Sans',
        colors: ['#A0A0A0', '#A0A0A0','#A0A0A0','#A0A0A0'],
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