import MenuWrapper from "./styles";
import Logo from "../Logo";

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
        <button>Entrar</button>
        <button>Cadastrar</button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}
