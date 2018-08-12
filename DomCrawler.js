import { saveAs } from './FileSaver';
import hash from 'object-hash';

function getValuesFrom(node) {
  const computedStyles = getComputedStyle(node);
  const names = Array.from(computedStyles);
  const defaults = {};
  for (let name of names) {
    defaults[name] = computedStyles.getPropertyValue(name);
  }
  return defaults;
}

function getNewStyles(node, defaults) {
  const computedStyles = getComputedStyle(node);
  const names = Array.from(computedStyles);
  const newStyles = {};
  for (let name of names) {
    const nextProp = computedStyles.getPropertyValue(name);
    if (defaults[name] !== nextProp) {
      newStyles[name] = nextProp;
    }
  }
  return newStyles;
}

async function saveData() {
  if (!localStorage.getItem("domElsSaved")) {
    const savedStyles = new Set();
    const styles = [];

    const nodes = document.querySelectorAll("*:first-of-type");
    const defaults = getValuesFrom(nodes[0]);

    nodes.forEach((node) => {
      const style = getNewStyles(node, defaults);
      style.tag = node.tagName;
      const hashed = hash(style);
      if (!savedStyles.has(hashed)) {
        styles.push(style);
        savedStyles.add(hashed);
      }
    });

    const obj = { styles };
    obj.default = defaults;
    obj.host = window.location.host;
    obj.path = window.location.pathname;
    obj.date = JSON.stringify(new Date);
    const blob = new Blob([JSON.stringify(obj, null, 2)], { type: "text/plain;charset=utf-8" });
    saveAs(blob, `domEls${obj.host}${obj.path}.txt`);
    localStorage.setItem("domElsSaved", true);
  };
}

saveData();

