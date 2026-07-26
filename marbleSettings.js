// =================================
// BANO MARBLE SETTINGS
// =================================


let marbleSettings={

enabled:true,

position:"bottom-right",

motion:"morph",

speed:1800,

rotation:720

};





document
.getElementById(
"heroMarbleEnable"
)
.onchange=function(){


marbleSettings.enabled =
this.checked;



};






document
.getElementById(
"marblePosition"
)
.onchange=function(){


marbleSettings.position =
this.value;



};






document
.getElementById(
"marbleMotion"
)
.onchange=function(){


marbleSettings.motion =
this.value;



};






document
.getElementById(
"marbleSpeed"
)
.oninput=function(){


marbleSettings.speed =
this.value;



};






document
.getElementById(
"marbleRotation"
)
.oninput=function(){


marbleSettings.rotation =
this.value;



};
