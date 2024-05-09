import './stylesheets/menu.css';

function menuContent(bodyContainer){
  let wineContainer = wineList();
  let spiritsContainer = alcohol();
  let appContainer = appetizers();
  let entreeContainer = entrees();
  bodyContainer.append(wineContainer, spiritsContainer, appContainer, entreeContainer);

}
class menuItem{
  constructor(item, price, ul){
    this.item = item;
    this.price = price;

    this.ul = ul;

    this.listContainer = document.createElement('li');
    this.listContainer.className = 'listContainer';

    this.itemList = document.createElement('p')
    this.itemList.textContent = this.item;
    
    this.priceList = document.createElement('p');
    this.priceList.textContent = this.price;
  }
  appendList(){
    this.listContainer.append(this.itemList, this.priceList);
    this.ul.appendChild(this.listContainer);
  }
}
function wineList(){
  let wineContainer = document.createElement('div');
  wineContainer.className = 'wineContainer';
  
  // RED
  let red = document.createElement('h3');
  red.textContent = 'Red';
  red.className = 'red'

  let redUl = document.createElement('ul');
  redUl.className = 'redUl'

  let houseRed = new menuItem('House Red', '7', redUl);
  let cab = new menuItem('Cabernet Sauvignon', '9',redUl);
  let merlot = new menuItem('Merlot', '9',redUl);

  houseRed.appendList(); cab.appendList(); merlot.appendList();

  red.appendChild(redUl);
  
  //WHITE
  let white = document.createElement('h3');
  white.textContent = 'White';
  white.className = 'white';

  let whiteUl = document.createElement('ul');
  whiteUl.className = 'whiteUl';

  let houseWhite = new menuItem('House White', '7', whiteUl);
  let cabernetBlanc = new menuItem('Cabernet Blanc', '9', whiteUl);
  let chardonnay = new menuItem('Chardonnay', '9', whiteUl);
  
  houseWhite.appendList(); cabernetBlanc.appendList(); chardonnay.appendList();
  
  white.appendChild(whiteUl);

  //COMBINE AND POPULATE WINE SECTION
  let wineHeader = document.createElement('h2')
  wineHeader.textContent = 'Wine';
  wineHeader.className = 'header'

  let wineImg = document.createElement('img');
  wineImg.src = './externalContent/wineCellar.jpg';
  wineImg.className = 'wineCellar';

  wineContainer.append(wineHeader,red,white, wineImg);
  return wineContainer;
}
function alcohol(){  /* classNames share with wine for format */
  let alcoholContainer = document.createElement('div');
  alcoholContainer.className = 'wineContainer';

  //BEER
  let beer = document.createElement('h3');
  beer.textContent = 'Beer';
  beer.className = 'red';

  let beerUl = document.createElement('ul');
  beerUl.className = 'redUl';

  let samAdams = new menuItem('Sam Adams Boston Lager', '8', beerUl);
  let fatTire = new menuItem('Fat Tire Classic Ale', '8', beerUl);
  let guiness = new menuItem('Guiness', '8', beerUl);
  let stella = new menuItem('Stella Artois', '8', beerUl);

  samAdams.appendList(); fatTire.appendList(); guiness.appendList(); stella.appendList()

  beer.appendChild(beerUl);
  console.log(beer)

  //COCKTAILS AND SPIRITS
  let spirits = document.createElement('h3');
  spirits.textContent = 'Cocktails & Pours';
  spirits.className = 'white';

  let spiritsUl = document.createElement('ul');
  spiritsUl.className = 'whiteUl';

  let oldFashioned = new menuItem('Old Fashioned', '13', spiritsUl);
  let martini = new menuItem('Martini', '15', spiritsUl);
  let mojito = new menuItem('Mojito', '13', spiritsUl);
  let blueLagoon = new menuItem('Blue Lagoon', '15', spiritsUl);
  let monkeyShoulder = new menuItem('Monkey Shoulder', '12', spiritsUl);
  let hibiki = new menuItem('Hibiki Malt Whisky', '18', spiritsUl);
  let macallan = new menuItem('Macallan 30 year', '150', spiritsUl);

  oldFashioned.appendList(); martini.appendList(); mojito.appendList(); blueLagoon.appendList();
  monkeyShoulder.appendList(); hibiki.appendList(); macallan.appendList();

  spirits.appendChild(spiritsUl);
  
  //COMBINE & POPULATE ALCOHOL SECION
  let spiritTitle = document.createElement('h2');
  spiritTitle.className = 'header';
  spiritTitle.textContent = 'Spirits'
  let spiritImg = document.createElement('img');
  spiritImg.src = './externalContent/scotch.jpg';
  spiritImg.className = 'spiritImg';

  alcoholContainer.append(spiritTitle, beer, spirits, spiritImg);
  return alcoholContainer;
}

