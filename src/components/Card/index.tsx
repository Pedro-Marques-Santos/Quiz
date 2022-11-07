import { ContainerCard, ImgTop } from "./styles";
import imgtop from "../../assets/homem.svg"
import { Quests } from "../Quests";

export function Card() {

  return (
    <>
      <ContainerCard>
        <h1>QUIZ</h1>
        <ImgTop>
          <img className="imglogo" src={imgtop} alt="" />
        </ImgTop>
        <Quests />
      </ContainerCard>
    </>
  )
}