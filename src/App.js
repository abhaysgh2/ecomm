import { useSelector } from "react-redux";
import "./App.css";
import PageRoute from "./PageRoute";
function App() {
  console.log("randring*****");
  const { cartItems } = useSelector((store) => store.cart);
  console.log("App", cartItems);
  return (
    <>
      <PageRoute />
    </>
  );
}

export default App;
