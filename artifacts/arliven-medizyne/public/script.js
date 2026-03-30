const STAGGER_MS = 130; // ms between each card reveal

const revealObserver = new IntersectionObserver((entries) => {
  // Collect newly intersecting elements, grouped by parent
  const groups = new Map();
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const parent = entry.target.parentElement || document.body;
    if (!groups.has(parent)) groups.set(parent, []);
    groups.get(parent).push(entry.target);
  });

  groups.forEach((els, parent) => {
    // Sort by DOM order within parent
    const allReveal = Array.from(parent.children).filter(c =>
      c.classList.contains("reveal")
    );
    const sorted = els.slice().sort(
      (a, b) => allReveal.indexOf(a) - allReveal.indexOf(b)
    );

    sorted.forEach((el, i) => {
      revealObserver.unobserve(el);
      setTimeout(() => {
        el.classList.add("show");
      }, i * STAGGER_MS);
    });
  });
}, {
  threshold: 0.08
});

function initReveal() {
  document.querySelectorAll(".reveal:not([data-rv])").forEach((el) => {
    el.setAttribute("data-rv", "1");
    revealObserver.observe(el);
  });
}

const mutationObserver = new MutationObserver(initReveal);
mutationObserver.observe(document.body, { childList: true, subtree: true });

initReveal();
