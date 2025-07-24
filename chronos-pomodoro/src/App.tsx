// import { Home } from "./pages/Home";
import "./styles/theme.css";
import "./styles/global.css";
import { Home } from "./pages/Home";
import { Provider } from "./contexts/TaskContext/TaskContextProvider";
import Heading from "./components/Heading/index"


export function App() {

  return (
    <Provider>
      <Home />
    </Provider>
  )
}

