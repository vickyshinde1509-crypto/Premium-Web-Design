const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15
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
