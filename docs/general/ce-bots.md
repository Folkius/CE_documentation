---
prev:
    text: About our Staff
    link: /general/staff
---

# An introduction to our server bots

Built and maintained by our community, these bots are sure to enhance your experience. A brief introduction and their functionality is detailed below.


::: info NOTE
The Challenge Enthusiasts staff does not manage these bots, and as a result is not responsible for issues with uptime or bugs you may find.
:::

[[toc]]


## CE Assistant

CE Assistant is the bot companion of the Discord server, meant to enhance everyone's experience and automatize tasks that the staff can find tedious to do.

### Registering

__To use most features of the bot, you need to use the ```/register``` command__, alongside with the **complete** link to your CE profile, just like if you were posting it to be admitted to our server. Doesn't matter where, as the command sends ephemeral messages.


### Automatic features

The bot synchronizes with the site's database every 30 clock minutes.
After it's done, it will publish every relevant change done by the staff to our public games. 

<sup>\**Icon and game description changes are ignored*</sup>

![A game addition message](/pages/ceassistant_message3.jpg)

Once you're registered, whenever you hit a milestone, clear a casino roll, or clear a T4 game or higher, you will appear in our server's showcase channels.

![Milestone notifications](/pages/ceassistant_message4.png)

### See your stats

By using the ```/profile``` command, you can see a summary of either your stats or anyone else who has registered with the bot.

![Summary](/pages/ceassistant_message1.jpg)
![Recent clears](/pages/ceassistant_message2.jpg)



### Casino rolls

::: info
Casino rolls are limited to our ```#casino``` channel for ease of tracking.
:::

You can see the following link for details on what the rolls are  ([spreadsheet](https://docs.google.com/spreadsheets/d/1-FUFnYZwT_GoJYdi63y1UAk39XTaErtnyabTmYgaOYo/edit?gid=2116929146#gid=2116929146)), but here are some simple descriptions.

For solo rolls, rollable with the ```/solo-roll``` command:
- <u>One Hell of a Day:</u> Beat a random T1 game in under 24 hours.
- <u>One Hell of a Week:</u> Beat a random T1 game from 5 categories each in under a week.
- <u>One Hell of a Month:</u> Beat 3 out of 5 randomly selected T1 games from 5 categories each in under a month.
- <u>Two Week T2 Streak:</u> Beat two random T2 games in under a week, one after the other.
- <u>Two "Two Week T2 Streak" Streak:</u> Beat four random T2 games in under a week, one after the other.
- <u>Never Lucky:</u> Beat a random T3 game. (No time limit)
- <u>Triple Threat:</u> Beat three random T3 games of your selected category in under a month.
- <u>Let Fate Decide:</u> Beat a random T4 game in your selected category. (No time limit)
- <u>Fourward Thinking:</u> Climb a ladder and beat a game from T1 to T4 consecutively in categories of your choice.
- <u>Russian Roulette*:</u> Beat a T5 or higher game randomly selected out of a list you yourself provide.

<sup>*\*Russian Roulette is still required to be manually rolled for the time being and is not included in the bot.*</sup>

For co-op rolls, rollable with the ```/coop-roll``` command:
- <u>Destiny Alignment:</u> Beat a randomly selected game that your partner cleared!
- <u>Soul Mates:</u> Beat a randomly selected game in the tier of your choice with your partner!
- <u>Teamwork Makes the Dream Work:</u> Beat four T3 games in under a month collaborating with your partner!

You can roll everything named here, but note that some rolls have requirements before being available.

Once you clear a casino roll, your name will appear in our casino showcase channel to show off, and you will earn *casino points* to compete in a server-wide leaderboard. You will also earn awards on the site.

::: tip
By using the ```/check-rolls``` command, you will get a link to a website where you can access your current, completed and failed rolls.
![Roll list](/pages/ceassistant_message5.png)

:::

## CE Quiz Bot

This bot is designed to test your knowledge (or your ability to find) trivia regarding games and objectives listed on our site.

Signing up is not required, just jump in at any time!

Only functional in the ```#bot-room``` channel. Type ```!cehelp``` there to get you up to date.

### Timed Quiz
By typing ```!cequiz``` or ```!ceplay```, you'll receive a mysterious image, and asked a question associated with it.
The image can be either a game header or the icon of an objective. You must answer between 30 seconds.

![Question with limited time](/pages/cequiz_message1.jpg)

The questions range between the name of game/objective, the amount of objectives in a game or the amount of CE points the game/objective is worth.

As you answer questions correctly, you will earn (bot-specific) points. Some types of questions award more points than other. If you manage to get 1000 points, you will get a little award...!

### Image Puzzle

If you enter http://cequizimage.com, you will have the opportunity to see an image split in several hundred tiles. Everyone will see the same image at the same time. For every 25 points earned by anyone with the quiz commands used above, one tile will be flipped over. **The image can be either a game header, or the icon of an objective.**

![Icon fragmented in multiple tiles, with only some shown](/pages/cequiz_message2.jpg)

You can guess what the image is with ```!ceguess``` followed by the name of the game, and if you guess it correctly, the entire image will flip over, and that game/objective will forever be shown on that site with the player who guessed it correctly.

![History of guessers](/pages/cequiz_message3.jpg)

You can only guess its identity once per hour, per person. Once it's guessed correctly, the next image will start being revealed. 

*The points obtained on this mode do not count toward the aforementioned award. It has a separate leaderboard.*