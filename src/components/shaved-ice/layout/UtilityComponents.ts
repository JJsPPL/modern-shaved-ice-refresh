
/**
 * Returns the HTML for utility components (scroll button, modal)
 */
export function getUtilityComponentsHTML(): string {
  return `
  <!-- Scroll To Top Button -->
  <button id="scroll-top" class="scroll-top">↑</button>

  <!-- Lightbox Modal -->
  <div id="image-modal" class="modal">
    <span class="modal-close">&times;</span>
    <img id="modal-img" class="modal-content" alt="Enlarged image">
    <span class="modal-nav modal-prev">&#10094;</span>
    <span class="modal-nav modal-next">&#10095;</span>
  </div>`;
}
