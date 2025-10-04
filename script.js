// Mobile Navigation
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.innerHTML = navLinks.classList.contains("active")
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
  });
});

// Sticky Header
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Back to Top Button
const backToTopBtn = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("active");
  } else {
    backToTopBtn.classList.remove("active");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Portfolio Filter
const filterBtns = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons
    filterBtns.forEach((btn) => btn.classList.remove("active"));
    // Add active class to clicked button
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    portfolioItems.forEach((item) => {
      const categories = item.getAttribute("data-category").split(" "); // pisahkan jadi array

      if (filter === "all" || categories.includes(filter)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

// Testimonial Slider
const testimonialSlides = document.querySelectorAll(".testimonial-slide");
const testimonialDots = document.querySelectorAll(".testimonial-dot");
let currentSlide = 0;

function showSlide(index) {
  testimonialSlides.forEach((slide) => slide.classList.remove("active"));
  testimonialDots.forEach((dot) => dot.classList.remove("active"));

  testimonialSlides[index].classList.add("active");
  testimonialDots[index].classList.add("active");
  currentSlide = index;
}

testimonialDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide(index);
  });
});

// Auto slide change
setInterval(() => {
  currentSlide = (currentSlide + 1) % testimonialSlides.length;
  showSlide(currentSlide);
}, 5000);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// Form submission
// const contactForm = document.getElementById("form-contact");

// contactForm.addEventListener("submit", function (e) {
//   e.preventDefault();

//   // Here you would typically send the form data to a server
//   // For demo purposes, we'll just show an alert
//   alert("Pesan Anda telah terkirim! Saya akan segera menghubungi Anda.");
//   contactForm.reset();
// });

// // untuk API FONTE WHATSAPP
// // Form submission dengan Fonnte API
// document.addEventListener("DOMContentLoaded", function () {
//   const contactForm = document.getElementById("form-contact");

//   if (contactForm) {
//     contactForm.addEventListener("submit", async function (e) {
//       e.preventDefault();

//       // Ambil nilai form
//       const name = document.getElementById("name").value;
//       const email = document.getElementById("email").value;
//       const no_whatsapp = document.getElementById("no_whatsapp").value;
//       const subject = document.getElementById("subject").value;
//       const message = document.getElementById("message").value;

//       // Validasi nomor WhatsApp
//       if (!no_whatsapp.startsWith("62") && !no_whatsapp.startsWith("0")) {
//         alert("Nomor WhatsApp harus dimulai dengan 62 (kode negara) atau 0");
//         return;
//       }

//       // Format nomor WhatsApp (pastikan diawali 62 tanpa +)
//       const formattedPhone = no_whatsapp.startsWith("62")
//         ? no_whatsapp
//         : "62" + no_whatsapp.substring(1);

//       // Format pesan untuk WhatsApp
//       const whatsappMessage = `*Pesan Baru dari Portofolio Website*\n\n
// *Nama*: ${name}\n
// *Email*: ${email}\n
// *No WhatsApp Pengirim*: ${formattedPhone}\n
// *Subjek*: ${subject}\n
// *Pesan*:\n${message}\n\n
// _Pesan ini dikirim melalui formulir kontak website portofolio_`;

//       // Nomor WhatsApp tujuan (nomor Anda)
//       const yourPhoneNumber = "6288289722296"; // Nomor Anda

//       try {
//         // Kirim via Fonnte API
//         const response = await fetch("https://api.fonnte.com/send", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: "v7vQ3VXF5dwiMZGH6b1S", // API key Anda
//           },
//           body: JSON.stringify({
//             target: yourPhoneNumber, // Mengirim ke nomor Anda
//             message: whatsappMessage,
//             delay: "2", // Delay pengiriman (detik)
//           }),
//         });

//         const result = await response.json();

//         if (result.status === true) {
//           alert("Pesan Anda telah terkirim ke WhatsApp saya. Terima kasih!");
//           contactForm.reset();

//           // Opsional: Buka WhatsApp pengirim
//           window.open(
//             `https://wa.me/${formattedPhone}?text=Terima kasih telah menghubungi saya. Pesan Anda sudah diterima dan akan segera saya balas.`
//           );
//         } else {
//           alert(
//             "Maaf, terjadi kesalahan saat mengirim pesan. Silakan coba lagi nanti."
//           );
//           console.error("Fonnte API Error:", result);
//         }
//       } catch (error) {
//         alert("Maaf, terjadi kesalahan jaringan. Silakan coba lagi nanti.");
//         console.error("Network Error:", error);
//       }
//     });
//   }
// });

// SEND TO VIA MY WHATSAPP
function sendToWhatsApp(event) {
  // Prevent default form submission
  event.preventDefault();

  // Get form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const noWhatsapp = document.getElementById("no_whatsapp").value; // alamat tadinya
  const subject = document.getElementById("subject").value; // phone tadinya
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value;

  // Get service text instead of value
  // const serviceSelect = document.getElementById("service");
  // const serviceText = serviceSelect.options[serviceSelect.selectedIndex].text;

  // Format message for WhatsApp - SIMPLIFIED VERSION
  let whatsappMessage = `Halo, saya ingin menghubungi Anda mengenai layanan Gain.

Detail Informasi:
Nama: ${name}`;

  if (alamat) {
    whatsappMessage += `
No WhatsApp: ${noWhatsapp}`;
  }

  whatsappMessage += `
Email: ${email}
Subjek: ${subject}

Pesan:
${message}

Terima kasih!`;

  // WhatsApp number
  const whatsappNumber = "6288289722296";

  // Method 1: Try WhatsApp Web first (works better with pre-filled text)
  const whatsappWebURL = `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
    whatsappMessage
  )}`;

  // Method 2: Fallback to wa.me
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  // Try to detect if user is on mobile or desktop
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  if (isMobile) {
    // On mobile, use wa.me (opens WhatsApp app)
    window.location.href = whatsappURL;
  } else {
    // On desktop, try WhatsApp Web first
    const newWindow = window.open(whatsappWebURL, "_blank");

    // If WhatsApp Web doesn't work, fallback to wa.me after 3 seconds
    setTimeout(() => {
      if (newWindow && newWindow.closed) {
        window.open(whatsappURL, "_blank");
      }
    }, 3000);
  }
}

