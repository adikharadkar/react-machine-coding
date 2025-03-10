import "../styles/Input.css";

const Input = ({ type, name, placeholder }) => {
  return (
    <div className="input-wrapper">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="input"
      />
    </div>
  );
};

export default Input;
