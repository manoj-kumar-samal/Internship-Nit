import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  function btnClick() {
    if (isLogin) {
      navigate('/register');
    } else {
      navigate('/login');
    }
    setIsLogin(!isLogin);
    console.log(!isLogin)
  }

  return (
    <div className="m-4">
      <button onClick={btnClick} className="bg-pink-600 text-white px-4 py-2 rounded-sm">
        {isLogin ? "Register" : "Login"}
      </button>
    </div>
  );
}
