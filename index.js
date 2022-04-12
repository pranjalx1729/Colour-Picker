var r=Math.floor(Math.random()*256);
var g=Math.floor(Math.random()*256);
var b=Math.floor(Math.random()*256);
var k=Math.floor(Math.random()*6);
var flag=false;
function ColorToHex(color) {
  var hexadecimal = color.toString(16);
  return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
}

function ConvertRGBtoHex(red, green, blue) {
  return "#" + ColorToHex(red) + ColorToHex(green) + ColorToHex(blue);
}
//answer bloc;k is forming
document.querySelectorAll(".rgb")[k].style.backgroundColor=ConvertRGBtoHex(r,g,b);
document.querySelector(".h12").innerHTML="RBG("+r+","+g+","+b+")";
var c=document.querySelectorAll(".rgb")[k].innerHTML;
//setting colour to all the blocks
for(var i=0;i<document.querySelectorAll(".rgb").length;i++)
{
    if(i==k)
      continue;
    else
      document.querySelectorAll(".rgb")[i].style.backgroundColor=ConvertRGBtoHex(Math.floor(Math.random()*256),Math.floor(Math.random()*256),Math.floor(Math.random()*256));

}

var s=ConvertRGBtoHex(r,g,b);

for(var i=0;i<document.querySelectorAll(".rgb").length;i++)
{
    document.querySelectorAll(".rgb")[i].addEventListener("click",function()
  {
      if(this.innerHTML==c)
      {

            document.querySelectorAll(".new-game")[0].innerHTML="correct";
            document.querySelectorAll(".d1")[0].style.backgroundColor=s;
            document.querySelectorAll(".rgb")[0].style.backgroundColor=s;
            document.querySelectorAll(".rgb")[1].style.backgroundColor=s;
            document.querySelectorAll(".rgb")[2].style.backgroundColor=s;
            document.querySelectorAll(".rgb")[3].style.backgroundColor=s;
            document.querySelectorAll(".rgb")[4].style.backgroundColor=s;
            document.querySelectorAll(".rgb")[5].style.backgroundColor=s;
      }
      else
      {
        document.querySelectorAll(".new-game")[0].innerHTML="try again";
        this.style.backgroundColor="#203239";
      }
  });
}

document.querySelectorAll(".newcolor")[0].addEventListener("click",function()
{
    location.reload();
});



document.querySelectorAll(".easy")[0].addEventListener("click",function()
{
      document.querySelectorAll(".rgb")[3].style.visibility = "hidden";
      document.querySelectorAll(".rgb")[4].style.visibility = "hidden";
      document.querySelectorAll(".rgb")[5].style.visibility = "hidden";
      k=Math.floor(Math.random()*3);

      document.querySelectorAll(".rgb")[k].style.backgroundColor=ConvertRGBtoHex(r,g,b);
      var c=document.querySelectorAll(".rgb")[k].innerHTML;
      for(var i=0;i<document.querySelectorAll(".rgb").length;i++)
      {
          document.querySelectorAll(".rgb")[i].addEventListener("click",function()
        {
            if(this.innerHTML==c)
            {
                  document.querySelectorAll(".new-game")[0].innerHTML="correct";
                  document.querySelectorAll(".d1")[0].style.backgroundColor=s;
                  document.querySelectorAll(".rgb")[0].style.backgroundColor=s;
                  document.querySelectorAll(".rgb")[1].style.backgroundColor=s;
                  document.querySelectorAll(".rgb")[2].style.backgroundColor=s;

            }
            else
            {
              document.querySelectorAll(".new-game")[0].innerHTML="try again";
              this.style.backgroundColor="#203239";
            }
        });
      }

    // document.querySelector(".")[0].addEventListener("click")
});
document.querySelectorAll(".hard")[0].addEventListener("click",function()
{
  document.querySelectorAll(".rgb")[3].style.visibility = "visible";
  document.querySelectorAll(".rgb")[4].style.visibility = "visible";
  document.querySelectorAll(".rgb")[5].style.visibility = "visible";
  // hard_click();
  k=Math.floor(Math.random()*6);
//  flag=true;
  document.querySelectorAll(".rgb")[k].style.backgroundColor=ConvertRGBtoHex(r,g,b);
  var c=document.querySelectorAll(".rgb")[k].innerHTML;

  for(var i=0;i<document.querySelectorAll(".rgb").length;i++)
  {
      document.querySelectorAll(".rgb")[i].addEventListener("click",function()
    {
        if(this.innerHTML==c)
        {

              document.querySelectorAll(".new-game")[0].innerHTML="correct";
              document.querySelectorAll(".d1")[0].style.backgroundColor=s;
              document.querySelectorAll(".rgb")[0].style.backgroundColor=s;
              document.querySelectorAll(".rgb")[1].style.backgroundColor=s;
              document.querySelectorAll(".rgb")[2].style.backgroundColor=s;
              document.querySelectorAll(".rgb")[3].style.backgroundColor=s;
              document.querySelectorAll(".rgb")[4].style.backgroundColor=s;
              document.querySelectorAll(".rgb")[5].style.backgroundColor=s;


        }
        else
        {
          document.querySelectorAll(".new-game")[0].innerHTML="try again";
          this.style.backgroundColor="#203239";
        }
    });
  }
// document.querySelectorAll(".dc")[0].style.visibility = "visible";
});
// alert("g=hello");
