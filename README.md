Track your meals, recipies, and macros.

//TODO
Track your workouts. Lifts, reps, weight, times. Create personalized fitness routines.


README.md

Track your workouts. Lifts, reps, weight, times. Create personalized fitness routines. Track your meals, recipies, and calories.

Clean Workspace Cache
  Reloads window and deletes stale cache. The state cache being an outdated /target folder that's missing /web changes



We could have two repositories

Fitness_Tracker
Fitness_Tracker_Web

Where the web folder in Fitness_Tracker points to the React project hosted in Fitness_Tracker_Web

In this case, both projects would have their own .git folders in their top level folders

It's a pain to have to rebuild the whole project when there are only changes to the front-end. Want to fast reload the front-end without having to rebuild the whole project


For local development, we want the backend running on my local machine with fast reloads to the front end


So two or three github repositories?

Java Repository
  Contains .pom to build the jar
React Repository
Jar Repository

I think the way above is the way to go

Java Repository with no reference to the frontend
React Repository for front-end development
Prod Repository which builds the uber-jar joining the above two repositories


I have the prod build Repository on github

Need to split it into two other projects locally and create their own github repositories

How to backup the .gitignore credential information?