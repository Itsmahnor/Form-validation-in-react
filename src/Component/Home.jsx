import { Link } from "react-router-dom";

function Home() {
  const Storage=JSON.parse(localStorage.getItem("user"))
  return ( 
    <Link to="/home">
<h1 className="mb-5 ">Home page</h1>
<h1>Welcome {Storage.name} </h1>
    </Link>
   );
}

export default Home;