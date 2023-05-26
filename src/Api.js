export default function Api() {
  function writeCookie(name, val) {
    document.cookie = name + "=" + val + ";";
  }

  function readCookie(name) {
    var matches = document.cookie.match(
      new RegExp(
        "(?:^|; )" +
          name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
          "=([^;]*)"
      )
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }
  function deleteAllCookies() {
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

  async function query(data, link) {  
        return fetch('https://jsonplaceholder.typicode.com/posts',
        {
          method: "POST",
          body: data,
        })
        .then((response) => response.json())
        .then((responseData) => {
          console.log(responseData);
          return responseData;
        })
        .catch(error => {console.warn(error);return false;});
      
  }
  this.checkToken = () => {
    return readCookie("token");
  };

  this.login = async (login, password) => {
    writeCookie("token", "asdasd");
    const data = await query({ login: login, password: password }, "auth/login");
    return data;
  };

  this.logOut =()=>{deleteAllCookies()};
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

  this.Dialogs = () => {
    this.GetAll = () => {};
    this.Create = () => {};
  };

  this.Msgs = () => {
    this.Get = () => {};
    this.New = () => {};
  };

  this.User = () => {
    this.Get = () => {};
    this.Set = () => {};
  };
}
