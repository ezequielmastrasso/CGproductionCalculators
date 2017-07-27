


function updateInformationPanel (){
    

    var leadArtists =getInputValue("leadsArtistsCountInput");
  	var artist =getInputValue("artistCountInput");
		var juniorArtists=getInputValue("juniorArtistsCountInput");
    var artistsCapacity=getInputValue("artistsCapacityInput");
    var juniorArtistsCapacity=getInputValue("juniorArtistsCapacityInput");
    var leadArtistsCapacity=getInputValue("leadArtistsCapacityInput");

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


    var assetACount=getInputValue("assetACountInput");

    var assetADifficultPercent=getInputValue("assetADifficultPercentageInput");
    var assetADifficultBest=getInputValue("estimateAssetADifficultBestInput");
    var assetADifficultMostLikely=getInputValue("estimateAssetADifficultMostLikelyInput");
    var assetADifficultWorst=getInputValue("estimateAssetADifficultWorstInput");

    var assetAMediumPercent=getInputValue("assetAMediumPercentageInput");
    var assetAMediumBest=getInputValue("estimateAssetAMediumBestInput");
    var assetAMediumMostLikely=getInputValue("estimateAssetAMediumMostLikelyInput");
    var assetAMediumWorst=getInputValue("estimateAssetAMediumWorstInput");

    var assetAEasyPercent=getInputValue("assetAEasyPercentageInput");
    var assetAEasyBest=getInputValue("estimateAssetAEasyBestInput");
    var assetAEasyMostLikely=getInputValue("estimateAssetAEasyMostLikelyInput");
    var assetAEasyWorst=getInputValue("estimateAssetAEasyWorstInput");
    
    var assetADifficult=calculateAsset2("assetA",
                                    assetACount,
                                    assetADifficultPercent,
                                    assetADifficultBest,
                                    assetADifficultMostLikely,
                                    assetADifficultWorst,
                                    teamCapacity);
    var assetAMedium=calculateAsset2("assetA",
                                    assetACount,
                                    assetAMediumPercent,
                                    assetAMediumBest,
                                    assetAMediumMostLikely,
                                    assetAMediumWorst,
                                    teamCapacity);
    var assetAEasy=calculateAsset2("assetA",
                                    assetACount,
                                    assetAEasyPercent,
                                    assetAEasyBest,
                                    assetAEasyMostLikely,
                                    assetAEasyWorst,
                                    teamCapacity);   
    

    var assetBCount=getInputValue("assetBCountInput");

    var assetBDifficultPercent=getInputValue("assetBDifficultPercentageInput");
    var assetBDifficultBest=getInputValue("estimateAssetBDifficultBestInput");
    var assetBDifficultMostLikely=getInputValue("estimateAssetBDifficultMostLikelyInput");
    var assetBDifficultWorst=getInputValue("estimateAssetBDifficultWorstInput");

    var assetBMediumPercent=getInputValue("assetBMediumPercentageInput");
    var assetBMediumBest=getInputValue("estimateAssetBMediumBestInput");
    var assetBMediumMostLikely=getInputValue("estimateAssetBMediumMostLikelyInput");
    var assetBMediumWorst=getInputValue("estimateAssetBMediumWorstInput");

    var assetBEasyPercent=getInputValue("assetBEasyPercentageInput");
    var assetBEasyBest=getInputValue("estimateAssetBEasyBestInput");
    var assetBEasyMostLikely=getInputValue("estimateAssetBEasyMostLikelyInput");
    var assetBEasyWorst=getInputValue("estimateAssetBEasyWorstInput");
    
    var assetBDifficult=calculateAsset2("assetB",
                                    assetBCount,
                                    assetBDifficultPercent,
                                    assetBDifficultBest,
                                    assetBDifficultMostLikely,
                                    assetBDifficultWorst,
                                    teamCapacity);
    var assetBMedium=calculateAsset2("assetB",
                                    assetBCount,
                                    assetBMediumPercent,
                                    assetBMediumBest,
                                    assetBMediumMostLikely,
                                    assetBMediumWorst,
                                    teamCapacity);
    var assetBEasy=calculateAsset2("assetB",
                                    assetBCount,
                                    assetBEasyPercent,
                                    assetBEasyBest,
                                    assetBEasyMostLikely,
                                    assetBEasyWorst,
                                    teamCapacity);
    var assetCCount=getInputValue("assetCCountInput");

    var assetCDifficultPercent=getInputValue("assetCDifficultPercentageInput");
    var assetCDifficultBest=getInputValue("estimateAssetCDifficultBestInput");
    var assetCDifficultMostLikely=getInputValue("estimateAssetCDifficultMostLikelyInput");
    var assetCDifficultWorst=getInputValue("estimateAssetCDifficultWorstInput");

    var assetCMediumPercent=getInputValue("assetCMediumPercentageInput");
    var assetCMediumBest=getInputValue("estimateAssetCMediumBestInput");
    var assetCMediumMostLikely=getInputValue("estimateAssetCMediumMostLikelyInput");
    var assetCMediumWorst=getInputValue("estimateAssetCMediumWorstInput");

    var assetCEasyPercent=getInputValue("assetCEasyPercentageInput");
    var assetCEasyBest=getInputValue("estimateAssetCEasyBestInput");
    var assetCEasyMostLikely=getInputValue("estimateAssetCEasyMostLikelyInput");
    var assetCEasyWorst=getInputValue("estimateAssetCEasyWorstInput");
    
    var assetCDifficult=calculateAsset2("assetC",
                                    assetCCount,
                                    assetCDifficultPercent,
                                    assetCDifficultBest,
                                    assetCDifficultMostLikely,
                                    assetCDifficultWorst,
                                    teamCapacity);
    var assetCMedium=calculateAsset2("assetC",
                                    assetCCount,
                                    assetCMediumPercent,
                                    assetCMediumBest,
                                    assetCMediumMostLikely,
                                    assetCMediumWorst,
                                    teamCapacity);
    var assetCEasy=calculateAsset2("assetC",
                                    assetCCount,
                                    assetCEasyPercent,
                                    assetCEasyBest,
                                    assetCEasyMostLikely,
                                    assetCEasyWorst,
                                    teamCapacity);   

    var assetDCount=getInputValue("assetDCountInput");

    var assetDDifficultPercent=getInputValue("assetDDifficultPercentageInput");
    var assetDDifficultBest=getInputValue("estimateAssetDDifficultBestInput");
    var assetDDifficultMostLikely=getInputValue("estimateAssetDDifficultMostLikelyInput");
    var assetDDifficultWorst=getInputValue("estimateAssetDDifficultWorstInput");

    var assetDMediumPercent=getInputValue("assetDMediumPercentageInput");
    var assetDMediumBest=getInputValue("estimateAssetDMediumBestInput");
    var assetDMediumMostLikely=getInputValue("estimateAssetDMediumMostLikelyInput");
    var assetDMediumWorst=getInputValue("estimateAssetDMediumWorstInput");

    var assetDEasyPercent=getInputValue("assetDEasyPercentageInput");
    var assetDEasyBest=getInputValue("estimateAssetDEasyBestInput");
    var assetDEasyMostLikely=getInputValue("estimateAssetDEasyMostLikelyInput");
    var assetDEasyWorst=getInputValue("estimateAssetDEasyWorstInput");
    
    var assetDDifficult=calculateAsset2("assetD",
                                    assetDCount,
                                    assetDDifficultPercent,
                                    assetDDifficultBest,
                                    assetDDifficultMostLikely,
                                    assetDDifficultWorst,
                                    teamCapacity);
    var assetDMedium=calculateAsset2("assetD",
                                    assetDCount,
                                    assetDMediumPercent,
                                    assetDMediumBest,
                                    assetDMediumMostLikely,
                                    assetDMediumWorst,
                                    teamCapacity);
    var assetDEasy=calculateAsset2("assetD",
                                    assetDCount,
                                    assetDEasyPercent,
                                    assetDEasyBest,
                                    assetDEasyMostLikely,
                                    assetDEasyWorst,
                                    teamCapacity);
    
    var assetECount=getInputValue("assetECountInput");

    var assetEDifficultPercent=getInputValue("assetEDifficultPercentageInput");
    var assetEDifficultBest=getInputValue("estimateAssetEDifficultBestInput");
    var assetEDifficultMostLikely=getInputValue("estimateAssetEDifficultMostLikelyInput");
    var assetEDifficultWorst=getInputValue("estimateAssetEDifficultWorstInput");

    var assetEMediumPercent=getInputValue("assetEMediumPercentageInput");
    var assetEMediumBest=getInputValue("estimateAssetEMediumBestInput");
    var assetEMediumMostLikely=getInputValue("estimateAssetEMediumMostLikelyInput");
    var assetEMediumWorst=getInputValue("estimateAssetEMediumWorstInput");

    var assetEEasyPercent=getInputValue("assetEEasyPercentageInput");
    var assetEEasyBest=getInputValue("estimateAssetEEasyBestInput");
    var assetEEasyMostLikely=getInputValue("estimateAssetEEasyMostLikelyInput");
    var assetEEasyWorst=getInputValue("estimateAssetEEasyWorstInput");
    
    var assetEDifficult=calculateAsset2("assetE",
                                    assetECount,
                                    assetEDifficultPercent,
                                    assetEDifficultBest,
                                    assetEDifficultMostLikely,
                                    assetEDifficultWorst,
                                    teamCapacity);
    var assetEMedium=calculateAsset2("assetE",
                                    assetECount,
                                    assetEMediumPercent,
                                    assetEMediumBest,
                                    assetEMediumMostLikely,
                                    assetEMediumWorst,
                                    teamCapacity);
    var assetEEasy=calculateAsset2("assetE",
                                    assetECount,
                                    assetEEasyPercent,
                                    assetEEasyBest,
                                    assetEEasyMostLikely,
                                    assetEEasyWorst,
                                    teamCapacity);
    var assetFCount=getInputValue("assetFCountInput");

    var assetFDifficultPercent=getInputValue("assetFDifficultPercentageInput");
    var assetFDifficultBest=getInputValue("estimateAssetFDifficultBestInput");
    var assetFDifficultMostLikely=getInputValue("estimateAssetFDifficultMostLikelyInput");
    var assetFDifficultWorst=getInputValue("estimateAssetFDifficultWorstInput");

    var assetFMediumPercent=getInputValue("assetFMediumPercentageInput");
    var assetFMediumBest=getInputValue("estimateAssetFMediumBestInput");
    var assetFMediumMostLikely=getInputValue("estimateAssetFMediumMostLikelyInput");
    var assetFMediumWorst=getInputValue("estimateAssetFMediumWorstInput");

    var assetFEasyPercent=getInputValue("assetFEasyPercentageInput");
    var assetFEasyBest=getInputValue("estimateAssetFEasyBestInput");
    var assetFEasyMostLikely=getInputValue("estimateAssetFEasyMostLikelyInput");
    var assetFEasyWorst=getInputValue("estimateAssetFEasyWorstInput");
    
    var assetFDifficult=calculateAsset2("assetF",
                                    assetFCount,
                                    assetFDifficultPercent,
                                    assetFDifficultBest,
                                    assetFDifficultMostLikely,
                                    assetFDifficultWorst,
                                    teamCapacity);
    var assetFMedium=calculateAsset2("assetF",
                                    assetFCount,
                                    assetFMediumPercent,
                                    assetFMediumBest,
                                    assetFMediumMostLikely,
                                    assetFMediumWorst,
                                    teamCapacity);
    var assetFEasy=calculateAsset2("assetF",
                                    assetFCount,
                                    assetFEasyPercent,
                                    assetFEasyBest,
                                    assetFEasyMostLikely,
                                    assetFEasyWorst,
                                    teamCapacity);

    var assetGCount=getInputValue("assetGCountInput");

    var assetGDifficultPercent=getInputValue("assetGDifficultPercentageInput");
    var assetGDifficultBest=getInputValue("estimateAssetGDifficultBestInput");
    var assetGDifficultMostLikely=getInputValue("estimateAssetGDifficultMostLikelyInput");
    var assetGDifficultWorst=getInputValue("estimateAssetGDifficultWorstInput");

    var assetGMediumPercent=getInputValue("assetGMediumPercentageInput");
    var assetGMediumBest=getInputValue("estimateAssetGMediumBestInput");
    var assetGMediumMostLikely=getInputValue("estimateAssetGMediumMostLikelyInput");
    var assetGMediumWorst=getInputValue("estimateAssetGMediumWorstInput");

    var assetGEasyPercent=getInputValue("assetGEasyPercentageInput");
    var assetGEasyBest=getInputValue("estimateAssetGEasyBestInput");
    var assetGEasyMostLikely=getInputValue("estimateAssetGEasyMostLikelyInput");
    var assetGEasyWorst=getInputValue("estimateAssetGEasyWorstInput");
    
    var assetGDifficult=calculateAsset2("assetG",
                                    assetGCount,
                                    assetGDifficultPercent,
                                    assetGDifficultBest,
                                    assetGDifficultMostLikely,
                                    assetGDifficultWorst,
                                    teamCapacity);
    var assetGMedium=calculateAsset2("assetG",
                                    assetGCount,
                                    assetGMediumPercent,
                                    assetGMediumBest,
                                    assetGMediumMostLikely,
                                    assetGMediumWorst,
                                    teamCapacity);
    var assetGEasy=calculateAsset2("assetG",
                                    assetGCount,
                                    assetGEasyPercent,
                                    assetGEasyBest,
                                    assetGEasyMostLikely,
                                    assetGEasyWorst,
                                    teamCapacity);

    var assetHCount=getInputValue("assetHCountInput");

    var assetHDifficultPercent=getInputValue("assetHDifficultPercentageInput");
    var assetHDifficultBest=getInputValue("estimateAssetHDifficultBestInput");
    var assetHDifficultMostLikely=getInputValue("estimateAssetHDifficultMostLikelyInput");
    var assetHDifficultWorst=getInputValue("estimateAssetHDifficultWorstInput");

    var assetHMediumPercent=getInputValue("assetHMediumPercentageInput");
    var assetHMediumBest=getInputValue("estimateAssetHMediumBestInput");
    var assetHMediumMostLikely=getInputValue("estimateAssetHMediumMostLikelyInput");
    var assetHMediumWorst=getInputValue("estimateAssetHMediumWorstInput");

    var assetHEasyPercent=getInputValue("assetHEasyPercentageInput");
    var assetHEasyBest=getInputValue("estimateAssetHEasyBestInput");
    var assetHEasyMostLikely=getInputValue("estimateAssetHEasyMostLikelyInput");
    var assetHEasyWorst=getInputValue("estimateAssetHEasyWorstInput");
    
    var assetHDifficult=calculateAsset2("assetH",
                                    assetHCount,
                                    assetHDifficultPercent,
                                    assetHDifficultBest,
                                    assetHDifficultMostLikely,
                                    assetHDifficultWorst,
                                    teamCapacity);
    var assetHMedium=calculateAsset2("assetH",
                                    assetHCount,
                                    assetHMediumPercent,
                                    assetHMediumBest,
                                    assetHMediumMostLikely,
                                    assetHMediumWorst,
                                    teamCapacity);
    var assetHEasy=calculateAsset2("assetH",
                                    assetHCount,
                                    assetHEasyPercent,
                                    assetHEasyBest,
                                    assetHEasyMostLikely,
                                    assetHEasyWorst,
                                    teamCapacity);


    var assetICount=getInputValue("assetICountInput");

    var assetIDifficultPercent=getInputValue("assetIDifficultPercentageInput");
    var assetIDifficultBest=getInputValue("estimateAssetIDifficultBestInput");
    var assetIDifficultMostLikely=getInputValue("estimateAssetIDifficultMostLikelyInput");
    var assetIDifficultWorst=getInputValue("estimateAssetIDifficultWorstInput");

    var assetIMediumPercent=getInputValue("assetIMediumPercentageInput");
    var assetIMediumBest=getInputValue("estimateAssetIMediumBestInput");
    var assetIMediumMostLikely=getInputValue("estimateAssetIMediumMostLikelyInput");
    var assetIMediumWorst=getInputValue("estimateAssetIMediumWorstInput");

    var assetIEasyPercent=getInputValue("assetIEasyPercentageInput");
    var assetIEasyBest=getInputValue("estimateAssetIEasyBestInput");
    var assetIEasyMostLikely=getInputValue("estimateAssetIEasyMostLikelyInput");
    var assetIEasyWorst=getInputValue("estimateAssetIEasyWorstInput");
    
    var assetIDifficult=calculateAsset2("assetI",
                                    assetICount,
                                    assetIDifficultPercent,
                                    assetIDifficultBest,
                                    assetIDifficultMostLikely,
                                    assetIDifficultWorst,
                                    teamCapacity);
    var assetIMedium=calculateAsset2("assetI",
                                    assetICount,
                                    assetIMediumPercent,
                                    assetIMediumBest,
                                    assetIMediumMostLikely,
                                    assetIMediumWorst,
                                    teamCapacity);
    var assetIEasy=calculateAsset2("assetI",
                                    assetICount,
                                    assetIEasyPercent,
                                    assetIEasyBest,
                                    assetIEasyMostLikely,
                                    assetIEasyWorst,
                                    teamCapacity);

    var assetJCount=getInputValue("assetJCountInput");

    var assetJDifficultPercent=getInputValue("assetJDifficultPercentageInput");
    var assetJDifficultBest=getInputValue("estimateAssetJDifficultBestInput");
    var assetJDifficultMostLikely=getInputValue("estimateAssetJDifficultMostLikelyInput");
    var assetJDifficultWorst=getInputValue("estimateAssetJDifficultWorstInput");

    var assetJMediumPercent=getInputValue("assetJMediumPercentageInput");
    var assetJMediumBest=getInputValue("estimateAssetJMediumBestInput");
    var assetJMediumMostLikely=getInputValue("estimateAssetJMediumMostLikelyInput");
    var assetJMediumWorst=getInputValue("estimateAssetJMediumWorstInput");

    var assetJEasyPercent=getInputValue("assetJEasyPercentageInput");
    var assetJEasyBest=getInputValue("estimateAssetJEasyBestInput");
    var assetJEasyMostLikely=getInputValue("estimateAssetJEasyMostLikelyInput");
    var assetJEasyWorst=getInputValue("estimateAssetJEasyWorstInput");
    
    var assetJDifficult=calculateAsset2("assetJ",
                                    assetJCount,
                                    assetJDifficultPercent,
                                    assetJDifficultBest,
                                    assetJDifficultMostLikely,
                                    assetJDifficultWorst,
                                    teamCapacity);
    var assetJMedium=calculateAsset2("assetJ",
                                    assetJCount,
                                    assetJMediumPercent,
                                    assetJMediumBest,
                                    assetJMediumMostLikely,
                                    assetJMediumWorst,
                                    teamCapacity);
    var assetJEasy=calculateAsset2("assetJ",
                                    assetJCount,
                                    assetJEasyPercent,
                                    assetJEasyBest,
                                    assetJEasyMostLikely,
                                    assetJEasyWorst,
                                    teamCapacity);

    var assetKCount=getInputValue("assetKCountInput");

    var assetKDifficultPercent=getInputValue("assetKDifficultPercentageInput");
    var assetKDifficultBest=getInputValue("estimateAssetKDifficultBestInput");
    var assetKDifficultMostLikely=getInputValue("estimateAssetKDifficultMostLikelyInput");
    var assetKDifficultWorst=getInputValue("estimateAssetKDifficultWorstInput");

    var assetKMediumPercent=getInputValue("assetKMediumPercentageInput");
    var assetKMediumBest=getInputValue("estimateAssetKMediumBestInput");
    var assetKMediumMostLikely=getInputValue("estimateAssetKMediumMostLikelyInput");
    var assetKMediumWorst=getInputValue("estimateAssetKMediumWorstInput");

    var assetKEasyPercent=getInputValue("assetKEasyPercentageInput");
    var assetKEasyBest=getInputValue("estimateAssetKEasyBestInput");
    var assetKEasyMostLikely=getInputValue("estimateAssetKEasyMostLikelyInput");
    var assetKEasyWorst=getInputValue("estimateAssetKEasyWorstInput");
    
    var assetKDifficult=calculateAsset2("assetK",
                                    assetKCount,
                                    assetKDifficultPercent,
                                    assetKDifficultBest,
                                    assetKDifficultMostLikely,
                                    assetKDifficultWorst,
                                    teamCapacity);
    var assetKMedium=calculateAsset2("assetK",
                                    assetKCount,
                                    assetKMediumPercent,
                                    assetKMediumBest,
                                    assetKMediumMostLikely,
                                    assetKMediumWorst,
                                    teamCapacity);
    var assetKEasy=calculateAsset2("assetK",
                                    assetKCount,
                                    assetKEasyPercent,
                                    assetKEasyBest,
                                    assetKEasyMostLikely,
                                    assetKEasyWorst,
                                    teamCapacity);

    var assetLCount=getInputValue("assetLCountInput");

    var assetLDifficultPercent=getInputValue("assetLDifficultPercentageInput");
    var assetLDifficultBest=getInputValue("estimateAssetLDifficultBestInput");
    var assetLDifficultMostLikely=getInputValue("estimateAssetLDifficultMostLikelyInput");
    var assetLDifficultWorst=getInputValue("estimateAssetLDifficultWorstInput");

    var assetLMediumPercent=getInputValue("assetLMediumPercentageInput");
    var assetLMediumBest=getInputValue("estimateAssetLMediumBestInput");
    var assetLMediumMostLikely=getInputValue("estimateAssetLMediumMostLikelyInput");
    var assetLMediumWorst=getInputValue("estimateAssetLMediumWorstInput");

    var assetLEasyPercent=getInputValue("assetLEasyPercentageInput");
    var assetLEasyBest=getInputValue("estimateAssetLEasyBestInput");
    var assetLEasyMostLikely=getInputValue("estimateAssetLEasyMostLikelyInput");
    var assetLEasyWorst=getInputValue("estimateAssetLEasyWorstInput");
    
    var assetLDifficult=calculateAsset2("assetL",
                                    assetLCount,
                                    assetLDifficultPercent,
                                    assetLDifficultBest,
                                    assetLDifficultMostLikely,
                                    assetLDifficultWorst,
                                    teamCapacity);
    var assetLMedium=calculateAsset2("assetL",
                                    assetLCount,
                                    assetLMediumPercent,
                                    assetLMediumBest,
                                    assetLMediumMostLikely,
                                    assetLMediumWorst,
                                    teamCapacity);
    var assetLEasy=calculateAsset2("assetL",
                                    assetLCount,
                                    assetLEasyPercent,
                                    assetLEasyBest,
                                    assetLEasyMostLikely,
                                    assetLEasyWorst,
                                    teamCapacity);

    var assetMCount=getInputValue("assetMCountInput");

    var assetMDifficultPercent=getInputValue("assetMDifficultPercentageInput");
    var assetMDifficultBest=getInputValue("estimateAssetMDifficultBestInput");
    var assetMDifficultMostLikely=getInputValue("estimateAssetMDifficultMostLikelyInput");
    var assetMDifficultWorst=getInputValue("estimateAssetMDifficultWorstInput");

    var assetMMediumPercent=getInputValue("assetMMediumPercentageInput");
    var assetMMediumBest=getInputValue("estimateAssetMMediumBestInput");
    var assetMMediumMostLikely=getInputValue("estimateAssetMMediumMostLikelyInput");
    var assetMMediumWorst=getInputValue("estimateAssetMMediumWorstInput");

    var assetMEasyPercent=getInputValue("assetMEasyPercentageInput");
    var assetMEasyBest=getInputValue("estimateAssetMEasyBestInput");
    var assetMEasyMostLikely=getInputValue("estimateAssetMEasyMostLikelyInput");
    var assetMEasyWorst=getInputValue("estimateAssetMEasyWorstInput");
    
    var assetMDifficult=calculateAsset2("assetM",
                                    assetMCount,
                                    assetMDifficultPercent,
                                    assetMDifficultBest,
                                    assetMDifficultMostLikely,
                                    assetMDifficultWorst,
                                    teamCapacity);
    var assetMMedium=calculateAsset2("assetM",
                                    assetMCount,
                                    assetMMediumPercent,
                                    assetMMediumBest,
                                    assetMMediumMostLikely,
                                    assetMMediumWorst,
                                    teamCapacity);
    var assetMEasy=calculateAsset2("assetM",
                                    assetMCount,
                                    assetMEasyPercent,
                                    assetMEasyBest,
                                    assetMEasyMostLikely,
                                    assetMEasyWorst,
                                    teamCapacity);

    var assetNCount=getInputValue("assetNCountInput");

    var assetNDifficultPercent=getInputValue("assetNDifficultPercentageInput");
    var assetNDifficultBest=getInputValue("estimateAssetNDifficultBestInput");
    var assetNDifficultMostLikely=getInputValue("estimateAssetNDifficultMostLikelyInput");
    var assetNDifficultWorst=getInputValue("estimateAssetNDifficultWorstInput");

    var assetNMediumPercent=getInputValue("assetNMediumPercentageInput");
    var assetNMediumBest=getInputValue("estimateAssetNMediumBestInput");
    var assetNMediumMostLikely=getInputValue("estimateAssetNMediumMostLikelyInput");
    var assetNMediumWorst=getInputValue("estimateAssetNMediumWorstInput");

    var assetNEasyPercent=getInputValue("assetNEasyPercentageInput");
    var assetNEasyBest=getInputValue("estimateAssetNEasyBestInput");
    var assetNEasyMostLikely=getInputValue("estimateAssetNEasyMostLikelyInput");
    var assetNEasyWorst=getInputValue("estimateAssetNEasyWorstInput");
    
    var assetNDifficult=calculateAsset2("assetN",
                                    assetNCount,
                                    assetNDifficultPercent,
                                    assetNDifficultBest,
                                    assetNDifficultMostLikely,
                                    assetNDifficultWorst,
                                    teamCapacity);
    var assetNMedium=calculateAsset2("assetN",
                                    assetNCount,
                                    assetNMediumPercent,
                                    assetNMediumBest,
                                    assetNMediumMostLikely,
                                    assetNMediumWorst,
                                    teamCapacity);
    var assetNEasy=calculateAsset2("assetN",
                                    assetNCount,
                                    assetNEasyPercent,
                                    assetNEasyBest,
                                    assetNEasyMostLikely,
                                    assetNEasyWorst,
                                    teamCapacity);

    var assetOCount=getInputValue("assetOCountInput");

    var assetODifficultPercent=getInputValue("assetODifficultPercentageInput");
    var assetODifficultBest=getInputValue("estimateAssetODifficultBestInput");
    var assetODifficultMostLikely=getInputValue("estimateAssetODifficultMostLikelyInput");
    var assetODifficultWorst=getInputValue("estimateAssetODifficultWorstInput");

    var assetOMediumPercent=getInputValue("assetOMediumPercentageInput");
    var assetOMediumBest=getInputValue("estimateAssetOMediumBestInput");
    var assetOMediumMostLikely=getInputValue("estimateAssetOMediumMostLikelyInput");
    var assetOMediumWorst=getInputValue("estimateAssetOMediumWorstInput");

    var assetOEasyPercent=getInputValue("assetOEasyPercentageInput");
    var assetOEasyBest=getInputValue("estimateAssetOEasyBestInput");
    var assetOEasyMostLikely=getInputValue("estimateAssetOEasyMostLikelyInput");
    var assetOEasyWorst=getInputValue("estimateAssetOEasyWorstInput");
    
    var assetODifficult=calculateAsset2("assetO",
                                    assetOCount,
                                    assetODifficultPercent,
                                    assetODifficultBest,
                                    assetODifficultMostLikely,
                                    assetODifficultWorst,
                                    teamCapacity);
    var assetOMedium=calculateAsset2("assetO",
                                    assetOCount,
                                    assetOMediumPercent,
                                    assetOMediumBest,
                                    assetOMediumMostLikely,
                                    assetOMediumWorst,
                                    teamCapacity);
    var assetOEasy=calculateAsset2("assetO",
                                    assetOCount,
                                    assetOEasyPercent,
                                    assetOEasyBest,
                                    assetOEasyMostLikely,
                                    assetOEasyWorst,
                                    teamCapacity);


    





    //criticalPathMeans
    var criticalPathAssetA = assetADifficult.meanCriticalPath+
                              assetAMedium.meanCriticalPath+
                              assetAEasy.meanCriticalPath;
    var criticalPathAssetB = assetBDifficult.meanCriticalPath+
                              assetBMedium.meanCriticalPath+
                              assetBEasy.meanCriticalPath;
    var criticalPathAssetC = assetCDifficult.meanCriticalPath+
                              assetCMedium.meanCriticalPath+
                              assetCEasy.meanCriticalPath;
    var criticalPathAssetD = assetDDifficult.meanCriticalPath+
                              assetDMedium.meanCriticalPath+
                              assetDEasy.meanCriticalPath;
    var criticalPathAssetE = assetEDifficult.meanCriticalPath+
                              assetEMedium.meanCriticalPath+
                              assetEEasy.meanCriticalPath;
    var criticalPathAssetF = assetFDifficult.meanCriticalPath+
                              assetFMedium.meanCriticalPath+
                              assetFEasy.meanCriticalPath;
    var criticalPathAssetG = assetGDifficult.meanCriticalPath+
                              assetGMedium.meanCriticalPath+
                              assetGEasy.meanCriticalPath;
    var criticalPathAssetH = assetHDifficult.meanCriticalPath+
                              assetHMedium.meanCriticalPath+
                              assetHEasy.meanCriticalPath;
    var criticalPathAssetI = assetIDifficult.meanCriticalPath+
                              assetIMedium.meanCriticalPath+
                              assetIEasy.meanCriticalPath;
    var criticalPathAssetJ = assetJDifficult.meanCriticalPath+
                              assetJMedium.meanCriticalPath+
                              assetJEasy.meanCriticalPath;
    var criticalPathAssetK = assetKDifficult.meanCriticalPath+
                              assetKMedium.meanCriticalPath+
                              assetKEasy.meanCriticalPath;
    var criticalPathAssetL = assetLDifficult.meanCriticalPath+
                              assetLMedium.meanCriticalPath+
                              assetLEasy.meanCriticalPath;
    var criticalPathAssetM = assetMDifficult.meanCriticalPath+
                              assetMMedium.meanCriticalPath+
                              assetMEasy.meanCriticalPath;
    var criticalPathAssetN = assetNDifficult.meanCriticalPath+
                              assetNMedium.meanCriticalPath+
                              assetNEasy.meanCriticalPath;
    var criticalPathAssetO = assetODifficult.meanCriticalPath+
                              assetOMedium.meanCriticalPath+
                              assetOEasy.meanCriticalPath;

    criticalPathMean=criticalPathAssetA+
                      criticalPathAssetB+
                      criticalPathAssetC+
                      criticalPathAssetD+
                      criticalPathAssetE+
                      criticalPathAssetF+
                      criticalPathAssetG+
                      criticalPathAssetH+
                      criticalPathAssetI+
                      criticalPathAssetJ+
                      criticalPathAssetK+
                      criticalPathAssetL+
                      criticalPathAssetM+
                      criticalPathAssetN+
                      criticalPathAssetO;
    console.log("criticalPathMean: ", criticalPathMean)
    writeToPage("criticalPathMean",criticalPathMean.toFixed(2));


    //projectManDaysInfo
    var totalAssetMean=assetADifficult.meanTotal+
                        assetAMedium.meanTotal+
                        assetAEasy.meanTotal+
                        assetBDifficult.meanTotal+
                        assetBMedium.meanTotal+
                        assetBEasy.meanTotal+
                        assetCDifficult.meanTotal+
                        assetCMedium.meanTotal+
                        assetCEasy.meanTotal+
                        assetDDifficult.meanTotal+
                        assetDMedium.meanTotal+
                        assetDEasy.meanTotal+
                        assetEDifficult.meanTotal+
                        assetEMedium.meanTotal+
                        assetEEasy.meanTotal+
                        assetFDifficult.meanTotal+
                        assetFMedium.meanTotal+
                        assetFEasy.meanTotal+
                        assetGDifficult.meanTotal+
                        assetGMedium.meanTotal+
                        assetGEasy.meanTotal+
                        assetHDifficult.meanTotal+
                        assetHMedium.meanTotal+
                        assetHEasy.meanTotal+
                        assetIDifficult.meanTotal+
                        assetIMedium.meanTotal+
                        assetIEasy.meanTotal+
                        assetJDifficult.meanTotal+
                        assetJMedium.meanTotal+
                        assetJEasy.meanTotal+
                        assetKDifficult.meanTotal+
                        assetKMedium.meanTotal+
                        assetKEasy.meanTotal+
                        assetLDifficult.meanTotal+
                        assetLMedium.meanTotal+
                        assetLEasy.meanTotal+
                        assetMDifficult.meanTotal+
                        assetMMedium.meanTotal+
                        assetMEasy.meanTotal+
                        assetNDifficult.meanTotal+
                        assetNMedium.meanTotal+
                        assetNEasy.meanTotal+
                        assetODifficult.meanTotal+
                        assetOMedium.meanTotal+
                        assetOEasy.meanTotal;
                      
    var projectManDays =totalAssetMean;  //totalmean/teamCapacity
    writeToPage("projectManDaysInfo",projectManDays.toFixed(2));
    writeToPage("totalMeanInfo",projectManDays.toFixed(2));
    

    

    totalCriticalPathVariance=assetADifficult.criticalPathVarianceTotal+
                              assetAMedium.criticalPathVarianceTotal+
                              assetAEasy.criticalPathVarianceTotal+
                              assetBDifficult.criticalPathVarianceTotal+
                              assetBMedium.criticalPathVarianceTotal+
                              assetBEasy.criticalPathVarianceTotal+
                              assetCDifficult.criticalPathVarianceTotal+
                              assetCMedium.criticalPathVarianceTotal+
                              assetCEasy.criticalPathVarianceTotal+
                              assetDDifficult.criticalPathVarianceTotal+
                              assetDMedium.criticalPathVarianceTotal+
                              assetDEasy.criticalPathVarianceTotal+
                              assetEDifficult.criticalPathVarianceTotal+
                              assetEMedium.criticalPathVarianceTotal+
                              assetEEasy.criticalPathVarianceTotal+
                              assetFDifficult.criticalPathVarianceTotal+
                              assetFMedium.criticalPathVarianceTotal+
                              assetFEasy.criticalPathVarianceTotal+
                              assetGDifficult.criticalPathVarianceTotal+
                              assetGMedium.criticalPathVarianceTotal+
                              assetGEasy.criticalPathVarianceTotal+
                              assetHDifficult.criticalPathVarianceTotal+
                              assetHMedium.criticalPathVarianceTotal+
                              assetHEasy.criticalPathVarianceTotal+
                              assetIDifficult.criticalPathVarianceTotal+
                              assetIMedium.criticalPathVarianceTotal+
                              assetIEasy.criticalPathVarianceTotal+
                              assetJDifficult.criticalPathVarianceTotal+
                              assetJMedium.criticalPathVarianceTotal+
                              assetJEasy.criticalPathVarianceTotal+
                              assetKDifficult.criticalPathVarianceTotal+
                              assetKMedium.criticalPathVarianceTotal+
                              assetKEasy.criticalPathVarianceTotal+
                              assetLDifficult.criticalPathVarianceTotal+
                              assetLMedium.criticalPathVarianceTotal+
                              assetLEasy.criticalPathVarianceTotal+
                              assetMDifficult.criticalPathVarianceTotal+
                              assetMMedium.criticalPathVarianceTotal+
                              assetMEasy.criticalPathVarianceTotal+
                              assetNDifficult.criticalPathVarianceTotal+
                              assetNMedium.criticalPathVarianceTotal+
                              assetNEasy.criticalPathVarianceTotal+
                              assetODifficult.criticalPathVarianceTotal+
                              assetOMedium.criticalPathVarianceTotal+
                              assetOEasy.criticalPathVarianceTotal;
    writeToPage("criticalPathVariance",totalCriticalPathVariance.toFixed(4));

    
    criticalPathStandardDeviation=Math.sqrt(totalCriticalPathVariance,2);
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


    console.log("----------------------------------------------------")
    



    
    google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Shots', 'Percentage'],
          ['Main chars. Difficult',     assetADifficult.count],
          ['Main chars. Medium',     assetAMedium.count],
          ['Main chars. Easy',     assetAEasy.count],
          ['Main Chars. var. Difficult',     assetBDifficult.count],
          ['Main Chars. var. Medium',     assetBMedium.count],
          ['Main Chars. var. Easy',     assetBEasy.count],
          ['Sec Chars. Difficult',     assetCDifficult.count],
          ['Sec Chars. Medium',     assetCMedium.count],
          ['Sec Chars. Easy',     assetCEasy.count],
          ['Sec Chars. var. Difficult',     assetDDifficult.count],
          ['Sec Chars. var. Medium',     assetDMedium.count],
          ['Sec Chars. var. Easy',     assetDEasy.count],
          ['Inci. Chars. Difficult',     assetEDifficult.count],
          ['Inci. Chars. Medium',     assetEMedium.count],
          ['Inci. Chars. Easy',     assetEEasy.count],
          ['Inci. Chars. var. Difficult',     assetFDifficult.count],
          ['Inci. Chars. var. Medium',     assetFMedium.count],
          ['Inci. Chars. var. Easy',     assetFEasy.count],
          ['Crowd Chars. Difficult',     assetGDifficult.count],
          ['Crowd Chars. Medium',     assetGMedium.count],
          ['Crowd Chars. Easy',     assetGEasy.count],
          ['Crowd Chars. var. Difficult',     assetHDifficult.count],
          ['Crowd Chars. var. Medium',     assetHMedium.count],
          ['Crowd Chars. var. Easy',     assetHEasy.count],
          ['Sets Difficult',     assetIDifficult.count],
          ['Sets Medium',     assetIMedium.count],
          ['Sets Easy',     assetIEasy.count],
          ['Set extra Elm. Difficult',     assetJDifficult.count],
          ['Set extra Elm. Medium',     assetJMedium.count],
          ['Set extra Elm. Easy',     assetJEasy.count],
          ['Set Foliage Difficult',     assetKDifficult.count],
          ['Set Foliage Medium',     assetKMedium.count],
          ['Set Foliage Easy',     assetKEasy.count],
          ['Set Foliage var. Difficult',     assetLDifficult.count],
          ['Set Foliage var. Medium',     assetLMedium.count],
          ['Set Foliage var. Easy',     assetLEasy.count],
          ['Props Difficult',     assetMDifficult.count],
          ['Props Medium',     assetMMedium.count],
          ['Props Easy',     assetMEasy.count],
          ['Props var. Difficult',     assetNDifficult.count],
          ['Props var. Medium',     assetNMedium.count],
          ['Props var. Easy',     assetNEasy.count],
          ['Vehicles Difficult',     assetODifficult.count],
          ['Vehicles Medium',     assetOMedium.count],
          ['Vehicles Easy',     assetOEasy.count],

          
        ]);
        var data2 = google.visualization.arrayToDataTable([
          ['Shots', 'Percentage'],
          ['Main Chars.',     assetACount],
          ['Main Chars. var.',     assetBCount],
          ['Sec. Chars.',    assetCCount],
          ['Sec. Chars. var.',    assetDCount],
          ['Inci. Chars.',    assetECount],
          ['Inci. Chars. var.',    assetFCount],
          ['Crowd Chars.',    assetGCount],
          ['Crowd Chars. var.',    assetHCount],
          ['Sets',    assetICount],
          ['Set Extra elmn.',    assetJCount],
          ['Set Foliage',    assetKCount],
          ['Set Foliage var.',    assetLCount],
          ['Props',    assetMCount],
          ['Props var.',    assetNCount],
          ['vehicles',    assetOCount],
        ]);
        var data3 = google.visualization.arrayToDataTable([
          ['Shots', 'Percentage'],
          ['Main chars. Difficult',     assetADifficult.meanTotal],
          ['Main chars. Medium',     assetAMedium.meanTotal],
          ['Main chars. Easy',     assetAEasy.meanTotal],
          ['Main Chars. var. Difficult',     assetBDifficult.meanTotal],
          ['Main Chars. var. Medium',     assetBMedium.meanTotal],
          ['Main Chars. var. Easy',     assetBEasy.meanTotal],
          ['Sec Chars. Difficult',     assetCDifficult.meanTotal],
          ['Sec Chars. Medium',     assetCMedium.meanTotal],
          ['Sec Chars. Easy',     assetCEasy.meanTotal],
          ['Sec Chars. var. Difficult',     assetDDifficult.meanTotal],
          ['Sec Chars. var. Medium',     assetDMedium.meanTotal],
          ['Sec Chars. var. Easy',     assetDEasy.meanTotal],
          ['Inci. Chars. Difficult',     assetEDifficult.meanTotal],
          ['Inci. Chars. Medium',     assetEMedium.meanTotal],
          ['Inci. Chars. Easy',     assetEEasy.meanTotal],
          ['Inci. Chars. var. Difficult',     assetFDifficult.meanTotal],
          ['Inci. Chars. var. Medium',     assetFMedium.meanTotal],
          ['Inci. Chars. var. Easy',     assetFEasy.meanTotal],
          ['Crowd Chars. Difficult',     assetGDifficult.meanTotal],
          ['Crowd Chars. Medium',     assetGMedium.meanTotal],
          ['Crowd Chars. Easy',     assetGEasy.meanTotal],
          ['Crowd Chars. var. Difficult',     assetHDifficult.meanTotal],
          ['Crowd Chars. var. Medium',     assetHMedium.meanTotal],
          ['Crowd Chars. var. Easy',     assetHEasy.meanTotal],
          ['Sets Difficult',     assetIDifficult.meanTotal],
          ['Sets Medium',     assetIMedium.meanTotal],
          ['Sets Easy',     assetIEasy.meanTotal],
          ['Set extra Elm. Difficult',     assetJDifficult.meanTotal],
          ['Set extra Elm. Medium',     assetJMedium.meanTotal],
          ['Set extra Elm. Easy',     assetJEasy.meanTotal],
          ['Set Foliage Difficult',     assetKDifficult.meanTotal],
          ['Set Foliage Medium',     assetKMedium.meanTotal],
          ['Set Foliage Easy',     assetKEasy.meanTotal],
          ['Set Foliage var. Difficult',     assetLDifficult.meanTotal],
          ['Set Foliage var. Medium',     assetLMedium.meanTotal],
          ['Set Foliage var. Easy',     assetLEasy.meanTotal],
          ['Props Difficult',     assetMDifficult.meanTotal],
          ['Props Medium',     assetMMedium.meanTotal],
          ['Props Easy',     assetMEasy.meanTotal],
          ['Props var. Difficult',     assetNDifficult.meanTotal],
          ['Props var. Medium',     assetNMedium.meanTotal],
          ['Props var. Easy',     assetNEasy.meanTotal],
          ['Vehicles Difficult',     assetODifficult.meanTotal],
          ['Vehicles Medium',     assetOMedium.meanTotal],
          ['Vehicles Easy',     assetOEasy.meanTotal],
          
        ]);

       var options = {'chartArea': {'width': '100%', 'height': '90%'},
              legend: { position: 'top', maxLines: 3 },
              legend: { textStyle: { color: 'white' }},
              fontSize: 10,
              backgroundColor: '#3d3d3d',
              pieSliceText: 'value',
              hAxis: {
                  textStyle:{color: '#FFF',}
              },
               colors: ['#cd5332', '#9c442d', '#784438', '#9e608d', '#75546c', '#614e5f','#4976b4','#486181','#47576a','#85a56c','#50795b','#4c6453'],
    };
       var options2 = {'chartArea': {'width': '100%', 'height': '90%'},
                legend: { position: 'top', maxLines: 3 },
                backgroundColor: '#3d3d3d',
                        fontSize: 10,
              legend: { textStyle: { color: 'white'}},
              hAxis: {
                  textStyle:{color: '#FFF'}
              },
               colors: ['#cd5332', '#9e608d','#4976b4','#85a56c'],
    };


        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        var chart2 = new google.visualization.PieChart(document.getElementById('piechart2'));
        var chart3 = new google.visualization.PieChart(document.getElementById('piechart3'));

        chart.draw(data, options);
        chart2.draw(data2, options2);
        chart3.draw(data3, options);

        
      var data4 = google.visualization.arrayToDataTable([
        ['Genre', 'difficult',{ role: 'style' }, 'Medium',{ role: 'style' }, 'Easy',{ role: 'annotation' } ,{ role: 'style' }],
        ['Main Chars', assetADifficult.meanTotal, '#cd5332', assetAMedium.meanTotal, '#9c442d', assetAEasy.meanTotal, "Total: "+assetACount, '#784438'],
        ['Main Chars var.', assetBDifficult.meanTotal, '#9e608d', assetBMedium.meanTotal, '#75546c', assetBEasy.meanTotal, "Total: "+assetBCount, '#614e5f'],
        ['Sec. Chars', assetCDifficult.meanTotal, '#4976b4', assetCMedium.meanTotal, '#486181', assetCEasy.meanTotal, "Total: "+assetCCount, '#47576a'],
        ['Sec. Chars Var.', assetDDifficult.meanTotal, '#85a56c', assetDMedium.meanTotal, '#50795b', assetDEasy.meanTotal, "Total: "+assetDCount, '#4c6453'],
        ['Inci. Chars', assetEDifficult.meanTotal, '#cd5332', assetEMedium.meanTotal, '#9c442d', assetEEasy.meanTotal, "Total: "+assetECount, '#784438'],
        ['Inci. Chars var.', assetFDifficult.meanTotal, '#9e608d', assetFMedium.meanTotal, '#75546c', assetFEasy.meanTotal, "Total: "+assetFCount, '#614e5f'],
        ['Crowd Chars', assetGDifficult.meanTotal, '#4976b4', assetGMedium.meanTotal, '#486181', assetGEasy.meanTotal, "Total: "+assetGCount, '#47576a'],
        ['Crowd Chars var.', assetHDifficult.meanTotal, '#85a56c', assetHMedium.meanTotal, '#50795b', assetHEasy.meanTotal, "Total: "+assetHCount, '#4c6453'],
        ['Sets', assetIDifficult.meanTotal, '#cd5332', assetIMedium.meanTotal, '#9c442d', assetIEasy.meanTotal, "Total: "+assetICount, '#784438'],
        ['Set xtra Elem.', assetJDifficult.meanTotal, '#9e608d', assetJMedium.meanTotal, '#75546c', assetJEasy.meanTotal, "Total: "+assetJCount, '#614e5f'],
        ['Set Foliage', assetKDifficult.meanTotal, '#4976b4', assetKMedium.meanTotal, '#486181', assetKEasy.meanTotal, "Total: "+assetKCount, '#47576a'],
        ['Set foliage var.', assetLDifficult.meanTotal, '#85a56c', assetLMedium.meanTotal, '#50795b', assetLEasy.meanTotal, "Total: "+assetLCount, '#4c6453'],
        ['Props', assetMDifficult.meanTotal, '#cd5332', assetMMedium.meanTotal, '#9c442d', assetMEasy.meanTotal, "Total: "+assetMCount, '#784438'],
        ['Props Var.', assetNDifficult.meanTotal, '#9e608d', assetNMedium.meanTotal, '#75546c', assetNEasy.meanTotal, "Total: "+assetNCount, '#614e5f'],
        ['Vehicles', assetODifficult.meanTotal, '#4976b4', assetOMedium.meanTotal, '#486181', assetOEasy.meanTotal, "Total: "+assetOCount, '#47576a']

      ]);

      var options = {
        'chartArea': {'width': '80%', 'height': '90%'},
        legend: { position: 'top', maxLines: 3, fontSize: 1},
        bar: { groupWidth: '75%' },
        colors: ['#A0A0A0', '#A0A0A0', '#A0A0A0'],
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