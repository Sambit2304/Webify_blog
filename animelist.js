document.addEventListener("DOMContentLoaded", function () {
    const animeList = document.getElementById("anime-list");
    const animeData = [
        {
            name: "1.Fullmetal Alchemist: Brotherhood",
            link: "https://aniwatch.to/fullmetal-alchemist-brotherhood-1?ref=search",
            description: "The struggle of most anime is laying out intricate world-building while balancing a cast of memorable characters, iconic moments, and thrilling fights. And that's what makes Fullmetal Alchemist: Brotherhood so special. The framing device for our entry into this sprawling world is one of sympathy. We understand why the Elric brothers would practice forbidden alchemy in an attempt to resurrect their dead mother at the cost of their physical bodies. And yet despite divine intervention slapping them in the face, telling them no, they continue on their quest. And that quest to resurrect their mother paves the way for motivation that guides them through a world of monsters, government conspiracy, and divinity. And despite all this elegance, FMA: Brotherhood also knows when to lay it all bare in unforgettable moments that will leave you standing in front of your TV cheering for the Elric brothers.",
        },
        {
            name: "2.Cowboy Bebop",
            link: "https://aniwatch.to/cowboy-bebop-27?ref=search",
            description: "It’s hard to believe Cowboy Bebop is over 20 years old because of how well it still holds up, both in its conception and its execution. The space western that introduced the world to Spike, Jet, Faye, Ed and of course Ein still looks gorgeous, with a resonant story, strong characters and one heck of a soundtrack that ensures it remains one of the best anime ever made. Cowboy Bebop has had an indelible impact that reaches far beyond anime; everyone from Orson Scott Card to Rian Johnson to Robin Williams have praised the series and cited its influence on their work. Cowboy Bebop still works so well because of the continually relatable story at the heart of its genre-bending 26-episode run. Its exploration of adult themes like loss anchors the crew’s journey throughout the stars, making it a series we’re happy to revisit even after all this time. Three, two, one, let's jam!",
        },
        {
            name: "3.One Piece",
            link: "https://aniwatch.to/one-piece-100?ref=search",
            description: "After almost 20 years, One Piece continues to entertain audiences worldwide with more than 1000 episodes. Going as long as the series has been with its pirate journey, it can be tough for any anime to keep up with fans both new and old. One Piece manages to do that with the amazing mind of Eiichiro Oda. The world building, the deep characters, the hilarious adventure, and the amazing adaptation that sometimes beats out the manga catapults this series to the top of shonen anime history. It’s through Oda’s vision that the series has had such a lasting impact on viewers throughout the years and it doesn’t look to be slowing down any time soon.",
        },
        {
            name: "4.Monster",
            link: "https://aniwatch.to/monster-37?ref=search",
            description: "Monster is quite simply one of the best stories ever told in anime/manga form, but more than that, it’s a special anime because of how different it is from everything else. In a medium dominated by giant robots, superpowered heroes that shoot beams out of their hands, and virtual fantasy worlds, Monster is refreshingly grounded in reality. It’s a dark, mature, gritty thriller about a good man who loses everything after doing what he believed to be the right thing, and the dark descent that he must endure in order to correct his mistake.",
        },
        {
            name: "5.Naruto Shippuden",
            link: "https://aniwatch.to/naruto-shippuden-355?ref=search",
            description: "The long-running Naruto series has been referred to as one of the “big three” anime because of its wild popularity around the world, and for good reason. It’s full of action-packed fight sequences, hilariously fun moments, and dramatic scenes that pull at your heartstrings. In Naruto Shippuden, the story takes a darker and more serious tone as the characters are now older and face even more daunting challenges from the shadows as well as themselves. The Naruto anime series is known for its memorable characters and relationships, and it continues to be one of the biggest shounen anime ever, even long after it has ended.",
        },
        {
            name: "6.Dragon Ball Z",
            link: "https://aniwatch.to/dragon-ball-z-325",
            description: "Dragon Ball Z was a gateway drug for many a young anime fan, and for good reason. The series isn't particularly deep, as it basically revolves around superhuman martial artist Goku and his friends testing their mettle against an increasingly powerful and outlandish series of foes. But what the series lacks in terms of plot, it more than makes up for in humor, kooky characters and incredible action. How can you not have fun with a martial arts fantasy where most of the characters are strong enough to shatter planets with their bare hands?",
        },
        {
            name: "7.Hunter x Hunter",
            link: "https://aniwatch.to/hunter-x-hunter-128?ref=search",
            description: "Hunter x Hunter (pronounced Hunter Hunter) starts out with a familiar trope: A hero, in this case a young boy named Gon, leaves his small town for the first time on an adventure. He leaves the island on a quest to find his long-forgotten father who had left him behind. His only clue? He’s a world-famous licensed Hunter -- so Gon sets off to take the notoriously deadly exam and become a Hunter himself. It sounds mundane and almost cheery, but Hunter x Hunter is anything but. The emotional highs and lows and the arcs of both the protagonists and antagonists are some of the best. As with most shonen, the dramatic action is fantastic, too.",
        },
        {
            name: "8.Neon Genesis Evangelion",
            link: "https://aniwatch.to/neon-genesis-evangelion-209?ref=search",
            description: "There’s a reason we all still need an ending explained for Neon Genesis Evangelion more than 20 years after its release. The mythology behind the production of Hideaki Anno’s groundbreaking anime has become as much a part of Evangelion’s story as the anime itself, with its final two episodes still being divisive and up for debate. There’s no debate over Evangelion’s continued excellence, though, both as an elevated take on the mech anime genre and as a harrowing and incredibly personal exploration of depression. Even with countless movie and series sequels and reimaginings, nothing touches the masterwork of Neon Genesis Evangelion’s first run, which remains a fan-favorite and showcases how a singular auteur approach to storytelling can create art that continues to resonate for generations.",
        },
        {
            name: "9.Demon Slayer",
            link: "https://aniwatch.to/demon-slayer-kimetsu-no-yaiba-47?ref=search",
            description: "The record-breaking Demon Slayer has blown up tremendously in the last few years and it’s not too surprising to those that have followed the series up until now. Every single episode of Demon Slayer is consistently impressive with smooth animation that never compromises its gorgeous art, incredible visual effects that bring the spectacular battles to life, and an amazing soundtrack that punctuates its many emotional high points. Not only that, Demon Slayer will make you laugh out loud thanks to the over-the-top absurdity of characters like Zentisu and Inosuke, and it’ll just as easily make you tear up with its heavy themes of loss and family.",
        },
        {
            name: "10.Attack on Titan",
            link: "https://aniwatch.to/attack-on-titan-112?ref=search",
            description: "On that day, humanity was reminded of the fear they held for the titans. Attack on Titan became an instant classic when it was first released in 2013. Following three friends, Eren Yeager, Mikasa Ackerman, and Armin Arlert, they fight alongside humanity's greatest soldiers against gargantuan Titans and the threats that lie beyond their city walls. What started as a typical shonen anime evolved into an amazing piece of art tackling themes of war, classism/racism, among other heavy topics. It’s hard to find anyone who has not felt the impact of this show, with director Alex Garland even calling out the series as a source of inspiration. A mixture of high-intensity action, slow character-driven scenes, and Game of Thrones-esque deaths that come out of nowhere culminate into one of the greatest anime to emerge from the modern age.",
        },
    ];

    animeData.forEach((anime) => {
        const listItem = document.createElement("li");
        const title = document.createElement("h2");
        const description = document.createElement("p");
        const anchor = document.createElement("a");

        title.textContent = anime.name;
        description.textContent = anime.description;
        anchor.href = anime.link;
        anchor.textContent = "Watch Now";

        listItem.appendChild(title);
        listItem.appendChild(description);
        listItem.appendChild(anchor);
        animeList.appendChild(listItem);
    });
});