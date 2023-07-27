// Function to calculate and update the scroll percentage
function updateScrollPercentage() {
  const scrollPercentageElement = document.getElementById("scrollPercentage");
  // Calculate the percentage scrolled
  const scrollableHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  const scrolledPercentage = Math.round(
    (window.scrollY / scrollableHeight) * 100
  );
  // Update the "view" element with the calculated percentage
  scrollPercentageElement.textContent = scrolledPercentage + "% viewed";
  // Attach event listener to the "scroll" event on the window
  window.addEventListener("scroll", updateScrollPercentage);
}