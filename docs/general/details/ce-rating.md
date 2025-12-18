# CE Rating (CR)

This is a leaderboard-specific weighted point system which gives greater weight to the 'difficulty' of points earned by game, versus the quantity of games with points earned.

The formula for CR works as follows: 

```Σ(0, n): (0.9 ^ n) * min{V,1000}``` 

where **n** is the ordering of your games by value (your highest game is considered the 0th highest, and no penalty is applied), and **V** is the value of the game.

The maximum amount a game can contribute to the CR calculation is 1000, and any game worth more than 1000 points will be assumed to be worth 1000 points for the purpose of calculating CR.

::: info Example
 Assume a user had cleared The End is Nigh and Super Meat Boy, and obtained all achievements in Never Give Up except for the permadeath run.
 
 Ordering their earned points by game results in: 350 (TEIN), 80 (SMB), 30 (NGU). The formula would then apply in the following manner: 
 
 (0.9^0)(350) + (0.9^1)(80) + (0.9^2)(30) = 350 + 72 + 24.3 = **456.3 CR**

(values correct as at the time of writing; they may change over time, but the logic remains)
 :::

CR is calculated separately for each [category](/general/details/categories). First Person games do not affect the CR calculation for Platformers, for example.

::: tip Total CE Rating
Your overall CR is the sum total of the CR for each of the 6 categories.

Beyond leaderboard ranking, there are [Site Achievements](/general/details/site-achievements) for achieving a CR of 1,000 in any given category, and for achieving an overall CR of 5,000.
:::

## Illustrative example

Consider two CE users, who are considering their CR within the Platformer category.

User 1 has earned 100 points in 50 different games, for a total of 5,000 points earned.

User 2 has earned a variety of points in 17 different games, totalling 1,165 points earned. However, User 2 has completed one Tier 6 game, one Tier 5 game, and a Tier 4 game worth 150 points.

The calculation of their Platformer CR is shown below, using the formula set out above.  
As can be seen, despite User 2 having total points well below that of User 1, their CR is higher due to the extra weight given to the higher value clears.

![x](/valuing/CR_Example.png)