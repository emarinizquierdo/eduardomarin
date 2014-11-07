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

        return _Utils;
    }]);
