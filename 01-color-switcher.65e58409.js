!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body");e.disabled=!0;var a=null;function d(){n.style.background="#".concat(Math.floor(16777215*Math.random()).toString(16))}d(),t.addEventListener("click",(function(){t.disabled=!0,e.disabled=!1,a=setInterval(d,1e3)})),e.addEventListener("click",(function(){clearInterval(a),t.disabled=!1,e.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.65e58409.js.map