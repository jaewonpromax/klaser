// =========================================================
// KLASER — shared front-end behaviour
// =========================================================

(function () {
  "use strict";

  // ---- Header scroll shadow ----
  var header = document.getElementById("siteHeader");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // ---- Mobile nav toggle ----
  var navToggle = document.getElementById("navToggle");
  var mainNav = document.getElementById("mainNav");
  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = mainNav.classList.toggle("is-open");
      navToggle.classList.toggle("is-open", isOpen);
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    mainNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mainNav.classList.remove("is-open");
        navToggle.classList.remove("is-open");
      });
    });
  }

  // ---- Highlight current nav item ----
  var current = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".main-nav a").forEach(function (link) {
    var href = (link.getAttribute("href") || "").toLowerCase();
    if (href === current || (current === "" && href === "index.html")) {
      link.classList.add("is-active");
    }
  });

  // ---- Scroll reveal ----
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  // ---- Notice category filter (notice.html) ----
  var subnav = document.getElementById("noticeSubnav");
  if (subnav) {
    var buttons = subnav.querySelectorAll("button");
    var rows = document.querySelectorAll("[data-category]");
    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        buttons.forEach(function (b) { b.classList.remove("is-active"); });
        btn.classList.add("is-active");
        var filter = btn.getAttribute("data-filter");
        rows.forEach(function (row) {
          var match = filter === "all" || row.getAttribute("data-category") === filter;
          row.style.display = match ? "" : "none";
        });
      });
    });
  }

  // ---- Gallery category filter (gallery.html) ----
  var gallerySubnav = document.getElementById("gallerySubnav");
  if (gallerySubnav) {
    var gButtons = gallerySubnav.querySelectorAll("button");
    var tiles = document.querySelectorAll("[data-gallery-category]");
    gButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        gButtons.forEach(function (b) { b.classList.remove("is-active"); });
        btn.classList.add("is-active");
        var filter = btn.getAttribute("data-filter");
        tiles.forEach(function (tile) {
          var match = filter === "all" || tile.getAttribute("data-gallery-category") === filter;
          tile.style.display = match ? "" : "none";
        });
      });
    });
  }

  // ---- Join / contact form (front-end only demo) ----
  var joinForm = document.getElementById("joinForm");
  if (joinForm) {
    joinForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var success = document.getElementById("joinFormSuccess");
      if (success) {
        success.classList.add("is-visible");
        success.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
      joinForm.reset();
    });
  }
})();
