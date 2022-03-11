

const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database('./data/ecoalDB.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE
, (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Connected to the ecoal database.');
    }
});


let query = [

"PRAGMA foreign_keys = ON",
"DROP TABLE IF EXISTS article_tag",
"DROP TABLE IF EXISTS article",
"DROP TABLE IF EXISTS tag",
"CREATE TABLE article (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT NOT NULL, content TEXT NOT NULL, thumbnailURL TEXT, mediaType TEXT, mediaURL TEXT, leadStory INTEGER)",
"CREATE TABLE tag (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL)",
"CREATE TABLE users (id INTEGER PRIMARY KEY AUTOINCREMENT, username varchar, password varchar, email varchar)",
"CREATE TABLE article_tag (id INTEGER PRIMARY KEY AUTOINCREMENT, idArticle INTEGER REFERENCES article(id), idTag INTEGER REFERENCES tag(id))",
"INSERT INTO article (title, content, thumbnailURL, mediaType, mediaURL) values ('How the cocktail party stuck to the pressure', 'A revolution is in the offing behind the bars: the cocktail is being pumped. Yes, like a draught beer - but with a touch of sophistication.In our algebra textbooks, distant memories of school, pluses add up, multiplications follow the tables of the law, fractions give you a headache if commas get in the way, and equations with several unknowns always fall back on their feet. I put 3 and take 1.In the bibles of cocktail recipes, centilitres, milligrams and drops are added according to complicated conversions and millimetre rules to squirt out of the shaker in a sometimes random sequence. H2O = ∞ if you shake too much?But now mixology aims to fit volumes, lines, cubes and bubbles into a barrel, by virtue of calculations that are not afraid of pressure, vacuum, infinity and relativity in relation to the time factor! Nicolas Julhès, who founded the first Parisian distillery in a hundred years, and Yves Cosentino, who has been immersed in spirits (starting with whisky) for fifteen years, have just created Algebra Drinks, the first high-end cocktail factory sold on draught. In other words, drawn from the pump, at the zinc, like a cold beer. And the geometry of the cocktail has been turned upside down.Its financing too. Because, to launch their custom-made drinks box, the tandem has just inaugurated on October 9th the new crowdfunding internet platform initiated by KissKissBankBank (which had collected with phenomenal success part of the funds of La Distillerie de Paris), Lendopolis. We hope to leave with two people and to see hundreds of people arriving at the bar.', 'ecoal.jpg', 'image', 'ecoal.jpg')",
"INSERT INTO article (title, content, thumbnailURL, mediaType, mediaURL) values ('4 golden rules to stop massacring your cocktails', 'And no longer spoil your evenings with friends.We all have a friend who claims to make cocktails and who has once served us something abominable with a look of extreme satisfaction. In such a situation, there are two solutions. The first is to be horribly hypocritical and tell your host that his mezcal pepper grenadine cocktail is a marvel and deserves to be in the P.D.T. (the famous recipe book of the eponymous bar in New York). The second is a more educational approach, consisting of repeating, with your characteristic pedagogy, the basic rules of a successful cocktail. You will have to be patient and indulgent because your friends bad habits are hard to break, but this patience should pay off and put an end to the massacres perpetrated by your hosts. This guide is therefore addressed to my imaginary friend (my real friends are of course shaker experts) who has despised my palate for too long. The time has come for him to master the rules that are essential if you want to make decent cocktails.', 'ecoal.jpg', 'image', 'ecoal.jpg')",
"INSERT INTO article (title, content, thumbnailURL, mediaType, mediaURL) values ('17 cocktails to make you feel better about your body', 'To be fashionable and firm up your buttocks, follow the Slate diet of healthy drinking! Or how to find new excuses for barflies.Your health is a phrase so old and widespread that its a prayer - and a prescription - as old as the hills. In the heart of the Fertile Crescent, where civilised drinking was born, the Babylonians used to send a little wine and honey to cure their colds, thus inaugurating the career of the oldest documented medicine and, at the same time, the tradition of cough syrup drinking.All ancient cultures recognised the health benefits of alcohol, particularly for its stimulating and anaesthetic effects. Egyptian papyri indicate that wine and beer were used in potions promising to restore appetite, induce labour, treat jaundice and cure epilepsy - although this last remedy also requires the addition of donkey testicle powder.', '1.jpg', 'image', 'ecoal.jpg')",
"INSERT INTO article (title, content, thumbnailURL, mediaType, mediaURL) values ('I eat well, so Im a good person', 'Since Im the kind of yogaphobe for whom the Cobra Clubs free bloody mary is a bit expensive, I decided to venture elsewhere to continue my investigation. Flanked by my research team, I set my notebook down on one of the tables at LCL: Bar & Kitchen, a fairly new Midtown Manhattan estabishment located on the ground floor of the Westin Hotel. Its name intends to cash in on the recent locavorism (or lcvrsm as its owners might spell it) craze. On its website, we learn that LCL offers a creative and ever-changing selection of healthy cocktails with an emphasis on cold-pressed juices, fresh ingredients of the day and the best seasonal produce.The bar is owned by the Gerber Group, famous for its tasteful lounge bars where girls in black spindle dresses serve urban businessmen ready to draw their company cards at any moment. The LCL offers rather good cocktails, even if they are not as memorable as the little lectures that accompany them. I wanted to try a French 75 made with pear juice from Organic Avenue, a brand endorsed by Gwyneth and also praised by the Vegan American Princess blog. But they were out of pear juice, so I settled on a long-drink made with gin, maraschino liqueur, ginger and lime juice, topped with cucumber and mint. Although its actual nutritional qualities left something to be desired, the name of the cocktail smacked of spiritual well-being: Serenity Now.', 'ecoal.jpg', 'image', 'ecoal.jpg')",
"INSERT INTO article (title, content, thumbnailURL, mediaType, mediaURL) values ('A paving stone in the whisky', 'He is one of the most recognized specialists of the Malt planet, and incidentally one of its most beautiful pens. And here Dave Broom is attacking with verve the fundamentalism of whisky tasting, armed with a single commandment: Thou shalt enjoy. We have seen chapels collapse for less than that.From time to time, in the midst of the beautiful books on spirits, a few ambitious nuggets of paper arrive, the kind you wont let gather dust on the coffee table. And when it comes to nuggets, Dave Broom is a mine of his own. After his Atlas mondial du whisky, of which we are impatiently waiting for Flammarion to translate the enlarged version, this tireless surveyor of the Malt planet has patiently chiselled and polished a whisky manual of a new kind.', 'ecoal.jpg', 'image', 'ecoal.jpg')",
"INSERT INTO article (title, content, thumbnailURL, mediaType, mediaURL) values ('Why you shouldnt consider drinking your mojito or milkshake without a straw', 'Theres something nostalgic and festive about using a straw. But the main reason why this thin plastic pipe is also used to sip certain drinks is because it affects the flavour of the liquid being drawn in.Im the first person to want a straw when I order a grenadine says Caroline Champion. This researcher in aesthetic philosophy, flavour explorer and specialist in the relationship between design and taste, is not the only one to succumb to the not-so-green appeal of the plastic straw.In the United States, an estimated 500 million straws are used (and thrown away) every day. Although there are no figures for France, we can only conclude that straws have become indispensable in bars, and not only for cocktails.', 'ecoal.jpg', 'image', 'ecoal.jpg')",
"INSERT INTO article (title, content, thumbnailURL, mediaType, mediaURL) values ('Free Cocktail at the IUT', 'On Tuesday 08 March 2022.The IUT which is currently hosting the e-coal project, for more information about the e-coal project and the cocktail knowledge coming from each country participating in it, follow the link :CocktailfromabroadTeam 1 called the 5 elements organized a small (alcohol free) cocktail bar.Fruit juice like apple , pineapple, orange or clementine meet with fresh lemon juice ,fresh mint and syrup.When asked the team admitted to us that it was to further break the ice between groups and take a break.And also to have some contentfor their article.In another article we will speak about the small contest that happened during this cocktail bar .', 'ecoal.jpg', 'image', 'ecoal.jpg')",
"INSERT INTO article (title, content, thumbnailURL, mediaType, mediaURL) values ('Winter is coming !!', 'When the cold wind is howling and the snow is blowing, we want nothing more than a roaring fire and a glass of something comforting and steamy. Here is one of our favorite wintertime libations.Rum FlipThis cocktail recipe comes courtesy of distiller and bar pro Allen Katz. Its a classic flip, a style of cocktail notable for the inclusion of a whole egg, and often also heavy cream in order to make the drink even richer and creamier.  Cocktails that call for egg whites are common; its a way of adding texture and body to a drink. Its less common to use the yolks as well, however, which is why those drinks get their own category. Flips tend to be rich and frothy cold-weather drinks, and this cocktail is a perfect example. Flips also make ideal nightcaps, the final drink of the evening meant to usher the drinker to a good sleep. “An urbane and debonair means to capping the evening,” says Katz of the nightcap. “The practice of drinking a cocktail before bed likely started in the 18th century as a useful (and pleasant) means to warm the body and soul before turning in on a chilly night. It was surely predated by the equally practical and stylish sleeping attire of the same name,” he says.As Katz notes, Charles H. Bakers The Gentlemans Companion is an excellent reference in which to find historic nightcap recipes. “An American culinary and cocktail writer, Bakers quixotic adventures would often end appropriately with a “capper” like the Porto Flip or a Rum Flip, opulent drinks of layered flavors and aromas meant to impress as well as to soothe,” says Katz.This simple recipe will produce a richly flavored (and textured) drink exactly like Katz describes. Go ahead and end your night with this cocktail. Its certain to ensure sweet dreams.', 'ecoal.jpg', 'image', 'ecoal.jpg')",
"INSERT INTO article (title, content, thumbnailURL, mediaType, mediaURL) values ('Cocktail from Abroad', 'French :Heres another drink with World War I roots. The story goes that this drink was invented for a motorcycle riding customer who happened to have a sidecar. Other people insist the name comes from the mix left behind in the cocktail shaker after serving.Usually served as a shot, its seen as a sidecar to the main drink. No matter what you believe, this cocktail is tart, strong, and not for the faint at heart.If you like daiquiris on vacation, this one might be too much for you.', 'ecoal.jpg', 'image', 'ecoal.jpg')",
"INSERT INTO article (title, content, thumbnailURL, mediaType, mediaURL) values ('When the sun goes,Drinks comes', 'Mindful Mixology with Derek Brown, A podcast about cocktail', 'ecoal.jpg', 'image', 'ecoal.jpg')",
"INSERT INTO tag (name) values ('ecoal22')",
"INSERT INTO tag (name) values ('reactJS')",
"INSERT INTO article_tag (idArticle, idTag) values (1,1)",
"INSERT INTO users (username, password) values ('test','1234')",
"INSERT INTO article_tag (idArticle, idTag) values (1,2)"
]


db.serialize( () => {

query.forEach(item => {
  db.run(item, err =>  {
    if (err)
      return console.error(err.message)
    console.log(item + ` done`)
  })
})

})

db.close(err => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Close the database connection.');
});
