if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then((res) => console.log("service worker registered"))
      .catch((err) => console.log("service worker not registered", err));
  });
}

const container = document.querySelector(".container");
const coffees = [
  { name: "Perspiciatis", image: "images/avatar1.png" },
  { name: "Voluptatem", image: "images/avatar2.png" },
  {
    name: "Explicabo",
    image: "images/avatar3.png",
  },
  { name: "Rchitecto", image: "images/avatar4.png" },
  { name: " Beatae", image: "images/avatar5.png" },
  { name: " Vitae", image: "images/avatar6.png" },
  { name: "Inventore", image: "images/avatar7.png" },
  { name: "Veritatis", image: "images/avatar8.png" },
  { name: "Accusantium", image: "images/avatar9.png" },
];

const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} alt="Avatar Image" />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">View</a>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

let install_Prompt;

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  console.log("👍🏼", "Before Install Prompt", e);

  install_Prompt = e;
});

const install_btn = document.querySelector("#install_btn");

install_btn.addEventListener("click", () => {
  install_Prompt.prompt();

  install_Prompt.userChoice.then((result) => {
    if (result.outcome === "accepted") {
      console.log("User accepted the install");
    } else {
      console.log("User did not accept the install");
    }
  });
});
