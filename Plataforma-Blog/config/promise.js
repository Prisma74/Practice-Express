// Function that simulates obtaining a list of users from an "API"

function getUsers() {
  return new Promise((resolve, reject) => {
    console.log("Getting list of users");
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve([
          { id: 1, nombre: "Garcia" },
          { id: 2, nombre: "Camilo" },
          { id: 3, nombre: "Andres" },
        ]);
      } else {
        reject("Error getting list of users :( ...");
      }
    }, 2000);
  });
}

function getUserDetails(id) {
  return new Promise((resolve, reject) => {
    console.log(`Getting user details of ID${id}`);
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve({
          id: id,
          nombre: id === 1 ? "Garcia" : id === 2 ? "Camilo" : "Andres",
          edad: id === 1 ? 22 : id === 2 ? 25 : 23,
          correo:
            id === 1
              ? "garcia@gmail.com"
              : id === 2
              ? "camilo@gmail.com"
              : "andres@gmail.com",
        });
      }
    }, 1500);
  });
}

function showUserData() {
  getUsers()
    .then((users) => {
      console.log("Users obtained: ", users);
      return getUserDetails(users[1].id);
    })
    .then((details) => {
      console.log("User details", details);
    })
    .catch((error) => {
      console.log(error);
    });
}

showUserData();
