# Points

Points are the main metric used in the site. They are represented by a gray star :star:. They are used for categorizing games into tiers, grouping users into ranks

Points can only be earned from obtaining primary or secondary objectives in games.

Games are given a set amount of points for their overall difficulty, then spread out across primary and secondary objectives.

Points in objectives use a linear ladder in steps of 5. The higher an objective is valued, the higher its difficulty is estimated to be.

::: info NOTE
Points aren't necessarily a full reflection of the objectives' normal effort - multiple circumstances are taken into account, such as variety of challenges, multiplier penalty applied for T6s and T7s, intensity, amount of objectives done beforehand, content/filler, etc.
:::

### Point quirks

Every game has up to 15 points that can be used in the context of "T1 Leniency" even if the game itself isn't a T1.

## Evaluating points
The values on the site, and especially in the case of high-tier clears, are not necessarily supposed to represent a 'correct value'. They are intended to represent an averaged value amongst the clearers at the time, relative to the effort *they* put in, not how hard the game would be to non-clearers.

Where a game is only cleared by a single person, the point value will reflect *their* experience with the game. To the extent this person's experience differs materially to subsequent clearers (e.g. due to the presence of new strategies), there might be a large shift in points.

### A hypothetical example:
A game's first clearer spends 100 hours on a single YOLO run, inclusive of finding new strategies, practice, and attempts. It is evaluated at 300 points.

Two more players clear the game, with one of them taking 50 hours, and one of them taking 200 hours. Not enough information on the distribution of clearers' efforts has been achieved, so the value is held at 300.

Five more players clear the game, with each of them taking approximately 50 hours to achieve the same feat. With this information, we infer that the 200 hour clear was an outlier (of CE clears), and the 100 hour clear a longer-than-average clear (possibly impacted by being the first to find strategies etc).

The game is re-valued at 150 points, or half of the original valuation.

::: info NOTE
This hypothetical example is not intended to directly correlate to how the value of games are evaluated, and is for illustration only.

There will inevitably be a level of nuance and judgement required in valuing games, particularly at higher values. This will vary based on the nature of the challenge.
:::

### Effort scalars (points per hour, or PPH)

The list is not final - an initial guidance taken from this post:

https://discord.com/channels/639112509445505044/890684724681523291/1217503936328630374

Single large yolos - approx 2.5-3 pph.

Cluster of shorter yolos - approx 1.5-2.5 pph but really depends on a huge number of other factors.

IL speedruns / very high execution - approx 1-1.5 pph.

IL challenges / other - approx 0.5-1.5 pph, but again, really depends on a huge number of other factors.

For the strategy category, take the above multipliers and divide them all by 2 for the same kinds of challenges.


These are the scalar baselines that have been used in the past, but they get adjusted by various amounts depending on more information
These numbers were taken from a really long analysis undertaken on all games cleared by group members about 3-4 years ago.
Most games fell within a range, and were more confidently within a tighter range based on challenge type.


## CR Rating 
This is a leaderboard-specific weighted point system. The formula for CR works as follows: 

```Σ(0, n): (0.9^n)(m)``` 

where **n** is the ordering of your games by value (your highest game is considered the 0th highest, and no penalty is applied), and **m** is the value of the game. 

CR is calculated separately for each category. Your first person games do not affect the calculation for platformers, for example. Your overall CR is the combined total of the CR for all 6 categories. The maximum amount a game can contribute to CR is 1000, any game worth more than 1000 points will be assumed to be worth 1000 points for the rating.