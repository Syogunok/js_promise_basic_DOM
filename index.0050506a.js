var e,n,o;function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],o=document.createElement("div");o.innerHTML=e,n.forEach(function(e){return o.classList.add(e)}),document.querySelector("body").appendChild(o)}e=document.querySelector(".logo"),n=new Promise(function(n){e.addEventListener("click",function(){t("Promise was resolved!",["message"]),n()})}),o=new Promise(function(e,n){setTimeout(function(){t("Promise was rejected!",["message","error-message"])},3e3)}),n.then(function(){return o});
//# sourceMappingURL=index.0050506a.js.map
