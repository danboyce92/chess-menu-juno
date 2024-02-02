import './App.css'
import Login from './components/Login'
import Deposit from './components/Deposit'
import Start from './components/Start'
// import { initJuno } from "@junobuild/core";
// import { signOut } from "@junobuild/core";


// await initJuno({
//   satelliteId: "6nute-nqaaa-aaaal-adqua-cai",
// });


// await signOut();


function App() {


  return (
    <>
      <h1 id="title">IC-Chess</h1>
      <div id="btn-container">
        <Login />
        <Deposit />
      </div>
      <Start />
      <p>*Login and deposit an ICP before starting a game</p>
    </>
  )
}

export default App
