import tomato from "../assets/vegetables/tomato.jpeg";
import carrot from "../assets/vegetables/carrot.jpeg";
import cucumber from "../assets/vegetables/cucumber.jpeg";
import onion from "../assets/vegetables/onion.jpeg";
import potato from "../assets/vegetables/potato.jpeg";
import pumpkin from "../assets/vegetables/pumpkin.jpeg";
import radish from "../assets/vegetables/radish.jpeg";
import spinach from "../assets/vegetables/spinach.jpeg";
import eggplant from "../assets/vegetables/eggplant.jpg";
import lettuce from "../assets/vegetables/lettuce.jpeg";
import cabbage from "../assets/vegetables/cabbage.jpeg";
import zucchini from "../assets/vegetables/zucchini.jpeg";
import broccoli from "../assets/vegetables/broccoli.jpeg";
import cauliflower from "../assets/vegetables/cauliflower.jpeg";
import garlic from "../assets/vegetables/garlic.jpeg";
import celery from "../assets/vegetables/celery.jpeg";
import leek from "../assets/vegetables/leek.jpeg";
import chard from "../assets/vegetables/chard.jpeg";
import chilipepper from "../assets/vegetables/chilipepper.jpeg";
import redbeet from "../assets/vegetables/redbeet.jpeg";
import fennel from "../assets/vegetables/fennel.jpeg";
import peapod from "../assets/vegetables/peapod.jpeg";
import redpepper from "../assets/vegetables/redpepper.jpeg";
import snappea from "../assets/vegetables/snappea.jpeg";
import sweetcorn from "../assets/vegetables/sweetcorn.jpeg";

