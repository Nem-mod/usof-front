import {useDispatch} from "react-redux";
import {useState} from "react";
import {fetchRegister, fetchUpdateUser} from "../../store/slices/auth";
import Button from "../Buttons/Button";

export const AccountForm = () => {

    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rpassword, setRpassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(e)
        const { payload, error } = await dispatch(
            fetchUpdateUser({
                fname: firstName,
                lname: lastName,
                email,
            }),
        );
        if (!payload) {
            console.log(error);
            return;
        }
    };

    return (
        <form
            onSubmit={(e) => handleSubmit(e, email, password)}
        >
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
                />
            </div>

            {/*<div className="mb-8">*/}
            {/*    <label className="base_label mb-4">*/}
            {/*        <span>Password:</span>*/}
            {/*    </label>*/}
            {/*    <input*/}
            {/*        className="base_input"*/}
            {/*        type="password"*/}
            {/*        onChange={(e) => setPassword(e.target.value)}*/}
            {/*        value={password}*/}
            {/*        minLength={5}*/}
            {/*    />*/}
            {/*</div>*/}
            {/*<div className="mb-8">*/}
            {/*    <label className="base_label mb-4">*/}
            {/*        <span>Repeat password:</span>*/}
            {/*    </label>*/}
            {/*    <input*/}
            {/*        className="base_input"*/}
            {/*        type="password"*/}
            {/*        onChange={(e) => setRpassword(e.target.value)}*/}
            {/*        value={rpassword}*/}
            {/*        minLength={5}*/}
            {/*    />*/}
            {/*</div>*/}

            <Button type={"submit"}>Submit</Button>
        </form>
    );
}