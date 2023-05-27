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
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
  
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
    return query({ email: login, password: password }, "auth/login")
      .then((response) => {
        if (response.token) {
          saveToken(response.token);
          return true;
        }
        return false;

        console.log(response);
      })
      .catch((err) => alert(err));
  };

  this.logOut = () => {
    localStorage.clear();
    location. reload();
  };
  this.registration = (email, name, password) => {
    return query(
      {
        name: name,
        email: email,
        password: password,
      },
      "auth/registration"
    ).then((response) => {
      if (response.token) {
        saveToken(response.token);
        return true;
      }
      return false;

      console.log(response);
    })
    .catch((err) => alert(err));
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
    this.Create = (roleId) => {
      return query(
        {
          token:getLocalToken(), role:roleId
        },
        ""
        )
    };
  };

  this.Msgs = () => {
    this.Get = (dialogueId) => {
      return query({token:getLocalToken(), id:dialogueId},
      "dialogues/"+ dialogueId +"/messages"
      )
    };
    this.New = (dialogueId) => {
      return query({token:getLocalToken(), id:dialogueId},
        ""
      )
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
      return query({token:getLocalToken()}, "")
    };
  };

  this.Roles = () => {
    this.GetAll = () => {
      return query(
        {
          token:getLocalToken(),
        },
        "roles"
      )
    }

    this.Add = () => {
      return query({token:getLocalToken()}, "")
    }
  };
}
