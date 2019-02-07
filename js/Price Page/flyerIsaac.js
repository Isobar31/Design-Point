var slideIndex = 0;
changeImage();

/******************************************* JavaScript code for Automatic image slide show ******************************************/
function changeImage() {
    var i;
    var x = document.getElementsByClassName("flyerImage");
    for (i = 0; i < x.length; i++)
	{
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(showImage, 5000); // Change image every 10 seconds
}

/******************************************* JavaScript code for manual image slide show ******************************************/
var index = 1;

function plusIndex(n)
			{
				index = index + 1;
				showImage(index);
}

showImage(1);

function showImage(n)
			{
			var i;
			var x = document.getElementsByClassName("flyerImage");
			if(n > x.length)
				{
					index = 1;
				}if(n < 1)
				{
					index = x.length;
				}

			for(i=0; i<x.length; i++)
				{
					x[i].style.display = "none";
				}
				x[index-1].style.display = "block";
}

/******************************************************************************** Read More ******************************************/
var i = 0;

function read()
{
	if(!i){		
		document.getElementById("more").style.display = "inline";
		// document.getElementById("dots").style.display = "none";  This is if dots are used as a sign of continuation.		
		document.getElementById("read").innerHTML = "- See less";
		i = 1;
	}
	else
	{
		document.getElementById("more").style.display = "none";
		// document.getElementById("dots").style.display = "inline";  This is if dots are used as a sign of continuation.		
		document.getElementById("read").innerHTML = "+ See more";		
		i = 0;
	}
}


// Function for increment of length

// function incHeight() {
//     var el = document.getElementsByClassName("TheSections").getElementsByClassName("column2").getElementsByClassName("personalData")[0];
//     var height = el.offsetHeight;
//     var newHeight = height + 100;
//     el.style.height = newHeight + 'px';
// }
