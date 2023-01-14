var color_button = document.getElementById("ChangeColor");
var clear_button = document.getElementById("Clear");
var new_color = ["Red", "Green", "Blue", "Yellow", "Black"];

function clicked()
{

    console.log("clicked");
    color_button.style.width = 45;
    color_button.style.height = 45;
    
    setTimeout (function () {


    color_button.style.width = 50;
    color_button.style.height = 50;
    }, 200)

    var number = Math.floor(Math.random() * 4);
    console.log(number);
    color = new_color[number];
    


}
function button2()
{
    console.log("clearing");
    clear_button.style.width = 45;
    clear_button.style.height = 45;
    
    setTimeout (function () {


    clear_button.style.width = 50;
    clear_button.style.height = 50;
    }, 200);

    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);

}

var label_text = document.getElementById("label").innerText;
var labell = document.getElementById("label");

function plus()
{
    console.log(label_text);
    console.log("plus")
    ++label_text;
    console.log(label_text);
    labell.innerText = label_text;
    width_of_line = label_text;
    
}

function minus()
{
    console.log(label_text);
    console.log("minus")
    --label_text;
    console.log(label_text);
    labell.innerText = label_text;
    width_of_line = label_text;
}









var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

    var width = screen.width;

    new_width = screen.width - 70;
    new_height = screen.height - 300;

    if(width <= 992)
    {
        document.getElementById('myCanvas').height = new_height;
        document.getElementById('myCanvas').width = new_width;
        document.body.style.overflow = "hidden";
    }

    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        console.log("Touch Start Has Begun");
        last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
        last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
        //Addictonal Activity start
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        //Addictonal Activity ends
    }

    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {
        console.log("touch has moved");
         current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

        
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();
        

        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;
    }

