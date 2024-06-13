import { AiFillStar } from "react-icons/ai";
import {
  BsDropbox,
  BsFillSendFill,
  BsInstagram,
  BsShieldFillCheck,
} from "react-icons/bs";
import { FaAirbnb, FaFacebookF } from "react-icons/fa";
import { FiLinkedin, FiTwitter } from "react-icons/fi";
import { TbBrandBinance, TbBrandCoinbase } from "react-icons/tb";

export const navigationLinks = [
  {
    id: "home",
    title: "Bosh sahifa",
  },
  {
    id: "products",
    title: "Mahsulot",
  },
  {
    id: "features",
    title: "Xizmatlar",
  },
  {
    id: "clients",
    title: "Mijozlar",
  },
];

export const statistics = [
  {
    id: 1,
    title: "Foydalanuvchi Faol",
    value: "9300",
  },
  {
    id: 2,
    title: "Kompaniya Homiyligida",
    value: "9300",
  },
  {
    id: 3,
    title: "Tranzaksiya",
    value: "+110M",
  },
];

export const features = [
  {
    id: 1,
    icon: (
      <AiFillStar
        style={{ color: "#4BC1F8" }}
        className={`w-[50%] h-[50%]  object-contain icons`}
      />
    ),
    title: "Mukofotlar",
    content:
      "Eng yaxshi kredit kartalari aksiyalar va sovrinlarning ajoyib kombinatsiyasini taklif qiladi.",
  },
  {
    id: 2,
    icon: (
      <BsShieldFillCheck
        style={{ color: "#4BC1F8" }}
        className={`w-[50%] h-[50%] object-contain icons`}
      />
    ),
    title: "100% Himoyalangan",
    content:
      "Ma'lumotlaringiz va tranzaksiyalaringiz xavfsiz ekanligiga ishonch hosil qilish uchun choralar.",
  },
  {
    id: 3,
    icon: (
      <BsFillSendFill
        style={{ color: "#4BC1F8" }}
        className={`w-[50%] h-[50%] object-contain icons`}
      />
    ),
    title: "Balansni o'tkazish",
    content:
      "Balansni o'tkazish kredit kartasi sizga foizlarni to'lashda ko'p pul tejash imkonini beradi.",
  },
];

export const feedbacks = [
  {
    id: 1,
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Ledaer",
  },
  {
    id: 2,
    content:
      "Money makes your life easier. If you are lucky to have it, you are lucky.",
    name: "Steve Mark",
    title: "Founder & Ledaer",
  },
  {
    id: 3,
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Ledaer",
  },
];
// airbnb binance coinbase dropbox
export const clients = [
  {
    id: 1,
    title: "AIRBNB",
    logo: (
      <FaAirbnb className="sm:w-[50px] w-[40px] sm:h-[50px] h-[40px] object-contain icons mr-3" />
    ),
  },
  {
    id: 2,
    title: "BINANCE",
    logo: (
      <TbBrandBinance className="sm:w-[50px] w-[40px] sm:h-[50px] h-[40px] object-contain icons mr-3" />
    ),
  },
  {
    id: 3,
    title: "COINBASE",
    logo: (
      <TbBrandCoinbase className="sm:w-[50px] w-[40px] sm:h-[50px] h-[40px] object-contain icons mr-3" />
    ),
  },
  {
    id: 4,
    title: "DROPBOX",
    logo: (
      <BsDropbox className="sm:w-[50px] w-[40px] sm:h-[50px] h-[40px] object-contain icons mr-3" />
    ),
  },
];
export const footerLinks = [
  {
    title: "Jamiyat",
    links: [
      { name: "Yordam markazi", link: "https://t.me/nismo_xn" },
      { name: "Hamkorlar", link: "https://t.me/nismo_xn" },
      { name: "Takliflar", link: "https://t.me/nismo_xn" },
      { name: "Blog", link: "https://t.me/nismo_xn" },
      { name: "Yangiliklar", link: "https://t.me/nismo_xn" },
    ],
  },

  {
    title: "Foydali Havolalar",
    links: [
      { name: "Content", link: "https://t.me/nismo_xn" },
      { name: "Qanday ishlaydi", link: "https://t.me/nismo_xn" },
      {
        name: "Shartlar & xizmatlar",
        link: "https://t.me/nismo_xn",
      },
    ],
  },

  {
    title: "Hamkor",
    links: [
      {
        name: "Bizning hamkorimiz",
        link: "https://t.me/nismo_xn",
      },
      {
        name: "Hamkor bo'ling",
        link: "https://t.me/nismo_xn",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: (
      <BsInstagram className="w-[21px] h-[21px] object-contain cursor-pointer icons hover:translate-y-[-3px] transition-all duration-300" />
    ),
    link: "https://www.instagram.com/nismo_xn/",
  },
  {
    id: "social-media-2",
    icon: (
      <FaFacebookF className="w-[21px] h-[21px] object-contain cursor-pointer icons hover:translate-y-[-3px] transition-all duration-300" />
    ),
    link: "https://www.facebook.com/profile.php?id=100086234316430&mibextid=ZbWKwL",
  },
  {
    id: "social-media-3",
    icon: (
      <FiTwitter className="w-[21px] h-[21px] object-contain cursor-pointer icons hover:translate-y-[-3px] transition-all duration-300" />
    ),
    link: "https://x.com/NurmuhammadXus1?s=35",
  },
  {
    id: "social-media-4",
    icon: (
      <FiLinkedin className="w-[21px] h-[21px] object-contain cursor-pointer icons hover:translate-y-[-3px] transition-all duration-300" />
    ),
    link: "www.linkedin.com/in/xusanov-n",
  },
];
