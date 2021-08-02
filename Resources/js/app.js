
var BlankData = [
    {
        regresoActividadesPresenciales: "",
        fechaRetorno: "",
        tipoModelo: "",
        reincorporacionVoluntaria: "",
        reincorporacionGradual: "",
        docentesVacunados: "",
        alumnosVacunados: "",
        nombreEstrategia: "",
        actividadesPresenciales: "",
        aforosFiltrosSanitarios: "",
        color: "rgba(0, 24, 75, 1)"
    }
]

// Sin información
// rgba(200, 200, 200, 1)

// Si regresan
// rgba(0, 24, 75, 1)

// Por definir o pendiente de confirmación regreso presencial
// rgba(255, 165, 0, 1)

var DataStates = [
    {
        id: "MX-BCS",
        name: "Baja California Sur",
        regresoActividadesPresenciales: "Aún pendiente de confirmar",
        fechaRetorno: "Se iniciaría en el ciclo 2021-2022",
        tipoModelo: "No disponible",
        reincorporacionVoluntaria: "info",
        reincorporacionGradual: "info",
        docentesVacunados: "info",
        alumnosVacunados: "info",
        nombreEstrategia: "No disponible",
        actividadesPresenciales: "Solo se han emitido lineamientos para trabajadores de la Secretaría estataal y su incorporación a labores presenciales.",
        aforosFiltrosSanitarios: "No disponible",
        color: "rgba(255, 165, 0, 1)"
    },
    {
        id: "MX-BCN",
        name: "Baja California Norte",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "Ciclo Escolar 2021-2022",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "check",
        reincorporacionGradual: "check",
        docentesVacunados: "check",
        alumnosVacunados: "close",
        nombreEstrategia: "ESTRATEGIA PARA EL REGRESO SEGURO A CLASES PRESENCIALES EN BAJA CALIFORNIA CICLO ESCOLAR 2021-2022",
        actividadesPresenciales: "Se contemplan 6 estrategias pedagógicas para fortalecer el trabajo y la organización académica con los estudiantes:" +
                                 "<ol>"+
                                    "<li> Estrategias de aprendizaje e innovaciones pedagógicas. </li>"+
                                    "<li> Recuperación de aprendizajes. </li>"+
                                    "<li> Prevención de abandono escolar y mecanismo de retención. </li>"+
                                    "<li> Personal docente. </li>"+
                                    "<li> Corresponsabilidad. </li>"+
                                    "<li> Participación de las y los estudiantes. </li>"+
                                 "</ol>",
        aforosFiltrosSanitarios: "Se ciontempla la asistencia de 10 personas por aula y con distancia de 1.8m,  así como las medidas sanitarias incentivadas desde el inicio de la pandemia y sanitización de los espacios escolares.",
        color: "rgba(0, 24, 75, 1)"
    },
    {
        id: "MX-SON",
        name: "Sonora",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 agosto en EB y EMS",
        tipoModelo: "Sin información",
        reincorporacionVoluntaria: "check",
        reincorporacionGradual: "check",
        docentesVacunados: "check",
        alumnosVacunados: "close",
        nombreEstrategia: "Sin información",
        actividadesPresenciales: "",
        aforosFiltrosSanitarios: "Ante el aumento de contagios y el registro de estas variantes del coronavirus, la gobernadora Pavlovich instó a seguir con las acciones y programas de prevención, para seguir con las medidas y protocolos sanitarios rigurosos",
        color: "rgba(200, 200, 200, 1)"
    },
    {
        id: "MX-CHH",
        name: "Chihuahua",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "Tentativamente el próximo 30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "check",
        reincorporacionGradual: "check",
        docentesVacunados: "check",
        alumnosVacunados: "close",
        nombreEstrategia: "No disponible",
        actividadesPresenciales: "No disponible",
        aforosFiltrosSanitarios: "No disponible",
        color: "rgba(0, 24, 75, 1)"
    },
    {
        id: "MX-COA",
        name: "Coahuila",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "23 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "check",
        reincorporacionGradual: "check",
        docentesVacunados: "check",
        alumnosVacunados: "close",
        nombreEstrategia: "No disponible",
        actividadesPresenciales: "No disponible",
        aforosFiltrosSanitarios: "Se pretende la incorporación de 4 filtros sanitaias, la desinfección de espacios y la corresponsabilidad de  las familias, aplicación del uso obligatorio de cubrebocas y la sana distancia",
        color: "rgba(0, 24, 75, 1)"
    },
    {
        id: "MX-NLE",
        name: "Nuevo León",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "check",
        reincorporacionGradual: "check",
        docentesVacunados: "check",
        alumnosVacunados: "close",
        nombreEstrategia: "No disponible",
        actividadesPresenciales: "<br>Comunicados oficiales indican encuentrarse listos para este regreso a clases, y la modalidad dependerá del comportamiento del semáforo ante el Covid-19 y las indicaciones que emita la Secretaría de Salud. Indican iniciar el ciclo escolar el 30 de agosto, sin embargo no han definido la  modalidad. <br><br> El comunicado oficial (17 de junio de 2021) de la Cooridnación general de comunicación social de NL, indica que la reactivación educativa en colegios y escuelas de 25 municipios rurales de NL. ''No es regreso a clases (presenciales), es regreso a actividades escolares para que el maestro vaya adaptandose, vea que su escuela está en condiciones'' <br><br>",
        aforosFiltrosSanitarios: "La asistencia será de forma híbrida, en el que las aulas estarán a un 30% de su capacidad y los alumnos pueden seguir las clases a distancia.",
        color: "rgba(255, 165, 0, 1)"
    },
    {
        id: "MX-TAM",
        name: "Tamaulipas",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "Sin información",
        tipoModelo: "Sin información",
        reincorporacionVoluntaria: "check",
        reincorporacionGradual: "check",
        docentesVacunados: "check",
        alumnosVacunados: "close",
        nombreEstrategia: "Jornada Presencial de Regularización, fase 2",
        actividadesPresenciales: "Sin información",
        aforosFiltrosSanitarios: "Están por arrancar un pilotaje denominado Jornada Presencial de Regularización, fase 2. El regreso a las aulas será en los municipios donde se tenga semáforo verde",
        color: "rgba(0, 24, 75, 1)"
    },
    {
        id: "MX-SIN",
        name: "Sinaloa",
        regresoActividadesPresenciales: "Sin información",
        fechaRetorno: "30 agosto en EB y EMS",
        tipoModelo: "Sin información",
        reincorporacionVoluntaria: "check",
        reincorporacionGradual: "check",
        docentesVacunados: "check",
        alumnosVacunados: "close",
        nombreEstrategia: "Sin información",
        actividadesPresenciales: "En Sinaloa existen elementos para un regreso a clases gradual y focalizado, además de seguro para las niñas, niños y jóvenes, de acuerdo a la instrucción del gobernador Quirino Ordaz Coppel, quien fue reconocido por el presidente de la República, Andrés Manuel López Obrador, como el primer mandatario que solicitó la vacunación a las y los maestros del país para un regreso seguro a las escuelas.",
        aforosFiltrosSanitarios: "Regreso a las aulas en Sinaloa deberá atender condiciones de cada comunidad. Regreso a clases en Sinaloa será de forma gradual, focalizado y seguro. Experiencia previa de 955 Centros Comunitarios de Aprendizaje, donde se atendió a 26 mil 26 alumnos con rezago educativo. El congreso del Estado tiene la postura de “Estamos ansiosos porque los estudiantes regresen, pero la tercera ola de contagios es alarmante, ante este panorama es necesario que las autoridades actúen con prudencia: no hay condiciones del regreso seguro a las aulas”",
        color: "rgba(200, 200, 200, 1)"
    },
    {
        id: "MX-DUR",
        name: "Durango",
        regresoActividadesPresenciales: "Ciclo Escolar 2021-2022",
        fechaRetorno: "Tentativamente el próximo 30 de agosto",
        tipoModelo: "No disponible",
        reincorporacionVoluntaria: "info",
        reincorporacionGradual: "info",
        docentesVacunados: "check",
        alumnosVacunados: "close",
        nombreEstrategia: "No disponible",
        actividadesPresenciales: "La Secretaría de Educación del Estado de Durango (SEED), todavía no tiene definido si el regreso a clases será presencial, virtual o híbrido, primero podría darse a conocer el calendario escolar.",
        aforosFiltrosSanitarios: "No disponible",
        color: "rgba(0, 24, 75, 1)"
    },
    {
        id: "MX-ZAC",
        name: "Zacatecas",
        regresoActividadesPresenciales: "Si, EB y EMS",
        fechaRetorno: "30 agosto en EB y EMS",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "check",
        reincorporacionGradual: "check",
        docentesVacunados: "check",
        alumnosVacunados: "close",
        nombreEstrategia: "Sin información",
        actividadesPresenciales: "Sin información",
        aforosFiltrosSanitarios: "Aún no se puede fijar la postura, hasta conocer las condiciones del semáforo epidemiológico y el lineamiento federal. Hicieron una encuesta a padres de familia, de cada 10, 7 están en contra del regreso y 3 a favor. LA UAZ hará encuesta de movilidad y convivencia, “ya se tienen claros los protocolos de seguridad, de sanitización para todos los espacios, solo veremos si será escalonado, de acuerdo a los espacios o por nivel educativo, sin embargo, la decisión se tomará en agosto",
        color: "rgba(0, 24, 75, 1)"
    },
    {
        id: "MX-SLP",
        name: "San Luis Potosí",
        regresoActividadesPresenciales: "Sin información",
        fechaRetorno: "30 agosto en EB y EMS",
        tipoModelo: "Sin información",
        reincorporacionVoluntaria: "info",
        reincorporacionGradual: "check",
        docentesVacunados: "check",
        alumnosVacunados: "close",
        nombreEstrategia: "Sin información",
        actividadesPresenciales: "La autoridad educativa federal dará a conocer información para el regreso a clases y en reunión de CONAEDU",
        aforosFiltrosSanitarios: "No habrá regreso a clases presenciales durante el mes de agosto, además recordó que para el regreso a clases presenciales, cuando existan las condiciones sanitarias, se aplicarán nueve intervenciones o medidas para asegurar el bienestar de la comunidad escolar. <br><br> Hubo una reapertura del 15% de escuelas en junio. El saldo fueron dos casos de contagios en docentes y nueve alumnos",
        color: "rgba(0, 24, 75, 1)"
    },
    {
        id: "MX-NAY",
        name: "Nayarit",
        regresoActividadesPresenciales: "Por definir",
        fechaRetorno: "Por definir",
        tipoModelo: "NA",
        reincorporacionVoluntaria: "check",
        reincorporacionGradual: "check",
        docentesVacunados: "check",
        alumnosVacunados: "close",
        nombreEstrategia: "NA",
        actividadesPresenciales: "El ‘Verano Divertido’ iniciará el lunes 8 de junio y terminará el 7 de agosto, y se está considerando que el 10 de agosto sea el regreso a clases para educación básica, que comprende los niveles de educación inicial, preescolar, primaria, secundaria y telesecundaria, siempre y cuando existan las condiciones sanitarias y que Nayarit se encuentre en verde del llamado semáforo epidemiológico.",
        aforosFiltrosSanitarios: "NA",
        color: "rgba(255, 165, 0, 1)"
    },
    {
        id: "MX-JAL",
        name: "Jalisco",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de Agosto 2021",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "check",
        reincorporacionGradual: "check",
        docentesVacunados: "check",
        alumnosVacunados: "close",
        nombreEstrategia: "Modelo hibrido y opcional de regreso a clases-Regreso a clases presenciales",
        actividadesPresenciales: "Gobierno estatal anunció que el regreso a las aulas en educación básica será el próximo 30 de agosto, a través de un modelo híbrido y opcional para las familias, que permitirá tener clases presenciales, mientras que en educación media superior y superior se regresará a distancia en agosto y en septiembre de manera presencial; la Universidad de Guadalajara comenzará su ciclo escolar 2021-B de forma virtual el 10 de agosto y será a finales de este mes cuando analice la posibilidad de iniciar la fase presencial el 15 de septiembre. <br><br>El regreso a clases será presencial, pero las familias de los estudiantes decidirán si envían o no a sus hijas o hijos a la escuela  <br>Jalisco solicitará a la federación reforzar la vacunación en el AMG en jóvenes de 15 a 30 años, quienes forman parte de la educación media y media superior. <br><br>Por otro lado, indican estar sujetos al semaforo epidemiológico",
        aforosFiltrosSanitarios: "Elas principales acciones son el uso del cubrebocas es obligatorio para todos los niveles y sana distancia. <br> <br> Por otro lado, se emiten protocolos detallados para todos los niveles y actividades: <br> <br> Protocolo de acción ante COVID-19 para Grupos de Seguimiento Académico, Trámites presenciales y Entrega de materiales educativos aplicable a Educación Básica, Media Superior y Superior Docente <br> <br> Protocolo de actuación ante COVID-19 Sector Educativo para Actos Académicos Presenciales en escuelas de Educación Básica de la Secretaría de Educación del Estado de Jalisco. <br> <br> Protocolo de acción ante COVID-19 Para centros de formación para el trabajo, educación continua y academias. <br> <br> Protocolo de actuación ante COVID-19 Sector Educativo para la realización de exámenes presenciales del Sistema de Preparatoria Abierta. <br> <br> Protocolo de actuación ante COVID-19 Sector Educativo para la atención de actividades esenciales en Educación Media Superior. <br> <br> Protocolo de Acción ante COVID-19 para realizar Educación Física en los planteles escolares",
        color: "rgba(0, 24, 75, 1)"
    },
    {
        id: "MX-AGU",
        name: "Aguascalientes",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "7 Junio de 2021",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "check",
        reincorporacionGradual: "check",
        docentesVacunados: "check",
        alumnosVacunados: "close",
        nombreEstrategia: "Me sumo a un regreso seguro",
        actividadesPresenciales: "La atención a alumnas y alumnos está centrada en el aspecto socioemocional, así como en la regularización académica y la adquisición de aprendizajes esperados. Se van integrndo escuelas de forma gradual por semana.",
        aforosFiltrosSanitarios: "Se implememtaron 9 Intervenciones en torno al cuidado de la salud: Activación de comités d eparticipación de salud, garantizar acceso a agua y jabón, cubrebocas oblugatorio, sana distancia, uso de espacios abiertos, suspensión de ceremonias o reuniones, apoyo socioemocional y detección temprana. Asimismo, se aplican 3 filtros sanitarios.",
        color: "rgba(0, 24, 75, 1)"
    },
    {
        id: "MX-GUA",
        name: "Guanajuato",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "check",
        reincorporacionGradual: "check",
        docentesVacunados: "check",
        alumnosVacunados: "close",
        nombreEstrategia: "Guanajuato educado con R de Reactivación. <br> Regreso a las aulas.",
        actividadesPresenciales: "El estado implemento ejercicio piloto ''regreso a las aulas'' , bajo esta experiencia se prevee continuar con un retorno presencial el proximo ciclo",
        aforosFiltrosSanitarios: "Cuenta con protocolos y guias de salud para el regreso a la escuela (Básica, Media superior y superior), las cuales incluyen: uso obligatorio de cubrebocas, 4 filtros sanitarios , sana distancia, Limpieza de areas y mobiliario, grupos reducidos",
        color: "rgba(0, 24, 75, 1)"
    },
    {
        id: "MX-QUE",
        name: "Querétaro",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 agosto en EB y EMS",
        tipoModelo: "Normal",
        reincorporacionVoluntaria: "check",
        reincorporacionGradual: "check",
        docentesVacunados: "check",
        alumnosVacunados: "close",
        nombreEstrategia: "Programa Especial de Regreso a Clases",
        actividadesPresenciales: "La UAQ no regresará en presencial de manera voluntaria, a través de una convocatoria.",
        aforosFiltrosSanitarios: "Sin información",
        color: "rgba(0, 24, 75, 1)"
    },
    {
        id: "MX-HID",
        name: "Hidalgo",
        regresoActividadesPresenciales: "",
        fechaRetorno: "",
        tipoModelo: "",
        reincorporacionVoluntaria: "",
        reincorporacionGradual: "",
        docentesVacunados: "",
        alumnosVacunados: "",
        nombreEstrategia: "",
        actividadesPresenciales: "",
        aforosFiltrosSanitarios: "",
        color: "rgba(0, 24, 75, 1)"
    },
    {
        id: "MX-COL",
        name: "Colima"
    },
    {
        id: "MX-MIC",
        name: "Michoacán"
    },
    {
        id: "MX-VER",
        name: "Veracruz"
    },
    {
        id: "MX-PUE",
        name: "Puebla"
    },
    {
        id: "MX-TLA",
        name: "Tlaxcala"
    },
    {
        id: "MX-MEX",
        name: "Estado de México"
    },
    {
        id: "MX-CMX",
        name: "Ciudad de México"
    },
    {
        id: "MX-MOR",
        name: "Morelos"
    },
    {
        id: "MX-GRO",
        name: "Guerrero"
    },
    {
        id: "MX-OAX",
        name: "Oaxaca"
    },
    {
        id: "MX-TAB",
        name: "Tabasco"
    },
    {
        id: "MX-CHP",
        name: "Chiapas"
    },  
    {
        id: "MX-CAM",
        name: "Campeche"
    },
    {
        id: "MX-YUC",
        name: "Yucatán"
    },
    {
        id: "MX-ROO",
        name: "Quintana Roo"
    },
];

