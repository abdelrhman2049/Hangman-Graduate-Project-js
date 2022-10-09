
    
    var allquiz=document.getElementById("allquiz")
     
    function exam(){
                      var score=0;
                      if(document.getElementById("answer1").checked)
                      {
                          score++;
                      }
                      
                      if(document.getElementById("answer2").checked)
                      {
                          score++;
                      }
                      
                      if(document.getElementById("answer3").checked)
                      {
                          score++;
                      }
                      
                      if(document.getElementById("answer4").checked)
                      {
                          score++;
                      }
                      alert("Your Score Is:" + ' '+ score );
                      allquiz.style.display='none'
    
                      }