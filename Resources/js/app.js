
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
        color: BackColor
    }
]

var BackColor     = "rgba(  0,  24,  75, 1)";
var NoBackColor   = "rgba(255, 165,   0, 1)";
var NoInformation = "rgba(200, 200, 200, 1)";

var DataStates = [
    {
        id: "MX-BCS",
        name: "Baja California Sur",
        regresoActividadesPresenciales: "No",
        fechaRetorno: "Por definir",
        tipoModelo: "A distancia",
        reincorporacionVoluntaria: "check_circle",
        reincorporacionGradual: "check_circle",
        docentesVacunados: "check_circle",
        docentesVacunadosPorcentaje: "78.8",
        alumnosVacunados: "info",
        nombreEstrategia: "No disponible",
        actividadesPresenciales: "Las autoridades educativas de Baja California Sur se han pronunciado al regreso a clases presenciales únicamente cuando el semáforo sanitario se encuentre en color verde. Por lo que aún no se tiene una fecha programada para el regreso presencial. <br><br>La presencialidad será únicamente cuando el semáforo esté en verde.",
        aforosFiltrosSanitarios: "Se capacitaron a los comités participativos de salud escolar, en cada escuela debe de existir un comité de esta naturaleza que se encargará de revisar las condiciones en las cuales se encuentra la escuela, se tendrán algunos filtros y el primero desde luego será la casa, será en el hogar donde se revise la condición de su hijo o hija y tener en claro cuáles son los síntomas COVID, el segundo filtro al entrar a la escuela y el tercero previo a entrar al salón de clases",
        referencias: [
            "https://kidstudia.com/guia/todo-sobre-el-regreso-a-clases-en-mexico/baja-california-sur/",
            "https://www.bcsnoticias.mx/confirmado-baja-california-sur-ya-se-prepara-para-regreso-a-las-aulas-en-agosto-sep/",
            "https://www.elsudcaliforniano.com.mx/local/regreso-a-clases-solo-sera-en-alerta-verde-en-bcs-6987936.html",
            "http://www.bcs.gob.mx/noticias/concluyo-vacunacion-del-personal-educativo-en-bcs/#:~:text=CONCLUY%C3%93%20VACUNACI%C3%93N%20DEL%20PERSONAL%20EDUCATIVO%20EN%20BCS,-La%20Paz%20B.C.S.&text=Con%20la%20aplicaci%C3%B3n%20de%2017,educativo%20de%20Baja%20California%20Sur."
        ],
        color: NoBackColor
    },
    {
        id: "MX-BCN",
        name: "Baja California Norte",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "Ciclo Escolar 2021-2022",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "check_circle",
        reincorporacionGradual: "check_circle",
        docentesVacunados: "check_circle",
        alumnosVacunados: "cancel",
        nombreEstrategia: "ESTRATEGIA PARA EL REGRESO SEGURO A CLASES PRESENCIALES EN BAJA CALIFORNIA CICLO ESCOLAR 2021-2022",
        actividadesPresenciales: "Se contemplan 6 estrategias pedagógicas para fortalecer el trabajo y la organización académica con los estudiantes: <ol><li> Estrategias de aprendizaje e innovaciones pedagógicas. </li><li> Recuperación de aprendizajes. </li><li> Prevención de abandono escolar y mecanismo de retención. </li><li> Personal docente. </li><li> Corresponsabilidad. </li><li> Participación de las y los estudiantes. </li></ol>",
        aforosFiltrosSanitarios: "Se contempla la asistencia de 10 personas por aula y con distancia de 1.8m,  así como las medidas sanitarias incentivadas desde el inicio de la pandemia y sanitización de los espacios escolares.",
        referencias: [
            "http://www.educacionbc.edu.mx/regresoseguro/assets/pdf/estrategiaparaelregresoseguroaclasespresenciales20212022.pdf",
            "http://www.educacionbc.edu.mx/regresoseguro/assets/pdf/protocoloderegresoaclasescapacitacionapersonaldelasescuelas.pdf",
            "http://www.educacionbc.edu.mx/regresoseguro/"
        ],
        color: BackColor
    },
    {
        id: "MX-SON",
        name: "Sonora",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 agosto en EB y EMS",
        tipoModelo: "Sin información",
        reincorporacionVoluntaria: "check_circle",
        reincorporacionGradual: "check_circle",
        docentesVacunados: "check_circle",
        alumnosVacunados: "cancel",
        nombreEstrategia: "Sin información",
        actividadesPresenciales: "Sin información",
        aforosFiltrosSanitarios: "Ante el aumento de contagios y el registro de estas variantes del coronavirus, la gobernadora Pavlovich instó a seguir con las acciones y programas de prevención, para seguir con las medidas y protocolos sanitarios rigurosos",
        referencias: [
            "http://www.sec.gob.mx/portal/index.php?op=nota&p=1033"
        ],
        color: NoInformation
    },
    {
        id: "MX-CHH",
        name: "Chihuahua",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "cancel",
        reincorporacionGradual: "check_circle",
        docentesVacunados: "check_circle",
        docentesVacunadosPorcentaje: "95",
        alumnosVacunados: "cancel",
        nombreEstrategia: "No disponible",
        actividadesPresenciales: "Las disposiciones para el regreso son obligatorias, se implementará un programa de sanitización en las escuelas. Si hay condiciones adversar por la pandemia se regresará a la enseñanza a distancia. La Universidad Tecnológica de Chihuahua (UTCH)  realizó la semana pasada un simulacro de un posible regreso híbrido a talleres y laboratorios, cuidando ventilaciones y espacios, dando resultados favorables.",
        aforosFiltrosSanitarios: "Protocolo sanitario apegado a lo establecido por la SEP",
        referencias: [
            "https://e-oaxaca.com/nota/2021-08-03/nacion/sera-obligatorio-regreso-clases-presenciales-el-30-de-agosto-gobernador-de ;   https://www.elfinanciero.com.mx/nacional/2021/06/01/cuantos-maestros-y-maestras-han-sido-vacunados-contra-covid-en-mexico-esto-dice-la-sep/ ;  https://nortedigital.mx/oficial-regresa-chihuahua-a-las-aulas-el-30-de-agosto/  ; https://notigram.com/chihuahua/es-obligatorio-el-regreso-a-clases-gobernador-de-chihuahua-20210803-571139 ;  https://heraldodemexico.com.mx/nacional/2021/8/3/javier-corral-anuncia-regreso-clases-presenciales-el-30-de-agosto-en-chihuahua-322320.html  ; https://www.omnia.com.mx/noticia/185917",
            "http://www.chihuahua.gob.mx/contenidos/podemos-pensar-en-regreso-clases-presenciales-el-proximo-ciclo-javier-corral"
        ],
        color: BackColor
    },
    {
        id: "MX-COA",
        name: "Coahuila",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "23 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "check_circle",
        reincorporacionGradual: "check_circle",
        docentesVacunados: "check_circle",
        alumnosVacunados: "cancel",
        nombreEstrategia: "No disponible",
        actividadesPresenciales: "No disponible",
        aforosFiltrosSanitarios: "Se pretende la incorporación de 4 filtros sanitaias, la desinfección de espacios y la corresponsabilidad de  las familias, aplicación del uso obligatorio de cubrebocas y la sana distancia",
        referencias: [
            "https://www.seducoahuila.gob.mx/assets/38-extraordinario-13-may-2021.pdf",
            "https://www.excelsior.com.mx/nacional/coahuila-regresara-a-clases-presenciales-el-23-de-agosto/1458394#:~:text=Coahuila%20regresar%C3%A1%20a%20clases%20el,clases%20presenciales%20con%20sistema%20h%C3%ADbrido."
        ],
        color: BackColor
    },
    {
        id: "MX-NLE",
        name: "Nuevo León",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "check_circle",
        reincorporacionGradual: "check_circle",
        docentesVacunados: "check_circle",
        alumnosVacunados: "cancel",
        nombreEstrategia: "No disponible",
        actividadesPresenciales: "Comunicados oficiales indican encontrarse listos para este regreso a clases, y la modalidad dependerá del comportamiento del semáforo ante el Covid-19 y las indicaciones que emita la Secretaría de Salud. Indican iniciar el ciclo escolar el 30 de agosto, sin embargo no han definido la  modalidad. <br><br> El comunicado oficial (17 de junio de 2021) de la Cooridnación general de comunicación social de NL, indica que la reactivación educativa en colegios y escuelas de 25 municipios rurales de NL. ''No es regreso a clases (presenciales), es regreso a actividades escolares para que el maestro vaya adaptandose, vea que su escuela está en condiciones''",
        aforosFiltrosSanitarios: "La asistencia será de forma híbrida, en el que las aulas estarán a un 30% de su capacidad y los alumnos pueden seguir las clases a distancia.",
        referencias: [
            "https://www.eleconomista.com.mx/estados/En-agosto-se-definira-si-hay-regreso-a-clases-en-Nuevo-Leon-Jaime-Rodriguez-20210712-0090.html",
            "https://www.nl.gob.mx/publicaciones/calendario-escolar-para-el-ciclo-2021-2022",
            "https://twitter.com/SenlOficial/status/1405643117492158465/photo/2",
            "https://twitter.com/SenlOficial/status/1405643117492158465/photo/1"
        ],
        color: NoBackColor
    },
    {
        id: "MX-TAM",
        name: "Tamaulipas",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "Sin información",
        tipoModelo: "Sin información",
        reincorporacionVoluntaria: "check_circle",
        reincorporacionGradual: "check_circle",
        docentesVacunados: "check_circle",
        alumnosVacunados: "cancel",
        nombreEstrategia: "Jornada Presencial de Regularización, fase 2",
        actividadesPresenciales: "Sin información",
        aforosFiltrosSanitarios: "Están por arrancar un pilotaje denominado Jornada Presencial de Regularización, fase 2. El regreso a las aulas será en los municipios donde se tenga semáforo verde",
        referencias: [
            "https://www.tamaulipas.gob.mx/educacion/avisos/planteles-seleccionados-fase-2/"
        ],
        color: BackColor
    },
    {
        id: "MX-SIN",
        name: "Sinaloa",
        regresoActividadesPresenciales: "Sin información",
        fechaRetorno: "30 agosto en EB y EMS",
        tipoModelo: "Sin información",
        reincorporacionVoluntaria: "check_circle",
        reincorporacionGradual: "check_circle",
        docentesVacunados: "check_circle",
        alumnosVacunados: "cancel",
        nombreEstrategia: "Sin información",
        actividadesPresenciales: "En Sinaloa existen elementos para un regreso a clases gradual y focalizado, además de seguro para las niñas, niños y jóvenes, de acuerdo a la instrucción del gobernador Quirino Ordaz Coppel, quien fue reconocido por el presidente de la República, Andrés Manuel López Obrador, como el primer mandatario que solicitó la vacunación a las y los maestros del país para un regreso seguro a las escuelas.",
        aforosFiltrosSanitarios: "Regreso a las aulas en Sinaloa deberá atender condiciones de cada comunidad. Regreso a clases en Sinaloa será de forma gradual, focalizado y seguro. Experiencia previa de 955 Centros Comunitarios de Aprendizaje, donde se atendió a 26 mil 26 alumnos con rezago educativo. El congreso del Estado tiene la postura de “Estamos ansiosos porque los estudiantes regresen, pero la tercera ola de contagios es alarmante, ante este panorama es necesario que las autoridades actúen con prudencia: no hay condiciones del regreso seguro a las aulas”",
        referencias: [
            "https://mieducacion.sepyc.gob.mx/sinaloa-coincide-con-el-presidente-andres-manuel-lopez-obrador-el-regreso-a-clases-es-por-el-convencimiento-nada-por-la-fuerza/"
        ],
        color: NoInformation
    },
    {
        id: "MX-DUR",
        name: "Durango",
        regresoActividadesPresenciales: "Ciclo Escolar 2021-2022",
        fechaRetorno: "30 de agosto",
        tipoModelo: "No disponible",
        reincorporacionVoluntaria: "info",
        reincorporacionGradual: "info",
        docentesVacunados: "check_circle",
        alumnosVacunados: "cancel",
        nombreEstrategia: "No disponible",
        actividadesPresenciales: "La Secretaría de Educación del Estado de Durango (SEED), todavía no tiene definido si el regreso a clases será presencial, virtual o híbrido, primero podría darse a conocer el calendario escolar.",
        aforosFiltrosSanitarios: "No disponible",
        referencias: [
            "https://www.elsiglodedurango.com.mx/2021/07/1329808.modelo-de-regreso-a-clases-sigue-sin-ser-definido-seed.html"
        ],
        color: NoBackColor
    },
    {
        id: "MX-ZAC",
        name: "Zacatecas",
        regresoActividadesPresenciales: "Si, EB y EMS",
        fechaRetorno: "30 agosto en EB y EMS",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "check_circle",
        reincorporacionGradual: "check_circle",
        docentesVacunados: "check_circle",
        alumnosVacunados: "cancel",
        nombreEstrategia: "Sin información",
        actividadesPresenciales: "Sin información",
        aforosFiltrosSanitarios: "Aún no se puede fijar la postura, hasta conocer las condiciones del semáforo epidemiológico y el lineamiento federal. Hicieron una encuesta a padres de familia, de cada 10, 7 están en contra del regreso y 3 a favor. LA UAZ hará encuesta de movilidad y convivencia, “ya se tienen claros los protocolos de seguridad, de sanitización para todos los espacios, solo veremos si será escalonado, de acuerdo a los espacios o por nivel educativo, sin embargo, la decisión se tomará en agosto",
        referencias: [
            "http://www.seduzac.gob.mx/portal/index.php"
        ],
        color: NoBackColor
    },
    {
        id: "MX-SLP",
        name: "San Luis Potosí",
        regresoActividadesPresenciales: "Sin información",
        fechaRetorno: "30 agosto en EB y EMS",
        tipoModelo: "Sin información",
        reincorporacionVoluntaria: "info",
        reincorporacionGradual: "check_circle",
        docentesVacunados: "check_circle",
        alumnosVacunados: "cancel",
        nombreEstrategia: "Sin información",
        actividadesPresenciales: "La autoridad educativa federal dará a conocer información para el regreso a clases y en reunión de CONAEDU",
        aforosFiltrosSanitarios: "No habrá regreso a clases presenciales durante el mes de agosto, además recordó que para el regreso a clases presenciales, cuando existan las condiciones sanitarias, se aplicarán nueve intervenciones o medidas para asegurar el bienestar de la comunidad escolar. <br><br> Hubo una reapertura del 15% de escuelas en junio. El saldo fueron dos casos de contagios en docentes y nueve alumnos",
        referencias: [
            "https://slp.gob.mx/sege/Paginas/NOTICIAS/FECHAS-Y-MODALIDAD-DE-REGRESO-A-CLASES--SE-DAR%C3%81N-A-CONOCER-LA-PR%C3%93XIMA-SEMANA.aspx"
        ],
        color: NoBackColor
    },
    {
        id: "MX-NAY",
        name: "Nayarit",
        regresoActividadesPresenciales: "Por definir",
        fechaRetorno: "Por definir",
        tipoModelo: "NA",
        reincorporacionVoluntaria: "check_circle",
        reincorporacionGradual: "check_circle",
        docentesVacunados: "check_circle",
        alumnosVacunados: "cancel",
        nombreEstrategia: "NA",
        actividadesPresenciales: "El ‘Verano Divertido’ iniciará el lunes 8 de junio y terminará el 7 de agosto, y se está considerando que el 10 de agosto sea el regreso a clases para educación básica, que comprende los niveles de educación inicial, preescolar, primaria, secundaria y telesecundaria, siempre y cuando existan las condiciones sanitarias y que Nayarit se encuentre en verde del llamado semáforo epidemiológico.",
        aforosFiltrosSanitarios: "NA",
        referencias: [
            "https://www.nayarit.gob.mx/seccion/educacion"
        ],
        color: NoBackColor
    },
    {
        id: "MX-JAL",
        name: "Jalisco",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de Agosto 2021",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "check_circle",
        reincorporacionGradual: "check_circle",
        docentesVacunados: "check_circle",
        alumnosVacunados: "cancel",
        nombreEstrategia: "Modelo hibrido y opcional de regreso a clases-Regreso a clases presenciales",
        actividadesPresenciales: "Gobierno estatal anunció que el regreso a las aulas en educación básica será el próximo 30 de agosto, a través de un modelo híbrido y opcional para las familias, que permitirá tener clases presenciales, mientras que en educación media superior y superior se regresará a distancia en agosto y en septiembre de manera presencial; la Universidad de Guadalajara comenzará su ciclo escolar 2021-B de forma virtual el 10 de agosto y será a finales de este mes cuando analice la posibilidad de iniciar la fase presencial el 15 de septiembre. <br><br>El regreso a clases será presencial, pero las familias de los estudiantes decidirán si envían o no a sus hijas o hijos a la escuela  <br>Jalisco solicitará a la federación reforzar la vacunación en el AMG en jóvenes de 15 a 30 años, quienes forman parte de la educación media y media superior. <br><br>Por otro lado, indican estar sujetos al semaforo epidemiológico",
        aforosFiltrosSanitarios: "Las principales acciones son el uso del cubrebocas es obligatorio para todos los niveles y sana distancia. <br> <br> Por otro lado, se emiten protocolos detallados para todos los niveles y actividades: <br> <br> Protocolo de acción ante COVID-19 para Grupos de Seguimiento Académico, Trámites presenciales y Entrega de materiales educativos aplicable a Educación Básica, Media Superior y Superior Docente <br> <br> Protocolo de actuación ante COVID-19 Sector Educativo para Actos Académicos Presenciales en escuelas de Educación Básica de la Secretaría de Educación del Estado de Jalisco. <br> <br> Protocolo de acción ante COVID-19 Para centros de formación para el trabajo, educación continua y academias. <br> <br> Protocolo de actuación ante COVID-19 Sector Educativo para la realización de exámenes presenciales del Sistema de Preparatoria Abierta. <br> <br> Protocolo de actuación ante COVID-19 Sector Educativo para la atención de actividades esenciales en Educación Media Superior. <br> <br> Protocolo de Acción ante COVID-19 para realizar Educación Física en los planteles escolares",
        referencias: [
            "https://www.jalisco.gob.mx/es/prensa/noticias/129538",
            "https://www.jalisco.gob.mx/es/prensa/noticias/127052",
            "https://www.facebook.com/educacion.jalisco/photos/a.446164440747/10158547049890748/",
            "https://portalsej.jalisco.gob.mx/plan-jalisco-para-la-reactivacion-economica/"
        ],
        color: BackColor
    },
    {
        id: "MX-AGU",
        name: "Aguascalientes",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "7 Junio de 2021",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "check_circle",
        reincorporacionGradual: "check_circle",
        docentesVacunados: "check_circle",
        docentesVacunadosPorcentaje: "84",
        alumnosVacunados: "cancel",
        nombreEstrategia: "Me sumo a un regreso seguro",
        actividadesPresenciales: "Los estudiantes podrán ingresar a los planteles, pero no de manera masiva, es decir no regresan los grupos completos al mismo tiempo, será, durante las primeras semanas de manera escalonada y para permitir a los profesores levantar un diagnóstico sobre el aprendizaje logrado durante este periodo de aislamiento.                                                                              El nivel básico de educación tendrá un modelo mixto de clases, con grupos reducidos y asistencia alternada a los salones de clases. Los niños de los niveles de preescolar, primaria y secundaria deberán ajustarse a las siguientes fechas: <br><br> Jornadas de limpieza escolar. 11, 12 y 13 de agosto. <br> Inscripciones y reinscripciones. Del lunes 16 de agosto al viernes 10 de septiembre. <br> Evaluación diagnóstica. Del lunes 16 de agosto al viernes 10 de septiembre. <br> Período extraordinario de recuperación. Del lunes 13 de septiembre al martes 23 de noviembre dirigido a los alumnos con deficiencias educativas.                                                                                          el nivel medio superior regresará a clases con un modelo mixto. Los alumnos asistirán a clases de manera alternada, en grupos pequeños y con todas las medidas de salud e higiene necesarias para un regreso seguro. <br><br> El regreso a clases de este nivel educativo tendrá varias fechas, dependiendo del sistema al que está incorporada la escuela de tu hijo. Para el 6 de septiembre todas las preparatorias del estado ya deberán estar en clases. Por lo pronto se prevén las siguientes fechas de inicio: <br><br> Bachilleratos tecnológicos. Inicio de clases 23 de agosto. <br> Conalep. Inicio de clases 30 de agosto. <br> Bachilleratos incorporados a universidades. Misma fecha de inicio de la institución de nivel superior a la que se encuentran incorporados. Las universidades darán inicio a las actividades educativas según su propio calendario escolar.",
        aforosFiltrosSanitarios: "Protocolo para prevenir contagios durante el regreso progresivo a clases presenciales en escuelas públicas y privadas de educación básica, media superior y superior , publciado el 27 de julio de 2021, en el cual se detallan las estregias para evitar contagios: <br> Uso obligatorio del cubrebocas, puerta abiertas y evitar contacto con picaportes, filtro de hogar, filtro escolar , filtro de aula, capaictaciones para personal y alumnos, limpieza a profundidad de las superficies, espacios y materiales, clausura de bebederos, reorganizar descansos y actividades fisicas, se promoveran clases en espacios abiertos, lavado de mano, evitar compartir alimentos, promover el estornudo de etiqueta (cubrir con el angulo interno del codo), el uniforme escolar no es obligatorio, se limita el aforo de los eventos  especiales, las actividades de servicios escolares serán por cita, <ol> <li>Se recabaran cartas de corresponsabilidad</li> <li> maximizar sana distancia y aprovechamiento de espacios abiertos y el uso permanente e irrestricto de cubrebocas</li> <li> lpimite del 40% diario de la población escolar</li> <li> No mas de 9 alumnas y alumnos y un docente por aula de educación primaria y telesecundaria</li> <li> No mas de 12 alumnos y alumnas y un docente por aula en escuelas secundarias generale sy técnicas</li> <li> No se permite en este periodo ningún tipkde expendio de alimentos ni se realizaran clases de educación fisica o artística</li></ol>",
        referencias: [
            "http://www.iea.gob.mx/INTERNAS/comunicacion/2020/Boletin_959_2021.pdf",
            "http://www.iea.gob.mx/INTERNAS/comunicacion/2020/Boletin_959_2021.pdf",
            "https://www.elsoldelcentro.com.mx/local/ya-hay-estrategia-para-regresar-a-clases-en-aguascalientes-6494515.html",
            "http://www.iea.gob.mx/INTERNAS/comunicacion/2020/Boletin_965_2021.pdf",
            "http://www.iea.gob.mx/INTERNAS/regreso/pdfs/GUIASEP_REGRESOCLASES.pdf",
            "https://regresoseguro.iea.edu.mx/",
            "https://kidstudia.com/guia/todo-sobre-el-regreso-a-clases-en-mexico/aguascalientes/"
        ],
        color: BackColor
    },
    {
        id: "MX-GUA",
        name: "Guanajuato",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "check_circle",
        reincorporacionGradual: "check_circle",
        docentesVacunados: "check_circle",
        alumnosVacunados: "cancel",
        nombreEstrategia: "Guanajuato educado con R de Reactivación. Regreso a las aulas.",
        actividadesPresenciales: "El estado implemento ejercicio piloto ''regreso a las aulas'' , bajo esta experiencia se prevee continuar con un retorno presencial el proximo ciclo",
        aforosFiltrosSanitarios: "Cuenta con protocolos y guias de salud para el regreso a la escuela (Básica, Media superior y superior), las cuales incluyen: uso obligatorio de cubrebocas, 4 filtros sanitarios , sana distancia, Limpieza de areas y mobiliario, grupos reducidos",
        referencias: [
            "https://www.seg.guanajuato.gob.mx/RegresoalasAulas/SitePages/Inicio.aspx",
            "https://www.seg.guanajuato.gob.mx/RegresoalasAulas/SitePages/Inicio.aspx",
            "https://notus.com.mx/regreso-a-clases-presenciales-en-guanajuato-30-agosto-2021/"
        ],
        color: BackColor
    },
    {
        id: "MX-QUE",
        name: "Querétaro",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "check_circle",
        reincorporacionGradual: "check_circle",
        docentesVacunados: "check_circle",
        docentesVacunadosPorcentaje: "95",
        alumnosVacunados: "cancel",
        nombreEstrategia: "Programa Especial de Regreso a Clases",
        actividadesPresenciales: "Se Instaló Subcomité Técnico para el Regreso a Clases del Estado de Querétaro, el objetivo: organizar un posible regreso a clases presenciales planeado, escalonado, gradual, y cauto, con el fin de disminuir el riesgo de contagio y proteger la salud de las comunidades escolares.",
        aforosFiltrosSanitarios: "Se realizara de acuerdo a los ''LINEAMIENTOS GENERALES PARA EL REGRESO A LAS ACTIVIDADES ESCOLARES, EN EL MARCO DE LA PANDEMIA COVID-19''",
        referencias: [
            "https://queretaro.gob.mx/regresoaclaseguro.aspx",
            "https://www.queretaro.gob.mx/covid19/contenido/noticiasContenido.aspx?q=vUYGbsxLnli7glS/gQWD0HldeVLSaRLz7RohSiloFmz7sxVv8axXyw==",
            "https://www.queretaro.gob.mx/pdf/SEDEQ_GuiaRegresoaClases.pdf"
        ],
        color: BackColor
    },
    {
        id: "MX-HID",
        name: "Hidalgo",
        regresoActividadesPresenciales: "No",
        fechaRetorno: "NA",
        tipoModelo: "A distancia",
        reincorporacionVoluntaria: "check_circle",
        reincorporacionGradual: "check_circle",
        docentesVacunados: "check_circle",
        docentesVacunadosPorcentaje: "99",
        alumnosVacunados: "cancel",
        nombreEstrategia: "Regreso Seguro a Clases en los centros educativos en el marco de la pandemia COVID 19, Operativo Escudo, Hidalgo Seguro",
        actividadesPresenciales: "De acuerdo a anuncios del gobernador de dicho estado en julio, pidió a las instituciones educativas públicas y privadas del estado postergar las clases presenciales en el estado, debido al incremento de casos de Covid-19 en los últimos días. <br><br> El secretario de Salud de Hidalgo, Efraín Benítez Herrea, señaló que en estos momentos no existen condiciones para el regreso a clases presenciales en la entidad. El funcionario indió que la situación epidemiológica actual no permite el retonrno, programado para finales de agosto, algo que ha dialogado con el titular d ela SEPH, Atilano Rodríguez",
        aforosFiltrosSanitarios: "Filtros escolares, suspención de registro de entrada y salida de toda la comunidad educativa (alumnos, docentes, personal administrativo y personal de apoyo a la educación , asi como al publico en general) que conlleve el empleo de instrumentos ocmpartidos, cada  institución definira el control de asistencia laboral, limpieza intensiva y desinfección continua de todas las areas de los centros educativos, ventilación en todas las areascampaas de comunicación , dichas estrtegias coordinadas por el Comite Participativo de Salud Escolar (CPSE) ",
        referencias: [
            "https://periodico.hidalgo.gob.mx/?p=44435",
            "https://subrayado.com.mx/hidalgo/cuando-regresan-a-clases-hidalgo-inicio-ciclo-escolar-2021-2022-seph/",
            "https://criteriohidalgo.com/noticias/sin-condiciones-momento-regreso-clases-hidalgo-salud",
            "https://www.milenio.com/ciencia-y-salud/hidalgo-99-docentes-vacunaron-covid-19-seph"
        ],
        color: NoBackColor
    },
    {
        id: "MX-COL",
        name: "Colima",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "Aún en prueba piloto de protocolos",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "check_circle",
        reincorporacionGradual: "check_circle",
        docentesVacunados: "check_circle",
        alumnosVacunados: "cancel",
        nombreEstrategia: "Nos cuidamos con el ABCD contra Covid-19",
        actividadesPresenciales: "Se ecuentra en Prueba piloto, centrada en la asesoría académica y el apoyo socioemocional",
        aforosFiltrosSanitarios: "1. El primer filtro se aplicará en casa y antes de salir a la escuela, donde los padres de familia deben asegurarse de que sus hijos no presenten ningún síntoma y no hayan estado en contacto con una persona positivo a COVID19. <br><br> 2. En la escuela se escalonarán los horarios para que en la entrada no se junten los alumnos, y se instala el segundo filtro (temperatura y gel) en la puerta de entrada, uso correcto de cubrebocas cubriendo nariz y boca, guardando la sana distancia. <br><br> 3. Un tercer filtro, más a detalle, lo hace el maestro al entrar al salón y durante la jornada, observando a sus alumnos (calentura, estornudos, tos, etc.), y remitir a un lugar seguro y aislado a un posible alumno enfermo, hasta que venga a recogerlo de casa. Asimismo el maestro recibirá la carta compromiso de corresponsabilidad.",
        referencias: [
            "https://seceduccol-my.sharepoint.com/personal/publicaciones_web_secolima_gob_mx/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fpublicaciones%5Fweb%5Fsecolima%5Fgob%5Fmx%2FDocuments%2FPublicaciones%2FOtros%2F2021%2FPrueba%20Piloto%20de%20Asesori%CC%81a%20Aca%CC%81demicas%20y%20Apoyo%20Socioemocional%2Epdf&parent=%2Fpersonal%2Fpublicaciones%5Fweb%5Fsecolima%5Fgob%5Fmx%2FDocuments%2FPublicaciones%2FOtros%2F2021&originalPath=aHR0cHM6Ly9zZWNlZHVjY29sLW15LnNoYXJlcG9pbnQuY29tLzpiOi9nL3BlcnNvbmFsL3B1YmxpY2FjaW9uZXNfd2ViX3NlY29saW1hX2dvYl9teC9FUldlQjVMalQ4MUdud1FkUnNqZC0wb0I3SHI3RjlTcG5idldYWlhUSzJINkR3P3J0aW1lPUozS09XQjVWMlVn"
        ],
        color: BackColor
    },
    {
        id: "MX-MIC",
        name: "Michoacán de Ocampo",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto 2021",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "check_circle",
        reincorporacionGradual: "check_circle",
        docentesVacunados: "check_circle",
        alumnosVacunados: "cancel",
        nombreEstrategia: "Escuela abierta",
        actividadesPresenciales: "La asistencia sera voluntaria  para alumnos, docentes  y personal administratvio, de acuerdo al semáforo epidemiológico. se priorizará a los niños, niñas y adolescentes que, durante el ciclo escolar han tenido una comunicación intermitente y una participación baja en actividades propuestas por el docente, asi como los que han tenido una participación prácticamente inexistente. Aesta modalidad se le denomina ''Escuela Abierta''.<br><br> Se priorizará a atención de alumnos en riesgo de reprobar o abandonar, alumnas y alomnos en condiciiones vulnerables, que presenten dificultades de comunicación , deberán se atendidos de manera prioritaria. <br><br> Las actividades a realizar<br> 1. Jornadas contra el rezago escolar y valoración diagnóstica. <br> 2.Asesoría pedagógica. <br> 3.Apoyo psicoemocional. <br> 4.Acciones de limpieza y sanitarias en el plantel educativa. <br> 5. Entrega de libros de texto, equipo y material didáctico. <br> 6. Trámites escolares. <br> 7.Utilización de equipos y servicios. <br> 8. Uso de infraestructura escolar (laboratorios, talleres).<br> 9. Acciones de construcción y mantenimeinto. <br> 10. Sesiones de órganos colegiados del plantel educativo. <br><br> ** aunque aun no hay una postura definitiva, según los medios",
        aforosFiltrosSanitarios: "Protocolo para prevenir contagios duranre el regreso prograsivo a clases presenciales en escuelas públicas y privadas de educación básica, media superior y superior , publciado el 27 de julio de 2021, en el cual se detallan las estregias para evitar contagios: Uso obligatorio del cubrebocas, puerta abiertas y evitar contacto con picaportes, filtro de hogar, filtro escolar , filtro de aula, capaictaciones para personal y alumnos, limpieza a profundidad de las superficies, espacios y materiales, clausura de bebederos, reorganizar descansos y actividades fisicas, se promoveran clases en espacios abiertos, lavado de mano, evitar compartir alimentos, promover el estornudo de etiqueta (cubrir con el angulo interno del codo), el uniforme escolar no es obligatorio, se limita el aforo de los eventos  especiales, las actividades de servicios escolares serán por cita, <ul><li>Se recabaran cartas de corresponsabilidad</li> <li>maximizar sana distancia y aprovechamiento de espacios abiertos y el uso permanente e irrestricto de cubrebocas</li> <li>lpimite del 40% diario de la población escolar</li> <li> No mas de 9 alumnas y alumnos y un docente por aula de educación primaria y telesecundaria</li> <li>No mas de 12 alumnos y alumnas y un docente por aula en escuelas secundarias generale sy técnicas</li> <li>No se permite en este periodo ningún tipkde expendio de alimentos ni se realizaran clases de educación fisica o artística</li> </ul>",
        referencias: [
            "https://aulas.see.gob.mx/wp-content/uploads/2021/06/PROTOCOLO-DE-SALUD-2021-EDUCACIO%CC%81N-CIRCULAR-9.pdf",
            "https://aulas.see.gob.mx/wp-content/uploads/2021/06/Circular-SEE-10-2021.pdf",
            "https://educacion.michoacan.gob.mx/category/avisos/"
        ],
        color: BackColor
    },
    {
        id: "MX-VER",
        name: "Veracruz de Ignacio de la Llave",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 agosto en EB y EMS",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "check_circle",
        reincorporacionGradual: "check_circle",
        docentesVacunados: "check_circle",
        alumnosVacunados: "cancel",
        nombreEstrategia: "Veracruz educando a distancia",
        actividadesPresenciales: "",
        aforosFiltrosSanitarios: "El 24 de junio regresaron a las aulas, al respecto, se cuenta con 682 estrategias por sistema en los modelos presencial, mixto y virtual. La Secretaría de Educación estatal destacó que esta planeación incluye el acuerdo voluntario de la comunidad escolar, para lo que padres y madres recibirán una carta compromiso sobre el cuidado de la salud de sus hijos. <br><br>1.- Todas las escuelas ubicadas en municipios con Semáforo en color amarillo o naranja, darán atención únicamente en la modalidad a distancia. <br>2.- En los municipios que se mantenga el color verde del semáforo epidemiológico local, las instituciones podrán continuar según lo programado y decidido por cada centro escolar. <br><br>El personal del plantel educativo podrá asistir a sus escuelas si así lo acuerdan a realizar las tareas pertinentes con o sin estudiantes de acuerdo a los puntos 1 y 2.",
        referencias: [
            "https://www.sev.gob.mx/v1/noticias/leer/2354/"
        ],
        color: BackColor
    },
    {
        id: "MX-PUE",
        name: "Puebla",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de Agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "cancel",
        reincorporacionGradual: "cancel",
        docentesVacunados: "check_circle",
        alumnosVacunados: "cancel",
        nombreEstrategia: "Modelo Educativo Híbrido en el Estado de Puebla Educación Básica y Media Superior Ciclo Escolar 2021-2022",
        actividadesPresenciales: "",
        aforosFiltrosSanitarios: "Las escuelas multigrado o de organización completa que puedan atender a toda su población de manera presencial todos los días, deben garantizar la sana distancia, así como la implementación del plan de atención (nivelación) de forma integrada a las jornadas académicas. Aquellas escuelas con mayor matrícula dividirán aforos cuya distribución puede ser por apellidos. ",
        referencias: [
            "http://sep.puebla.gob.mx/index.php/component/k2/prueba-2-2-2"
        ],
        color: BackColor
    },
    {
        id: "MX-TLA",
        name: "Tlaxcala",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 agosto en EB y EMS",
        tipoModelo: "Sin información",
        reincorporacionVoluntaria: "check_circle",
        reincorporacionGradual: "check_circle",
        docentesVacunados: "check_circle",
        alumnosVacunados: "cancel",
        nombreEstrategia: "Sin información",
        actividadesPresenciales: "",
        aforosFiltrosSanitarios: "Una comisión de la Secretaría de Educación Pública (SEPE) y el SNTE trabajando para la realización de una logística y la atención en el regreso a clases presenciales. Universidad Autónoma de Tlaxcala (UATx) reconsideraría el regreso a las clases.",
        referencias: [
            "https://www.milenio.com/politica/comunidad/duda-regreso-clases-presenciales-tlaxcala-tercer-ola-covid"
        ],
        color: BackColor
    },
    {
        id: "MX-MEX",
        name: "Estado de México",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "Fecha no definida",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "check_circle",
        reincorporacionGradual: "check_circle",
        docentesVacunados: "check_circle",
        docentesVacunadosPorcentaje: "",
        alumnosVacunados: "cancel",
        nombreEstrategia: "Plan de Reapertura de regreso a clases 2020*",
        actividadesPresenciales: "En 2020, presento el plan de reapertura de regreso a clases. Sin embargo, el ciclo pasado fue a distancia y aun no existe una postura definida para el ciclo 21-22. De acuerdo con el COMUNICADO SEB 07/06/2021-Regreso seguro a clases. Indica que deben cumplirse condiciones para asegurar el regreso, pero no confirmando una fecha para la incorporación presencial. <br><br>El secretario de Educación del Estado de México, Gerardo Monroy Serrano, informó que se prevé que el inicio del ciclo escolar 2021-2022, programado para el 30 de agosto se dé de forma híbrida, es decir, retomando actividades presenciales de manera voluntaria, además de continuar con clases y actividades educativas a distancia, haciendo uso de las plataformas digitales. https://www.milenio.com/ciencia-y-salud/regreso-a-clases-sera-presencial-y-a-distancia-seduc",
        aforosFiltrosSanitarios: "Se emite la Guía de Orientación para la Reapertura de las Escuelas ante COVID-19, en la cual indica la implementación del  Comité Participativo de Salud Escolar. <br><br> Aplicación de protocolos y filtros de corresponsabilidad en casa, a la entrada del plantel y en el salón de clases",
        referencias: [
            "https://subeducacionbasica.edomex.gob.mx/sites/subeducacionbasica.edomex.gob.mx/files/files/SEBComunicado07062021.pdfhttps://www.unionedomex.mx/articulo/2021/07/08/educacion/regreso-clases-edomex-2021-2022-conoce-las-actividades-previas",
            "https://www.milenio.com/ciencia-y-salud/regreso-a-clases-sera-presencial-y-a-distancia-seduc",
            "http://148.215.3.96:8283/imgcovid/PLAN%20REAPERTURA%2019%20de%20Mayo.pdf",
            "https://www.eluniversal.com.mx/metropoli/edomex/sin-definir-si-el-ciclo-escolar-2021-2022-iniciara-de-forma-presencial-en-edomex",
            "https://salud.edomex.gob.mx/isem/ac_boletines_informativos"
        ],
        color: BackColor
    },
    {
        id: "MX-CMX",
        name: "Ciudad de México",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Sin información",
        reincorporacionVoluntaria: "check_circle",
        reincorporacionGradual: "check_circle",
        docentesVacunados: "check_circle",
        docentesVacunadosPorcentaje: "100",
        alumnosVacunados: "check_circle",
        nombreEstrategia: "Sin información",
        actividadesPresenciales: "El 30 de agosto iniciará el próximo ciclo escolar 2021-2022 en los niveles básico, medio y superior, y a unas semanas de volver a las aulas algunas escuelas públicas ya anunciaron las medidas bajo las que regresarán los estudiantes, toda vez, que México se encuentra atravesando una tercera ola de contagios por la Covid-19. <br><br> La a UNAM inicia el 9 de agosto.  En cuanto al nivel medio superior y superior regresaran a clases presenciales bajo los propios calendarios escolares de cada institución en los estados que se encuentren en semáforo sanitario verde o amarillo. Es importante mencionar que las instituciones que puedan regresar a las aulas decidirán cómo será este regreso, ya sea escalonado o en modalidad híbrida.  El Instituto Politécnico Nacional (IPN) reiteró que durante el próximo ciclo escolar no habrá retorno a clases presenciales y anunció que aplicará un plan híbrido que permita que los politécnicos regresen a las aulas de manera escalonada. <br><br> La Universidad Nacional Autónoma de México (UNAM), recientemente informó que los estudiantes podrán volver a clases presenciales cuando el semáforo epidemiológico se encuentre en color verde. <br><br> Instituto Politécnico Nacional (IPN) anunció que los alumnos no regresarán a clases presenciales durante la primera mitad del ciclo escolar 2021-2022, y destacaron que como medida preventiva analizarán el regreso a las aulas hasta el mes de enero de 2022",
        aforosFiltrosSanitarios: "La UNAM: Las facultades solo podrán pedir la asistencia de los alumnos una vez que la entidad federativa haya permanecido tres semanas consecutivas con el semáforo epidemiológico en color verde. Ya que eso suceda, la incorporación será en grupos reducidos y de manera escalonada. Mientras el alumnado no haya sido vacunado, la asistencia será voluntaria, además, en el eventual retorno presencial se privilegiará a las actividades de bienvenida y reconocimiento de nuestras instalaciones para las generaciones que ingresaron en agosto del 2020 y la de nuevo ingreso del presente año, siempre respetando los límites establecidos del 30% de la matrícula escolar en los espacios educativos.",
        referencias: [
            "https://politica.expansion.mx/cdmx/2021/08/01/el-gobierno-cdmx-se-mantiene-en-su-decision-en-agosto-habra-regreso-a-clases",
            "https://www.eluniversal.com.mx/nacion/ipn-en-proximo-ciclo-escolar-no-habra-regreso-clases-presenciales ;  https://www.ejecentral.com.mx/en-cdmx-continua-plan-del-regreso-a-clases-presencial/  ; https://wradio.com.mx/programa/2021/08/03/asi_las_cosas/1628003040_998317.html",
            "https://www.marca.com/claro-mx/trending/2021/07/29/6103211646163fd7978b4590.html",
            "https://kidstudia.com/guia/todo-sobre-el-regreso-a-clases-en-mexico/#%c2%bfqu%c3%a9+estados+regresan+a+clases+presenciales+en+2021%3f",
            "https://planeacion.sep.gob.mx/entidadfederativa.aspx",
            "https://mexico.as.com/mexico/2021/07/30/actualidad/1627609664_758632.html",
            "https://politica.expansion.mx/mexico/2021/07/29/cuando-es-el-regreso-clases-presenciales-universidades-cdmx",
            "https://www.capital21.cdmx.gob.mx/noticias/?p=19324"
        ],
        color: BackColor
    },
    {
        id: "MX-MOR",
        name: "Morelos",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "check_circle",
        reincorporacionGradual: "check_circle",
        docentesVacunados: "check_circle",
        alumnosVacunados: "cancel",
        nombreEstrategia: "Regreso a clases",
        actividadesPresenciales: "El periodo de inscripciones y reinscripciones será del 16 de agosto al 10 de septiembre, mientras que las sesiones del Comité Participativo de Salud Escolar, así como las jornadas de limpieza en escuelas serán del 11 al 13 de agosto de 2021. con el fin de estar listo para el inicio de ciclo",
        aforosFiltrosSanitarios: "Terminó en julio el Programa Piloto de Regreso a Clases Presenciales Seguras, voluntarias, escalonadas y graduales sin incidente alguno para todos los que participaron en este proyecto: alumnos, padres de familia, docentes, administrativos y personal de apoyo",
        referencias: [
            "https://morelos.gob.mx/?q=prensa/nota/comunicado-de-prensa-secretaria-de-educacion-3",
            "https://elqueretano.info/trafico/presentan-calendario-escolar-2021-2022-para-morelos/"
        ],
        color: BackColor
    },
    {
        id: "MX-GRO",
        name: "Guerrero",
        regresoActividadesPresenciales: "Por definir",
        fechaRetorno: "31 de agosto 2021/ 03 de septiembre de 2021",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "check_circle",
        reincorporacionGradual: "check_circle",
        docentesVacunados: "check_circle",
        docentesVacunadosPorcentaje: "",
        alumnosVacunados: "cancel",
        nombreEstrategia: "De regreso a la escuela",
        actividadesPresenciales: "El próximo 31 de agosto arrancará de manera presencial el ciclo escolar 2021-2022 en casi 12 mil escuelas de Guerrero. regreso a clases será de manera gradual y escalonada. <br><br>  Sin embargo, en notas recientes  se refirió que de no haber un cambio en el semáforo epidemiológico a color verde, habría posibilidad de estar frente a grupo, caso contrario, tendrán que seguir con el modelo a distancia. <br><br> Miembros de la Coordinación Estatal de Trabajadores de la educación en Guerrero (CETEG) informó que se realizará consulta a los padres de familia respecto al regreso a clases presenciales , el próximo 30 de agosto, a pesar de la pandemia.",
        aforosFiltrosSanitarios: "Se considerarán tres factores: que el estado se mantenga permanentemente en el color verde en el Semáforo de Riesgo Epidemiológico; que las escuelas cuenten con un protocolo sanitario, un plan escolar que refleje la organización administrativa y académica del plantel, y el fortalecimiento académico a través de una guía estatal para el regreso a clases y el cronograma de actividades para la apertura de escuelas en todos los niveles. <br><br> Por otro lado, los trabajadores de la educación hayan sido vacunados y que el semáforo epidemiológico esté en verde.",
        referencias: [
            "https://heraldodemexico.com.mx/nacional/2021/6/22/guerrero-anuncia-regreso-clases-presenciales-en-agosto-309005.html",
            "https://www.elsoldemexico.com.mx/republica/sociedad/regreso-a-clases-presenciales-en-guerrero-sera-el-3-de-septiembre-preve-gobernador-pandemia-covid-19-6819985.html",
            "https://www.elsoldeacapulco.com.mx/local/complicado-el-regreso-a-clases-presenciales-en-guerrero-escuelas-pandemi-contagios-covid-guerrero-7039433.html",
            "https://snte.org.mx/seccion14/snte-condiciona-el-regreso-a-clases-presenciales-en-guerrero/",
            "https://snte.org.mx/seccion14/con-seguridad-volvemos-a-la-escuela-snte/",
            "https://www.elsoldeacapulco.com.mx/local/complicado-el-regreso-a-clases-presenciales-en-guerrero-escuelas-pandemi-contagios-covid-guerrero-7039433.html",
            "https://suracapulco.mx/consultara-a-los-padres-respecto-al-regreso-a-clases-presenciales-adelanta-la-ceteg/"
        ],
        color: NoBackColor
    },
    {
        id: "MX-OAX",
        name: "Oaxaca",
        regresoActividadesPresenciales: "Por definir",
        fechaRetorno: "Por definir",
        tipoModelo: "Por definir",
        reincorporacionVoluntaria: "check_circle",
        reincorporacionGradual: "check_circle",
        docentesVacunados: "check_circle",
        alumnosVacunados: "cancel",
        nombreEstrategia: "Por definir",
        actividadesPresenciales: "De acuerdo con la Circular N. SGE.DPE/003/2021, se exhorta a actuar con apego al semáforo epidemilógico. El regreso presencial a clases será cuando el semáforo se encuentre en verde y el proceso de consenso Otros medios han indicado que de regresar a la presencialidad seria voluntario y paulatino e inciaria a finales del mes de agosto",
        aforosFiltrosSanitarios: "Se implementa un proceso integral y amplio de rehabilitación de baños, y de suministro de agua potable para que estén listas para aplicar el protocolo sanitario anticovid y se pueda reanudar las clases presenciales en los tiempos que reclama el plan de reanudación de actividades escolares después de la pandemia por el SARS-COV-2 ",
        referencias: [
            "https://www.oaxaca.gob.mx/ieepo/circular-no-sge-dpe-003-2021-exhorto-a-escuelas-particulares/",
            "https://www.milenio.com/estados/regreso-clases-presenciales-oaxaca-agosto-voluntario"
        ],
        color: NoBackColor
    },
    {
        id: "MX-TAB",
        name: "Tabasco",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "1 al 17 de septiembre",
        tipoModelo: "Sin información",
        reincorporacionVoluntaria: "check_circle",
        reincorporacionGradual: "check_circle",
        docentesVacunados: "check_circle",
        alumnosVacunados: "cancel",
        nombreEstrategia: "Sin información",
        actividadesPresenciales: "Sin información",
        aforosFiltrosSanitarios: "Se están analizando los mecanismos y viabilidad que se emplearía para garantizar que sea seguro y ordenado, tanto para los alumnos, maestros, personal administrativo y todos los empleados de las escuelas. Analiza de tres a cuatro opciones para el regreso a clases presenciales; anuncia que en máximo 20 días iniciará la vacunación de población mayor de 18 a 29 años",
        referencias: [
            "https://heraldodemexico.com.mx/nacional/2021/7/22/tabasco-no-volvera-clases-presenciales-en-agosto-analizan-sea-en-septiembre-318653.html"
        ],
        color: BackColor
    },
    {
        id: "MX-CHP",
        name: "Chiapas",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "check_circle",
        reincorporacionGradual: "check_circle",
        docentesVacunados: "check_circle",
        docentesVacunadosPorcentaje: "100",
        alumnosVacunados: "cancel",
        nombreEstrategia: "No disponibles",
        actividadesPresenciales: "Antes del inicio escolar se organizarán reuniones escolares para determinar la forma en que regresarán los alumnos a las escuelas. De manera general, el regreso a las escuelas será en grupos pequeños, de manera alternada y con las recomendaciones sanitarias correspondientes. Fechas de inicio en media superior: Colegio de Bachilleres inician el 06 de septiembre. <br> Bachilleratos tecnológicos inician el 06 de septiembre. <br> Conalep inician el 30 de agosto. <br> Inicio de clases en educación superior: Las instituciones de educación superior estarán iniciando el ciclo escolar conforme su propio calendario institucional. Por lo que este nivel educativo tendrá varias fechas de inicio. Para el 06 de septiembre, todas las universidades ya deben estar con sus actividades académicas. <br><br>  La Universidad Autónoma de Chiapas (UACH) iniciará el ciclo escolar el 09 de agosto con una modalidad de clases presencial mixta. Los alumnos llevarán sus clases en línea, mientras que las prácticas de talleres y laboratorio se realizarán en grupos pequeños a no más del 30%, escalonados y con sana distancia.",
        aforosFiltrosSanitarios: "Medidas para el Regreso a Clases: <ol><li>Uso general de cubrebocas obligatorio. <li> Sana distancia en actividades al interior de los planteles, así como en las entradas y salidas. </li> <li> Recreos escolares escalonados</li> <li> Lugares fijos alternados.</li> <li> Asistencia alternada por apellido.</li> <li> Considera que tus hijos deberán acudir a clases sin fiebre o temperatura mayor a 37°. Estando dentro de la escuela, deberán lavarse frecuentemente las manos o utilizar gel antibacterial y los grupos no podrán ser mayor a 25 alumnos</li></ol>",
        referencias: [
            "https://www.unomasuno.com.mx/regreso-a-clases-en-chiapas-el-proximo-ciclo-escolar/",
            "https://kidstudia.com/guia/todo-sobre-el-regreso-a-clases-en-mexico/chiapas/ ;  https://planeacion.sep.gob.mx/entidadfederativa.aspxhttps://www.eluniversal.com.mx/estados/regreso-clases-presenciales-en-chiapas-sera-el-proximo-30-de-agosto-anuncian-autoridades"
        ],
        color: BackColor
    },  
    {
        id: "MX-CAM",
        name: "Campeche",
        regresoActividadesPresenciales: "Pendiente de confirmar",
        fechaRetorno: "Pendiente de confirmar",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "check_circle",
        reincorporacionGradual: "check_circle",
        docentesVacunados: "check_circle",
        alumnosVacunados: "cancel",
        nombreEstrategia: "Plan para la Reactivación Escalonada Mixta",
        actividadesPresenciales: "El 4 de mayo, el regreso a clases en una de las 137 escuelas en las que se echó a andar el plan de reactivación en Campeche tuvo una corta duración: a dos semanas de que los estudiantes retornaran a sus salones, se detectó el caso de una docente positiva a COVID-19.",
        aforosFiltrosSanitarios: "Sin información",
        referencias: [
            "https://politica.expansion.mx/estados/2021/05/22/campeche-frena-el-regreso-a-clases-presenciales-por-aumento-de-casos-de-covid-19"
        ],
        color: NoBackColor
    },
    {
        id: "MX-YUC",
        name: "Yucatán",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 agosto en EB y EMS",
        tipoModelo: "Sin información",
        reincorporacionVoluntaria: "check_circle",
        reincorporacionGradual: "check_circle",
        docentesVacunados: "check_circle",
        alumnosVacunados: "cancel",
        nombreEstrategia: "Regreso seguro a clases",
        actividadesPresenciales: "Sin información",
        aforosFiltrosSanitarios: "Estrategia estatal de Regreso Seguro a Clases, elaborada con base en los lineamientos que emitió la Federación y la participación de la Mesa Central conformada por representantes de seis Secretarías, entre ellas la de Educación y Salud, el Congreso del Estado, universidades, sindicatos, cámaras empresariales, la Comisión estatal de Derechos Humanos (Codhey), padres de familia, estudiantes y colegios.",
        referencias: [
            "http://www.educacion.yucatan.gob.mx/boletines/index"
        ],
        color: BackColor
    },
    {
        id: "MX-ROO",
        name: "Quintana Roo",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 agosto en EB y EMS",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "check_circle",
        reincorporacionGradual: "cancel",
        docentesVacunados: "check_circle",
        alumnosVacunados: "cancel",
        nombreEstrategia: "Plan para Regreso a Clases Seguro",
        actividadesPresenciales: "Centros Comunitarios de Aprendizaje",
        aforosFiltrosSanitarios: "Cuatro pasos: <br><br> 1) estar en semáforo amarillo tanto federal como estatal para abrir los Centros Comunitarios de Aprendizaje donde se ofrece asesoría; <br> 2) rehabilitación de escuelas (infraestructura, limpieza y orden); <br> 3) aplicación de un diagnóstico académico a/; 4) y que cada institución educativa entregue o actualice su plan de regreso a clases, cumpliendo con los protocolos sanitarios.Prueba para diagnosticar el rezago entre los alumnos tras un año y tres meses de clases en línea. Los padres de familia los encargados de aplicar la prueba, que consistirá en un grupo de preguntas de lo que tendrían que conocer según su grado de escolaridad.",
        referencias: [
            "https://qroo.gob.mx/seq/detallan-acciones-de-la-seq-para-el-regreso-clases-destacando-cuatro-importantes-temas"
        ],
        color: BackColor
    },
];

