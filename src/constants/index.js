import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bike1, bike2, bigShoe3,  customer2,smallpic2,smallpic3,course2,service1,smallpic1, course02,coursepic2,coursepic3} from "../assets/images";
import { Institute } from "../sections";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#institute", label: "Institute" },
    { href: "#products", label: "Mobile services" },
    { href: "#contact-us", label: "Contact Us" },
];

export const bikes = [
    {
        thumbnail:smallpic1,
        bigShoe: bike1,
      },
    {
        thumbnail:smallpic2,
        bigShoe: bike2,
    },
    {
        thumbnail:smallpic3,
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
        imgURL: service1,
        name: "Android and IOS",
        price: "",
    },
    {
        imgURL: course02,
        name: "EMMC programming",
        price: "",
    },
    {
        imgURL: coursepic2,
        name: "Live Troubleshooting",
        price: "",
    },
    {
        imgURL: coursepic3,
        name: "Double Decker ",
        price: "",
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
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Courses",
        links: [
            { name: "Mobie Tech Courses", link: "/" },
            { name: "Course1", link: "/" },
            { name: "Course2", link: "/" },
            { name: "Course3 ", link: "/" },
            { name: "Course4", link: "/" },
            { name: "Course5", link: "/" },
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
            { name: "fmsfabtech@gmail.com", link: "mailto:fmsfabtech@gmail.com" },
            { name: "+91 9515159848", link: "tel:+919515159848" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];

export const data=[
    {
        "software":"bala venkat",
        "hardware":"md aqeel"

    },
    {
        "software":"Nithin",
        "hardware":"md aqeel"

    },
    {
        "software":"karthik",
        "hardware":"md aqeel"

    },
]
export const courses = [
    {
        imgURL: truckFast,
        label: "EMMC programming",
        subtext: "Unlocking Expertise: Your Key to Mobile Mastery"
    },
    {
        imgURL: shieldTick,
        label: "EMMC programming",
        subtext: "Master Mobile Repair with Expert Lectures"
    },
    {
        
        imgURL: shieldTick,
        label: "EMMC programming",
        subtext: "You Break it ...We fix it"
        
    },
    {
        imgURL: support,
        label: "EMMC programming",
        subtext: "very genuine guidence to the customers."
    }
    
];
export const repairs = [
    {
        imgURL: service1,
        name: "Android and IOS",
        price: "",
    },
    {
        imgURL: course2,
        name: "EMMC programming",
        price: "",
    },
    {
        imgURL: coursepic2,
        name: "Live Troubleshooting",
        price: "",
    },
    {
        imgURL: coursepic3,
        name: "Double Decker ",
        price: "",
    },
];