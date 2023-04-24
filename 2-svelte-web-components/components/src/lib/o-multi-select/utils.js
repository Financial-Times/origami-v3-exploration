/**
 * @param {HTMLElement} parentElement
 */
export function calculateSumOfChildrenWidth(parentElement) {
  const selectedOptionsComputedStyles = getComputedStyle(parentElement);
  const { paddingLeft, paddingRight } = selectedOptionsComputedStyles;
  const sumOfChildrenWidthInitialValue =
    parseInt(paddingLeft, 10) + parseInt(paddingRight, 10);
  const sumOfChildrenWidth = [...parentElement.children]
    .map((el) => el.offsetWidth)
    .reduce((prev, curr) => prev + curr, sumOfChildrenWidthInitialValue);
  return sumOfChildrenWidth;
}

export function getOptionsFromDom() {
  const options = document.querySelectorAll("option");
  return [...options].map((option) => option.innerText);
}
