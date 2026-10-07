document.addEventListener('DOMContentLoaded', () => {
  const skillsGrid = document.getElementById('skills-grid');
  const projectsGrid = document.getElementById('projects-grid');
  const experienceList = document.getElementById('experience-list');
  const educationList = document.getElementById('education-list');
  const certificationsList = document.getElementById('certifications-list');

  const initializeSkills = () => {
    if (!skillsGrid || !portfolioData?.skills) return;

    skillsGrid.innerHTML = portfolioData.skills
      .map(
        (group) => `
          <article class="skill-card reveal">
            <h4>${group.category}</h4>
            <div class="chip-list">
              ${group.items.map((item) => `<span class="chip">${item}</span>`).join('')}
            </div>
          </article>
        `
      )
      .join('');
  };

  const initializeProjects = () => {
    if (!projectsGrid || !portfolioData?.projects) return;

    projectsGrid.innerHTML = portfolioData.projects
      .map(
        (project) => `
          <article class="project-card reveal ${project.featured ? 'featured' : ''}">
            <div class="project-image-wrap">
              <img
                src="${project.image}"
                alt="${project.title}"
                loading="lazy"
                decoding="async"
                onerror="this.onerror=null;this.src='assets/images/project-placeholder.svg';"
              />
            </div>
            <div class="project-body">
              <span class="project-category">${project.category}</span>
              <h4>${project.title}</h4>
              <p>${project.description}</p>
              <div class="project-meta-row">
                <span>${project.location}</span>
                ${project.metrics.slice(0, 2).map((metric) => `<span>${metric}</span>`).join('')}
              </div>
              <div class="chip-list project-tech">
                ${project.tech.map((tech) => `<span class="chip chip-soft">${tech}</span>`).join('')}
              </div>
              <div class="project-metrics">
                ${project.metrics.map((metric) => `<span>${metric}</span>`).join('')}
              </div>
              <div class="project-actions">
                ${project.links.live && project.links.live !== '#' ? `<a href="${project.links.live}" target="_blank" rel="noopener noreferrer" class="button button-primary">Live Website</a>` : ''}
                <a href="${project.links.github}" target="_blank" rel="noopener noreferrer" class="button button-secondary">GitHub Repository</a>
              </div>
            </div>
          </article>
        `
      )
      .join('');
  };

  const initializeExperience = () => {
    if (!experienceList || !portfolioData?.experiences) return;

    experienceList.innerHTML = portfolioData.experiences
      .map(
        (item) => `
          <article class="timeline-item reveal">
            <div class="timeline-dot" aria-hidden="true"></div>
            <div class="timeline-content">
              <span class="timeline-period">${item.period}</span>
              <h4>${item.role}</h4>
              <p class="timeline-institution">${item.institution}</p>
              <p>${item.description}</p>
              <div class="chip-list">
                ${item.skills.map((skill) => `<span class="chip">${skill}</span>`).join('')}
              </div>
            </div>
          </article>
        `
      )
      .join('');
  };

  const initializeEducation = () => {
    if (!educationList || !portfolioData?.education) return;

    educationList.innerHTML = portfolioData.education
      .map(
        (item) => `
          <article class="education-item reveal">
            <span class="timeline-period">${item.period}</span>
            <h4>${item.title}</h4>
            <p class="timeline-institution">${item.institution}</p>
            <p>${item.description}</p>
            <p class="project-highlight"><strong>Project akhir:</strong> ${item.project}</p>
          </article>
        `
      )
      .join('');
  };

  const initializeCertifications = () => {
    if (!certificationsList) return;

    if (!portfolioData.certifications || portfolioData.certifications.length === 0) {
      certificationsList.innerHTML = `
        <div class="empty-state reveal">
          <p>Sertifikasi akan diperbarui seiring perkembangan profesional.</p>
        </div>
      `;
      return;
    }

    certificationsList.innerHTML = portfolioData.certifications
      .map(
        (item) => `
          <article class="certification-card reveal">
            ${
              item.image
                ? `
                  <a class="certification-image-link" href="${item.image}" target="_blank" rel="noopener noreferrer" aria-label="Buka gambar sertifikat ${item.title} di tab baru">
                    <img src="${item.image}" alt="Sertifikat ${item.title}" loading="lazy">
                    <span class="certification-image-action">Lihat sertifikat ↗</span>
                  </a>
                `
                : `
                  <div class="certification-image-placeholder" aria-hidden="true">
                    <span>Sertifikat</span>
                  </div>
                `
            }
            <div class="certification-content">
              <span class="certification-date">${item.date}</span>
              <h4>${item.title}</h4>
              <p class="certification-issuer">${item.issuer}</p>
              <p class="certification-description">${item.credential}</p>
            </div>
          </article>
        `
      )
      .join('');
  };

  const setTheme = (theme) => {
    const root = document.body;
    const icon = document.querySelector('.theme-toggle__icon');

    if (theme === 'light') {
      root.classList.add('light-mode');
      if (icon) icon.textContent = '☾';
    } else {
      root.classList.remove('light-mode');
      if (icon) icon.textContent = '☀';
    }

    localStorage.setItem('mah-theme', theme);
  };

  const initializeTheme = () => {
    const savedTheme = localStorage.getItem('mah-theme');
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    const theme = savedTheme || (prefersLight ? 'light' : 'dark');
    setTheme(theme);

    const toggle = document.querySelector('.theme-toggle');
    if (toggle) {
      toggle.addEventListener('click', () => {
        const nextTheme = document.body.classList.contains('light-mode') ? 'dark' : 'light';
        setTheme(nextTheme);
      });
    }
  };

  const initializeNavigation = () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle && navMenu) {
      navToggle.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('is-open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
      });

      navLinks.forEach((link) => {
        link.addEventListener('click', () => {
          navMenu.classList.remove('is-open');
          navToggle.setAttribute('aria-expanded', 'false');
        });
      });

      document.addEventListener('click', (event) => {
        if (!navMenu.contains(event.target) && !navToggle.contains(event.target)) {
          navMenu.classList.remove('is-open');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      });

      document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
          navMenu.classList.remove('is-open');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      });
    }

    const sections = document.querySelectorAll('main section[id]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = `#${entry.target.id}`;
            navLinks.forEach((link) => {
              link.classList.toggle('active', link.getAttribute('href') === id);
            });
          }
        });
      },
      { threshold: 0.45 }
    );

    sections.forEach((section) => observer.observe(section));

    const header = document.querySelector('.site-header');
    const handleScroll = () => {
      if (!header) return;
      header.classList.toggle('scrolled', window.scrollY > 14);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  };

  const initializeReveal = () => {
    const items = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    items.forEach((item) => observer.observe(item));
  };

  const initializeScrollProgress = () => {
    const indicator = document.querySelector('.scroll-progress');
    if (!indicator) return;

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      indicator.style.width = `${progress}%`;
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
  };

  const initializeBackToTop = () => {
    const button = document.querySelector('.back-to-top');
    if (!button) return;

    const updateButton = () => {
      button.classList.toggle('visible', window.scrollY > 420);
    };

    button.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', updateButton, { passive: true });
    updateButton();
  };

  initializeSkills();
  initializeProjects();
  initializeExperience();
  initializeEducation();
  initializeCertifications();
  initializeTheme();
  initializeNavigation();
  initializeReveal();
  initializeScrollProgress();
  initializeBackToTop();
});
