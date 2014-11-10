'use strict';

angular.module('eduardomarinFsApp')
    .service('Utils', [function() {

        var _Utils = {};

        _Utils.amigable = function( p_string ) {

            var tildes = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç",
                conver = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc",
                cuerpo = {};

            for (var i = 0, j = tildes.length; i < j; i++) {
                cuerpo[tildes.charAt(i)] = conver.charAt(i);
            }

            var salida = [];

            for (var i = 0, j = p_string.length; i < j; i++) {
                var c = p_string.charAt(i);
                if (cuerpo.hasOwnProperty(p_string.charAt(i))) {
                    salida.push(cuerpo[c]);
                } else {
                    salida.push(c);
                }
            }

            return salida.join('').replace(/[^-A-Za-z0-9]+/g, '-').toLowerCase();

        };

        _Utils.codepen = function(){
                document.getElementsByClassName||(document.getElementsByClassName=function(e){var t,a,n,r=document,s=[];if(r.querySelectorAll)return r.querySelectorAll("."+e);if(r.evaluate)for(a=".//*[contains(concat(' ', @class, ' '), ' "+e+" ')]",t=r.evaluate(a,r,null,0,null);n=t.iterateNext();)s.push(n);else for(t=r.getElementsByTagName("*"),a=new RegExp("(^|\\s)"+e+"(\\s|$)"),n=0;n<t.length;n++)a.test(t[n].className)&&s.push(t[n]);return s});var CodePenEmbed={width:"100%",init:function(){this.showCodePenEmbeds(),this.listenToParentPostMessages()},showCodePenEmbeds:function(){for(var e=document.getElementsByClassName("codepen"),t=e.length-1;t>-1;t--){var a=this._getParamsFromAttributes(e[t]);if(a=this._convertOldDataAttributesToNewDataAttributes(a),a.user=this._findUsernameForURL(a,e[t]),this._paramsHasRequiredAttributes(a)){var n=this._buildURL(a),r=this._buildIFrame(a,n);this._addIFrameToPage(e[t],r)}}},_findUsernameForURL:function(e,t){if("string"==typeof e.user)return e.user;for(var a=0,n=t.children.length;n>a;a++){var r=t.children[a],s=r.href||"",i=s.match(/codepen\.(io|dev)\/(\w+)\/pen\//i);if(i)return i[2]}return"anon"},_paramsHasRequiredAttributes:function(e){return e["slug-hash"]},_getParamsFromAttributes:function(e){for(var t={},a=e.attributes,n=0,r=a.length;r>n;n++){var s=a[n].name;0===s.indexOf("data-")&&(t[s.replace("data-","")]=a[n].value)}return t},_convertOldDataAttributesToNewDataAttributes:function(e){return e.href&&(e["slug-hash"]=e.href),e.type&&(e["default-tab"]=e.type),e.safe&&(e.animations="true"===e.safe?"run":"stop-after-5"),e},_buildURL:function(e){var t=this._getHost(e),a=e.user?e.user:"anon",n="?"+this._getGetParams(e),r=[t,a,"embed",e["slug-hash"]+n].join("/");return r.replace(/\/\//g,"//")},_getHost:function(e){return e.host?this._getSafeHost(e.host):"file:"===document.location.protocol?"http://codepen.io":"//codepen.io"},_getSafeHost:function(e){return e.match(/^\/\//)||!e.match(/http:/)?"http://"+e:e},_getGetParams:function(e){var t="";for(var a in e)""!==t&&(t+="&"),t+=a+"="+encodeURIComponent(e[a]);return t},_buildIFrame:function(e,t){var a="";""!==e["class"]&&(a=e["class"]);var n={id:"cp_embed_"+e["slug-hash"].replace("/","_"),src:t,scrolling:"no",frameborder:"0",height:this._getHeight(e),allowTransparency:"true",allowfullscreen:"true","class":"cp_embed_iframe "+a,style:"width: "+this.width+"; overflow: hidden;"},r="<iframe ";for(var s in n)r+=s+'="'+n[s]+'" ';return r+="></iframe>"},_getHeight:function(e){return e.height?"auto"===e.height?300:e.height:300},_addIFrameToPage:function(e,t){if(e.parentNode){var a=document.createElement("div");a.innerHTML=t,e.parentNode.replaceChild(a,e)}else e.innerHTML=t},listenToParentPostMessages:function(){var eventMethod=window.addEventListener?"addEventListener":"attachEvent",eventListener=window[eventMethod],messageEvent="attachEvent"===eventMethod?"onmessage":"message";eventListener(messageEvent,function(e){try{var dataObj=eval("("+e.data+")"),iframe=document.getElementById("cp_embed_"+dataObj.hash);iframe&&(iframe.height=dataObj.height)}catch(err){}},!1)}};
        }

        return _Utils;
    }]);
