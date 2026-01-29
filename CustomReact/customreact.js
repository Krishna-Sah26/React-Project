function customRender(reactElement, container) {
 if (!container) {
     console.error('Target container not found:', container);
     return;
 }
 const domElement = document.createElement(reactElement.type);
 domElement.innerHTML = reactElement.children || reactElement.Children || '';
 if (reactElement.props) {
     Object.keys(reactElement.props).forEach(function(key){
         domElement.setAttribute(key, reactElement.props[key]);
     });
 }
 container.appendChild(domElement);

}
const reactElement = {      
    type: 'a',
    props: {
        href : "https://www.google.com",
        target: "_blank"
    },
    children :'click me to visit google'
}
const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer);


