/* ========= CONFIG: edite só isso ========= */
const CONFIG = {
  brand: "Seu Nome",
  initials: "EA",
  email: "seuemail@dominio.com",
  portfolioUrl: "https://seusite.com",
  whatsapp: {
    phone: "5599999999999", // DDI+DDD+numero (sem +, sem espaços)
    message: "Olá! Vim pelo seu link da bio 🙂"
  },
  pt: {
    tag: "link na bio",
    headline: "Front-End Developer • UI/UX • Interfaces premium",
    cta: "Ver Portfólio",
    copyEmail: "Copiar e-mail",
    whatsapp: "WhatsApp",
    linksTitle: "Links",
    projectsTitle: "Projetos",
    footer: "Feito em HTML/CSS/JS • Visual premium • Mobile-first",
    copied: "E-mail copiado!",
    links: [
      { title: "Instagram", desc: "Bastidores, lançamentos e conteúdo", icon: "ig", url: "https://instagram.com/", tag:"perfil"},
      { title: "LinkedIn", desc: "Carreira, cases e networking", icon: "in", url: "https://linkedin.com/in/", tag:"rede"},
      { title: "GitHub", desc: "Repositórios, estudos e projetos", icon: "gh", url: "https://github.com/", tag:"code"},
    ],
    projects: [
      { title: "Dashboard Admin (UI premium)", desc: "Sistema interno com métricas, permissões e design dark.", icon:"spark", url:"#", tag:"destaque" },
      { title: "Landing Page Performance", desc: "LP rápida, responsiva e pronta pra conversão.", icon:"bolt", url:"#", tag:"rápido" },
      { title: "Sistema SaaS (Vite + Vue)", desc: "Arquitetura limpa, componentes e autenticação.", icon:"cube", url:"#", tag:"app" },
    ]
  },
  en: {
    tag: "link in bio",
    headline: "Front-End Developer • UI/UX • Premium interfaces",
    cta: "View Portfolio",
    copyEmail: "Copy email",
    whatsapp: "WhatsApp",
    linksTitle: "Links",
    projectsTitle: "Projects",
    footer: "Built with HTML/CSS/JS • Premium look • Mobile-first",
    copied: "Email copied!",
    links: [
      { title: "Instagram", desc: "Behind the scenes & content", icon: "ig", url: "https://instagram.com/", tag:"profile" },
      { title: "LinkedIn", desc: "Career, cases & networking", icon: "in", url: "https://linkedin.com/in/", tag:"network" },
      { title: "GitHub", desc: "Repos and projects", icon: "gh", url: "https://github.com/", tag:"code" },
    ],
    projects: [
      { title: "Admin Dashboard (Premium UI)", desc: "Internal system with metrics, permissions and dark design.", icon:"spark", url:"#", tag:"featured" },
      { title: "High-Performance Landing Page", desc: "Fast, responsive and conversion-ready.", icon:"bolt", url:"#", tag:"fast" },
      { title: "SaaS System (Vite + Vue)", desc: "Clean architecture, components and auth.", icon:"cube", url:"#", tag:"app" },
    ]
  }
};

/* ========= Ícones inline ========= */
const ICONS = {
  ig: `<svg viewBox="0 0 24 24" fill="none"><path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Z" stroke="currentColor" stroke-width="2"/><path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="currentColor" stroke-width="2"/><path d="M17.5 6.5h.01" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>`,
  in: `<svg viewBox="0 0 24 24" fill="none"><path d="M6 9v12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M6 6.5v.2" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="M10 21V9" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M10 13c.6-2 2.2-4 5-4 3 0 5 2 5 6v6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
  gh: `<svg viewBox="0 0 24 24" fill="none"><path d="M9 19c-4 1.2-4-2-5-2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M14 22v-3.2c0-.9.3-1.6.8-2-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6.2 0c2.4-1.5 3.4-1.2 3.4-1.2.6 1.6.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.7-2.8 5.7-5.5 6 .5.4.8 1.2.8 2V22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  spark:`<svg viewBox="0 0 24 24" fill="none"><path d="M12 2l1.2 5.3L18 9l-4.8 1.7L12 16l-1.2-5.3L6 9l4.8-1.7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M5 14l.7 3L9 18l-3.3 1-.7 3-.7-3L1.9 18 5 17l.7-3Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>`,
  bolt:`<svg viewBox="0 0 24 24" fill="none"><path d="M13 2L3 14h8l-1 8 11-14h-8l0-6Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>`,
  cube:`<svg viewBox="0 0 24 24" fill="none"><path d="M12 2l8 4.5v11L12 22 4 17.5v-11L12 2Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M12 22V12" stroke="currentColor" stroke-width="2"/><path d="M20 6.5l-8 5-8-5" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>`
};

/* ========= Helpers ========= */
const $ = (q) => document.querySelector(q);

const state = { lang: "pt" };

function escapeHtml(s = "") {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function cardTemplate(item) {
  const icon = ICONS[item.icon] || ICONS.spark;
  const tag = item.tag ? `<span class="tag">${escapeHtml(item.tag)}</span>` : "";
  return `
    <a class="card" href="${item.url}" target="_blank" rel="noopener">
      <div class="row">
        <div class="left">
          <div class="ico">${icon}</div>
          <div class="meta">
            <b>${escapeHtml(item.title)}</b>
            <span>${escapeHtml(item.desc)}</span>
          </div>
        </div>
        ${tag}
        <svg class="arrow" width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </a>
  `;
}

function render() {
  const L = CONFIG[state.lang];

  $("#brandName").textContent = CONFIG.brand;
  $("#brandTag").textContent = L.tag;

  $("#avatar").textContent = CONFIG.initials;
  $("#name").textContent = CONFIG.brand;
  $("#headline").textContent = L.headline;

  $("#primaryCta").href = CONFIG.portfolioUrl;
  $("#primaryLabel").textContent = L.cta;

  $("#copyLabel").textContent = L.copyEmail;

  const wa = `https://wa.me/${CONFIG.whatsapp.phone}?text=${encodeURIComponent(CONFIG.whatsapp.message)}`;
  $("#whatsBtn").href = wa;
  $("#whatsLabel").textContent = L.whatsapp;

  $("#linksTitle").textContent = L.linksTitle;
  $("#projectsTitle").textContent = L.projectsTitle;

  $("#links").innerHTML = L.links.map(cardTemplate).join("");
  $("#projects").innerHTML = L.projects.map(cardTemplate).join("");

  $("#footer").textContent = L.footer;

  // Toggle UI
  $("#ptBtn").classList.toggle("active", state.lang === "pt");
  $("#enBtn").classList.toggle("active", state.lang === "en");
  $("#ptBtn").setAttribute("aria-pressed", state.lang === "pt");
  $("#enBtn").setAttribute("aria-pressed", state.lang === "en");
}

function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => t.classList.remove("show"), 1500);
}

/* ========= Eventos ========= */
$("#ptBtn").addEventListener("click", () => { state.lang = "pt"; render(); });
$("#enBtn").addEventListener("click", () => { state.lang = "en"; render(); });

$("#copyEmail").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(CONFIG.email);
    toast(CONFIG[state.lang].copied);
  } catch {
    // fallback
    const ta = document.createElement("textarea");
    ta.value = CONFIG.email;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
    toast(CONFIG[state.lang].copied);
  }
});

render();
