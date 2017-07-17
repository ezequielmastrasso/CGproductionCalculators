# CGproductionCalculators
Pert based production calculators for CG productions

Too early to check, please come back later :)

## Temp testing url address:
http://ezequielm.com/lightingCalc/


Keen io, Keen Dashboard, Jquery, JS, google charts, and d3

Description:  
  
Instructions:  
Enter all your data about your team, working environment, holidays, and shot best/mostLikely/worst estimates.

# Team capacity  
This refers to the amount of actual work the artists will be able to do on a single day, due to other responsibilities or abilities.  
By default Leads are accounted for 0.20 of their time as "working" compared to an Artist.  
Artist as 100%.  
Junior artist at 60% of an Artist Capacity.  
Then the daily amount of hours of team reviews are discounted.  

# sick days
This should be an average of sickies pulled by artists on a single year.  
HR should be able to give you this number.  

# Limitations:
The biggest limitation is not knowing the tasks dependencies in advance.  
We should have an actual work breakdown structure, sequences, assets, etc to come up with this.  
Currently the actual project Duration (aka: the critical path, or the minimum time needed for the project  
after concatenating all the tasks decencies) will be driven by a guesstimate of % overlapping tasks given by the user
This guesstimate is calculated as
(totalMean-overlappingTaksMean)/teamCapacity=duration

However The info box will display a rough estimation of possible overlapping % tasks calculated as:
(85% childShots)+(85%masterShots-EstablishingShotsCount)+(90%Establishing+90%Hero)

