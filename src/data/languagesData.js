import { allImages } from "../images/allImages";
import { dataArticles, dataArticlesNumbered, dataArticlesRent } from "./data";
export const allData = {
    Eng: {
        headerData: {
            navigationTop: [
                {
                    id: 0,
                    title: "About us",
                    link: "",
                    class: "about",
                },
                {
                    id: 1,
                    title: "Contacts",
                    link: "",
                    class: "contacts",
                },
                {
                    id: 2,
                    title: "Become a partner",
                    link: "",
                    class: "become",
                },
                {
                    id: 3,
                    title: "Investigation",
                    link: "",
                    class: "investigation",
                },
            ],
            navigationBottom: [
                {
                    id: 0,
                    title: "Collection",
                    link: "",
                    class: "collection",
                },
                {
                    id: 1,
                    title: "News",
                    link: "",
                    class: "news",
                },
                {
                    id: 2,
                    title: "Club",
                    link: "",
                    class: "club",
                },
                {
                    id: 3,
                    title: "Best iAgent",
                    link: "",
                    class: "best",
                },
                {
                    id: 4,
                    title: "Design",
                    link: "",
                    class: "design",
                },
                {
                    id: 5,
                    title: "Made in Spain",
                    link: "",
                    class: "madeInSpain",
                },
                {
                    id: 6,
                    title: "Forum",
                    link: "",
                    class: "forum",
                },
                {
                    id: 7,
                    title: "Blog",
                    link: "",
                    class: "blog",
                },
            ],
        },
        footerData: {
            links: [
                {
                    id: 0,
                    title: "iAgent",
                    content: [
                        {
                            id: 0,
                            title: "About us",
                            link: "",
                        },
                        {
                            id: 1,
                            title: "Contacts",
                            link: "",
                        },
                        {
                            id: 2,
                            title: "Investigation",
                            link: "",
                        },
                        {
                            id: 3,
                            title: "Blog",
                            link: "",
                        },
                        {
                            id: 4,
                            title: "Forum",
                            link: "",
                        },
                    ],
                },
                {
                    id: 1,
                    title: "Categories",
                    content: [
                        {
                            id: 0,
                            title: "Collection",
                            link: "",
                        },
                        {
                            id: 1,
                            title: "News",
                            link: "",
                        },
                        {
                            id: 2,
                            title: "Club",
                            link: "",
                        },
                        {
                            id: 3,
                            title: "Best iAgent",
                            link: "",
                        },
                        {
                            id: 4,
                            title: "Design",
                            link: "",
                        },
                        {
                            id: 5,
                            title: "Made in Spain",
                            link: "",
                        },
                    ],
                },
                {
                    id: 2,
                    title: "FOR BUSINESS",
                    content: [
                        {
                            id: 0,
                            title: "Become a partner",
                            link: "",
                        },
                    ],
                },
            ],
            contacts: {
                id: 0,
                title: "CONTACTS",
                content: [
                    {
                        id: 0,
                        title: "098 500 52 52",
                        link: "tel:+380985005252",
                    },
                    {
                        id: 1,
                        title: "098 500 52 52",
                        link: "tel:+380985005252",
                    },
                    {
                        id: 2,
                        title: "adress 23 street 234",
                        link: "https://www.google.com/maps/place/%D0%9A%D0%B8%D1%97%D0%B2,+%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0,+02000/@50.4020075,30.2030542,10z/data=!3m1!4b1!4m6!3m5!1s0x40d4cf4ee15a4505:0x764931d2170146fe!8m2!3d50.4501!4d30.5234!16zL20vMDJzbjM0?entry=ttu",
                    },
                ],
            },
        },
        homePageData: {
            focusData: {
                text: {
                    title: "Focus",
                    asideInfo: {
                        title: "Got ideas for our investigation?",
                        buttonText: "Share it!",
                    },
                },
                content: dataArticles,
            },
            sliderData: [
                {
                    id: 0,
                    image: allImages.sliderImages.imgSlider1,
                    title: "Become an iAgent Partner",
                    desc: "Let's make the world of real estate better together",
                    background: "#E5E6F4",
                },
                {
                    id: 1,
                    image: allImages.sliderImages.imgSlider2,
                    title: "Hot deals",
                    desc: "Wow really the best deals",
                    background: "#F4F2E5",
                },
            ],
            newsData: {
                news: dataArticles,
                blog: {
                    title: "Recent blog posts",
                    content: dataArticles,
                },
                text: {
                    title: "News",
                    subscribe: {
                        title: "Subscribe to the newsletter",
                        buttonText: "subscribe",
                    },
                },
            },
            bestData: {
                text: {
                    title: "Best",
                    text: "Top 5 real estate agencies of the month",
                },
                content: dataArticlesNumbered,
            },
            collectionData: {
                text: {
                    title: "Collection",
                    buttons: [
                        {
                            id: 0,
                            name: "Compra",
                            text: "Buy",
                        },
                        {
                            id: 1,
                            name: "Alquiler",
                            text: "Rent",
                        },
                    ],
                },
                content: {
                    Compra: dataArticles,
                    Alquiler: dataArticlesRent,
                },
            },
        },
        newsPageData: {
            newsData: {
                text: {
                    title: "News",
                    subscribe: {
                        title: "Subscribe to the newsletter",
                        buttonText: "Subscribe",
                    },
                    search: {
                        placeholder: "Search...",
                        filters: [
                            {
                                id: 0,
                                iconActive:
                                    allImages.newsPageImg.searchImg
                                        .hotSearchActive,
                                iconDisable:
                                    allImages.newsPageImg.searchImg
                                        .hotSearchDisable,
                                text: "hot",
                            },
                            {
                                id: 1,
                                iconActive:
                                    allImages.newsPageImg.searchImg
                                        .newSearchActive,
                                iconDisable:
                                    allImages.newsPageImg.searchImg
                                        .newSearchDisable,
                                text: "new",
                            },
                            {
                                id: 2,
                                iconActive:
                                    allImages.newsPageImg.searchImg
                                        .mostSearchActive,
                                iconDisable:
                                    allImages.newsPageImg.searchImg
                                        .mostSearchDisable,
                                text: "most comment",
                            },
                        ],
                    },
                },
                content: dataArticles,
            },
            commentsData: {
                text: {
                    title: "Comments",
                },
                content: dataArticles,
            },
        },
    },
    Spa: {},
    Rus: {
        headerData: {
            navigationTop: [
                {
                    id: 0,
                    title: "О нас",
                    link: "",
                    class: "about",
                },
                {
                    id: 1,
                    title: "Контакты",
                    link: "",
                    class: "contacts",
                },
                {
                    id: 2,
                    title: "Стать партнером",
                    link: "",
                    class: "become",
                },
                {
                    id: 3,
                    title: "Расследование",
                    link: "",
                    class: "investigation",
                },
            ],
            navigationBottom: [
                {
                    id: 0,
                    title: "Колекции",
                    link: "",
                    class: "collection",
                },
                {
                    id: 1,
                    title: "Новости",
                    link: "",
                    class: "news",
                },
                {
                    id: 2,
                    title: "Клуб",
                    link: "",
                    class: "club",
                },
                {
                    id: 3,
                    title: "Лучшие iAgent",
                    link: "",
                    class: "best",
                },
                {
                    id: 4,
                    title: "Дизайн",
                    link: "",
                    class: "design",
                },
                {
                    id: 5,
                    title: "Сделано в Испании",
                    link: "",
                    class: "madeInSpain",
                },
                {
                    id: 6,
                    title: "Форум",
                    link: "",
                    class: "forum",
                },
                {
                    id: 7,
                    title: "Блог",
                    link: "",
                    class: "blog",
                },
            ],
        },
        footerData: {
            links: [
                {
                    id: 0,
                    title: "iAgent",
                    content: [
                        {
                            id: 0,
                            title: "О нас",
                            link: "",
                        },
                        {
                            id: 1,
                            title: "Контакты",
                            link: "",
                        },
                        {
                            id: 2,
                            title: "Расследование",
                            link: "",
                        },
                        {
                            id: 3,
                            title: "Блог",
                            link: "",
                        },
                        {
                            id: 4,
                            title: "Форум",
                            link: "",
                        },
                    ],
                },
                {
                    id: 1,
                    title: "Категории",
                    content: [
                        {
                            id: 0,
                            title: "Колекции",
                            link: "",
                        },
                        {
                            id: 1,
                            title: "Новости",
                            link: "",
                        },
                        {
                            id: 2,
                            title: "Клуб",
                            link: "",
                        },
                        {
                            id: 3,
                            title: "Лучшие iAgent",
                            link: "",
                        },
                        {
                            id: 4,
                            title: "Дизайн",
                            link: "",
                        },
                        {
                            id: 5,
                            title: "Сделано в Испании",
                            link: "",
                        },
                    ],
                },
                {
                    id: 2,
                    title: "Для бизнеса",
                    content: [
                        {
                            id: 0,
                            title: "Стать партнером",
                            link: "",
                        },
                    ],
                },
            ],
            contacts: {
                id: 0,
                title: "Контакты",
                content: [
                    {
                        id: 0,
                        title: "098 500 52 52",
                        link: "tel:+380985005252",
                    },
                    {
                        id: 1,
                        title: "098 500 52 52",
                        link: "tel:+380985005252",
                    },
                    {
                        id: 2,
                        title: "Адрес 23 улица 234",
                        link: "https://www.google.com/maps/place/%D0%9A%D0%B8%D1%97%D0%B2,+%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0,+02000/@50.4020075,30.2030542,10z/data=!3m1!4b1!4m6!3m5!1s0x40d4cf4ee15a4505:0x764931d2170146fe!8m2!3d50.4501!4d30.5234!16zL20vMDJzbjM0?entry=ttu",
                    },
                ],
            },
        },
        homePageData: {
            focusData: {
                text: {
                    title: "Фокус",
                    asideInfo: {
                        title: "Есть идеи для нашего расследования?",
                        buttonText: "Поделись!",
                    },
                },
                content: dataArticles,
            },
            sliderData: [
                {
                    id: 0,
                    image: allImages.sliderImages.imgSlider1,
                    title: "Стать партнером iAgent",
                    desc: "сделаем мир недвижимости лучше вместе",
                    background: "#E5E6F4",
                },
                {
                    id: 1,
                    image: allImages.sliderImages.imgSlider2,
                    title: "Горячие предложения",
                    desc: "воу действительнно лучшие предложения",
                    background: "#F4F2E5",
                },
            ],
            newsData: {
                news: dataArticles,
                blog: {
                    title: "Последние записи в блоге",
                    content: dataArticles,
                },
                text: {
                    title: "Новости",
                    subscribe: {
                        title: "Подписаться на рассылку",
                        buttonText: "Подписаться",
                    },
                },
            },
            bestData: {
                text: {
                    title: "Лучшие",
                    text: "Топ 5 агентств недвижимости месяца",
                },
                content: dataArticlesNumbered,
            },
            collectionData: {
                text: {
                    title: "Колекции",
                    buttons: [
                        {
                            id: 0,
                            name: "Compra",
                            text: "Покупка",
                        },
                        {
                            id: 1,
                            name: "Alquiler",
                            text: "Аренда",
                        },
                    ],
                },
                content: {
                    Compra: dataArticles,
                    Alquiler: dataArticlesRent,
                },
            },
        },
        newsPageData: {
            newsData: {
                text: {
                    title: "Новости",
                    subscribe: {
                        title: "Подписаться на рассылку",
                        buttonText: "Подписаться",
                    },
                    search: {
                        placeholder: "Найти...",
                        filters: [
                            {
                                id: 0,
                                iconActive:
                                    allImages.newsPageImg.searchImg
                                        .hotSearchActive,
                                iconDisable:
                                    allImages.newsPageImg.searchImg
                                        .hotSearchDisable,
                                text: "Hot",
                            },
                            {
                                id: 1,
                                iconActive:
                                    allImages.newsPageImg.searchImg
                                        .newSearchActive,
                                iconDisable:
                                    allImages.newsPageImg.searchImg
                                        .newSearchDisable,
                                text: "new",
                            },
                            {
                                id: 2,
                                iconActive:
                                    allImages.newsPageImg.searchImg
                                        .mostSearchActive,
                                iconDisable:
                                    allImages.newsPageImg.searchImg
                                        .mostSearchDisable,
                                text: "most comment",
                            },
                        ],
                    },
                },
                content: dataArticles,
            },
        },
    },
};
