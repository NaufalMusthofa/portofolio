// KODE PERTAMA - MINES NYA WA WEB TIDAK MENAMPILKAN OTOMATIS TEXT DI KETIK PESAN
// function openWhatsApp() {
//   // WhatsApp number
//   const whatsappNumber = "6282112312573";

//   // Detect if user is on mobile or desktop
//   const isMobile =
//     /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
//       navigator.userAgent
//     );

//   // Create WhatsApp URLs (without pre-filled message)
//   const whatsappURL = `https://wa.me/${whatsappNumber}`;
//   const whatsappWebURL = `https://web.whatsapp.com/send?phone=${whatsappNumber}`;

//   // Show loading state
//   const btn = document.querySelector(".whatsapp-btn");
//   const originalContent = btn.innerHTML;

//   btn.innerHTML = `
//         <div class="btn-content loading">
//             <svg class="loading-spinner" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" stroke-opacity="0.25"/>
//                 <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
//             </svg>
//             <div class="btn-text">
//                 <span class="btn-title">Membuka WhatsApp...</span>
//                 <span class="btn-subtitle">Mohon tunggu sebentar</span>
//             </div>
//         </div>
//     `;
//   btn.disabled = true;

//   // Open WhatsApp
//   setTimeout(() => {
//     if (isMobile) {
//       window.location.href = whatsappURL;
//     } else {
//       window.open(whatsappWebURL, "_blank");
//     }

//     // Reset button after 2 seconds
//     setTimeout(() => {
//       btn.innerHTML = originalContent;
//       btn.disabled = false;
//     }, 2000);
//   }, 500);
// }

// KODE KEDUA
function openWhatsApp() {
  const whatsappNumber = "6288289722296";
  const message =
    "Halo, saya tertarik untuk mengetahui lebih lanjut mengenai layanan Anda.";
  const encodedMessage = encodeURIComponent(message);

  const url = `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;

  const btn = document.querySelector(".whatsapp-btn");
  const originalHTML = btn.innerHTML;

  btn.innerHTML = `
    <div class="btn-content loading">
      <svg class="loading-spinner" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" stroke-opacity="0.25"/>
        <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
      </svg>
      <div class="btn-text">
        <span class="btn-title">Membuka WhatsApp Web...</span>
        <span class="btn-subtitle">Mohon tunggu sebentar</span>
      </div>
    </div>
  `;
  btn.disabled = true;

  // Redirect langsung ke WhatsApp Web
  setTimeout(() => {
    window.location.href = url;

    setTimeout(() => {
      btn.innerHTML = originalHTML;
      btn.disabled = false;
    }, 2000);
  }, 300);
}
