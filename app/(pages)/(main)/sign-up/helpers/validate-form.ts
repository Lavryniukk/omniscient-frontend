import AuthFormValidationErrorType from "../types/auth-form-validation-error";

const VALIDATION_REG_EXP = {
  EMAIL: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}/,
  LOWER_CASE: /[a-z]/,
  UPPER_CASE: /[A-Z]/,
  DIGIT: /\d/,
};

const validateForm = (email: string, password: string) => {
  const newErrors: AuthFormValidationErrorType = {
    email: [],
    password: [],
  };
  if (!email) newErrors.email.push("Email is required");

  if (!password) newErrors.password.push("Password is required");

  if (password.length < 8)
    newErrors.password.push("Password must be at least 8 characters long");

  if (!VALIDATION_REG_EXP.LOWER_CASE.test(password))
    newErrors.password.push(
      "Password must contain at least one lowercase letter"
    );

  if (!VALIDATION_REG_EXP.UPPER_CASE.test(password))
    newErrors.password.push(
      "Password must contain at least one uppercase letter"
    );

  if (!VALIDATION_REG_EXP.DIGIT.test(password))
    newErrors.password.push("Password must contain at least one digit");


  return newErrors;
};

export default validateForm;
