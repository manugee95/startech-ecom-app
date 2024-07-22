import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import EcomContext from "../../context/EcomContext";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { showAndHide } = useContext(EcomContext);

  const redirect = useNavigate();

  const registerHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          phone,
          email,
          password,
          confirmPassword,
        }),
      });

      const data = await res.json();
      if (data === "exist") {
        showAndHide("error", "User Already Exist");
      } else if (data === "do not match") {
        showAndHide("error", "Password do not match");
      } else if (data === "Invalid password") {
        showAndHide(
          "error",
          "Password must be atleast 8 character long and must contain one number and one letter"
        );
      }else{
        redirect("/login")
        showAndHide("success", "You have successfully registered")
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="my-[5%] mx-[30%]">
      <h1 className="text-center mb-[10px] text-2xl font-bold">
        Register Here
      </h1>
      <form onSubmit={registerHandler}>
        <div className="mb-3">
          <input
            type="text"
            className="outline outline-1 w-full p-[10px]"
            placeholder="First Name"
            onChange={(e)=> setFirstName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="outline outline-1 w-full p-[10px]"
            placeholder="Last Name"
            onChange={(e)=> setLastName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="outline outline-1 w-full p-[10px]"
            placeholder="Phone"
            onChange={(e)=> setPhone(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="outline outline-1 w-full p-[10px]"
            placeholder="Email"
            onChange={(e)=> setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="outline outline-1 w-full p-[10px]"
            placeholder="Password"
            onChange={(e)=> setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="outline outline-1 w-full p-[10px]"
            placeholder="Confirm Password"
            onChange={(e)=> setConfirmPassword(e.target.value)}
          />
        </div>
        <div>
          <button className="bg-blue-950 p-[10px] text-white rounded-lg">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
