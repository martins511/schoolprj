import Header from "./components/Header";
import Assessment from "./Assessment/Assessment";
import Body from "./components/Body";
import Records from "./Assessment/Records";
import Keypress from "./Keypress";

import { Routes,Route} from "react-router-dom";
function App() {
 
  return (
    <div >

      <Routes>
      {/* <Header/>
      <Body /> */}
      <Route path="/" element={<Assessment/>}/>
      <Route path="/record" element={<Records />}/>
      
     {/* <Keypress/> */}
     </Routes>
    </div>
  );
}

export default App;