const vegUnselected = [
  {
    name: "Tomato",
    src: tomato,
    id: 1,
    direct: "",
    prebreed:
      "From March to the beginning of April (for planting from the beginning to the end of May)",
    depth: "0.5 - 1 cm",
    temp: "18 - 22 °C",
    spacing: "approx. 100 x 50 cm",
  },
  {
    name: "Carrot",
    src: carrot,
    id: 2,
    direct:
      "outdoors from March to the beginning of July at the latest, as bunched carrots until the end of July",
    prebreed: "",
    depth: "1.5 - 2.5 cm",
    temp: "",
    spacing: "30 - 50 x 2 - 3 cm",
  },
  {
    name: "Cucumber",
    src: cucumber,
    id: 3,
    direct: "",
    prebreed: "from the beginning of May for planting from mid-MaySeeding",
    depth: "approx. 2 cm",
    temp: "23 - 26 °C",
    spacing: "approx. 100 x 50 cm",
  },
  {
    name: "Onion",
    src: onion,
    id: 4,
    direct: "from March to April",
    prebreed: "From February to March",
    depth: "1 - 2 cm",
    temp: "10 - 20 °C",
    spacing: "20 - 30 x 3 - 5 cm",
  },
  {
    name: "Potato",
    src: potato,
    id: 5,
    direct: "from April to May",
    prebreed: "from March to April",
    depth: "6 - 8 cm",
    temp: "8 - 12 °C",
    spacing: "30 - 35 x 60 - 70 cm",
  },
  {
    name: "Pumpkin",
    src: pumpkin,
    id: 6,
    direct: "from May to June",
    prebreed: "from April to May",
    depth: "3 - 5 cm",
    temp: "18 - 25 °C",
    spacing: "100 x 100 cm",
  },
  {
    name: "Radish",
    src: radish,
    id: 7,
    direct: "from April to September",
    prebreed: "",
    depth: "0.5 - 1 cm",
    temp: "5 - 25 °C",
    spacing: "2 - 3 cm",
  },
  {
    name: "Spinach",
    src: spinach,
    id: 8,
    direct: "from March to August",
    prebreed: "",
    depth: "1 - 2 cm",
    temp: "8 - 20 °C",
    spacing: "15 - 25 x 2 - 3 cm",
  },
  {
    name: "Eggplant",
    src: eggplant,
    id: 10,
    direct: "from April to May",
    prebreed: "from March to April",
    depth: "2 - 3 cm",
    temp: "20 - 25 °C",
    spacing: "60 - 80 x 40 - 60 cm",
  },
  {
    name: "Lettuce",
    src: lettuce,
    id: 11,
    direct: "from March to October",
    prebreed: "",
    depth: "0.5 cm",
    temp: "8 - 15 °C",
    spacing: "20 - 30 x 3 - 5 cm",
  },
  {
    name: "Cabbage",
    src: cabbage,
    id: 12,
    direct: "from March to May",
    prebreed: "from February to March",
    depth: "0.5 cm",
    temp: "10 - 20 °C",
    spacing: "30 x 30 cm",
  },
  {
    name: "Zucchini",
    src: zucchini,
    id: 9,
    direct: "from May to June",
    prebreed: "from April to May",
    depth: "2 - 3 cm",
    temp: "20 - 25 °C",
    spacing: "100 x 100 cm",
  },
  {
    name: "Broccoli",
    src: broccoli,
    id: 13,
    direct: "from April to May",
    prebreed: "from March to April",
    depth: "0.5 cm",
    temp: "12 - 20 °C",
    spacing: "60 x 60 cm",
  },
  {
    name: "Cauliflower",
    src: cauliflower,
    id: 14,
    direct: "from April to May",
    prebreed: "from March to April",
    depth: "0.5 cm",
    temp: "12 - 20 °C",
    spacing: "60 x 60 cm",
  },
  {
    name: "Garlic",
    src: garlic,
    id: 16,
    direct: "from October to March",
    prebreed: "",
    depth: "3 - 5 cm",
    temp: "15 - 25 °C",
    spacing: "10 x 20 cm",
  },
  {
    name: "Chili Pepper",
    src: chilipepper,
    id: 15,
    direct: "from March to May",
    prebreed: "from February to March",
    depth: "0.5 cm",
    temp: "20 - 25 °C",
    spacing: "30 x 30 cm",
  },
  {
    name: "Celery",
    src: celery,
    id: 17,
    direct: "from April to May",
    prebreed: "from March to April",
    depth: "0.5 cm",
    temp: "15 - 20 °C",
    spacing: "30 x 30 cm",
  },
  {
    name: "Leek",
    src: leek,
    id: 18,
    direct: "from April to May",
    prebreed: "from February to March",
    depth: "1 cm",
    temp: "10 - 20 °C",
    spacing: "15 - 20 cm",
  },
  {
    name: "Chard",
    src: chard,
    id: 19,
    direct: "from March to August",
    prebreed: "",
    depth: "1 - 2 cm",
    temp: "10 - 20 °C",
    spacing: "20 - 30 x 2 - 3 cm",
  },
  {
    name: "Red Beet",
    src: redbeet,
    id: 20,
    direct: "from March to July",
    prebreed: "from February to March",
    depth: "1 - 2 cm",
    temp: "10 - 20 °C",
    spacing: "3 - 5 cm",
  },
  {
    name: "Fennel",
    src: fennel,
    id: 21,
    direct: "from April to May",
    prebreed: "from March to April",
    depth: "0.5 cm",
    temp: "10 - 20 °C",
    spacing: "20 - 30 x 3 - 5 cm",
  },
  {
    name: "Pea Pod",
    src: peapod,
    id: 23,
    direct: "from March to May",
    prebreed: "from February to March",
    depth: "3 - 4 cm",
    temp: "8 - 15 °C",
    spacing: "3 - 4 cm",
  },
  {
    name: "Red Pepper",
    src: redpepper,
    id: 24,
    direct: "from March to May",
    prebreed: "from February to March",
    depth: "0.5 cm",
    temp: "20 - 25 °C",
    spacing: "30 x 30 cm",
  },
  {
    name: "Snap Pea",
    src: snappea,
    id: 25,
    direct: "from March to May",
    prebreed: "from February to March",
    depth: "3 - 4 cm",
    temp: "8 - 15 °C",
    spacing: "3 - 4 cm",
  },
  {
    name: "Sweet Corn",
    src: sweetcorn,
    id: 26,
    direct: "from April to May",
    prebreed: "from March to April",
    depth: "2 - 3 cm",
    temp: "15 - 20 °C",
    spacing: "20 - 25 cm",
  },
];

export default vegUnselected;
