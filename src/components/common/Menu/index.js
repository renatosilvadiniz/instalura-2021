import MenuWrapper from "./styles";
import Logo from "../../../theme/Logo";
import Button from "../Button";

export default function Menu() {
  const links = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Perguntas Frequentes",
      url: "/perguntas-frequentes",
    },
    {
      name: "Sobre",
      url: "/sobre",
    },
  ];

  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide>
        {links.map((link, index) => {
          return (
            <a key={index} href={link.url}>
              {link.name}
            </a>
          );
        })}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <Button ghost variant="secondary.main">
          Entrar
        </Button>
        <Button variant="primary.main">Cadastrar</Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}
