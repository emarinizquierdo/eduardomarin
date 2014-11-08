'use strict';

angular.module('eduardomarinFsApp')
.service('Lang', [function Flickr() {

	var _lang = {};

	_lang.dictionary = {
	    
	    "es" : {
	    	"MAIN" : {
	    		  "MESSAGE_01" : "Desarrollador Web Front-End"
	    		, "MESSAGE_02" : "Caminando hacia 'FullStack' ;-)"
	    	},
	    	"SKILLS" : {
	    		  "MAIN" : "Mis herramientas"
	    	},
	    	"PROJECTS" : {
	    		  "MAIN" : "Proyectos personales"
	    	},
	    	"CONTACT" : {
	    		  "CONTACTME" : "¿Quieres contactarme?"
	    		, "LETSGO" : "Vamos!"
	    	},
	    	"CURRICULUM" : {
	    		  "EXPERIENCE" : "Experiencia"
			},
			"FOOTER" : {
				  "QUESTION" : "¿Quieres que te envíe mi CV? Déjame tu e-mail"
				, "NOWORRY" : "Prometo no enviarte spam"
			},
			"MENU" : {
				  "HOME" : "Home"
				, "SKILLS" : "Skills"
				, "PROJECTS" : "Proyectos"
				, "CONTACT" : "Contacto"
				, "MOREINFO" : "Más Info"
				, "BLOG" : "Blog"
				, "LOGIN" : "Login"
				, "LOGOUT" : "Logout"
				, "ADMIN" : "Admin"
			},
			"BLOG" : {
				  "WHATSNEW" : "Entrada rápida"
				, "VIEWALL" : "Ver todo"
				, "LOADMORE" : "Cargar más"
			},
			"COMMON" : {
				  "DASHBOARD" : "Escritorio"
				, "PROFILE" : "Mi perfil"
				, "BLOG" : "Blog"
				, "POSTS" : "Entradas"
				, "POST" : "Entrada"
				, "COMMENTS" : "Comentarios"
				, "MAIN_IMAGE" : "Imagen de portada"
				, "TAGS" : "Tags"
				, "PUBLISHED" : "Publicada"
				, "MYDASHBOARD" : "Mi escritorio"
				, "EDITPOST" : "Editar entrada"
				, "NEWPOST" : "Nueva entrada"
				, "TITLE" : "Título"
				, "DATE" : "Fecha"
				, "CONTENT" : "Contenido"
				, "SUBMIT" : "Publicar"
				, "SAVE" : "Guardar"
				, "ATENTION" : "Atención"
				, "SURE_DELETE" : "¿Estás seguro que deseas eliminar esa entrada?"
				, "DELETE" : "Eliminar"
				, "CANCEL" : "Cancelar"
			}
			,
			"PROFILE" : {
				"MAIN" : {
				  	  "MAIN" : "Principal"
				  	, "MAIN_TITLE" : "Título principal"
				  	, "SECONDARY_TITLE" : "Título secundario"
				},
				"SKILLS" : {
				  	"MAIN" : "Skills",
				  	"ENTER_SKILL" : "Introduce nueva skill",
				  	"ADD_SKILL" : "Añadir nuevo skill",
				  	"CLICK_TO_EDIT" : "Click para editar",
				  	"LINK" : "Enlace"
				},
				"PROJECTS" : {
				  	"MAIN" : "Proyectos",
				  	"ENTER_PROJECT" : "Introduce nuevo proyecto",
				  	"ADD_PROJECT" : "Añadir nuevo proyecto",
				  	"CLICK_TO_EDIT" : "Click para editar",
				  	"LINK" : "Enlace"
				},
				"EXPERIENCES" : {
				  	"MAIN" : "Experiencias",
				  	"ENTER_EXPERIENCE" : "Introduce nueva experiencia",
				  	"ADD_EXPERIENCE" : "Añadir nueva experiencia",
				  	"COMPANY" : "Compañía",
				  	"JOB" : "Puesto",
				  	"PERIOD" : "Duración",
				  	"DESCRIPTION" : "Descripción",
				  	"CLICK_TO_EDIT" : "Click para editar",
				  	"LINK" : "Enlace"
				}
			}
	    },
	    "en" : {
	    	"MAIN" : {
	    		  "MESSAGE_01" : "Front-End Web Developer"
	    		, "MESSAGE_02" : "Walking to 'FullStack'"
	    	},
	    	"SKILLS" : {
	    		  "MAIN" : "Those are my skills"
	    	},
	    	"PROJECTS" : {
	    		  "MAIN" : "Personal projects I have done."
	    	},
	    	"CONTACT" : {
				  "CONTACTME" : "Do you want to contact me?"
	    		, "LETSGO" : "Lets go!!"
	    	},
	    	"CURRICULUM" : {
	    		  "EXPERIENCE" : "Experiencia"
			},
			"FOOTER" : {
				  "QUESTION" : "Do you want to I send you my CV by e-mail?"
				, "NOWORRY" : "Ie promise not to spam"
			},
			"MENU" : {
				  "HOME" : "Home"
				, "SKILLS" : "Skills"
				, "PROJECTS" : "Projects"
				, "CONTACT" : "Contact"
				, "MOREINFO" : "More info"
				, "BLOG" : "Blog"
				, "LOGIN" : "Login"
				, "LOGOUT" : "Logout"
				, "ADMIN" : "Admin"
			},
			"BLOG" : {
				  "WHATSNEW" : "What's new"
				, "VIEWALL" : "View all"
				, "LOADMORE" : "Load more"
			},
			"COMMON" : {
				  "DASHBOARD" : "Dashboard"
				, "PROFILE" : "My Profile"
				, "BLOG" : "Blog"
				, "POSTS" : "Posts"
				, "POST" : "Post"
				, "COMMENTS" : "Comments"
				, "MAIN_IMAGE" : "Main Image"
				, "TAGS" : "Tags"
				, "PUBLISHED": "Published"
				, "MYDASHBOARD" : "My Dashboard"
				, "EDITPOST" : "Edit post"
				, "NEWPOST" : "New post"
				, "TITLE" : "Title"
				, "DATE" : "Date"
				, "CONTENT" : "Content"
				, "SUBMIT" : "Submit"
				, "SAVE" : "Save"
				, "ATENTION" : "Atention"
				, "SURE_DELETE" : "Are you sure you want to delete this entry?"
				, "DELETE" : "Delete"
				, "CANCEL" : "Cancel"
			},
			"PROFILE" : {
				"MAIN" : {
				  	  "MAIN" : "Principal"
				  	, "MAIN_TITLE" : "Título principal"
				  	, "SECONDARY_TITLE" : "Título secundario"
				},
				"SKILLS" : {
				  	"MAIN" : "Skills",
				  	"ENTER_SKILL" : "Introduce nueva skill",
				  	"ADD_SKILL" : "Añadir nuevo skill",
				  	"CLICK_TO_EDIT" : "Click para editar",
				  	"LINK" : "Enlace"
				},
				"PROJECTS" : {
				  	"MAIN" : "Proyectos",
				  	"ENTER_PROJECT" : "Introduce nuevo proyecto",
				  	"ADD_PROJECT" : "Añadir nuevo proyecto",
				  	"CLICK_TO_EDIT" : "Click para editar",
				  	"LINK" : "Enlace"
				},
				"EXPERIENCES" : {
				  	"MAIN" : "Experiencias",
				  	"ENTER_EXPERIENCE" : "Introduce nueva experiencia",
				  	"ADD_EXPERIENCE" : "Añadir nueva experiencia",
				  	"COMPANY" : "Compañía",
				  	"JOB" : "Puesto",
				  	"PERIOD" : "Duración",
				  	"DESCRIPTION" : "Descripción",
				  	"CLICK_TO_EDIT" : "Click para editar",
				  	"LINK" : "Enlace"
				}
			}
	    } 

    };

    var _navLang = navigator.language
    
    _lang.activeLang = (_navLang && ( _navLang == "es" || _navLang == "en") ) ? _navLang : "es";

    _lang.translate = _lang.dictionary[_lang.activeLang];

    _lang.setActiveLang = function( p_lang ){
    	_lang.activeLang = p_lang;
    	_lang.translate = _lang.dictionary[_lang.activeLang];
    };

    return _lang;

}]);
