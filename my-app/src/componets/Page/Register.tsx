import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

  const handleRegister = () => {
    // Đặt logic đăng ký ở đây
    if (email && password) {
      // Đăng ký thành công
      history("/login");
    } else {
      // Đăng ký thất bại
      alert("Đăng ký thất bại. Vui lòng kiểm tra thông tin đăng ký.");
    }
  };

  return (
    <div>
      <h2>Đăng ký</h2>
      <form>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleRegister}>
          Đăng ký
        </button>
      </form>
    </div>
  );
};

export default Register;