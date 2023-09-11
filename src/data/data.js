import { allImages } from "../images/allImages";

const numberOfArticles = 101;

function getOrder(i) {
    return i + 1;
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomDate() {
    const startDate = new Date(2022, 0, 1).getTime();
    const endDate = new Date(2023, 11, 31).getTime();
    const randomTimestamp = getRandomInt(startDate, endDate);
    return new Date(randomTimestamp).toLocaleDateString("ru-RU");
}

function convertToJavaScriptDate(dateString) {
    const dateParts = dateString.split(".");
    const jsDate = new Date(
        parseInt(dateParts[2]),
        parseInt(dateParts[1]) - 1,
        parseInt(dateParts[0])
    );
    return jsDate;
}

function generateRandomArticle(id) {
    const viewed = getRandomInt(0, 1000);
    const comments = getRandomInt(0, 1000);

    const dateNumber = generateRandomDate();
    const dateForSort = convertToJavaScriptDate(dateNumber);

    const article = {
        id,
        image: allImages.articleImages.img1Article,
        title: `${id + 1} Eywa: New Take on Dubai’s Luxury Real Estate`,
        dateNumber,
        desc: "With nature-inspired architecture, amenities uniquely focused on well-being, and refined interiors influenced by Vastu Shastra, this complex is set to",
        viewed,
        link: "",
        comments,
        dateForSort,
    };

    return article;
}

export const dataArticles = Array.from({ length: numberOfArticles }, (_, id) =>
    generateRandomArticle(id)
);

export const dataArticlesNumbered = dataArticles.map((article) => ({
    ...article,
    image: allImages.articleImages.img1Article,
    rateNumber: getOrder(article.id),
}));

export const dataArticlesRent = dataArticles.map((article) => ({
    ...article,
    image: allImages.articleImages.img2Article,
}));
