import homeContent from './homeItems.js';
import menuContent from './menuItems.js';
import reserveContent from './reserveItems.js';
import './stylesheets/style.css';

function pageElements(){
  let body = document.querySelector('body');

  let bodyContainer = document.createElement('div');
  bodyContainer.className = 'bodyContainer';


  //SideBar
  let sideBar = document.querySelector('.sideBar');

  let icon = document.createElement('img');
  icon.src = 'externalContent/phoenixLogo.jpg';
  icon.className = 'icon';

  let name = document.createElement('h2');
  name.textContent = 'Phoenix Steakhouse and Grill';
  name.className = 'name';

  let exitBtn = document.createElement('button');
  exitBtn.className ='exitBtn';
  exitBtn.textContent =  '←';

  let content = document.querySelector('#content');

  sideBar.append(icon,name, exitBtn, content);

  exitBtn.addEventListener('click',() =>{
    sidebarContainer.className = "sideBarContainer";
  })

  function createElements(item){
    let element = document.createElement('button');
    element.textContent = item;

    content.appendChild(element);

    let pageSelect = 'Home'; /* defaults page selection to Home */
    initiate(pageSelect);

    element.addEventListener('click',()=>{
      pageSelect = item;
      initiate(pageSelect);
      
    })
  }
  let home = createElements('Home'), menu = createElements('Menu'), Reserve = createElements('Reserve');
  
  function initiate(pageSelect){
    bodyContainer.innerHTML = ''; /* reset container when items are clicked */
    if(pageSelect === 'Home'){
      homeContent(bodyContainer);
    }
    else if(pageSelect === 'Menu'){
      menuContent(bodyContainer);
    }
    else{
      reserveContent(bodyContainer);
    }
    body.appendChild(bodyContainer);
    
  }
  //List Icon
  let listIcon = document.createElement('img');
  listIcon.src = 'externalContent/listIconWhite.svg';
  listIcon.className = 'listIcon';

  let sidebarContainer = document.querySelector('.sideBarContainer');

  listIcon.onclick = function(){
    sidebarContainer.classList.toggle("visible");
  }

  body.appendChild(listIcon);

  
}
console.trace();
// npx webpack --watch to start live webpack server
pageElements();