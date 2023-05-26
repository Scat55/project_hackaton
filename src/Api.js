export default function Api() {
  function writeCookie(name, val, expires) {
    var date = new Date();
    date.setDate(date.getDate() + expires);
    document.cookie =
      name + "=" + val + "; path=/; expires=" + date.toUTCString();
  }
  this.readCookie = (name) => {
    var matches = document.cookie.match(
      new RegExp(
        "(?:^|; )" +
          name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
          "=([^;]*)"
      )
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
  };
  async function query(data, link) {
    try{
    const response = await fetch("http://26.72.40.57:7000/" + link);
   
     return await response.json();
    }
    catch{
      return "{answ:false}";
    }
  }
  //
  this.login = (login, password) => {
    const data = query({ login: login, password: password }, "auth/login");
    return data;
  
  };
  this.registration = (email, name, login, password) => {
    const data = query(
      {
        name: name,
        email: email,
        login: login,
        password: password,
      },
      "auth/registration"
    );
    return data;
  };
  this.User = () => {};
}
