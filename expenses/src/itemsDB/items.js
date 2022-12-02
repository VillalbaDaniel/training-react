import {
  faChampagneGlasses,
  faSquare,
  faBurger,
  faGlassWater,
  faArrowDownLong,
  faArrowUpLong,
  faBriefcase,
  faCommentDollar,
  faSackDollar,
} from "@fortawesome/free-solid-svg-icons";

export const itemList = [{
  icons: [faSquare, faChampagneGlasses],
  data: {
    title:"Food & Drinks!",
    date: new Date("2022-08-24").toLocaleDateString()
  },
  money:{
    amount:20,
    income:false
  }
}]
