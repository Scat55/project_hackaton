export default function Api(data) {
  async function query(data, link) {
    const response = await fetch("http://26.72.40.57:7000/" + link);
    const jsonData = await response.json();
  }
  //
  function login(login, password) {
    const data = query({ login: login, password: password }, "auth/login");
    return JSON.parse(data);
  }
  function registration(email,name, login, password) {
    const data = query(
      {
        name:name,
        email:email,
        login: login,
        password: password,
      },
      "auth/registration"
    );
    return JSON.parse(data);
  }
  
}