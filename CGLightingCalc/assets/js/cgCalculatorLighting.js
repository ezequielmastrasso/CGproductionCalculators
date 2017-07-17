


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

    


    
    





    

    //INPUT %
    var heroShotsPercentage=getInputValue("heroShotsPercentageInput");
    document.getElementById("heroShotsPercentageInfo").innerHTML=heroShotsPercentage;
    console.log("heroShotsPercentage: ", heroShotsPercentage)

    var masterShotsPercentage=getInputValue("masterShotsPercentageInput");
    document.getElementById("masterShotsPercentageInfo").innerHTML=masterShotsPercentage;
    console.log("masterShotsPercentage: ", masterShotsPercentage)

    var childShotsPercentage=getInputValue("childShotsPercentageInput");
    document.getElementById("childShotsPercentageInfo").innerHTML=childShotsPercentage;
    console.log("childShotsPercentage: ", childShotsPercentage)

		
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
    var threePointHeroDifficult=threePointWeighted(estimateHeroDifficultBest, estimateHeroDifficultMostLikely,estimateHeroDifficultWorst);
    var threePointHeroMedium=threePointWeighted(estimateHeroMediumBest, estimateHeroMediumMostLikely,estimateHeroMediumWorst);
    var threePointHeroEasy=threePointWeighted(estimateHeroEasyBest, estimateHeroEasyMostLikely,estimateHeroEasyWorst);
    document.getElementById("threePointHeroDifficultInfo").innerHTML=threePointHeroDifficult.toFixed(2);
    document.getElementById("threePointHeroMediumInfo").innerHTML=threePointHeroMedium.toFixed(2);
    document.getElementById("threePointHeroEasyInfo").innerHTML=threePointHeroEasy.toFixed(2);

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

    //standard Deviation hero
    var standardDeviationHeroDifficult=stardardDeviation(estimateHeroDifficultBest,estimateHeroDifficultWorst);
    var standardDeviationHeroMedium=stardardDeviation(estimateHeroMediumBest,estimateHeroMediumWorst);
    var standardDeviationHeroEasy=stardardDeviation(estimateHeroEasyBest,estimateHeroEasyWorst);
    document.getElementById("standardDeviationHeroDifficultInfo").innerHTML=standardDeviationHeroDifficult.toFixed(2);
    document.getElementById("standardDeviationHeroMediumInfo").innerHTML=standardDeviationHeroMedium.toFixed(2);
    document.getElementById("standardDeviationHeroEasyInfo").innerHTML=standardDeviationHeroEasy.toFixed(2);

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

    



    //variance hero
    var varianceHeroDifficult=variance(estimateHeroDifficultBest,estimateHeroDifficultWorst);
    var varianceHeroMedium=variance(estimateHeroMediumBest,estimateHeroMediumWorst);
    var varianceHeroEasy=variance(estimateHeroEasyBest,estimateHeroEasyWorst);
    document.getElementById("varianceHeroDifficultInfo").innerHTML=varianceHeroDifficult.toFixed(2);
    document.getElementById("varianceHeroMediumInfo").innerHTML=varianceHeroMedium.toFixed(2);
    document.getElementById("varianceHeroEasyInfo").innerHTML=varianceHeroEasy.toFixed(2);

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

    var heroShotsCount= (shotCount*heroShotsPercentage)/100;
    document.getElementById("heroShotsCountInfo").innerHTML=heroShotsCount.toFixed(0);
    
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
    var heroDifficultShotsPercentage=getInputValue("heroShotsDifficultPercentageInput");
    document.getElementById("heroShotsDifficultPercentageInfo").innerHTML=heroDifficultShotsPercentage;
    console.log("heroDifficultShotsPercentage: ", heroDifficultShotsPercentage)

    var heroMediumShotsPercentage=getInputValue("heroShotsMediumPercentageInput");
    document.getElementById("heroShotsMediumPercentageInfo").innerHTML=heroMediumShotsPercentage;
    console.log("heroMediumShotsPercentage: ", heroMediumShotsPercentage)

    var heroEasyShotsPercentage=getInputValue("heroShotsEasyPercentageInput");
    document.getElementById("heroShotsEasyPercentageInfo").innerHTML=heroEasyShotsPercentage;
    console.log("heroEasyShotsPercentage: ", heroEasyShotsPercentage)

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
    var heroShotsDifficultCount=(getInputValue("heroShotsDifficultPercentageInput")*heroShotsCount)/100;
    document.getElementById("heroShotsDifficultCountInfo").innerHTML=heroShotsDifficultCount.toFixed(0);
    console.log("heroShotsDifficultCount: ", heroShotsDifficultCount)

    var heroShotsMediumCount=(getInputValue("heroShotsMediumPercentageInput")*heroShotsCount)/100;
    document.getElementById("heroShotsMediumCountInfo").innerHTML=heroShotsMediumCount.toFixed(0);
    console.log("heroShotsMediumCount: ", heroShotsMediumCount)

    var heroShotsEasyCount=(getInputValue("heroShotsEasyPercentageInput")*heroShotsCount)/100;
    document.getElementById("heroShotsEasyCountInfo").innerHTML=heroShotsEasyCount.toFixed(0);
    console.log("heroShotsEasyCount: ", heroShotsEasyCount)

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



    var establishingShotsDifficultMean=threePointEstablishingDifficult*establishingShotsDifficultCount
    document.getElementById("establishingShotsDifficultMeanInfo").innerHTML=establishingShotsDifficultMean.toFixed(0);
    console.log("establishingShotsDifficultMean: ", establishingShotsDifficultMean)

    var establishingShotsMediumMean=threePointEstablishingMedium*establishingShotsMediumCount
    document.getElementById("establishingShotsMediumMeanInfo").innerHTML=establishingShotsMediumMean.toFixed(0);
    console.log("establishingShotsMediumMean: ", establishingShotsMediumMean)

    var establishingShotsEasyMean=threePointEstablishingEasy*establishingShotsEasyCount
    document.getElementById("establishingShotsEasyMeanInfo").innerHTML=establishingShotsEasyMean.toFixed(0);
    console.log("threePointestablishingEasy:establishingShotsCount ", threePointEstablishingEasy,establishingShotsCount);

    var establishingShotsMean=establishingShotsDifficultMean+establishingShotsMediumMean+establishingShotsEasyMean
    document.getElementById("totalMeanEstablishingHeroInfo").innerHTML=establishingShotsMean.toFixed(0);
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
    document.getElementById("totalMeanMasterHeroInfo").innerHTML=masterShotsMean.toFixed(0);
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
    document.getElementById("totalMeanChildHeroInfo").innerHTML=childShotsMean.toFixed(0);
    console.log("totalMeanchildInfo: ", childShotsMean)

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

    //Standard deviation totals Establishing
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