"use strict";define("composer/controls",function(){var e={};e.insertIntoTextarea=function(e,t){var n=$(e);var i=n.val();n.val(i.slice(0,e.selectionStart)+t+i.slice(e.selectionStart))};e.wrapSelectionInTextareaWith=function(e,t,n){if(n===undefined){n=t}var i=$(e);var c=i.val();var a=/^(\s*)([\s\S]*?)(\s*)$/.exec(c.slice(e.selectionStart,e.selectionEnd));if(!a[2]){a=[null,"",c.slice(e.selectionStart,e.selectionEnd),""]}i.val(c.slice(0,e.selectionStart)+a[1]+t+a[2]+n+a[3]+c.slice(e.selectionEnd))};e.updateTextareaSelection=function(e,t,n){e.setSelectionRange(t,n);$(e).focus()};return e});
//# sourceMappingURL=node_modules/nodebb-plugin-composer-default/static/lib/composer/controls.js.map