let strongEle = document.querySelectorAll("strong")
function highlight() {
    //Write your code here
 strongEle.forEach((strong) => {
	  strong.style.color = "green"
 })

}


function return_normal() {
    //Write your code here
 strongEle.forEach((strong) => {
	  strong.style.color = "black"
 })
    
}
