import Header from "./components/Header";
import Introduction from "./components/Introduction";
import ObjectAndValue from "./components/ObjectAndValue";
import Team from "./components/Team";
import {Box} from "@mui/material"

function App() {
  return (
    <Box className="App">
      <Header/>
      <Introduction/>
      <ObjectAndValue/>
      <Team/>
    </Box>
  );
}

export default App;
