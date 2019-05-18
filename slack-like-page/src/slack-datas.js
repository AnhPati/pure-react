let conversations = {
    channels: [    
        {
            id: "c-1",
            name: "ReactJS",
            active: true,
            news: false,
            posts: [
                {
                    id: 1,
                    author: "James",
                    postDate: "2016-07-30 21:24:37",
                    content: "Wesh ma gueule, bien ou bien ?"
                },  
                {
                    id: 2,
                    author: "Moi",
                    postDate: "2016-07-30 21:35:37",
                    content: "Bah bien bien quoi !"
                },
                {
                    id: 3,
                    author: "Cindy",
                    postDate: "2016-07-30 21:40:37",
                    content: "Les hommes sont si bêtes..."
                },
            ]
        },
        {
            id: "c-2",
            name: "Aléatoire",
            active: false,
            news: false,
            posts: [
                {
                    id: 1,
                    author: "Moi",
                    postDate: "2016-10-30 21:24:37",
                    content: "Qui mange des pommes par ici ?"
                },
                {
                    id: 2,
                    author: "Cindy",
                    postDate: "2016-11-02 09:35:37",
                    content: "Tu veux dire des fruits ?"
                }, {
                    id: 3,
                    author: "James",
                    postDate: "2016-11-02 11:40:37",
                    content: "Non il parle des légumes, patate !"
                },
            ]
        },
        {
            id: "c-3",
            name: "Présentation",
            active: false,
            news: true,
            posts: [
                {
                    id: 1,
                    author: "Cindy",
                    postDate: "2015-05-30 21:24:37",
                    content: "Bonjour moi c'est Cindy, je viens du bain et vous ?"
                },
                {
                    id: 2,
                    author: "Moi",
                    postDate: "2015-05-31 12:35:37",
                    content: "Salut moi c'est Rhum Komsacebwa. Enchanté !"
                }, {
                    id: 3,
                    author: "James",
                    postDate: "2015-05-31 18:40:37",
                    content: "Oue bah bienvenue chez vous, moi c'est James..."
                },
            ]
        }
    ],
    people: [
       {
           id: "p-1",
           name: "James",
           active: false,
           news: false,
           posts: [
                {
                    id: 1,
                    author: "James",
                    postDate: "2016-07-30 21:24:37",
                    content: "Wesh ma gueule, bien ou bien ?"
                },
                {
                    id: 2,
                    author: "Moi",
                    postDate: "2016-07-30 21:35:37",
                    content: "Bah bien bien quoi !"
                }, {
                    id: 3,
                    author: "James",
                    postDate: "2016-07-30 21:40:37",
                    content: "Bah on a plus rien à se dire alors..."
                },
            ]
       },
       {
            id: "p-2",
            name: "Cindy",
            active: false,
            news: true,
            posts: [
                {
                    id: 1,
                    author: "Moi",
                    postDate: "2016-10-30 21:24:37",
                    content: "Qui mange des pommes par ici ?"
                },
                {
                    id: 2,
                    author: "Cindy",
                    postDate: "2016-11-02 09:35:37",
                    content: "Tu veux dire des fruits ?"
                }, {
                    id: 3,
                    author: "Moi",
                    postDate: "2016-11-02 11:40:37",
                    content: "Non je parle des légumes, patate !"
                },
            ]
        },
        {
            id: "p-3",
            name: "Moi",
            active: false,
            news: false,
            posts: [
                {
                    id: 1,
                    author: "Moi",
                    postDate: "2015-05-30 21:24:37",
                    content: "Memo 1: Penser au pain."
                },
                {
                    id: 2,
                    author: "Moi",
                    postDate: "2015-05-31 12:35:37",
                    content: "Memo 2: Toujours finir ce que je commence."
                }, {
                    id: 3,
                    author: "Moi",
                    postDate: "2015-05-31 18:40:37",
                    content: "Memo 3: Apprendre c'est long et fastidieux, il faut donc persévérer !"
                },
            ]
        }
    ]
};

export {conversations};