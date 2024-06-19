const GenderCheckbox = ({ onChange, selectedGender }) => {
  const handleGenderChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="flex">
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "male" ? "selected" : ""
          }`}
        >
          <span className="label-text text-white">Male</span>
          <input
            type="radio"
            name="gender"
            value="male"
            className="radio border-slate-900"
            checked={selectedGender === "male"}
            onChange={handleGenderChange}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "female" ? "selected" : ""
          }`}
        >
          <span className="label-text text-white">Female</span>
          <input
            type="radio"
            name="gender"
            value="female"
            className="radio border-slate-900"
            checked={selectedGender === "female"}
            onChange={handleGenderChange}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
