"use strict";define("forum/tag",["forum/recent","forum/infinitescroll"],function(t,o){var n={};n.init=function(){app.enterRoom("tags");if($("body").height()<=$(window).height()&&$('[component="category"]').children().length>=20){$("#load-more-btn").show()}$("#load-more-btn").on("click",function(){n()});if(!config.usePagination){o.init(n)}function n(n){if(n<0||!$('[component="category"]').length){return}o.loadMore("topics.loadMoreFromSet",{set:"tag:"+ajaxify.data.tag+":topics",after:$('[component="category"]').attr("data-nextstart"),count:config.topicsPerPage},function(o,n){if(o.topics&&o.topics.length){t.onTopicsLoaded("tag",o.topics,false,n)}else{n();$("#load-more-btn").hide()}$('[component="category"]').attr("data-nextstart",o.nextStart)})}};return n});
//# sourceMappingURL=public/src/client/tag.js.map