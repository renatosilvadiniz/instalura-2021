import Menu from "../src/components/common/Menu";
import Footer from "../src/components/common/Footer";

export default function Home() {
  return (
    <div
      style={{
        flex: '1',
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        flexWrap: 'wrap'
      }}
    >
      <Menu />
      <Footer />
    </div>
  );
}
