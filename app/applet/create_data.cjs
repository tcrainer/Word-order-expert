const fs = require('fs');

const rawText1 = `
1. Noob (A1/A2) - Basic Inversion & ADUSO
Present
Heute essen wir gern im Restaurant Pizza. (Today we gladly eat pizza in the restaurant.)
Manchmal gehen meine Freunde in den Park, aber ich bleibe zu Hause. (Sometimes my friends go to the park, but I stay at home.)
Morgens trinkt er gern im Cafe Tee. (In the morning he gladly drinks tea in the cafe.)
Abends sehen wir zu Hause fern, und wir lesen Bücher. (In the evening we watch TV at home, and we read books.)
Jeden Tag lernt sie in der Schule Deutsch, denn es ist wichtig. (Every day she learns German in school, for it is important.)
Ich trinke keinen Kaffee, sondern ich trinke Tee. (I don't drink coffee, but rather I drink tea.)
Normalerweise fahren wir am Wochenende an den Strand. (Normally we travel to the beach at the weekend.)
Oft besichtigen sie gern in der Stadt die Sehenswürdigkeiten. (Often they gladly visit the sights in the city.)
Er spielt Fußball, oder er geht schwimmen. (He plays football, or he goes swimming.)
Vielleicht haben meine Freunde heute Zeit. (Perhaps my friends have time today.)

Past
Gestern habe ich gern im Garten gearbeitet. (Yesterday I gladly worked in the garden.)
Letzte Woche war er im Ausland, aber heute ist er hier. (Last week he was abroad, but today he is here.)
Früher hatte ich ein Auto, und ich bin zur Arbeit gefahren. (Previously I had a car, and I drove to work.)
Vor zwei Jahren waren wir am Wochenende am Strand. (Two years ago we were at the beach at the weekend.)
Gestern hat es morgens regnet, denn das Wetter war schlecht. (Yesterday it rained in the morning, for the weather was bad.)
Er hat die Hausaufgaben gemacht, oder er hat Fußball gespielt. (He did the homework, or he played football.)
Dann sind wir ins Restaurant gegangen. (Then we went to the restaurant.)
Ich habe die Sehenswürdigkeiten fotografiert, aber ich habe kein Buch gekauft. (I photographed the sights, but I bought no book.)
Letzte Woche haben wir im Cafe Pizza gegessen. (Last week we ate pizza in the cafe.)
Früher war sie in der Schule jünger. (Previously she was younger in school.)

Future
Morgen werde ich in der Stadt die Sehenswürdigkeiten besichtigen. (Tomorrow I will visit the sights in the city.)
Nächste Woche werden wir in die Berge fahren. (Next week we will travel to the mountains.)
Er wird lernen, denn die Prüfung wird schwer sein. (He will learn, for the exam will be hard.)
Dann werden wir gern im Garten sitzen. (Then we will gladly sit in the garden.)
Morgen wirst du nach Hause kommen, und wir werden essen. (Tomorrow you will come home, and we will eat.)
Ich werde nicht Fußball spielen, sondern ich werde arbeiten. (I will not play football, but rather I will work.)
Vielleicht wird es am Wochenende regnen. (Perhaps it will rain at the weekend.)
Nächste Woche werden meine Freunde im Ausland sein. (Next week my friends will be abroad.)
Wir werden die Pizza kaufen, oder wir werden kochen. (We will buy the pizza, or we will cook.)
Bald werde ich mehr Zeit haben. (Soon I will have more time.)

Conditional
Vielleicht wäre es heute besser. (Perhaps it would be better today.)
Heute hätte ich gern im Cafe Zeit. (Today I would gladly have time in the cafe.)
Am Wochenende würden wir gern an den Strand fahren. (At the weekend we would gladly travel to the beach.)
Morgen wäre sie gern zu Hause. (Tomorrow she would gladly be at home.)
Ich hätte gern ein Auto, aber ich habe kein Geld. (I would gladly have a car, but I have no money.)
Dann würden wir gern in den Bergen wandern. (Then we would gladly hike in the mountains.)
Vielleicht hättet ihr morgen Zeit. (Perhaps you (pl) would have time tomorrow.)
Er wäre gern jünger, denn Sport macht Spaß. (He would gladly be younger, for sport is fun.)
Heute würden meine Freunde gern im Park spielen. (Today my friends would gladly play in the park.)
Wir hätten gern mehr Zeit, oder wir hätten gern Urlaub. (We would gladly have more time, or we would gladly have a holiday.)

2. Pro (B1) - Inversion + Subordinate Clauses
Present
Ich freue mich, weil wir am Wochenende in den Park gehen. (I am happy because we are going to the park at the weekend.)
Er lernt Deutsch, obwohl die Prüfung schwer ist. (He learns German although the exam is hard.)
Ich bin der Ansicht, dass das Wetter heute schön ist. (I am of the opinion that the weather is beautiful today.)
Wir gehen ins Restaurant, wenn wir Hunger haben. (We go to the restaurant if we are hungry.)
Ich denke, dass es sich lohnt, im Ausland zu leben. (I think that it is worth it to live abroad.)
Er bleibt zu Hause, weil er krank ist. (He is staying at home because he is sick.)
Wir besichtigen die Stadt, obwohl es regnet. (We visit the city although it is raining.)
Ich weiß, dass er Recht hat. (I know that he is right.)
Wir spielen Fußball, wenn wir Zeit haben. (We play football if we have time.)
Sie fotografiert die Sehenswürdigkeiten, weil sie schön sind. (She photographs the sights because they are beautiful.)

Past
Ich war müde, weil ich gestern viel gearbeitet hatte. (I was tired because I had worked a lot yesterday.)
Er hat das Buch gelesen, obwohl es langweilig war. (He read the book although it was boring.)
Ich dachte, dass meine Freunde im Kino waren. (I thought that my friends were in the cinema.)
Wir sind an den Strand gegangen, wenn das Wetter toll war. (We went to the beach when the weather was great.)
Sie war der Ansicht, dass die Prüfung schwer war. (She was of the opinion that the exam was hard.)
Er hat Pizza gegessen, weil er Hunger hatte. (He ate pizza because he was hungry.)
Wir waren im Cafe, obwohl wir keinen Kaffee getrunken haben. (We were in the cafe although we drank no coffee.)
Ich wusste, dass das Auto teuer war. (I knew that the car was expensive.)
Er ist nach Hause gegangen, weil es regnete. (He went home because it was raining.)
Wir haben die Kamera gesucht, wenn wir fotografiert haben. (We looked for the camera when we took photos.)

Future
Ich werde lernen, weil die Prüfung wichtig sein wird. (I will learn because the exam will be important.)
Wir werden fahren, obwohl es regnen wird. (We will travel although it will rain.)
Er denkt, dass wir morgen Zeit haben werden. (He thinks that we will have time tomorrow.)
Ich werde mich freuen, wenn wir im Ausland sein werden. (I will be happy if we will be abroad.)
Sie wird arbeiten, weil sie ein Auto kaufen wird. (She will work because she will buy a car.)
Wir glauben, dass das Wetter am Wochenende schön sein wird. (We believe that the weather will be beautiful at the weekend.)
Er wird wandern, obwohl er müde sein wird. (He will hike although he will be tired.)
Ich werde schlafen, wenn ich zu Hause sein werde. (I will sleep when I will be at home.)
Meine Freunde sagen, dass sie im Cafe sein werden. (My friends say that they will be in the cafe.)
Es wird toll sein, wenn wir in der Stadt wohnen werden. (It will be great when we will live in the city.)

Conditional
Ich würde lernen, weil es wichtig wäre. (I would learn because it would be important.)
Wir würden wandern, obwohl es regnen würde. (We would hike although it would rain.)
Er dächte, dass ich heute Zeit hätte. (He would think that I would have time today.)
Ich würde mich freuen, wenn wir am Strand wären. (I would be happy if we were at the beach.)
Sie würde Pizza essen, weil sie Hunger hätte. (She would eat pizza because she would be hungry.)
Wir fänden es toll, dass ihr hier wärt. (We would find it great that you were here.)
Er würde das Buch kaufen, obwohl es langweilig wäre. (He would buy the book although it would be boring.)
Ich ginge ins Kino, wenn der Film interessant wäre. (I would go to the cinema if the film were interesting.)
Meine Freundin wäre froh, dass ich da wäre. (My girlfriend would be glad that I was there.)
Es wäre besser, wenn wir mehr Zeit hätten. (It would be better if we had more time.)

3. Expert (B2) - zu-Infinitives
Present
Wir fahren in die Berge, um zu wandern. (We travel to the mountains in order to hike.)
Es ist schön, im Garten zu sitzen. (It is nice to sit in the garden.)
Ich finde es wichtig, jeden Tag Deutsch zu lernen. (I find it important to learn German every day.)
Er geht ins Cafe, um einen Tee zu trinken. (He goes to the cafe in order to drink a tea.)
Es ist langweilig, Hausaufgaben zu machen. (It is boring to do homework.)
Ich finde es toll, die Sehenswürdigkeiten zu besichtigen. (I find it great to visit the sights.)
Wir gehen in den Park, um Fußball zu spielen. (We go to the park in order to play football.)
Es ist schwer, immer Recht zu haben. (It is hard to always be right.)
Ich finde es interessant, Bücher zu lesen. (I find it interesting to read books.)
Er braucht Zeit, um die Kamera zu finden. (He needs time in order to find the camera.)

Past
Wir sind in die Stadt gefahren, um Pizza zu essen. (We travelled to the city in order to eat pizza.)
Es war schön, am Strand zu sein. (It was nice to be at the beach.)
Ich fand es wichtig, viel zu arbeiten. (I found it important to work a lot.)
Er ist nach Hause gegangen, um zu schlafen. (He went home in order to sleep.)
Es war schwer, die Prüfung zu machen. (It was hard to do the exam.)
Ich fand es toll, meine Freunde zu besuchen. (I found it great to visit my friends.)
Wir waren im Cafe, um Kaffee zu trinken. (We were in the cafe in order to drink coffee.)
Es war langweilig, nirgendwo hin zu gehen. (It was boring to go nowhere.)
Ich fand es interessant, im Ausland zu leben. (I found it interesting to live abroad.)
Sie hat gelernt, um in der Schule besser zu sein. (She learned in order to be better in school.)

Future
Ich werde Zeit brauchen, um die Hausaufgaben zu machen. (I will need time in order to do the homework.)
Es wird wichtig sein, Deutsch zu lernen. (It will be important to learn German.)
Er wird in die Stadt fahren, um seine Freundin zu besuchen. (He will travel to the city in order to visit his girlfriend.)
Wir werden gehen, um Sport zu machen. (We will go in order to do sport.)
Es wird toll sein, überall zu fotografieren. (It will be great to take photos everywhere.)
Ich werde versuchen, die Pizza zu essen. (I will try to eat the pizza.)
Er wird kommen, um uns zu besuchen. (He will come in order to visit us.)
Es wird schwer sein, das Auto zu kaufen. (It will be hard to buy the car.)
Ich werde es interessant finden, im Ausland zu leben. (I will find it interesting to live abroad.)
Wir werden Zeit haben, um im Park zu spielen. (We will have time in order to play in the park.)

Conditional
Ich würde kommen, um zu helfen. (I would come in order to help.)
Es wäre schön, mehr Zeit zu haben. (It would be nice to have more time.)
Ich fände es toll, im Ausland zu arbeiten. (I would find it great to work abroad.)
Wir würden gehen, um die Stadt zu besichtigen. (We would go in order to visit the city.)
Es wäre langweilig, zu Hause zu bleiben. (It would be boring to stay at home.)
Ich fände es wichtig, die Hausaufgaben zu machen. (I would find it important to do the homework.)
Er würde fahren, um seine Freundin zu sehen. (He would travel in order to see his girlfriend.)
Es wäre schwer, keinen Kaffee zu trinken. (It would be hard to drink no coffee.)
Ich fände es interessant, ein Buch zu lesen. (I would find it interesting to read a book.)
Wir würden wandern, um fit zu sein. (We would hike in order to be fit.)

4. God Tier (C1) - Subordinate First
da (since/because)
Da es regnet, bleiben wir heute zu Hause. (Since it's raining, we're staying at home today.)
Da ich krank bin, gehe ich nicht zur Arbeit. (Since I'm sick, I'm not going to work.)
Da wir Hunger haben, essen im Restaurant Pizza. (Since we're hungry, we eat pizza in the restaurant.)
Da die Prüfung schwer ist, lernt sie jeden Tag. (Since the exam is hard, she learns every day.)
Da das Wetter toll ist, gehen wir an den Strand. (Since the weather is great, we're going to the beach.)
Da er kein Auto hat, fährt er nicht. (Since he has no car, he doesn't drive.)
Da meine Freunde da sind, haben wir viel Spaß. (Since my friends are there, we have a lot of fun.)
Da ich müde bin, gehe ich jetzt schlafen. (Since I'm tired, I'm going to sleep now.)
Da es wichtig ist, machen wir die Hausaufgaben. (Since it's important, we're doing the homework.)
Da die Stadt interessant ist, besichtigen wir die Sehenswürdigkeiten. (Since the city is interesting, we visit the sights.)

wenn / als
Als ich jünger war, spielte ich oft Fußball. (When I was younger, I often played football.)
Wenn das Wetter schön ist, sitzen wir im Garten. (When the weather is nice, we sit in the garden.)
Als wir im Ausland waren, haben wir viel fotografiert. (When we were abroad, we took a lot of photos.)
Wenn ich Zeit habe, lese ich gern ein Buch. (When I have time, I gladly read a book.)
Als er in der Schule war, hat er Deutsch gelernt. (When he was in school, he learned German.)
Wenn es regnet, sehen wir zu Hause fern. (When it rains, we watch TV at home.)
Als wir am Strand waren, war es toll. (When we were at the beach, it was great.)
Wenn ich Hunger habe, esse ich eine Pizza. (When I'm hungry, I eat a pizza.)
Als er das Auto hatte, ist er zur Arbeit gefahren. (When he had the car, he drove to work.)
Wenn sie im Cafe sind, trinken sie Tee. (When they are in the cafe, they drink tea.)

nachdem (with Pluperfect)
Nachdem wir gelernt hatten, machten wir die Prüfung. (After we had learned, we did the exam.)
Nachdem er gearbeitet hatte, war er sehr müde. (After he had worked, he was very tired.)
Nachdem sie Pizza gegessen hatten, waren sie satt. (After they had eaten pizza, they were full.)
Nachdem wir die Sehenswürdigkeiten besucht hatten, gingen wir ins Cafe. (After we had visited the sights, we went to the cafe.)
Nachdem ich das Buch gelesen hatte, war ich der Ansicht, dass es toll war. (After I had read the book, I was of the opinion that it was great.)
Nachdem es regnet hatte, war das Wetter schön. (After it had rained, the weather was beautiful.)
Nachdem wir Fußball gespielt hatten, sind wir nach Hause gegangen. (After we had played football, we went home.)
Nachdem er die Hausaufgaben gemacht hatte, hatte er mehr Zeit. (After he had done the homework, he had more time.)
Nachdem sie im Park fotografiert hatte, ging sie in die Stadt. (After she had taken photos in the park, she went to the city.)
Nachdem wir im Restaurant gewesen waren, hatten wir Spaß. (After we had been in the restaurant, we had fun.)

Mixture
Obwohl es schwer ist, lerne ich jeden Tag Deutsch. (Although it is hard, I learn German every day.)
Weil wir im Ausland sind, besichtigen wir die Stadt. (Because we are abroad, we visit the city.)
Wenn das Wetter schön wäre, würden wir heute wandern. (If the weather were nice, we would hike today.)
Da ich keine Zeit hatte, habe ich nicht gearbeitet. (Since I had no time, I didn't work.)
Nachdem wir Pizza gegessen hatten, sind wir ins Kino gegangen. (After we had eaten pizza, we went to the cinema.)
Als ich jünger war, war ich oft am Strand. (When I was younger, I was often at the beach.)
Obwohl ich müde bin, mache ich die Hausaufgaben. (Although I am tired, I do the homework.)
Dass er Recht hat, finde ich sehr wichtig. (That he is right, I find very important.)
Weil es regnet, bleiben wir heute im Haus. (Because it's raining, we're staying in the house today.)
Nachdem ich gelernt habe, werde ich schlafen. (After I have learned, I will sleep.)
`;

