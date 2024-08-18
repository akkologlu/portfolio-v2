import { TechLi } from "../../styles";
const Tech = ({ tech }) => {
  if (tech === "reactquery") {
    return (
      <TechLi>
        <img src="./assets/reactquery.svg" width="48" />
      </TechLi>
    );
  }
  if (tech === "zustand") {
    return (
      <TechLi>
        <img src="./assets/zustand.svg" height="48" />
      </TechLi>
    );
  }
  return (
    <TechLi>
      <img src={`https://skillicons.dev/icons?i=${tech}`} alt={tech} />
    </TechLi>
  );
};

export default Tech;
