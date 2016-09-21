// JavaScript Document
var fontAuto={
    psWidth:640,
    fontAutoFun:function(){
        var htmlNode=document.documentElement;
        var winWidth=htmlNode.clientWidth;
        if(winWidth>=this.psWidth)
        htmlNode.style.fontSize="625%";
        else
        htmlNode.style.fontSize=winWidth/this.psWidth*625+'%';
    },
    init:function(){
        this.fontAutoFun();
        var that=this;
        window.addEventListener('resize',that.fontAutoFun)
    }
}
fontAuto.init()