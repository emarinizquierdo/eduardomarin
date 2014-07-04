'use strict';

angular.module('eduardomarinFsApp')
.service('Lang', [function Flickr() {

	var that = this;

	that.dictionary = {
	    
	    "es_ES" : {
	    	"MAIN" : {

	    		  "MESSAGE_01" : "¿Tienes una idea?"
	    		, "MESSAGE_02" : "Yo puedo hacerla realidad!!!"

	    	},
	    	"SKILLS" : {
	    		  "MAIN" : "Mis herramientas"
	    		, "TITLE_01" : "HTML5"
	    		, "TITLE_02" : "Javascript"
	    		, "TITLE_03" : "AngularJS"
	    		, "TITLE_04" : "CSS3"
	    		, "TITLE_05" : "Bootstrap"
	    		, "TITLE_06" : "NodeJS"
	    		, "TITLE_07" : "MongoDB"
	    		, "TITLE_08" : "Grunt"
	    		, "TITLE_09" : "Yeoman"
	    		, "TITLE_10" : "Bower"
	    		, "TITLE_11" : "Google App Engine"
	    		, "TITLE_12" : "Open Shift"
	    		, "DESCRIPTION_01" : "HTML5"
	    		, "DESCRIPTION_02" : "Javascript"
	    		, "DESCRIPTION_03" : "AngularJS"
	    		, "DESCRIPTION_04" : "CSS3"
	    		, "DESCRIPTION_05" : "Bootstrap"
	    		, "DESCRIPTION_06" : "NodeJS"
	    		, "DESCRIPTION_07" : "MongoDB"
	    		, "DESCRIPTION_08" : "Grunt"
	    		, "DESCRIPTION_09" : "Yeoman"
	    		, "DESCRIPTION_10" : "Bower"
	    		, "DESCRIPTION_11" : "Google App Engine"
	    		, "DESCRIPTION_12" : "Open Shift"

	    	},
	    	"PROJECTS" : {
	    		  "MAIN" : "Proyectos personales"
	    		, "TITLE_01" : "Dubi Duba tienda de ropa"
	    		, "TITLE_02" : "Javascript"
	    		, "TITLE_03" : "AngularJS"
	    		, "TITLE_04" : "CSS3"
	    		, "TITLE_05" : "Bootstrap"
	    		, "TITLE_06" : "NodeJS"
	    		, "TITLE_07" : "MongoDB"
	    		, "TITLE_08" : "Grunt"
	    		, "TITLE_09" : "Yeoman"
	    		, "TITLE_10" : "Bower"
	    		, "TITLE_11" : "Google App Engine"
	    		, "TITLE_12" : "Open Shift"
	    		, "DESCRIPTION_01" : "This is an web e-commerce application based in nodeJS, AngularJS and MongoDB with PayPal API and Flickr API integration."
	    		, "DESCRIPTION_02" : "Javascript"
	    		, "DESCRIPTION_03" : "AngularJS"
	    		, "DESCRIPTION_04" : "CSS3"
	    		, "DESCRIPTION_05" : "Bootstrap"
	    		, "DESCRIPTION_06" : "NodeJS"
	    		, "DESCRIPTION_07" : "MongoDB"
	    		, "DESCRIPTION_08" : "Grunt"
	    		, "DESCRIPTION_09" : "Yeoman"
	    		, "DESCRIPTION_10" : "Bower"
	    		, "DESCRIPTION_11" : "Google App Engine"
	    		, "DESCRIPTION_12" : "Open Shift"

	    	}
	    },
	    "en_EN" : {
	    	"MAIN" : {

	    		  "MESSAGE_01" : "Do you have any idea?"
	    		, "MESSAGE_02" : "Then... I can do it reality!!!"

	    	},
	    	"SKILLS" : {

	    		  "MAIN" : "Those are my skills"
	    		, "TITLE_01" : "HTML5"
	    		, "TITLE_02" : "Javascript"
	    		, "TITLE_03" : "AngularJS"
	    		, "TITLE_04" : "CSS3"
	    		, "TITLE_05" : "Bootstrap"
	    		, "TITLE_06" : "NodeJS"
	    		, "TITLE_07" : "MongoDB"
	    		, "TITLE_08" : "Grunt"
	    		, "TITLE_09" : "Yeoman"
	    		, "TITLE_10" : "Bower"
	    		, "TITLE_11" : "Google App Engine"
	    		, "TITLE_12" : "Open Shift"
	    		, "DESCRIPTION_01" : "HTML5"
	    		, "DESCRIPTION_02" : "Javascript"
	    		, "DESCRIPTION_03" : "AngularJS"
	    		, "DESCRIPTION_04" : "CSS3"
	    		, "DESCRIPTION_05" : "Bootstrap"
	    		, "DESCRIPTION_06" : "NodeJS"
	    		, "DESCRIPTION_07" : "MongoDB"
	    		, "DESCRIPTION_08" : "Grunt"
	    		, "DESCRIPTION_09" : "Yeoman"
	    		, "DESCRIPTION_10" : "Bower"
	    		, "DESCRIPTION_11" : "Google App Engine"
	    		, "DESCRIPTION_12" : "Open Shift"

	    	},
	    	"PROJECTS" : {
	    		  "MAIN" : "Personal projects I have done."
	    		, "TITLE_01" : "Dubi Duba web e-commerce application"
	    		, "TITLE_02" : "Javascript"
	    		, "TITLE_03" : "AngularJS"
	    		, "TITLE_04" : "CSS3"
	    		, "TITLE_05" : "Bootstrap"
	    		, "TITLE_06" : "NodeJS"
	    		, "TITLE_07" : "MongoDB"
	    		, "TITLE_08" : "Grunt"
	    		, "TITLE_09" : "Yeoman"
	    		, "TITLE_10" : "Bower"
	    		, "TITLE_11" : "Google App Engine"
	    		, "TITLE_12" : "Open Shift"
	    		, "DESCRIPTION_01" : "HTML5"
	    		, "DESCRIPTION_02" : "Javascript"
	    		, "DESCRIPTION_03" : "AngularJS"
	    		, "DESCRIPTION_04" : "CSS3"
	    		, "DESCRIPTION_05" : "Bootstrap"
	    		, "DESCRIPTION_06" : "NodeJS"
	    		, "DESCRIPTION_07" : "MongoDB"
	    		, "DESCRIPTION_08" : "Grunt"
	    		, "DESCRIPTION_09" : "Yeoman"
	    		, "DESCRIPTION_10" : "Bower"
	    		, "DESCRIPTION_11" : "Google App Engine"
	    		, "DESCRIPTION_12" : "Open Shift"

	    	}
	    } 

    };

    that.activeLang = "es_ES";

    that.translate = that.dictionary[that.activeLang];

    return that;

}]);
