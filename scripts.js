document.addEventListener('DOMContentLoaded', () => {
  const toggleThemeCheckbox = document.getElementById('toggleTheme');

  // Загрузка состояния темы из localStorage
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'dark') {
    document.documentElement.classList.add('dark-theme');
    toggleThemeCheckbox.checked = true;
  }

  // Функция для переключения темы
  const switchTheme = (event) => {
    if (event.target.checked) {
      document.documentElement.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  };

  // Слушатель событий для переключения темы
  toggleThemeCheckbox.addEventListener('change', switchTheme);
});

document.addEventListener("DOMContentLoaded", function () {
    let messageButton = document.getElementById("messageButton");
    let modal = document.getElementById("contactFormModal");
    let closeButton = document.querySelector(".close");

    messageButton.addEventListener("click", function () {
        modal.style.display = "block";
    });

    closeButton.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    let contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        let senderName = document.getElementById("senderName").value;
        let senderEmail = document.getElementById("senderEmail").value;
        let messageText = document.getElementById("messageText").value;

        console.log("Отправитель:", senderName);
        console.log("Почта:", senderEmail);
        console.log("Сообщение:", messageText);

        // Здесь вы можете добавить код для отправки сообщения, например, с помощью XMLHttpRequest или fetch API
    });
});
function updateFormColors() {
  if (document.body.classList.contains("dark-mode")) {
    document.querySelector("#senderName").style.color = "#fff";
    document.querySelector("#senderEmail").style.color = "#fff";
    document.querySelector("#messageText").style.color = "#fff";

    document.querySelector("#senderName").style.backgroundColor = "#444";
    document.querySelector("#senderEmail").style.backgroundColor = "#444";
    document.querySelector("#messageText").style.backgroundColor = "#444";
  } else {
    document.querySelector("#senderName").style.color = "";
    document.querySelector("#senderEmail").style.color = "";
    document.querySelector("#messageText").style.color = "";

    document.querySelector("#senderName").style.backgroundColor = "";
    document.querySelector("#senderEmail").style.backgroundColor = "";
    document.querySelector("#messageText").style.backgroundColor = "";
  }
}

toggleSwitch.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
  updateFormColors();
});

document.addEventListener("DOMContentLoaded", () => {
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.body.classList.add("dark-mode");
  }
  updateFormColors();
});


