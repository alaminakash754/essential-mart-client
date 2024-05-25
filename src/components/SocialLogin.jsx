import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  const { signWithGoogle } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signWithGoogle().then((result) => {
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };
  return (
    <>
      <p className="text-center">
        <button onClick={handleGoogleSignIn} className="btn btn-ghost">
          {" "}
          <FaGoogle className="text-2xl text-green-500" />
        </button>
      </p>
    </>
  );
};

export default SocialLogin;
