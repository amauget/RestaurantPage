import './stylesheets/reserve.css';

function reserveContent(bodyContainer){
  let reserveContainer = reserveDOMConstruct(bodyContainer);
  bodyContainer.append(reserveContainer);

}
function reserveDOMConstruct(bodyContainer){
  let reserveContainer = document.createElement('div');
  reserveContainer.className = 'reserveContainer';

  let header = document.createElement('h2');
  header.textContent = 'Make a Reservation';

  let dateHeader = document.createElement('h3');
  dateHeader.className ='dateHeader';
  dateHeader.textContent = 'Date:'

  let date = document.createElement('input');
  date.type = 'date';
  date.id = 'date';
  date.required = 'required';

  let timeHeader = document.createElement('h3');
  timeHeader.className = 'timeHeader';
  timeHeader.textContent = 'Time:';

  let time = document.createElement('input');
  time.type = 'time';
  time.id = 'time';
  time.required = 'required';

  let reserveBtn = document.createElement('button');
  reserveBtn.textContent = 'Reserve';
  reserveBtn.className = 'reserveBtn';

  reserveContainer.append(header,dateHeader, date, timeHeader, time, reserveBtn);
  
  reserveBtn.addEventListener('click', ()=>{
    processRequest(date, time);
  });
  return reserveContainer;
}

function processRequest( date, time){
  if(date.value === '' || time.value === ''){
    alert('Please fill out the date and time that you would like to reserve.')
  }
  else{
    alert('Your reservation has been processed. We look forward to seeing you!');

  }
 
}
export default reserveContent;