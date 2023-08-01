import Header from  "./components/Header/index.js"
import Navbar from "./components/Navbar/index.js"
import Main from "./components/Main"

function App() {
  return (
    <div className=" ">
      <Navbar/>
     <Header title='Contacts App'/>
     <Main/>
    </div>
  );
}

export default App;
