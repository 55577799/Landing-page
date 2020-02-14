// $(".faq-item-quest").click(function(){
//     $( ".faq-item-quest ~ .faq-item-answer" ).toggle(300);
// })

var quest = document.querySelectorAll(".faq-item-quest");
// var answer = document.querySelector(".faq-item-answer");

for(var i = 0; i < quest.length; i++ ){
    
quest[i].onclick = function () {
    if(this.parentNode.childNodes[3].style.display == "none"){
        this.parentNode.childNodes[3].style.display = "flex";
    } else{
        this.parentNode.childNodes[3].style.display = "none"
    }
}
}



//     if(answer.style.display == "none"){
//     answer.style.display = "flex";
// } else{
//     answer.style.display = "none";
// }
// }