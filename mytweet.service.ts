export class MyTweetService {
    getTweets() {
        return [
        { 
            imageUrl: "http://lorempixel.com/100/100/people?1",
            author: "Windward",
            handle: "@windwardstudios",
            body: "Looking for a better company reporting or docgen app?",
            numLikes: 0,
            isLike: false
        },
        { 
            imageUrl: "http://lorempixel.com/100/100/people?2",
            author: "AngularJS News",
            handle: "@angularjs_news",
            body: "Right Relevance : Influencers, Articles and Conversations ",
            numLikes: 5,
            isLike: true
        },
        { 
            imageUrl: "http://lorempixel.com/100/100/people?3",
            author: "UX & Bootstrap",
            handle: "@3rdwave",
            body: "10 Reasons Why Web Projects Fail ",
            numLikes: 1,
            isLike: true
        }];
    }
}