// Wait for page to load
document.addEventListener("DOMContentLoaded", function () {
  // Initialize components after page is loaded
  initLoader();
  initProgressBars();
  initMouseTrail();
  initParallaxEffect();
});

/**
 * Loading screen animation
 */
function initLoader() {
  // Hide loader after a delay
  setTimeout(function () {
    const loader = document.querySelector(".loader");
    if (loader) {
      loader.classList.add("hidden");
    }
  }, 1500);
}

/**
 * Animate skill progress bars
 */
function initProgressBars() {
  setTimeout(function () {
    document.querySelectorAll(".progress").forEach(function (progress) {
      const width = progress.getAttribute("data-width");
      progress.style.width = width + "%";
    });
  }, 1000);
}

/**
 * Create and manage mouse trail effect
 */
function initMouseTrail() {
  const numTrails = 5;
  const trails = [];

  // Create trail elements
  for (let i = 0; i < numTrails; i++) {
    const trail = document.createElement("div");
    trail.className = "cursor-trail";
    trail.style.opacity = 1 - i / numTrails;
    document.body.appendChild(trail);
    trails.push({
      element: trail,
      x: 0,
      y: 0,
    });
  }

  // Track mouse position
  let mouseX = 0;
  let mouseY = 0;

  document.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Update trail positions in animation frame
  function updateTrails() {
    // Update first trail to mouse position
    trails[0].x = mouseX;
    trails[0].y = mouseY;
    trails[0].element.style.left = mouseX + "px";
    trails[0].element.style.top = mouseY + "px";

    // Update other trails to follow previous trail
    for (let i = 1; i < numTrails; i++) {
      const prevTrail = trails[i - 1];
      const currentTrail = trails[i];

      // Smooth follow with delay
      currentTrail.x += (prevTrail.x - currentTrail.x) * 0.3;
      currentTrail.y += (prevTrail.y - currentTrail.y) * 0.3;

      currentTrail.element.style.left = currentTrail.x + "px";
      currentTrail.element.style.top = currentTrail.y + "px";
      currentTrail.element.style.width = 15 - i * 2 + "px";
      currentTrail.element.style.height = 15 - i * 2 + "px";
    }

    requestAnimationFrame(updateTrails);
  }

  updateTrails();
}

/**
 * Create parallax effect on scroll
 */
function initParallaxEffect() {
  // Background shapes parallax
  window.addEventListener("scroll", function () {
    const scrollY = window.scrollY;

    // Apply parallax to background shapes
    document.querySelectorAll(".shape").forEach(function (shape, index) {
      const speed = 0.1 * (index + 1);
      shape.style.transform = `translateY(${scrollY * speed}px)`;
    });

    // Apply subtle parallax to profile card sections
    document.querySelectorAll(".section").forEach(function (section, index) {
      const rect = section.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

      if (isVisible) {
        section.style.transform = "translateY(0)";
        section.style.opacity = "1";
      }
    });
  });

  // Trigger scroll event once to initialize positions
  window.dispatchEvent(new Event("scroll"));
}

/**
 * Add form submission handler
 */
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.querySelector(".contact-form");
  const submitButton = contactForm ? contactForm.querySelector(".btn") : null;

  if (submitButton) {
    submitButton.addEventListener("click", function (e) {
      e.preventDefault();

      // Get form inputs
      const nameInput = contactForm.querySelector('input[type="text"]');
      const emailInput = contactForm.querySelector('input[type="email"]');
      const messageInput = contactForm.querySelector("textarea");

      // Simple validation
      if (!nameInput.value || !emailInput.value || !messageInput.value) {
        alert("Vui lòng điền đầy đủ thông tin!");
        return;
      }

      // Simulate form submission
      submitButton.textContent = "Đang gửi...";

      setTimeout(function () {
        // Reset form
        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";

        // Show success message
        submitButton.textContent = "Đã gửi!";

        // Reset button after delay
        setTimeout(function () {
          submitButton.textContent = "Gửi tin nhắn";
        }, 3000);
      }, 1500);
    });
  }
});

/**
 * Add portfolio item click handlers
 */
document.addEventListener("DOMContentLoaded", function () {
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  portfolioItems.forEach(function (item) {
    item.addEventListener("click", function () {
      // Get project title
      const projectTitle = item.querySelector("h5").textContent;

      // Could show a modal with project details here
      alert(`Đang xem dự án: ${projectTitle}`);
    });
  });
});

/**
 * Add smooth scrolling for navigation
 */
document.addEventListener("DOMContentLoaded", function () {
  // Add smooth scrolling to all links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
});

/**
 * Add animations for social buttons
 */
document.addEventListener("DOMContentLoaded", function () {
  const socialBtns = document.querySelectorAll(".social-btn");

  socialBtns.forEach(function (btn) {
    btn.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px) rotate(5deg)";
    });

    btn.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) rotate(0deg)";
    });
  });
});

/**
 * Add hover effects for info items
 */
document.addEventListener("DOMContentLoaded", function () {
  const infoItems = document.querySelectorAll(".info-item");

  infoItems.forEach(function (item) {
    item.addEventListener("mouseenter", function () {
      const icon = this.querySelector(".icon");
      if (icon) {
        icon.style.transform = "scale(1.2)";
      }
    });

    item.addEventListener("mouseleave", function () {
      const icon = this.querySelector(".icon");
      if (icon) {
        icon.style.transform = "scale(1)";
      }
    });
  });
});

/**
 * Handle window resize events
 */
window.addEventListener("resize", function () {
  // Adjust layout for mobile devices
  if (window.innerWidth <= 768) {
    document.querySelectorAll(".portfolio-item").forEach(function (item) {
      item.style.height = "100px";
    });
  } else {
    document.querySelectorAll(".portfolio-item").forEach(function (item) {
      item.style.height = "120px";
    });
  }
});

/**
 * Add color theme toggle functionality
 * Note: CSS variables would need to be added to support this feature
 */
document.addEventListener("DOMContentLoaded", function () {
  // This could be expanded to actually change theme colors
  let isDarkMode = false;

  // Add theme toggle button (this would need to be added to HTML)
  const themeToggleBtn = document.getElementById("theme-toggle");
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", function () {
      isDarkMode = !isDarkMode;

      if (isDarkMode) {
        document.body.classList.add("dark-mode");
        themeToggleBtn.textContent = "☀️";
      } else {
        document.body.classList.remove("dark-mode");
        themeToggleBtn.textContent = "🌙";
      }
    });
  }
});
