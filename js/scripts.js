//business logic








//user interface logic
$(document).ready(function() {
    $("#formOne").submit(function(event) {
      event.preventDefault();
      var input = $("input#input").val();
      var wordArr = input.split(' ');

      console.log(wordArr);

     var newArr =[]
      newArr = wordArr.map(function(word) {
          return word.charAt(0)
        
        
          
          
    });      
    console.log(newArr);
}); 

    //   var result = 
     
    //   $("#result").text(result);
      //console.log(wordArr);
});
  