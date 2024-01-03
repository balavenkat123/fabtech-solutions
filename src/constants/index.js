import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bike1, bike2, bigShoe3, customer1, customer2, bike4, bike5, bike6, bike7, smallredbike,smallblackbike,smallbluebike,whatsapp} from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const bikes = [
    {
        thumbnail:smallredbike,
        bigShoe: bike1,
      },
    {
        thumbnail: smallblackbike,
        bigShoe: bike2,
    },
    {
        thumbnail: smallbluebike,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '20+', label: 'Brands' },
    { value: '50+', label: 'Showrooms' },
    { value: '1k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: bike4,
        name: "ACTIVA STD,DLX",
        price: "10,000rs (downpayment)",
    },
    {
        imgURL: bike5,
        name: "Honda CB350RS",
        price: "$210.20",
    },
    {
        imgURL: bike6,
        name: "Shine Disc - OBD2",
        price: "12,000rs (downpayment)",
    },
    {
        imgURL: bike7,
        name: "Honda Dio",
        price: "15,000rs (downpayment)",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy the safe delivary experince "
    },
    {
        imgURL: shieldTick,
        label: "Low downpayment",
        subtext: "Low cost emi at very reasonable rate of intrest."
    },
    {
        imgURL: support,
        label: "custamor Support",
        subtext: "very genuine guidence to the customers."
    },
    {
        imgURL: support,
        label: "Loan availability",
        subtext: "can be ordered all around hyderabad"
    }
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Honda Activa 6G", link: "/" },
            { name: "Honda Dio", link: "/" },
            { name: "Honda Shine 125", link: "/" },
            { name: "Royal Enfield  ", link: "/" },
            { name: "Bajaj", link: "/" },
            { name: "Yamaha Motors", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "balavenkat17902@gmail.com", link: "mailto:balavenkat17902@gmail.com" },
            { name: "7993533327", link: "tel:+7993533327" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];