import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bike1, bike2, bigShoe3, customer1, customer2, bike4, bike5, bike6, bike7, smallredbike,smallblackbike,smallbluebike,whatsapp} from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "Institute" },
    { href: "#products", label: "Mobile services" },
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
    { value: '10+', label: 'Years ' },
    { value: '200+', label: 'Students' },
    { value: '5k+', label: 'Customers' },
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
        label: "Structured courses",
        subtext: "Unlocking Expertise: Your Key to Mobile Mastery"
    },
    {
        imgURL: shieldTick,
        label: "Qualified Lectures",
        subtext: "Master Mobile Repair with Expert Lectures"
    },
    {
        
        imgURL: support,
        label: "Mobile Repairs",
        subtext: "You Break it ...We fix it"
        
    },
    {
        imgURL: support,
        label: "customer Support",
        subtext: "very genuine guidence to the customers."
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