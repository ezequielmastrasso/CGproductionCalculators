# CGproductionCalculators
Pert based production calculators for CG productions
Too early to check, please come back later :)

##### Temp testing url address:
http://ezequielm.com/lightingCalc/singleAssetCalc.html
http://ezequielm.com/lightingCalc/lightingCalc.html

Keen io, Keen Dashboard, Jquery, JS, google charts, and d3

##### Description:  
Instructions:  
Enter all your data about your team, working environment, holidays, and shot best/mostLikely/worst estimates.

##### Team capacity  
This refers to the amount of actual work the artists will be able to do on a single day, due to other responsibilities or abilities.  
By default Leads are accounted for 0.20 of their time as "working" compared to an Artist.  
Artist as 100%.  
Junior artist at 60% of an Artist Capacity.  
Then the daily amount of hours of team reviews are discounted.  

##### sick days
This should be an average of sickies pulled by artists on a single year.  
HR should be able to give you this number.  

# To do:
*start-end date to take into account bank holidays, a fraction of the team entitled holiday, and a fraction of average sick days
*give the 80% and 90%
*Investigate and include busy/idle % in the calculation to avoid task queuing (ref: queueing theory, and the phoenix project)
Wait Time = %busy / %idle (or b/(100-b) where b = % utilized)
Therefore, if the resource is 90% utilized then the wait time is 9x’s longer than if the person is 50% utilized. Wait time is 11x’s longer when 99% utilized compared to when you where 90% utilized.

# Limitations:
The biggest limitation is not knowing the tasks dependencies in advance.  
We should have an actual work breakdown structure, sequences, assets, etc to come up with this.  
Currently the actual project Duration (aka: the critical path, or the minimum time needed for the project) will be driven by a guesstimate like below:  

##### Shots Lighting:  
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
##### Asset Single:  
Critical path will be given by the amount of assets diff, med, and easy and artist will have in its queue
Approximated by:

        Critical path mean=
        (assetDifficultMean(assetDifficultCount/teamCapacity)+
        (assetMediumMean(assetMediumCount/teamCapacity)+
        (assetEasyMean(assetEasyCount/teamCapacity)+

### Notice:
Obviusly, having all the artist with the same queue (aka: as many identical critical paths as artists) will decrease the % of probabilites of finishing, but this fact is omitted ATM
However The info box will display a rough estimation of possible overlapping % tasks calculated as:
(85% childShots)+(85%masterShots-EstablishingShotsCount)+(90%Establishing+90%Hero)