const rawText2 = `
1. Noob (A1/A2) - Basic Inversion & ADUSO
Present
Morgens trinke ich Tee. (In the morning I drink tea.)
Heute besichtigen wir die Sehenswürdigkeiten. (Today we are visiting the sights.)
Oft fotografiert sie im Park. (Often she takes photos in the park.)
Manchmal lesen wir ein Buch. (Sometimes we read a book.)
Ich trinke keinen Kaffee, sondern ich trinke Tee. (I don't drink coffee, but rather I drink tea.)
Er spielt Fußball, aber sie liest ein Buch. (He plays football, but she reads a book.)
Wir gehen ins Kino oder wir bleiben zu Hause. (We are going to the cinema or we are staying at home.)
Abends sehen wir fern. (In the evening we watch TV.)
Normalerweise arbeiten meine Freunde hier. (Normally my friends work here.)
Jeden Tag lerne ich Deutsch, denn es ist wichtig. (Every day I learn German, for it is important.)

Past
Gestern war ich im Ausland. (Yesterday I was abroad.)
Früher hatte mein Freund ein Auto. (Previously my friend had a car.)
Letzte Woche haben wir Pizza gegessen. (Last week we ate pizza.)
Er hat gearbeitet, und sie hat gelernt. (He worked, and she learned.)
Vor zwei Jahren waren wir am Strand. (Two years ago we were at the beach.)
Wir sind ins Cafe gegangen, aber es war langweilig. (We went to the cafe, but it was boring.)
Ich habe Sport gespielt, denn ich war fit. (I played sport, for I was fit.)
Dann hat er die Hausaufgaben gemacht. (Then he did the homework.)
Wir waren im Restaurant, oder wir waren zu Hause. (We were in the restaurant, or we were at home.)
Abends hat es regnet. (In the evening it rained.)

Future
Morgen werde ich Deutsch lernen. (Tomorrow I will learn German.)
Nächste Woche werden wir in die Berge fahren. (Next week we will travel to the mountains.)
Er wird kommen, aber sie wird zu Hause bleiben. (He will come, but she will stay at home.)
Dann werden wir Pizza essen. (Then we will eat pizza.)
Wir werden arbeiten, und ihr werdet spielen. (We will work, and you will play.)
Ich werde schlafen, denn ich werde müde sein. (I will sleep, for I will be tired.)
Vielleicht wird es morgen regnen. (Perhaps it will rain tomorrow.)
Er wird ein Buch kaufen, oder er wird fernsehen. (He will buy a book, or he will watch TV.)
Bald werden meine Freunde hier sein. (Soon my friends will be here.)
Ich werde nicht gehen, sondern ich werde hier bleiben. (I will not go, but rather I will stay here.)

Conditional
Vielleicht wäre es besser. (Perhaps it would be better.)
Heute hätte ich gern mehr Zeit. (Today I would gladly have more time.)
Am Wochenende würden wir gern an den Strand fahren. (At the weekend we would gladly travel to the beach.)
Morgen wäre sie gern im Cafe. (Tomorrow she would gladly be in the cafe.)
Ich hätte gern eine Pizza, aber ich bin satt. (I would gladly have a pizza, but I am full.)
Dann würden wir im Garten sitzen. (Then we would sit in the garden.)
Er wäre gern jünger, denn Sport macht Spaß. (He would gladly be younger, for sport is fun.)
Vielleicht hättet ihr heute Zeit. (Perhaps you (pl) would have time today.)
Wir würden gern die Stadt besichtigen, oder wir würden wandern. (We would gladly visit the city, or we would hike.)
Früher wäre das schön gewesen. (Previously that would have been nice.)

2. Pro (B1) - Inversion + Subordinate Clauses
Present
Ich freue mich, weil wir Urlaub haben. (I am happy because we have holiday.)
Er lernt Deutsch, obwohl es schwer ist. (He learns German although it is hard.)
Ich denke, dass das Wetter heute schön ist. (I think that the weather is beautiful today.)
Wir gehen in den Park, wenn wir Zeit haben. (We go to the park if we have time.)
Meine Freundin sagt, dass sie Hunger hat. (My girlfriend says that she is hungry.)
Ich bleibe zu Hause, weil ich krank bin. (I am staying at home because I am sick.)
Wir wandern in den Bergen, obwohl es regnet. (We hike in the mountains although it is raining.)
Er weiß, dass er Recht hat. (He knows that he is right.)
Ich besuche das Cafe, wenn ich Kaffee brauche. (I visit the cafe when I need coffee.)
Wir finden, dass die Stadt interessant ist. (We find that the city is interesting.)

Past
Ich war müde, weil ich viel gearbeitet habe. (I was tired because I worked a lot.)
Er hat das Buch gelesen, obwohl es langweilig war. (He read the book although it was boring.)
Ich dachte, dass er gestern hier war. (I thought that he was here yesterday.)
Wir sind am Strand geblieben, wenn es schön war. (We stayed at the beach when it was beautiful.)
Sie hat Pizza gegessen, weil sie Hunger hatte. (She ate pizza because she was hungry.)
Mein Freund war froh, dass wir die Kamera hatten. (My friend was glad that we had the camera.)
Wir haben Fußball gespielt, obwohl wir müde waren. (We played football although we were tired.)
Ich wusste, dass die Prüfung schwer war. (I knew that the exam was hard.)
Er ist nach Hause gegangen, weil es regnete. (He went home because it was raining.)
Sie haben gelacht, wenn wir Spaß hatten. (They laughed when we had fun.)

Future
Ich werde lernen, weil die Prüfung wichtig sein wird. (I will learn because the exam will be important.)
Wir werden fahren, obwohl es schwer sein wird. (We will travel although it will be hard.)
Er denkt, dass wir morgen Zeit haben werden. (He thinks that we will have time tomorrow.)
Ich werde mich freuen, wenn du kommen wirst. (I will be happy if you will come.)
Sie wird arbeiten, weil sie das Auto kaufen wird. (She will work because she will buy the car.)
Wir glauben, dass das Wetter schön sein wird. (We believe that the weather will be beautiful.)
Er wird wandern, obwohl er müde sein wird. (He will hike although he will be tired.)
Ich werde schlafen, wenn ich zu Hause sein werde. (I will sleep when I will be at home.)
Meine Freunde sagen, dass sie im Cafe sein werden. (My friends say that they will be in the cafe.)
Es wird toll sein, wenn wir im Ausland leben werden. (It will be great when we will live abroad.)

Conditional
Ich würde lernen, weil es wichtig wäre. (I would learn because it would be important.)
Wir würden wandern, obwohl es regnen würde. (We would hike although it would rain.)
Er dächte, dass ich Zeit hätte. (He would think that I would have time.)
Ich würde mich freuen, wenn wir am Strand wären. (I would be happy if we were at the beach.)
Sie würde Pizza essen, weil sie Hunger hätte. (She would eat pizza because she would have hunger.)
Wir fänden es toll, dass ihr hier wärt. (We would find it great that you were here.)
Er würde das Buch kaufen, obwohl es teuer wäre. (He would buy the book although it would be expensive.)
Ich ginge ins Kino, wenn der Film interessant wäre. (I would go to the cinema if the film were interesting.)
Meine Freundin wäre froh, dass ich da wäre. (My girlfriend would be glad that I was there.)
Es wäre besser, wenn wir mehr Zeit hätten. (It would be better if we had more time.)

3. Expert (B2) - zu-Infinitives
Present
Wir fahren in die Berge, um zu wandern. (We travel to the mountains in order to hike.)
Es ist schön, im Garten zu sitzen. (It is nice to sit in the garden.)
Ich finde es wichtig, Deutsch zu lernen. (I find it important to learn German.)
Ich gehe ins Cafe, um einen Kaffee zu trinken. (I go to the cafe in order to drink a coffee.)
Es ist langweilig, Hausaufgaben zu machen. (It is boring to do homework.)
Ich finde es toll, die Sehenswürdigkeiten zu besichtigen. (I find it great to visit the sights.)
Wir gehen in den Park, um Fußball zu spielen. (We go to the park in order to play football.)
Es ist schwer, immer Recht zu haben. (It is hard to always be right.)
Ich finde es interessant, Bücher zu lesen. (I find it interesting to read books.)
Er braucht Zeit, um die Kamera zu finden. (He needs time in order to find the camera.)

Past
Wir sind in die Stadt gefahren, um Pizza zu essen. (We travelled to the city in order to eat pizza.)
Es war schön, am Strand zu sein. (It was nice to be at the beach.)
Ich fand es wichtig, viel zu arbeiten. (I found it important to work a lot.)
Er ist nach Hause gegangen, um zu schlafen. (He went home in order to sleep.)
Es war schwer, die Prüfung zu machen. (It was hard to do the exam.)
Ich fand es toll, meine Freunde zu besuchen. (I found it great to visit my friends.)
Wir waren im Cafe, um Tee zu trinken. (We were in the cafe in order to drink tea.)
Es war langweilig, nirgendwo hin zu gehen. (It was boring to go nowhere.)
Ich fand es interessant, im Ausland zu leben. (I found it interesting to live abroad.)
Sie hat gelernt, um besser zu sein. (She learned in order to be better.)

Future
Ich werde in die Schule gehen, um zu lernen. (I will go to school in order to learn.)
Es wird schön sein, im Cafe zu sitzen. (It will be nice to sit in the cafe.)
Ich werde es wichtig finden, Zeit zu haben. (I will find it important to have time.)
Wir werden fahren, um die Berge zu sehen. (We will travel in order to see the mountains.)
Es wird toll sein, überall zu fotografieren. (It will be great to take photos everywhere.)
Ich werde versuchen, die Pizza zu essen. (I will try to eat the pizza.)
Er wird kommen, um uns zu besuchen. (He will come in order to visit us.)
Es wird schwer sein, das Auto zu kaufen. (It will be hard to buy the car.)
Ich werde es interessant finden, Deutsch zu sprechen. (I will find it interesting to speak German.)
Wir werden gehen, um Sport zu machen. (We will go in order to do sport.)

Conditional
Ich würde kommen, um zu helfen. (I would come in order to help.)
Es wäre schön, mehr Zeit zu haben. (It would be nice to have more time.)
Ich fände es toll, im Ausland zu arbeiten. (I would find it great to work abroad.)
Wir würden gehen, um die Sehenswürdigkeiten zu besichtigen. (We would go in order to visit the sights.)
Es wäre langweilig, zu Hause zu bleiben. (It would be boring to stay at home.)
Ich fände es wichtig, die Wahrheit zu sagen. (I would find it important to tell the truth.)
Er würde fahren, um seine Freundin zu sehen. (He would travel in order to see his girlfriend.)
Es wäre schwer, keinen Kaffee zu trinken. (It would be hard to drink no coffee.)
Ich fände es interessant, ein Buch zu schreiben. (I would find it interesting to write a book.)
Wir würden wandern, um fit zu sein. (We would hike in order to be fit.)

4. God Tier (C1) - Subordinate First
da (since/because)
Da es regnet, bleiben wir zu Hause. (Since it's raining, we're staying at home.)
Da ich krank bin, gehe ich nicht zur Arbeit. (Since I'm sick, I'm not going to work.)
Da wir Hunger haben, essen wir eine Pizza. (Since we're hungry, we're eating a pizza.)
Da die Prüfung schwer ist, lerne ich viel. (Since the exam is hard, I'm learning a lot.)
Da das Wetter schön ist, gehen wir in den Park. (Since the weather is nice, we're going to the park.)
Da er kein Geld hat, kauft er das Auto nicht. (Since he has no money, he's not buying the car.)
Da meine Freunde da sind, haben wir Spaß. (Since my friends are there, we're having fun.)
Da ich müde bin, gehe ich schlafen. (Since I'm tired, I'm going to sleep.)
Da es Sonntag ist, haben wir Zeit. (Since it's Sunday, we have time.)
Da die Stadt toll ist, bleiben wir hier. (Since the city is great, we're staying here.)

wenn / als
Als ich ein Kind war, spielte ich oft Fußball. (When I was a child, I often played football.)
Wenn es morgen regnet, sehen wir fern. (If it rains tomorrow, we'll watch TV.)
Als wir im Ausland waren, besichtigten wir viel. (When we were abroad, we visited a lot.)
Wenn ich Zeit habe, lese ein Buch. (When/If I have time, I read a book.)
Als er jünger war, hatte er ein Auto. (When he was younger, he had a car.)
Wenn wir am Wochenende wandern, sind wir froh. (When we hike at the weekend, we are happy.)
Als ich gestern im Cafe war, traf ich einen Freund. (When I was in the cafe yesterday, I met a friend.)
Wenn du kommst, trinken wir einen Tee. (When you come, we'll drink a tea.)
Als die Sonne schien, gingen wir an den Strand. (When the sun shone, we went to the beach.)
Wenn ich Hunger habe, koche ich Pizza. (When I'm hungry, I cook pizza.)

nachdem (with Pluperfect)
Nachdem wir gegessen hatten, waren wir satt. (After we had eaten, we were full.)
Nachdem er gelernt hatte, machte er die Prüfung. (After he had learned, he did the exam.)
Nachdem ich gearbeitet hatte, war ich müde. (After I had worked, I was tired.)
Nachdem sie die Sehenswürdigkeiten besucht hatten, gingen sie ins Cafe. (After they had visited the sights, they went to the cafe.)
Nachdem es regnet hatte, war der Garten schön. (After it had rained, the garden was beautiful.)
Nachdem wir Fußball gespielt hatten, tranken wir Wasser. (After we had played football, we drank water.)
Nachdem er das Buch gelesen hatte, gab er es mir. (After he had read the book, he gave it to me.)
Nachdem wir im Urlaub gewesen waren, hatten wir keine Zeit mehr. (After we had been on holiday, we had no more time.)
Nachdem ich die Hausaufgaben gemacht hatte, sah ich fern. (After I had done the homework, I watched TV.)
Nachdem sie das Auto gekauft hatten, fuhren sie in die Berge. (After they had bought the car, they travelled to the mountains.)

Mixture
Obwohl es schwer ist, lerne ich jeden Tag Deutsch. (Although it is hard, I learn German every day.)
Weil wir im Ausland sind, besichtigen wir die Stadt. (Because we are abroad, we are visiting the city.)
Wenn das Wetter schön wäre, würden wir wandern. (If the weather were nice, we would hike.)
Da ich keine Zeit hatte, habe ich nicht angerufen. (Since I had no time, I didn't call.)
Nachdem wir Pizza gegessen hatten, gingen wir ins Kino. (After we had eaten pizza, we went to the cinema.)
Als ich jünger war, war ich oft am Strand. (When I was younger, I was often at the beach.)
Obwohl ich müde bin, arbeite ich noch. (Although I am tired, I am still working.)
Dass er Recht hat, finde ich wichtig. (That he is right, I find important.)
Weil es regnet, bleiben wir im Haus. (Because it's raining, we're staying in the house.)
Nachdem ich gelernt habe, werde ich schlafen. (After I have learned, I will sleep.)
`;

