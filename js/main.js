// ═══════════════════════════════════════════
// TECH4GOOD — MAIN SCRIPT
// ═══════════════════════════════════════════

const CAT_CONFIG = {
  comunidad:    { label: "Comunidad",    accent: "#e07b6f", bg: "#0e1a2d", light: "#1a2e45" },
  educacion:    { label: "Educación",    accent: "#6bbf95", bg: "#0d1f15", light: "#162e20" },
  medioambiente:{ label: "Medio Ambiente", accent: "#8aad5c", bg: "#151f0a", light: "#1f300f" },
  salud:        { label: "Salud",        accent: "#7ab8c4", bg: "#071a1a", light: "#0e2b2b" },
  inclusion:    { label: "Inclusión",    accent: "#b896d4", bg: "#1a0d2e", light: "#281545" },
  bloopers:     { label: "Bloopers",     accent: "#d4944a", bg: "#1a1109", light: "#2a1c0e" },
};

const TYPE_LABELS = {
  app: "App Móvil",
  web: "Página Web",
  hardware: "Hardware + App",
};

// ─── DOM Refs ───
const modalOverlay = document.getElementById("modal-overlay");
const modalClose   = document.getElementById("modal-close");
const webOverlay   = document.getElementById("web-modal-overlay");
const webClose     = document.getElementById("web-modal-close");
const iframe       = document.getElementById("web-modal-iframe");
const catNav       = document.getElementById("cat-nav");

// ─── Build all project cards ───
function buildCards() {
  Object.keys(CAT_CONFIG).forEach(cat => {
    const grid = document.getElementById(`grid-${cat}`);
    if (!grid || cat === "bloopers") return;

    const catProjects = PROJECTS.filter(p => p.category === cat);
    catProjects.forEach(project => {
      grid.appendChild(createCard(project));
    });
  });
}

function createCard(project) {
  const cfg = CAT_CONFIG[project.category];
  const card = document.createElement("article");
  card.className = "project-card";
  card.dataset.id = project.id;
  card.dataset.category = project.category;
  card.style.setProperty("--cat-accent", cfg.accent);
  card.style.setProperty("--cat-bg", cfg.bg);
  card.style.setProperty("--cat-light", cfg.light);

  const isWeb = project.type === "web";
  const typeLabel = TYPE_LABELS[project.type] || project.type;
  const coverImg = project.images?.[0] ?? "";

  card.innerHTML = `
    <div class="card__hero">
      ${coverImg ? `<img src="${coverImg}" alt="${project.name}" loading="lazy" class="card__img">` : `<div class="card__img-placeholder">${project.emoji}</div>`}
      <div class="card__img-overlay"></div>
      <div class="card__img-tint"></div>
      <div class="card__img-tags">
        <div class="card__type-tag ${isWeb ? "card__type-tag--web" : ""}">${typeLabel}</div>
        ${isWeb ? `<div class="card__web-pill">🌐 Web</div>` : ""}
      </div>
    </div>
    <div class="card__body">
      <div class="card__body-top">
        <span class="card__emoji">${project.emoji}</span>
        <div class="card__team-count">${project.team.length} integrante${project.team.length !== 1 ? "s" : ""}</div>
      </div>
      <h3 class="card__name">${project.name}</h3>
      <p class="card__desc">${truncate(project.description, 100)}</p>
      <div class="card__footer">
        <button class="card__cta" data-id="${project.id}">Ver más →</button>
      </div>
    </div>
  `;

  card.querySelector(".card__cta").addEventListener("click", (e) => {
    e.stopPropagation();
    openModal(project.id);
  });
  card.addEventListener("click", () => openModal(project.id));

  return card;
}

function truncate(str, n) {
  return str.length > n ? str.slice(0, n).trimEnd() + "…" : str;
}

