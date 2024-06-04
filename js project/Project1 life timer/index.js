let DOBOpen = false;
let dateofbirth;
const settingcogEl = document.getElementById('settingsIcon');
const settingcontentEl = document.getElementById('settingscontent');
const intialTextEl = document.getElementById("intialText");
const afterDobEl = document.getElementById("afterDob");
const dobbuttonEl = document.getElementById('dobbutton');
const dobinputEl = document.getElementById('dobinput');

const yearEl = document.getElementById("year");
const monthEl = document.getElementById("month");
const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");

console.log(localStorage.getItem("year"));

const makeTwoDigitNumber = (number) => {
    return number > 9 ? number : `0${number}`;
}

const toggleDataOfBirthSelector = () => {
    if (DOBOpen) {
        settingcontentEl.classList.add('hide');
    } else {
        settingcontentEl.classList.remove('hide');
    }
    DOBOpen = !DOBOpen;

    console.log("Toggle", DOBOpen);
};

const updateAge = () => {
    const currentDate = new Date(); 
    const dateDiff = currentDate - dateofbirth;
    const year = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365));
  const month = Math.floor((dateDiff / (1000 * 60 * 60 * 24 * 365)) % 12);
  const day = Math.floor(dateDiff / (1000 * 60 * 60 * 24)) % 30;
  const hour = Math.floor(dateDiff / (1000 * 60 * 60)) % 24;
  const minute = Math.floor(dateDiff / (1000 * 60)) % 60;
  const second = Math.floor(dateDiff / 1000) % 60;

  yearEl.innerHTML = makeTwoDigitNumber(year);
  monthEl.innerHTML = makeTwoDigitNumber(month);
  dayEl.innerHTML = makeTwoDigitNumber(day);
  hourEl.innerHTML = makeTwoDigitNumber(hour);
  minuteEl.innerHTML = makeTwoDigitNumber(minute);
  secondEl.innerHTML = makeTwoDigitNumber(second);

};

const localStorageGetter = () =>{
    const year = localStorage.getItem("year");
    const month = localStorage.getItem("month");
    const date = localStorage.getItem("date");
   if(year && month && date ) {
    dateofbirth = new Date(year,month,date);
   }
   updateAge();
};

const contentToggler = () => {
    updateAge();
    if (dateofbirth){
        intialTextEl.classList.add("hide");
        afterDobEl.classList.remove("hide");    
    } else {
        afterDobEl.classList.add("hide");
        intialTextEl.classList.remove("hide");
    }
}

const setDOBHandler = () => {
     const dateString = dobinputEl.value;

    dateofbirth = dateString ? new Date(dateString) : null;
  
        console.log({dateofbirth});

    if (dateofbirth){

        localStorage.setItem("year", dateofbirth.getFullYear());
        localStorage.setItem("month", dateofbirth.getMonth());
        localStorage.setItem("date", dateofbirth.getDate());
    }
    contentToggler();
    setInterval(() => updateAge(), 1000);
    
};

localStorageGetter();
contentToggler();

settingcogEl.addEventListener("click", toggleDataOfBirthSelector);
dobbuttonEl.addEventListener("click", setDOBHandler);