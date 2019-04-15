//jshint esversion:6
module.exports= getDate;

function getDate(){
let date = new Date();
let options={
  weekday: 'long',
  //month: 'long',
  //year: 'numeric',
  day:'numeric'
};

let kindOfDay= date.toLocaleDateString('en-US', options);

return kindOfDay
};
