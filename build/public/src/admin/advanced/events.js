"use strict";define("admin/advanced/events",function(){var e={};e.init=function(){$('[data-action="clear"]').on("click",function(){socket.emit("admin.deleteAllEvents",function(e){if(e){return app.alertError(e.message)}$(".events-list").empty()})})};return e});
//# sourceMappingURL=public/src/admin/advanced/events.js.map