/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.1 26/Feb/2020            */
/*******************************************/
    
/****  README:       */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		$scope.Grupo_ID ="DIU2.roadToAndorra";
        $scope.Curso ="2020/21";
        $scope.Github_ID ="https://github.com/GFernando97/DIU21";
        
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Juan García",
                Photo: "Juan.jpg",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere preparar un viaje sorpresa para visitar a sus hijos durante sus vacaciones",
                touch1: "Calendario",
                feel1: "4",
                con1: "Ver qué días son los más adecuados para visitar a sus hijos sin interrumpir su horario de trabajo ",
                ima1: "cartoon-deciding.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Busca en internet alojamiento y qué hacer y qué visitar en Granada",
                touch2: "Ordenador",
                feel2: "3",
                con2: "La información es completa pero el diseño de la página le cansa la vista y le cuesta leer las letra porque el tamñao es muy pequeño",
                ima2: "cartoon-PCangry.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Decide buscar un alojamiento cercano a las casas de sus hijos.",
                touch3: "ordenador",
                feel3: "2",
                con3: "Está preocupado por el tiempo y la eficacia del transporte público (se desplazará en bus)",
                ima3: "cartoon-why.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Los amigos le recomiendan lugares que visitar y establecimientos dónde comer",
                touch4: "ordenador",
                feel4: "4",
                con4: "Busca información sobre los lugares que le han recomendado",
                ima4: "cartoon-PCtyping.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Se encuentra 3 opciones que encajan en sus preferencias",
                touch5: "móvil",
                feel5: "3",
                con5: "",
                ima5: "cartoon-PCSurprised.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Reserva el hotel y prepara las maletas para viajar",
                touch6: "ordenador",
                feel6: "4",
                con6: "Realizó la reserva para unos días concretos con posibilidad de cancelación por si tiene que volver antes",
                ima6: "cartoon-resting.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Gabriella Ricci",
                Photo: "Gabriella.jpg",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere viajar por España y conocer gente nueva",
                touch1: "Móvil",
                feel1: "5",
                con1: "Quiere visitar todos los lugares posibles, pero que estén adaptados para su minusvalía",
                ima1: "cartoon-phone-sitting.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Buscar por su cuenta en Internet páginas web que le inspiren",
                touch2: "Móvil",
                feel2: "3",
                con2: "Hay muchas webs dónde mirar y no sabe cuál escoger",
                ima2: "cartoon-looking.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Encuentra pocas ofertas sobre hoteles adaptados",
                touch3: "Móvil",
                feel3: "1",
                con3: "No encuentra hoteles que sean económicos y adaptados a su minusvalía al mismo tiempo",
                ima3: "cartoon-PCangry.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Su hermana le recomienda un hotel adaptado y barato",
                touch4: "Directo",
                feel4: "4",
                con4: "En las páginas en las que ha buscado información no aparece nada relativo a ese hotel, por lo que no puede guiarse por ningún tipo de reseña que haya escrito alguien anteriormente",
                ima4: "cartoon-speaking.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Busca información sobre el hotel que le ha recomendado su hermana en otras páginas web y aplicaciones móvil ",
                touch5: "Móvil",
                feel5: "3",
                con5: "De nuevo, hay mucha información y no sabe a cual creer",
                ima5: "cartoon-why.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Reserva su estancia en el hotel y está deseando comenzar el viaje",
                touch6: "Ordenador",
                feel6: "3",
                con6: "Se dispone a buscar información sobre que hacer y que lugares visitar en Granada",
                ima6: "cartoon-PChard.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



