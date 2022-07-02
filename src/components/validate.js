export const validate = (data) => {
  const errors = {};

  if (!data.name.trim()) {
    errors.name = "Username Required";
  } else {
    delete errors.name;
  }

  if (!data.email) {
    errors.email = "Email Required";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Email is invalid";
  } else {
    delete errors.email;
  }

  if (!data.password) {
    errors.password = "Password Required";
  } else if (data.password.length < 6) {
    errors.password = "Password must be 6 characters or more";
  } else {
    delete errors.password;
  }

  if (!data.confirmPassword) {
    errors.confirmPassword = "Confirm the Password Please";
  } else if (data.confirmPassword !== data.password) {
    errors.confirmPassword = "Confirm Password do not match";
  } else {
    delete errors.confirmPassword;
  }

  if (!data.isAccepted) {
    errors.isAccepted = "You didn't Accept our Regulation!";
  } else {
    delete errors.isAccepted;
  }

  return errors;
};
