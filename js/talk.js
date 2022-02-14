new TypeIt("#lywry", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("航江和小迎迎")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("第一个情人节")
    .pause(2000)
    .go();

new TypeIt('#talkToWRY', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 50
}).go();