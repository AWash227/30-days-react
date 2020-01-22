export const UI = (() => {
  interface createProps {
    type: string;
    className?: string;
    id?: string;
    event?: string;
    eventFunc?: Function;
    innerText?: string;
    innerHTML?: string;
  }
  const create = (props: createProps) => {
    let newElement = document.createElement(props.type);
    if (props.className) newElement.className = props.className;
    if (props.id) newElement.id = props.id;
    if (props.event && props.eventFunc)
      newElement.addEventListener(props.event, () => props.eventFunc);
    if (props.innerText) newElement.innerText = props.innerText;
    if (props.innerHTML) newElement.innerHTML = props.innerHTML;
    return newElement;
  };
  const add = (parent: Element, child: Element) => parent.appendChild(child);
  return { create, add };
})();

let boi = UI.create({
  type: "li",
  className: "hi"
});
console.log(boi);
