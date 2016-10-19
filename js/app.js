// function savePad(pad){
//   var data = document.getElementById('mypad').value;
//   function urlPad(data){
//    return "type: text/plain," + escape(data);
//   }
//   window.open(urlPad(pad));
//
// }

function clearPad(){
  document.getElementById('mypad').value="";
}

function savePad(pad){
  var data = document.getElementById('mypad').value;
  if (data == ""){
    window.alert('Pad is blank. Try to add some content');
  }
  else{
      var txtData = new Blob([data], {type:'text/plain'});
  }  

}
