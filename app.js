const usersEl = document.querySelector(".users");
const inputEl = document.querySelector("input");
const filtered_usersEl = document.querySelector(".filtered_users");

async function apiData() {
  let res = await fetch("https://dummyjson.com/users");
  let data = await res.json();

  data.users.forEach(
    (user, i) =>
      (usersEl.innerHTML += `
            <div class="user" key=${i}>
                <div class="user-content">
                <div class="img">
                <img
                    src="${user.image}"
                    alt="batman"
                />
                </div>
                <div class="info">
                <h2>${user.firstName} ${user.lastName}</h2>
                <span>${user.username}, ${user.university}</span>
                </div>
                </div>
                <hr />
            </div>

            `)
  );

  inputEl.addEventListener("input", function (e) {
    filtered_usersEl.textContent = "";
    data.users.forEach((user, i) => {
      let fullName = user.firstName + " " + user.lastName;
      if (
        fullName.toLowerCase().trim().includes(e.target.value.trim()) ||
        user.university.toLowerCase().trim().includes(e.target.value.trim())
      ) {
        usersEl.style.display = "none";
        filtered_usersEl.innerHTML += `
                <div class="user" key=${i}>
                      <div class="user-content">
                      <div class="img">
                      <img
                          src="${user.image}"
                          alt="batman"
                          />
                          </div>
                          <div class="info">
                          <h2>${user.firstName} ${user.lastName}</h2>
                          <span>${user.username}, ${user.university}</span>
                          </div>
                          </div>
                          <hr />
                          </div>
                          `;
        // console.log(i);
      }
    });
  });
  console.log(data);
}

apiData();
