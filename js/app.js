var SPLASH=SPLASH||{};SPLASH.Social={prefixSocialString:function(e){return encodeURIComponent(htmlentities.decode(e))},shareFacebook:function(e,a,i,o,t){return"https://www.facebook.com/dialog/feed?app_id=145634995501895&display=page&name="+(a=this.prefixSocialString(a))+"&caption="+(o=o?this.prefixSocialString(o):"")+"&description="+(t=t?this.prefixSocialString(t):"")+"&picture="+i+"&link="+e+"&redirect_uri=https://www.facebook.com/"},shareFacebookOGTags:function(e){return"https://www.facebook.com/sharer/sharer.php?u="+(e=e.replace("#","%23"))},shareTwitter:function(e,a,i){return"http://twitter.com/share?url="+(e=e.replace("#","%23"))+"&text="+(a=this.prefixSocialString(a))+"&hashtags="+(i=i||_siteTitle)},sharePinterest:function(e,a,i,o){return"https://pinterest.com/pin/create/"+(o=o?"button":"bookmarklet")+"/?url="+(e=e.replace("#","%23"))+"&media="+i+"&description="+(a=this.prefixSocialString(a))}},SPLASH.Hero={elem:$("#sw-HERO"),init:function(){},videoSet:function(){var e=this;this.elem.find("video").get(0).addEventListener("ended",function(){e.videoEnded()})},videoEnded:function(){this.elem.find(".video-container").hide(),this.elem.find(".digital").show().css({opacity:1})}},SPLASH.Emoji={elem:$("#sw-EMOJI"),emojiCodes:[["people",["_001_1f600","_002_1f603","_003_1f604","_003_1f607","_004_1f60d","_004_1f601","_005_1f606","_006__1f385","_006__1f936","_006_1f60b","_006_1f605","_006_1f917","_007_1f60f","_007_1f602","_007_1f928","_008_1f615","_008_1f923","_009_1f62b","_009_263a","_010_1f636","_011_1f626","_011_1f627","_011_1f633","_012_1f631","_013_1f924","_014_1f644","_015_1f92e","_015_1f922","_016_1f47b","_016_1f47c","_016_1f47d","_016_1f47e","_016_1f47f","_016_1f608","_016_1f916","_019_1f642","_020_1f618","_20_1f929","_021_1f61c","_021_1f92a","_022_1f913","_023_1f612","_025_1f629","_026_1f610","_027_1f62e","_027_1f632","_029_1f62d","_030_1f620","_030_1f914","_031_1f92b","_031_1f92d","_031_1f927","_035_1f643","_036_1f617","_037_1f61d","_038_1f60e","_039_1f61e","_040_1f641","_040_2639","_041_1f624","_042_1f611","_043_1f628","_044_1f630","_045_1f613","_046_1f925","_047_1f637","_048_1f479","_051_1f609","_052_1f61a","_052_1f619","_053_1f61b","_054_1f921","_055_1f614","_056_1f9d0","_056_1f623","_058_1f62f","_059_1f635","_060_1f622","_061_1f62a","_062_1f62c","_063_1f912","_064_1f47a","_066_1f60a","_067_1f60c","_069_1f911","_070_1f920","_071_1f61f","_072_1f616","_073_1f92c","_073_1f92f","_073_1f621","_076_1f625","_077_1f634","_078_1f910","_079_1f63a","_079_1f63b","_079_1f63c","_079_1f63d","_079_1f63e","_079_1f63f","_079_1f648","_079_1f649","_079_1f649c","_079_1f915","_080_1f4aa","_080_1f44a","_080_1f44b","_080_1f44c","_080_1f44d","_080_1f44e","_080_1f44f","_080_1f64c","_080_1f64f","_080_1f91a","_080_1f91b","_080_1f91c","_080_1f91d","_080_1f91e","_080_1f91f","_080_1f440","_080_1f441-1f5e8","_080_1f441","_080_1f442","_080_1f443","_080_1f444","_080_1f445","_080_1f446","_080_1f447","_080_1f448","_080_1f449","_080_1f450","_080_1f590","_080_1f595","_080_1f596","_080_1f918","_080_1f919","_080_1f932","_080_261d","_080_270a","_080_270b","_080_270c","_080_270d","_088_1f9df-2640","_088_1f9df-2642","_088_1f9df","_088_1f480","_088_1f638","_088_1f639","_088_1f640","_099_1f4a9","1f5e3","1f9de-2640","1f9de-2642","1f9de","1f9e0","1f9e2","1f9e3","1f9e4","1f9e5","1f9e6","1f45a","1f45b","1f45c","1f45d","1f45e","1f45f","1f48b","1f48d","1f302","1f383","1f392","1f393","1f451","1f452","1f453","1f454","1f455","1f456","1f457","1f458","1f459","1f460","1f461","1f462","1f463","1f464","1f465","1f484","1f485","1f576","26d1","2602","2620","2695"]],["splash",["_0Bauble_Splash_Green","_1Bauble_Splash_Red","_03Bauble_Splash_Black","Bauble_Green","Bauble_Red","Christmas_Jumber_Green","Christmas_Jumber_Red","Christmas_Pudding","Cracker_Green","Cracker_Open_Green","Cracker_Open_Red","Cracker_Red","Gingerbread_Man_Green","Gingerbread_Man_Yellow","Santa_Chimley","Snowglobe","Splash_Square_Black","Splash_Square_Green","Splash_Square_Red","Stocking_Green","Stocking_Red","Wood_Cabin","monkey_jumper_red","monkey_jumper_green"]],["natures",["ant","baby-chick","bat","bear-face","bird","blossom","blowfish","boar","bouquet","bug","butterfly","cactus","camel","cat-face","cat","cherry-blossom","chicken","chipmunk","christmas-tree","cloud-with-lightning-and-rain","cloud-with-lightning","cloud-with-rain","cloud-with-snow","cloud","collision","comet","cow-face","cow","crab","crescent-moon","cricket","crocodile","dashing-away","deciduous-tree","deer","dizzy","dog-face","dog","dolphin","dove","dragon-face","dragon","droplet","duck","eagle","elephant","evergreen-tree","ewe","fallen-leaf","fire","first-quarter-moon-with-face","first-quarter-moon","fish","fog","four-leaf-clover","fox-face","frog-face","front-facing-baby-chick","full-moon-with-face","full-moon","giraffe","globe-showing-americas","globe-showing-asia-australia","globe-showing-europe-africa","glowing-star","goat","gorilla","hamster-face","hatching-chick","hear-no-evil-monkey","hedgehog","herb","hibiscus","high-voltage","honeybee","horse-face","horse","koala","lady-beetle","last-quarter-moon-with-face","last-quarter-moon","leaf-fluttering-in-wind","leopard","lion-face","lizard","maple-leaf","monkey-face","monkey","mouse-face","mouse","mushroom","new-moon-face","new-moon","octopus","owl","ox","palm-tree","panda-face","paw-prints","penguin","pig-face","pig-nose","pig","pine-decoration","poodle","rabbit-face","rabbit","rainbow","ram","rat","rhinoceros","rooster","rose","sauropod","scorpion","see-no-evil-monkey","seedling","shamrock","shark","sheaf-of-rice","shrimp","snail","snake","snowflake","snowman-without-snow","snowman","sparkles","speak-no-evil-monkey","spider-web","spider","spiral-shell","spouting-whale","squid","sun-behind-cloud","sun-behind-large-cloud","sun-behind-rain-cloud","sun-behind-small-cloud","sun-with-face","sun","sunflower","sweat-droplets","t-rex","tanabata-tree","tiger-face","tiger","tornado","tropical-fish","tulip","turkey","turtle","two-hump-camel","umbrella-with-rain-drops","unicorn-face","waning-crescent-moon","waning-gibbous-moon","water-buffalo","water-wave","waxing-crescent-moon","waxing-gibbous-moon","whale","white-medium-star","wilted-flower","wind-face","wolf-face","zebra"]],["food",["avocado","baby-bottle","bacon","baguette-bread","banana","beer-mug","bento-box","birthday-cake","bottle-with-popping-cork","bowl-with-spoon","bread","broccoli","burrito","candy","canned-food","carrot","cheese-wedge","cherries","chestnut","chocolate-bar","chopsticks","clinking-beer-mugs","clinking-glasses","cocktail-glass","coconut","cooked-rice","cookie","cooking","croissant","cucumber","cup-with-straw","curry-rice","custard","cut-of-meat","dango","doughnut","dumpling","ear-of-corn","egg","eggplant","fish-cake-with-swirl","fork-and-knife-with-plate","fork-and-knife","fortune-cookie","french-fries","fried-shrimp","glass-of-milk","grapes","green-apple","green-salad","hamburger","honey-pot","hot-beverage","hot-dog","hot-pepper","ice-cream","kiwi-fruit","lemon","lollipop","meat-on-bone","melon","oden","pancakes","peach","peanuts","pear","pie","pineapple","pizza","popcorn","pot-of-food","potato","poultry-leg","pretzel","red-apple","rice-ball","rice-cracker","roasted-sweet-potato","sake","sandwich","shallow-pan-of-food","shaved-ice","shortcake","soft-ice-cream","spaghetti","spoon","steaming-bowl","strawberry","stuffed-flatbread","sushi","taco","takeout-box","tangerine","teacup-without-handle","tomato","tropical-drink","tumbler-glass","watermelon","wine-glass"]],["sports",["1st-place-medal","2nd-place-medal","3rd-place-medal","admission-tickets","american-football","artist-palette","badminton","baseball","basketball","bow-and-arrow","bowling","boxing-glove","circus-tent","clapper-board","cricket-game","curling-stone","direct-hit","drum","field-hockey","fishing-pole","flag-in-hole","game-die","goal-net","guitar","headphone","ice-hockey","ice-skate","martial-arts-uniform","microphone","military-medal","musical-keyboard","musical-score","performing-arts","ping-pong","pool-8-ball","reminder-ribbon","rosette","rugby-football","running-shirt","saxophone","skis","sled","slot-machine","soccer-ball","sports-medal","tennis","ticket","trophy","trumpet","video-game","violin","volleyball"]],["travel",["aerial-tramway","airplane-arrival","airplane-departure","airplane","ambulance","anchor","articulated-lorry","automobile","bank","beach-with-umbrella","bicycle","bridge-at-night","building-construction","bus-stop","bus","camping","canoe","carousel-horse","castle","church","cityscape-at-dusk","cityscape","classical-building","construction","convenience-store","delivery-truck","department-store","derelict-house","desert-island","desert","factory","ferris-wheel","ferry","fire-engine","fireworks","flying-saucer","foggy","fountain","fuel-pump","helicopter","high-speed-train-with-bullet-nose","high-speed-train","horizontal-traffic-light","hospital","hotel","house-with-garden","house","houses","japanese-castle","japanese-post-office","kaaba","kick-scooter","light-rail","locomotive","love-hotel","map-of-japan","metro","milky-way","minibus","moai","monorail","moon-viewing-ceremony","mosque","motor-boat","motor-scooter","motorcycle","motorway","mount-fuji","mountain-cableway","mountain-railway","mountain","national-park","night-with-stars","office-building","oncoming-automobile","oncoming-bus","oncoming-police-car","oncoming-taxi","passenger-ship","police-car-light","police-car","post-office","racing-car","railway-car","railway-track","rocket","roller-coaster","sailboat","satellite","school","seat","shinto-shrine","ship","shooting-star","small-airplane","snow-capped-mountain","sparkler","speedboat","sport-utility-vehicle","stadium","station","statue-of-liberty","sunrise-over-mountains","sunrise","sunset","suspension-railway","synagogue","taxi","tent","tokyo-tower","tractor","train","tram-car","tram","trolleybus","umbrella-on-ground","vertical-traffic-light","volcano","wedding","world-map"]],["objects",["alarm-clock","alembic","amphora","balance-scale","balloon","ballot-box-with-ballot","bar-chart","barber-pole","bathtub","battery","bed","bellhop-bell","black-nib","blue-book","bomb","bookmark-tabs","bookmark","books","calendar","camera-with-flash","camera","candle","card-file-box","card-index-dividers","card-index","carp-streamer","chains","chart-decreasing","chart-increasing","cigarette","clamp","clipboard","closed-book","closed-mailbox-with-lowered-flag","closed-mailbox-with-raised-flag","coffin","computer-disk","computer-mouse","confetti-ball","control-knobs","couch-and-lamp","crayon","credit-card","crossed-swords","crystal-ball","dagger","desktop-computer","dollar-banknote","door","dvd","e-mail","electric-plug","envelope-with-arrow","envelope","euro-banknote","fax-machine","file-cabinet","file-folder","film-frames","film-projector","flashlight","floppy-disk","fountain-pen","framed-picture","funeral-urn","gear","gem-stone","green-book","hammer-and-pick","hammer-and-wrench","hammer","hole","hourglass-with-flowing-sand","hourglass","inbox-tray","incoming-envelope","japanese-dolls","joystick","key","keyboard","kitchen-knife","label","laptop-computer","ledger","left-pointing-magnifying-glass","level-slider","light-bulb","link","linked-paperclips","locked-with-key","locked-with-pen","locked","love-letter","mantelpiece-clock","memo","microscope","mobile-phone-with-arrow","mobile-phone","money-bag","money-with-wings","movie-camera","newspaper","notebook-with-decorative-cover","notebook","nut-and-bolt","oil-drum","old-key","open-book","open-file-folder","open-mailbox-with-lowered-flag","open-mailbox-with-raised-flag","optical-disk","orange-book","orange-heart","outbox-tray","package","page-facing-up","page-with-curl","pager","paintbrush","paperclip","party-popper","pen","pencil","person-in-bed","person-taking-bath","pick","pill","pistol","postal-horn","postbox","potable-water","pound-banknote","prayer-beads","printer","pushpin","radio","red-paper-lantern","ribbon","right-pointing-magnifying-glass","rolled-up-newspaper","round-pushpin","satellite-antenna","scissors","scroll","shield","shopping-bags","shopping-cart","shower","spiral-calendar","spiral-notepad","stopwatch","straight-ruler","studio-microphone","syringe","tear-off-calendar","telephone-receiver","telephone","telescope","television","thermometer","timer-clock","toilet","trackball","triangular-ruler","unlocked","video-camera","videocassette","wastebasket","watch","wind-chime","wrapped-gift","wrench","yen-banknote"]],["symbols",["a-button-blood-type","ab-button-blood-type","anger-symbol","antenna-bars","anticlockwise-arrows-button","aquarius","aries","asterisk","atm-sign","atom-symbol","b-button-blood-type","baby-symbol","back-arrow","baggage-claim","ballot-box-with-check","beating-heart","bell-with-slash","bell","biohazard","black-circle","black-heart","black-large-square","black-medium-small-square","black-medium-square","black-small-square","black-square-button","blue-circle","blue-heart","bright-button","broken-heart","cancer","capricorn","chart-increasing-with-yen","children-crossing","cinema","circled-m","cl-button","clockwise-vertical-arrows","club-suit","cool-button","copyright","cross-mark-button","cross-mark","curly-loop","currency-exchange","customs","cyclone","diamond-suit","diamond-with-a-dot","digit-eight","digit-five","digit-four","digit-nine","digit-one","digit-seven","digit-six","digit-three","digit-two","digit-zero","dim-button","dotted-six-pointed-star","double-curly-loop","double-exclamation-mark","down-arrow","down-button","down-left-arrow","down-right-arrow","eight-oclock","eight-pointed-star","eight-spoked-asterisk","eight-thirty","eject-button","eleven-oclock","eleven-thirty","end-arrow","exclamation-mark","exclamation-question-mark","eye-in-speech-bubble","fast-down-button","fast-forward-button","fast-reverse-button","fast-up-button","five-oclock","five-thirty","fleur-de-lis","flower-playing-cards","four-oclock","four-thirty","free-button","gemini","globe-with-meridians","green-heart","growing-heart","heart-decoration","heart-suit","heart-with-arrow","heart-with-ribbon","heavy-check-mark","heavy-division-sign","heavy-dollar-sign","heavy-heart-exclamation","heavy-large-circle","heavy-minus-sign","heavy-multiplication-x","heavy-plus-sign","hot-springs","hundred-points","id-button","information","input-latin-letters","input-latin-lowercase","input-latin-uppercase","input-numbers","input-symbols","japanese-acceptable-button","japanese-application-button","japanese-bargain-button","japanese-congratulations-button","japanese-discount-button","japanese-free-of-charge-button","japanese-here-button","japanese-monthly-amount-button","japanese-no-vacancy-button","japanese-not-free-of-charge-button","japanese-open-for-business-button","japanese-passing-grade-button","japanese-prohibited-button","japanese-reserved-button","japanese-secret-button","japanese-service-charge-button","japanese-symbol-for-beginner","japanese-vacancy-button","joker","keycap-0","keycap-1","keycap-2","keycap-3","keycap-4","keycap-5","keycap-6","keycap-7","keycap-8","keycap-9","keycap-10","keycap","large-blue-diamond","large-orange-diamond","last-track-button","latin-cross","left-arrow-curving-right","left-arrow","left-luggage","left-right-arrow","left-speech-bubble","leo","libra","litter-in-bin-sign","loudspeaker","mahjong-red-dragon","megaphone","menorah","mens-room","mobile-phone-off","musical-note","musical-notes","muted-speaker","name-badge","new-button","next-track-button","ng-button","nine-oclock","nine-thirty","no-bicycles","no-entry","no-littering","no-mobile-phones","no-one-under-eighteen","no-pedestrians","no-smoking","non-potable-water","o-button-blood-type","ok-button","om","on-arrow","one-oclock","one-thirty","ophiuchus","orthodox-cross","p-button","part-alternation-mark","passport-control","pause-button","peace-symbol","pisces","place-of-worship","play-button","play-or-pause-button","pound-symbol","prohibited","purple-heart","question-mark","radio-button","radioactive","record-button","recycling-symbol","red-circle","red-heart","red-triangle-pointed-down","red-triangle-pointed-up","registered","repeat-button","repeat-single-button","restroom","reverse-button","revolving-hearts","right-anger-bubble","right-arrow-curving-down","right-arrow-curving-left","right-arrow-curving-up","right-arrow","sagittarius","scorpius","seven-oclock","seven-thirty","shuffle-tracks-button","six-oclock","six-thirty","small-blue-diamond","small-orange-diamond","soon-arrow","sos-button","spade-suit","sparkle","sparkling-heart","speaker-high-volume","speaker-low-volume","speaker-medium-volume","speech-balloon","star-and-crescent","star-of-david","stop-button","stop-sign","taurus","ten-oclock","ten-thirty","thought-balloon","three-oclock","three-thirty","top-arrow","trade-mark","trident-emblem","twelve-oclock","twelve-thirty","two-hearts","two-oclock","two-thirty","up-arrow","up-button","up-down-arrow","up-left-arrow","up-right-arrow","vibration-mode","virgo","vs-button","warning","water-closet","wavy-dash","wheel-of-dharma","wheelchair-symbol","white-circle","white-exclamation-mark","white-flower","white-heavy-check-mark","white-large-square","white-medium-small-square","white-medium-square","white-question-mark","white-small-square","white-square-button","womens-room","yellow-heart","yin-yang","zzz"]],["flags",["afghanistan","aland-islands","albania","algeria","american-samoa","andorra","angola","anguilla","antarctica","antigua-barbuda","argentina","armenia","aruba","ascension-island","australia","austria","azerbaijan","bahamas","bahrain","bangladesh","barbados","belarus","belgium","belize","benin","bermuda","bhutan","black-flag","bolivia","bosnia-herzegovina","botswana","bouvet-island","brazil","british-indian-ocean-territory","british-virgin-islands","brunei","bulgaria","burkina-faso","burundi","cambodia","cameroon","canada","canary-islands","cape-verde","caribbean-netherlands","cayman-islands","central-african-republic","ceuta-melilla","chad","chequered-flag","chile","china","christmas-island","clipperton-island","cocos-keeling-islands","colombia","comoros","congo-brazzaville","congo-kinshasa","cook-islands","costa-rica","cote-divoire","croatia","crossed-flags","cuba","curacao","cyprus","czechia","denmark","diego-garcia","djibouti","dominica","dominican-republic","ecuador","egypt","el-salvador","england","equatorial-guinea","eritrea","estonia","ethiopia","european-union","falkland-islands","faroe-islands","fiji","finland","france","french-guiana","french-polynesia","french-southern-territories","gabon","gambia","georgia","germany","ghana","gibraltar","greece","greenland","grenada","guadeloupe","guam","guatemala","guernsey","guinea-bissau","guinea","guyana","haiti","heard-mcdonald-islands","honduras","hong-kong-sar-china","hungary","iceland","india","indonesia","iran","iraq","ireland","isle-of-man","israel","italy","jamaica","japan","jersey","jordan","kazakhstan","kenya","kiribati","kosovo","kuwait","kyrgyzstan","laos","latvia","lebanon","lesotho","liberia","libya","liechtenstein","lithuania","luxembourg","macau-sar-china","macedonia","madagascar","malawi","malaysia","maldives","mali","malta","marshall-islands","martinique","mauritania","mauritius","mayotte","mexico","micronesia","moldova","monaco","mongolia","montenegro","montserrat","morocco","mozambique","myanmar-burma","namibia","nauru","nepal","netherlands","new-caledonia","new-zealand","nicaragua","niger","nigeria","niue","norfolk-island","north-korea","northern-mariana-islands","norway","oman","pakistan","palau","palestinian-territories","panama","papua-new-guinea","paraguay","peru","philippines","pitcairn-islands","poland","portugal","puerto-rico","qatar","rainbow-flag","reunion","romania","russia","rwanda","samoa","san-marino","sao-tome-principe","saudi-arabia","scotland","senegal","serbia","seychelles","sierra-leone","singapore","sint-maarten","slovakia","slovenia","solomon-islands","somalia","south-africa","south-georgia-south-sandwich-islands","south-korea","south-sudan","spain","sri-lanka","st-barthelemy","st-helena","st-kitts-nevis","st-lucia","st-martin","st-pierre-miquelon","st-vincent-grenadines","sudan","suriname","svalbard-jan-mayen","swaziland","sweden","switzerland","syria","taiwan","tajikistan","tanzania","thailand","timor-leste","togo","tokelau","tonga","triangular-flag","trinidad-tobago","tristan-da-cunha","tunisia","turkey","turkmenistan","turks-caicos-islands","tuvalu","uganda","ukraine","united-arab-emirates","united-kingdom","united-nations","united-states","uruguay","us-outlying-islands","us-virgin-islands","uzbekistan","vanuatu","vatican-city","venezuela","vietnam","wales","wallis-futuna","western-sahara","white-flag","yemen","zambia","zimbabwe"]]],emojiArray:[],limitSelections:10,init:function(){var e,i=this;window.location.hash&&(e=Base64.decode(window.location.hash.replace("#","")).split("***"),$.each(e,function(e,a){a=a.split(",");i.emojiArray.push([a[0],a[1],a[2]])}),this.setSelection(),this.getWallpaperData()),this.catNavigation(),this.setEmojiCodes(),this.setBtnEvents()},catNavigation:function(){var e=this,a=this.elem.find(".categories--nav li img");a.bind("click",function(){$(this).hasClass("active")||(a.removeClass("active"),$(this).addClass("active"),e.setEmojiCodes())})},catString:function(){return this.elem.find(".categories--nav li img.active").data("nav")},catArray:function(){var i=this,o=0;return $.each(this.emojiCodes,function(e,a){a[0]===i.catString()&&(o=e)}),this.emojiCodes[o][1]},setEmojiCodes:function(){var t=this,i=this.elem.find(".categories--icons #icons");html="",$.each(this.catArray(),function(e,i){var o="";0<t.emojiArray.length&&$.each(t.emojiArray,function(e,a){a[0]===i&&(o="hide")}),html+='<span data-img="'+i+'" class="'+o+'">'+t.iconDirectory(i)+"</span>"}),i.html(html);$(window).resize(function(){var e,a;i.width("auto"),i.height()>i.parent().height()&&(e=i.find("span").eq(0),a=parseInt(e.css("padding-left").replace("px",""))+parseInt(e.css("padding-right").replace("px","")),a=e.find("img").width()+a,i.width(t.catArray().length/5*a))}).resize();var e=this.elem.find(".categories--icons");e.find(".arrow.left").unbind("click").bind("click",function(){var e=i.parent().scrollLeft();iconsContainerWidth=i.parent().width(),i.parent().animate({scrollLeft:e-iconsContainerWidth})}),e.find(".arrow.right").unbind("click").bind("click",function(){var e=i.parent().scrollLeft();iconsContainerWidth=i.parent().width(),i.parent().animate({scrollLeft:e+iconsContainerWidth})}),i.find("span").unbind("click").bind("click",function(){$(this).hasClass("hide")||($(this).addClass("hide"),t.emojiArray.push([$(this).data("img"),$(this).index(),t.catString()]),t.setSelection())})},setSelection:function(){var i=this,e=this.elem.find(".categories--icons #icons"),a=this.elem.find(".selections--icons #selections"),o="";$.each(this.emojiArray,function(e,a){o+='<span data-img="'+a[0]+'" data-id="'+a[1]+'" data-cat="'+a[2]+'">'+i.iconDirectory(a[0],a[2])+"</span>"}),a.html(o),this.totalSelection(),a.find("span").bind("click",function(){e.find("span").eq($(this).data("id")).removeClass("hide"),i.emojiArray.splice($(this).index(),1),$(this).remove(),i.totalSelection()})},totalSelection:function(){var e=this.elem.find(".categories--icons #icons"),a=this.elem.find(".selections--icons h1"),i=this.limitSelections-this.emojiArray.length;a.find("span").html(i),0<i?e.removeClass("sw-events-disable"):e.addClass("sw-events-disable")},setBtnEvents:function(){var o=this,e=$("#sw-WALLPAPER .urlwrapper input");$(".btn-clear").bind("click",function(){o.emojiArray.length=0,o.elem.find(".categories--icons #icons span").removeClass("hide"),o.elem.find(".selections--icons #selections").empty(),o.totalSelection()}),$(".btn-submit").bind("click",function(){var i;0<o.emojiArray.length&&(i="",$.each(o.emojiArray,function(e,a){i+=a,o.emojiArray.length!==e+1&&(i+="***")}),void 0!==window.history&&void 0!==window.history.pushState?window.history.pushState({},document.title,"?hash=1#"+Base64.encode(i)):window.location.hash=Base64.encode(i),o.getWallpaperData())}),$(".btn-print").bind("click",function(){window.print()}),$(".btn-back").bind("click",function(){e.removeClass("copied"),o.showWallpaper(!1),void 0!==window.history&&void 0!==window.history.pushState?window.history.pushState({},document.title,window.location.pathname):window.location.hash="",o.setEmojiCodes(),$("html, body").animate({scrollTop:$("#sw-EMOJI").offset().top},0)});new Clipboard(".btn-copy",{text:function(){return $("#sw-WALLPAPER .urlwrapper input").val()}});$(".btn-copy").bind("click",function(){e.addClass("copied")})},getWallpaperData:function(){for(var e="",a=2999;0<=a;a--){var i=this.emojiArray[Math.floor(Math.random()*this.emojiArray.length)],o=this.randomNum(24,64),t=this.randomNum(0,360),n=this.randomNum(0,100-o),t="top: "+this.randomNum(0,80-o)+"px; left: "+n+"px; width: "+o+"px; height: "+o+"px; transform: rotate("+t+"deg);";e+='<span data-img="'+i[0]+'" style="width: 100px;  height: 80px;">'+this.iconDirectory(i[0],i[2],t)+"</span>"}this.showWallpaper(!0),$("#sw-WALLPAPER .wp-icons").html(e);var r=_siteURL+"?hash=1"+window.location.hash;this.shortenURL(r);var s=r,l=$('meta[property="og:title"]').attr("content"),c=$('meta[property="og:image"]').attr("content");_sharingDescription;$(".share.facebook").unbind("click").bind("click",function(e){e.preventDefault(),window.open(SPLASH.Social.shareFacebookOGTags(s))}),$(".share.twitter").unbind("click").bind("click",function(e){e.preventDefault();e=$("#sw-WALLPAPER .urlwrapper input").val();window.open(SPLASH.Social.shareTwitter(e,l))}),$(".share.pinterest").unbind("click").bind("click",function(e){e.preventDefault();e=$("#sw-WALLPAPER .urlwrapper input").val();window.open(SPLASH.Social.sharePinterest(e,l,c))})},showWallpaper:function(e){e?($("html, body").addClass("noscroll"),$("#sw-WALLPAPER").show(),$("#sw-MAIN").hide()):($("html, body").removeClass("noscroll"),$("#sw-WALLPAPER").hide(),$("#sw-MAIN").show())},iconDirectory:function(e,a,i){var o=this.catString(),t="";return a&&(o=a),i&&(t=i),'<img src="images/Emoji_'+o+"/"+e+'.png" style="'+t+'" alt="'+e+'" />'},randomNum:function(e,a,i){e+=Math.random()*(a-e);return void 0===i?Math.round(e):e.toFixed(i)},shortenURL:function(e){$.ajax({type:"POST",url:"php/curl.php",data:"longUrl="+e,success:function(e){console.log(e),$("#sw-WALLPAPER .urlwrapper input").val(e)}})}},SPLASH.Mills={init:function(){var e=$(".uniquelink, .socailshares, .fullwidth");$(".btn-saveshare").click(function(){e.fadeIn(),$(this).hide()}),$(".btn-back").click(function(){e.fadeOut(function(){$(".btn-saveshare").show()})}),$(".scrollDown, .icon-down").click(function(){$("html, body").animate({scrollTop:$("#sw-INTRO").offset().top},500)}),$(document).mouseleave(function(){$(".scrollBottom").addClass("out")}),$(document).on("mousemove",function(e){$(".scrollBottom").removeClass("out")})}},$(document).ready(function(){console.log("init..."),SPLASH.Hero.init(),SPLASH.Emoji.init(),SPLASH.Mills.init()});