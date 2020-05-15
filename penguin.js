$(document).ready(function(){
    
    var count = 0;
    var highest = 0;
    var peng_sounds = document.getElementById("penguin_sounds");
	var yeti_sounds = document.getElementById("yeti_sounds");
    var winning = document.getElementById("triumph");
  up_sc(count, highest);
    
    var mounds = $("#game_area").children("div");
    randomize(mounds);
   
    function initial_image(){
        
        $("#penguin1").css('background-image', 'url(/images/mound_1.png)');
        
        $("#penguin2").css('background-image', 'url(images/mound_2.png)');
        
        $("#penguin3").css('background-image', 'url(images/mound_3.png)');
        
        $("#penguin4").css('background-image', 'url(images/mound_4.png)');
        
        $("#penguin5").css('background-image', 'url(images/mound_5.png)');
        
        $("#penguin6").css('background-image', 'url(images/mound_6.png)');
        
        $("#penguin7").css('background-image', 'url(images/mound_7.png)');
        
        $("#penguin8").css('background-image', 'url(images/mound_8.png)');
        
//        $("#yeti").css('background-image', 'url(images/mound_9.png)');
        
    };
    
    function intial_behaviour(){
        
        document.getElementById("penguin1").style.pointerEvents = "auto";
        
        document.getElementById("penguin2").style.pointerEvents = "auto";
        
        document.getElementById("penguin3").style.pointerEvents = "auto";
        
        document.getElementById("penguin4").style.pointerEvents = "auto";
        
        document.getElementById("penguin5").style.pointerEvents = "auto";
        
        document.getElementById("penguin6").style.pointerEvents = "auto";
        
        document.getElementById("penguin7").style.pointerEvents = "auto";
        
        document.getElementById("penguin8").style.pointerEvents = "auto";
    };
    
    
    $("#yeti").click(function(){
        
        $("#yeti").css('background-image', 'url("images/yeti.png")');
        yeti_sounds.play();
      

        document.getElementById("yeti").style.pointerEvents = 'none';
        
        initial_image();
        intial_behaviour();
    
        setTimeout(function(){
            
            $("#yeti").css('background-image', 'url("images/mound_9.png")');
            document.getElementById("yeti").style.pointerEvents = 'auto';
            count = 0;
            up_sc(count, highest);
            randomize(mounds);
        }, 2000);
    
    });
    
    $("#penguin1").click(function(){
        
        $("#penguin1").css('background-image', 'url("images/penguin_1.png")');
		peng_sounds.play();
        count += 1;
        up_sc(count, highest);
        if(count > 7 && highest > 0){
             winning.play();
            alert("you won");
           
            count = 0;
//            document.getElementById("penguin1").style.pointerEvents = 'none';
             up_sc(count, highest);
            initial_image();
        intial_behaviour();
        
        }
        document.getElementById("penguin1").style.pointerEvents = 'none';
    });
    
    $("#penguin2").click(function(){
        
        $("#penguin2").css('background-image', 'url("images/penguin_2.png")');
		peng_sounds.play();
        count += 1;
        up_sc(count, highest);
        if(count > 7 && highest > 0){
              winning.play();
            alert("you won");
          
            count = 0;
//            document.getElementById("penguin2").style.pointerEvents = 'none';
             up_sc(count, highest);
            initial_image();
        intial_behaviour();
            
        }
        document.getElementById("penguin2").style.pointerEvents = 'none';
    });
    
    $("#penguin3").click(function(){
        
        $("#penguin3").css('background-image', 'url("images/penguin_3.png")');
		peng_sounds.play();
       
        count += 1;
        up_sc(count, highest);
        if(count > 7 && highest > 0){
              winning.play();
            alert("you won");
           
            count = 0;
//            document.getElementById("penguin3").style.pointerEvents = 'none';
             up_sc(count, highest);
            initial_image();
        intial_behaviour();
            
        }
        document.getElementById("penguin3").style.pointerEvents = 'none';
    });
    
    $("#penguin4").click(function(){
        
        $("#penguin4").css('background-image', 'url("images/penguin_4.png")');
		peng_sounds.play();
        count += 1;
        up_sc(count, highest);
        if(count > 7 && highest > 0){
              winning.play();
            alert("you won");
          
            count = 0;
//            document.getElementById("penguin4").style.pointerEvents = 'none';
             up_sc(count, highest);
            initial_image();
        intial_behaviour();
            
        }
        document.getElementById("penguin4").style.pointerEvents = 'none';
    });
    
    $("#penguin5").click(function(){
        
        $("#penguin5").css('background-image', 'url("images/penguin_5.png")');
		peng_sounds.play();
        count += 1;
        up_sc(count, highest);
        if(count > 7 && highest > 0){
             winning.play();
            alert("you won");
           
            count = 0;
//            document.getElementById("penguin5").style.pointerEvents = 'none';
             up_sc(count, highest);
            initial_image();
        intial_behaviour();
            
        }
        document.getElementById("penguin5").style.pointerEvents = 'none';
    });
    
    $("#penguin6").click(function(){
        
        $("#penguin6").css('background-image', 'url("images/penguin_6.png")');
		peng_sounds.play();
        count += 1;
        up_sc(count, highest);
        if(count > 7 && highest > 0){
             winning.play();
            alert("you won");
           
            count = 0;
//            document.getElementById("penguin6").style.pointerEvents = 'none';
             up_sc(count, highest);
            initial_image();
        intial_behaviour();
            
        }
        document.getElementById("penguin6").style.pointerEvents = 'none';
    });
    
    $("#penguin7").click(function(){
        
        $("#penguin7").css('background-image', 'url("images/penguin_7.png")');
		peng_sounds.play();
        count += 1;
        up_sc(count, highest);
        if(count > 7 && highest > 0){
            winning.play();
            alert("you won");
            
            count = 0;
//            document.getElementById("penguin7").style.pointerEvents = 'none';
             up_sc(count, highest);
            initial_image();
        intial_behaviour();
            
        }
        document.getElementById("penguin7").style.pointerEvents = 'none';
    });
    
    $("#penguin8").click(function(){
        
        $("#penguin8").css('background-image', 'url("images/penguin_8.png")');
		peng_sounds.play();
        count += 1;
        up_sc(count, highest);
        if(count > 7 && highest > 0){
               winning.play();
            alert("you won");
         
            count = 0;
//            document.getElementById("penguin8").style.pointerEvents = 'none';
             up_sc(count, highest);
            initial_image();
        intial_behaviour();
            
        }
        document.getElementById("penguin8").style.pointerEvents = 'none';
    });
    
    function up_sc(count, high){
        
        if(count > highest){
            
            highest = count;
        }
        
        $("#score").empty();
        $("#score").append("count = " + count + "<br> High-Score = " + highest);
        
        
    };
    
    function randomize(array){
        
        var scores = array.length, temp_index, random_pos;
        
        while(0 !== scores){
            
            random_pos = Math.floor(Math.random() * scores);
            scores -= 1;
            
            temp_index = array[scores];
            array[scores] = array[random_pos];
            array[random_pos] = temp_index;
        }
        
        for(i = 0; i < array.length; i++){
            
            $("#game_area").append($(array[i]));
        }
    };
    
});