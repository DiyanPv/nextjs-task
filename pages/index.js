import { List } from "@/components/Containers/List";
import Header from "@/components/Header/Header";
import VideoPresentationContainer from "@/components/Containers/VideoPresentationContainer";
export default function Home() {
  return (
    <div className="main">
      <Header />
      <div className="innercontent">
      <VideoPresentationContainer />
      <List />
      </div>
    </div>
  );
}
