function customRender(reactElement,container){
    const domElement=document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.children;
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    container.appendChild(domElement);
}
const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'click me to visit google'

}//this is how in similar fashion reactElement works under the hood
const mainContainer=document.getElementById('root')
customRender(reactElement,mainContainer)//here i am creating my own render