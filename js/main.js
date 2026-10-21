/* ==========================================================================
   main.js — Kanigiri Restaurant Landing Page
   Interaksi: drawer navigasi, carousel menu, aksesibilitas keyboard
   ========================================================================== */
(function () {
  'use strict';

  // ------------------------------------------------------------
  // 1. Drawer navigasi (hamburger)
  // ------------------------------------------------------------
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-list a');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.hasAttribute('open');
      if (isOpen) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });

    // Tutup drawer saat klik link navigasi
    navLinks.forEach((link) => {
      link.addEventListener('click', closeDrawer);
    });

    // Tutup drawer dengan tombol Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.hasAttribute('open')) {
        closeDrawer();
        navToggle.focus();
      }
    });
  }

  function openDrawer() {
    navMenu.setAttribute('open', '');
    navToggle.setAttribute('aria-expanded', 'true');
    navToggle.setAttribute('aria-label', 'Tutup navigasi');
    // Trap focus di dalam drawer (sederhana)
    const firstLink = navMenu.querySelector('a');
    if (firstLink) firstLink.focus();
  }

  function closeDrawer() {
    navMenu.removeAttribute('open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Buka navigasi');
    navToggle.focus();
  }

  // ------------------------------------------------------------
  // 2. Carousel menu rekomendasi
  // ------------------------------------------------------------
  const track = document.querySelector('.carousel-track');
  const prevBtn = document.querySelector('.carousel-prev');
  const nextBtn = document.querySelector('.carousel-next');
  const cards = document.querySelectorAll('.menu-card');

  if (!track || !prevBtn || !nextBtn || cards.length === 0) return;

  let isDragging = false;
  let startX = 0;
  let scrollLeft = 0;

  // Hitung lebar satu kartu termasuk gap
  function getCardWidth() {
    const card = cards[0];
    const style = getComputedStyle(card);
    const marginRight = parseFloat(style.marginRight) || 0;
    return card.offsetWidth + marginRight + 32; // gap antar kartu (desktop: 32px)
  }

  // Geser sejumlah kartu yang terlihat
  function scrollByCards(direction) {
    const cardWidth = getCardWidth();
    const containerWidth = track.parentElement.offsetWidth;
    const visibleCards = Math.floor(containerWidth / cardWidth) || 1;
    const scrollAmount = cardWidth * visibleCards;

    track.scrollBy({ left: scrollAmount * direction, behavior: 'smooth' });

    // Update state tombol setelah jeda agar scroll selesai
    setTimeout(updateButtonStates, 300);
  }

  nextBtn.addEventListener('click', () => scrollByCards(1));
  prevBtn.addEventListener('click', () => scrollByCards(-1));

  // Tombol panah keyboard untuk carousel saat fokus pada track
  track.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      scrollByCards(-1);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      scrollByCards(1);
    }
  });

  // Touch / mouse drag
  track.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
    track.style.cursor = 'grabbing';
  });

  track.addEventListener('mouseleave', () => {
    isDragging = false;
    track.style.cursor = '';
  });

  track.addEventListener('mouseup', () => {
    isDragging = false;
    track.style.cursor = '';
  });

  track.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 1.5; // kecepatan drag
    track.scrollLeft = scrollLeft - walk;
  });

  // Touch events
  track.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
  }, { passive: true });

  track.addEventListener('touchend', () => {
    isDragging = false;
  });

  track.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - track.offsetLeft;
    const walk = (x - startX) * 1.5;
    track.scrollLeft = scrollLeft - walk;
  }, { passive: true });

  // Update state enabled/disabled tombol panah
  function updateButtonStates() {
    const scrollLeft = track.scrollLeft;
    const maxScroll = track.scrollWidth - track.clientWidth;
    const threshold = 2;

    prevBtn.disabled = scrollLeft <= threshold;
    nextBtn.disabled = scrollLeft >= maxScroll - threshold;
  }

  // Inisialisasi state tombol
  updateButtonStates();

  // Recalculate saat resize
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(updateButtonStates, 150);
  });

  // Recalculate saat scroll track (untuk update state tombol)
  track.addEventListener('scroll', updateButtonStates);
})();