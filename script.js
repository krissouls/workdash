// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSDfk-qKcsiNkxZABRghGuqYo7LL0xmKc",
  authDomain: "workdash-c0fba.firebaseapp.com",
  projectId: "workdash-c0fba",
  storageBucket: "workdash-c0fba.firebasestorage.app",
  messagingSenderId: "892290887809",
  appId: "1:892290887809:web:f24e9daa5c8093bd495d80"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

function handClick() {
    alert("Welcome to WorkDask");
}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

function openform() {
    window.open("https://forms.gle/58wUuZxzo9dfFJBK8")
}

function openWhatsApp() {
    window.open("https://wa.me/919076483170", "_blank");
}

function toggleMenu() {
    const nav = document.getElementById("nav-links");
    nav.classList.toggle("active");
}

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("nav-links");

function toggleMenu() {
  if (window.innerWidth <= 768) {
    nav.classList.toggle("active");
    menuToggle.classList.toggle("active");
  }
}

// Close menu when clicking a link (only on mobile)
document.querySelectorAll("#nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      nav.classList.remove("active");
      menuToggle.classList.remove("active");
    }
  });
});

//Worker app
let selectedJob = "";

function openForm(job) {
  selectedJob = job;
  document.getElementById("jobTitle").innerText = "Apply for " + job;
  document.getElementById("applyModal").style.display = "flex";
}

function closeForm() {
  document.getElementById("applyModal").style.display = "none";
}

function submitApplication() {
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;

  if (!name || !phone) {
    alert("Fill all fields");
    return;
  }

  db.collection("applications").add({
    name: name,
    phone: phone,
    job: selectedJob,
    time: new Date()
  });

  alert("Applied for " + selectedJob);

  closeForm();
}

function viewApplications() {
  let data = JSON.parse(localStorage.getItem("applications")) || [];

  if(data.length === 0){
    alert("No applications yet");
    return;
  }

  let text = data.map(app =>
    `${app.name} applied for ${app.job} (${app.phone})`
  ).join("\n");

  alert(text);
}

//worker app end

loadData();
