const LoginService = () => {
  const login = (userCredential) => {
    return new Promise((resolve, reject) => {
      resolve(userCredential)
    })
  }

  return { login }
}

export default LoginService;