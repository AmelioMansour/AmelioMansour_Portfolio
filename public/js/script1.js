CommentButton.addEventListener('click', CreateComment);
let x=0;
pad=0;


function CreateComment() {
    var referenceNode = document.querySelector('#CommentButton');
    CommentButton.setAttribute("disabled", "");
    var textarea = document.createElement("textarea");
    referenceNode.parentNode.insertBefore(textarea, referenceNode.nextSibling);
    var PostButton = document.createElement("button");
    PostButton.setAttribute("id", "PostButton");
    PostButton.addEventListener('click',Post);
    var referenceNode = document.querySelector('textarea');
    textarea.setAttribute("id","area");
    PostButton.textContent="Post";
    referenceNode.parentNode.insertBefore(PostButton, referenceNode.nextSibling);
}
function Post(){
    x=x+1;
    var CommentP = document.createElement("p");
    CommentP.setAttribute("id","CommentP"+x);
    CommentP.setAttribute("class","CommentP");
    let texttoadd =document.createTextNode(area.value);
    CommentP.appendChild(texttoadd);
    var referenceNode = document.querySelector('#CommentButton');
    referenceNode.parentNode.insertBefore(CommentP, referenceNode);
    document.getElementById("CommentButton").disabled=false;
    document.getElementById("area").remove();
    document.getElementById("PostButton").remove();
    var ReplyButton = document.createElement("button");
    ReplyButton.setAttribute("id", "Reply "+x);
    ReplyButton.setAttribute("class","Replies");
    ReplyButton.addEventListener('click',Reply);
    ReplyButton.textContent="Reply";
    var referenceNode = document.querySelector('#CommentP'+x);
    referenceNode.parentNode.insertBefore(ReplyButton, referenceNode.nextSibling);
}
function Reply(oneclick){
    spot=onclick(this);
    console.log(spot);
    var referenceNode = document.getElementById(spot);
    CommentButton.setAttribute("disabled", "");
    var textarea = document.createElement("textarea");
    referenceNode.parentNode.insertBefore(textarea, referenceNode);
    var PostButton = document.createElement("button");
    PostButton.setAttribute("id", "PostButton");
    PostButton.addEventListener('click',PostRep);
    textarea.setAttribute("id","area");
    var referenceNode = document.getElementById("area");
    PostButton.textContent="Post";
    
    referenceNode.parentNode.insertBefore(PostButton, referenceNode.nextSibling);
    
}

function PostRep(oneclick){
    x=x+1;
    spot=onclick(this);
    var CommentP = document.createElement("p");
    CommentP.setAttribute("id","CommentP"+x);
    CommentP.setAttribute("class","CommentP");
    let texttoadd =document.createTextNode(area.value);
    CommentP.appendChild(texttoadd);
    var referenceNode = document.getElementById(spot);
    referenceNode.parentNode.insertBefore(CommentP, referenceNode.nextSibling);
    document.getElementById("CommentButton").disabled=false;
    document.getElementById("area").remove();
    var ReplyButton = document.createElement("button");
    console.log(spot);
    ReplyButton.setAttribute("id", "Reply "+x);
    ReplyButton.setAttribute("class","Replies");
    ReplyButton.addEventListener('click',Reply);
    ReplyButton.textContent="Reply";
    var referenceNode = document.getElementById(spot);
    console.log(referenceNode);
    referenceNode.parentNode.insertBefore(ReplyButton, referenceNode.nextSibling);
    
    document.getElementById("PostButton").remove();
    
}
function onclick(ele){
    var id= ele.id;
    return id;
}