import { useState } from "react";
import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
  const initialValue = {
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  };
  const { loading, signup } = useSignup();
  const [inputs, setInputs] = useState(initialValue);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleGenderChange = (gender) => {
    setInputs({
      ...inputs,
      gender: gender,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await signup(inputs);
    // console.log("Form submitted", inputs);
    setInputs(initialValue);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up <span className="text-blue-500">ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-slate-300">
                Full Name
              </span>
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="John Doe"
              className="w-full input input-bordered h-10 bg-slate-900"
              value={inputs.fullName}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text text-slate-300">
                Username
              </span>
            </label>
            <input
              type="text"
              name="username"
              placeholder="johndoe"
              className="w-full input input-bordered h-10 bg-slate-900 text-slate-300"
              value={inputs.username}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text text-slate-300">
                Password
              </span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10 bg-slate-900 text-slate-300"
              value={inputs.password}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text text-slate-300">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10 bg-slate-900 text-slate-300"
              value={inputs.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <GenderCheckbox
            onChange={handleGenderChange}
            selectedGender={inputs.gender}
          />

          <Link
            className="text-sm text-slate-300 hover:underline hover:text-blue-600 mt-2 inline-block"
            to="/login"
          >
            Already have an account?
          </Link>

          <div>
            <button
              type="submit"
              className="btn btn-block btn-sm mt-2 border border-slate-700"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
