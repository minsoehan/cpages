(()=>{document.addEventListener("DOMContentLoaded",function(){a(),c()});function a(){document.querySelectorAll("i.fa-solid.fa-link").forEach(o=>{o.addEventListener("click",i=>{let n=i.target.parentElement.id;if(!n)return;let t=`${window.location.origin}${window.location.pathname}#${n}`;navigator.clipboard.writeText(t),alert(`${t}

The link is copied.`)})})}function c(){document.getElementById("shareButton").addEventListener("click",()=>{navigator.clipboard.writeText(window.location.href),alert("The link has been copied to clipboard.")})}})();
