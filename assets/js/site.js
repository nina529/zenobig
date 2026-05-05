document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;
  if (page) {
    const active = document.querySelector(`[data-nav="${page}"]`);
    if (active) active.classList.add("is-active");
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));
});
