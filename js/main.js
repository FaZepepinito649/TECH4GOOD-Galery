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

// ─── Build all project posters ───
function buildPosters() {
  Object.keys(CAT_CONFIG).forEach(cat => {
    const grid = document.getElementById(`grid-${cat}`);
    if (!grid || cat === "bloopers") return;

    const catProjects = PROJECTS.filter(p => p.category === cat);
    catProjects.forEach(project => {
      grid.appendChild(createPoster(project));
    });
  });
}

function createPoster(project) {
  const cfg = CAT_CONFIG[project.category];
  const poster = document.createElement("article");
  poster.className = "project-poster";
  poster.dataset.id = project.id;
  poster.dataset.category = project.category;
  poster.style.setProperty("--cat-accent", cfg.accent);
  poster.style.setProperty("--cat-bg", cfg.bg);
  poster.style.setProperty("--cat-light", cfg.light);

  const typeLabel = TYPE_LABELS[project.type] || project.type;
  const photos = (project.images || []).slice(0, 3);

  const photosHTML = photos.map(src =>
    `<div class="poster__photo"><img src="${src}" alt="${project.name}" loading="lazy"></div>`
  ).join("");

  const linkHTML = (project.type === "web" && project.webUrl)
    ? `<a href="${project.webUrl}" target="_blank" rel="noopener" class="poster__link">Ver sitio web →</a>`
    : "";

  poster.innerHTML = `
    <div class="poster__header">
      <h3 class="poster__title">${project.name}</h3>
      <div class="poster__type-tag">${typeLabel}</div>
    </div>
    <div class="poster__photos">${photosHTML}</div>
    <div class="poster__info">
      <p class="poster__desc">${project.description}</p>
      <div class="poster__meta">
        <div>
          <div class="poster__team-label">Equipo</div>
          <div class="poster__team-names">${project.team.join(" · ")}</div>
        </div>
        ${linkHTML}
      </div>
    </div>
  `;

  return poster;
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
    previewBtn.textContent = "Ver sitio web";
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
function renderView(filter) {
  const gallery = document.getElementById("gallery");
  const prev = document.getElementById("filter-view");
  if (prev) prev.remove();

  if (filter === "all") {
    document.querySelectorAll(".cat-section").forEach(sec => {
      sec.style.display = "";
    });
    catNav.style.setProperty("--nav-accent", "#E8195A");
    return;
  }

  document.querySelectorAll(".cat-section").forEach(sec => {
    sec.style.display = "none";
  });

  if (filter === "bloopers") {
    const sec = document.getElementById("bloopers");
    if (sec) sec.style.display = "";
    catNav.style.setProperty("--nav-accent", CAT_CONFIG.bloopers.accent);
    return;
  }

  const cfg = CAT_CONFIG[filter];
  if (cfg) catNav.style.setProperty("--nav-accent", cfg.accent);

  const view = document.createElement("div");
  view.id = "filter-view";

  PROJECTS.filter(p => p.category === filter).forEach(project => {
    const poster = createPoster(project);
    view.appendChild(poster);
    posterObserver.observe(poster);
  });

  gallery.prepend(view);
}

document.querySelectorAll(".cat-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderView(btn.dataset.filter);
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

// ─── Poster entrance animations ───
const posterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      posterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.05 });

// ─── Init ───
buildPosters();
document.querySelectorAll(".project-poster").forEach(poster => {
  posterObserver.observe(poster);
});
