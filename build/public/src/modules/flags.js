"use strict";define("flags",[],function(){var t={};var a;var n;t.showFlagModal=function(t){e(t,function(e){a=$(e);a.on("hidden.bs.modal",function(){a.remove()});n=a.find("#flag-post-commit");a.on("click",".flag-reason",function(){o(t.type,t.id,$(this).text())});n.on("click",function(){o(t.type,t.id,a.find("#flag-reason-custom").val())});a.modal("show");a.find("#flag-reason-custom").on("keyup blur change",i)})};function e(t,a){templates.parse("partials/modals/flag_modal",t,function(t){require(["translator"],function(n){n.translate(t,a)})})}function o(t,n,e){if(!t||!n||!e){return}socket.emit("flags.create",{type:t,id:n,reason:e},function(t){if(t){return app.alertError(t.message)}a.modal("hide");app.alertSuccess("[[flags:modal-submit-success]]")})}function i(){if(a.find("#flag-reason-custom").val()){n.removeAttr("disabled")}else{n.attr("disabled",true)}}return t});
//# sourceMappingURL=public/src/modules/flags.js.map