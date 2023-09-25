import imgHTML from "../public/static/img/stack/html.svg";
import imgCSS from "../public/static/img/stack/css.svg";
import imgJS from "../public/static/img/stack/js.svg";
import imgNode from "../public/static/img/stack/node.svg";
import imgStyled from "../public/static/img/stack/styled.svg";
import imgReact from "../public/static/img/stack/react.svg";
import { SiTypescript } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
import { FaPython } from "react-icons/fa";
import { DiDjango } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { BiGitBranch } from "react-icons/bi";

export const stackData = [
  {
    title: "HTML",
    img: imgHTML,
  },
  {
    title: "CSS",
    img: imgCSS,
  },
  {
    title: "JS",
    img: imgJS,
  },
  {
    title: "Node JS",
    img: imgNode,
  },
  {
    title: "Styled Components",
    img: imgStyled,
  },
  {
    title: "React",
    img: imgReact,
  },
  { title: "TypeScript", img: SiTypescript },
  { title: "PostgresSQL", img: DiPostgresql },
  { title: "Express", img: SiExpress },
  { title: "Python", img: FaPython },
  { title: "Django", img: DiDjango },
  { title: "Git", img: BiGitBranch },
];
