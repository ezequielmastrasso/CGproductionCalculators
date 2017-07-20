


function updateInformationPanel (){
    

    var leadArtists =getInputValue("leadsArtistsCountInput");
    writeToPage("leadsArtistsCountInfo",leadArtists)
    

  	var artist =getInputValue("artistCountInput");
    writeToPage("artistCountInfo",artist)
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
		
    var artistsCapacity=getInputValue("artistsCapacityInput");
    document.getElementById("artistsCapacityInfo").innerHTML=artistsCapacity;
    console.log("artistsWorkingCapacity: ", artistsCapacity)

    var juniorArtistsCapacity=getInputValue("juniorArtistsCapacityInput");
    document.getElementById("juniorArtistsCapacityInfo").innerHTML=juniorArtistsCapacity;
    console.log("juniorArtistsWorkingCapacity: ", juniorArtistsCapacity)

    var leadArtistsCapacity=getInputValue("leadArtistsCapacityInput");
    document.getElementById("leadArtistsCapacityInfo").innerHTML=leadArtistsCapacity;
    console.log("leadArtistsWorkingCapacity: ", leadArtistsCapacity)

    


    
    





    

    //INPUT %
    var uniqueShotsPercentage=getInputValue("uniqueShotsPercentageInput");
    document.getElementById("uniqueShotsPercentageInfo").innerHTML=uniqueShotsPercentage;
    console.log("uniqueShotsPercentage: ", uniqueShotsPercentage)

    var masterShotsPercentage=getInputValue("masterShotsPercentageInput");
    document.getElementById("masterShotsPercentageInfo").innerHTML=masterShotsPercentage;
    console.log("masterShotsPercentage: ", masterShotsPercentage)

    var childShotsPercentage=getInputValue("childShotsPercentageInput");
    document.getElementById("childShotsPercentageInfo").innerHTML=childShotsPercentage;
    console.log("childShotsPercentage: ", childShotsPercentage)

		
    //estimates Unique
    //difficult
    var estimateUniqueDifficultBest =threePointChild=getInputValue("estimateUniqueDifficultBestInput");
    console.log("estimateUniqueDifficultBest: ", estimateUniqueDifficultBest)
    var estimateUniqueDifficultMostLikely=threePointChild=getInputValue("estimateUniqueDifficultMostLikelyInput");
    console.log("estimateUniqueDifficultMostLikely: ", estimateUniqueDifficultMostLikely)
    var estimateUniqueDifficultWorst=threePointChild=getInputValue("estimateUniqueDifficultWorstInput");
    console.log("estimateUniqueDifficultWorst: ", estimateUniqueDifficultWorst)
    //medium
    var estimateUniqueMediumBest=threePointChild=getInputValue("estimateUniqueMediumBestInput");
    console.log("estimateUniqueMediumBest: ", estimateUniqueMediumBest)
    var estimateUniqueMediumMostLikely=threePointChild=getInputValue("estimateUniqueMediumMostLikelyInput");
    console.log("estimateUniqueMediumMostLikely: ", estimateUniqueMediumMostLikely)
    var estimateUniqueMediumWorst=threePointChild=getInputValue("estimateUniqueMediumWorstInput");
    console.log("estimateUniqueMediumWorst: ", estimateUniqueMediumWorst)
    //easy
    var estimateUniqueEasyBest=threePointChild=getInputValue("estimateUniqueEasyBestInput");
    console.log("estimateUniqueEasyBest: ", estimateUniqueEasyBest)
    var estimateUniqueEasyMostLikely=threePointChild=getInputValue("estimateUniqueEasyMostLikelyInput");
    console.log("estimateUniqueEasyMostLikely: ", estimateUniqueEasyMostLikely)
    var estimateUniqueEasyWorst=threePointChild=getInputValue("estimateUniqueEasyWorstInput");
    console.log("estimateUniqueEasyWorst: ", estimateUniqueEasyWorst)

    //estimates Establishing
    //difficult
    var estimateEstablishingDifficultBest=threePointChild=getInputValue("estimateEstablishingDifficultBestInput");
    console.log("estimateEstablishingDifficultBest: ", estimateEstablishingDifficultBest)
    var estimateEstablishingDifficultMostLikely=threePointChild=getInputValue("estimateEstablishingDifficultMostLikelyInput");
    console.log("estimateEstablishingDifficultMostLikely: ", estimateEstablishingDifficultMostLikely)
    var estimateEstablishingDifficultWorst=threePointChild=getInputValue("estimateEstablishingDifficultWorstInput");
    console.log("estimateEstablishingDifficultWorst: ", estimateEstablishingDifficultWorst)
    //medium
    var estimateEstablishingMediumBest=threePointChild=getInputValue("estimateEstablishingMediumBestInput");
    console.log("estimateEstablishingMediumBest: ", estimateEstablishingMediumBest)
    var estimateEstablishingMediumMostLikely=threePointChild=getInputValue("estimateEstablishingMediumMostLikelyInput");
    console.log("estimateEstablishingMediumMostLikely: ", estimateEstablishingMediumMostLikely)
    var estimateEstablishingMediumWorst=threePointChild=getInputValue("estimateEstablishingMediumWorstInput");
    console.log("estimateEstablishingMediumWorst: ", estimateEstablishingMediumWorst)
    //easy
    var estimateEstablishingEasyBest=threePointChild=getInputValue("estimateEstablishingEasyBestInput");
    console.log("estimateEstablishingEasyBest: ", estimateEstablishingEasyBest)
    var estimateEstablishingEasyMostLikely=threePointChild=getInputValue("estimateEstablishingEasyMostLikelyInput");
    console.log("estimateEstablishingEasyMostLikely: ", estimateEstablishingEasyMostLikely)
    var estimateEstablishingEasyWorst=threePointChild=getInputValue("estimateEstablishingEasyWorstInput");
    console.log("estimateEstablishingEasyWorst: ", estimateEstablishingEasyWorst)

    //estimates Master
    //difficult
    var estimateMasterDifficultBest=threePointChild=getInputValue("estimateMasterDifficultBestInput");
    console.log("estimateMasterDifficultBest: ", estimateMasterDifficultBest)
    var estimateMasterDifficultMostLikely=threePointChild=getInputValue("estimateMasterDifficultMostLikelyInput");
    console.log("estimateMasterDifficultMostLikely: ", estimateMasterDifficultMostLikely)
    var estimateMasterDifficultWorst=threePointChild=getInputValue("estimateMasterDifficultWorstInput");
    console.log("estimateMasterDifficultWorst: ", estimateMasterDifficultWorst)
    //medium
    var estimateMasterMediumBest=threePointChild=getInputValue("estimateMasterMediumBestInput");
    console.log("estimateMasterMediumBest: ", estimateMasterMediumBest)
    var estimateMasterMediumMostLikely=threePointChild=getInputValue("estimateMasterMediumMostLikelyInput");
    console.log("estimateMasterMediumMostLikely: ", estimateMasterMediumMostLikely)
    var estimateMasterMediumWorst=threePointChild=getInputValue("estimateMasterMediumWorstInput");
    console.log("estimateMasterMediumWorst: ", estimateMasterMediumWorst)
    //easy
    var estimateMasterEasyBest=threePointChild=getInputValue("estimateMasterEasyBestInput");
    console.log("estimateMasterEasyBest: ", estimateMasterEasyBest)
    var estimateMasterEasyMostLikely=threePointChild=getInputValue("estimateMasterEasyMostLikelyInput");
    console.log("estimateMasterEasyMostLikely: ", estimateMasterEasyMostLikely)
    var estimateMasterEasyWorst=threePointChild=getInputValue("estimateMasterEasyWorstInput");
    console.log("estimateMasterEasyWorst: ", estimateMasterEasyWorst)

    //estimates Child
    //difficult
    var estimateChildDifficultBest=threePointChild=getInputValue("estimateChildDifficultBestInput");
    console.log("estimateChildDifficultBest: ", estimateChildDifficultBest)
    var estimateChildDifficultMostLikely=threePointChild=getInputValue("estimateChildDifficultMostLikelyInput");
    console.log("estimateChildDifficultMostLikely: ", estimateChildDifficultMostLikely)
    var estimateChildDifficultWorst=threePointChild=getInputValue("estimateChildDifficultWorstInput");
    console.log("estimateChildDifficultWorst: ", estimateChildDifficultWorst)
    //medium
    var estimateChildMediumBest=threePointChild=getInputValue("estimateChildMediumBestInput");
    console.log("estimateChildMediumBest: ", estimateChildMediumBest)
    var estimateChildMediumMostLikely=threePointChild=getInputValue("estimateChildMediumMostLikelyInput");
    console.log("estimateChildMediumMostLikely: ", estimateChildMediumMostLikely)
    var estimateChildMediumWorst=threePointChild=getInputValue("estimateChildMediumWorstInput");
    console.log("estimateChildMediumWorst: ", estimateChildMediumWorst)
    //easy
    var estimateChildEasyBest=threePointChild=getInputValue("estimateChildEasyBestInput");
    console.log("estimateChildEasyBest: ", estimateChildEasyBest)
    var estimateChildEasyMostLikely=threePointChild=getInputValue("estimateChildEasyMostLikelyInput");
    console.log("estimateChildEasyMostLikely: ", estimateChildEasyMostLikely)
    var estimateChildEasyWorst=threePointChild=getInputValue("estimateChildEasyWorstInput");
    console.log("estimateChildEasyWorst: ", estimateChildEasyWorst)


    //3 point means
    var threePointUniqueDifficult=threePointWeighted(estimateUniqueDifficultBest, estimateUniqueDifficultMostLikely,estimateUniqueDifficultWorst);
    var threePointUniqueMedium=threePointWeighted(estimateUniqueMediumBest, estimateUniqueMediumMostLikely,estimateUniqueMediumWorst);
    var threePointUniqueEasy=threePointWeighted(estimateUniqueEasyBest, estimateUniqueEasyMostLikely,estimateUniqueEasyWorst);
    document.getElementById("threePointUniqueDifficultInfo").innerHTML=threePointUniqueDifficult.toFixed(2);
    document.getElementById("threePointUniqueMediumInfo").innerHTML=threePointUniqueMedium.toFixed(2);
    document.getElementById("threePointUniqueEasyInfo").innerHTML=threePointUniqueEasy.toFixed(2);

    var threePointEstablishingDifficult=threePointWeighted(estimateEstablishingDifficultBest, estimateEstablishingDifficultMostLikely,estimateEstablishingDifficultWorst);
    var threePointEstablishingMedium=threePointWeighted(estimateEstablishingMediumBest, estimateEstablishingMediumMostLikely,estimateEstablishingMediumWorst);
    var threePointEstablishingEasy=threePointWeighted(estimateEstablishingEasyBest, estimateEstablishingEasyMostLikely,estimateEstablishingEasyWorst);
    document.getElementById("threePointEstablishingDifficultInfo").innerHTML=threePointEstablishingDifficult.toFixed(2);
    document.getElementById("threePointEstablishingMediumInfo").innerHTML=threePointEstablishingMedium.toFixed(2);
    document.getElementById("threePointEstablishingEasyInfo").innerHTML=threePointEstablishingEasy.toFixed(2);

    var threePointMasterDifficult=threePointWeighted(estimateMasterDifficultBest, estimateMasterDifficultMostLikely,estimateMasterDifficultWorst);
    var threePointMasterMedium=threePointWeighted(estimateMasterMediumBest, estimateMasterMediumMostLikely,estimateMasterMediumWorst);
    var threePointMasterEasy=threePointWeighted(estimateMasterEasyBest, estimateMasterEasyMostLikely,estimateMasterEasyWorst);
    document.getElementById("threePointMasterDifficultInfo").innerHTML=threePointMasterDifficult.toFixed(2);
    document.getElementById("threePointMasterMediumInfo").innerHTML=threePointMasterMedium.toFixed(2);
    document.getElementById("threePointMasterEasyInfo").innerHTML=threePointMasterEasy.toFixed(2);

    var threePointChildDifficult=threePointWeighted(estimateChildDifficultBest, estimateChildDifficultMostLikely,estimateChildDifficultWorst);
    var threePointChildMedium=threePointWeighted(estimateChildMediumBest, estimateChildMediumMostLikely,estimateChildMediumWorst);
    var threePointChildEasy=threePointWeighted(estimateChildEasyBest, estimateChildEasyMostLikely,estimateChildEasyWorst);
    document.getElementById("threePointChildDifficultInfo").innerHTML=threePointChildDifficult.toFixed(2);
    document.getElementById("threePointChildMediumInfo").innerHTML=threePointChildMedium.toFixed(2);
    document.getElementById("threePointChildEasyInfo").innerHTML=threePointChildEasy.toFixed(2);

    //standard Deviation unique
    var standardDeviationUniqueDifficult=stardardDeviation(estimateUniqueDifficultBest,estimateUniqueDifficultWorst);
    var standardDeviationUniqueMedium=stardardDeviation(estimateUniqueMediumBest,estimateUniqueMediumWorst);
    var standardDeviationUniqueEasy=stardardDeviation(estimateUniqueEasyBest,estimateUniqueEasyWorst);
    document.getElementById("standardDeviationUniqueDifficultInfo").innerHTML=standardDeviationUniqueDifficult.toFixed(2);
    document.getElementById("standardDeviationUniqueMediumInfo").innerHTML=standardDeviationUniqueMedium.toFixed(2);
    document.getElementById("standardDeviationUniqueEasyInfo").innerHTML=standardDeviationUniqueEasy.toFixed(2);

    //standard Deviation Establishing
    var standardDeviationEstablishingDifficult=stardardDeviation(estimateEstablishingDifficultBest,estimateEstablishingDifficultWorst);
    var standardDeviationEstablishingMedium=stardardDeviation(estimateEstablishingMediumBest,estimateEstablishingMediumWorst);
    var standardDeviationEstablishingEasy=stardardDeviation(estimateEstablishingEasyBest,estimateEstablishingEasyWorst);
    document.getElementById("standardDeviationEstablishingDifficultInfo").innerHTML=standardDeviationEstablishingDifficult.toFixed(2);
    document.getElementById("standardDeviationEstablishingMediumInfo").innerHTML=standardDeviationEstablishingMedium.toFixed(2);
    document.getElementById("standardDeviationEstablishingEasyInfo").innerHTML=standardDeviationEstablishingEasy.toFixed(2);
  
    //standard Deviation master
    var standardDeviationMasterDifficult=stardardDeviation(estimateMasterDifficultBest,estimateMasterDifficultWorst);
    var standardDeviationMasterMedium=stardardDeviation(estimateMasterMediumBest,estimateMasterMediumWorst);
    var standardDeviationMasterEasy=stardardDeviation(estimateMasterEasyBest,estimateMasterEasyWorst);
    document.getElementById("standardDeviationMasterDifficultInfo").innerHTML=standardDeviationMasterDifficult.toFixed(2);
    document.getElementById("standardDeviationMasterMediumInfo").innerHTML=standardDeviationMasterMedium.toFixed(2);
    document.getElementById("standardDeviationMasterEasyInfo").innerHTML=standardDeviationMasterEasy.toFixed(2);

    //standard Deviation child
    var standardDeviationChildDifficult=stardardDeviation(estimateChildDifficultBest,estimateChildDifficultWorst);
    var standardDeviationChildMedium=stardardDeviation(estimateChildMediumBest,estimateChildMediumWorst);
    var standardDeviationChildEasy=stardardDeviation(estimateChildEasyBest,estimateChildEasyWorst);
    document.getElementById("standardDeviationChildDifficultInfo").innerHTML=standardDeviationChildDifficult.toFixed(2);
    document.getElementById("standardDeviationChildMediumInfo").innerHTML=standardDeviationChildMedium.toFixed(2);
    document.getElementById("standardDeviationChildEasyInfo").innerHTML=standardDeviationChildEasy.toFixed(2);

  


   

    //shots count
    var uniqueShotsCount= (shotCount*uniqueShotsPercentage)/100;
    document.getElementById("uniqueShotsCountInfo").innerHTML=uniqueShotsCount.toFixed(0);
    
    var establishingShotsCount= establishingShotsPerSequence*sequenceCount;
    document.getElementById("establishingShotsCountInfo").innerHTML=establishingShotsCount.toFixed(0);
    console.log("-----establishingShotsCount, seq count: ", establishingShotsCount,sequenceCount)

    var establishingShotsPercentage=(100*establishingShotsCount)/shotCount;
    document.getElementById("establishingShotsPercentageInfo").innerHTML=establishingShotsPercentage;
    console.log("establishingShotsPercentage: ", establishingShotsPercentage)

    var masterShotsCount= (shotCount*masterShotsPercentage)/100;
    document.getElementById("masterShotsCountInfo").innerHTML=masterShotsCount.toFixed(0);
    
    var childShotsCount= (shotCount*childShotsPercentage)/100;
    document.getElementById("childShotsCountInfo").innerHTML=childShotsCount.toFixed(0);


    //INPUT %
    var uniqueDifficultShotsPercentage=getInputValue("uniqueShotsDifficultPercentageInput");
    document.getElementById("uniqueShotsDifficultPercentageInfo").innerHTML=uniqueDifficultShotsPercentage;
    console.log("uniqueDifficultShotsPercentage: ", uniqueDifficultShotsPercentage)

    var uniqueMediumShotsPercentage=getInputValue("uniqueShotsMediumPercentageInput");
    document.getElementById("uniqueShotsMediumPercentageInfo").innerHTML=uniqueMediumShotsPercentage;
    console.log("uniqueMediumShotsPercentage: ", uniqueMediumShotsPercentage)

    var uniqueEasyShotsPercentage=getInputValue("uniqueShotsEasyPercentageInput");
    document.getElementById("uniqueShotsEasyPercentageInfo").innerHTML=uniqueEasyShotsPercentage;
    console.log("uniqueEasyShotsPercentage: ", uniqueEasyShotsPercentage)

    var establishingDifficultShotsPercentage=getInputValue("establishingShotsDifficultPercentageInput");
    document.getElementById("establishingShotsDifficultPercentageInfo").innerHTML=establishingDifficultShotsPercentage;
    console.log("establishingDifficultShotsPercentage: ", establishingDifficultShotsPercentage)

    var establishingMediumShotsPercentage=getInputValue("establishingShotsMediumPercentageInput");
    document.getElementById("establishingShotsMediumPercentageInfo").innerHTML=establishingMediumShotsPercentage;
    console.log("establishingMediumShotsPercentage: ", establishingMediumShotsPercentage)

    var establishingEasyShotsPercentage=getInputValue("establishingShotsEasyPercentageInput");
    document.getElementById("establishingShotsEasyPercentageInfo").innerHTML=establishingEasyShotsPercentage;
    console.log("establishingEasyShotsPercentage: ", establishingEasyShotsPercentage)

    var masterDifficultShotsPercentage=getInputValue("masterShotsDifficultPercentageInput");
    document.getElementById("masterShotsDifficultPercentageInfo").innerHTML=masterDifficultShotsPercentage;
    console.log("masterDifficultShotsPercentage: ", masterDifficultShotsPercentage)

    var masterMediumShotsPercentage=getInputValue("masterShotsMediumPercentageInput");
    document.getElementById("masterShotsMediumPercentageInfo").innerHTML=masterMediumShotsPercentage;
    console.log("masterMediumShotsPercentage: ", masterMediumShotsPercentage)

    var masterEasyShotsPercentage=getInputValue("masterShotsEasyPercentageInput");
    document.getElementById("masterShotsEasyPercentageInfo").innerHTML=masterEasyShotsPercentage;
    console.log("masterEasyShotsPercentage: ", masterEasyShotsPercentage)

    var childDifficultShotsPercentage=getInputValue("childShotsDifficultPercentageInput");
    document.getElementById("childShotsDifficultPercentageInfo").innerHTML=childDifficultShotsPercentage;
    console.log("childDifficultShotsPercentage: ", childDifficultShotsPercentage)

    var childMediumShotsPercentage=getInputValue("childShotsMediumPercentageInput");
    document.getElementById("childShotsMediumPercentageInfo").innerHTML=childMediumShotsPercentage;
    console.log("childMediumShotsPercentage: ", childMediumShotsPercentage)

    var childEasyShotsPercentage=getInputValue("childShotsEasyPercentageInput");
    document.getElementById("childShotsEasyPercentageInfo").innerHTML=childEasyShotsPercentage;
    console.log("childEasyShotsPercentage: ", childEasyShotsPercentage)

    //calculate each shot type/difficulty Count
    var uniqueShotsDifficultCount=(getInputValue("uniqueShotsDifficultPercentageInput")*uniqueShotsCount)/100;
    document.getElementById("uniqueShotsDifficultCountInfo").innerHTML=uniqueShotsDifficultCount.toFixed(0);
    console.log("uniqueShotsDifficultCount: ", uniqueShotsDifficultCount)

    var uniqueShotsMediumCount=(getInputValue("uniqueShotsMediumPercentageInput")*uniqueShotsCount)/100;
    document.getElementById("uniqueShotsMediumCountInfo").innerHTML=uniqueShotsMediumCount.toFixed(0);
    console.log("uniqueShotsMediumCount: ", uniqueShotsMediumCount)

    var uniqueShotsEasyCount=(getInputValue("uniqueShotsEasyPercentageInput")*uniqueShotsCount)/100;
    document.getElementById("uniqueShotsEasyCountInfo").innerHTML=uniqueShotsEasyCount.toFixed(0);
    console.log("uniqueShotsEasyCount: ", uniqueShotsEasyCount)

    var establishingShotsDifficultCount=(getInputValue("establishingShotsDifficultPercentageInput")*establishingShotsCount)/100;
    document.getElementById("establishingShotsDifficultCountInfo").innerHTML=establishingShotsDifficultCount.toFixed(0);
    console.log("establishingShotsDifficultCount: ", establishingShotsDifficultCount)

    var establishingShotsMediumCount=(getInputValue("establishingShotsMediumPercentageInput")*establishingShotsCount)/100;
    document.getElementById("establishingShotsMediumCountInfo").innerHTML=establishingShotsMediumCount.toFixed(0);
    console.log("establishingShotsMediumCount: ", establishingShotsMediumCount)

    var establishingShotsEasyCount=(getInputValue("establishingShotsEasyPercentageInput")*establishingShotsCount)/100;
    document.getElementById("establishingShotsEasyCountInfo").innerHTML=establishingShotsEasyCount.toFixed(0);
    console.log("establishingShotsEasyCount: ", establishingShotsEasyCount)

    var masterShotsDifficultCount=(getInputValue("masterShotsDifficultPercentageInput")*masterShotsCount)/100;
    document.getElementById("masterShotsDifficultCountInfo").innerHTML=masterShotsDifficultCount.toFixed(0);
    console.log("masterShotsDifficultCount: ", masterShotsDifficultCount)

    var masterShotsMediumCount=(getInputValue("masterShotsMediumPercentageInput")*masterShotsCount)/100;
    document.getElementById("masterShotsMediumCountInfo").innerHTML=masterShotsMediumCount.toFixed(0);
    console.log("masterShotsMediumCount: ", masterShotsMediumCount)

    var masterShotsEasyCount=(getInputValue("masterShotsEasyPercentageInput")*masterShotsCount)/100;
    document.getElementById("masterShotsEasyCountInfo").innerHTML=masterShotsEasyCount.toFixed(0);
    console.log("masterShotsEasyCount: ", masterShotsEasyCount)

    var childShotsDifficultCount=(getInputValue("childShotsDifficultPercentageInput")*childShotsCount)/100;
    document.getElementById("childShotsDifficultCountInfo").innerHTML=childShotsDifficultCount.toFixed(0);
    console.log("childShotsDifficultCount: ", childShotsDifficultCount)

    var childShotsMediumCount=(getInputValue("childShotsMediumPercentageInput")*childShotsCount)/100;
    document.getElementById("childShotsMediumCountInfo").innerHTML=childShotsMediumCount.toFixed(0);
    console.log("childShotsMediumCount: ", childShotsMediumCount)

    var childShotsEasyCount=(getInputValue("childShotsEasyPercentageInput")*childShotsCount)/100;
    document.getElementById("childShotsEasyCountInfo").innerHTML=childShotsEasyCount.toFixed(0);
    console.log("childShotsEasyCount: ", childShotsEasyCount)


    //means
    var uniqueShotsDifficultMean=threePointUniqueDifficult*uniqueShotsDifficultCount
    document.getElementById("uniqueShotsDifficultMeanInfo").innerHTML=uniqueShotsDifficultMean.toFixed(0);
    console.log("uniqueShotsDifficultMean: ", uniqueShotsDifficultMean)

    var uniqueShotsMediumMean=threePointUniqueMedium*uniqueShotsMediumCount
    document.getElementById("uniqueShotsMediumMeanInfo").innerHTML=uniqueShotsMediumMean.toFixed(0);
    console.log("uniqueShotsMediumMean: ", uniqueShotsMediumMean)

    var uniqueShotsEasyMean=threePointUniqueEasy*uniqueShotsEasyCount
    document.getElementById("uniqueShotsEasyMeanInfo").innerHTML=uniqueShotsEasyMean.toFixed(0);
    console.log("threePointUniqueEasy ", uniqueShotsEasyMean);
    
    //mean unique total
    var uniqueShotsMean=uniqueShotsDifficultMean+uniqueShotsMediumMean+uniqueShotsEasyMean
    document.getElementById("totalMeanUniqueInfo").innerHTML=uniqueShotsMean;
    console.log("totalMeanUniqueInfo: ", uniqueShotsMean)



    var establishingShotsDifficultMean=threePointEstablishingDifficult*establishingShotsDifficultCount
    document.getElementById("establishingShotsDifficultMeanInfo").innerHTML=establishingShotsDifficultMean.toFixed(0);
    console.log("establishingShotsDifficultMean: ", establishingShotsDifficultMean)

    var establishingShotsMediumMean=threePointEstablishingMedium*establishingShotsMediumCount
    document.getElementById("establishingShotsMediumMeanInfo").innerHTML=establishingShotsMediumMean.toFixed(0);
    console.log("establishingShotsMediumMean: ", establishingShotsMediumMean)

    var establishingShotsEasyMean=threePointEstablishingEasy*establishingShotsEasyCount
    document.getElementById("establishingShotsEasyMeanInfo").innerHTML=establishingShotsEasyMean.toFixed(0);
    console.log("establishingShotsEasyMean: ", establishingShotsEasyMean);

    var establishingShotsMean=establishingShotsDifficultMean+establishingShotsMediumMean+establishingShotsEasyMean
    document.getElementById("totalMeanEstablishingUniqueInfo").innerHTML=establishingShotsMean.toFixed(0);
    console.log("totalMeanestablishingInfo: ", establishingShotsMean)

    


    var masterShotsDifficultMean=threePointMasterDifficult*masterShotsDifficultCount
    document.getElementById("masterShotsDifficultMeanInfo").innerHTML=masterShotsDifficultMean.toFixed(0);
    console.log("masterShotsDifficultMean: ", masterShotsDifficultMean)

    var masterShotsMediumMean=threePointMasterMedium*masterShotsMediumCount
    document.getElementById("masterShotsMediumMeanInfo").innerHTML=masterShotsMediumMean.toFixed(0);
    console.log("masterShotsMediumMean: ", masterShotsMediumMean)

    var masterShotsEasyMean=threePointMasterEasy*masterShotsEasyCount
    document.getElementById("masterShotsEasyMeanInfo").innerHTML=masterShotsEasyMean.toFixed(0);
    console.log("threePointmasterEasy:masterShotsCount ", threePointMasterEasy,masterShotsCount);

    var masterShotsMean=masterShotsDifficultMean+masterShotsMediumMean+masterShotsEasyMean
    document.getElementById("totalMeanMasterUniqueInfo").innerHTML=masterShotsMean.toFixed(0);
    console.log("totalMeanmasterInfo: ", masterShotsMean)



    var childShotsDifficultMean=threePointChildDifficult*childShotsDifficultCount
    document.getElementById("childShotsDifficultMeanInfo").innerHTML=childShotsDifficultMean.toFixed(0);
    console.log("childShotsDifficultMean: ", childShotsDifficultMean)

    var childShotsMediumMean=threePointChildMedium*childShotsMediumCount
    document.getElementById("childShotsMediumMeanInfo").innerHTML=childShotsMediumMean.toFixed(0);
    console.log("childShotsMediumMean: ", childShotsMediumMean)

    var childShotsEasyMean=threePointChildEasy*childShotsEasyCount
    document.getElementById("childShotsEasyMeanInfo").innerHTML=childShotsEasyMean;
    console.log("childShotsEasyMean ", childShotsEasyMean);

    var childShotsMean=childShotsDifficultMean+childShotsMediumMean+childShotsEasyMean
    document.getElementById("totalMeanChildUniqueInfo").innerHTML=childShotsMean.toFixed(0);
    console.log("totalMeanchildInfo: ", childShotsMean)

    //total Mean
    var totalShotMean=uniqueShotsMean+establishingShotsMean+masterShotsMean+childShotsMean;
    document.getElementById("totalMeanInfo").innerHTML=totalShotMean.toFixed(0);
    console.log("totalShotMean: ", totalShotMean)

    //Standard deviation totals Unique To Do
    var standardDeviationUniqueDifficultTotal=Math.sqrt(standardDeviationUniqueDifficult*uniqueShotsDifficultCount);
    document.getElementById("standardDeviationUniqueDifficultTotalInfo").innerHTML=standardDeviationUniqueDifficultTotal.toFixed(2);
    var standardDeviationUniqueMediumTotal=Math.sqrt(standardDeviationUniqueMedium*uniqueShotsMediumCount);
    document.getElementById("standardDeviationUniqueMediumTotalInfo").innerHTML=standardDeviationUniqueMediumTotal.toFixed(2);
    var standardDeviationUniqueEasyTotal=Math.sqrt(standardDeviationUniqueEasy*uniqueShotsEasyCount);
    document.getElementById("standardDeviationUniqueEasyTotalInfo").innerHTML=standardDeviationUniqueEasyTotal.toFixed(2);
    
    
    var standardDeviationUniqueTotal=standardDeviationUniqueDifficultTotal+standardDeviationUniqueMediumTotal+standardDeviationUniqueEasyTotal;
    document.getElementById("standardDeviationUniqueTotalInfo").innerHTML=standardDeviationUniqueTotal.toFixed(2);

    //Standard deviation totals Establishing To Do
    var standardDeviationEstablishingDifficultTotal=Math.sqrt(standardDeviationEstablishingDifficult*establishingShotsDifficultCount);
    document.getElementById("standardDeviationEstablishingDifficultTotalInfo").innerHTML=standardDeviationEstablishingDifficultTotal.toFixed(2);
    var standardDeviationEstablishingMediumTotal=Math.sqrt(standardDeviationEstablishingMedium*establishingShotsMediumCount);
    document.getElementById("standardDeviationEstablishingMediumTotalInfo").innerHTML=standardDeviationEstablishingMediumTotal.toFixed(2);
    var standardDeviationEstablishingEasyTotal=Math.sqrt(standardDeviationEstablishingEasy*establishingShotsEasyCount);
    document.getElementById("standardDeviationEstablishingEasyTotalInfo").innerHTML=standardDeviationEstablishingEasyTotal.toFixed(2);
    var standardDeviationEstablishingTotal=standardDeviationEstablishingDifficultTotal+standardDeviationEstablishingMediumTotal+standardDeviationEstablishingEasyTotal;
    document.getElementById("standardDeviationEstablishingTotalInfo").innerHTML=standardDeviationEstablishingTotal.toFixed(2);


    
    
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

    
    //team capacity
    actualWorkingHoursPerDay=dailyworkingHours-dailyReviewHours;
    dayMultiplier=actualWorkingHoursPerDay/dailyworkingHours
    console.log("actualWorkingHoursPerDay: ", actualWorkingHoursPerDay)
    console.log("dayMultiplier: ", dayMultiplier)
    

    var leavePercent = daysPercentage (yearWorkingDays,entitledHolidays)
    var sickPercent = daysPercentage (yearWorkingDays,averageSickDays)


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
    
    //criticalPathMean
    var criticalPathUniqueShots= uniqueShotsMean/teamCapacity
    var criticalPathEstablishingShots= establishingShotsMean/teamCapacity
    var criticalPathMasterShots = masterShotsMean/teamCapacity
    var criticalPathChildShots = childShotsMean/teamCapacity
    criticalPathMean=criticalPathUniqueShots+criticalPathEstablishingShots+criticalPathMasterShots+criticalPathChildShots;
    console.log("criticalPathUnique---: ", criticalPathUniqueShots)
    console.log("criticalPathEstablishing: ", criticalPathEstablishingShots)
    console.log("criticalPathMaster: ", criticalPathMasterShots)
    console.log("criticalPathChild: ", criticalPathChildShots)
    console.log("criticalPathMean: ", criticalPathMean)
    writeToPage("criticalPathMean",criticalPathMean.toFixed(2));

    //projectManDaysInfo
    var projectManDays =totalShotMean;  //totalmean/teamCapacity
    writeToPage("projectManDaysInfo",projectManDays.toFixed(2));
    document.getElementById("projectManDaysInfo").innerHTML=projectManDays.toFixed(2);;

    var startDate = getInputDate("startDate");
    var proposedDate = getInputDate("endDate");

    proposedDuration= dateDifference(startDate,proposedDate);
    writeToPage("proposedDuration",proposedDuration);   
    console.log("proposedDuration",proposedDuration);


     //variance unique
    var varianceUniqueDifficult=variance(estimateUniqueDifficultBest,estimateUniqueDifficultWorst);
    var varianceUniqueMedium=variance(estimateUniqueMediumBest,estimateUniqueMediumWorst);
    var varianceUniqueEasy=variance(estimateUniqueEasyBest,estimateUniqueEasyWorst);
    document.getElementById("varianceUniqueDifficultInfo").innerHTML=varianceUniqueDifficult.toFixed(2);
    document.getElementById("varianceUniqueMediumInfo").innerHTML=varianceUniqueMedium.toFixed(2);
    document.getElementById("varianceUniqueEasyInfo").innerHTML=varianceUniqueEasy.toFixed(2);

    //variance master
    var varianceMasterDifficult=variance(estimateMasterDifficultBest,estimateMasterDifficultWorst);
    var varianceMasterMedium=variance(estimateMasterMediumBest,estimateMasterMediumWorst);
    var varianceMasterEasy=variance(estimateMasterEasyBest,estimateMasterEasyWorst);
    document.getElementById("varianceMasterDifficultInfo").innerHTML=varianceMasterDifficult.toFixed(2);
    document.getElementById("varianceMasterMediumInfo").innerHTML=varianceMasterMedium.toFixed(2);
    document.getElementById("varianceMasterEasyInfo").innerHTML=varianceMasterEasy.toFixed(2);

    //variance Establishing
    var varianceEstablishingDifficult=variance(estimateEstablishingDifficultBest,estimateEstablishingDifficultWorst);
    var varianceEstablishingMedium=variance(estimateEstablishingMediumBest,estimateEstablishingMediumWorst);
    var varianceEstablishingEasy=variance(estimateEstablishingEasyBest,estimateEstablishingEasyWorst);
    document.getElementById("varianceEstablishingDifficultInfo").innerHTML=varianceEstablishingDifficult.toFixed(2);
    document.getElementById("varianceEstablishingMediumInfo").innerHTML=varianceEstablishingMedium.toFixed(2);
    document.getElementById("varianceEstablishingEasyInfo").innerHTML=varianceEstablishingEasy.toFixed(2);

    //variance Child
    var varianceChildDifficult=variance(estimateChildDifficultBest,estimateChildDifficultWorst);
    var varianceChildMedium=variance(estimateChildMediumBest,estimateChildMediumWorst);
    var varianceChildEasy=variance(estimateChildEasyBest,estimateChildEasyWorst);
    document.getElementById("varianceChildDifficultInfo").innerHTML=varianceChildDifficult.toFixed(2);
    document.getElementById("varianceChildMediumInfo").innerHTML=varianceChildMedium.toFixed(2);
    document.getElementById("varianceChildEasyInfo").innerHTML=varianceChildEasy.toFixed(2);
    
    var criticalPathVarianceUniqueDifficult=varianceUniqueDifficult*uniqueShotsDifficultCount
    console.log("criticalPathVarianceUniqueDifficult",criticalPathVarianceUniqueDifficult)
    var criticalPathVarianceUniqueMedium=varianceUniqueMedium*uniqueShotsMediumCount
    console.log("criticalPathVarianceUniqueMedium",criticalPathVarianceUniqueMedium)
    var criticalPathVarianceUniqueEasy=varianceUniqueEasy*uniqueShotsEasyCount
    console.log("criticalPathVarianceUniqueEasy",criticalPathVarianceUniqueEasy)
    var criticalPathVarianceEstablishingDifficult=varianceEstablishingDifficult*establishingShotsDifficultCount
    console.log("criticalPathVarianceEstablishingDifficult",criticalPathVarianceEstablishingDifficult)
    var criticalPathVarianceEstablishingMedium=varianceEstablishingMedium*establishingShotsMediumCount
    console.log("criticalPathVarianceEstablishingMedium",criticalPathVarianceEstablishingMedium)
    var criticalPathVarianceEstablishingEasy=varianceEstablishingEasy*establishingShotsEasyCount
    console.log("criticalPathVarianceEstablishingEasy",criticalPathVarianceEstablishingEasy)
    var criticalPathVarianceMasterDifficult=varianceMasterDifficult*masterShotsDifficultCount
    console.log("criticalPathVarianceMasterDifficult",criticalPathVarianceMasterDifficult)
    var criticalPathVarianceMasterMedium=varianceMasterMedium*masterShotsMediumCount
    console.log("criticalPathVarianceMasterMedium",criticalPathVarianceMasterMedium)
    var criticalPathVarianceMasterEasy=varianceMasterEasy*masterShotsEasyCount
    console.log("criticalPathVarianceMasterEasy",criticalPathVarianceMasterEasy)
    var criticalPathVarianceChildDifficult=varianceChildDifficult*childShotsDifficultCount
    console.log("criticalPathVarianceChildMedium",criticalPathVarianceChildDifficult)
    var criticalPathVarianceChildMedium=varianceChildMedium*childShotsMediumCount
    console.log("criticalPathVarianceChildMedium",criticalPathVarianceChildMedium)
    var criticalPathVarianceChildEasy=varianceChildEasy*childShotsEasyCount
    console.log("criticalPathVarianceChildEasy",criticalPathVarianceChildEasy)

    var criticalPathVarianceUnique=criticalPathVarianceUniqueDifficult+criticalPathVarianceUniqueMedium+criticalPathVarianceUniqueEasy
    console.log("criticalPathVarianceUnique",criticalPathVarianceUnique)
    var criticalPathVarianceEstablishing=criticalPathVarianceEstablishingDifficult+criticalPathVarianceEstablishingMedium+criticalPathVarianceEstablishingEasy
    console.log("criticalPathVarianceEstablishing",criticalPathVarianceEstablishing)
    var criticalPathVarianceMaster=criticalPathVarianceMasterDifficult+criticalPathVarianceMasterMedium+criticalPathVarianceMasterEasy
    console.log("criticalPathVarianceMaster",criticalPathVarianceMaster)
    var criticalPathVarianceChild=criticalPathVarianceChildDifficult+criticalPathVarianceChildMedium+criticalPathVarianceChildEasy
    console.log("criticalPathVarianceChild",criticalPathVarianceChild)

    var totalCriticalPathVariance=criticalPathVarianceUnique+criticalPathVarianceEstablishing+
                                  criticalPathVarianceMaster+criticalPathVarianceChild
    writeToPage("criticalPathVariance",totalCriticalPathVariance.toFixed(4));

    criticalPathStandardDeviation=Math.sqrt(totalCriticalPathVariance,2);
    var Z=(proposedDuration-criticalPathMean)/criticalPathStandardDeviation;
    writeToPage("Z",Z.toFixed(4));
    probabilities=normalDistribution(proposedDuration,criticalPathMean,criticalPathStandardDeviation)
    console.log("probabilities",probabilities);
    writeToPage("probEndDateInfo",probabilities.toFixed(4)*100+"%");
    
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
          ['Unique Difficult',     uniqueShotsDifficultMean],
          ['Unique Medium',  uniqueShotsMediumMean],
          ['Unique Easy', uniqueShotsEasyMean],
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
        ['unique', uniqueShotsDifficultCount, uniqueShotsMediumCount, uniqueShotsEasyCount, "Total: "+uniqueShotsCount],
        ['establishing', establishingShotsDifficultCount, establishingShotsMediumCount, establishingShotsEasyCount, "Total: "+establishingShotsCount],
        ['Master', masterShotsDifficultCount, masterShotsMediumCount, masterShotsEasyCount, "Total: "+masterShotsCount],
        ['Child', childShotsDifficultCount, childShotsMediumCount, childShotsEasyCount, "Total: "+childShotsCount]
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