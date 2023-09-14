import { allImages } from "../images/allImages";
import { dataArticles } from "./data";

export const allData = {
    Eng: {
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
            videosData: {},
        },
    },
    Spa: {},
    Rus: {
        pagesText: {
            homePageData: {
                focus: {
                    title: "Фокус",
                },
                sliderData: [
                    {
                        id: 0,
                        image: allImages.sliderImages.imgSlider1,
                        title: "Станьте партнером iAgent",
                        desc: "Давайте вместе сделаем мир недвижимости лучше",
                        background: "#E5E6F4",
                    },
                    {
                        id: 1,
                        image: allImages.sliderImages.imgSlider2,
                        title: "Горячие предложения",
                        desc: "Вау, действительно лучшие предложения",
                        background: "#F4F2E5",
                    },
                ],
                newsData: {
                    blogTitle: "Последние записи в блоге",
                    title: "Новости",
                },
                bestData: {
                    title: "Лучшие",
                    text: "Топ-5 агентств недвижимости месяца",
                },
                collectionData: {
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
            },
            newsPageData: {},
        },
        contentData: {
            content: dataArticles,
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
