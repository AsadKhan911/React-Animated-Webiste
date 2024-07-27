import prop1 from "../assets/images/prop1.webp";
import prop2 from "../assets/images/prop2.webp";
import prop3 from "../assets/images/prop3.webp";
import prop4 from "../assets/images/prop4.webp";
import prop5 from "../assets/images/prop5.webp";
import prop6 from "../assets/images/prop6.webp";
import client1 from "../assets/images/client1.png";
import client2 from "../assets/images/client2.png";
import client3 from "../assets/images/client3.png";
import client4 from "../assets/images/client4.png";
import client5 from "../assets/images/client5.png";
import client6 from "../assets/images/client6.png";
import { MdNoteAlt } from "react-icons/md";
import {
  FaHome,
  FaSearch,
  FaNotesMedical,
  FaCameraRetro,
} from "react-icons/fa";
import { GoLaw } from "react-icons/go";

export const property = [
  {
    images: prop1,
    address: "Barhia town PH-6",
    name: "Villa with Amazing View",
    price: "PKR 1.2Cr",
    about: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood",
    bed: 3,
    bath: 2,
    area: "250 sq ft",
    owner: "Ahmed Hashim",
  },
  {
    images: prop2,
    address: "Sector E11/2",
    name: "Townhouse for Sale",
    price: "PKR 2Cr",
    about:
      "Beautiful townhouse for sale with modern amenities, spacious rooms, and a cozy backyard. Perfect for families",
    bed: 4,
    bath: 3,
    area: "450 sq ft",
    owner: "Adil Khan",
  },
  {
    images: prop3,
    address: "Defence Housing Society PH-2",
    name: "Duplex sea facing for rent",
    price: "PKR 1Cr",
    about:
      "Stunning duplex sea-facing rental with panoramic views, spacious interiors, and modern amenities.",
    bed: 2,
    bath: 2,
    area: "129 sq ft",
    owner: "Shazia Batool",
  },
  {
    images: prop4,
    address: "Sector F-6/4",
    name: "Villa with Side View",
    price: "PKR 2.5Cr",
    about:
      "Elegant villa with side view, featuring luxurious interiors, private garden, and serene surroundings.",
    bed: 6,
    bath: 5,
    area: "453 sq ft",
    owner: "Kazim Shah",
  },
  {
    images: prop5,
    address: "Ghori Town PH-3",
    name: "Awesome villa for rent",
    price: "PKR 1.8Cr",
    about: "Awesome villa for rent with stunning design, spacious rooms, and beautiful garden views.",
    bed: 4,
    bath: 3,
    area: "320 sq ft",
    owner: "Asad Khan",
  },
  {
    images: prop6,
    address: "Naval Anchorage Street 7",
    name: "Street Farm for sale",
    price: "PKR 2.2Cr",
    about:
      "Charming street farm for sale, featuring fertile land, cozy farmhouse, and scenic views.",
    bed: 3,
    bath: 3,
    area: "340 sq ft",
    owner: "Hashir Altaf",
  },
];

export const service = [
  {
    icon: MdNoteAlt,
    title: "Sell your home",
    desc: "We sell your home at the best market price",
  },
  {
    icon: FaHome,
    title: "Home loans",
    desc: "We offer you free consultancy to get a loan",
  },
  {
    icon: GoLaw,
    title: "Legal services",
    desc: "Expert legal help for all related property items",
  },
  {
    icon: FaSearch,
    title: "Home inspection",
    desc: "We make sure you get what you were promised",
  },
  {
    icon: FaNotesMedical,
    title: "Evaluation",
    desc: "We offer you free evaluation to get a mortgage loan",
  },
  {
    icon: FaCameraRetro,
    title: "Photoshoot",
    desc: "We prepare your home visual presentation",
  },
];

export const client = [
  {
    image: client1,
    name: "Aqsa Adnan",
    text: "Excellent team!",
    feedback:
      "Amazing service! The team was professional and efficient. Our house in Rawalpindi was sold quickly and at a great price. Highly recommend!",
  },
  {
    image: client2,
    name: "Aiman Fatima",
    text: "Very good work!",
    feedback:
      "Excellent experience! Found the perfect home in Islamabad thanks to their dedicated staff. Smooth process from start to finish. Will use again.",
  },
  {
    image: client3,
    name: "Hamid Mughal",
    text: "Experienced work!",
    feedback:
      "Top-notch service! Very knowledgeable and helpful throughout our property search in Rawalpindi. We couldn't be happier with our new home.",
  },
  {
    image: client4,
    name: "Azan Umair",
    text: "Fair guidance!",
    feedback:
      "Great support and guidance! They made finding our dream home in Islamabad stress-free and enjoyable. Truly outstanding service and highly recommended.",
  },
  {
    image: client5,
    name: "Obaid Raza",
    text: "Excellent team!",
    feedback:
      "The WP Estate team did an outstanding job helping me buy my first home. The high level of service and dedication",
  },
  {
    image: client6,
    name: "Amir Kiyani",
    text: "Trusted team!",
    feedback:
      "Professional and reliable! Helped us find a fantastic property in Rawalpindi. The team's expertise and dedication were evident every step of the way.",
  },
];
