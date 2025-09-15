(()=>{document.addEventListener("DOMContentLoaded",function(){o()});function o(){document.querySelectorAll("i.fa-solid.fa-link").forEach(i=>{i.addEventListener("click",e=>{let n=e.target.parentElement.id;if(!n)return;let t=`${window.location.origin}${window.location.pathname}#${n}`;navigator.clipboard.writeText(t),alert(`${t}

The link is copied.`)})})}})();
