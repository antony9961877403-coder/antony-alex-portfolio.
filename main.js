/**
 * Antony Alex — Creative Designer & Vibe Coder
 * Client-side interactions & dynamic UI behaviors
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Theme Management (Dark / Light)
  const themeToggle = document.getElementById('themeToggle');
  const htmlRoot = document.documentElement;

  // Retrieve saved theme or prefer dark by default
  const savedTheme = localStorage.getItem('antony_portfolio_theme') || 'dark';
  htmlRoot.setAttribute('data-theme', savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = htmlRoot.getAttribute('data-theme');
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      htmlRoot.setAttribute('data-theme', nextTheme);
      localStorage.setItem('antony_portfolio_theme', nextTheme);
    });
  }

  // 2. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('nav-open');
      mobileMenuBtn.classList.toggle('open', isOpen);
      mobileMenuBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile menu when clicking any nav link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('nav-open');
        mobileMenuBtn.classList.remove('open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 3. Scroll Reveal Animations
  const revealElements = document.querySelectorAll('[data-reveal]');
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  revealElements.forEach(el => revealObserver.observe(el));

  // 4. Project Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      projectCards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // 5. Interactive Project Modal / Detail Inspection
  const projectModal = document.getElementById('projectModal');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalBody = document.getElementById('modalBody');

  const projectDetailsMap = {
    'Aura Spatial Identity System': {
      category: 'Visual Identity — Concept Exploration',
      subtitle: 'Geometric Identity & Spatial Branding',
      overview: 'An exploratory concept exploring how physical space and sound interact through branding. Designed to demonstrate systematic visual coherence across hardware and packaging.',
      features: [
        'Precise geometric mark built on circular grid mathematics',
        'Dynamic kinetic typography framework',
        'Mockup guidelines for ambient tech hardware'
      ],
      disclaimer: 'Labeled as a concept exploration. Antony developed this to showcase brand systems thinking.'
    },
    'Kalyan Architectural Mark': {
      category: 'Logo Design — Concept Exploration',
      subtitle: 'Monogram & Structural Negative Space',
      overview: 'Conceptual identity mark designed for an architectural consultancy. Combines structural monolithic forms with subtle Kerala vernacular craft inspiration.',
      features: [
        'High contrast balance of solid geometry and line craft',
        'Engineered for monochrome versatility and metallic embossing',
        'Scalable favicon and physical signage specifications'
      ],
      disclaimer: 'Sample logo design concept placeholder.'
    },
    'ChromaFlow Reactive UI': {
      category: 'Digital & Vibe Coding — Interactive Prototype',
      subtitle: 'Instant Generative Color Palettes',
      overview: 'An exploration in vibe coding: creating micro-apps where prompt velocity and aesthetic tokens merge seamlessly into living user interfaces.',
      features: [
        'Built rapidly with vanilla JavaScript and dynamic CSS custom properties',
        'Instant color harmony calculations (analogous, complementary, triadic)',
        'Accessible contrast checker baked into the token generation'
      ],
      disclaimer: 'Functional vibe coding experiment created by Antony.'
    },
    'Campaign Identity & Social Collateral': {
      category: 'Agency Production — Placeholder Space',
      subtitle: 'Client Collateral & Campaign Systems',
      overview: 'Representative space for client projects designed during Antony’s one year at a marketing agency. Ready to be updated with specific client case studies.',
      features: [
        'Omnichannel social media campaign templates',
        'Promotional print collateral and outdoor banners',
        'Rigid adherence to client corporate brand standards'
      ],
      disclaimer: 'Agency client details, names, and images are intentionally left as editable placeholders.'
    },
    'Nexus Tech Brandmark': {
      category: 'Logo Design — Concept Exploration',
      subtitle: 'Constructivist Tech Iconography',
      overview: 'High-density tech symbol designed for high-resolution retina screens and microscopic vector icons down to 16px.',
      features: [
        'Pure vector geometric construction',
        'Optical corrections for multi-scale legibility',
        'Dark mode optimized contrast ratios'
      ],
      disclaimer: 'Vector concept mark.'
    },
    'Insight Studio Dashboard UI': {
      category: 'Data & Digital — Concept Exploration',
      subtitle: 'Bridging Data Analytics & Visual Clarity',
      overview: 'Informed by Antony’s Data Analytics coursework at Nirmaan.org (supported by Infosys Foundation). Focuses on clear metric display and information hierarchy.',
      features: [
        'Reduced visual noise and increased data-ink ratio',
        'Thoughtful color coding for metric urgency and trends',
        'Responsive chart wrappers for mobile screens'
      ],
      disclaimer: 'Concept project fusing graphic design with data analytics coursework.'
    }
  };

  projectCards.forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
      const title = card.querySelector('.project-title')?.textContent.trim();
      const details = projectDetailsMap[title];

      if (details) {
        modalBody.innerHTML = `
          <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent-primary); text-transform: uppercase; margin-bottom: 0.5rem; letter-spacing: 0.05em;">
            ${details.category}
          </div>
          <h2 style="font-family: var(--font-heading); font-size: 1.85rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.5rem;">
            ${title}
          </h2>
          <p style="font-size: 1rem; color: var(--text-secondary); margin-bottom: 1.5rem; font-weight: 500;">
            ${details.subtitle}
          </p>
          <div style="background: var(--bg-secondary); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1.25rem; margin-bottom: 1.5rem;">
            <p style="font-size: 0.95rem; color: var(--text-primary); line-height: 1.65; margin: 0;">
              ${details.overview}
            </p>
          </div>
          <h4 style="font-family: var(--font-heading); font-size: 1rem; font-weight: 600; color: var(--text-primary); margin-bottom: 0.75rem;">
            Key Project Elements:
          </h4>
          <ul style="list-style: none; padding: 0; margin-bottom: 1.5rem; display: flex; flex-direction: column; gap: 0.5rem;">
            ${details.features.map(f => `<li style="position: relative; padding-left: 1.25rem; font-size: 0.9rem; color: var(--text-secondary);"><span style="position: absolute; left: 0; color: var(--accent-primary);">✔</span> ${f}</li>`).join('')}
          </ul>
          <div style="padding: 0.85rem 1rem; background: rgba(56, 189, 248, 0.08); border-left: 3px solid var(--accent-primary); border-radius: 4px; font-size: 0.85rem; color: var(--text-muted); font-style: italic;">
            <strong>Note:</strong> ${details.disclaimer}
          </div>
        `;
        projectModal.classList.add('active');
        projectModal.setAttribute('aria-hidden', 'false');
      }
    });
  });

  const closeModal = () => {
    projectModal.classList.remove('active');
    projectModal.setAttribute('aria-hidden', 'true');
  };

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && projectModal.classList.contains('active')) {
      closeModal();
    }
  });

  // 6. Interactive Vibe Lab Studio
  const vibeButtons = document.querySelectorAll('.vibe-btn');
  const vibeCanvasTarget = document.getElementById('vibeCanvasTarget');
  const vibeCodeDisplay = document.getElementById('vibeCodeDisplay');

  const vibePresets = {
    editorial: {
      accent: '#2563eb',
      bg: '#111827',
      cardBg: '#1e293b',
      text: '#f8fafc',
      font: "'Space Grotesk', sans-serif",
      headline: 'Typography & Form',
      mood: 'Crisp & Systematic'
    },
    cyber: {
      accent: '#10b981',
      bg: '#050505',
      cardBg: '#121212',
      text: '#e2e8f0',
      font: "'JetBrains Mono', monospace",
      headline: 'Cyber Minimal',
      mood: 'Terminal Obsidian'
    },
    warm: {
      accent: '#ea580c',
      bg: '#1c1917',
      cardBg: '#292524',
      text: '#fafaf9',
      font: "'Plus Jakarta Sans', sans-serif",
      headline: 'Warm Terracotta',
      mood: 'Organic & Grounded'
    },
    electric: {
      accent: '#a855f7',
      bg: '#130e24',
      cardBg: '#20163b',
      text: '#fdf4ff',
      font: "'Space Grotesk', sans-serif",
      headline: 'Electric Citron & Violet',
      mood: 'Vibrant Neo-Vibe'
    }
  };

  vibeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      vibeButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const vibeKey = btn.dataset.vibe;
      const preset = vibePresets[vibeKey];

      if (preset && vibeCanvasTarget) {
        // Animate preview card
        const card = vibeCanvasTarget.querySelector('.interactive-preview-card');
        const headline = card.querySelector('.preview-headline');
        const chip = card.querySelector('.card-chip');
        const primBtn = card.querySelector('.demo-btn.primary');

        card.style.background = preset.cardBg;
        headline.style.fontFamily = preset.font;
        headline.textContent = preset.headline;
        chip.style.color = preset.accent;
        if (primBtn) primBtn.style.background = preset.accent;

        vibeCodeDisplay.textContent = `/* Active Vibe: ${vibeKey.toUpperCase()} */