const categories = {
  noob: { present: [], past: [], future: [], conditional: [] },
  pro: { present: [], past: [], future: [], conditional: [] },
  expert: { present: [], past: [], future: [], conditional: [] },
  god: { da: [], wenn_als: [], nachdem: [], mixture: [] }
};

let currentCat = '';
let currentTense = '';

function processRawText(rawText) {
  const lines = rawText.split('\n').map(l => l.trim()).filter(l => l);

  for (const line of lines) {
    if (line.startsWith('1. Noob')) { currentCat = 'noob'; continue; }
    if (line.startsWith('2. Pro')) { currentCat = 'pro'; continue; }
    if (line.startsWith('3. Expert')) { currentCat = 'expert'; continue; }
    if (line.startsWith('4. God Tier')) { currentCat = 'god'; continue; }
    
    if (line === 'Present') { currentTense = 'present'; continue; }
    if (line === 'Past') { currentTense = 'past'; continue; }
    if (line === 'Future') { currentTense = 'future'; continue; }
    if (line === 'Conditional') { currentTense = 'conditional'; continue; }
    if (line === 'da (since/because)') { currentTense = 'da'; continue; }
    if (line === 'wenn / als') { currentTense = 'wenn_als'; continue; }
    if (line === 'nachdem (with Pluperfect)') { currentTense = 'nachdem'; continue; }
    if (line === 'Mixture') { currentTense = 'mixture'; continue; }
    
    if (currentCat && currentTense) {
      // Extract sentence and english translation if present
      let sentence = line;
      let english = '';
      const match = line.match(/^(.*?)\s*\((.*?)\)$/);
      if (match) {
        sentence = match[1].trim();
        english = match[2].trim();
      }
      categories[currentCat][currentTense].push({ sentence, english });
    }
  }
}

