'use strict';

angular.module('eduardomarinFsApp')
.service('Lang', [function Flickr() {

	var that = this;

	that.dictionary = {
	    
	    "es" : {
	    	"MAIN" : {
	    		  "MESSAGE_01" : "Desarrollador Web Front-End"
	    		, "MESSAGE_02" : "Caminando hacia 'FullStack' ;-)"
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
	    		, "DESCRIPTION_01" : "Uso de los avances y ventajas de la quinta revisión del estándar de referencia para la elaboración de páginas web"
	    		, "DESCRIPTION_02" : "Parte fundamental en mis desarrollos. Es la base funcional de las aplicaciones, tanto front como, poco a poco, en la parte back."
	    		, "DESCRIPTION_03" : "Agilizando el proceso de desarrollo, y sirviendo de base a un modelo 'MVC', uso intensivo de este framework"
	    		, "DESCRIPTION_04" : "Uso experto de CSS3 para generar el 'look and feel', atractivas animaciones, y aquellas ventajas que ofrece su nueva versión"
	    		, "DESCRIPTION_05" : "Alto conocimiento de este framework que nos permite un rápido desarrollo de aplicaciones con elementos comunes bien maquetados"
	    		, "DESCRIPTION_06" : "Otra tecnología que utilizo día a día, tanto para el scaffolding, como para despliegues y soporte back"
	    		, "DESCRIPTION_07" : "Adentrándome más y más en el concepto 'fullstack', esta tecnología es mi preferida para el almacenamiento de datos"
	    		, "DESCRIPTION_08" : "Apoyado en NodeJS, este framework de ejecución de tareas automáticas javascript es mi navaja suiza en muchas fases"
	    		, "DESCRIPTION_09" : "Fantástico framework de 'scaffolding' con una gran librería de generadores para multitud de aplicaciones y plataformas"
	    		, "DESCRIPTION_10" : "Junto con Yeoman, este gestor de dependencias o librerías, hace que la inclusión de las mismas sea tarea fácil"
	    		, "DESCRIPTION_11" : "De forma profesional, ésta es la plataforma que utilizo día a día para desplegar versiones de aplicación en 'la nube'"
	    		, "DESCRIPTION_12" : "Por otra parte, esta tecnología es la que utilizo en mis proyectos personales para los despliegues de aplicación, también en 'la nube'"
	    	},
	    	"PROJECTS" : {
	    		  "MAIN" : "Proyectos personales"
	    		, "TITLE_01" : "Dubi Duba tienda de ropa"
	    		, "TITLE_02" : "Generador de cuentos digitales para niños online"
	    		, "TITLE_03" : "Arduino - Google Calendar - Reserva de Salas"
	    		, "TITLE_04" : "SACAR - Road Alert System"
	    		, "TITLE_05" : "Bootstrap"
	    		, "TITLE_06" : "NodeJS"
	    		, "TITLE_07" : "MongoDB"
	    		, "TITLE_08" : "Grunt"
	    		, "TITLE_09" : "Yeoman"
	    		, "TITLE_10" : "Bower"
	    		, "TITLE_11" : "Google App Engine"
	    		, "TITLE_12" : "Open Shift"
	    		, "DESCRIPTION_01" : "Tienda online de ropa basada en NodeJS, AngularJS y MongoDB usando API PayPal y API Flickr."
	    		, "DESCRIPTION_02" : "Aplicación para generar una base XML de animación de cuentos para niños soportada por un lector de cuentos digitales. Uso de canvas, GAE, Datastore, Kendo, jQuery..."
	    		, "DESCRIPTION_03" : "Desarrollo de un prototipo 'Internet of Things' basado en ARDUINO, GAE, Google Calendar Api, detector presencial, que permitía conocer disponibilidad de salas de reunión mediante este dispositivo."
	    		, "DESCRIPTION_04" : "Desarrollo de un sistema de alertas en carretera basado en redes de comunicación V2V LR-WPAN (low-rate wireless personal area network) bajo el protocolo 802.15.4 y plataforma ARDUINO."
	    		, "DESCRIPTION_05" : "Bootstrap"
	    		, "DESCRIPTION_06" : "NodeJS"
	    		, "DESCRIPTION_07" : "MongoDB"
	    		, "DESCRIPTION_08" : "Grunt"
	    		, "DESCRIPTION_09" : "Yeoman"
	    		, "DESCRIPTION_10" : "Bower"
	    		, "DESCRIPTION_11" : "Google App Engine"
	    		, "DESCRIPTION_12" : "Open Shift"
	    	},
	    	"CONTACT" : {
	    		  "CONTACTME" : "¿Quieres contactarme?"
	    		, "LETSGO" : "Vamos!"
	    	},
	    	"CURRICULUM" : {
	    		  "EXPERIENCE" : "Experiencia"
	    		, "EXPERIENCE_01" : "Intelygenz"
	    		, "EXPERIENCE_02" : "N&C Advertising"
	    		, "EXPERIENCE_03" : "Universidad de Alcalá"
	    		, "EXPERIENCE_DESCRIPTION_01" : "Front End Web Applications Developer"
	    		, "EXPERIENCE_DESCRIPTION_02" : "Web Developer"
	    		, "EXPERIENCE_DESCRIPTION_03" : "Technical support, Dpto de Geografía"
	    		, "EXPERIENCE_DATE_01" : "septiembre de 2011 – Actualidad (2 años 11 meses)"
	    		, "EXPERIENCE_DATE_02" : "septiembre de 2010 – agosto de 2011 (1 año)"
	    		, "EXPERIENCE_DATE_03" : "junio de 2008 – junio de 2009 (1 año 1 mes)"
	    		, "DESCRIPTION_01" : "Construcción de aplicaciones web para importante cliente del sector bancario.<br/>Gran responsabilidad con el producto a entregar. Esto implica aplicar fases de toma de requisitos con el cliente, puestas en común de soluciones, análisis de las mismas, uso de metodologías ágiles y aplicación de métodos de seguimiento de producto (SCRUM), compromiso con las fechas de entrega y estimación inicial de costes en tiempo.<br/><br/>En cuanto al conocimiento y experiencia en desarrollo, javascript es el principal lenguaje de programación a aplicar para el desarrollo de las aplicaciones. El despliegue del producto se realiza sobre tecnología GOOGLE APP ENGINE, lo cual exige conocer sus limitaciones, API's, particularidades, a nivel front y back.<br/><br/>El desarrollo se realiza bajo versionado (SVN - GIT). Como frameworks front, actualmente trabajando con ANGULARJS. Experimentando con el concepto de widget bajo esa tecnología, encapsulando funcionalidad, estilos, imágenes y estructura bajo un único js. Previamente uso de otros frameworks front 'IRIS' (experto), JQUERY (experto), kendo...<br/><br/>En busca de mejora de productividad y unificación de soluciones, de cara a todos los grupos de trabajo, formo parte del proyecto de búsqueda de líneas de mejora, e investigación de soluciones.<br/><br/>En este sentido, el proceso de 'scaffolding' o prototipado rápido hacia los equipos de trabajo me ha permitido trabajar con herramientas como YEOMAN. Junto con GRUNT y BOWER, he realizado diferentes generadores de aplicaciones FRONT 'semilla' basadas en ANGULARJS. En este sentido, aplico altos conocimientos sobre NODEJS, y procesos automatizados de despliegue (minimizado, concatenado, procesado, appcache...)<br/><br/>Todo esto, disfrutando del trabajo en equipo, de las personas ;-)"
				, "DESCRIPTION_02" : ""
				, "DESCRIPTION_03" : ""
			},
			"FOOTER" : {
				  "QUESTION" : "¿Quieres que te envíe mi CV? Déjame tu e-mail"
				, "NOWORRY" : "Prometo no enviarte spam"
			}
	    },
	    "en" : {
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
	    	},
	    	"CONTACT" : {
				  "CONTACTME" : "Do you want to contact me?"
	    		, "LETSGO" : "Lets go!!"
	    	},
	    	"CURRICULUM" : {
	    		  "EXPERIENCE" : "Experiencia"
	    		, "EXPERIENCE_01" : "Intelygenz"
	    		, "EXPERIENCE_02" : "N&C Advertising"
	    		, "EXPERIENCE_03" : "Universidad de Alcalá"
	    		, "EXPERIENCE_DESCRIPTION_01" : "Front End Web Applications Developer"
	    		, "EXPERIENCE_DESCRIPTION_02" : "Web Developer"
	    		, "EXPERIENCE_DESCRIPTION_03" : "Technical support, Dpto de Geografía"
	    		, "EXPERIENCE_DATE_01" : "septiembre de 2011 – Actualidad (2 años 11 meses)"
	    		, "EXPERIENCE_DATE_02" : "septiembre de 2010 – agosto de 2011 (1 año)"
	    		, "EXPERIENCE_DATE_03" : "junio de 2008 – junio de 2009 (1 año 1 mes)"
	    		, "DESCRIPTION_01" : "I work as web application developer for an important bank company in Spain.<br/><br/>I am very responsible with the product to deliver. It means we have to apply several phases to the application building. We meet with the customer to collect right requirements and talk about diferent soluctions, and to analyze them. We use agile methods (SCRUM) to be sure that the product is following that requirements and we are always under deadline delivery. About my developer knowledge and experience, javascript is the main programation language I often use to apply in our applications. The product deploy is made over GOOGLE APP ENGINE technologies and we have to know its limitations, API's. We work with version control (SVN - GIT) and ANGULARJS framework. Now, I am testing with 'DIV' widget concept under that tecnology, encapsulating functionality, styles, images and structure in a unique 'js' file. I worked with anothers frameworks in the past. IRIS front (expert), JQUERY (expert), kendo, ... Besides working in main projects, I work in a interesting project to improve our productivity and look for a common develop line in our teams. In this way, to enhance the 'scaffolding' process or fast prototyping in the other projects I have worked with YEOMAN, GRUNT and BOWER to build diferent FRONT application generators based in ANGULARJS framework. It requires knowledges of NODEJS, and automatic deploy process (minified, concatenate, process, appcache...). And all of this enyoing my work and the people I share it. ;-)"
				, "DESCRIPTION_02" : ""
				, "DESCRIPTION_03" : ""
			},
			"FOOTER" : {
				  "QUESTION" : "Do you want to I send you my CV by e-mail?"
				, "NOWORRY" : "Ie promise not to spam"
			}
	    } 

    };

    var _navLang = navigator.language
    that.activeLang = (_navLang && ( _navLang == "es" || _navLang == "en") ) ? _navLang : "es";

    that.translate = that.dictionary[that.activeLang];

    return that;

}]);
