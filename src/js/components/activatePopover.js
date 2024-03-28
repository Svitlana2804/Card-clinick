function activatePopover(idElem) {
   const exampleEl = document.getElementById(idElem);
   return new bootstrap.Popover(exampleEl);
}

export default activatePopover;