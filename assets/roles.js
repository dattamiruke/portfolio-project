(async () => {
  const KNOWN_FALLBACK = {
    default: {
      headline: null,
      resume: null,
      repos: ["aegis", "devops-agent", "rag-platform", "mnemos"],
      banner: null
    }
  };

  const params = new URLSearchParams(location.search);
  const requestedRole = (params.get("role") || "default").trim() || "default";

  let roles;
  try {
    const res = await fetch("assets/roles.json", { cache: "no-cache" });
    if (!res.ok) throw new Error("HTTP " + res.status);
    roles = await res.json();
  } catch (err) {
    console.warn("roles.json load failed, using fallback:", err);
    roles = KNOWN_FALLBACK;
  }

  const cfg = roles[requestedRole] || roles.default || KNOWN_FALLBACK.default;
  const isDefault = !roles[requestedRole] || requestedRole === "default";

  const resumeLink = document.getElementById("resume-link");
  if (resumeLink && cfg.resume) {
    resumeLink.href = cfg.resume;
    const name = cfg.resume.split("/").pop();
    if (name) resumeLink.setAttribute("download", name);
  }

  const headlineEl = document.getElementById("hero-headline");
  if (headlineEl && cfg.headline) headlineEl.textContent = cfg.headline;

  if (cfg.headline) {
    const pageTitle = "Dattaram Miruke — " + cfg.headline.split("|")[0].trim();
    document.title = pageTitle;
    document.querySelectorAll('meta[property="og:title"], meta[name="twitter:title"]').forEach(m => m.setAttribute("content", pageTitle));
  }

  const visible = new Set(cfg.repos || []);
  document.querySelectorAll("[data-repo-id]").forEach(el => {
    el.hidden = visible.size > 0 && !visible.has(el.dataset.repoId);
  });

  if (!isDefault && cfg.banner) {
    const banner = document.createElement("div");
    banner.className = "role-banner";
    banner.textContent = cfg.banner + " — ";
    const reset = document.createElement("a");
    reset.href = "?";
    reset.textContent = "show all";
    banner.appendChild(reset);
    document.body.prepend(banner);
  }

  const switcher = document.getElementById("roleSwitcher");
  const select = document.getElementById("roleSelect");
  if (switcher && select) {
    if (isDefault) {
      switcher.hidden = false;
      select.addEventListener("change", () => {
        const v = select.value;
        if (v) location.search = "?role=" + encodeURIComponent(v);
      });
    } else {
      switcher.hidden = true;
    }
  }
})();
