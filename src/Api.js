export default function Api() {
  function saveToken(val) {
    localStorage.setItem('token', val);
  }

  function getLocalToken() {
    return localStorage.getItem('token');
  }
  function deleteAllCookies() {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf('=');
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;';
      document.cookie = name + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
  }

  async function query(link, type) {
    return fetch('http://26.72.40.57:7000/' + link, {
      method: type, // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        authorization: 'Bearer ' + getLocalToken(),
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      //body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
      .then((response) => response.json())
      .then((responseData) => {
        return responseData;
      })
      .catch((error) => {
        return false;
      });
  }
  async function queryPOST(data, link, type) {
    return fetch('http://26.72.40.57:7000/' + link, {
      method: type, // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        authorization: 'Bearer ' + getLocalToken(),
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
      .then((response) => response.json())
      .then((responseData) => {
      
        return responseData;
      })
      .catch((error) => {

        return false;
      });
  }

  this.checkToken = () => {
    return getLocalToken();
  };

  this.login = async (login, password) => {
    return queryPOST({ email: login, password: password }, 'auth/login', 'POST')
      .then((response) => {
        if (response.token) {
          saveToken(response.token);
          return true;
        }
        return false;
      })
      .catch((err) => alert(err));
  };

  this.logOut = () => {
    localStorage.clear();
    location.reload();
  };
  this.registration = (email, name, password) => {
    return queryPOST(
      {
        name: name,
        email: email,
        password: password,
      },
      'auth/registration',
      'POST',
    )
      .then((response) => {
        if (response.token) {
          saveToken(response.token);
          return true;
        }
        return false;

      })
      .catch((err) => alert(err));
  };

  this.Dialogs = () => {}
    this.Dialogs.GetAll = () => {
      return query(
        "dialogues","GET"
      )
        
    };

    this.Dialogs.GetById = (dialogId) => {    
      return query(
        "dialogues/" + dialogId,"GET"
      )
    }

    this.Dialogs.Create = (roleId) => {
      return queryPOST(
        {
          roleId:roleId
        },
        "dialogues",
        "POST"
        )
    };

    this.Dialogs.Delete = (chatId) => {
      return query("dialogues/" + chatId,"DELETE")
    }

    this.Dialogs.DeleteAll = () => {
      return query("dialogues","DELETE")
    }
  

  this.Msgs = () => {};
  this.Msgs.Get = (dialogueId) => {
    return query('dialogues/' + dialogueId + '/messages');
  };
  this.Msgs.New = (dialogueId, messageContent) => {
    return queryPOST({ content: messageContent }, 'dialogues/' + dialogueId + '/messages', 'POST');
  };


  this.User = () => {}
    this.User.Get = () => {
      return query(
        "users","GET"
      )
    };
    this.User.SetEmail = (userId, newEmail) => {
      return queryPOST({email:newEmail}, "users/profile/"+userId, "PATCH")
    };
    this.User.SetName = (userId, newName) => {
      return queryPOST({name:newName}, "users/profile/"+userId, "PATCH")
    };
    this.User.SetPassword = (userId, newPassword) => {
      return queryPOST({password:newPassword}, "users/profile/"+userId, "PATCH")
    };
    this.User.SetPremium = (userId) => {
      return queryPOST({}, "users/profile/", "PATCH")
    }
    this.User.DeletePremium = (userId) => {
      return queryPOST({}, "users/profile/"+userId, "PATCH")
    }
    
  

  this.Roles = () => {}
    this.Roles.Get = () => {
      return query(
        "roles","GET"
      )
    }

    this.Roles.GetById = (userId) =>{
      return query(
        "roles/"+userId,"GET"
      )
    }

  this.Roles.Add = (firstPrompt, roleName) => {
    return queryPOST({ value: firstPrompt, name: roleName }, 'roles', 'POST');
  };

  this.Roles.Delete = (roleId) => {
    return queryPOST({roleId:roleId}, 'roles', 'DELETE');
  };
}