$(document).ready(function(){
    $('.modal').modal();
    $('.tooltipped').tooltip();
});

var chart = am4core.create("map", am4maps.MapChart);

// Set map definition
chart.geodata = am4geodata_mexicoLow;

// Set projection
chart.projection = new am4maps.projections.Miller();

// Create map polygon series
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
polygonSeries.useGeodata = true;
polygonSeries.data = DataStates;

// Configure series
var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}";
polygonTemplate.stroke = am4core.color("rgba(150, 150, 150, 1)");
polygonTemplate.propertyFields.fill = "color";

// Capturamos el evento "click" sobre un país
polygonTemplate.events.on("hit", function(ev) {
    var data = ev.target.dataItem.dataContext;
    var innerHTML = data.name + " (" + data.id  + ")";
    console.log(innerHTML);

    for(var i=0; i<DataStates.length; i++){
        var DataActualState;

        if( DataStates[i].id === data.id )
            DataActualState = DataStates[i];
    }

    console.log(  );
/*
    icon-color-close / icon-color-check / icon-color-info
    close          / check            / info

    <i class='small material-icons'>check</i>
    <i class='material-icons tooltipped' data-position='bottom' data-tooltip='Sin información'>info</i>
*/

    $('.country-name').text(DataActualState.name);
    $('.fechaRetorno').html(DataActualState.fechaRetorno);
    $('.tipoModelo').text(DataActualState.tipoModelo);
    $('.nombreEstrategia').html("<br>"+DataActualState.nombreEstrategia+"<br><br>");
    $('.actividadesPresenciales').html("<br>"+DataActualState.actividadesPresenciales+"<br><br>");
    $('.aforosFiltrosSanitarios').html("<br>"+DataActualState.aforosFiltrosSanitarios+"<br><br>");

    $('.reincorporacionVoluntaria').html("<i class='small material-icons icon-color-"+DataActualState.reincorporacionVoluntaria+"'>"+DataActualState.reincorporacionVoluntaria+"</i>");
    $('.reincorporacionGradual   ').html("<i class='small material-icons icon-color-"+DataActualState.reincorporacionGradual+"'>"+DataActualState.reincorporacionGradual+"</i>");
    $('.docentesVacunados        ').html("<i class='small material-icons icon-color-"+DataActualState.docentesVacunados+"'>"+DataActualState.docentesVacunados+"</i>");
    $('.alumnosVacunados         ').html("<i class='small material-icons icon-color-"+DataActualState.alumnosVacunados+"'>"+DataActualState.alumnosVacunados+"</i>");

    $('#ShowStateInformation').modal('open');
/*
    }else{
        $('.country-name').text(DataActualState.name);
        $('.regresoActividadesPresenciales').html("<strong>Regreso a actividades presenciales:</strong> <br> " + DataActualState.regresoActividadesPresenciales);
        $('.fechaRetorno').html("<strong>Fecha Retorno:</strong> <br> " + DataActualState.fechaRetorno);
        $('.actividadesPresenciales').html("<strong>Actividades presenciales:</strong> <br> " + DataActualState.actividadesPresenciales);

        $('#ShowStateNoInformation').modal('open');
    }
*/
});

// Zoom control
chart.zoomControl = new am4maps.ZoomControl();

var homeButton = new am4core.Button();
homeButton.events.on("hit", function() {
    chart.goHome();
});

homeButton.icon = new am4core.Sprite();
homeButton.padding(7, 5, 7, 5);
homeButton.width = 30;
homeButton.icon.path =
  "M16,8 L14,8 L14,16 L10,16 L10,10 L6,10 L6,16 L2,16 L2,8 L0,8 L8,0 L16,8 Z M16,8";
homeButton.marginBottom = 10;
homeButton.parent = chart.zoomControl;
homeButton.insertBefore(chart.zoomControl.plusButton);
chart.zoomStep = 2;
chart.zoomControl.slider.height = 100;




