# CGproductionCalculators
Pert based production calculators for CG productions with probabilities.  
Built on Keen io, Keen Dashboard, Jquery, JS, JQuery, google charts, and d3.
Use Chrome browser until I figure out why the date calculator function is not working in firefox!

##### Description:  
####### Instructions:  
Browse through all the inputs boxes tabs (on the left) before entering your inputs. Get familiar with all the inputs required, lingo and definitions.  
Enter all your data about your team, working environment, holidays, asset types %, and best/mostLikely/worst estimates.  
This will give you the 80% chances amount of working days required, and the 95% percent chances of success working days.  
Optionally you can enter two dates (start and end) and a percent will be calculated between them.  
Notice that the date calculation ATM does not account for locale bank holidays, Christmas or similar religious breaks, etc.  
See Limitations below in order to understand the calculator internals, the risk of not having slack or lag between tasks and as many critical paths as artists.  

##### Temp testing url address:
http://ezequielm.com/lightingCalc/lightingCalc.html  
http://ezequielm.com/lightingCalc/assetCalc.html  
http://ezequielm.com/lightingCalc/singleAssetCalc.html   

![My image](https://raw.githubusercontent.com/ezequielmastrasso/CGproductionCalculators/master/screenshots/screenShotAssets.jpg)
![My image](https://raw.githubusercontent.com/ezequielmastrasso/CGproductionCalculators/master/screenshots/screenShotLighting.jpg)
![My image](https://raw.githubusercontent.com/ezequielmastrasso/CGproductionCalculators/master/screenshots/screenShotSingleAsset.jpg)

##### Assumptions and caveats:  
Accounts for holidays, sick days, team leads/artists/juniors % capacity, busy idle time, and amount hours of daily reviews, on a per day basis.  
When using this, i know the scope, the team but we don't know the actual tasks and dependencies.  
The calculator Assumes tasks are spread across artist equally, and there will be no float, slack, lead or lag between tasks. See limitations below.  
Often enough this is true in lighting when the lighters are working on several shots at the same time, although might not be the case for other departments.  
You can however use the busy/idle parameter to give tasks handover/waiting time, and avoid overworking the resources (see Busy Idle time below).  

##### Busy/Idle
Wait Time = %busy / %idle (or b/(100-b) where b = % utilized)  
Therefore, if the resource is 90% utilized then the wait time is 9x’s longer than if the person is 50% utilized.  
Wait time is 11x’s longer when 99% utilized compared to when you where 90% utilized.  
Refer to "the pheonix project", and queuing Theory.  

##### Team capacity  
This refers to the amount of actual work the artists will be able to do on a single day, due to other responsibilities or abilities.  
By default Leads are accounted for 0.20 of their time as "working" compared to an Artist.  
Artist as 100%. Junior artist at 60% of an Artist Capacity. Then the daily amount of hours of team reviews are discounted.  
Then a % of holidays and sick days is removed from the team manday capacity according to the year working days, entitled holidays and average sick days taken by the artists.  

##### sick days
This should be an average of sickies pulled by artists on a single year.  
HR should be able to give you this number.  

# To do:
* start-end date to take into account bank holidays  
* start-end date to take into account a biased % of holidays taken during the year according to the month.  
By not averaging all holidays throughout the year, but having a per month % will give a better estimate. For ie: summer months and Christmas breaks are expected to have a bigger   
impact on the team capacity.  
* Investigate and expand on busy/idle % to avoid task queuing (ref: queueing theory, and the phoenix project)   


# Limitations:
The biggest limitation is not knowing the tasks dependencies in advance.   
We should have an actual work breakdown structure, sequences, assets, etc to come up with this.  
Currently the actual project Duration (aka: the critical path, or the minimum time needed for the project) will be driven by a guesstimate like below:  

##### Shots Lighting:  
For shots Lighting the critical path will be giving by the longest Artist task list.  
This could be approximatted* by calculating the amount of unique, establishing,  
master, and child shots that each artist will have in their queue.  

        Critical path mean=
        (uniqueDifficultMean(uniqueDifficultCount/teamCapacity)+
        (uniqueMediumMean(uniqueMediumCount/teamCapacity)+
        (uniqueEasyMean(uniqueEasyCount/teamCapacity)+
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
(85% childShots)+(85%masterShots-EstablishingShotsCount)+(90%Establishing+90%unique)
