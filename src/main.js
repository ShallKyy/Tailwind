const hamburger = document.getElementById("hamburger");
const ham = document.querySelectorAll(".hamburger-line");

// Navbar
window.onscroll = () => {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Hamburger
const navMenu = document.querySelector("#nav-menu");
hamburger.addEventListener("click", (e) => {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

//
document.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
    navMenu.classList.add("hidden");
    hamburger.classList.remove("hamburger-active");
  }
});

// Hover Hamburger
for (let i = 0; i < ham.length; i++) {
  if (ham[i] === ham[0]) {
    hamburger.addEventListener("mouseover", () => {
      ham[0].classList.add("hamburger-1");
    });
    hamburger.addEventListener("mouseleave", () => {
      ham[0].classList.remove("hamburger-1");
    });
  }
  if (ham[i] === ham[1]) {
    hamburger.addEventListener("mouseover", () => {
      ham[1].classList.add("hamburger-2");
    });
    hamburger.addEventListener("mouseleave", () => {
      ham[1].classList.remove("hamburger-2");
    });
  }
}

const notifikasi = (pesan) => {
  const warning = document.getElementById("warning");
  warning.innerHTML = pesan;
  warning.style.top = "120px";

  setTimeout(function () {
    warning.style.top = "-80px";
  }, 2000);
};

// Ambil Input
const email = document.getElementById("email");
console.log(email.value);

const btnSend = document.getElementById("btn-send");

btnSend.addEventListener("click", () => {
  const nameInp = document.getElementById("name");

  const telephone = document.getElementById("telephone");
  let massage = document.getElementById("massagge");

  const LinkKeWa = () => {
    const msg = 
    `Halo Ferta, Saya ${nameInp.value}, jadi ini pesanku : ${massage.value}.

    Hubungi Saya :
     Email : ${email.value} 
     ssTelepon : ${telephone.value}`;

    window.open(`https://wa.me/6285362802143?text=${msg}`, "_blank");

    nameInp.value = "";
    telephone.value = "";
    email.value = "";
    massage.value = "";
  };

  if (nameInp.value === "") {
    notifikasi("Wah masih ada yang kosong kaya nya :)");
  } else if (email.value === "") {
    notifikasi("Wah email masih yang kosong kaya nya :)");
  } else if (telephone.value === "") {
    notifikasi("Wah masih ada yang kosong kaya nya :)");
  } else if (massage.value === "") {
    notifikasi("Wah masih ada yang kosong kaya nya :)");
    const uji = confirm("Apakah pesan ingin kosong?");
    if (uji === false) {
      alert("silahkan isi pesan");
    } else {
      LinkKeWa();
    }
  } else {
    LinkKeWa();
  }
});
