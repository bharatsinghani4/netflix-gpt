export const checkValidData = (email, password) => {
  const isEmailValid =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/gm.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(password);

  if (!isEmailValid) return "Email ID is invalid";
  if (!isPasswordValid) return "Password is invalid ";
};