processRawText(rawText1);
processRawText(rawText2);

function processSentence(sentence) {
  let cleanSentence = sentence.replace(/([.,])/g, ' $1 ');
  let words = cleanSentence.split(/\s+/).filter(w => w);
  
  const phrases = [
    "meine Freunde", "mein Freund", "das Wetter", "die Sehenswürdigkeiten",
    "zu Hause", "in den Park", "im Restaurant", "an den Strand", "in der Schule",
    "in der Stadt", "im Cafe", "im Garten", "im Ausland", "zur Arbeit", "in die Berge",
    "nach Hause", "ins Kino", "im Haus", "Jeden Tag", "Letzte Woche", "Vor zwei Jahren",
    "Nächste Woche", "Am Wochenende", "der Ansicht", "ein Auto", "ein Buch", "die Hausaufgaben",
    "die Prüfung", "die Pizza", "einen Tee", "viel Spaß", "keinen Kaffee", "kein Buch", "kein Auto",
    "kein Geld", "mehr Zeit", "ein Kind", "die Sonne", "die Wahrheit", "einen Kaffee", "meine Freundin",
    "einen Freund", "eine Pizza"
  ];
  
  let text = words.join(' ');
  for (const phrase of phrases) {
    const regex = new RegExp('\\b' + phrase + '\\b', 'gi');
    text = text.replace(regex, match => match.replace(/ /g, '_'));
  }
  
  words = text.split(' ').map(w => w.replace(/_/g, ' '));
  
  const bank = [];
  const target = [];
  let idCounter = 1;
  let cCounter = 1;
  
  const subjects = new Set(['ich', 'du', 'er', 'sie', 'es', 'wir', 'ihr', 'meine Freunde', 'mein Freund', 'das Wetter', 'das', 'die Sonne', 'meine Freundin']);
  const subjunctions = new Set(['aber', 'und', 'denn', 'sondern', 'oder', 'weil', 'obwohl', 'dass', 'wenn', 'um', 'zu', 'da', 'als', 'nachdem']);
  const times = new Set(['Heute', 'Manchmal', 'Morgens', 'Abends', 'Jeden Tag', 'Normalerweise', 'Oft', 'Vielleicht', 'Gestern', 'Letzte Woche', 'Früher', 'Vor zwei Jahren', 'Dann', 'Morgen', 'Nächste Woche', 'Bald', 'Am Wochenende', 'Jetzt', 'immer', 'oft', 'noch']);
  const verbs = new Set(['essen', 'gehen', 'trinkt', 'trinke', 'sehen', 'lesen', 'lernt', 'lerne', 'fahren', 'besichtigen', 'spielt', 'haben', 'gearbeitet', 'war', 'hatte', 'bin', 'gefahren', 'waren', 'regnet', 'hat', 'gemacht', 'gespielt', 'sind', 'gegangen', 'fotografiert', 'gekauft', 'gegessen', 'werde', 'werden', 'wird', 'wirst', 'sitzen', 'kommen', 'arbeiten', 'regnen', 'kochen', 'wäre', 'hätte', 'würden', 'hättest', 'wärt', 'macht', 'freue', 'lernt', 'bin', 'gehen', 'denke', 'bleibt', 'besichtigen', 'weiß', 'spielen', 'fotografiert', 'dachte', 'wusste', 'regnete', 'gesucht', 'glauben', 'sagen', 'wohnen', 'dächte', 'fänden', 'ginge', 'fahren', 'ist', 'finde', 'geht', 'braucht', 'gefahren', 'fand', 'versuchen', 'helfen', 'bleiben', 'machten', 'gewesen', 'lohnt', 'leben', 'sind', 'war', 'waren', 'hatte', 'hatten', 'wird', 'werden', 'wäre', 'wären', 'hätte', 'hätten', 'würde', 'würden', 'liest', 'besuchen', 'besucht', 'schlafen', 'wandern', 'schreiben', 'sprechen', 'koche', 'tranken', 'gab', 'fuhren', 'angerufen', 'traf', 'schien', 'gelacht', 'geblieben', 'brauche', 'freuen', 'glauben']);
  
  for (const word of words) {
    if (word === ',' || word === '.') {
      bank.push({ id: `c${cCounter++}`, text: word, type: 'standard', cat: 'punctuation' });
      target.push(word);
      continue;
    }
    
    let cat = 'detail';
    let type = 'standard';
    let lowerWord = word.toLowerCase();
    
    if (subjects.has(lowerWord) || subjects.has(word)) cat = 'subject';
    else if (subjunctions.has(lowerWord)) cat = 'subjunction';
    else if (times.has(word) || times.has(lowerWord)) cat = 'time';
    else if (verbs.has(lowerWord)) { cat = 'verb'; type = 'verb'; }
    else if (word.startsWith('im ') || word.startsWith('in ') || word.startsWith('an ') || word.startsWith('zu ') || word.startsWith('nach ') || word.startsWith('auf ') || word === 'überall' || word === 'hier' || word === 'da') cat = 'place';
    else if (lowerWord === 'gern' || lowerWord === 'nicht' || lowerWord === 'sehr' || lowerWord === 'viel') cat = 'adverb';
    else if (lowerWord === 'schön' || lowerWord === 'schwer' || lowerWord === 'krank' || lowerWord === 'müde' || lowerWord === 'toll' || lowerWord === 'besser' || lowerWord === 'wichtig' || lowerWord === 'interessant' || lowerWord === 'langweilig' || lowerWord === 'jünger' || lowerWord === 'schlecht' || lowerWord === 'teuer' || lowerWord === 'froh' || lowerWord === 'satt' || lowerWord === 'falsch' || lowerWord === 'fit') cat = 'adjective';
    
    let card = { id: String(idCounter++), text: word, type, cat };
    if (type === 'verb') {
      card.infinitive = word;
    }
    
    bank.push(card);
    target.push(word);
  }
  
  return { bank, target };
}

