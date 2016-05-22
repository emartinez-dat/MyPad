function savePad(pad){
  document.getElementById('mypad').value;
  function urlPad(data){
   return "data: x-application/text," + escape(data);
  }
  window.open(urlPad(pad));

}

function clearPad(){
  document.getElementById('mypad').value="";
}
