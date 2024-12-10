export function addAnimation() {
  const scrollers = document.querySelectorAll(".scroller");

  scrollers.forEach((scroller) => {
    const scrollerInner = scroller.querySelector(
      ".scroller__inner"
    ) as HTMLElement;
    if (!scrollerInner) return;

    // Prevent re-initialization
    if (scrollerInner.getAttribute("data-initialized") === "true") return;

    // Duplicate content for infinite scroll effect
    const scrollerContent = Array.from(scrollerInner.children) as HTMLElement[];
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true) as HTMLElement;
      duplicatedItem.setAttribute("aria-hidden", "true");
      scrollerInner.appendChild(duplicatedItem);
    });

    // Mark as initialized
    scrollerInner.setAttribute("data-initialized", "true");

    // JavaScript-based animation control
    let isPaused = false;
    let startTime: number | null = null;

    function step(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      if (!isPaused) {
        // Scroll by updating transform
        const distance = (elapsed / 100) % scrollerInner.offsetWidth; // Adjust speed by dividing elapsed
        scrollerInner.style.transform = `translateX(-${distance}px)`;
      }

      requestAnimationFrame(step);
    }

    requestAnimationFrame(step);

    // Event listeners for hover
    scroller.addEventListener("mouseenter", () => (isPaused = true));
    scroller.addEventListener("mouseleave", () => (isPaused = false));
  });
}
