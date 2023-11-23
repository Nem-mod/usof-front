import { useState } from "react";
import { useDispatch } from "react-redux";
import {fetchRegister} from "../../store/slices/auth";
import Button from "../Buttons/Button";

export const RegisterForm = () => {

  const dispatch = useDispatch();

  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rpassword, setRpassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(e)
    const { payload, error } = await dispatch(
      fetchRegister({
        login,
        password,
        fname: firstName,
        lname: lastName,
        email,
      }),
    );
    console.log(payload);
    if (!payload) {
      // TODO: Catch Error
      console.log(error);
      return;
    }

    // router.push(`signup/${payload?.redirect}`);
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e, email, password)}
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
        <label className="base_label mb-4">
          <span>Password:</span>
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
      <div className="mb-8">
        <label className="base_label mb-4">
          <span>Repeat password:</span>
        </label>
        <input
          className="base_input"
          type="password"
          onChange={(e) => setRpassword(e.target.value)}
          value={rpassword}
          minLength={5}
          required
        />
      </div>

      <div className="mb-8">
        <label className="base_label mb-4">
          <span>First Name:</span>
        </label>
        <input
          className="base_input"
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
          minLength={5}
          required
        />
      </div>
      <div className="mb-8">
        <label className="base_label mb-4">
          <span>Email:</span>
        </label>
        <input
          className="base_input"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          minLength={5}
          required
        />
      </div>

      <div className="mb-8">
        <label className="base_label mb-4">
          <span>Last Name:</span>
        </label>
        <input
          className="base_input"
          type="text"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
          minLength={5}
          required
        />
      </div>
      <Button type={"submit"}>Submit</Button>
    </form>
  );
};
