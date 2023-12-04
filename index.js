var giftItem = document.getElementById("modal");


const advent = 
[
    "Day 1: Happy December, my love! I hope we will have a great last month of the year. I want to help you reclaim this holiday season and show you that you deserve so much love and care. I love you and I hope that I can make you feel like the luckiest girlfriend this holiday season :)", 
    "Day 2: Second day of the month! I love you so much, don't ever forget that! You have redeemed a smooch for the next time I see you. You can choose where the smooch is.",
    "Day 3: Happy 3rd of December! Remember to stay warm, hydrate (with Penny), and eat! I love you and you mean a lot to me. You have redeemed a cuddle coupon. You can cash it in when you want to cuddle. You mean the world to me, and I hope that you are happy with me!",
    "Day 4: Day by day, we're 4 days into December now! Happy Monday :) Stay warm, eat lots, and I love you! You have redeemed a massage since I know you've been working so hard and I want to make sure you feel all relaxed and comfortable.",
    "Day 5: 5th day of December! I am glad I get to spend this holiday season with you and I want to make you feel loved and appreciated. I am so proud of you and how hard you're working. Whatever you're working on, you got it. You have redeemed a high five from me!",
    "Day 6: Almost a week into the month! I hope you're staying warm and getting tons of rest if you need it! I think I will be seeing you soon, so I am super excited. I miss you and I love you, I can't wait to see you! You have redeemed a hug from me.",
    "Day 7: First week of December! Stay warm and drink tons of soup because it's soup season! Speaking of soup.. you have redeemed yourself a tomato soup coupon so I will be making that for you whenever you'd like next time. I love you!",
    "Day 8: I should be with you right now (I hope so at least!). But on this day, I thank you for spending time with me and for taking the time to make me feel special and loved. You have redeemed a Baroness drink today, I love you.",
    "Day 9: The 9th day of the month! We're getting closer and closer to the middle of the month. Please remember to stay warm and bundle up! I love you and I hope that you'll always be mine, as I will be yours. You have redeemed a chocolate bar today!",
    "Day 10: We're heading into the 2-digits of the month! I am so proud of you and all the hard work you've been doing. I know you've been super tired and balancing a lot, so make sure to get some Maple time. You have redeemed a noot noot kiss for the next time. ",
    "Day 11: Happy 11th of December! We're getting there day by day! I hope that you are enjoying this. You mean a lot to me. Thank you for being here for me and for loving me the best you can. Today you have redeemed a snackie of your choice. I love you!",
    "Day 12: 12th of December! I love you so much and I hope that you are taking good care of yourself for me. Today you have redeemed a hug and a drink of your choice the next time I see you! It can be baroness, coffee, or even a lil cocktail! Stay warm, my love <3",
    "Day 13: Happy 13th of December! I hope that you are getting tons of rest and feel loved. Thank you for being mine and for being here for me when I need you. You are so amazing and are always there for your friends and make sure they are okay. I appreciate that about you and they are lucky to have you in their life, as do I. Today you redeemed a cuddle from me.",
    "Day 14: It's two weeks into the month, can you believe it! On this day, I want to tell you, I love you and I am so lucky to have you. 2 years ago today, I matched with the person I love the most. Make sure to take care of yourself and thank you for giving me a chance at loving you. I hope I'm doing well. You have redeemed a piece of dessert for next time.",
    "Day 15: Half way through the month! Happy 15th of December :) Make sure you're staying warm, hydrating, and eating yummy food. Make sure you take good care of yourself and that you're taking breaks. You're nearing the end of your semester and I am so proud of you! You have redeemed a thumbs up from me!",
    "Day 16: Happy December 16! I love you a lot and I hope that you are having a great season and getting tons of rest when you can. For today, you have redeemed a movie ticket - we will watch a movie together in the theaters! If you want to watch Pearl we can make that happen too.",
    "Day 17: Happy 17th of December! Pompom and Usahana told me to say that they are proud of you and they love you. Omg they stole what I wanted to say to you, SMH! I can't believe it. Since they stole the words out of my mouth, today you have redeemed stickers for the next time!",
    "Day 18: We're on the 18th day already! Happy day 18! I am so proud of you and you deserve so much love and support. I will always support you with what you do. I am so proud of you for always trying your best. You have grown so much and let's celebrate every accomplishment! You have redeemed a forever clap from me today.",
    "Day 19: 19th day of the month! Earlier, Solar told me that she loves you. I know this will make you so happy hahah! Adding on to that, I love you too and will always love you. Today, you have redeemed an audio message of me singing a legendary Mariah Carey song - guess which one.. You're probably right.",
    "Day 20: Happy 20th of December! We're at the digits that start with a 2 omg. You are so wonderful, I love you so much. I want to give you a big hug and kiss you on the forehead. For today, you have redeemed a forehead smooch. Please remember I love you from the bottom of my heart and that you are so important to me.",
    "Day 21: Twenty first! of! December! I love you, you're so amazing and I want to make sure that you know that. You're so beautiful, kind, and amazing, my humanitarian of the year. Your heart is made of gold and you are so pure, I admire that so much about you. Please be mine forever? Today you have redeemed my heart.",
    "Day 22: Happy 22nd of December! I can't believe we're almost at the end of the month. We're getting closer to Christmas and I am super excited. I love you tons and I hope that you are staying warm. Thank you for everything, please take good care of yourself. You have redeemed a hug from me.",
    "Day 23: As Phoebe Buffay says, happy Christmas Eve Eve! It's almost Christmas Eve! I hope I got to kiss you under the mistletoe this season. I love you a lot and please remember to stay warm and hydrate. Eat well, spend time with your family and friends. I hope you are as happy as you can be! You have redeemed a mistletoe kiss.",
    "Day 24: A day before Christmas! We've made it! Happy Christmas eve, my love. I love you so much and I hope that you have enjoyed this virtual advent calendar. Thank you for being mine and I am happy and excited that I got to and will spend the holiday season with you. You mean a lot ot me and I hope I am still a source of your happiness and comfort. You have redeemed dinner + your Christmas gifts today.",
]

let redeemed = 
["A smooch of your choice",
"Cuddle session", 
"A massage for your hard work",
"A nice high five!",
"A hug from me to you",
"Tomato Soup in honor of soup season", 
"Baroness drink! (Peach green tea, large, 100% sugar, 100% ice)", 
`Chocolate! Specifically, ${localStorage.getItem("Day 9")}`, 
"Noot noot kiss!", 
"A snackie of your choice!", 
"A drink of your choice!", 
"Another cuddle!", 
"A piece of dessert of your choice!",
"A huge thumbs up from me!", 
`A movie of your choice, specifically, ${localStorage.getItem("Day 9")}`,
"You favorite thing, stickers!", 
"Forever claps from me!", 
"My amazing voice singing you a Mariah song",
"Forehead smooch without pimples", 
"My heart, forever.",
"A huge hug from me!", 
"A mistletoe kiss!! Cross that off your bucket list", 
"Dinner and your Christmas presents!"
];

let today = dayjs().format("D");

$('.box').click(function(event){
    let day = Number(event.currentTarget.id);

    if (day+1 > Number(today)) {
        alert("Stop peaking! No looking ahead!");
    } else {
        alert(`${advent[day]}`);
    }
});

// $(".items").click(function(event){
//     giftItem.style.display = "block";
// });

// $("#close-x").click(function(event){
//     giftItem.style.display = "none";
//   });
  
//   $("#close-b").click(function(event){
//     giftItem.style.display = "none";
//   });
