import { List, VideoPresentationContainer } from "../collections/index";
import {Header} from "../components/index"
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