function appetizers(){ /* create a universal class system for all non wine sections */
  //MENU ITEMS
  let appUl = document.createElement('ul');
  appUl.className = 'appUl'; 

  let soup = new menuItem('Soup of the Day', '7', appUl);
  let cesarSalad = new menuItem('Cesar Salad', '10', appUl);
  let charcuterie = new menuItem('Charcuterie Board', '18', appUl);
  let crabCake = new menuItem('Crab Cakes', '15', appUl);
  let coconutShrim = new menuItem('Coconut Shrimp', '17', appUl)
  let filetMignonBites = new menuItem('Filet Mignon Cutlets', '30', appUl)
  
  //ASSEMBLE APP SECTION
  let appContainer = document.createElement('div');
  appContainer.className = 'singleListContainer';

  let appHeader = document.createElement('h2');
  appHeader.textContent = 'Appetizers';
  appHeader.className = 'header';

  let crabCakeImg = document.createElement('img');
  crabCakeImg.src = './externalContent/crabCake.jpg';
  crabCakeImg.className = 'crabCakeImg';

  soup.appendList(); cesarSalad.appendList(); charcuterie.appendList(); 
  crabCake.appendList(); coconutShrim.appendList(); filetMignonBites.appendList();

  appContainer.append(appHeader, appUl, crabCakeImg);
  return appContainer
}
function entrees(){
  let entreeContainer = document.createElement('div');
  entreeContainer.className = 'wineContainer';
  //STEAK ENTREES
  let steakHeader = document.createElement('h3');
  steakHeader.className = 'red';
  steakHeader.textContent = 'Steak';

  let steakUl = document.createElement('ul');
  steakUl.className = 'redUl';

  let ribEye = new menuItem('Ribeye', '70', steakUl);
  let sirloin = new menuItem('Sirloin', '55', steakUl);
  let filet = new menuItem('Filet Mignon', '90', steakUl);
  let tomohawk = new menuItem('Tomohawk Steak', '120', steakUl);

  ribEye.appendList(); sirloin.appendList(); filet.appendList(); tomohawk.appendList();
  
  steakHeader.appendChild(steakUl)

  //Grilled Entrees
  let grilledHeader = document.createElement('h3');
  grilledHeader.className = 'white';
  grilledHeader.textContent = 'Grilled';

  let grilledUl = document.createElement('ul');
  grilledUl.className = 'whiteUl';

  let mahi = new menuItem('Mahi Mahi', '65', grilledUl);
  let lobsterTail = new menuItem('Lobster Tail', '75', grilledUl);
  let porkChop = new menuItem('Bone-in Pork Chop', '35', grilledUl);
  let chicken = new menuItem('Grilled Chicken Breast', '35', grilledUl);
  let failureAsAnAmerican = new menuItem('Seared Tofu', '30', grilledUl);

  mahi.appendList(); lobsterTail.appendList(); porkChop.appendList(); chicken.appendList();
  failureAsAnAmerican.appendList();

  grilledHeader.appendChild(grilledUl);
  //ASSEMBLE ENTREE SECTION
  let entrees = document.createElement('h2');
  entrees.textContent = 'Entrées'
  entrees.className = 'header'
  let steakImg = document.createElement('img');
  steakImg.src = './externalContent/steak.jpeg';
  steakImg.className = 'steakImg';

  entreeContainer.append(entrees,steakHeader, grilledHeader, steakImg);
  return entreeContainer;

}

export default menuContent;