"use strict";define("forum/account/groups",["forum/account/header"],function(t){var r={};r.init=function(){t.init();var r=$("#groups-list");r.on("click",".list-cover",function(){var t=$(this).parents("[data-slug]").attr("data-slug");ajaxify.go("groups/"+t)})};return r});
//# sourceMappingURL=public/src/client/account/groups.js.map