$(document).ready(function(){
    $('.modal').modal();
    $('.tooltipped').tooltip();

    for(var i=0; i<DataStates[0].referencias.length; i++){
        console.log( DataStates[0].referencias[i] +"\n" );
    }
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
    icon-color-cancel / icon-color-check_circle / icon-color-info
    cancel          / check_circle            / info

    <i class='small material-icons'>check_circle</i>
    <i class='material-icons tooltipped' data-position='bottom' data-tooltip='Sin información'>info</i>

    .modal
    background: linear-gradient(BackColor 0%, BackColor 25%, rgba(255, 255, 255, 0.9) 25%, rgba(255, 255, 255, 0.9) 100%) !important;
*/

    $('.modal').css({
        background: "linear-gradient("+DataActualState.color+" 0%, "+DataActualState.color+" 25%, rgba(255, 255, 255, 0.9) 25%, rgba(255, 255, 255, 0.9) 100%)"
    });

    $('.country-name').text(DataActualState.name);
    $('.fechaRetorno').html(DataActualState.fechaRetorno);
    $('.tipoModelo').text(DataActualState.tipoModelo);
    $('.nombreEstrategia').html(DataActualState.nombreEstrategia);
    $('.actividadesPresenciales').html(DataActualState.actividadesPresenciales);
    $('.aforosFiltrosSanitarios').html(DataActualState.aforosFiltrosSanitarios);

    $('.reincorporacionVoluntaria').html("<i class='material-icons icon-color-"+DataActualState.reincorporacionVoluntaria+"'>"+DataActualState.reincorporacionVoluntaria+"</i>");
    $('.reincorporacionGradual   ').html("<i class='material-icons icon-color-"+DataActualState.reincorporacionGradual+"'>"+DataActualState.reincorporacionGradual+"</i>");
    $('.docentesVacunados        ').html("<i class='material-icons icon-color-"+DataActualState.docentesVacunados+"'>"+DataActualState.docentesVacunados+"</i>");
    $('.alumnosVacunados         ').html("<i class='material-icons icon-color-"+DataActualState.alumnosVacunados+"'>"+DataActualState.alumnosVacunados+"</i>");
    
    console.log( DataActualState.docentesVacunadosPorcentaje !== "undefined" )

    if( DataActualState.docentesVacunadosPorcentaje )
        $('.porcentage_vaccune').text('('+DataActualState.docentesVacunadosPorcentaje+'%)');
        
    console.log(DataActualState.referencias.length);


    var ref = "";
    for(var i=0; i<DataActualState.referencias.length; i++)
        ref = ref + "["+(i+1)+"] " + DataActualState.referencias[i] + "<br><br>";

    $('.referencias-container').html(ref);

    $('#ShowStateInformation').modal('open');
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
homeButton.icon.path = "M16,8 L14,8 L14,16 L10,16 L10,10 L6,10 L6,16 L2,16 L2,8 L0,8 L8,0 L16,8 Z M16,8";
homeButton.marginBottom = 10;
homeButton.parent = chart.zoomControl;
homeButton.insertBefore(chart.zoomControl.plusButton);
chart.zoomStep = 2;
chart.zoomControl.slider.height = 100;




