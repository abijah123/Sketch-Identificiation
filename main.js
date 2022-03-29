function setup() {
    canvas=createCanvas(280, 280);
   canvas.center();
   background("white");
   }
   function clearCanvas() {
   background("white");
   }
   function check_sketch(){ 
   }
   function updateCanvas() { 
    background("white"); 
random_number = Math.floor((Math.random() * quick_draw_data_set.length) + 1);
 console.log(quick_draw_data_set[random_number]); 
 sketch = quick_draw_data_set[random_number]; 
 document.getElementById('sketch_name').innerHTML = 'Sketch To be Drawn: ' + sketch; 
}
'Timer: ' + timer_counter; 
console.log(timer_counter) 
if(timer_counter > 400) 
{ timer_counter = 0;
 timer_check = "completed" 
} 
if(timer_check =="completed" || answer_holder == "set") 
{ timer_check = ""; answer_holder = "";
updateCanvas(); 
} 
