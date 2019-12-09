const contracts = [
    {
        id: 1,
        title: "Création site web",
        last_update: "2019-10-9",
        owner: {
            fname: "Mollie",
            lname: "Jennings",
            skills: [
                {
                    id: 1,
                    label: "Graphic Designer",
                },
                {
                    id: 2,
                    label: "Motion Designer",
                },
            ],
            total_reviews: 22,
            review_score: 4.5,
        },
        conditions: [
            {
                id: 1,
                title: "A title",
                desc: "A description",
            },
        ],
    }
];

const categories = [
    {
        id: 1,
        label: 'Dév',
        icon: `icon-dev`,
        subCategories: [
            {
                id: 1,
                label: "ReactJs",
                condition: {
                    title: "ReactJs: Headset No Longer Wired For Sound",
                    desc: "Having used discount toner cartridges for twenty years, there have been a lot of changes in the toner cartridge market.",
                }
            },
            {
                id: 2,
                label: "React Native",
                condition: {
                    title: "React native: How To Put Movies On Iphone",
                    desc: "Having used discount toner cartridges for twenty years, there have been a lot of changes in the toner cartridge market.",
                }
            },
            {
                id: 3,
                label: "Laravel",
                condition: {
                    title: "Laravel: How To Put Movies On Iphone",
                    desc: "Having used discount toner cartridges for twenty years, there have been a lot of changes in the toner cartridge market.",
                }
            },
            {
                id: 4,
                label: "VueJs",
                condition: {
                    title: "VueJs: Steps In Installing Rack Mount Lcd Monitors",
                    desc: "Having used discount toner cartridges for twenty years, there have been a lot of changes in the toner cartridge market.",
                }
            },
            {
                id: 5,
                label: "PHP",
                condition: {
                    title: "PHP: Steps In Installing Rack Mount Lcd Monitors",
                    desc: "Having used discount toner cartridges for twenty years, there have been a lot of changes in the toner cartridge market.",
                }
            },
            {
                id: 6,
                label: "Java",
                condition: {
                    title: "Java: Steps In Installing Rack Mount Lcd Monitors",
                    desc: "Having used discount toner cartridges for twenty years, there have been a lot of changes in the toner cartridge market.",
                }
            },
        ]
    },
    {
        id: 2,
        label: 'Coaching',
        icon: `icon-coaching`,
        subCategories: [
            {
                id: 7,
                label: "Coaching 1",
                condition: {
                    title: "Coaching 1: Steps In Installing Rack Mount Lcd Monitors",
                    desc: "Having used discount toner cartridges for twenty years, there have been a lot of changes in the toner cartridge market.",
                }
            },
            {
                id: 8,
                label: "Coaching 2",
                condition: {
                    title: "Coaching 2: Steps In Installing Rack Mount Lcd Monitors",
                    desc: "Having used discount toner cartridges for twenty years, there have been a lot of changes in the toner cartridge market.",
                }
            },
            {
                id: 9,
                label: "Coaching 3",
                condition: {
                    title: "Coaching 3: Steps In Installing Rack Mount Lcd Monitors",
                    desc: "Having used discount toner cartridges for twenty years, there have been a lot of changes in the toner cartridge market.",
                }
            },
            {
                id: 10,
                label: "Coaching 4",
                condition: {
                    title: "Coaching 4: Steps In Installing Rack Mount Lcd Monitors",
                    desc: "Having used discount toner cartridges for twenty years, there have been a lot of changes in the toner cartridge market.",
                }
            },
        ]
    },
    {
        id: 3,
        label: 'Marketing',
        icon: `icon-marketing`,
        subCategories: [
            {
                id: 11,
                label: "Marketing 1",
                condition: {
                    title: "Marketing 1: Steps In Installing Rack Mount Lcd Monitors",
                    desc: "Having used discount toner cartridges for twenty years, there have been a lot of changes in the toner cartridge market.",
                }
            },
            {
                id: 12,
                label: "Marketing 2",
                condition: {
                    title: "Marketing 2: Steps In Installing Rack Mount Lcd Monitors",
                    desc: "Having used discount toner cartridges for twenty years, there have been a lot of changes in the toner cartridge market.",
                }
            },
            {
                id: 13,
                label: "Marketing 3",
                condition: {
                    title: "Marketing 3: Steps In Installing Rack Mount Lcd Monitors",
                    desc: "Having used discount toner cartridges for twenty years, there have been a lot of changes in the toner cartridge market.",
                }
            },
            {
                id: 14,
                label: "Marketing 4",
                condition: {
                    title: "Marketing 4: Steps In Installing Rack Mount Lcd Monitors",
                    desc: "Having used discount toner cartridges for twenty years, there have been a lot of changes in the toner cartridge market.",
                }
            },
        ],
    },
    {
        id: 4,
        label: 'Jeux Vidéo',
        icon: `icon-video_games`,
        subCategories: [
            {
                id: 15,
                label: "Video games 1",
                condition: {
                    title: "Video games 1: Steps In Installing Rack Mount Lcd Monitors",
                    desc: "Having used discount toner cartridges for twenty years, there have been a lot of changes in the toner cartridge market.",
                }
            },
            {
                id: 16,
                label: "Video games 2",
                condition: {
                    title: "Video games 2: Steps In Installing Rack Mount Lcd Monitors",
                    desc: "Having used discount toner cartridges for twenty years, there have been a lot of changes in the toner cartridge market.",
                }
            },
            {
                id: 17,
                label: "Video games 3",
                condition: {
                    title: "Video games 3: Steps In Installing Rack Mount Lcd Monitors",
                    desc: "Having used discount toner cartridges for twenty years, there have been a lot of changes in the toner cartridge market.",
                }
            },
            {
                id: 18,
                label: "Video games 4",
                condition: {
                    title: "Video games 4: Steps In Installing Rack Mount Lcd Monitors",
                    desc: "Having used discount toner cartridges for twenty years, there have been a lot of changes in the toner cartridge market.",
                }
            },
        ],
    },
    {
        id: 5,
        label: 'Marketing',
        icon: `icon-marketing`,
        subCategories: [
            {
                id: 19,
                label: "Marketing 11",
                condition: {
                    title: "Marketing 11: Steps In Installing Rack Mount Lcd Monitors",
                    desc: "Having used discount toner cartridges for twenty years, there have been a lot of changes in the toner cartridge market.",
                }
            },
            {
                id: 20,
                label: "Marketing 22",
                condition: {
                    title: "Marketing 22: Video games 4: Steps In Installing Rack Mount Lcd Monitors",
                    desc: "Having used discount toner cartridges for twenty years, there have been a lot of changes in the toner cartridge market.",
                }
            },
            {
                id: 21,
                label: "Marketing 33",
                condition: {
                    title: "Marketing 33: Video games 4: Steps In Installing Rack Mount Lcd Monitors",
                    desc: "Having used discount toner cartridges for twenty years, there have been a lot of changes in the toner cartridge market.",
                }
            },
            {
                id: 22,
                label: "Marketing 44",
                condition: {
                    title: "Marketing 44: Video games 4: Steps In Installing Rack Mount Lcd Monitors",
                    desc: "Having used discount toner cartridges for twenty years, there have been a lot of changes in the toner cartridge market.",
                }
            },
        ],
    },
    {
        id: 6,
        label: 'Jeux Vidéo',
        icon: `icon-video_games`,
        subCategories: [
            {
                id: 23,
                label: "Video games 11",
                condition: {
                    title: "Video games 11: Steps In Installing Rack Mount Lcd Monitors",
                    desc: "Having used discount toner cartridges for twenty years, there have been a lot of changes in the toner cartridge market.",
                }
            },
            {
                id: 24,
                label: "Video games 22",
                condition: {
                    title: "Video games 22: Steps In Installing Rack Mount Lcd Monitors",
                    desc: "Having used discount toner cartridges for twenty years, there have been a lot of changes in the toner cartridge market.",
                }
            },
            {
                id: 25,
                label: "Video games 33",
                condition: {
                    title: "Video games 33: Steps In Installing Rack Mount Lcd Monitors",
                    desc: "Having used discount toner cartridges for twenty years, there have been a lot of changes in the toner cartridge market.",
                }
            },
            {
                id: 26,
                label: "Video games 44",
                condition: {
                    title: "Video games 44: Steps In Installing Rack Mount Lcd Monitors",
                    desc: "Having used discount toner cartridges for twenty years, there have been a lot of changes in the toner cartridge market.",
                }
            },
        ],
    },
    {
        id: 7,
        label: 'Marketing',
        icon: `icon-marketing`,
        subCategories: [
            {
                id: 27,
                label: "Marketing 111",
                condition: {
                    title: "Marketing 111: Steps In Installing Rack Mount Lcd Monitors",
                    desc: "Having used discount toner cartridges for twenty years, there have been a lot of changes in the toner cartridge market.",
                }
            },
            {
                id: 28,
                label: "Marketing 222",
                condition: {
                    title: "Marketing 222: Steps In Installing Rack Mount Lcd Monitors",
                    desc: "Having used discount toner cartridges for twenty years, there have been a lot of changes in the toner cartridge market.",
                }
            },
            {
                id: 29,
                label: "Marketing 333",
                condition: {
                    title: "Marketing 333: Steps In Installing Rack Mount Lcd Monitors",
                    desc: "Having used discount toner cartridges for twenty years, there have been a lot of changes in the toner cartridge market.",
                }
            },
            {
                id: 30,
                label: "Marketing 444",
                condition: {
                    title: "Marketing 444: Steps In Installing Rack Mount Lcd Monitors",
                    desc: "Having used discount toner cartridges for twenty years, there have been a lot of changes in the toner cartridge market.",
                }
            },
        ],
    },
    {
        id: 8,
        label: 'Jeux Vidéo',
        icon: `icon-video_games`,
        subCategories: [
            {
                id: 31,
                label: "Video games 111",
                condition: {
                    title: "Video games 111: Steps In Installing Rack Mount Lcd Monitors",
                    desc: "Having used discount toner cartridges for twenty years, there have been a lot of changes in the toner cartridge market.",
                }
            },
            {
                id: 32,
                label: "Video games 222",
                condition: {
                    title: "Video games 222: Steps In Installing Rack Mount Lcd Monitors",
                    desc: "Having used discount toner cartridges for twenty years, there have been a lot of changes in the toner cartridge market.",
                }
            },
            {
                id: 33,
                label: "Video games 333",
                condition: {
                    title: "Video games 333: Steps In Installing Rack Mount Lcd Monitors",
                    desc: "Having used discount toner cartridges for twenty years, there have been a lot of changes in the toner cartridge market.",
                }
            },
            {
                id: 34,
                label: "Video games 444",
                condition: {
                    title: "Video games 444: Steps In Installing Rack Mount Lcd Monitors",
                    desc: "Having used discount toner cartridges for twenty years, there have been a lot of changes in the toner cartridge market.",
                }
            },
        ],
    },
];

export {contracts, categories};