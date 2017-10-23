// function savePad(pad){
//   var data = document.getElementById('mypad').value;
//   function urlPad(data){
//    return "type: text/plain," + escape(data);
//   }
//   window.open(urlPad(pad));
//
// }

function clearPad(){
  var pad = $('#mypad').val();
  if (!pad){
    swal("Pad Empty", "Pad doesn't have content", "warning");
  }
  else{
    swal({
          title: "Are you sure?",
          text: "This process cannot be undone.",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Clear Pad",
          closeOnConfirm: false
        },
        function(){
          swal("Pad Cleared", "Pad is now empty", "success");
          $('#mypad').val('');
        });
  }
} // END function clearPad

function savePad(){
  var pad = $('#mypad').val();
  if (!pad){
    swal("Pad Empty", "Try to add some content before saving it.", "warning");
  }
  else{
    $('#download').removeAttribute('disabled');
    var txtData = new Blob([data], {type:'text/plain'});
  }

}
