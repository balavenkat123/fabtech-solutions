import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bike1,repair01, bike2, bigShoe3,repair02,course03,course04,repair03,course01,repair04,  customer2,smallpic2,smallpic3,course2,service1,smallpic1, course02,coursepic2,coursepic3} from "../assets/images";
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
        imgURL: course01,
        name: "Android and IOS",
        price: "",
    },
    {
        imgURL: course02,
        name: "Live Troubleshooting",
        price: "",
    },
    {
        imgURL: course03,
        name: "EMMC Programming",
        price: "",
    },
    {
        imgURL:course04,
        name: "Data Recovery techniques",
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
            { name: "EMMC Programming", link: "/institute" },
            { name: "Face ID & Fingerprint Repair Workshop", link: "/institute" },
            { name: "Screen Savior: Broken Glass Replacement ", link: "/institute" },
            { name: "iPhone Specialist Training", link: "/institute" },
            { name: "Double Decker CPU Repair", link: "/institute" },
            { name: "and many more.....", link:"./courses.pdf" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/institute" },
            { name: "FAQs", link: "/faq" },
        
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
    { src: facebook, alt: "facebook logo" , link:"https://www.facebook.com/profile.php?id=100093593441776"},
    { src: twitter, alt: "twitter logo" , link:""} ,
    { src: instagram, alt: "instagram logo", link:"https://www.instagram.com/trendsetthreads/" },
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
        label: "Face ID & Fingerprint Repair Workshop",
        subtext: "Unlock the secrets of biometric repair with our Face ID & Fingerprint Repair Workshop."
    },
    {
        
        imgURL: shieldTick,
        label: "Mobile Lamination and Waterproofing Workshop",
        subtext: "Protect and preserve with our Mobile Lamination and Waterproofing Workshop"
        
    },
    {
        imgURL: support,
        label: "Screen Savior: Broken Glass Replacement",
        subtext: "Become a screen savior with our comprehensive glass replacement course."
    }
    
];
export const repairs = [
    {
        imgURL: repair04,
        name: "Back Glass Removal LASER",
        price: "",
    },
    {
        imgURL: repair03,
        name: "Display repairs",
        price: "",
    },
    {
        imgURL: repair01,
        name: "Double Decker CPU Repair",
        price: "",
    },
    {
        imgURL: repair02,
        name: "Face ID & Finger Print Repair ",
        price: "",
    },
];