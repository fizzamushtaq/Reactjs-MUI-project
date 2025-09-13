import beephoto from "../assets/images/beephoto.jpg"
import honeytea from "../assets/images/honeytea.jpg"
import puretea from "../assets/images/puretea.jpg"

const products = [
    {
        id: 1,
        title: "BEE",
        image: beephoto, // Make sure this image exists in the public or assets folder
        price: 5.99,
        description: "journey start from bee life to honey that use for Us",
    },
    {
        id: 2,
        title: "honeytea",
        image: honeytea,
        price: 6.99,
        description: "A  honeytea with a perfect blend with natural healing power.",
    },
    {
        id: 3,
        title: "Pure Honey",
        image: puretea,
        price: 7.49,
        description: "A smooth and Pure honey made naturally.",
    },
];

export default products;