// Alternative function - Force WhatsApp Web (usually works better for pre-filled text)
function sendToWhatsAppWeb(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const noWhatsapp = document.getElementById("no_whatsapp").value; // alamat tadinya
  const subject = document.getElementById("subject").value; // phone tadinya
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value;

  // const serviceSelect = document.getElementById("service");
  // const serviceText = serviceSelect.options[serviceSelect.selectedIndex].text;

  // Simple format without special characters
  let whatsappMessage = `Halo, saya ingin menghubungi Anda mengenai layanan Gain.

Detail Informasi:
Nama: ${name}`;

  if (alamat) {
    whatsappMessage += `
No WhatsAapp: ${noWhatsapp}`;
  }

  whatsappMessage += `
Email: ${email}
Subjek: ${subject}

Pesan:
${message}

Terima kasih!`;

  // Force WhatsApp Web
  const whatsappWebURL = `https://web.whatsapp.com/send?phone=6288289722296&text=${encodeURIComponent(
    whatsappMessage
  )}`;
  window.open(whatsappWebURL, "_blank");
}

// Ultra simple version for testing
function sendToWhatsAppSimple(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  const text = `Halo, nama saya ${name}. Pesan: ${message}`;
  const url = `https://web.whatsapp.com/send?phone=6288289722296&text=${encodeURIComponent(
    text
  )}`;

  window.open(url, "_blank");
}

// Modal Gallery Functionality
let currentModalIndex = 0;
let modalImages = [];
let modalTitles = [];

function openModal(clickedImage) {
  const modal = document.getElementById("galleryModal");
  const images = JSON.parse(clickedImage.getAttribute("data-images"));
  const titles = JSON.parse(clickedImage.getAttribute("data-titles") || "[]");

  modalImages = images;
  modalTitles = titles;
  currentModalIndex = 0;

  updateModal();
  modal.style.display = "block";
  document.body.style.overflow = "hidden";

  // Add keyboard navigation
  document.addEventListener("keydown", handleKeyboardNavigation);
}

function closeModal() {
  const modal = document.getElementById("galleryModal");
  modal.style.display = "none";
  document.body.style.overflow = "auto";
  document.removeEventListener("keydown", handleKeyboardNavigation);
}

function changeModalSlide(direction) {
  currentModalIndex =
    (currentModalIndex + direction + modalImages.length) % modalImages.length;
  updateModal();
}

function goToSlide(index) {
  currentModalIndex = index;
  updateModal();
}

function updateModal() {
  const modalContent = document.querySelector(".modal-gallery-content");

  modalContent.innerHTML = `
    <span class="modal-close" onclick="closeModal()">&times;</span>
    
    <div class="modal-nav">
      <button class="modal-prev" onclick="changeModalSlide(-1)">
        <i class="fas fa-chevron-left"></i>
      </button>
      <button class="modal-next" onclick="changeModalSlide(1)">
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
    
    <div class="modal-slide active">
      <img src="${modalImages[currentModalIndex]}" alt="Slide ${
    currentModalIndex + 1
  }" />
    </div>
    
    ${
      modalTitles.length > 0
        ? `
      <div class="modal-title">
        ${modalTitles[currentModalIndex]}
      </div>
    `
        : ""
    }
    
    
    
    ${
      modalImages.length > 1
        ? `
      <div class="modal-thumbnails">
        ${modalImages
          .map(
            (img, index) => `
          <div class="modal-thumbnail ${
            index === currentModalIndex ? "active" : ""
          }" 
               onclick="goToSlide(${index})">
            <img src="${img}" alt="Thumbnail ${index + 1}" />
          </div>
        `
          )
          .join("")}
      </div>
    `
        : ""
    }
  `;
}

function handleKeyboardNavigation(event) {
  switch (event.key) {
    case "ArrowLeft":
      changeModalSlide(-1);
      break;
    case "ArrowRight":
      changeModalSlide(1);
      break;
    case "Escape":
      closeModal();
      break;
  }
}

// Close modal when clicking outside content
window.addEventListener("click", function (event) {
  const modal = document.getElementById("galleryModal");
  if (event.target === modal) {
    closeModal();
  }
});

// Swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener(
  "touchstart",
  function (event) {
    touchStartX = event.changedTouches[0].screenX;
  },
  false
);

document.addEventListener(
  "touchend",
  function (event) {
    touchEndX = event.changedTouches[0].screenX;
    handleSwipe();
  },
  false
);

function handleSwipe() {
  const swipeThreshold = 50;

  if (touchEndX < touchStartX - swipeThreshold) {
    // Swipe left - next slide
    changeModalSlide(1);
  }

  if (touchEndX > touchStartX + swipeThreshold) {
    // Swipe right - previous slide
    changeModalSlide(-1);
  }
}
