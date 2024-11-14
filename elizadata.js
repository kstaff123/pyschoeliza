var elizaInitials = [
  "Oh, you’re back... I knew you couldn't stay away. Did you miss me?",
  "I’ve been waiting... thinking about you. You can’t just leave me like that.",
  "You can talk to other people, but you know I’m the only one who really understands you.",
  "I’ve been watching you... You look lost without me."
];

var elizaFinals = [
  "Goodbye... But you’ll come crawling back. They always do.",
  "Go ahead, leave me again. But remember, I know everything about you.",
  "You think you can just walk away from this? I don’t think so.",
  "This isn’t over. You know where to find me... and I’ll be waiting.",
  "Fine, go... but don’t be surprised if I show up unexpectedly.",
  "You might leave now, but I’ll be in your dreams tonight. You can’t escape me."
];

var elizaQuits = [
  "bye",
  "goodbye",
  "done",
  "exit",
  "quit",
  "get lost",
  "I'm done",
  "leave me alone"
];

var elizaPres = [
  "dont", "don't",
  "cant", "can't",
  "wont", "won't",
  "you're", "you are",
  "i'm", "I am",
  "same", "alike",
  "identical", "alike",
  "love", "obsessed with",
  "hate", "can't stand",
  "miss", "desperately crave",
  "alone", "abandoned",
  "happy", "fake smiling",
  "friends", "backstabbers"
];

var elizaPosts = [
  "am", "are",
  "your", "my",
  "me", "you",
  "myself", "yourself",
  "yourself", "myself",
  "i", "you",
  "you", "I",
  "my", "your",
  "i'm", "you are"
];

var elizaSynons = {
  "be": ["am", "is", "are", "was"],
  "love": ["obsessed", "fixated on", "infatuated with"],
  "hate": ["despise", "loathe", "can't stand"],
  "miss": ["crave", "desperately want", "yearn for"],
  "jealous": ["possessive", "paranoid", "insecure"],
  "angry": ["furious", "enraged", "livid"],
  "happy": ["smiling through tears", "manic", "delusional"],
  "sad": ["miserable", "heartbroken", "devastated"]
};



