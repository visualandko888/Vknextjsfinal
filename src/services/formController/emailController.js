const emailController = (mail) => {
  const regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
  return regex.test(mail) ? true : false;
};

export default emailController;
