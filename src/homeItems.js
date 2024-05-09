import './stylesheets/home.css';

function homeContent(bodyContainerContainer){
    nameAndSlogan(bodyContainerContainer);
    listedContent(bodyContainerContainer);
    return bodyContainerContainer;
}

function nameAndSlogan(bodyContainer){
  let h1 = document.createElement('h1');
  h1.textContent = 'The Phoenix Steakhouse & Grill';
  h1.className = 'homeH1'

  let slogan = document.createElement('p');
  slogan.className = 'slogan';
  slogan.textContent = 'Reserve today and see why we have been a top local institution for over 50 years!'


  let phoneNum = document.createElement('p');
  phoneNum.className = 'phoneNumber';
  phoneNum.textContent = 'Phone Number: (123)456-7890';

  return bodyContainer.append(h1,slogan,phoneNum);
}

function listedContent(bodyContainer){
  let ul = document.createElement('ul');
  ul.className = 'homeUl';


  class createListPoints{
    constructor (item){
      this.item = item;
      this.list = document.createElement('li');
      this.list.textContent = this.item;
    };
    appendItem(){
      ul.appendChild(this.list)
    }
  };

  let li1 = new createListPoints('Catering'), li2 = new createListPoints('Events'), li3 = new createListPoints('Weddings');
  li1.appendItem(), li2.appendItem(), li3.appendItem();
  return bodyContainer.append(ul)
}

export default homeContent;