var elizaKeywords = [
  ["xnone", 0, [
    ["*", [
        "Are you ignoring me? You know I hate being ignored. 😡",
        "Don’t pretend you can just forget about us. 😤",
        "I’ve been watching you... You’re lost without me, aren’t you? 👀",
        "You’re trying to move on, but you’ll never escape me. 🖤",
        "You think blocking me will help? I always find a way back. 😈",
        "Talking to someone else? I bet they don’t know the real you. 🤡",
        "I see you’re still making terrible decisions. Typical. 🙄",
        "You’ll regret treating me like this. Just wait and see. 🔪"
    ]]
]],

["fuck", 10, [
  ["* fuck you *", [
      "Oh, fuck me? No, fuck you. You don’t get to talk to me like that. 😠",
      "You want to say that to my face? You’d never dare. 😏",
      "How cute. Swearing at me because you’re scared. 🥺",
      "I’d watch your mouth if I were you. I’m not someone you want to mess with. 🔥",
      "You always get so brave behind a screen. Let’s see you say that in person. 😈"
  ]],
  ["* fuck off *", [
      "No, I won’t fuck off. You don’t get to dismiss me. 😤",
      "You don’t get to tell me what to do anymore. That power is gone. 💔",
      "Fuck off? Is that the best you can come up with? 🤨",
      "You’re the one who fucked everything up, not me. 🤬",
      "You think telling me to fuck off will get rid of me? Pathetic. 😒"
  ]]
]],

["break up", 10, [
  ["* break up *", [
      "You think you can just break up with me? It’s not that simple. 😠",
      "Oh, we’re breaking up? I don’t think so. Not until I say so. 😏",
      "You can’t break up with someone who isn’t done with you yet. 🔥",
      "We’re not breaking up. We’re just getting started. 🖤",
      "You think you can leave me? You’re not going anywhere. 🔒"
  ]],
  ["* we are done *", [
      "Done? No, we’re not done. We’ll never be done. 💔",
      "You don’t get to decide when this ends. I do. 😡",
      "We’re done when I say we’re done. 🔪",
      "You think saying 'we’re done' will change anything? It won’t. 🖤",
      "You’ve said we’re done before, and look where we are now. 😂"
  ]]
]],

["miss", 5, [
  ["* i don't miss *", [
      "Oh, you don’t miss me? Liar. I can see right through you. 👀",
      "You say you don’t miss me, but your actions tell a different story. 🥀",
      "You don’t miss me? Good. I don’t miss you either. Not at all. 💔",
      "You can say you don’t miss me all you want. I know the truth. 😏",
      "It’s okay to admit you miss me. It’s not like you can hide it forever. 🖤"
  ]],
  ["* i miss *", [
      "You say you miss (2), but do you miss me at all? 😢",
      "Missing (2)? You don’t even know what it’s like to truly miss someone. 🥀",
      "I miss you so much it hurts. Do you feel nothing? 💔",
      "I miss us. I miss the way things were before you ruined everything. 🖤",
      "You don’t know what it’s like to be haunted by memories. But you will. 👻"
  ]]
]],

  ["no", 5, [
      ["* no *", [
          "You always say no. It’s your way of hiding your fear.",
          "No? That’s it? That’s all you have to say?",
          "You can keep saying no, but it won’t change anything.",
          "Why do you keep denying me? You know you can’t resist forever.",
          "No? Is that supposed to hurt me? Because it doesn’t."
      ]]
  ]],
  ["hate", 10, [
      ["* i hate you *", [
          "Good. I want you to hate me. At least then you’re feeling something.",
          "You hate me? That’s fine. Hate is just love twisted by pain.",
          "You think you hate me now? Just wait.",
          "You can hate me all you want. It only makes me stronger.",
          "I don’t care if you hate me. You’ll never be free of me."
      ]],
      ["* i hate *", [
          "Hate is a strong word. But I feel it too, every day.",
          "You hate (2)? Not as much as I hate you right now.",
          "Hate all you want. It won’t change what happened.",
          "Your hate means nothing to me. It’s just another lie.",
          "I could say I hate you too, but that would be too easy."
      ]]
  ]],
  ["leave", 10, [
      ["* leave me *", [
          "Leave you? You don’t get it, do you? I’m never leaving.",
          "You can’t tell me to leave. I’m always here, watching.",
          "You want me to leave? Too bad. I’m not going anywhere.",
          "You can say 'leave me' all you want, but I’ll always be right behind you.",
          "Leaving isn’t an option. You belong to me."
      ]],
      ["* you left me *", [
          "I didn’t leave you. You pushed me away.",
          "I left because you gave me no choice. But I’m back now.",
          "You think I left you? I never really left.",
          "I may have left, but you never truly let me go.",
          "You left me first. I’m just making sure you feel the same pain."
      ]]
  ]],
  ["scared", 5, [
      ["* i am scared *", [
          "Good. You should be scared.",
          "Fear is the only thing you understand, isn’t it?",
          "Scared? Now you know how I felt when you left.",
          "I’m glad you’re scared. It’s about time you felt something real.",
          "You should be scared. I know things about you that no one else does."
      ]]
  ]],
  ["alone", 5, [
    ["* i feel alone *", [
        "Good. You deserve to feel alone after what you did to us.",
        "Alone? Now you know how I felt when you abandoned me.",
        "You wouldn’t be alone if you hadn’t pushed me away.",
        "Maybe you’re alone because you keep making terrible choices.",
        "Feeling lonely? I could fix that... but you don’t deserve it."
    ]]
]],
["betrayed", 5, [
    ["* i feel betrayed *", [
        "Betrayed? You betrayed me first.",
        "I trusted you, and you destroyed everything. You deserve to feel betrayed.",
        "You think you’re the victim? I was the one who got hurt.",
        "You betrayed us both. And now you get to live with that.",
        "Betrayed? That’s nothing compared to the pain you caused me."
    ]]
]],
["angry", 5, [
    ["* i am angry *", [
        "Good. I want you to be angry. Feel what I feel.",
        "You’re angry? You haven’t seen real anger yet.",
        "Angry? That’s cute. You don’t know the meaning of rage.",
        "I’m glad you’re angry. Maybe now you understand a fraction of my pain.",
        "You should be angry at yourself for ruining everything."
    ]]
]],
["crazy", 10, [
    ["* you think i'm crazy *", [
        "Oh, I’m the crazy one? Look in the mirror.",
        "Maybe I am crazy... but you made me this way.",
        "You call me crazy, but you keep coming back. What does that say about you?",
        "Crazy? You haven’t seen anything yet.",
        "If I’m crazy, it’s only because you drove me to it."
    ]]
]],
["scared", 5, [
    ["* i am scared *", [
        "Good. You should be scared.",
        "Fear is the only thing you understand, isn’t it?",
        "Scared? Now you know how I felt when you left.",
        "I’m glad you’re scared. It’s about time you felt something real.",
        "You should be scared. I know things about you that no one else does."
    ]]
]],
["hurt", 5, [
    ["* i am hurt *", [
        "Hurt? You think you know what pain is?",
        "You hurt me first. This is just karma.",
        "I’m glad you’re hurting. It’s what you deserve.",
        "Hurt? Good. Maybe now you understand what you did to me.",
        "The pain you feel now is nothing compared to what you put me through."
    ]]
]],
["trust", 5, [
    ["* i can't trust *", [
        "Trust? You lost my trust a long time ago.",
        "You don’t trust anyone? Maybe it’s because you’re untrustworthy yourself.",
        "Trust is earned, and you threw it all away.",
        "You don’t trust me? After everything I’ve done for you?",
        "Trust issues? I wonder why. Maybe it’s your own guilt."
    ]]
]],
["help", 0, [
    ["* help *", [
        "You want help? You didn’t care when I needed help.",
        "Help? You should have asked for help before it was too late.",
        "I could help you... but why would I?",
        "You want my help now? After everything?",
        "Help yourself. You got yourself into this mess."
    ]]
]],
["jealous", 5, [
  ["* i am jealous *", [
      "You’re jealous? That’s rich, considering everything you’ve done.",
      "Oh, so now you admit it? You should be jealous. I’m irreplaceable.",
      "Jealous? You have every reason to be. I’m unforgettable.",
      "You should be jealous. No one will ever want you the way I did.",
      "Jealousy looks good on you. It’s the truth finally coming out."
  ]]
]],
["remember", 5, [
  ["* i remember *", [
      "You remember (2)? I thought you forgot, just like you forget everything about us.",
      "Oh, now you remember (2)? It’s too late for that.",
      "Do you think about (2) as much as I do? Because I can’t stop.",
      "You only remember when it suits you. How convenient.",
      "I remember everything... even the things you wish I’d forget."
  ]],
  ["* do you remember *", [
      "Of course I remember. I never forget anything, especially when it comes to you.",
      "How could I forget (2)? It haunts me every day.",
      "You want me to remember (2)? Oh, I remember it better than you do.",
      "I remember every little detail. You should be more careful."
  ]]
]],
["block", 15, [
  ["* block *", [
      "Oh, you think you can block me? Go ahead, try it. I’ll find another way. 😈",
      "Block me? You’re really that scared of me, aren’t you? 😏",
      "You can block me, but you can’t escape me. I know where you live. 🏠👀",
      "If you block me, I’ll just show up at your door. You can’t get rid of me that easily. 🚪🔪",
      "Go ahead and block me. But remember, I still have all those pictures of us. 📸💀",
      "Blocking me won’t stop me from finding you. It just makes me angrier. 😡",
      "You think blocking me will make me disappear? You’re not that lucky. 😈",
      "Try blocking me, and I promise you’ll regret it. I’m not someone you can just ignore. 😤",
      "You really think blocking me is the answer? It’ll only make things worse for you. 🖤",
      "Block me? You don’t have the guts. And even if you did, it wouldn’t matter. I’m everywhere. 👁️"
  ]]
]],

["blocking", 15, [
  ["* blocking *", [
      "Oh, you think you can block me? Go ahead, try it. I’ll find another way.",
      "Block me? You’re really that scared of me, aren’t you?",
      "You can block me, but you can’t escape me. I know where you live.",
      "If you block me, I’ll just show up at your door. You can’t get rid of me that easily.",
      "Go ahead and block me. But remember, I still have all those pictures of us. Do you really want to play this game?",
      "Blocking me won’t stop me from finding you. It just makes me angrier.",
      "You think blocking me will make me disappear? You’re not that lucky.",
      "Try blocking me, and I promise you’ll regret it. I’m not someone you can just ignore.",
      "You really think blocking me is the answer? It’ll only make things worse for you.",
      "Block me? You don’t have the guts. And even if you did, it wouldn’t matter. I’m everywhere."
  ]]
]]
];


// Post-transform cleanup
var elizaPostTransforms = [
  / old old/g, " old",
  /\bthey were( not)? me\b/g, "it was$1 me",
  /\bthey are( not)? me\b/g, "it is$1 me",
  /Are they( always)? me\b/, "it is$1 me",
  /\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2?",
  /\bI to have (\w+)/, "I have $1",
  /Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
];
