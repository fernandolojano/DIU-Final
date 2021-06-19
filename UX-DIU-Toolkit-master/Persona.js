/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit v1.0 2019    */                        
/*          ver 1.1 26/Feb/2020            */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
        $scope.Grupo_ID ="Fernando Lojano";
        $scope.Curso ="2020/21";
        $scope.Github_ID ="https://github.com/fernandolojano/DIU-Final";
        
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Antonio Palacios",
				Photo: "antonio.jpg",
				Quote: "El mayor enemigo del conocimiento no es la ignorancia, sino la ilusión del conocimiento",
				Age: 45,
				Occupation: "Asistente telefónico de una compañía telefónica (A distancia)",
				Family: "Soltero e independizado completamente de su familia",
				Location: "Granada (Granada",
				Character: "Curioso, Trabajador, Realista",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 2 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 1 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 1 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 5 }
				], 
				Goals: ["Lectura tranquila", "Informarse sobre posibles eventos a los que asistir ", "Desconectar del trabajo"],
				Frustrations: ["Está cansado de estar encerrado en casa", "No quiere perder demasiado tiempo realizando búsquedas"],
				Bio: "Es un hombre soltero, reservado y curioso y con ganas de conocer nuevas facetas sobre su lugar de residencia, Granada. Para desconectar de su trabajo le gusta asistir a eventos de visitas guiadas, en los cuales puede realizar un poco de actividad física caminando a la vez que aprende nueva información sobre el lugar que está visitando. No obstante, tiene cierto reparo al asistir a esos eventos pues no es muy sociable y siempre se presenta sólo a estas visitas. ",
				Tech: [
					{ Name: "TIC/Internet", Value: 5 },
					{ Name: "Movil", Value: 5 },
					{ Name: "RRSS", Value: 3 },
					{ Name: "Software", Value: 2 }
					
				], 
                Contextos: "Su curiosidad por descubir nuevos datos sobre aquellos lugares que no conoce demasiado bien junto con la posibilidad de salir a la calle a despejarse despues de trabajar se imponen ante su personalidad tímida y reservada.",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 5 },
					{ Name: "Online & Social Media", Value: 4 },
					{ Name: "Recomendaciones & sugerencias", Value: 1 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 1 }
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "Andrea Guelluy",
				Photo: "andrea.jpg",
				Quote: "Cada pequeña acción te lleva a algún lugar.",
				Age: 22,
				Occupation: "Marketing y comunicación digital",
				Family: "Vive con su pareja actual, ambos independientes de sus respectivas familias",
				Location: "Nîmes (Francia)",
				Character: "Atrevida, divertida, inteligente",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 5 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 1 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 5 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 5 }
				], 
				Goals: ["Viajar", "Descubrir nuevos lugares increíbles", "Añadir nuevas entradas en su blog de viajes"],
				Frustrations: ["La información que pretende buscar está en un idioma que no conoce", "Trabaja a distancia por lo que sale muy poco de casa y le cuesta desconectar del trabajo"],
				Bio: "Es una chica extrovertida con ganas de conocer y visitar todos los lugares que pueda. Se encuentra saturada con su trabajo pues debido a que trabaja desde casa le cuesta desconectar completamente de él. Sus vacaciones se darán pronto y está deseando ir de turismo con su pareja .",
				Tech: [
					{ Name: "TIC/Internet", Value: 5 },
					{ Name: "Mobile", Value: 5 },
					{ Name: "RRSS", Value: 5 },
					{ Name: "Software", Value: 3 }
					
				], 
                Contextos:   "Ha reservado un viaje a Granada para sus vacaciones y busca actividades que pueda realizar con su pareja tales como visitas guiadas, conciertos, etc." ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 2 },
					{ Name: "Online & Social Media", Value: 5 },
					{ Name: "Recomendaciones & sugerencias", Value: 2 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 5 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])