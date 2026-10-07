import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { loginEmployee } from "../state/auth_state/authAction";

const useAuth = () => {

  let dispatch = useDispatch()

  let navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password", "");

  const getPasswordStrength = (password) => {
    let strength = 0;

    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    return strength;
  };

  const strength = getPasswordStrength(password);

  const getStrengthText = () => {
    if (!password) return "";

    if (strength <= 1) return "Weak password";
    if (strength === 2) return "Medium password";
    if (strength === 3) return "Good password";

    return "Strong password";
  };

  const onRegisterSubmit = (data) => {
    console.log("Register submitted:", data);
  };

  const onLoginSubmit = (data) => {
    dispatch(loginEmployee(data))
    console.log("Login submitted:", data);
  };

  return {
    register,
    handleSubmit,
    errors,

    showPassword,
    setShowPassword,

    password,
    strength,
    getStrengthText,

    onRegisterSubmit,
    onLoginSubmit,
    navigate
  };
};

export default useAuth;