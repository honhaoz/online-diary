//jshint esversion:6
exports.getDate=function(){
  const today=new Date();
  let option={
    year:"numeric",
    day:"numeric",
    month:"long"
  };

  return today.toLocaleDateString("en-UK",option);
  };


exports.getDay=function(){
  const today=new Date();
  let option={
    weekday:"long",
  };
  return today.toLocaleDateString("en-UK",option);
  };




exports.findDateString=function(numericDate){
  const year=numericDate.slice(0,4);
  const month=numericDate.slice(5,6)+String(Number(numericDate.slice(6,7))-1);
  const day=numericDate.slice(8,10);
  const event = new Date(Date.UTC(year, month, day));
  const optionsDate = { year: 'numeric', month: 'long', day: 'numeric' };
  const optionsDay = { weekday: 'long'};
  const date=event.toLocaleDateString("en-UK", optionsDate);
  const weekday=event.toLocaleDateString("en-UK", optionsDay);
  return {date:date,weekday:weekday};
};

exports.numericDate=function(dateString){
  return new Date(dateString).toISOString().slice(0,10);
};