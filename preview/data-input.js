// These behaviours belong to the catalog, not to the reusable HTML in core.
export function mountDataInputPreview(container, { indeterminate = false } = {}) {
  if (indeterminate) {
    for (const input of container.querySelectorAll('input[type="checkbox"]')) {
      input.indeterminate = true;
    }
  }
}