let output = \`import { Categories } from './types';

const hintSein = 'Präsens:\\\\nich bin, du bist, er ist, wir sind, ihr seid, sie sind\\\\n\\\\nPräteritum:\\\\nich war, du warst, er war, wir waren, ihr wart, sie waren\\\\n\\\\nKonditional:\\\\nich wäre, du wärst, er wäre, wir wären, ihr wärt, sie wären';
const hintHaben = 'Präsens:\\\\nich habe, du hast, er hat, wir haben, ihr habt, sie haben\\\\n\\\\nPräteritum:\\\\nich hatte, du hattest, er hatte, wir hatten, ihr hattet, sie hatten\\\\n\\\\nKonditional:\\\\nich hätte, du hättest, er hätte, wir hätten, ihr hättet, sie hätten';
const hintWerden = 'Präsens:\\\\nich werde, du wirst, er wird, wir werden, ihr werdet, sie werden\\\\n\\\\nPräteritum:\\\\nich wurde, du wurdest, er wurde, wir wurden, ihr wurdet, sie wurden\\\\n\\\\nKonditional:\\\\nich würde, du würdest, er würde, wir würden, ihr würdet, sie würden';
const hintKoennen = 'Präsens:\\\\nich kann, du kannst, er kann, wir können, ihr könnt, sie können\\\\n\\\\nPräteritum:\\\\nich konnte, du konntest, er konnte, wir konnten, ihr konntet, sie konnten\\\\n\\\\nKonditional:\\\\nich könnte, du könntest, er könnte, wir könnten, ihr könntet, sie könnten';
const hintAduso = 'Position 0: Does not count for word order';

export const CATEGORIES_DATA: Categories = {
\`;

for (const [catName, tenses] of Object.entries(categories)) {
  output += \`  \${catName}: {\\n\`;
  for (const [tenseName, sentences] of Object.entries(tenses)) {
    output += \`    \${tenseName}: [\\n\`;
    const exStrings = sentences.map((item, idx) => {
      const { bank, target } = processSentence(item.sentence);
      
      const bankStr = bank.map(c => {
        let props = [];
        props.push(\`id: '\${c.id}'\`);
        if (c.text !== undefined) props.push(\`text: '\${c.text.replace(/'/g, "\\\\'")}'\`);
        if (c.infinitive !== undefined) props.push(\`infinitive: '\${c.infinitive.replace(/'/g, "\\\\'")}'\`);
        props.push(\`type: '\${c.type}'\`);
        props.push(\`cat: '\${c.cat}'\`);
        return \`{ \${props.join(', ')} }\`;
      }).join(',\\n        ');

      const targetStr = target.map(t => \`'\${t.replace(/'/g, "\\\\'")}'\`).join(', ');

      return \`      {
        title: "\${catName.toUpperCase()} \${tenseName} \${idx + 1}",
        bank: [
          \${bankStr}
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "\${item.english.replace(/"/g, '\\\\"')}",
            target: [\${targetStr}]
          }
        ]
      }\`;
    });
    output += exStrings.join(',\\n') + '\\n';
    output += \`    ],\\n\`;
  }
  output += \`  },\\n\`;
}

output += \`};\\n\`;

fs.writeFileSync('src/data.ts', output);
console.log('Successfully generated src/data.ts');
