/*
App Name: MyPad
Version: 1.0
Author: Edwin Martinez
Website: http://www.devmartinez.net
Comments: Web app for write down some text, simple and light.
 */

//This function set the focus on the pad area
function setFocus(){
  $('#mypad').focus();
}// END function setFocus

/*
This function checks the pad for input. If it is some input
the save button is enabled. Otherwise, the button is disabled.
 */
function checkPad(){
  var pad = $('#mypad').val();
  if(!pad){
    $('#download').prop("disabled", true);
    $('#clear').prop("disabled", true);
  }
  else{
    $('#download').prop("disabled", false);
    $('#clear').prop("disabled", false);
  }
}// END function checkPad

//This function cleans the pad. The information cannot be retrieved.
function clearPad(){
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
        setFocus();
        $('#download').prop("disabled", true);
        $('#clear').prop("disabled", true);
        swal("Pad Cleared", "Pad is now empty", "success");
        $('#mypad').val('');
      });
} // END function clearPad

//This function let's you save the content of the pad as text file
function savePad(){
  var pad = $('#mypad').val();
  var date = new Date();
  var stringDate = moment(date).format("MMMM DD YYYY h:mm a");
  var filename = "pad-" + stringDate +".txt";
  var blob = new Blob([pad], {type: "text/plain;charset=utf-8"});
  swal({
        title: "File is ready",
        text: "Click Ok to download the file.",
        type: "success",
        showCancelButton: true,
        closeOnConfirm: true
      },
      function(){
        saveAs(blob, filename);
      });
} //END function savePad




