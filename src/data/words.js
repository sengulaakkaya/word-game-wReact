const words = [
    "apple", "animal", "answer", "beach", "birthday",
    "book", "bread", "brother", "building", "button",
    "camera", "car", "chair", "change", "child",
    "city", "class", "cloud", "coffee", "computer",
    "country", "dance", "daughter", "day", "door",
    "dream", "drink", "earth", "family", "father",
    "friend", "garden", "girl", "glass", "green",
    "group", "happy", "house", "idea", "island",
    "job", "key", "kitchen", "language", "letter",
    "light", "market", "money", "morning", "mother",
    "movie", "music", "night", "number", "orange",
    "paper", "parent", "party", "people", "phone",
    "picture", "place", "planet", "player", "school",
    "season", "shirt", "sister", "sky", "sleep",
    "smile", "snow", "song", "sound", "space",
    "star", "street", "student", "summer", "table",
    "teacher", "team", "thing", "time", "today",
    "tomorrow", "train", "travel", "tree", "water",
    "weather", "window", "winter", "woman", "world",
    "write", "yellow", "young", "animal", "beautiful"
];
export function getWord(){
    return words[Math.floor(Math.random()*words.length)]
}