// ─── Modal ───
function openModal(id) {
  const project = PROJECTS.find(p => p.id === id);
  if (!project) return;

  const cfg = CAT_CONFIG[project.category];

  document.getElementById("modal-cat-badge").textContent = cfg.label;
  document.getElementById("modal-cat-badge").style.background = cfg.accent + "22";
  document.getElementById("modal-cat-badge").style.color = cfg.accent;
  document.getElementById("modal-cat-badge").style.borderColor = cfg.accent + "44";

  document.getElementById("modal-title").textContent = project.name;

  const typeTag = document.getElementById("modal-type-tag");
  typeTag.textContent = TYPE_LABELS[project.type] || project.type;
  typeTag.className = "modal__type-tag" + (project.type === "web" ? " modal__type-tag--web" : "");

  document.getElementById("modal-description").textContent = project.description;

  const teamList = document.getElementById("modal-team-list");
  teamList.innerHTML = project.team.map(m => `<li>${m}</li>`).join("");

  // Gallery
  const placeholder = document.getElementById("gallery-placeholder");
  const slides = document.getElementById("gallery-slides");

  if (project.images && project.images.length > 0) {
    placeholder.style.display = "none";
    slides.style.display = "flex";
    slides.innerHTML = project.images.map(img =>
      `<img src="${img}" alt="${project.name}" loading="lazy" />`
    ).join("");
  } else {
    placeholder.style.display = "flex";
    slides.style.display = "none";
  }

  // Actions
  const actions = document.getElementById("modal-actions");
  actions.innerHTML = "";

  if (project.type === "web" && project.webUrl) {
    const previewBtn = document.createElement("button");
    previewBtn.className = "btn btn--primary";
    previewBtn.textContent = "🌐 Ver sitio web";
    previewBtn.addEventListener("click", () => openWebModal(project.webUrl, project.name));
    actions.appendChild(previewBtn);

    const extBtn = document.createElement("a");
    extBtn.className = "btn btn--ghost";
    extBtn.href = project.webUrl;
    extBtn.target = "_blank";
    extBtn.rel = "noopener";
    extBtn.textContent = "Abrir en nueva pestaña ↗";
    actions.appendChild(extBtn);
  }

  // Accent color for modal
  document.querySelector(".modal").style.setProperty("--modal-accent", cfg.accent);

  modalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modalOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

modalClose.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) closeModal();
});

// ─── Web Preview Modal ───
function openWebModal(url, name) {
  document.getElementById("web-modal-url").textContent = url;
  document.getElementById("web-modal-ext-link").href = url;
  iframe.src = url;

  // Handle iframe error
  iframe.onerror = () => showFallback(url);
  iframe.onload = () => {
    try {
      // Try to access contentWindow — will throw if blocked
      const _ = iframe.contentWindow.location.href;
      document.getElementById("web-modal-fallback").style.display = "none";
      iframe.style.display = "block";
    } catch {
      showFallback(url);
    }
  };

  webOverlay.classList.add("active");
}

function showFallback(url) {
  iframe.style.display = "none";
  document.getElementById("web-modal-fallback").style.display = "flex";
  document.getElementById("web-modal-ext-link").href = url;
}

function closeWebModal() {
  webOverlay.classList.remove("active");
  iframe.src = "";
  iframe.style.display = "block";
  document.getElementById("web-modal-fallback").style.display = "none";
}

webClose.addEventListener("click", closeWebModal);
webOverlay.addEventListener("click", (e) => {
  if (e.target === webOverlay) closeWebModal();
});

// ─── Category Filter ───
document.querySelectorAll(".cat-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    document.querySelectorAll(".cat-section").forEach(sec => {
      if (filter === "all" || sec.dataset.category === filter) {
        sec.style.display = "";
        sec.style.animation = "fadeInUp 0.4s ease forwards";
      } else {
        sec.style.display = "none";
      }
    });

    if (filter !== "all") {
      const target = document.getElementById(filter);
      if (target) {
        setTimeout(() => target.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
      }
    }
  });
});

// ─── Sticky nav color sync ───
const sections = document.querySelectorAll(".cat-section");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const cat = entry.target.dataset.category;
      const cfg = CAT_CONFIG[cat];
      if (cfg) {
        catNav.style.setProperty("--nav-accent", cfg.accent);
      }
    }
  });
}, { rootMargin: "-30% 0px -60% 0px" });

sections.forEach(sec => observer.observe(sec));

// ─── Keyboard close ───
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeWebModal();
    closeModal();
  }
});

// ─── Card entrance animations ───
const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.animationDelay = `${(i % 6) * 60}ms`;
      entry.target.classList.add("visible");
      cardObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

// ─── Init ───
buildCards();
document.querySelectorAll(".project-card").forEach(card => {
  cardObserver.observe(card);
});
