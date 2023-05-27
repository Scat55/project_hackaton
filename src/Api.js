export default function Api() {
  function saveToken( val) {
  localStorage.setItem("token",val)
  }

  function getLocalToken() {
    return localStorage.getItem("token")
  }
  function deleteAllCookies() {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;";
      document.cookie =
        name + "=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    }
  }

  async function query(data, link) {
    return fetch("http://26.72.40.57:7000/" +link, {
      method: "POST",
      body: data,
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        return responseData;
      })
      .catch((error) => {
        console.warn(error);
        return false;
      });
  }
  this.checkToken = () => {
    return getLocalToken();
  };

  this.login = async (login, password) => {
    return query({ login: login, password: password }, "auth/login")
      .then((response) => saveToken(response.id))
      .catch((err) => alert(err));
  };

  this.logOut = () => {
    localStorage.clear();
    location. reload();
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

  this.Dialogs = () => {
    this.GetAll = () => {
      return query(
        {
          token:getLocalToken(),
        },
        "getAllDialogue"
        )
        
    };
    this.Create = () => {
      return query(
        {
          token:getLocalToken(),
        },
        ""
        )
    };
  };

  this.Msgs = () => {
    this.Get = (dialogueId) => {
      return query({token:getLocalToken(), id:dialogueId})
    };
    this.New = () => {
      return query({})
    };
  };

  this.User = () => {
    this.Get = () => {
      return query(
        {
          token:getLocalToken(),
        },
        "users/"
      )
    };
    this.Set = () => {
      return query({})
    };
  };

  this.Roles = () => {
    this.GetAll = () => {
      return query(
        {
          token:getLocalToken(),
        },
        "roles/"
        )
    }
  };
}
