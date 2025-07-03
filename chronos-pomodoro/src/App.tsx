// import { Home } from "./pages/Home";
import "./styles/theme.css";
import "./styles/global.css";
import { Home } from "./pages/Home";
import { Provider } from "./contexts/TaskContext/TaskContextProvider";


export function App() {

  return (
    <Provider>
      <Home />
    </Provider>
  )
}

