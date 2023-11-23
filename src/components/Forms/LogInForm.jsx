import { useState } from "react";
import { useDispatch } from "react-redux";
import {fetchAuth} from "../../store/slices/auth";
import Button from "../Buttons/Button";
import {useNavigate} from "react-router-dom";

export const LogInForm = () => {
  const [route, setRoute] = useState();
  const dispatch = useDispatch();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { payload: data, error } = await dispatch(
      fetchAuth({
        login: login,
        password,
      }),
    );
    if (error) {
      // TODO: Catch Error
      console.log(error);
      return;
    }
    window.localStorage.setItem("token", data?.token);
    navigate("/")
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e, login, password)}
      className="mt-16 p-8 max-w-sm m-auto  border-2 border-gray-300 rounded-md shadow-2xl text-sm text-white"
    >
      <div className="mb-8">
        <label className="base_label mb-4">
          <span>Login:</span>
        </label>
        <input
          className="base_input"
          type="text"
          onChange={(e) => {
            setLogin(e.target.value);
          }}
          value={login}
          minLength={3}
          required
        />
      </div>

      <div className="mb-8">
        <label className="base_label">
          <span className="">Repeat password:</span>
        </label>
        <input
          className="base_input"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          minLength={5}
          required
        />
      </div>

      <Button type={"submit"}>Submit</Button>
    </form>
  );
};
