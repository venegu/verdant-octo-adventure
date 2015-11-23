# Rock, Paper, Scissors Browser Game
This was a really sudden Rock, Paper, Scissors "game" I decided to make after thinking about different ways to change a webpage without a page reload. Messing around with the DOM seemed like a neat, but verbose way to do this! Another way, might be to use `iframes`. `iframes` allow you to embed another document into your HTML (could it be inception?).

## Test It Out
You can play my silly game online at [venegu.github.io/rock-paper-scissors/](venegu.github.io/rock-paper-scissors/).

or you can clone the original project repo:

```
git clone https://github.com/venegu/verdant-octo-adventure.git
```

Then you will need to `cd` into the correct repo:

```
cd verdant-octo-adventure/rock-paper-scissors/
```

Lastly, just open the `index.html` file!

Eventually, I will add this as a link on my personal site or at least somewhere on the internet - stay tuned! :panda_face:

## To-dos
1. Figure out what happens after selecting a radio button (how and where will I display who wins?).
2. Make the images that flash before the radio button proportionally smaller as time goes by (to make it seem as if they are fading).
3. Randomize the order of how the radio buttons appear on the page (Why not! Randomization ftw!).
4. Make it two player over the internet with [socket.io](http://socket.io) (meaning I will need to deploy this elsewhere since Github doesn't do backend).
5. Code clean up... It does the job, but it certainly isn't pretty.