var ex = (function(){return this;})();
var doc = "document";
var p = ex[doc].getElementById("p");
console.log("Hello?");
p.innerHTML = "hello";
var el = ex[doc].createElement("p");
el.innerText = "So, I can now connect to GitHub.  Later, I will see if I can write to github";
ex[doc].body.appendChild(el);
