export const checkValidData = (email, password, name) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const isPasswordValid =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid) return "Password is not valid";
  // Only validate name during Sign Up
  if (name !== undefined) {
    const isNameValid = /^[a-zA-Z ]{3,50}$/.test(name);
    if (!isNameValid) return "Name is not valid";
  }

  return null;
};