--accent: ${preset.accent};
--bg-surface: ${preset.cardBg};
--font-family: ${preset.font};
--style-mood: '${preset.mood}';`;
      }
    });
  });

  // 7. Copy Email & Toast Notification
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const userEmail = document.getElementById('userEmail');
  const toastNotification = document.getElementById('toastNotification');
  const toastMessage = document.getElementById('toastMessage');

  const showToast = msg => {
    if (toastNotification && toastMessage) {
      toastMessage.textContent = msg;
      toastNotification.classList.add('show');
      setTimeout(() => {
        toastNotification.classList.remove('show');
      }, 3000);
    }
  };

  if (copyEmailBtn && userEmail) {
    copyEmailBtn.addEventListener('click', async () => {
      const emailText = userEmail.textContent.trim();
      try {
        await navigator.clipboard.writeText(emailText);
        showToast('Email address copied to clipboard!');
      } catch (err) {
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = emailText;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('Email address copied to clipboard!');
      }
    });
  }

  // 8. Contact Form Client Validation & Interaction
  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');

  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();

      const nameInput = document.getElementById('senderName');
      const emailInput = document.getElementById('senderEmail');
      const typeInput = document.getElementById('projectType');
      const msgInput = document.getElementById('senderMessage');

      let isValid = true;

      // Reset errors
      document.getElementById('nameError').textContent = '';
      document.getElementById('emailError').textContent = '';
      document.getElementById('messageError').textContent = '';

      if (!nameInput.value.trim()) {
        document.getElementById('nameError').textContent = 'Please enter your name.';
        isValid = false;
      }

      if (!emailInput.value.trim() || !emailInput.value.includes('@')) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        isValid = false;
      }

      if (!msgInput.value.trim()) {
        document.getElementById('messageError').textContent = 'Please write a brief message.';
        isValid = false;
      }

      if (isValid) {
        formFeedback.className = 'form-feedback success';
        formFeedback.innerHTML = `
          <strong>Message drafted!</strong> Since this is a placeholder contact form, click below to open your email client:
          <br><br>
          <a href="mailto:antony.alex.placeholder@example.com?subject=${encodeURIComponent('Inquiry: ' + typeInput.value + ' from ' + nameInput.value)}&body=${encodeURIComponent(msgInput.value + '\n\nSender Email: ' + emailInput.value)}" 
             class="btn-pill" style="display:inline-block; margin-top: 6px;">
            Open Default Email Client &rarr;
          </a>
        `;
        showToast('Inquiry drafted successfully!');
        contactForm.reset();
      }
    });
  }

  // 9. Active Navigation Link Highlighting on Scroll
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-links .nav-item');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentId = section.getAttribute('id');
      }
    });

    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === `#${currentId}`) {
        item.classList.add('active');
      }
    });
  });
});
