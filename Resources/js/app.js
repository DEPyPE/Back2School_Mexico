
var StateBack2School   = "rgba(  0,  24,  75, 1)"; // Blue
var StateInDefinition  = "rgba(255, 165,   0, 1)"; // Orange
var StateNoBack2School = "rgba(237, 234,  55, 1)"; // Yellow
var StateNoInformation = "rgba(200, 200, 200, 1)"; // Gray

var Corte_Informacion = [
    '1 de agosto de 2021',
    '4 de agosto de 2021',
    '6 de agosto de 2021',
    '11 de agosto de 2021',
    '13 de agosto de 2021',
    '18 de agosto de 2021',
    '20 de agosto de 2021',
    '25 de agosto de 2021',
    '27 de agosto de 2021'
]

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
        color: StateBack2School
    }
]

var DataStates_v1 = [
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
        actividadesPresenciales: "Solo se han emitido lineamientos para trabajadores de la Secretaría estatal y su incorporación a labores presenciales.",
        aforosFiltrosSanitarios: "No disponible",
        referencias: [
            "http://www.sepbcs.gob.mx/contenido/comunicados/medidassalud/ATENTO_COMUNICADO_MAY29.pdf",
            "https://www.bcsnoticias.mx/confirmado-baja-california-sur-ya-se-prepara-para-regreso-a-las-aulas-en-agosto-sep/"
        ],
        color: StateInDefinition
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
        actividadesPresenciales: "Se contemplan 6 estrategias pedagógicas para fortalecer el trabajo y la organización académica con los estudiantes: <ol><li> Estrategias de aprendizaje e innovaciones pedagógicas. </li><li> Recuperación de aprendizajes. </li><li> Prevención de abandono escolar y mecanismo de retención. </li><li> Personal docente. </li><li> Corresponsabilidad. </li><li> Participación de las y los estudiantes. </li></ol>",
        aforosFiltrosSanitarios: "Se contempla la asistencia de 10 personas por aula y con distancia de 1.8m,  así como las medidas sanitarias incentivadas desde el inicio de la pandemia y sanitización de los espacios escolares.",
        referencias: [
            "http://www.educacionbc.edu.mx/regresoseguro/assets/pdf/estrategiaparaelregresoseguroaclasespresenciales20212022.pdf",
            "http://www.educacionbc.edu.mx/regresoseguro/assets/pdf/protocoloderegresoaclasescapacitacionapersonaldelasescuelas.pdf",
            "http://www.educacionbc.edu.mx/regresoseguro/"
        ],
        color: StateBack2School
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
        actividadesPresenciales: "Sin información",
        aforosFiltrosSanitarios: "Ante el aumento de contagios y el registro de estas variantes del coronavirus, la gobernadora Pavlovich instó a seguir con las acciones y programas de prevención, para seguir con las medidas y protocolos sanitarios rigurosos",
        referencias: [
            "http://www.sec.gob.mx/portal/index.php?op=nota&p=1033"
        ],
        color: StateNoInformation
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
        referencias: [
            "http://www.chihuahua.gob.mx/contenidos/podemos-pensar-en-regreso-clases-presenciales-el-proximo-ciclo-javier-corral"
        ],
        color: StateBack2School
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
        referencias: [
            "https://www.seducoahuila.gob.mx/assets/38-extraordinario-13-may-2021.pdf",
            "https://www.excelsior.com.mx/nacional/coahuila-regresara-a-clases-presenciales-el-23-de-agosto/1458394#:~:text=Coahuila%20regresar%C3%A1%20a%20clases%20el,clases%20presenciales%20con%20sistema%20h%C3%ADbrido."
        ],
        color: StateBack2School
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
        actividadesPresenciales: "<br>Comunicados oficiales indican encontrarse listos para este regreso a clases, y la modalidad dependerá del comportamiento del semáforo ante el Covid-19 y las indicaciones que emita la Secretaría de Salud. Indican iniciar el ciclo escolar el 30 de agosto, sin embargo no han definido la  modalidad. <br><br> El comunicado oficial (17 de junio de 2021) de la Cooridnación general de comunicación social de NL, indica que la reactivación educativa en colegios y escuelas de 25 municipios rurales de NL. ''No es regreso a clases (presenciales), es regreso a actividades escolares para que el maestro vaya adaptandose, vea que su escuela está en condiciones'' <br><br>",
        aforosFiltrosSanitarios: "La asistencia será de forma híbrida, en el que las aulas estarán a un 30% de su capacidad y los alumnos pueden seguir las clases a distancia.",
        referencias: [
            "https://www.eleconomista.com.mx/estados/En-agosto-se-definira-si-hay-regreso-a-clases-en-Nuevo-Leon-Jaime-Rodriguez-20210712-0090.html",
            "https://www.nl.gob.mx/publicaciones/calendario-escolar-para-el-ciclo-2021-2022",
            "https://twitter.com/SenlOficial/status/1405643117492158465/photo/2",
            "https://twitter.com/SenlOficial/status/1405643117492158465/photo/1"
        ],
        color: StateInDefinition
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
        referencias: [
            "https://www.tamaulipas.gob.mx/educacion/avisos/planteles-seleccionados-fase-2/"
        ],
        color: StateBack2School
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
        referencias: [
            "https://mieducacion.sepyc.gob.mx/sinaloa-coincide-con-el-presidente-andres-manuel-lopez-obrador-el-regreso-a-clases-es-por-el-convencimiento-nada-por-la-fuerza/"
        ],
        color: StateNoInformation
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
        referencias: [
            "https://www.elsiglodedurango.com.mx/2021/07/1329808.modelo-de-regreso-a-clases-sigue-sin-ser-definido-seed.html"
        ],
        color: StateInDefinition
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
        referencias: [
            "http://www.seduzac.gob.mx/portal/index.php"
        ],
        color: StateInDefinition
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
        referencias: [
            "https://slp.gob.mx/sege/Paginas/NOTICIAS/FECHAS-Y-MODALIDAD-DE-REGRESO-A-CLASES--SE-DAR%C3%81N-A-CONOCER-LA-PR%C3%93XIMA-SEMANA.aspx"
        ],
        color: StateInDefinition
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
        referencias: [
            "https://www.nayarit.gob.mx/seccion/educacion"
        ],
        color: StateInDefinition
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
        aforosFiltrosSanitarios: "Las principales acciones son el uso del cubrebocas es obligatorio para todos los niveles y sana distancia. <br> <br> Por otro lado, se emiten protocolos detallados para todos los niveles y actividades: <br> <br> Protocolo de acción ante COVID-19 para Grupos de Seguimiento Académico, Trámites presenciales y Entrega de materiales educativos aplicable a Educación Básica, Media Superior y Superior Docente <br> <br> Protocolo de actuación ante COVID-19 Sector Educativo para Actos Académicos Presenciales en escuelas de Educación Básica de la Secretaría de Educación del Estado de Jalisco. <br> <br> Protocolo de acción ante COVID-19 Para centros de formación para el trabajo, educación continua y academias. <br> <br> Protocolo de actuación ante COVID-19 Sector Educativo para la realización de exámenes presenciales del Sistema de Preparatoria Abierta. <br> <br> Protocolo de actuación ante COVID-19 Sector Educativo para la atención de actividades esenciales en Educación Media Superior. <br> <br> Protocolo de Acción ante COVID-19 para realizar Educación Física en los planteles escolares",
        referencias: [
            "https://www.jalisco.gob.mx/es/prensa/noticias/129538",
            "https://www.jalisco.gob.mx/es/prensa/noticias/127052",
            "https://www.facebook.com/educacion.jalisco/photos/a.446164440747/10158547049890748/",
            "https://portalsej.jalisco.gob.mx/plan-jalisco-para-la-reactivacion-economica/"
        ],
        color: StateBack2School
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
        referencias: [
            "http://www.iea.gob.mx/INTERNAS/comunicacion/2020/Boletin_959_2021.pdf",
            "http://www.iea.gob.mx/INTERNAS/comunicacion/2020/Boletin_965_2021.pdf",
            "http://www.iea.gob.mx/INTERNAS/regreso/pdfs/GUIASEP_REGRESOCLASES.pdf"
        ],
        color: StateBack2School
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
        referencias: [
            "https://www.seg.guanajuato.gob.mx/RegresoalasAulas/SitePages/Inicio.aspx",
            "https://www.seg.guanajuato.gob.mx/RegresoalasAulas/SitePages/Inicio.aspx",
            "https://notus.com.mx/regreso-a-clases-presenciales-en-guanajuato-30-agosto-2021/"
        ],
        color: StateBack2School
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
        referencias: [
            "https://queretaro.gob.mx/regresoaclaseguro.aspx"
        ],
        color: StateBack2School
    },
    {
        id: "MX-HID",
        name: "Hidalgo",
        regresoActividadesPresenciales: "No",
        fechaRetorno: "Solicitan postergar, fecha no definida",
        tipoModelo: "NA",
        reincorporacionVoluntaria: "check",
        reincorporacionGradual: "check",
        docentesVacunados: "check",
        alumnosVacunados: "close",
        nombreEstrategia: "Regreso Seguro a Clases en los centros educativos en el marco de la pandemia COVID 19, Operativo Escudo, Hidalgo Seguro",
        actividadesPresenciales: "De acuerdo a anuncios del gobernador de dicho estado en julio, pidió a las instituciones educativas públicas y privadas del estado postergar las clases presenciales en el estado, debido al incremento de casos de Covid-19 en los últimos días.",
        aforosFiltrosSanitarios: "Filtros escolares, suspención de registro de entrada y salida de toda la comunidad educativa (alumnos, docentes, personal administrativo y personal de apoyo a la educación , asi como al publico en general) que conlleve el empleo de instrumentos ocmpartidos, cada  institución definira el control de asistencia laboral, limpieza intensiva y desinfección continua de todas las areas de los centros educativos, ventilación en todas las areascampaas de comunicación , dichas estrtegias coordinadas por el Comite Participativo de Salud Escolar (CPSE).",
        referencias: [
            "https://periodico.hidalgo.gob.mx/?p=44435",
            "https://subrayado.com.mx/hidalgo/cuando-regresan-a-clases-hidalgo-inicio-ciclo-escolar-2021-2022-seph/"
        ],
        color: StateInDefinition
    },
    {
        id: "MX-COL",
        name: "Colima",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "Aún en prueba piloto de protocolos",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "check",
        reincorporacionGradual: "check",
        docentesVacunados: "check",
        alumnosVacunados: "close",
        nombreEstrategia: "Nos cuidamos con el ABCD contra Covid-19",
        actividadesPresenciales: "Se ecuentra en Prueba piloto, centrada en la asesoría académica y el apoyo socioemocional",
        aforosFiltrosSanitarios: "1. El primer filtro se aplicará en casa y antes de salir a la escuela, donde los padres de familia deben asegurarse de que sus hijos no presenten ningún síntoma y no hayan estado en contacto con una persona positivo a COVID19. <br><br> 2. En la escuela se escalonarán los horarios para que en la entrada no se junten los alumnos, y se instala el segundo filtro (temperatura y gel) en la puerta de entrada, uso correcto de cubrebocas cubriendo nariz y boca, guardando la sana distancia. <br><br> 3. Un tercer filtro, más a detalle, lo hace el maestro al entrar al salón y durante la jornada, observando a sus alumnos (calentura, estornudos, tos, etc.), y remitir a un lugar seguro y aislado a un posible alumno enfermo, hasta que venga a recogerlo de casa. Asimismo el maestro recibirá la carta compromiso de corresponsabilidad.",
        referencias: [
            "https://seceduccol-my.sharepoint.com/personal/publicaciones_web_secolima_gob_mx/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fpublicaciones%5Fweb%5Fsecolima%5Fgob%5Fmx%2FDocuments%2FPublicaciones%2FOtros%2F2021%2FPrueba%20Piloto%20de%20Asesori%CC%81a%20Aca%CC%81demicas%20y%20Apoyo%20Socioemocional%2Epdf&parent=%2Fpersonal%2Fpublicaciones%5Fweb%5Fsecolima%5Fgob%5Fmx%2FDocuments%2FPublicaciones%2FOtros%2F2021&originalPath=aHR0cHM6Ly9zZWNlZHVjY29sLW15LnNoYXJlcG9pbnQuY29tLzpiOi9nL3BlcnNvbmFsL3B1YmxpY2FjaW9uZXNfd2ViX3NlY29saW1hX2dvYl9teC9FUldlQjVMalQ4MUdud1FkUnNqZC0wb0I3SHI3RjlTcG5idldYWlhUSzJINkR3P3J0aW1lPUozS09XQjVWMlVn"
        ],
        color: StateBack2School
    },
    {
        id: "MX-MIC",
        name: "Michoacán de Ocampo",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto 2021",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "check",
        reincorporacionGradual: "check",
        docentesVacunados: "check",
        alumnosVacunados: "close",
        nombreEstrategia: "Escuela abierta",
        actividadesPresenciales: "La asistencia sera voluntaria  para alumnos, docentes  y personal administratvio, de acuerdo al semáforo epidemiológico. se priorizará a los niños, niñas y adolescentes que, durante el ciclo escolar han tenido una comunicación intermitente y una participación baja en actividades propuestas por el docente, asi como los que han tenido una participación prácticamente inexistente. Aesta modalidad se le denomina ''Escuela Abierta''.<br><br> Se priorizará a atención de alumnos en riesgo de reprobar o abandonar, alumnas y alomnos en condiciiones vulnerables, que presenten dificultades de comunicación , deberán se atendidos de manera prioritaria. <br><br> Las actividades a realizar<br> 1. Jornadas contra el rezago escolar y valoración diagnóstica. <br> 2.Asesoría pedagógica. <br> 3.Apoyo psicoemocional. <br> 4.Acciones de limpieza y sanitarias en el plantel educativa. <br> 5. Entrega de libros de texto, equipo y material didáctico. <br> 6. Trámites escolares. <br> 7.Utilización de equipos y servicios. <br> 8. Uso de infraestructura escolar (laboratorios, talleres).<br> 9. Acciones de construcción y mantenimeinto. <br> 10. Sesiones de órganos colegiados del plantel educativo. <br><br> ** aunque aun no hay una postura definitiva, según los medios",
        aforosFiltrosSanitarios: "Protocolo para prevenir contagios duranre el regreso prograsivo a clases presenciales en escuelas públicas y privadas de educación básica, media superior y superior , publciado el 27 de julio de 2021, en el cual se detallan las estregias para evitar contagios: Uso obligatorio del cubrebocas, puerta abiertas y evitar contacto con picaportes, filtro de hogar, filtro escolar , filtro de aula, capaictaciones para personal y alumnos, limpieza a profundidad de las superficies, espacios y materiales, clausura de bebederos, reorganizar descansos y actividades fisicas, se promoveran clases en espacios abiertos, lavado de mano, evitar compartir alimentos, promover el estornudo de etiqueta (cubrir con el angulo interno del codo), el uniforme escolar no es obligatorio, se limita el aforo de los eventos  especiales, las actividades de servicios escolares serán por cita, <ul><li>Se recabaran cartas de corresponsabilidad</li> <li>maximizar sana distancia y aprovechamiento de espacios abiertos y el uso permanente e irrestricto de cubrebocas</li> <li>lpimite del 40% diario de la población escolar</li> <li> No mas de 9 alumnas y alumnos y un docente por aula de educación primaria y telesecundaria</li> <li>No mas de 12 alumnos y alumnas y un docente por aula en escuelas secundarias generale sy técnicas</li> <li>No se permite en este periodo ningún tipkde expendio de alimentos ni se realizaran clases de educación fisica o artística</li> </ul>",
        referencias: [
            "https://aulas.see.gob.mx/wp-content/uploads/2021/06/PROTOCOLO-DE-SALUD-2021-EDUCACIO%CC%81N-CIRCULAR-9.pdf",
            "https://aulas.see.gob.mx/wp-content/uploads/2021/06/Circular-SEE-10-2021.pdf",
            "https://educacion.michoacan.gob.mx/category/avisos/"
        ],
        color: StateBack2School
    },
    {
        id: "MX-VER",
        name: "Veracruz de Ignacio de la Llave",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 agosto en EB y EMS",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "check",
        reincorporacionGradual: "check",
        docentesVacunados: "check",
        alumnosVacunados: "close",
        nombreEstrategia: "Veracruz educando a distancia",
        actividadesPresenciales: "",
        aforosFiltrosSanitarios: "El 24 de junio regresaron a las aulas, al respecto, se cuenta con 682 estrategias por sistema en los modelos presencial, mixto y virtual. La Secretaría de Educación estatal destacó que esta planeación incluye el acuerdo voluntario de la comunidad escolar, para lo que padres y madres recibirán una carta compromiso sobre el cuidado de la salud de sus hijos. <br><br>1.- Todas las escuelas ubicadas en municipios con Semáforo en color amarillo o naranja, darán atención únicamente en la modalidad a distancia. <br>2.- En los municipios que se mantenga el color verde del semáforo epidemiológico local, las instituciones podrán continuar según lo programado y decidido por cada centro escolar. <br><br>El personal del plantel educativo podrá asistir a sus escuelas si así lo acuerdan a realizar las tareas pertinentes con o sin estudiantes de acuerdo a los puntos 1 y 2.",
        referencias: [
            "https://www.sev.gob.mx/v1/noticias/leer/2354/"
        ],
        color: StateBack2School
    },
    {
        id: "MX-PUE",
        name: "Puebla",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de Agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "close",
        reincorporacionGradual: "close",
        docentesVacunados: "check",
        alumnosVacunados: "close",
        nombreEstrategia: "Modelo Educativo Híbrido en el Estado de Puebla Educación Básica y Media Superior Ciclo Escolar 2021-2022",
        actividadesPresenciales: "",
        aforosFiltrosSanitarios: "Las escuelas multigrado o de organización completa que puedan atender a toda su población de manera presencial todos los días, deben garantizar la sana distancia, así como la implementación del plan de atención (nivelación) de forma integrada a las jornadas académicas. Aquellas escuelas con mayor matrícula dividirán aforos cuya distribución puede ser por apellidos. ",
        referencias: [
            "http://sep.puebla.gob.mx/index.php/component/k2/prueba-2-2-2"
        ],
        color: StateBack2School
    },
    {
        id: "MX-TLA",
        name: "Tlaxcala",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 agosto en EB y EMS",
        tipoModelo: "Sin información",
        reincorporacionVoluntaria: "check",
        reincorporacionGradual: "check",
        docentesVacunados: "check",
        alumnosVacunados: "close",
        nombreEstrategia: "Sin información",
        actividadesPresenciales: "",
        aforosFiltrosSanitarios: "Una comisión de la Secretaría de Educación Pública (SEPE) y el SNTE trabajando para la realización de una logística y la atención en el regreso a clases presenciales. Universidad Autónoma de Tlaxcala (UATx) reconsideraría el regreso a las clases.",
        referencias: [
            "https://www.milenio.com/politica/comunidad/duda-regreso-clases-presenciales-tlaxcala-tercer-ola-covid"
        ],
        color: StateBack2School
    },
    {
        id: "MX-MEX",
        name: "Estado de México",
        regresoActividadesPresenciales: "",
        fechaRetorno: "Fecha no definida",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "check",
        reincorporacionGradual: "check",
        docentesVacunados: "check",
        alumnosVacunados: "close",
        nombreEstrategia: "Plan de Reapertura de regreso a clases 2020",
        actividadesPresenciales: "En 2020, presento el plan de reapertura de regreso a clases. Sin embargo, el ciclo pasado fue a distancia y aun no existe una postura definida para el ciclo 21-22. De acuerdo con el COMUNICADO SEB 07/06/2021-Regreso seguro a clases. Indica que deben cumplirse condiciones para asegurar el regreso, pero no confirmando una fecha para la incorporación presencial",
        aforosFiltrosSanitarios: "Se emite la Guía de Orientación para la Reapertura de las Escuelas ante COVID-19, en la cual indica la implementación del  Comité Participativo de Salud Escolar . aplicación de protocolos y filtros de corresponsabilidad en casa, a la entrada del plantel y en el salón de clases",
        referencias: [
            "https://subeducacionbasica.edomex.gob.mx/sites/subeducacionbasica.edomex.gob.mx/files/files/SEBComunicado07062021.pdfhttps://www.unionedomex.mx/articulo/2021/07/08/educacion/regreso-clases-edomex-2021-2022-conoce-las-actividades-previas",
            "http://148.215.3.96:8283/imgcovid/PLAN%20REAPERTURA%2019%20de%20Mayo.pdf",
            "https://www.eluniversal.com.mx/metropoli/edomex/sin-definir-si-el-ciclo-escolar-2021-2022-iniciara-de-forma-presencial-en-edomex",
            "https://salud.edomex.gob.mx/isem/ac_boletines_informativos "
        ],
        color: StateInDefinition
    },
    {
        id: "MX-CMX",
        name: "Ciudad de México",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "Tentativamente el próximo 30 de agosto",
        tipoModelo: "Sin información",
        reincorporacionVoluntaria: "check",
        reincorporacionGradual: "check",
        docentesVacunados: "check",
        alumnosVacunados: "check",
        nombreEstrategia: "Plan Gradual de Regreso seguro a las escuelas",
        actividadesPresenciales: "El regreso a clases presenciales será escalonado, en el que los grupos se dividirán en 3 subgrupos, el primero asistirá Lunes y Miércoles y los demás días realizará actividades escolares en casa. El segundo irá a clases los días Martes y Jueves, y del mismo modo, los demás días realizará actividades escolares en casa. Mientras que el tercer grupo será el de los alumnos que requieran un reforzamiento de conocimientos",
        aforosFiltrosSanitarios: "Se aplicarán 3 filtros sanitarios:  filtro en casa, el filtro a la entrada de la escuela y el filtro a la entrada del salón.",
        referencias: [
            "https://www.capital21.cdmx.gob.mx/noticias/?p=19324"
        ],
        color: StateBack2School
    },
    {
        id: "MX-MOR",
        name: "Morelos",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "check",
        reincorporacionGradual: "check",
        docentesVacunados: "check",
        alumnosVacunados: "close",
        nombreEstrategia: "Regreso a clases",
        actividadesPresenciales: "El periodo de inscripciones y reinscripciones será del 16 de agosto al 10 de septiembre, mientras que las sesiones del Comité Participativo de Salud Escolar, así como las jornadas de limpieza en escuelas serán del 11 al 13 de agosto de 2021. con el fin de estar listo para el inicio de ciclo",
        aforosFiltrosSanitarios: "Terminó en julio el Programa Piloto de Regreso a Clases Presenciales Seguras, voluntarias, escalonadas y graduales sin incidente alguno para todos los que participaron en este proyecto: alumnos, padres de familia, docentes, administrativos y personal de apoyo",
        referencias: [
            "https://morelos.gob.mx/?q=prensa/nota/comunicado-de-prensa-secretaria-de-educacion-3",
            "https://elqueretano.info/trafico/presentan-calendario-escolar-2021-2022-para-morelos/"
        ],
        color: StateBack2School
    },
    {
        id: "MX-GRO",
        name: "Guerrero",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "31 de agosto 2021/ 03 de septiembre de 2021",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "check",
        reincorporacionGradual: "check",
        docentesVacunados: "check",
        alumnosVacunados: "close",
        nombreEstrategia: "De regreso a la escuela",
        actividadesPresenciales: "El próximo 31 de agosto arrancará de manera presencial el ciclo escolar 2021-2022 en casi 12 mil escuelas de Guerrero. regreso a clases será de manera gradual y escalonada",
        aforosFiltrosSanitarios: "Se considerarán tres factores: que el estado se mantenga permanentemente en el color verde en el Semáforo de Riesgo Epidemiológico; que las escuelas cuenten con un protocolo sanitario, un plan escolar que refleje la organización administrativa y académica del plantel, y el fortalecimiento académico a través de una guía estatal para el regreso a clases y el cronograma de actividades para la apertura de escuelas en todos los niveles. Por otro lado, los trabajadores de la educación hayan sido vacunados y que el semáforo epidemiológico esté en verde.",
        referencias: [
            "https://heraldodemexico.com.mx/nacional/2021/6/22/guerrero-anuncia-regreso-clases-presenciales-en-agosto-309005.html",
            "https://www.elsoldemexico.com.mx/republica/sociedad/regreso-a-clases-presenciales-en-guerrero-sera-el-3-de-septiembre-preve-gobernador-pandemia-covid-19-6819985.html",
            "https://snte.org.mx/seccion14/snte-condiciona-el-regreso-a-clases-presenciales-en-guerrero/",
            "https://snte.org.mx/seccion14/con-seguridad-volvemos-a-la-escuela-snte/"
        ],
        color: StateBack2School
    },
    {
        id: "MX-OAX",
        name: "Oaxaca",
        regresoActividadesPresenciales: "Por definir",
        fechaRetorno: "Por definir",
        tipoModelo: "Por definir",
        reincorporacionVoluntaria: "check",
        reincorporacionGradual: "check",
        docentesVacunados: "check",
        alumnosVacunados: "close",
        nombreEstrategia: "Por definir",
        actividadesPresenciales: "De acuerdo con la Circular N. SGE.DPE/003/2021, se exhorta a actuar con apego al semáforo epidemilógico. El regreso presencial a clases será cuando el semáforo se encuentre en verde y el proceso de consenso Otros medios han indicado que de regresar a la presencialidad seria voluntario y paulatino e inciaria a finales del mes de agosto",
        aforosFiltrosSanitarios: "Se implementa un proceso integral y amplio de rehabilitación de baños, y de suministro de agua potable para que estén listas para aplicar el protocolo sanitario anticovid y se pueda reanudar las clases presenciales en los tiempos que reclama el plan de reanudación de actividades escolares después de la pandemia por el SARS-COV-2 ",
        referencias: [
            "https://www.oaxaca.gob.mx/ieepo/circular-no-sge-dpe-003-2021-exhorto-a-escuelas-particulares/",
            "https://www.milenio.com/estados/regreso-clases-presenciales-oaxaca-agosto-voluntario"
        ],
        color: StateInDefinition
    },
    {
        id: "MX-TAB",
        name: "Tabasco",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "1 al 17 de septiembre",
        tipoModelo: "Sin información",
        reincorporacionVoluntaria: "check",
        reincorporacionGradual: "check",
        docentesVacunados: "check",
        alumnosVacunados: "close",
        nombreEstrategia: "Sin información",
        actividadesPresenciales: "Sin información",
        aforosFiltrosSanitarios: "Se están analizando los mecanismos y viabilidad que se emplearía para garantizar que sea seguro y ordenado, tanto para los alumnos, maestros, personal administrativo y todos los empleados de las escuelas. Analiza de tres a cuatro opciones para el regreso a clases presenciales; anuncia que en máximo 20 días iniciará la vacunación de población mayor de 18 a 29 años",
        referencias: [
            "https://heraldodemexico.com.mx/nacional/2021/7/22/tabasco-no-volvera-clases-presenciales-en-agosto-analizan-sea-en-septiembre-318653.html"
        ],
        color: StateBack2School
    },
    {
        id: "MX-CHP",
        name: "Chiapas",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "check",
        reincorporacionGradual: "check",
        docentesVacunados: "check",
        alumnosVacunados: "close",
        nombreEstrategia: "No disponibles",
        actividadesPresenciales: "No disponibles",
        aforosFiltrosSanitarios: "Cada municipio de Chiapas responde a distintas realidades, aunque  en todas se aplicarán los protocolos que correspondan para que con cuidados  se continue con el servicio educativo.  Con esa finalidad se conformarán  comités de salud en cada escuela, el  uso obligatorio del cubre bocas, la sana distancia, suspensión de cualquier  tipo de ceremonias y reuniones masivas. Asimismo,  se garantizará el abasto de agua y jabón, el uso del gel anti bacterial y la revisión  de temperatura en cada plantel, entre otras acciones",
        referencias: [
            "https://www.eluniversal.com.mx/estados/regreso-clases-presenciales-en-chiapas-sera-el-proximo-30-de-agosto-anuncian-autoridades"
        ],
        color: StateBack2School
    },  
    {
        id: "MX-CAM",
        name: "Campeche",
        regresoActividadesPresenciales: "Pendiente de confirmar",
        fechaRetorno: "Pendiente de confirmar",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "check",
        reincorporacionGradual: "check",
        docentesVacunados: "check",
        alumnosVacunados: "close",
        nombreEstrategia: "Plan para la Reactivación Escalonada Mixta",
        actividadesPresenciales: "El 4 de mayo, el regreso a clases en una de las 137 escuelas en las que se echó a andar el plan de reactivación en Campeche tuvo una corta duración: a dos semanas de que los estudiantes retornaran a sus salones, se detectó el caso de una docente positiva a COVID-19.",
        aforosFiltrosSanitarios: "Sin información",
        referencias: [
            "https://politica.expansion.mx/estados/2021/05/22/campeche-frena-el-regreso-a-clases-presenciales-por-aumento-de-casos-de-covid-19"
        ],
        color: StateInDefinition
    },
    {
        id: "MX-YUC",
        name: "Yucatán",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 agosto en EB y EMS",
        tipoModelo: "Sin información",
        reincorporacionVoluntaria: "check",
        reincorporacionGradual: "check",
        docentesVacunados: "check",
        alumnosVacunados: "close",
        nombreEstrategia: "Regreso seguro a clases",
        actividadesPresenciales: "Sin información",
        aforosFiltrosSanitarios: "Estrategia estatal de Regreso Seguro a Clases, elaborada con base en los lineamientos que emitió la Federación y la participación de la Mesa Central conformada por representantes de seis Secretarías, entre ellas la de Educación y Salud, el Congreso del Estado, universidades, sindicatos, cámaras empresariales, la Comisión estatal de Derechos Humanos (Codhey), padres de familia, estudiantes y colegios.",
        referencias: [
            "http://www.educacion.yucatan.gob.mx/boletines/index"
        ],
        color: StateBack2School
    },
    {
        id: "MX-ROO",
        name: "Quintana Roo",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 agosto en EB y EMS",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "check",
        reincorporacionGradual: "close",
        docentesVacunados: "check",
        alumnosVacunados: "close",
        nombreEstrategia: "Plan para Regreso a Clases Seguro",
        actividadesPresenciales: "Centros Comunitarios de Aprendizaje",
        aforosFiltrosSanitarios: "Cuatro pasos: <br><br> 1) estar en semáforo amarillo tanto federal como estatal para abrir los Centros Comunitarios de Aprendizaje donde se ofrece asesoría; <br> 2) rehabilitación de escuelas (infraestructura, limpieza y orden); <br> 3) aplicación de un diagnóstico académico a/; 4) y que cada institución educativa entregue o actualice su plan de regreso a clases, cumpliendo con los protocolos sanitarios.Prueba para diagnosticar el rezago entre los alumnos tras un año y tres meses de clases en línea. Los padres de familia los encargados de aplicar la prueba, que consistirá en un grupo de preguntas de lo que tendrían que conocer según su grado de escolaridad.",
        referencias: [
            "https://qroo.gob.mx/seq/detallan-acciones-de-la-seq-para-el-regreso-clases-destacando-cuatro-importantes-temas"
        ],
        color: StateBack2School
    },
];

var DataStates_v2 = [
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
        color: StateInDefinition
    },
    {
        id: "MX-BCN",
        name: "Baja California Norte",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "check_circle",
        reincorporacionGradual: "check_circle",
        docentesVacunados: "check_circle",
        docentesVacunadosPorcentaje: "",
        alumnosVacunados: "cancel",
        nombreEstrategia: "Regreso Seguro a Clases Presenciales",
        actividadesPresenciales: "Se preveé que 24 escuelas vuelvan a clases presenciales durante la primera semana del ciclo 2021-2022 (Lunes 30 de agosto) <br><br>La asistencia será voluntaria, gradual y escalonada. Durante septiembre, los planteles se duplicarán semanalmente, de acuerdo a la disposición de escuelas y la autorización de padres de familia. las clases serán en un modelo híbrido entre presenciales y a distancia, ya que los alumnos seleccionados asistirán tres y dos días de la semana, de manera alternada, a partir de la primera letra del apellido.   el regreso a clases será en 24 escuelas (cuatro por municipio y dos públicas y dos privadas), en la segunda semana serán 48; en la siguiente 72 y después 96, de acuerdo a la evolución y monitoreo del manejo de salud. Serán los padres de familia los que aprueben el regreso de clases presenciales de sus hijos.",
        aforosFiltrosSanitarios: "El regreso a las escuelas de manera presencial, se realizará de forma gradual y segura, incluyendo la realización de jornadas de limpieza previas al ingreso de los estudiantes. las escuelas de cada municipio o poblado serán divididas en áreas que incluyan un centro de salud que se encargará de dar atención a esa región en caso de ser necesario.  Los padres de familia y las escuelas deberán coordinar filtros para evitar la propagación de la enfermedad. en caso de que se detecte un caso sospechoso, el grupo será suspendido por 14 días, mientras que si se confirma un caso de COVID-19 se suspenderán las clases en todo el plantel. Las aulas tendrán un máximo de 10 personas.",
        referencias: [
            "https://www.sandiegouniontribune.com/en-espanol/noticias/bc/articulo/2021-07-26/baja-california-anuncia-regreso-a-clases-presenciales-semaforo-epidemiologico-regional-permanece-verde",
            "http://www.educacionbc.edu.mx/regresoseguro/",
            "https://www.jornada.com.mx/notas/2021/07/26/estados/planean-regreso-a-clases-gradual-en-baja-california-a-partir-de-agosto/#:~:text=El%20gobierno%20de%20Baja%20California,forma%20gradual%2C%20escalonada%20y%20segura"
        ],
        color: StateBack2School
    },
    {
        id: "MX-SON",
        name: "Sonora",
        regresoActividadesPresenciales: "Por definir",
        fechaRetorno: "No aplica",
        tipoModelo: "A distancia",
        reincorporacionVoluntaria: "check_circle",
        reincorporacionGradual: "check_circle",
        docentesVacunados: "check_circle",
        docentesVacunadosPorcentaje: "87",
        alumnosVacunados: "cancel",
        nombreEstrategia: "Sin información",
        actividadesPresenciales: "Regreso a clases presenciales debe darse con una estrategia conjunta para hacerlo de la forma más segura: Gobernadora Pavlovich.",
        aforosFiltrosSanitarios: "Ante el aumento de contagios y el registro de estas variantes del coronavirus, la gobernadora Pavlovich instó a seguir con las acciones y programas de prevención, para seguir con las medidas y protocolos sanitarios rigurosos: <ol><li> Salones de clases con buena ventilación.</li> <li> Pupitres separados al menos metro y medio entre cada uno.</li> <li> Máximo 15 alumnos en cada salón.</li> <li> Uso de gel antibacterial y lavado frecuente de manos.</li><li> Uso correcto de cubrebocas en todo momento.</li></ol>",
        referencias: [
            "http://www.sec.gob.mx/portal/index.php?op=nota&p=1033",
            "https://kidstudia.com/guia/todo-sobre-el-regreso-a-clases-en-mexico/sonora/#medidas+para+el+regreso+a+clases+en+sonora"
        ],
        color: StateInDefinition
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
        color: StateBack2School
    },
    {
        id: "MX-COA",
        name: "Coahuila de Zaragoza",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "23 de agosto",
        tipoModelo: "Híbrido", 
        reincorporacionVoluntaria: "check_circle",
        reincorporacionGradual: "check_circle",
        docentesVacunados: "check_circle",
        docentesVacunadosPorcentaje: "",
        alumnosVacunados: "cancel",
        nombreEstrategia: "No disponible",
        actividadesPresenciales: "Del 23 de agosto al 03 de septiembre se tiene previsto realizar pruebas diagnósticas y una evaluación para identificar el abandono y rezago escolar.  Del 6 al 30 de septiembre se pretende llevar a cabo un período de recuperación para alumnos en rezago. El regreso a clases presenciales será obligatorio paras los docentes.",
        aforosFiltrosSanitarios: " Previo a la apertura de las escuelas deberá pedírseles a los padres de familia, entre otras cosas, que sus hijos acudan bañados a la escuela y que en caso de notar algún síntoma de enfermedad como fiebre, tos, dolor de garganta o de cabeza no podrán asistir y deberá notificarse a la autoridad del plantel. Las escuelas por su parte deberán prepararse con lo siguiente: Insumos para colocar un filtro a la entrada del plantel, tanto para el personal que trabaja en la escuela como para los alumnos En el filtro deberá haber: • Alcohol en gel con alcohol isopropílico al 70% para la higiene de manos a la entrada al plantel • Termómetro infrarrojo para la toma de temperatura previo a la entrada al plantel. Los salones de clases deberán contar con: <ul> <li>• Alcohol en gel con alcohol isopropílico al 70%.</li> <li>• Caja de pañuelos desechables.</li> <li>• Bote de basura con pedal y tapa.</li> <li>• Toallitas desinfectantes para la limpieza del pupitre y/o mesas de trabajo. Las áreas comunes (patios, canchas, áreas de juego) deberán limpiarse como se hace normalmente todos los días, al igual que el resto de las instalaciones, poniendo énfasis en las superficies de mayor contacto como escritorios, mesas, interruptores, picaportes.</li> </ul><br><br> Todos los baños deberán contar con agua, jabón, sanitas para secarse las manos, papel higiénico y botes de basura con pedal y tapa. <br> Existe la posibilidad de transmisión de SARS-CoV-2 mediante inhalación de la aerosoles fecales por lo cual se debe poner especial atención en la ventilación de los baños, así como en la utilización estricta de cubreboca al acceder a ellos. Se recomienda educar a los alumnos a bajar la tapa del inodoro antes de jalar la palanca.",
        referencias: [
            "https://www.elheraldodesaltillo.mx/2021/07/27/habra-periodo-de-diagnostico-y-otro-de-recuperacion-al-regreso-a-clases-en-coahuila/",
            "https://vanguardia.com.mx/articulo/regreso-clases-sera-obligatorio-para-los-profesores-en-coahuila",
            "https://www.saludcoahuila.gob.mx/COVID19/documentos/MANUAL%20REAPERTURA%20ESCOLAR%202021.pdf",
            "https://www.elheraldodesaltillo.mx/2021/07/05/volverian-el-23-de-agosto-a-clases-presenciales-90-escuelas-en-coahuila/"
        ],
        color: StateBack2School
    },
    {
        id: "MX-NLE",
        name: "Nuevo León",
        regresoActividadesPresenciales: "Por definir",
        fechaRetorno: "30 de agosto en EB y EMS",
        tipoModelo: "A distancia",
        reincorporacionVoluntaria: "info",
        reincorporacionGradual: "info",
        docentesVacunados: "check_circle",
        docentesVacunadosPorcentaje: "97.9",
        alumnosVacunados: "cancel",
        nombreEstrategia: "No disponible",
        actividadesPresenciales: "Comunicados oficiales indican encuentrarse listos para este regreso a clases, y la modalidad dependerá del comportamiento del semáforo ante el Covid-19 y las indicaciones que emita la Secretaría de Salud. Indican iniciar el ciclo escolar el 30 de agosto, sin embargo no han definido la  modalidad. <br><br> El comunicado oficial (17 de junio de 2021) de la Cooridnación general de comunicación social de NL,  idnica que la reactivación educativa en colegios y escuelas de 25 municipios rurales de NL. No es regreso a clases (presenciales), es regreso a actividades escolares para que el maestro vaya adaptandose, vea que su escuela está en condiciones<br><br> Por definir el regreso presencial y en qué modelo. La UANL regresó el lunes 2 de agosto de 2021 con clases a distancia.  La Universidad de Monterrey (UDEM) regresó a la presencialidad pero con modelo híbrido.",
        aforosFiltrosSanitarios: "La asistencia será de forma híbrida, en el que las aulas estarán a un 30% de su capacidad y los alumnos pueden seguir las clases a distancia.",
        referencias: [
            "https://www.eleconomista.com.mx/estados/En-agosto-se-definira-si-hay-regreso-a-clases-en-Nuevo-Leon-Jaime-Rodriguez-20210712-0090.html",
            "https://www.nl.gob.mx/publicaciones/calendario-escolar-para-el-ciclo-2021-2022",
            "https://twitter.com/SenlOficial/status/1405643117492158465/photo/2",
            "https://twitter.com/SenlOficial/status/1405643117492158465/photo/1"
        ],
        color: StateInDefinition
    },
    {
        id: "MX-TAM",
        name: "Tamaulipas",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "check_circle",
        reincorporacionGradual: "check_circle",
        docentesVacunados: "check_circle",
        docentesVacunadosPorcentaje: "",
        alumnosVacunados: "cancel",
        nombreEstrategia: "Jornada Presencial de Regularización",
        actividadesPresenciales: "Expresó que se evaluarán las condiciones de cada región y de esta manera se determinará el retorno a las aulas educativas para el 30 de agosto, aunque no se podrá obligar a nadie, por lo que será voluntario y se respetará la decisión. <br><br>Educación básica se incorpora el 30 de agosto , Educación Media Superior inica el 21 de septiembre y Educación superior, dependera si es semestral o cuatrimestral. <br> Curso un Pilotaje para el regreso a clases, el cual cuenta con 2 fases de implementación.",
        aforosFiltrosSanitarios: "Están por arrancar un pilotaje denominado Jornada Presencial de Regularización, fase 2. El regreso a las aulas será en los municipios donde se tenga semáforo verde",
        referencias: [
            "https://www.tamaulipas.gob.mx/educacion/avisos/planteles-seleccionados-fase-2/",
            "https://www.milenio.com/politica/comunidad/regreso-a-clases-presenciales-en-tamaulipas-sera-voluntario",
            "https://www.tamaulipas.gob.mx/educacion/avisos/planteles-seleccionados-fase-2/",
            "https://www.tamaulipas.gob.mx/educacion/regresoaclasespresenciales-fasepiloto-boletines/",
            "https://kidstudia.com/guia/todo-sobre-el-regreso-a-clases-en-mexico/tamaulipas/",
            "https://www.milenio.com/politica/regreso-clases-vacaciones-ciclo-2021-2022-tamaulipas",
            "https://www.elsoldetampico.com.mx/local/regional/regreso-a-clases-presenciales-en-tamaulipas-sera-voluntario-cabeza-de-vaca-7026334.html",
            "https://www.hoytamaulipas.net/notas/464556/Regresaran-a-clases-presenciales-en-Tamaulipas-el-30-de-agosto.html"
        ],
        color: StateBack2School
    },
    {
        id: "MX-SIN",
        name: "Sinaloa",
        regresoActividadesPresenciales: "Sin información",
        fechaRetorno: "No aplica",
        tipoModelo: "A distancia",
        reincorporacionVoluntaria: "check_circle",
        reincorporacionGradual: "check_circle",
        docentesVacunados: "check_circle",
        docentesVacunadosPorcentaje: "90",
        alumnosVacunados: "cancel",
        nombreEstrategia: "Sin información",
        actividadesPresenciales: "En Sinaloa existen elementos para un regreso a clases gradual y focalizado, además de seguro para las niñas, niños y jóvenes, de acuerdo a la instrucción del gobernador Quirino Ordaz Coppel, quien fue reconocido por el presidente de la República, Andrés Manuel López Obrador, como el primer mandatario que solicitó la vacunación a las y los maestros del país para un regreso seguro a las escuelas.",
        aforosFiltrosSanitarios: "Regreso a las aulas en Sinaloa deberá atender condiciones de cada comunidad. Regreso a clases en Sinaloa será de forma gradual, focalizado y seguro. Experiencia previa de 955 Centros Comunitarios de Aprendizaje, donde se atendió a 26 mil 26 alumnos con rezago educativo. El congreso del Estado tiene la postura de “Estamos ansiosos porque los estudiantes regresen, pero la tercera ola de contagios es alarmante, ante este panorama es necesario que las autoridades actúen con prudencia: no hay condiciones del regreso seguro a las aulas”",
        referencias: [
            "https://mieducacion.sepyc.gob.mx/sinaloa-coincide-con-el-presidente-andres-manuel-lopez-obrador-el-regreso-a-clases-es-por-el-convencimiento-nada-por-la-fuerza/"
        ],
        color: StateInDefinition
    },
    {
        id: "MX-DUR",
        name: "Durango",
        regresoActividadesPresenciales: "Por definir",
        fechaRetorno: "Por definir",
        tipoModelo: "A distancia",
        reincorporacionVoluntaria: "info",
        reincorporacionGradual: "cancel",
        docentesVacunados: "check_circle",
        docentesVacunadosPorcentaje: "100",
        alumnosVacunados: "cancel",
        nombreEstrategia: "No disponible",
        actividadesPresenciales: "Se deberá platicar con maestros, maestras, padres de familia y alumnos. No se regresará a clases presenciales si las instalaciones no están en buenas condiciones para recibir a los alumnos.",
        aforosFiltrosSanitarios: "No disponible",
        referencias: [
            "https://www.publimetro.com.mx/mx/nuevo-leon/2021/08/02/jovenes-retoman-sus-actividades-academicas-en-nuevo-leon.html",
            "https://www.youtube.com/watch?v=yqr1QurjGxA&t=2233s https://www.elfinanciero.com.mx/nacional/2021/06/01/cuantos-maestros-y-maestras-han-sido-vacunados-contra-covid-en-mexico-esto-dice-la-sep/",
            "https://www.infobae.com/america/mexico/2021/08/04/ayudenme-a-decidir-la-insolita-encuesta-de-el-bronco-sobre-el-regreso-a-clases-en-nuevo-leon/",
            "https://www.eleconomista.com.mx/estados/En-agosto-se-definira-si-hay-regreso-a-clases-en-Nuevo-Leon-Jaime-Rodriguez-20210712-0090.html",
            "https://www.nl.gob.mx/publicaciones/calendario-escolar-para-el-ciclo-2021-2022",
            "https://twitter.com/SenlOficial/status/1405643117492158465/photo/2",
            "https://twitter.com/SenlOficial/status/1405643117492158465/photo/1"
        ],
        color: StateInDefinition
    },
    {
        id: "MX-ZAC",
        name: "Zacatecas",
        regresoActividadesPresenciales: "Por definir",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "check_circle",
        reincorporacionGradual: "check_circle",
        docentesVacunados: "check_circle",
        docentesVacunadosPorcentaje: "90.6",
        alumnosVacunados: "cancel",
        nombreEstrategia: "Regreso a clases presenciales",
        actividadesPresenciales: "Solo se publicó exhorto de la legislatura local para que la Secretaría de Educación y la Secretaría de Salud del Estado de Zacatecas elaboren un plan estratégico de regreso a clases presenciales seguro, ordenado, gradual, escalonado y cauto; con todos los protocolos de salud establecidos, además de valorar la posibilidad de un regreso a clases inmediato en aquellas instituciones públicas y privadas pequeñas, con pocos alumnos y donde las condiciones físicas así lo permitan.<br><br>Sin embargo, Aún no se puede fijar la postura, hasta conocer las condiciones del semáforo epidemiológico y el lineamiento federal.",
        aforosFiltrosSanitarios: "De acuerdo con la encuesta realizada por la Secretaría de Educación de Zacatecas (SEZ) a 101 mil 808 madres, padres de familia y tutores, el 81.3 por ciento dijo que está de acuerdo en que niñas, niños y adolescentes regresen a las escuelas de educación básica de manera presencial. El 92.3 por ciento se mostró dispuesto a colaborar en el establecimiento de los filtros sanitarios en casa, escuela y salón de clases, tal como lo establecen los protocolos de la Secretaría de Educación Pública (SEP). Se respetará la sana distancia, se suspenderán las ceremonias y los alumnos tendrán acceso a jabón, agua y gel alcoholado. <br><br>LA UAZ hará encuesta de movilidad y convivencia, “ya se tienen claros los protocolos de seguridad, de sanitización para todos los espacios, solo veremos si será escalonado, de acuerdo a los espacios o por nivel educativo, sin embargo, la decisión se tomará en agosto. ",
        referencias: [
            "http://www.seduzac.gob.mx/portal/index.php",
            "http://www.seduzac.gob.mx/portal/index.php ",
            "https://www.zacatecas.gob.mx/mas-de-81-de-madres-y-padres-de-familia-estan-de-acuerdo-en-que-alumnos-de-educacion-basica-regresen-a-las-aulas/ ",
            "https://imagenzac.com.mx/capital/estudiantes-regresaran-a-las-aulas-el-30-de-agosto/",
            "http://ntrzacatecas.com/2021/07/12/prepara-uaz-encuesta-de-movilidad-y-convivencia/"
        ],
        color: StateInDefinition
    },
    {
        id: "MX-SLP",
        name: "San Luis Potosí",
        regresoActividadesPresenciales: "Por definir",
        fechaRetorno: "Sin información",
        tipoModelo: "A distancia",
        reincorporacionVoluntaria: "info",
        reincorporacionGradual: "info",
        docentesVacunados: "check_circle",
        docentesVacunadosPorcentaje: "90",
        alumnosVacunados: "cancel",
        nombreEstrategia: "Sin información",
        actividadesPresenciales: "La autoridad educativa federal dará a conocer información para el regreso a clases y en reunión de CONAEDU",
        aforosFiltrosSanitarios: "No habrá regreso a clases presenciales durante el mes de agosto, además recordó que para el regreso a clases presenciales, cuando existan las condiciones sanitarias, se aplicarán nueve intervenciones o medidas para asegurar el bienestar de la comunidad escolar. <br><br> Hubo una reapertura del 15% de escuelas en junio. El saldo fueron dos casos de contagios en docentes y nueve alumnos",
        referencias: [
            "https://slp.gob.mx/sege/Paginas/NOTICIAS/FECHAS-Y-MODALIDAD-DE-REGRESO-A-CLASES--SE-DAR%C3%81N-A-CONOCER-LA-PR%C3%93XIMA-SEMANA.aspx"
        ],
        color: StateInDefinition
    },
    {
        id: "MX-NAY",
        name: "Nayarit",
        regresoActividadesPresenciales: "Por definir",
        fechaRetorno: "Por definir",
        tipoModelo: "A distancia",
        reincorporacionVoluntaria: "check_circle",
        reincorporacionGradual: "check_circle",
        docentesVacunados: "check_circle",
        docentesVacunadosPorcentaje: "",
        alumnosVacunados: "cancel",
        nombreEstrategia: "Aprende en casa",
        actividadesPresenciales: "Se tenía previsto que algunos municipios de la Sierra regresarán a clases presenciales en mayo sin embargo ante el alza en casos de covid y el retroceso del semáforo de verde a amarillo dicho iniciativa se frenó. <br><br>El regreso a clases para educación básica está programado para el 10 de agosto, siempre y cuando Nayarit se encuentre en semáforo verde.  <br><br>En estos momentos el Estado de Nayarit NO se encuentra en condiciones de regresar a clases presenciales por el alto índice de incrementos de casos de COVID-19”, declaró en entrevista Martín Isaac Pérez, Subsecretario de Educación Media Superior y Superior en el Estado de Nayarit. ",
        aforosFiltrosSanitarios: "Siguiendo los protocols establecidos por Gobierno Federal <br><br>En caso de que se reanuden las clases presenciales en el estado, se tomarán la siguientes medidas: <ol><li>Establecimiento de Comités de salud escolar <li>Mantener sana distancia y uso general del cubreboca en los planteles.</li> <li>Acceso a agua y jabón.</li> <li>Suspensión de todo acto cívico o ceremonia.</li> <li>Maximización del uso de espacios abiertos.</li> <li>Detección temprana de contagios.</li> <li>Cierre de escuelas en caso de contagio.</li></ol>",
        referencias: [
            "https://www.nayarit.gob.mx/seccion/educacion",
            "https://meridiano.mx/seccion/nayarit/nayarit-no-est-en-condiciones-de-regresar-a-clases-presenciales-educaci-n-1/                                         https://www.nayarit.gob.mx/seccion/educacion#:~:text=El%20'Verano%20Divertido'%20iniciar%C3%A1%20el,cuando%20existan%20las%20condiciones%20sanitarias",
            "https://kidstudia.com/guia/todo-sobre-el-regreso-a-clases-en-mexico/nayarit/",
            "https://meridiano.mx/seccion/nayarit/nayarit-no-est-en-condiciones-de-regresar-a-clases-presenciales-educaci-n-1/"
        ],
        color: StateInDefinition
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
        docentesVacunadosPorcentaje: "",
        alumnosVacunados: "cancel",
        nombreEstrategia: "Modelo hibrido y opcional de regreso a clases-Regreso a clases presenciales",
        actividadesPresenciales: "Gobierno estatal anunció que el regreso a las aulas en educación básica será el próximo 30 de agosto, a través de un modelo híbrido y opcional para las familias, que permitirá tener clases presenciales, mientras que en educación media superior y superior se regresará a distancia en agosto y en septiembre de manera presencial; la Universidad de Guadalajara comenzará su ciclo escolar 2021-B de forma virtual el 10 de agosto y será a finales de este mes cuando analice la posibilidad de iniciar la fase presencial el 15 de septiembre. <br><br>La Universidad de Guadalajara mantiene modelo a distancia. <br><br>El regreso a clases será presencial, pero las familias de los estudiantes decidirán si envían o no a sus hijas o hijos a la escuela  Jalisco solicitará a la federación reforzar la vacunación en el AMG en jóvenes de 15 a 30 años, quienes forman parte de la educación media y media superior  <br><br>Por otro lado, indican estar sujetos al semaforo epidemiológico.",
        aforosFiltrosSanitarios: "Elas principales acciones son el uso del cubrebocas es obligatorio para todos los niveles y sana distancia<br>Por otro lado, se emiten protocolos detallados para todos los niveles y actividades:<br>Protocolo de acción ante COVID-19 para Grupos de Seguimiento Académico, Trámites presenciales y Entrega de materiales educativos aplicable a Educación Básica, Media Superior y Superior Docente<br>Protocolo de actuación ante COVID-19 Sector Educativo para Actos Académicos Presenciales en escuelas de Educación Básica de la Secretaría de Educación del Estado de Jalisco.<br>Protocolo de acción ante COVID-19 Para centros de formación para el trabajo, educación continua y academias.<br>Protocolo de actuación ante COVID-19 Sector Educativo para la realización de exámenes presenciales del Sistema de Preparatoria Abierta.<br>Protocolo de actuación ante COVID-19 Sector Educativo para la atención de actividades esenciales en Educación Media Superior.<br>Protocolo de Acción ante COVID-19 para realizar Educación Física en los planteles escolares",
        referencias: [
            "https://www.jalisco.gob.mx/es/prensa/noticias/129538",
            "https://www.jalisco.gob.mx/es/prensa/noticias/127052",
            "https://www.facebook.com/educacion.jalisco/photos/a.446164440747/10158547049890748/",
            "https://portalsej.jalisco.gob.mx/plan-jalisco-para-la-reactivacion-economica/",
            "https://udgtv.com/noticias/regreso-clases-virtuales-decision-basada-criterios-cientificos-udeg/"
        ],
        color: StateBack2School
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
        color: StateBack2School
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
        docentesVacunadosPorcentaje: "85.5",
        alumnosVacunados: "cancel",
        nombreEstrategia: "Guanajuato educado con R de Reactivación. Regreso a las aulas.",
        actividadesPresenciales: "El secretario reiteró la disposición de las autoridades para que las actividades escolares sean retomadas el 30 de agosto, donde continuarán con el pilotaje que comenzó en marzo y que ha incrementado gradualmente. <br><br> El estado implemento ejercicio piloto ''regreso a las aulas'' , bajo esta experiencia se prevee continuar con un retorno presencial el proximo ciclo",
        aforosFiltrosSanitarios: "Cuenta con protocolos y guias de salud para el regreso a la escuela (Básica, Media superior y superior), las cuales incluyen:<ol><li>Uso obligatorio de cubrebocas.</li><li>4 filtros sanitarios.</li><li>sana distancia.</li><li>Limpieza de areas y mobiliario.</li> <li>Prupos reducidos.</li></ol>",
        referencias: [
            "https://www.seg.guanajuato.gob.mx/RegresoalasAulas/SitePages/Inicio.aspx",
            "https://www.seg.guanajuato.gob.mx/RegresoalasAulas/SitePages/Inicio.aspx",
            "https://notus.com.mx/regreso-a-clases-presenciales-en-guanajuato-30-agosto-2021/",
            "https://www.milenio.com/politica/comunidad/guanajuato-regreso-clases-presenciales-ajustara-municipio",
            "https://www.seg.guanajuato.gob.mx/RegresoalasAulas/SitePages/EducacionVacunada.aspx",
            "https://zonafranca.mx/politica-sociedad/educacion/en-guanajuato-sera-voluntario-el-regreso-a-clases/",
            "https://www.unionguanajuato.mx/2021/08/02/regreso-a-clases-presenciales-en-agosto-calendario-escolar-2021-a-2022-de-la-sep/"
        ],
        color: StateBack2School
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
        color: StateBack2School
    },
    {
        id: "MX-HID",
        name: "Hidalgo",
        regresoActividadesPresenciales: "No",
        fechaRetorno: "Sin información",
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
        color: StateInDefinition
    },
    {
        id: "MX-COL",
        name: "Colima",
        regresoActividadesPresenciales: "En prueba piloto",
        fechaRetorno: "Por definir",
        tipoModelo: "A distancia",
        reincorporacionVoluntaria: "check_circle",
        reincorporacionGradual: "check_circle",
        docentesVacunados: "check_circle",
        docentesVacunadosPorcentaje: "",
        alumnosVacunados: "cancel",
        nombreEstrategia: " Estrategia Estatal de Regreso Seguro a Clases Presenciales",
        actividadesPresenciales: "La prueba piloto no se trata de un regreso a clases presencial, esto solo se dará cuando el semáforo epidemiológico esté en verde y las autoridades sanitarias así lo determinen. Los criterios que se han establecido para un regreso seguro a clases en Colima se aplican con la cuestión de un semáforo verde, que personal docente esté vacunado y la participación voluntaria de padres y madres de familia de poder enviar a sus hijos e hijas a las escuelas.",
        aforosFiltrosSanitarios: "Se conformará un comité de salud en cada escuela, filtros al ingreso al plantel, abastecer de agua y jabón, uso obligatorio de mascarilla, cuidado de grupos vulnerables y cuando se detecte algún caso de coronavirus, el plantel cerraría de forma inmediata.",
        referencias: [
            "https://www.milenio.com/estados/colima-pone-a-prueba-el-regreso-a-clases",
            "https://www.colimanoticias.com/antes-del-regreso-a-clases-preservar-la-salud-y-vida-del-alumnado-y-docentes-se/",
            "https://diariodecolima.com/noticias/detalle/2021-07-23-flores-colima-est-preparado-para-iniciar-el-ciclo-escolar",
            "https://elcomentario.ucol.mx/elabora-colima-su-estrategia-para-regreso-a-clases-presenciales/"
        ],
        color: StateInDefinition
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
        docentesVacunadosPorcentaje: "",
        alumnosVacunados: "cancel",
        nombreEstrategia: "Escuela abierta",
        actividadesPresenciales: "La asistencia sera voluntaria  para alumnos, docentes  y personal administratvio, de acuerdo al semáforo epidemiológico. se priorizará a los niños, niñas y adolescentes que, durante el ciclo escolar han tenido una comunicación intermitente y una participación baja en actividades propuestas por el docente, asi como los que han tenido una participación prácticamente inexistente. Aesta modalidad se le denomina ''Escuela Abierta''. <br>Se priorizará a atención de alumnos en riesgo de reprobar o abandonar, alumnas y alomnos en condiciiones vulnerables, que presenten dificultades de comunicación , deberán se atendidos de manera prioritaria. <br><br>Las actividades a realizar: <ul> <li>1. Jornadas contra el rezago escolar y valoración diagnóstica</li> <li>2.Asesoría pedagógica.</li> <li>3.Apoyo psicoemocional.</li> <li>4.Acciones de limpieza y sanitarias en el plantel educativo.</li> <li>5. Entrega de libros de texto, equipo y material didáctico.</li> <li>6. Trámites escolares.</li> <li>7.Utilización de equipos y servicios.</li> <li>8. Uso de infraestructura escolar (laboratorios, talleres).</li> <li>9. Acciones de construcción y mantenimeinto.</li> <li>10. Sesiones de órganos colegiados del plantel educativo.</li> </ul> <br><br>** aunque aun no hay una postura definitiva, según los medios",
        aforosFiltrosSanitarios: "Protocolo para prevenir contagios duranre el regreso prograsivo a clases presenciales en escuelas públicas y privadas de educación básica, media superior y superior , publciado el 27 de julio de 2021, en el cual se detallan las estregias para evitar contagios: <br><br>Uso obligatorio del cubrebocas, puerta abiertas y evitar contacto con picaportes, filtro de hogar, filtro escolar , filtro de aula, capaictaciones para personal y alumnos, limpieza a profundidad de las superficies, espacios y materiales, clausura de bebederos, reorganizar descansos y actividades fisicas, se promoveran clases en espacios abiertos, lavado de mano, evitar compartir alimentos, promover el estornudo de etiqueta (cubrir con el angulo interno del codo), el uniforme escolar no es obligatorio, se limita el aforo de los eventos  especiales, las actividades de servicios escolares serán por cita, <ul> <li>- Se recabaran cartas de corresponsabilidad.</li> <li>- Maximizar sana distancia y aprovechamiento de espacios abiertos y el uso permanente e irrestricto de cubrebocas.</li> <li>- Límite del 40% diario de la población escolar.</li> <li>- No mas de 9 alumnas y alumnos y un docente por aula de educación primaria y telesecundaria.</li> <li>- No mas de 12 alumnos y alumnas y un docente por aula en escuelas secundarias generale sy técnicas.</li> <li>- No se permite en este periodo ningún tipkde expendio de alimentos ni se realizaran clases de educación fisica o artística.</li> </ul>",
        referencias: [
            "https://aulas.see.gob.mx/wp-content/uploads/2021/06/PROTOCOLO-DE-SALUD-2021-EDUCACIO%CC%81N-CIRCULAR-9.pdf",
            "https://aulas.see.gob.mx/wp-content/uploads/2021/06/Circular-SEE-10-2021.pdf",
            "https://mimorelia.com/sin-visto-bueno-de-ssm-y-expertos-en-epidemiolog%C3%ADa-no-habr%C3%A1-regreso-a-las-aulas-see-2021-08-03t19-11",
            "https://educacion.michoacan.gob.mx/category/avisos/",
            "https://www.elsoldemorelia.com.mx/local/finaliza-vacunacion-a-personal-docente-en-michoacan-6693260.html"
        ],
        color: StateBack2School
    },
    {
        id: "MX-VER",
        name: "Veracruz de Ignacio de la Llave",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "check_circle",
        reincorporacionGradual: "check_circle",
        docentesVacunados: "check_circle",
        docentesVacunadosPorcentaje: "",
        alumnosVacunados: "cancel",
        nombreEstrategia: "Regreso a clases presenciales",
        actividadesPresenciales: "Finales de agosto (esta en duda quienes tomaran la decisión ya que habrá cambio de Administración Estatal).",
        aforosFiltrosSanitarios: "Entrega de kits de limpieza en todos los planteles <br><br>Acorde al semáforo epidemiológico, aplica SEV estrategias a distancia <br>El 24 de junio regresaron a las aulas, al respecto, se cuenta con 682 estrategias por sistema en los modelos presencial, mixto y virtual. La Secretaría de Educación estatal destacó que esta planeación incluye el acuerdo voluntario de la comunidad escolar, para lo que padres y madres recibirán una carta compromiso sobre el cuidado de la salud de sus hijos. <ol><li> Todas las escuelas ubicadas en municipios con Semáforo en color amarillo o naranja, darán atención únicamente en la modalidad a distancia.</li> <li> En los municipios que se mantenga el color verde del semáforo epidemiológico local, las instituciones podrán continuar según lo programado y decidido por cada centro escolar.</li></ol> El personal del plantel educativo podrá asistir a sus escuelas si así lo acuerdan a realizar las tareas pertinentes con o sin estudiantes de acuerdo a los puntos 1 y 2.",
        referencias: [
            "https://www.sev.gob.mx/v1/noticias/leer/2354/",
            "https://www.sev.gob.mx/v1/noticias/leer/2354/",
            "https://www.diariodexalapa.com.mx/local/si-habra-clases-presenciales-pero-no-obligatorio-dijo-el-titular-de-la-sev-zenyazen-escobar-garcia-7029291.html"
        ],
        color: StateBack2School
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
        docentesVacunadosPorcentaje: "95",
        alumnosVacunados: "cancel",
        nombreEstrategia: "Modelo Educativo Híbrido en el Estado de Puebla Educación Básica y Media Superior Ciclo Escolar 2021-2022",
        actividadesPresenciales: "",
        aforosFiltrosSanitarios: "Las escuelas multigrado o de organización completa que puedan atender a toda su población de manera presencial todos los días, deben garantizar la sana distancia, así como la implementación del plan de atención (nivelación) de forma integrada a las jornadas académicas. Aquellas escuelas con mayor matrícula dividirán aforos cuya distribución puede ser por apellidos.",
        referencias: [
            "http://sep.puebla.gob.mx/index.php/component/k2/prueba-2-2-2",
            "https://www.eluniversalpuebla.com.mx/educacion/95-de-maestros-en-puebla-ya-esta-vacunado-contra-covid"
        ],
        color: StateBack2School
    },
    {
        id: "MX-TLA",
        name: "Tlaxcala",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "check_circle",
        reincorporacionGradual: "check_circle",
        docentesVacunados: "check_circle",
        docentesVacunadosPorcentaje: "",
        alumnosVacunados: "cancel",
        nombreEstrategia: "Sin información",
        actividadesPresenciales: "En medios se ha difundido que la incorporación presencial será una vez que el semáforo epidemiológico este en verde.",
        aforosFiltrosSanitarios: "Una vez que el semáforo epidemiológico dé luz verde, estás son las medidas que se tomarán para el regreso a clases presenciales en Tlaxcala: <ol> <li>Conformación de Comités Participativos de Salud.</li> <li>Dotar a las escuelas con insumos de higiene como agua y jabón.</li> <li>Salvaguardar a los docentes en grupos de riesgo.</li> <li>Uso obligatorio de cubrebocas o pañuelo, dentro y fuera de las escuelas, públicas y particulares.</li> <li>Mantener distancia en entradas y salidas de los planteles.</li> <li>Programar recesos escalonados.</li> <li>Maximizar el uso de espacios abiertos.</li> <li>Suspender todo tipo de ceremonias o reuniones.</li> <li>Brindar apoyo socioemocional para alumnos y docentes.</li> </ol>Una comisión de la Secretaría de Educación Pública (SEPE) y el SNTE trabajando para la realización de una logística y la atención en el regreso a clases presenciales. Universidad Autónoma de Tlaxcala (UATx) reconsideraría el regreso a las clases.",
        referencias: [
            "https://www.milenio.com/politica/comunidad/duda-regreso-clases-presenciales-tlaxcala-tercer-ola-covid",
            "https://www.milenio.com/politica/comunidad/duda-regreso-clases-presenciales-tlaxcala-tercer-ola-covid ",
            "https://www.lajornadadeoriente.com.mx/tlaxcala/clases-presenciales-sepe-a-sep/",
            "https://www.elsoldetlaxcala.com.mx/local/alistan-preparatorias-regreso-a-las-aulas-juan-pablo-arroyo-6924698.html",
            "https://kidstudia.com/guia/todo-sobre-el-regreso-a-clases-en-mexico/tlaxcala/#modalidad+del+regreso+a+clases+en+tlaxcala",
            "https://www.milenio.com/politica/comunidad/de-manera-responsable-buscan-que-sea-el-regreso-a-clases-en-tlaxcala"
        ],
        color: StateBack2School
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
        color: StateBack2School
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
        color: StateBack2School
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
        docentesVacunadosPorcentaje: "",
        alumnosVacunados: "cancel",
        nombreEstrategia: "Regreso a clases",
        actividadesPresenciales: "El periodo de inscripciones y reinscripciones será del 16 de agosto al 10 de septiembre, mientras que las sesiones del Comité Participativo de Salud Escolar, así como las jornadas de limpieza en escuelas serán del 11 al 13 de agosto de 2021. con el fin de estar listo para el inicio de ciclo",
        aforosFiltrosSanitarios: "Terminó en julio el Programa Piloto de Regreso a Clases Presenciales Seguras, voluntarias, escalonadas y graduales sin incidente alguno para todos los que participaron en este proyecto: alumnos, padres de familia, docentes, administrativos y personal de apoyo",
        referencias: [
            "https://morelos.gob.mx/?q=prensa/nota/comunicado-de-prensa-secretaria-de-educacion-3",
            "https://elqueretano.info/trafico/presentan-calendario-escolar-2021-2022-para-morelos/",
            "https://mexico.as.com/mexico/2021/07/30/actualidad/1627609664_758632.html",
            "https://mexico.as.com/mexico/2021/07/30/actualidad/1627609664_758632.html"
        ],
        color: StateBack2School
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
        color: StateInDefinition
    },
    {
        id: "MX-OAX",
        name: "Oaxaca",
        regresoActividadesPresenciales: "Por definir",
        fechaRetorno: "30 agosto en EB y EMS",
        tipoModelo: "A distancia",
        reincorporacionVoluntaria: "check_circle",
        reincorporacionGradual: "info",
        docentesVacunados: "check_circle",
        docentesVacunadosPorcentaje: "100",
        alumnosVacunados: "cancel",
        nombreEstrategia: "No disponible",
        actividadesPresenciales: "De acuerdo con la Circular N. SGE.DPE/003/2021, se exhorta a actuar con apego al semáforo epidemilógico. El regreso presencial a clases será cuando el semáforo se encuentre en verde y el proceso de consenso Otros medios han indicado que de regresar a la presencialidad seria voluntario y paulatino e inciaria a finales del mes de agosto",
        aforosFiltrosSanitarios: "Se implementa un proceso integral y amplio de rehabilitación de baños, y de suministro de agua potable para que estén listas para aplicar el protocolo sanitario anticovid y se pueda reanudar las clases presenciales en los tiempos que reclama el plan de reanudación de actividades escolares después de la pandemia por el SARS-COV-2",
        referencias: [
            "https://mexico.as.com/mexico/2021/08/02/actualidad/1627869115_989386.html",
            "https://planeacion.sep.gob.mx/entidadfederativa.aspx",
            "https://www.marca.com/claro-mx/trending/2021/08/03/6109ade946163fda2b8b45fb.html",
            "https://www.oaxaca.gob.mx/ieepo/circular-no-sge-dpe-003-2021-exhorto-a-escuelas-particulares/",
            "https://www.milenio.com/estados/regreso-clases-presenciales-oaxaca-agosto-voluntario",
            "https://www.milenio.com/estados/regreso-clases-presenciales-oaxaca-agosto-voluntario"
        ],
        color: StateInDefinition
    },
    {
        id: "MX-TAB",
        name: "Tabasco",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "1 de septiembre",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "check_circle",
        reincorporacionGradual: "check_circle",
        docentesVacunados: "check_circle",
        docentesVacunadosPorcentaje: "",
        alumnosVacunados: "cancel",
        nombreEstrategia: "Sin información",
        actividadesPresenciales: "En totalidad, escalonado, hibrido, porcentual de niñas, niños y jovenes. <br><br>Escalonado, presencial, híbrido o una mezcla de ambos (implementación de un protocolo Alemán)",
        aforosFiltrosSanitarios: "Desarrollo de materiales informativos y protocolos sanitarios.",
        referencias: [
            "https://heraldodemexico.com.mx/nacional/2021/7/22/tabasco-no-volvera-clases-presenciales-en-agosto-analizan-sea-en-septiembre-318653.html",
            "https://www.elheraldodetabasco.com.mx/local/tabasco-si-regresa-a-clases-presenciales-en-septiembre-7015316.html"
        ],
        color: StateBack2School
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
        color: StateBack2School
    },  
    {
        id: "MX-CAM",
        name: "Campeche",
        regresoActividadesPresenciales: "Por confirmar",
        fechaRetorno: "Por confirmar",
        tipoModelo: "A distancia",
        reincorporacionVoluntaria: "check_circle",
        reincorporacionGradual: "check_circle",
        docentesVacunados: "check_circle",
        docentesVacunadosPorcentaje: "",
        alumnosVacunados: "cancel",
        nombreEstrategia: "Aprendamos en familia desde casa",
        actividadesPresenciales: "Es uno de los estados que implementó la prueba piloto de clases presenciales antes de terminar el ciclo escolar pasado, misma que cerró por el aumento de contagios de covid-19 en la entidad. Por lo que autoridades educativas consideran que no existen las condiciones necesarias para garantizar un regreso seguro a los planteles educativos. <br><br> El regreso a clases presenciales será cuando el semáforo esté en verde debido a la falta de vacunación de los estudiantes ",
        aforosFiltrosSanitarios: "Cuando se tengan las condiciones necesarias para el regreso a los planteles educativos, se optará por un modelo híbrido de clases, con asistencia alternada, grupos reducidos, así como medidas sanitarias. Algunas de ellas son las siguientes: <ol><li>Uso correcto de cubrebocas obligatorio.</li><li>Sana distancia dentro de los salones de clases y en todas las actividades al interior de los planteles.</li><li>Colocación de filtros sanitarios al entrar a la escuela y a la entrada del salón</li><li>Recuerda que el regreso a clases presenciales es voluntario, si decides enviar a tus hijos a la escuela debes firmar una carta responsiva en donde declaras que tu hijo asiste voluntariamente a la escuela y sin síntomas relacionados al covid-19.</li></ol>",
        referencias: [
            "https://www.poresto.net/campeche/2021/7/15/regreso-clases-en-campeche-sera-en-semaforo-verde-seduc-263676.html",
            "https://educacioncampeche.gob.mx/aprendamosencasa",
            "http://campechehoy.mx/2021/07/31/en-campeche-sera-dificil-el-regreso-a-clases-presenciales/",
            "https://kidstudia.com/guia/todo-sobre-el-regreso-a-clases-en-mexico/campeche/"
        ],
        color: StateInDefinition
    },
    {
        id: "MX-YUC",
        name: "Yucatán",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "check_circle",
        reincorporacionGradual: "check_circle",
        docentesVacunados: "check_circle",
        docentesVacunadosPorcentaje: "",
        alumnosVacunados: "cancel",
        nombreEstrategia: "Regreso seguro a clases",
        actividadesPresenciales: "Estrategia estatal de Regreso Seguro a Clases, elaborada con base en los lineamientos que emitió la Federación y la participación de la Mesa Central conformada por representantes de seis Secretarías, entre ellas la de Educación y Salud, el Congreso del Estado, universidades, sindicatos, cámaras empresariales, la Comisión estatal de Derechos Humanos (Codhey), padres de familia, estudiantes y colegios.",
        aforosFiltrosSanitarios: "Se considera un retorno voluntario, opcional y mixto. <br><br>Secretaría de Educación considera realizar jornadas de limpieza en las escuelas y sesiones de los Comités Participativos de Salud Escolar; que se desarrollará del 11 al 13 de agosto venideros, como una medida preventiva ante la pandemia mundial por Covid-19.",
        referencias: [
            "http://www.educacion.yucatan.gob.mx/boletines/index",
            "http://www.educacion.yucatan.gob.mx/boletines/index",
            "https://www.yucatan.com.mx/merida/yucatan-tendra-un-regreso-a-clases-presencial-en-agosto",
            "https://www.lajornadamaya.mx/yucatan/176643/los-ninos-deben-regresar-a-clases-presenciales-lo-mas-pronto-posible-vila-dosal"
        ],
        color: StateBack2School
    },
    {
        id: "MX-ROO",
        name: "Quintana Roo",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 agosto 2021",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "check_circle",
        reincorporacionGradual: "cancel",
        docentesVacunados: "check_circle",
        docentesVacunadosPorcentaje: "75.6",
        alumnosVacunados: "cancel",
        nombreEstrategia: "Plan para Regreso a Clases Seguro",
        actividadesPresenciales: "Centros Comunitarios de Aprendizaje",
        aforosFiltrosSanitarios: "Cuatro pasos: <br> 1) Estar en semáforo amarillo tanto federal como estatal para abrir los Centros Comunitarios de Aprendizaje donde se ofrece asesoría; <br> 2) Rehabilitación de escuelas (infraestructura, limpieza y orden); <br> 3) Aplicación de un diagnóstico académico. <br> 4) Y que cada institución educativa entregue o actualice su plan de regreso a clases, cumpliendo con los protocolos sanitarios.Prueba para diagnosticar el rezago entre los alumnos tras un año y tres meses de clases en línea. Los padres de familia los encargados de aplicar la prueba, que consistirá en un grupo de preguntas de lo que tendrían que conocer según su grado de escolaridad.",
        referencias: [
            "https://qroo.gob.mx/seq/detallan-acciones-de-la-seq-para-el-regreso-clases-destacando-cuatro-importantes-temas"
        ],
        color: StateBack2School
    },
];

var DataStates_v3 = [
    {
        id: "MX-BCS",
        name: "Baja California Sur",
        regresoActividadesPresenciales: "No",
        fechaRetorno: "Por definir",
        tipoModelo: "A distancia",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "78.8",
        alumnosVacunados: "Sin Definir",
        nombreEstrategia: "No disponible",
        actividadesPresenciales: "Las autoridades educativas de Baja California Sur se han pronunciado al regreso a clases presenciales únicamente cuando el semáforo sanitario se encuentre en color verde. Por lo que aún no se tiene una fecha programada para el regreso presencial.<br><br> La presencialidad será únicamente cuando el semáforo esté en verde.",
        aforosFiltrosSanitarios: "Se capacitaron a los comités participativos de salud escolar, en cada escuela debe de existir un comité de esta naturaleza que se encargará de revisar las condiciones en las cuales se encuentra la escuela, se tendrán algunos filtros y el primero desde luego será la casa, será en el hogar donde se revise la condición de su hijo o hija y tener en claro cuáles son los síntomas COVID, el segundo filtro al entrar a la escuela y el tercero previo a entrar al salón de clases.",
        referencias: [
            "https://kidstudia.com/guia/todo-sobre-el-regreso-a-clases-en-mexico/baja-california-sur/",
            "https://www.bcsnoticias.mx/confirmado-baja-california-sur-ya-se-prepara-para-regreso-a-las-aulas-en-agosto-sep/",
            "https://www.elsudcaliforniano.com.mx/local/regreso-a-clases-solo-sera-en-alerta-verde-en-bcs-6987936.html",
            "http://www.bcs.gob.mx/noticias/concluyo-vacunacion-del-personal-educativo-en-bcs/#:~:text=CONCLUY%C3%93%20VACUNACI%C3%93N%20DEL%20PERSONAL%20EDUCATIVO%20EN%20BCS,-La%20Paz%20B.C.S.&text=Con%20la%20aplicaci%C3%B3n%20de%2017,educativo%20de%20Baja%20California%20Sur"
        ],
        color: StateNoBack2School
    },
    {
        id: "MX-BCN",
        name: "Baja California Norte",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "76.30",
        alumnosVacunados: "NO",
        nombreEstrategia: "Regreso Seguro a Clases Presenciales",
        actividadesPresenciales: "Se preveé que 24 escuelas vuelvan a clases presenciales durante la primera semana del ciclo 2021-2022 (Lunes 30 de agosto) <br><br>La asistencia será voluntaria, gradual y escalonada. Durante septiembre, los planteles se duplicarán semanalmente, de acuerdo a la disposición de escuelas y la autorización de padres de familia. las clases serán en un modelo híbrido entre presenciales y a distancia, ya que los alumnos seleccionados asistirán tres y dos días de la semana, de manera alternada, a partir de la primera letra del apellido.   el regreso a clases será en 24 escuelas (cuatro por municipio y dos públicas y dos privadas), en la segunda semana serán 48; en la siguiente 72 y después 96, de acuerdo a la evolución y monitoreo del manejo de salud. Serán los padres de familia los que aprueben el regreso de clases presenciales de sus hijos.",
        aforosFiltrosSanitarios: "El regreso a las escuelas de manera presencial, se realizará de forma gradual y segura, incluyendo la realización de jornadas de limpieza previas al ingreso de los estudiantes. las escuelas de cada municipio o poblado serán divididas en áreas que incluyan un centro de salud que se encargará de dar atención a esa región en caso de ser necesario.  Los padres de familia y las escuelas deberán coordinar filtros para evitar la propagación de la enfermedad. en caso de que se detecte un caso sospechoso, el grupo será suspendido por 14 días, mientras que si se confirma un caso de COVID-19 se suspenderán las clases en todo el plantel. Las aulas tendrán un máximo de 10 personas.",
        referencias: [
            "https://www.sandiegouniontribune.com/en-espanol/noticias/bc/articulo/2021-07-26/baja-california-anuncia-regreso-a-clases-presenciales-semaforo-epidemiologico-regional-permanece-verde",
            "http://www.educacionbc.edu.mx/regresoseguro/",
            "https://www.jornada.com.mx/notas/2021/07/26/estados/planean-regreso-a-clases-gradual-en-baja-california-a-partir-de-agosto/#:~:text=El%20gobierno%20de%20Baja%20California,forma%20gradual%2C%20escalonada%20y%20segura.",
            "https://www.bcsnoticias.mx/incierto-el-regreso-a-clases-en-bcs-acercandose-la-fecha-se-tomaran-decisiones-salud/",
            "https://www.gob.mx/sep/es/articulos/boletin-sep-no-102-concluye-exitosamente-el-proceso-de-vacunacion-a-personal-docente-en-30-entidades-del-pais?idiom=es"
        ],
        color: StateBack2School
    },
    {
        id: "MX-SON",
        name: "Sonora",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "No aplica",
        tipoModelo: "A distancia",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "87",
        alumnosVacunados: "NO",
        nombreEstrategia: "Sin información",
        actividadesPresenciales: "A partir del 30 de agosto, los estudiantes en Sonora regresarán a las aulas conforme a las disposiciones federales y condiciones sanitarias para ver la gradualidad del retorno. <br><br>Regreso a clases presenciales debe darse con una estrategia conjunta para hacerlo de la forma más segura: Gobernadora Pavlovich",
        aforosFiltrosSanitarios: "Ante el aumento de contagios y el registro de estas variantes del coronavirus, la gobernadora Pavlovich instó a seguir con las acciones y programas de prevención, para seguir con las medidas y protocolos sanitarios rigurosos. Salones de clases con buena ventilación.<br><br>La Secretaría de Educación y Cultura y el Instituto Sonorense de Infraestructura Educativa (ISIE) han realizado una valoración de las condiciones de la infraestructura física de los planteles escolares, con el fin de atender a todos los requerimientos apremiantes de los inmuebles.<br><br><ol><li>Pupitres separados al menos metro y medio entre cada uno.</li><li>Máximo 15 alumnos en cada salón.</li><li>Uso de gel antibacterial y lavado frecuente de manos.</li><li>Uso correcto de cubrebocas en todo momento.</li></ol>",
        referencias: [
            "http://www.sec.gob.mx/portal/index.php?op=nota&p=1033",
            "https://kidstudia.com/guia/todo-sobre-el-regreso-a-clases-en-mexico/sonora/#medidas+para+el+regreso+a+clases+en+sonora",
            "https://www.elsoldehermosillo.com.mx/local/es-oficial-alumnos-de-sonora-si-regresaran-a-clases-presenciales-30-de-agosto-sec-gobierno-del-estado-escuelas-7046536.html"
        ],
        color: StateBack2School
    },
    {
        id: "MX-CHH",
        name: "Chihuahua",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "NO",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "95",
        alumnosVacunados: "NO",
        nombreEstrategia: "Estrategia Chihuahua (implementada desde julio)",
        actividadesPresenciales: "El secretario de Educación dijo que no será ''un regreso a clases normal, sino que el modelo sea de hasta un máximo del 50 por ciento los estudiantes puedan estar acudiendo a las aulas''.  También que: ''A partir del 11 de agosto todas las figuras educativas deberán regresar a labores presenciales con los cursos de preparación del ciclo escolar y el regreso escalonado. Del 11 al 14 de agosto se realizará la jornada de limpieza donde participarán los Comités de Participación en Salud y los padres de familia deberán trabajar para la limpieza de los centros escolares. Del 17 al 20 de agosto los docentes tendrán el taller de capacitación y la semana del 23 al 27 se tendrá el primer Consejo Técnico Escolar del ciclo 2021-2022, a fin de que el lunes 30 de agosto se estén abriendo las escuelas para recibir a los niños''. Para el equipo de transición, la intención es que algunos grupos vayan lunes y miércoles y el viernes se dejen para los alumnos que tengan una mayor necesidad de apoyo.",
        aforosFiltrosSanitarios: "Los planteles escolares no abrirán de manera regular los cinco días de la semana de manera simultánea, sino que la vertiente que iniciará a partir del 30 de agosto será con el aforo en los centros escolares del 50%, como máximo. <br><br> Las sesiones de la jornada escolar serán de 45 minutos, luego los estudiantes deberán levantarse y salir del salón para que se ventile, por lo que se ha pedido que los centros escolares que cuenten con domos, canchas, pórticos y otros espacios al aire libre se aprovechen mientras que el clima lo permita. <br><br> La estrategia está acompañada de los filtros sanitarios, los cuales inician desde el hogar, ya que padre y/o madre deben de verificar que no presente síntomas y firmar el compromiso escolar. Al ingresar al plantel deberán lavarse las manos y hacer uso de gel antibacterial.  Además: ''cada plantel escolar elegirá cómo recibirán a los niños, es decir, si por abecedario o grado, si el viernes atenderán a los estudiantes que requieren de atención más individualizado.''",
        referencias: [
            "https://www.elheraldodechihuahua.com.mx/local/chihuahua/seran-actividades-presenciales-escalonadas-secretario-de-educacion-noticias-de-chihuahua-regreso-a-clases-pandemia-contagios-7051252.html",
            "https://www.eldiariodechihuahua.mx/local/reitera-educacion-que-el-30-de-agosto-iniciara-ciclo-escolar-20210806-1826941.html",
            "https://www.eldiariodechihuahua.mx/estado/maru-tomara-decision-sobre-el-regreso-a-clases-20210804-1826158.html",
            "https://www.adn40.mx/mexico/sep-clases-presenciales-agosto-chihuahua-lmo",
            "https://e-oaxaca.com/nota/2021-08-03/nacion/sera-obligatorio-regreso-clases-presenciales-el-30-de-agosto-gobernador-de",
            "https://www.elfinanciero.com.mx/nacional/2021/06/01/cuantos-maestros-y-maestras-han-sido-vacunados-contra-covid-en-mexico-esto-dice-la-sep/",
            "https://nortedigital.mx/oficial-regresa-chihuahua-a-las-aulas-el-30-de-agosto/",
            "https://notigram.com/chihuahua/es-obligatorio-el-regreso-a-clases-gobernador-de-chihuahua-20210803-571139",
            "https://heraldodemexico.com.mx/nacional/2021/8/3/javier-corral-anuncia-regreso-clases-presenciales-el-30-de-agosto-en-chihuahua-322320.html",
            "https://www.omnia.com.mx/noticia/185917",
            "http://www.chihuahua.gob.mx/contenidos/podemos-pensar-en-regreso-clases-presenciales-el-proximo-ciclo-javier-corral"
        ],
        color: StateBack2School
    },
    {
        id: "MX-COA",
        name: "Coahuila de Zaragoza",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "23 de agosto",
        tipoModelo: "Híbrido", 
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "85.4",
        alumnosVacunados: "NO",
        nombreEstrategia: "No disponible",
        actividadesPresenciales: "Del 23 de agosto al 03 de septiembre se tiene previsto realizar pruebas diagnósticas y una evaluación para identificar el abandono y rezago escolar.  Del 6 al 30 de septiembre se pretende llevar a cabo un período de recuperación para alumnos en rezago. El regreso a clases presenciales será obligatorio paras los docentes.",
        aforosFiltrosSanitarios: "Previo a la apertura de las escuelas deberá pedírseles a los padres de familia, entre otras cosas, que sus hijos acudan bañados a la escuela y que en caso de notar algún síntoma de enfermedad como fiebre, tos, dolor de garganta o de cabeza no podrán asistir y deberá notificarse a la autoridad del plantel. Las escuelas por su parte deberán prepararse con lo siguiente: Insumos para colocar un filtro a la entrada del plantel, tanto para el personal que trabaja en la escuela como para los alumnos En el filtro deberá haber: • Alcohol en gel con alcohol isopropílico al 70% para la higiene de manos a la entrada al plantel • Termómetro infrarrojo para la toma de temperatura previo a la entrada al plantel. Los salones de clases deberán contar con:<ul><li>• Alcohol en gel con alcohol isopropílico al 70%.</li><li>• Caja de pañuelos desechables.</li><li>• Bote de basura con pedal y tapa.</li><li>• Toallitas desinfectantes para la limpieza del pupitre y/o mesas de trabajo. Las áreas comunes (patios, canchas, áreas de juego) deberán limpiarse como se hace normalmente todos los días, al igual que el resto de las instalaciones, poniendo énfasis en las superficies de mayor contacto como escritorios, mesas, interruptores, picaportes.</li></ul>Todos los baños deberán contar con agua, jabón, sanitas para secarse las manos,papel higiénico y botes de basura con pedal y tapa. Existe la posibilidad detransmisión de SARS-CoV-2 mediante inhalación de la aerosoles fecales por locual se debe poner especial atención en la ventilación de los baños, así como enla utilización estricta de cubreboca al acceder a ellos. Se recomienda educar a losalumnos a bajar la tapa del inodoro antes de jalar la palanca.",
        referencias: [
            "https://www.elheraldodesaltillo.mx/2021/07/27/habra-periodo-de-diagnostico-y-otro-de-recuperacion-al-regreso-a-clases-en-coahuila/",
            "https://www.elheraldodesaltillo.mx/2021/07/05/volverian-el-23-de-agosto-a-clases-presenciales-90-escuelas-en-coahuila/",
            "https://vanguardia.com.mx/articulo/regreso-clases-sera-obligatorio-para-los-profesores-en-coahuila",
            "https://www.saludcoahuila.gob.mx/COVID19/documentos/MANUAL%20REAPERTURA%20ESCOLAR%202021.pdf",
            "https://www.gob.mx/sep/es/articulos/boletin-sep-no-102-concluye-exitosamente-el-proceso-de-vacunacion-a-personal-docente-en-30-entidades-del-pais?idiom=es"
        ],
        color: StateBack2School
    },
    {
        id: "MX-NLE",
        name: "Nuevo León",
        regresoActividadesPresenciales: "Por definir",
        fechaRetorno: "30 de agosto",
        tipoModelo: "A distancia",
        reincorporacionVoluntaria: "Sin Definir",
        reincorporacionGradual: "Sin Definir",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "100",
        alumnosVacunados: "NO",
        nombreEstrategia: "No disponible",
        actividadesPresenciales: "La presidenta de la Comisión de Educación del Congrso del Estado de Nuevo León confía que para finales de agosto o principios de septiembre haya concluido la tercera ola de contagios de coronavirus y comience a funcionar el modelo escolar híbrido. <br><br> Comunicados oficiales indican encuentrarse listos para este regreso a clases, y la modalidad dependerá del comportamiento del semáforo ante el Covid-19 y las indicaciones que emita la Secretaría de Salud. Indican iniciar el ciclo escolar el 30 de agosto, sin embargo no han definido la  modalidad.<br><br> El comunicado oficial (17 de junio de 2021) de la Cooridnación general de comunicación social de NL,  idnica que la reactivación educativa en colegios y escuelas de 25 municipios rurales de NL . No es regreso a clases (presenciales), es regreso a actividades escolares para que el maestro vaya adaptandose, vea que su escuela está en condiciones. <br><br> Por definir el regreso presencial y en qué modelo. La UANL regresó el lunes 2 de agosto de 2021 con clases a distancia.  La Universidad de Monterrey (UDEM) regresó a la presencialidad pero con modelo híbrido.",
        aforosFiltrosSanitarios: "La asistencia será de forma híbrida, en el que las aulas estarán a un 30% de su capacidad y los alumnos pueden seguir las clases a distancia.",
        referencias: [
            "https://www.milenio.com/politica/jaime-rodriguez-dice-padres-no-quieren-regreso-a-clases-presenciales",
            "https://www.milenio.com/politica/congreso-alza-voz-exige-plan-regreso-clases",
            "https://www.publimetro.com.mx/mx/nuevo-leon/2021/08/02/jovenes-retoman-sus-actividades-academicas-en-nuevo-leon.html",
            "https://www.youtube.com/watch?v=yqr1QurjGxA&t=2233s",
            "https://www.elfinanciero.com.mx/nacional/2021/06/01/cuantos-maestros-y-maestras-han-sido-vacunados-contra-covid-en-mexico-esto-dice-la-sep/",
            "https://www.infobae.com/america/mexico/2021/08/04/ayudenme-a-decidir-la-insolita-encuesta-de-el-bronco-sobre-el-regreso-a-clases-en-nuevo-leon/"
        ],
        color: StateInDefinition
    },
    {
        id: "MX-TAM",
        name: "Tamaulipas",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "",
        alumnosVacunados: "NO",
        nombreEstrategia: "Jornada Presencial de Regularización",
        actividadesPresenciales: "Expresó que se evaluarán las condiciones de cada región y de esta manera se determinará el retorno a las aulas educativas para el 30 de agosto, aunque no se podrá obligar a nadie, por lo que será voluntario y se respetará la decisión. <br><br>Educación básica se incorpora el 30 de agosto , Educación Media Superior inica el 21 de septiembre y Educación superior, dependera si es semestral o cuatrimestral. <br> Curso un Pilotaje para el regreso a clases, el cual cuenta con 2 fases de implementación.",
        aforosFiltrosSanitarios: "Están por arrancar un pilotaje denominado Jornada Presencial de Regularización, fase 2. El regreso a las aulas será en los municipios donde se tenga semáforo verde",
        referencias: [
            "https://www.tamaulipas.gob.mx/educacion/avisos/planteles-seleccionados-fase-2/",
            "https://www.milenio.com/politica/comunidad/regreso-a-clases-presenciales-en-tamaulipas-sera-voluntario",
            "https://www.tamaulipas.gob.mx/educacion/avisos/planteles-seleccionados-fase-2/",
            "https://www.tamaulipas.gob.mx/educacion/regresoaclasespresenciales-fasepiloto-boletines/",
            "https://kidstudia.com/guia/todo-sobre-el-regreso-a-clases-en-mexico/tamaulipas/",
            "https://www.milenio.com/politica/regreso-clases-vacaciones-ciclo-2021-2022-tamaulipas",
            "https://www.elsoldetampico.com.mx/local/regional/regreso-a-clases-presenciales-en-tamaulipas-sera-voluntario-cabeza-de-vaca-7026334.html",
            "https://www.hoytamaulipas.net/notas/464556/Regresaran-a-clases-presenciales-en-Tamaulipas-el-30-de-agosto.html"
        ],
        color: StateBack2School
    },
    {
        id: "MX-SIN",
        name: "Sinaloa",
        regresoActividadesPresenciales: "SI",
        fechaRetorno: "30 de Agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "90",
        alumnosVacunados: "NO",
        nombreEstrategia: "Sin información",
        actividadesPresenciales: "El secretario de Educación Pública y Cultura, Juan Alfonso Mejía López, explicó que en cada una de las escuelas se determinará los días en que se darán las clases presenciales y lar virtuales, es decir, los maestros pueden tener las clases en aulas por una semana y la siguiente en línea, o elegir los días de la semana para cada modalidad. <br><br> En Sinaloa existen elementos para un regreso a clases gradual y focalizado, además de seguro para las niñas, niños y jóvenes, de acuerdo a la instrucción del gobernador Quirino Ordaz Coppel, quien fue reconocido por el presidente de la República, Andrés Manuel López Obrador, como el primer mandatario que solicitó la vacunación a las y los maestros del país para un regreso seguro a las escuelas.",
        aforosFiltrosSanitarios: "Regreso a las aulas en Sinaloa deberá atender condiciones de cada comunidad. Regreso a clases en Sinaloa será de forma gradual, focalizado y seguro. Experiencia previa de 955 Centros Comunitarios de Aprendizaje, donde se atendió a 26 mil 26 alumnos con rezago educativo. El congreso del Estado tiene la postura de “Estamos ansiosos porque los estudiantes regresen, pero la tercera ola de contagios es alarmante, ante este panorama es necesario que las autoridades actúen con prudencia: no hay condiciones del regreso seguro a las aulas",
        referencias: [
            "https://mieducacion.sepyc.gob.mx/sinaloa-coincide-con-el-presidente-andres-manuel-lopez-obrador-el-regreso-a-clases-es-por-el-convencimiento-nada-por-la-fuerza/",
            "https://www.debate.com.mx/opinion/Posible-retorno-a-las-aulas-20210730-0348.html",
            "https://mieducacion.sepyc.gob.mx/",
            "https://www.elsoldemazatlan.com.mx/local/regreso-a-clases-en-sinaloa-sera-en-modalidad-mixta-7045888.html",
            "https://www.elsoldemazatlan.com.mx/local/regreso-a-clases-en-sinaloa-sera-en-modalidad-mixta-7045888.html"
        ],
        color: StateBack2School
    },
    {
        id: "MX-DUR",
        name: "Durango",
        regresoActividadesPresenciales: "Por definir",
        fechaRetorno: "Por definir",
        tipoModelo: "A distancia",
        reincorporacionVoluntaria: "Sin Definir",
        reincorporacionGradual: "NO",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "100",
        alumnosVacunados: "NO",
        nombreEstrategia: "No disponible",
        actividadesPresenciales: "El subsecretario de Educación Media Superior y Superior en Durango indicó que están a la espera del decreto del gobernador para de ahí partir para el trabajo, ya sea presencial o semipresencial.    En la UJED, sólo 3 escuelas regresaran de manera presncial el 9 de agosto por poca matrícula; las demás en forma parcial dependiendo de las condiciones.    El 5 de agosto el gobernador menciona se acordó con la SEP que el regreso sea 30, voluntario y de forma híbrida, priorizando la salud; para esto se reunirá con los sindicatos.",
        aforosFiltrosSanitarios: "No disponible",
        referencias: [
            "https://www.elsoldedurango.com.mx/local/necesario-decreto-del-gobernador-de-durango-para-conocer-el-esquema-educativo-tomas-palomino-7039415.html",
            "https://www.elsiglodedurango.com.mx/2021/08/1330722.solo-3-escuelas-de-la-ujed-a-las-aulas.html",
            "https://www.elsiglodedurango.com.mx/2021/08/1330992.incognita-en-durango-el-regreso-a-clases-en-las-aulas.html",
            "https://www.elsiglodedurango.com.mx/2021/08/1331217.en-durango-estamos-listos-para-iniciar-clases-presenciales-el-30-de-agosto-aispuro.html",
            "https://www.elsiglodetorreon.com.mx/noticia/1963722.sin-definir-modelo-de-regreso-a-clases-en-durango.html",
            "https://contactohoy.com.mx/vacunaran-a-65-mil-maestros-en-durango/",
            "https://www.elsoldedurango.com.mx/local/escuelas-no-se-abriran-sino-estan-en-condiciones-para-regreso-a-las-aulas-ruben-calderon-7021208.html",
            "https://www.elsoldedurango.com.mx/local/duranguenses-regresaran-a-clases-presenciales-7029302.html"
        ],
        color: StateInDefinition
    },
    {
        id: "MX-ZAC",
        name: "Zacatecas",
        regresoActividadesPresenciales: "Por definir",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "90.6",
        alumnosVacunados: "NO",
        nombreEstrategia: "Regreso a clases presenciales",
        actividadesPresenciales: "Solo se publicó exhorto de la legislatura local para que la Secretaría de Educación y la Secretaría de Salud del Estado de Zacatecas elaboren un plan estratégico de regreso a clases presenciales seguro, ordenado, gradual, escalonado y cauto; con todos los protocolos de salud establecidos, además de valorar la posibilidad de un regreso a clases inmediato en aquellas instituciones públicas y privadas pequeñas, con pocos alumnos y donde las condiciones físicas así lo permitan.<br><br>Sin embargo, Aún no se puede fijar la postura, hasta conocer las condiciones del semáforo epidemiológico y el lineamiento federal.",
        aforosFiltrosSanitarios: "De acuerdo con la encuesta realizada por la Secretaría de Educación de Zacatecas (SEZ) a 101 mil 808 madres, padres de familia y tutores, el 81.3 por ciento dijo que está de acuerdo en que niñas, niños y adolescentes regresen a las escuelas de educación básica de manera presencial. El 92.3 por ciento se mostró dispuesto a colaborar en el establecimiento de los filtros sanitarios en casa, escuela y salón de clases, tal como lo establecen los protocolos de la Secretaría de Educación Pública (SEP). Se respetará la sana distancia, se suspenderán las ceremonias y los alumnos tendrán acceso a jabón, agua y gel alcoholado. <br><br>LA UAZ hará encuesta de movilidad y convivencia, “ya se tienen claros los protocolos de seguridad, de sanitización para todos los espacios, solo veremos si será escalonado, de acuerdo a los espacios o por nivel educativo, sin embargo, la decisión se tomará en agosto. ",
        referencias: [
            "http://www.seduzac.gob.mx/portal/index.php",
            "http://www.seduzac.gob.mx/portal/index.php ",
            "https://www.zacatecas.gob.mx/mas-de-81-de-madres-y-padres-de-familia-estan-de-acuerdo-en-que-alumnos-de-educacion-basica-regresen-a-las-aulas/ ",
            "https://imagenzac.com.mx/capital/estudiantes-regresaran-a-las-aulas-el-30-de-agosto/",
            "http://ntrzacatecas.com/2021/07/12/prepara-uaz-encuesta-de-movilidad-y-convivencia/"
        ],
        color: StateInDefinition
    },
    {
        id: "MX-SLP",
        name: "San Luis Potosí",
        regresoActividadesPresenciales: "Por definir",
        fechaRetorno: "Sin información",
        tipoModelo: "A distancia",
        reincorporacionVoluntaria: "Sin Definir",
        reincorporacionGradual: "Sin Definir",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "90",
        alumnosVacunados: "NO",
        nombreEstrategia: "Sin información",
        actividadesPresenciales: "La autoridad educativa federal dará a conocer información para el regreso a clases y en reunión de CONAEDU",
        aforosFiltrosSanitarios: "No habrá regreso a clases presenciales durante el mes de agosto, además recordó que para el regreso a clases presenciales, cuando existan las condiciones sanitarias, se aplicarán nueve intervenciones o medidas para asegurar el bienestar de la comunidad escolar. <br><br> Hubo una reapertura del 15% de escuelas en junio. El saldo fueron dos casos de contagios en docentes y nueve alumnos",
        referencias: [
            "https://slp.gob.mx/sege/Paginas/NOTICIAS/FECHAS-Y-MODALIDAD-DE-REGRESO-A-CLASES--SE-DAR%C3%81N-A-CONOCER-LA-PR%C3%93XIMA-SEMANA.aspx"
        ],
        color: StateInDefinition
    },
    {
        id: "MX-NAY",
        name: "Nayarit",
        regresoActividadesPresenciales: "SI",
        fechaRetorno: "10 de agosto",
        tipoModelo: "A distancia",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "85.4",
        alumnosVacunados: "NO",
        nombreEstrategia: "Aprende en casa",
        actividadesPresenciales: "Se tenía previsto que algunos municipios de la Sierra regresarán a clases presenciales en mayo sin embargo ante el alza en casos de covid y el retroceso del semáforo de verde a amarillo dicho iniciativa se frenó.<br><br> El regreso a clases para educación básica está programado para el 10 de agosto, siempre y cuando Nayarit se encuentre en semáforo verde. <br><br> En estos momentos el Estado de Nayarit NO se encuentra en condiciones de regresar a clases presenciales por el alto índice de incrementos de casos de COVID-19”, declaró en entrevista Martín Isaac Pérez, Subsecretario de Educación Media Superior y Superior en el Estado de Nayarit.",
        aforosFiltrosSanitarios: "El subsecretario de Educación Media Superior y Superior en el Estado, Martín Isaac Pérez quien explicó que el recurso para hacer las reparaciones pertinentes a los planteles tras más de un año de estar solas, comienzan a llegar, por lo tanto, antes de que inicie el ciclo ya deben de estar listas para recibir a los alumnos.<br><br>Siguiendo los protocols establecidos por Gobierno Federal<br><br>En caso de que se reanuden las clases presenciales en el estado, se tomarán la siguientes medidas:<ol><li>Establecimiento de Comités de salud escolar.</li><li>Mantener sana distancia y uso general del cubreboca en los planteles.</li><li>Acceso a agua y jabón.</li><li>Suspensión de todo acto cívico o ceremonia.</li><li>Maximización del uso de espacios abiertos.</li><li>Detección temprana de contagios.</li><li>Cierre de escuelas en caso de contagio.</li></ol>",
        referencias: [
            "https://www.nayarit.gob.mx/seccion/educacion",
            "https://meridiano.mx/seccion/nayarit/nayarit-no-est-en-condiciones-de-regresar-a-clases-presenciales-educaci-n-1/                                         https://www.nayarit.gob.mx/seccion/educacion#:~:text=El%20'Verano%20Divertido'%20iniciar%C3%A1%20el,cuando%20existan%20las%20condiciones%20sanitarias",
            "https://kidstudia.com/guia/todo-sobre-el-regreso-a-clases-en-mexico/nayarit/",
            "https://meridiano.mx/seccion/nayarit/nayarit-no-est-en-condiciones-de-regresar-a-clases-presenciales-educaci-n-1/"
        ],
        color: StateBack2School
    },
    {
        id: "MX-JAL",
        name: "Jalisco",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de Agosto 2021",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "",
        alumnosVacunados: "NO",
        nombreEstrategia: "Modelo hibrido y opcional de regreso a clases-Regreso a clases presenciales",
        actividadesPresenciales: "Gobierno estatal anunció que el regreso a las aulas en educación básica será el próximo 30 de agosto, a través de un modelo híbrido y opcional para las familias, que permitirá tener clases presenciales, mientras que en educación media superior y superior se regresará a distancia en agosto y en septiembre de manera presencial; la Universidad de Guadalajara comenzará su ciclo escolar 2021-B de forma virtual el 10 de agosto y será a finales de este mes cuando analice la posibilidad de iniciar la fase presencial el 15 de septiembre. <br><br>La Universidad de Guadalajara mantiene modelo a distancia. <br><br>El regreso a clases será presencial, pero las familias de los estudiantes decidirán si envían o no a sus hijas o hijos a la escuela  Jalisco solicitará a la federación reforzar la vacunación en el AMG en jóvenes de 15 a 30 años, quienes forman parte de la educación media y media superior  <br><br>Por otro lado, indican estar sujetos al semaforo epidemiológico.",
        aforosFiltrosSanitarios: "Elas principales acciones son el uso del cubrebocas es obligatorio para todos los niveles y sana distancia<br>Por otro lado, se emiten protocolos detallados para todos los niveles y actividades:<br>Protocolo de acción ante COVID-19 para Grupos de Seguimiento Académico, Trámites presenciales y Entrega de materiales educativos aplicable a Educación Básica, Media Superior y Superior Docente<br>Protocolo de actuación ante COVID-19 Sector Educativo para Actos Académicos Presenciales en escuelas de Educación Básica de la Secretaría de Educación del Estado de Jalisco.<br>Protocolo de acción ante COVID-19 Para centros de formación para el trabajo, educación continua y academias.<br>Protocolo de actuación ante COVID-19 Sector Educativo para la realización de exámenes presenciales del Sistema de Preparatoria Abierta.<br>Protocolo de actuación ante COVID-19 Sector Educativo para la atención de actividades esenciales en Educación Media Superior.<br>Protocolo de Acción ante COVID-19 para realizar Educación Física en los planteles escolares",
        referencias: [
            "https://www.jalisco.gob.mx/es/prensa/noticias/129538",
            "https://www.jalisco.gob.mx/es/prensa/noticias/127052",
            "https://www.facebook.com/educacion.jalisco/photos/a.446164440747/10158547049890748/",
            "https://portalsej.jalisco.gob.mx/plan-jalisco-para-la-reactivacion-economica/",
            "https://udgtv.com/noticias/regreso-clases-virtuales-decision-basada-criterios-cientificos-udeg/"
        ],
        color: StateBack2School
    },
    {
        id: "MX-AGU",
        name: "Aguascalientes",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "91",
        alumnosVacunados: "NO",
        nombreEstrategia: "Me sumo a un regreso seguro",
        actividadesPresenciales: "Los estudiantes podrán ingresar a los planteles, pero no de manera masiva, es decir no regresan los grupos completos al mismo tiempo, será, durante las primeras semanas de manera escalonada y para permitir a los profesores levantar un diagnóstico sobre el aprendizaje logrado durante este periodo de aislamiento.                                                                              El nivel básico de educación tendrá un modelo mixto de clases, con grupos reducidos y asistencia alternada a los salones de clases. Los niños de los niveles de preescolar, primaria y secundaria deberán ajustarse a las siguientes fechas:<br><br>Jornadas de limpieza escolar. 11, 12 y 13 de agosto.Inscripciones y reinscripciones. Del lunes 16 de agosto al viernes 10 de septiembre.Evaluación diagnóstica. Del lunes 16 de agosto al viernes 10 de septiembre.Período extraordinario de recuperación. Del lunes 13 de septiembre al martes 23 de noviembre dirigido a los alumnos con deficiencias educativas.                                                                                          el nivel medio superior regresará a clases con un modelo mixto. Los alumnos asistirán a clases de manera alternada, en grupos pequeños y con todas las medidas de salud e higiene necesarias para un regreso seguro.<br><br>El regreso a clases de este nivel educativo tendrá varias fechas, dependiendo del sistema al que está incorporada la escuela de tu hijo. Para el 6 de septiembre todas las preparatorias del estado ya deberán estar en clases. Por lo pronto se prevén las siguientes fechas de inicio:<br><br>Bachilleratos tecnológicos. Inicio de clases 23 de agosto.Conalep. Inicio de clases 30 de agosto.Bachilleratos incorporados a universidades. Misma fecha de inicio de la institución de nivel superior a la que se encuentran incorporados.                                                                                                     las universidades darán inicio a las actividades educativas según su propio calendario escolar.   El regreso presencial a clases a partir del 30 de agosto próximo correspondiente al nuevo ciclo lectivo 2021-2022 será con jornadas completas, de 8:00 am a 1:00pm, en el caso de las primarias",
        aforosFiltrosSanitarios: "Protocolo para prevenir contagios durante el regreso progresivo a clases presenciales en escuelas públicas y privadas de educación básica, media superior y superior , publciado el 27 de julio de 2021, en el cual se detallan las estregias para evitar contagios:<br>Uso obligatorio del cubrebocas, puerta abiertas y evitar contacto con picaportes, filtro de hogar, filtro escolar , filtro de aula, capaictaciones para personal y alumnos, limpieza a profundidad de las superficies, espacios y materiales, clausura de bebederos, reorganizar descansos y actividades fisicas, se promoveran clases en espacios abiertos, lavado de mano, evitar compartir alimentos, promover el estornudo de etiqueta (cubrir con el angulo interno del codo), el uniforme escolar no es obligatorio, se limita el aforo de los eventos  especiales, las actividades de servicios escolares serán por cita,<ul><li>-Se recabaran cartas de corresponsabilidad.</li><li>-maximizar sana distancia y aprovechamiento de espacios abiertos y el uso permanente e irrestricto de cubrebocas.</li><li>-lpimite del 40% diario de la población escolar.</li><li>- No mas de 9 alumnas y alumnos y un docente por aula de educación primaria y telesecundaria.</li><li>-No mas de 12 alumnos y alumnas y un docente por aula en escuelas secundarias generale sy técnicas.</li><li>-No se permite en este periodo ningún tipkde expendio de alimentos ni se realizaran clases de educación fisica o artística.</li></ul>",
        referencias: [
            "http://www.iea.gob.mx/INTERNAS/comunicacion/2020/Boletin_959_2021.pdf",
            "http://www.iea.gob.mx/INTERNAS/comunicacion/2020/Boletin_959_2021.pdf",
            "https://www.elsoldelcentro.com.mx/local/ya-hay-estrategia-para-regresar-a-clases-en-aguascalientes-6494515.html ",
            "https://www.gob.mx/sep/es/articulos/boletin-sep-no-102-concluye-exitosamente-el-proceso-de-vacunacion-a-personal-docente-en-30-entidades-del-pais?idiom=es",
            "http://www.iea.gob.mx/INTERNAS/comunicacion/2020/Boletin_965_2021.pdf",
            "http://www.iea.gob.mx/INTERNAS/regreso/pdfs/GUIASEP_REGRESOCLASES.pdf",
            "https://regresoseguro.iea.edu.mx/",
            "https://kidstudia.com/guia/todo-sobre-el-regreso-a-clases-en-mexico/aguascalientes/",
            "https://www.heraldo.mx/regreso-con-jornadas-completas-y-alternadas/"
        ],
        color: StateBack2School
    },
    {
        id: "MX-GUA",
        name: "Guanajuato",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "85.5",
        alumnosVacunados: "NO",
        nombreEstrategia: "Guanajuato educado con R de Reactivación. Regreso a las aulas.",
        actividadesPresenciales: "El secretario reiteró la disposición de las autoridades para que las actividades escolares sean retomadas el 30 de agosto, donde continuarán con el pilotaje que comenzó en marzo y que ha incrementado gradualmente. <br><br> El estado implemento ejercicio piloto ''regreso a las aulas'' , bajo esta experiencia se prevee continuar con un retorno presencial el proximo ciclo",
        aforosFiltrosSanitarios: "Cuenta con protocolos y guias de salud para el regreso a la escuela (Básica, Media superior y superior), las cuales incluyen:<ol><li>Uso obligatorio de cubrebocas.</li><li>4 filtros sanitarios.</li><li>sana distancia.</li><li>Limpieza de areas y mobiliario.</li> <li>Prupos reducidos.</li></ol>",
        referencias: [
            "https://www.seg.guanajuato.gob.mx/RegresoalasAulas/SitePages/Inicio.aspx",
            "https://www.seg.guanajuato.gob.mx/RegresoalasAulas/SitePages/Inicio.aspx",
            "https://notus.com.mx/regreso-a-clases-presenciales-en-guanajuato-30-agosto-2021/",
            "https://www.milenio.com/politica/comunidad/guanajuato-regreso-clases-presenciales-ajustara-municipio",
            "https://www.seg.guanajuato.gob.mx/RegresoalasAulas/SitePages/EducacionVacunada.aspx",
            "https://zonafranca.mx/politica-sociedad/educacion/en-guanajuato-sera-voluntario-el-regreso-a-clases/",
            "https://www.unionguanajuato.mx/2021/08/02/regreso-a-clases-presenciales-en-agosto-calendario-escolar-2021-a-2022-de-la-sep/"
        ],
        color: StateBack2School
    },
    {
        id: "MX-QUE",
        name: "Querétaro",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "95",
        alumnosVacunados: "NO",
        nombreEstrategia: "Programa Especial de Regreso a Clases",
        actividadesPresenciales: "Se Instaló Subcomité Técnico para el Regreso a Clases del Estado de Querétaro, el objetivo: organizar un posible regreso a clases presenciales planeado, escalonado, gradual, y cauto, con el fin de disminuir el riesgo de contagio y proteger la salud de las comunidades escolares.",
        aforosFiltrosSanitarios: "Se realizara de acuerdo a los ''LINEAMIENTOS GENERALES PARA EL REGRESO A LAS ACTIVIDADES ESCOLARES, EN EL MARCO DE LA PANDEMIA COVID-19''",
        referencias: [
            "https://queretaro.gob.mx/regresoaclaseguro.aspx",
            "https://www.queretaro.gob.mx/covid19/contenido/noticiasContenido.aspx?q=vUYGbsxLnli7glS/gQWD0HldeVLSaRLz7RohSiloFmz7sxVv8axXyw==",
            "https://www.queretaro.gob.mx/pdf/SEDEQ_GuiaRegresoaClases.pdf"
        ],
        color: StateBack2School
    },
    {
        id: "MX-HID",
        name: "Hidalgo",
        regresoActividadesPresenciales: "No",
        fechaRetorno: "Sin información",
        tipoModelo: "A distancia",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "99",
        alumnosVacunados: "NO",
        nombreEstrategia: "Regreso Seguro a Clases en los centros educativos en el marco de la pandemia COVID 19, Operativo Escudo, Hidalgo Seguro",
        actividadesPresenciales: "De acuerdo a anuncios del gobernador de dicho estado en julio, pidió a las instituciones educativas públicas y privadas del estado postergar las clases presenciales en el estado, debido al incremento de casos de Covid-19 en los últimos días. <br><br> El secretario de Salud de Hidalgo, Efraín Benítez Herrea, señaló que en estos momentos no existen condiciones para el regreso a clases presenciales en la entidad. El funcionario indió que la situación epidemiológica actual no permite el retonrno, programado para finales de agosto, algo que ha dialogado con el titular d ela SEPH, Atilano Rodríguez",
        aforosFiltrosSanitarios: "Filtros escolares, suspención de registro de entrada y salida de toda la comunidad educativa (alumnos, docentes, personal administrativo y personal de apoyo a la educación , asi como al publico en general) que conlleve el empleo de instrumentos ocmpartidos, cada  institución definira el control de asistencia laboral, limpieza intensiva y desinfección continua de todas las areas de los centros educativos, ventilación en todas las areascampaas de comunicación , dichas estrtegias coordinadas por el Comite Participativo de Salud Escolar (CPSE) ",
        referencias: [
            "https://periodico.hidalgo.gob.mx/?p=44435",
            "https://subrayado.com.mx/hidalgo/cuando-regresan-a-clases-hidalgo-inicio-ciclo-escolar-2021-2022-seph/",
            "https://criteriohidalgo.com/noticias/sin-condiciones-momento-regreso-clases-hidalgo-salud",
            "https://www.milenio.com/ciencia-y-salud/hidalgo-99-docentes-vacunaron-covid-19-seph"
        ],
        color: StateNoBack2School
    },
    {
        id: "MX-COL",
        name: "Colima",
        regresoActividadesPresenciales: "Por Definir",
        fechaRetorno: "Por definir",
        tipoModelo: "A distancia",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "93.5",
        alumnosVacunados: "NO",
        nombreEstrategia: "Estrategia Estatal de Regreso Seguro a Clases Presenciales",
        actividadesPresenciales: "La prueba piloto no se trata de un regreso a clases presencial, esto solo se dará cuando el semáforo epidemiológico esté en verde y las autoridades sanitarias así lo determinen. Los criterios que se han establecido para un regreso seguro a clases en Colima se aplican con la cuestión de un semáforo verde, que personal docente esté vacunado y la participación voluntaria de padres y madres de familia de poder enviar a sus hijos e hijas a las escuelas.",
        aforosFiltrosSanitarios: "Se conformará un comité de salud en cada escuela, filtros al ingreso al plantel, abastecer de agua y jabón, uso obligatorio de mascarilla, cuidado de grupos vulnerables y cuando se detecte algún caso de coronavirus, el plantel cerraría de forma inmediata.",
        referencias: [
            "https://www.milenio.com/estados/colima-pone-a-prueba-el-regreso-a-clases",
            "https://www.colimanoticias.com/antes-del-regreso-a-clases-preservar-la-salud-y-vida-del-alumnado-y-docentes-se/",
            "https://diariodecolima.com/noticias/detalle/2021-07-23-flores-colima-est-preparado-para-iniciar-el-ciclo-escolar",
            "https://elcomentario.ucol.mx/elabora-colima-su-estrategia-para-regreso-a-clases-presenciales/",
            "https://www.gob.mx/sep/es/articulos/boletin-sep-no-102-concluye-exitosamente-el-proceso-de-vacunacion-a-personal-docente-en-30-entidades-del-pais?idiom=es"
        ],
        color: StateInDefinition
    },
    {
        id: "MX-MIC",
        name: "Michoacán de Ocampo",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto 2021",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "",
        alumnosVacunados: "NO",
        nombreEstrategia: "Escuela abierta",
        actividadesPresenciales: "La asistencia sera voluntaria  para alumnos, docentes  y personal administratvio, de acuerdo al semáforo epidemiológico. se priorizará a los niños, niñas y adolescentes que, durante el ciclo escolar han tenido una comunicación intermitente y una participación baja en actividades propuestas por el docente, asi como los que han tenido una participación prácticamente inexistente. Aesta modalidad se le denomina ''Escuela Abierta''. <br>Se priorizará a atención de alumnos en riesgo de reprobar o abandonar, alumnas y alomnos en condiciiones vulnerables, que presenten dificultades de comunicación , deberán se atendidos de manera prioritaria. <br><br>Las actividades a realizar: <ul> <li>1. Jornadas contra el rezago escolar y valoración diagnóstica</li> <li>2.Asesoría pedagógica.</li> <li>3.Apoyo psicoemocional.</li> <li>4.Acciones de limpieza y sanitarias en el plantel educativo.</li> <li>5. Entrega de libros de texto, equipo y material didáctico.</li> <li>6. Trámites escolares.</li> <li>7.Utilización de equipos y servicios.</li> <li>8. Uso de infraestructura escolar (laboratorios, talleres).</li> <li>9. Acciones de construcción y mantenimeinto.</li> <li>10. Sesiones de órganos colegiados del plantel educativo.</li> </ul> <br><br>** aunque aun no hay una postura definitiva, según los medios",
        aforosFiltrosSanitarios: "Protocolo para prevenir contagios duranre el regreso prograsivo a clases presenciales en escuelas públicas y privadas de educación básica, media superior y superior , publciado el 27 de julio de 2021, en el cual se detallan las estregias para evitar contagios: <br><br>Uso obligatorio del cubrebocas, puerta abiertas y evitar contacto con picaportes, filtro de hogar, filtro escolar , filtro de aula, capaictaciones para personal y alumnos, limpieza a profundidad de las superficies, espacios y materiales, clausura de bebederos, reorganizar descansos y actividades fisicas, se promoveran clases en espacios abiertos, lavado de mano, evitar compartir alimentos, promover el estornudo de etiqueta (cubrir con el angulo interno del codo), el uniforme escolar no es obligatorio, se limita el aforo de los eventos  especiales, las actividades de servicios escolares serán por cita, <ul> <li>- Se recabaran cartas de corresponsabilidad.</li> <li>- Maximizar sana distancia y aprovechamiento de espacios abiertos y el uso permanente e irrestricto de cubrebocas.</li> <li>- Límite del 40% diario de la población escolar.</li> <li>- No mas de 9 alumnas y alumnos y un docente por aula de educación primaria y telesecundaria.</li> <li>- No mas de 12 alumnos y alumnas y un docente por aula en escuelas secundarias generale sy técnicas.</li> <li>- No se permite en este periodo ningún tipkde expendio de alimentos ni se realizaran clases de educación fisica o artística.</li> </ul>",
        referencias: [
            "https://aulas.see.gob.mx/wp-content/uploads/2021/06/PROTOCOLO-DE-SALUD-2021-EDUCACIO%CC%81N-CIRCULAR-9.pdf",
            "https://aulas.see.gob.mx/wp-content/uploads/2021/06/Circular-SEE-10-2021.pdf",
            "https://mimorelia.com/sin-visto-bueno-de-ssm-y-expertos-en-epidemiolog%C3%ADa-no-habr%C3%A1-regreso-a-las-aulas-see-2021-08-03t19-11",
            "https://educacion.michoacan.gob.mx/category/avisos/",
            "https://www.elsoldemorelia.com.mx/local/finaliza-vacunacion-a-personal-docente-en-michoacan-6693260.html"
        ],
        color: StateBack2School
    },
    {
        id: "MX-VER",
        name: "Veracruz de Ignacio de la Llave",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "",
        alumnosVacunados: "NO",
        nombreEstrategia: "Regreso a clases presenciales",
        actividadesPresenciales: "Finales de agosto (esta en duda quienes tomaran la decisión ya que habrá cambio de Administración Estatal).",
        aforosFiltrosSanitarios: "Entrega de kits de limpieza en todos los planteles <br><br>Acorde al semáforo epidemiológico, aplica SEV estrategias a distancia <br>El 24 de junio regresaron a las aulas, al respecto, se cuenta con 682 estrategias por sistema en los modelos presencial, mixto y virtual. La Secretaría de Educación estatal destacó que esta planeación incluye el acuerdo voluntario de la comunidad escolar, para lo que padres y madres recibirán una carta compromiso sobre el cuidado de la salud de sus hijos. <ol><li> Todas las escuelas ubicadas en municipios con Semáforo en color amarillo o naranja, darán atención únicamente en la modalidad a distancia.</li> <li> En los municipios que se mantenga el color verde del semáforo epidemiológico local, las instituciones podrán continuar según lo programado y decidido por cada centro escolar.</li></ol> El personal del plantel educativo podrá asistir a sus escuelas si así lo acuerdan a realizar las tareas pertinentes con o sin estudiantes de acuerdo a los puntos 1 y 2.",
        referencias: [
            "https://www.sev.gob.mx/v1/noticias/leer/2354/",
            "https://www.sev.gob.mx/v1/noticias/leer/2354/",
            "https://www.diariodexalapa.com.mx/local/si-habra-clases-presenciales-pero-no-obligatorio-dijo-el-titular-de-la-sev-zenyazen-escobar-garcia-7029291.html"
        ],
        color: StateBack2School
    },
    {
        id: "MX-PUE",
        name: "Puebla",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de Agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "NO",
        reincorporacionGradual: "NO",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "95",
        alumnosVacunados: "NO",
        nombreEstrategia: "Modelo Educativo Híbrido en el Estado de Puebla Educación Básica y Media Superior Ciclo Escolar 2021-2022",
        actividadesPresenciales: "",
        aforosFiltrosSanitarios: "Las escuelas multigrado o de organización completa que puedan atender a toda su población de manera presencial todos los días, deben garantizar la sana distancia, así como la implementación del plan de atención (nivelación) de forma integrada a las jornadas académicas. Aquellas escuelas con mayor matrícula dividirán aforos cuya distribución puede ser por apellidos.",
        referencias: [
            "http://sep.puebla.gob.mx/index.php/component/k2/prueba-2-2-2",
            "https://www.eluniversalpuebla.com.mx/educacion/95-de-maestros-en-puebla-ya-esta-vacunado-contra-covid"
        ],
        color: StateBack2School
    },
    {
        id: "MX-TLA",
        name: "Tlaxcala",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "",
        alumnosVacunados: "NO",
        nombreEstrategia: "Sin información",
        actividadesPresenciales: "En medios se ha difundido que la incorporación presencial será una vez que el semáforo epidemiológico este en verde.",
        aforosFiltrosSanitarios: "Una vez que el semáforo epidemiológico dé luz verde, estás son las medidas que se tomarán para el regreso a clases presenciales en Tlaxcala: <ol> <li>Conformación de Comités Participativos de Salud.</li> <li>Dotar a las escuelas con insumos de higiene como agua y jabón.</li> <li>Salvaguardar a los docentes en grupos de riesgo.</li> <li>Uso obligatorio de cubrebocas o pañuelo, dentro y fuera de las escuelas, públicas y particulares.</li> <li>Mantener distancia en entradas y salidas de los planteles.</li> <li>Programar recesos escalonados.</li> <li>Maximizar el uso de espacios abiertos.</li> <li>Suspender todo tipo de ceremonias o reuniones.</li> <li>Brindar apoyo socioemocional para alumnos y docentes.</li> </ol>Una comisión de la Secretaría de Educación Pública (SEPE) y el SNTE trabajando para la realización de una logística y la atención en el regreso a clases presenciales. Universidad Autónoma de Tlaxcala (UATx) reconsideraría el regreso a las clases.",
        referencias: [
            "https://www.milenio.com/politica/comunidad/duda-regreso-clases-presenciales-tlaxcala-tercer-ola-covid",
            "https://www.milenio.com/politica/comunidad/duda-regreso-clases-presenciales-tlaxcala-tercer-ola-covid ",
            "https://www.lajornadadeoriente.com.mx/tlaxcala/clases-presenciales-sepe-a-sep/",
            "https://www.elsoldetlaxcala.com.mx/local/alistan-preparatorias-regreso-a-las-aulas-juan-pablo-arroyo-6924698.html",
            "https://kidstudia.com/guia/todo-sobre-el-regreso-a-clases-en-mexico/tlaxcala/#modalidad+del+regreso+a+clases+en+tlaxcala",
            "https://www.milenio.com/politica/comunidad/de-manera-responsable-buscan-que-sea-el-regreso-a-clases-en-tlaxcala"
        ],
        color: StateBack2School
    },
    {
        id: "MX-MEX",
        name: "Estado de México",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "Fecha no definida",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "",
        alumnosVacunados: "NO",
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
        color: StateBack2School
    },
    {
        id: "MX-CMX",
        name: "Ciudad de México",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Sin información",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "100",
        alumnosVacunados: "SI",
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
        color: StateBack2School
    },
    {
        id: "MX-MOR",
        name: "Morelos",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "",
        alumnosVacunados: "NO",
        nombreEstrategia: "Regreso a clases",
        actividadesPresenciales: "El periodo de inscripciones y reinscripciones será del 16 de agosto al 10 de septiembre, mientras que las sesiones del Comité Participativo de Salud Escolar, así como las jornadas de limpieza en escuelas serán del 11 al 13 de agosto de 2021. con el fin de estar listo para el inicio de ciclo",
        aforosFiltrosSanitarios: "Terminó en julio el Programa Piloto de Regreso a Clases Presenciales Seguras, voluntarias, escalonadas y graduales sin incidente alguno para todos los que participaron en este proyecto: alumnos, padres de familia, docentes, administrativos y personal de apoyo",
        referencias: [
            "https://morelos.gob.mx/?q=prensa/nota/comunicado-de-prensa-secretaria-de-educacion-3",
            "https://elqueretano.info/trafico/presentan-calendario-escolar-2021-2022-para-morelos/",
            "https://mexico.as.com/mexico/2021/07/30/actualidad/1627609664_758632.html",
            "https://mexico.as.com/mexico/2021/07/30/actualidad/1627609664_758632.html"
        ],
        color: StateBack2School
    },
    {
        id: "MX-GRO",
        name: "Guerrero",
        regresoActividadesPresenciales: "Por definir",
        fechaRetorno: "31 de agosto 2021/ 03 de septiembre de 2021",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "",
        alumnosVacunados: "NO",
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
        color: StateInDefinition
    },
    {
        id: "MX-OAX",
        name: "Oaxaca",
        regresoActividadesPresenciales: "Por definir",
        fechaRetorno: "30 agosto",
        tipoModelo: "A distancia",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "Sin Definir",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "100",
        alumnosVacunados: "NO",
        nombreEstrategia: "No disponible",
        actividadesPresenciales: "De acuerdo con la Circular N. SGE.DPE/003/2021, se exhorta a actuar con apego al semáforo epidemilógico. El regreso presencial a clases será cuando el semáforo se encuentre en verde y el proceso de consenso. Otros medios han indicado que de regresar a la presencialidad seria voluntario y paulatino e inciaria a finales del mes de agosto",
        aforosFiltrosSanitarios: "Se implementa un proceso integral y amplio de rehabilitación de baños, y de suministro de agua potable para que estén listas para aplicar el protocolo sanitario anticovid y se pueda reanudar las clases presenciales en los tiempos que reclama el plan de reanudación de actividades escolares después de la pandemia por el SARS-COV-2. <br><br>Milenio informa que en el estado de Oaxaca el regreso a clases de forma presencial será voluntario, gradual y escalonado debido a la pandemia de covid-19; sin embargo se sigue tratando de establecer acuerdos.   El magisterio de la Sección 22 de la CNTE definirá el próximo 18 de agosto la probable fecha y la estrategia para el retorno presencial a las aulas en los 570 municipios de la entidad. Ahí discutirán la propuesta del Instituto Estatal de Educación Pública de Oaxaca, (IEEPCO).",
        referencias: [
            "https://www.youtube.com/watch?v=mr3BZC1o9kM",
            "http://cuartaplana.com/2021/08/El-18-de-agosto-la-S-22-definira-fecha-y-estrategia-para-el-retorno-presencial-a-clases/",
            "https://mexico.as.com/mexico/2021/08/02/actualidad/1627869115_989386.html",
            "https://planeacion.sep.gob.mx/entidadfederativa.aspx",
            "https://www.marca.com/claro-mx/trending/2021/08/03/6109ade946163fda2b8b45fb.html"
        ],
        color: StateInDefinition
    },
    {
        id: "MX-TAB",
        name: "Tabasco",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "1 de septiembre",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "",
        alumnosVacunados: "NO",
        nombreEstrategia: "Sin información",
        actividadesPresenciales: "En totalidad, escalonado, hibrido, porcentual de niñas, niños y jovenes. <br><br>Escalonado, presencial, híbrido o una mezcla de ambos (implementación de un protocolo Alemán)",
        aforosFiltrosSanitarios: "Desarrollo de materiales informativos y protocolos sanitarios.",
        referencias: [
            "https://heraldodemexico.com.mx/nacional/2021/7/22/tabasco-no-volvera-clases-presenciales-en-agosto-analizan-sea-en-septiembre-318653.html",
            "https://www.elheraldodetabasco.com.mx/local/tabasco-si-regresa-a-clases-presenciales-en-septiembre-7015316.html"
        ],
        color: StateBack2School
    },
    {
        id: "MX-CHP",
        name: "Chiapas",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "100",
        alumnosVacunados: "NO",
        nombreEstrategia: "No disponibles",
        actividadesPresenciales: "Antes del inicio escolar se organizarán reuniones escolares para determinar la forma en que regresarán los alumnos a las escuelas. De manera general, el regreso a las escuelas será en grupos pequeños, de manera alternada y con las recomendaciones sanitarias correspondientes. Fechas de inicio en media superior: Colegio de Bachilleres inician el 06 de septiembre. <br> Bachilleratos tecnológicos inician el 06 de septiembre. <br> Conalep inician el 30 de agosto. <br> Inicio de clases en educación superior: Las instituciones de educación superior estarán iniciando el ciclo escolar conforme su propio calendario institucional. Por lo que este nivel educativo tendrá varias fechas de inicio. Para el 06 de septiembre, todas las universidades ya deben estar con sus actividades académicas. <br><br>  La Universidad Autónoma de Chiapas (UACH) iniciará el ciclo escolar el 09 de agosto con una modalidad de clases presencial mixta. Los alumnos llevarán sus clases en línea, mientras que las prácticas de talleres y laboratorio se realizarán en grupos pequeños a no más del 30%, escalonados y con sana distancia.",
        aforosFiltrosSanitarios: "Medidas para el Regreso a Clases: <ol><li>Uso general de cubrebocas obligatorio. <li> Sana distancia en actividades al interior de los planteles, así como en las entradas y salidas. </li> <li> Recreos escolares escalonados</li> <li> Lugares fijos alternados.</li> <li> Asistencia alternada por apellido.</li> <li> Considera que tus hijos deberán acudir a clases sin fiebre o temperatura mayor a 37°. Estando dentro de la escuela, deberán lavarse frecuentemente las manos o utilizar gel antibacterial y los grupos no podrán ser mayor a 25 alumnos</li></ol>",
        referencias: [
            "https://www.unomasuno.com.mx/regreso-a-clases-en-chiapas-el-proximo-ciclo-escolar/",
            "https://kidstudia.com/guia/todo-sobre-el-regreso-a-clases-en-mexico/chiapas/ ;  https://planeacion.sep.gob.mx/entidadfederativa.aspxhttps://www.eluniversal.com.mx/estados/regreso-clases-presenciales-en-chiapas-sera-el-proximo-30-de-agosto-anuncian-autoridades"
        ],
        color: StateBack2School
    },  
    {
        id: "MX-CAM",
        name: "Campeche",
        regresoActividadesPresenciales: "Por Definir",
        fechaRetorno: "Por Definir",
        tipoModelo: "A distancia",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "88.8",
        alumnosVacunados: "NO",
        nombreEstrategia: "Aprendamos en familia desde casa",
        actividadesPresenciales: "El 09 de agosto SEDUC definirá si habrá clases presenciales <br><br>Es uno de los estados que implementó la prueba piloto de clases presenciales antes de terminar el ciclo escolar pasado, misma que cerró por el aumento de contagios de covid-19 en la entidad. Por lo que autoridades educativas consideran que no existen las condiciones necesarias para garantizar un regreso seguro a los planteles educativos.<br><br>El regreso a clases presenciales será cuando el semáforo esté en verde debido a la falta de vacunación de los estudiantes.",
        aforosFiltrosSanitarios: "Cuando se tengan las condiciones necesarias para el regreso a los planteles educativos, se optará por un modelo híbrido de clases, con asistencia alternada, grupos reducidos, así como medidas sanitarias. Algunas de ellas son las siguientes: <br><br>Uso correcto de cubrebocas obligatorio.<br>Sana distancia dentro de los salones de clases y en todas las actividades al interior de los planteles.<br>Colocación de filtros sanitarios al entrar a la escuela y a la entrada del salón<br>Recuerda que el regreso a clases presenciales es voluntario, si decides enviar a tus hijos a la escuela debes firmar una carta responsiva en donde declaras que tu hijo asiste voluntariamente a la escuela y sin síntomas relacionados al covid-19",
        referencias: [
            "https://www.poresto.net/campeche/2021/7/15/regreso-clases-en-campeche-sera-en-semaforo-verde-seduc-263676.html",
            "http://campechehoy.mx/2021/07/31/en-campeche-sera-dificil-el-regreso-a-clases-presenciales/",
            "https://educacioncampeche.gob.mx/aprendamosencasa",
            "https://www.lajornadamaya.mx/campeche/177646/el-9-de-agosto-decidira-seduc-si-hay-clases-presenciales-en-campeche",
            "https://www.gob.mx/sep/es/articulos/boletin-sep-no-102-concluye-exitosamente-el-proceso-de-vacunacion-a-personal-docente-en-30-entidades-del-pais?idiom=es"
        ],
        color: StateInDefinition
    },
    {
        id: "MX-YUC",
        name: "Yucatán",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "",
        alumnosVacunados: "NO",
        nombreEstrategia: "Regreso seguro a clases",
        actividadesPresenciales: "Estrategia estatal de Regreso Seguro a Clases, elaborada con base en los lineamientos que emitió la Federación y la participación de la Mesa Central conformada por representantes de seis Secretarías, entre ellas la de Educación y Salud, el Congreso del Estado, universidades, sindicatos, cámaras empresariales, la Comisión estatal de Derechos Humanos (Codhey), padres de familia, estudiantes y colegios.",
        aforosFiltrosSanitarios: "Se considera un retorno voluntario, opcional y mixto. <br><br>Secretaría de Educación considera realizar jornadas de limpieza en las escuelas y sesiones de los Comités Participativos de Salud Escolar; que se desarrollará del 11 al 13 de agosto venideros, como una medida preventiva ante la pandemia mundial por Covid-19.",
        referencias: [
            "http://www.educacion.yucatan.gob.mx/boletines/index",
            "http://www.educacion.yucatan.gob.mx/boletines/index",
            "https://www.yucatan.com.mx/merida/yucatan-tendra-un-regreso-a-clases-presencial-en-agosto",
            "https://www.lajornadamaya.mx/yucatan/176643/los-ninos-deben-regresar-a-clases-presenciales-lo-mas-pronto-posible-vila-dosal"
        ],
        color: StateBack2School
    },
    {
        id: "MX-ROO",
        name: "Quintana Roo",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 agosto 2021",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "NO",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "75.6",
        alumnosVacunados: "NO",
        nombreEstrategia: "Plan para Regreso a Clases Seguro",
        actividadesPresenciales: "Centros Comunitarios de Aprendizaje",
        aforosFiltrosSanitarios: "Cuatro pasos: <br> 1) Estar en semáforo amarillo tanto federal como estatal para abrir los Centros Comunitarios de Aprendizaje donde se ofrece asesoría; <br> 2) Rehabilitación de escuelas (infraestructura, limpieza y orden); <br> 3) Aplicación de un diagnóstico académico. <br> 4) Y que cada institución educativa entregue o actualice su plan de regreso a clases, cumpliendo con los protocolos sanitarios.Prueba para diagnosticar el rezago entre los alumnos tras un año y tres meses de clases en línea. Los padres de familia los encargados de aplicar la prueba, que consistirá en un grupo de preguntas de lo que tendrían que conocer según su grado de escolaridad.",
        referencias: [
            "https://qroo.gob.mx/seq/detallan-acciones-de-la-seq-para-el-regreso-clases-destacando-cuatro-importantes-temas"
        ],
        color: StateBack2School
    },
];

var DataStates_v4 = [
    {
        id: "MX-BCS",
        name: "Baja California Sur",
        regresoActividadesPresenciales: "No",
        fechaRetorno: "Por definir",
        tipoModelo: "A distancia",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "78.8",
        alumnosVacunados: "Sin Definir",
        nombreEstrategia: "No disponible",
        actividadesPresenciales: "Las autoridades educativas de Baja California Sur se han pronunciado al regreso a clases presenciales únicamente cuando el semáforo sanitario se encuentre en color verde. Por lo que aún no se tiene una fecha programada para el regreso presencial.<br><br> La presencialidad será únicamente cuando el semáforo esté en verde.",
        aforosFiltrosSanitarios: "Se capacitaron a los comités participativos de salud escolar, en cada escuela debe de existir un comité de esta naturaleza que se encargará de revisar las condiciones en las cuales se encuentra la escuela, se tendrán algunos filtros y el primero desde luego será la casa, será en el hogar donde se revise la condición de su hijo o hija y tener en claro cuáles son los síntomas COVID, el segundo filtro al entrar a la escuela y el tercero previo a entrar al salón de clases.",
        referencias: [
            "https://kidstudia.com/guia/todo-sobre-el-regreso-a-clases-en-mexico/baja-california-sur/",
            "https://www.bcsnoticias.mx/confirmado-baja-california-sur-ya-se-prepara-para-regreso-a-las-aulas-en-agosto-sep/",
            "https://www.elsudcaliforniano.com.mx/local/regreso-a-clases-solo-sera-en-alerta-verde-en-bcs-6987936.html",
            "http://www.bcs.gob.mx/noticias/concluyo-vacunacion-del-personal-educativo-en-bcs/#:~:text=CONCLUY%C3%93%20VACUNACI%C3%93N%20DEL%20PERSONAL%20EDUCATIVO%20EN%20BCS,-La%20Paz%20B.C.S.&text=Con%20la%20aplicaci%C3%B3n%20de%2017,educativo%20de%20Baja%20California%20Sur"
        ],
        color: StateNoBack2School
    },
    {
        id: "MX-BCN",
        name: "Baja California Norte",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "76.30",
        alumnosVacunados: "NO",
        nombreEstrategia: "Regreso Seguro a Clases Presenciales",
        actividadesPresenciales: "Se preveé que 24 escuelas vuelvan a clases presenciales durante la primera semana del ciclo 2021-2022 (Lunes 30 de agosto) <br><br>La asistencia será voluntaria, gradual y escalonada. Durante septiembre, los planteles se duplicarán semanalmente, de acuerdo a la disposición de escuelas y la autorización de padres de familia. las clases serán en un modelo híbrido entre presenciales y a distancia, ya que los alumnos seleccionados asistirán tres y dos días de la semana, de manera alternada, a partir de la primera letra del apellido.   el regreso a clases será en 24 escuelas (cuatro por municipio y dos públicas y dos privadas), en la segunda semana serán 48; en la siguiente 72 y después 96, de acuerdo a la evolución y monitoreo del manejo de salud. Serán los padres de familia los que aprueben el regreso de clases presenciales de sus hijos.",
        aforosFiltrosSanitarios: "El regreso a las escuelas de manera presencial, se realizará de forma gradual y segura, incluyendo la realización de jornadas de limpieza previas al ingreso de los estudiantes. las escuelas de cada municipio o poblado serán divididas en áreas que incluyan un centro de salud que se encargará de dar atención a esa región en caso de ser necesario.  Los padres de familia y las escuelas deberán coordinar filtros para evitar la propagación de la enfermedad. en caso de que se detecte un caso sospechoso, el grupo será suspendido por 14 días, mientras que si se confirma un caso de COVID-19 se suspenderán las clases en todo el plantel. Las aulas tendrán un máximo de 10 personas.",
        referencias: [
            "https://www.sandiegouniontribune.com/en-espanol/noticias/bc/articulo/2021-07-26/baja-california-anuncia-regreso-a-clases-presenciales-semaforo-epidemiologico-regional-permanece-verde",
            "http://www.educacionbc.edu.mx/regresoseguro/",
            "https://www.jornada.com.mx/notas/2021/07/26/estados/planean-regreso-a-clases-gradual-en-baja-california-a-partir-de-agosto/#:~:text=El%20gobierno%20de%20Baja%20California,forma%20gradual%2C%20escalonada%20y%20segura.",
            "https://www.bcsnoticias.mx/incierto-el-regreso-a-clases-en-bcs-acercandose-la-fecha-se-tomaran-decisiones-salud/",
            "https://www.gob.mx/sep/es/articulos/boletin-sep-no-102-concluye-exitosamente-el-proceso-de-vacunacion-a-personal-docente-en-30-entidades-del-pais?idiom=es"
        ],
        color: StateBack2School
    },
    {
        id: "MX-SON",
        name: "Sonora",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "87",
        alumnosVacunados: "NO",
        nombreEstrategia: "Retorno Seguro, estrategias para el regreso a clases presenciales del ciclo 2021-2022",
        actividadesPresenciales: "A partir del 30 de agosto, los estudiantes en Sonora regresarán a las aulas conforme a las disposiciones federales y condiciones sanitarias para ver la gradualidad del retorno. <br><br>Regreso a clases presenciales debe darse con una estrategia conjunta para hacerlo de la forma más segura: Gobernadora Pavlovich",
        aforosFiltrosSanitarios: "Ante el aumento de contagios y el registro de estas variantes del coronavirus, la gobernadora Pavlovich instó a seguir con las acciones y programas de prevención, para seguir con las medidas y protocolos sanitarios rigurosos. Salones de clases con buena ventilación.<br><br>La Secretaría de Educación y Cultura y el Instituto Sonorense de Infraestructura Educativa (ISIE) han realizado una valoración de las condiciones de la infraestructura física de los planteles escolares, con el fin de atender a todos los requerimientos apremiantes de los inmuebles.<br><br><ol><li>Pupitres separados al menos metro y medio entre cada uno.</li><li>Máximo 15 alumnos en cada salón.</li><li>Uso de gel antibacterial y lavado frecuente de manos.</li><li>Uso correcto de cubrebocas en todo momento.</li></ol>",
        referencias: [
            "http://www.sec.gob.mx/portal/index.php?op=nota&p=1033",
            "https://kidstudia.com/guia/todo-sobre-el-regreso-a-clases-en-mexico/sonora/#medidas+para+el+regreso+a+clases+en+sonora",
            "https://www.elsoldehermosillo.com.mx/local/es-oficial-alumnos-de-sonora-si-regresaran-a-clases-presenciales-30-de-agosto-sec-gobierno-del-estado-escuelas-7046536.html",
            "http://www.sec.gob.mx/portal/index.php?op=nota&p=1034"
        ],
        color: StateBack2School
    },
    {
        id: "MX-CHH",
        name: "Chihuahua",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "NO",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "95",
        alumnosVacunados: "NO",
        nombreEstrategia: "Estrategia Chihuahua (implementada desde julio)",
        actividadesPresenciales: "Se refrenda el inicio el 30 de agosto, con las actividades del protocolo SEP, y con base en reuniones en coordinación con el equipo de transición del nuevo gobierno por entrar.  Regresan conforme a lo establecido por la SEP, donde el inicio del ciclo escolar 2021-2022 es el miércoles 11 de agosto, advirtiendo que toda medida debe estar sujeta a evaluación e incluso a una rectificación. <br><br>El secretario de Educación dijo que no será ''un regreso a clases normal, sino que el modelo sea de hasta un máximo del 50 por ciento los estudiantes puedan estar acudiendo a las aulas''.  También que: ''A partir del 11 de agosto todas las figuras educativas deberán regresar a labores presenciales con los cursos de preparación del ciclo escolar y el regreso escalonado. Del 11 al 14 de agosto se realizará la jornada de limpieza donde participarán los Comités de Participación en Salud y los padres de familia deberán trabajar para la limpieza de los centros escolares. Del 17 al 20 de agosto los docentes tendrán el taller de capacitación y la semana del 23 al 27 se tendrá el primer Consejo Técnico Escolar del ciclo 2021-2022, a fin de que el lunes 30 de agosto se estén abriendo las escuelas para recibir a los niños''. Para el equipo de transición, la intención es que algunos grupos vayan lunes y miércoles y el viernes se dejen para los alumnos que tengan una mayor necesidad de apoyo.",
        aforosFiltrosSanitarios: "La estrategia Chihuahua plantea tres ejes:  Eje I. estrategia de ajuste significativo en el diseño curricular con aprendizajes esperados, Eje II. centros de asesoría y seguimiento académico, CASA, Eje III: estrategia multianual para la recuperación académica ciclos escolares 2020-2021. 2021-2022. <br><br> Los planteles escolares no abrirán de manera regular los cinco días de la semana de manera simultánea, sino que la vertiente que iniciará a partir del 30 de agosto será con el aforo en los centros escolares del 50%, como máximo.<br><br> Las sesiones de la jornada escolar serán de 45 minutos, luego los estudiantes deberán levantarse y salir del salón para que se ventile, por lo que se ha pedido que los centros escolares que cuenten con domos, canchas, pórticos y otros espacios al aire libre se aprovechen mientras que el clima lo permita.<br><br> La estrategia está acompañada de los filtros sanitarios, los cuales inician desde el hogar, ya que padre y/o madre deben de verificar que no presente síntomas y firmar el compromiso escolar. Al ingresar al plantel deberán lavarse las manos y hacer uso de gel antibacterial.  Además: ''cada plantel escolar elegirá cómo recibirán a los niños, es decir, si por abecedario o grado, si el viernes atenderán a los estudiantes que requieren de atención más individualizado''",
        referencias: [
            "https://www.elheraldodechihuahua.com.mx/local/chihuahua/seran-actividades-presenciales-escalonadas-secretario-de-educacion-noticias-de-chihuahua-regreso-a-clases-pandemia-contagios-7051252.html",
            "https://www.eldiariodechihuahua.mx/local/reitera-educacion-que-el-30-de-agosto-iniciara-ciclo-escolar-20210806-1826941.html",
            "https://www.eldiariodechihuahua.mx/estado/maru-tomara-decision-sobre-el-regreso-a-clases-20210804-1826158.html",
            "https://www.adn40.mx/mexico/sep-clases-presenciales-agosto-chihuahua-lmo",
            "https://e-oaxaca.com/nota/2021-08-03/nacion/sera-obligatorio-regreso-clases-presenciales-el-30-de-agosto-gobernador-de",
            "https://www.elfinanciero.com.mx/nacional/2021/06/01/cuantos-maestros-y-maestras-han-sido-vacunados-contra-covid-en-mexico-esto-dice-la-sep/",
            "https://nortedigital.mx/oficial-regresa-chihuahua-a-las-aulas-el-30-de-agosto/",
            "https://notigram.com/chihuahua/es-obligatorio-el-regreso-a-clases-gobernador-de-chihuahua-20210803-571139",
            "https://heraldodemexico.com.mx/nacional/2021/8/3/javier-corral-anuncia-regreso-clases-presenciales-el-30-de-agosto-en-chihuahua-322320.html",
            "https://www.omnia.com.mx/noticia/185917",
            "http://www.chihuahua.gob.mx/contenidos/podemos-pensar-en-regreso-clases-presenciales-el-proximo-ciclo-javier-corral",
            "http://educacion.chihuahua.gob.mx/",
            "https://www.elheraldodechihuahua.com.mx/local/chihuahua/manana-inicia-el-ciclo-escolar-2021-2022-escuelas-regreso-a-clases-virtual-7067337.html"
        ],
        color: StateBack2School
    },
    {
        id: "MX-COA",
        name: "Coahuila de Zaragoza",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "23 de agosto",
        tipoModelo: "Híbrido", 
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "85.4",
        alumnosVacunados: "NO",
        nombreEstrategia: "No disponible",
        actividadesPresenciales: "Del 23 de agosto al 03 de septiembre se tiene previsto realizar pruebas diagnósticas y una evaluación para identificar el abandono y rezago escolar.  Del 6 al 30 de septiembre se pretende llevar a cabo un período de recuperación para alumnos en rezago. El regreso a clases presenciales será obligatorio paras los docentes.",
        aforosFiltrosSanitarios: "Previo a la apertura de las escuelas deberá pedírseles a los padres de familia, entre otras cosas, que sus hijos acudan bañados a la escuela y que en caso de notar algún síntoma de enfermedad como fiebre, tos, dolor de garganta o de cabeza no podrán asistir y deberá notificarse a la autoridad del plantel. Las escuelas por su parte deberán prepararse con lo siguiente: Insumos para colocar un filtro a la entrada del plantel, tanto para el personal que trabaja en la escuela como para los alumnos En el filtro deberá haber: • Alcohol en gel con alcohol isopropílico al 70% para la higiene de manos a la entrada al plantel • Termómetro infrarrojo para la toma de temperatura previo a la entrada al plantel. Los salones de clases deberán contar con:<ul><li>• Alcohol en gel con alcohol isopropílico al 70%.</li><li>• Caja de pañuelos desechables.</li><li>• Bote de basura con pedal y tapa.</li><li>• Toallitas desinfectantes para la limpieza del pupitre y/o mesas de trabajo. Las áreas comunes (patios, canchas, áreas de juego) deberán limpiarse como se hace normalmente todos los días, al igual que el resto de las instalaciones, poniendo énfasis en las superficies de mayor contacto como escritorios, mesas, interruptores, picaportes.</li></ul>Todos los baños deberán contar con agua, jabón, sanitas para secarse las manos,papel higiénico y botes de basura con pedal y tapa. Existe la posibilidad detransmisión de SARS-CoV-2 mediante inhalación de la aerosoles fecales por locual se debe poner especial atención en la ventilación de los baños, así como enla utilización estricta de cubreboca al acceder a ellos. Se recomienda educar a losalumnos a bajar la tapa del inodoro antes de jalar la palanca.",
        referencias: [
            "https://www.elheraldodesaltillo.mx/2021/07/27/habra-periodo-de-diagnostico-y-otro-de-recuperacion-al-regreso-a-clases-en-coahuila/",
            "https://www.elheraldodesaltillo.mx/2021/07/05/volverian-el-23-de-agosto-a-clases-presenciales-90-escuelas-en-coahuila/",
            "https://vanguardia.com.mx/articulo/regreso-clases-sera-obligatorio-para-los-profesores-en-coahuila",
            "https://www.saludcoahuila.gob.mx/COVID19/documentos/MANUAL%20REAPERTURA%20ESCOLAR%202021.pdf",
            "https://www.gob.mx/sep/es/articulos/boletin-sep-no-102-concluye-exitosamente-el-proceso-de-vacunacion-a-personal-docente-en-30-entidades-del-pais?idiom=es"
        ],
        color: StateBack2School
    },
    {
        id: "MX-NLE",
        name: "Nuevo León",
        regresoActividadesPresenciales: "Por definir",
        fechaRetorno: "30 de agosto",
        tipoModelo: "A distancia",
        reincorporacionVoluntaria: "Sin Definir",
        reincorporacionGradual: "Sin Definir",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "100",
        alumnosVacunados: "NO",
        nombreEstrategia: "No disponible",
        actividadesPresenciales: "El gobierno de Nuevo León no ve posible el regreso físico a las aulas el próximo 30 de agosto al inicio del ciclo escolar, porque se está en lo más complicado de la pandemia. Sin embargo, Amalia Becerra, Subdirectora del Hospital Metropolitano asegura que no es una postura definitiva.  La Subdirectora del Hospital Metropolitano señaló que todavía no es un hecho la respuesta negativa en cuanto al tema del regreso a las aulas para los alumnos a tomar clase a partir del 30 de agosto.  En tanto, la secretaria de Educación, María de los Ángeles Errisúriz, dijo que la secretaría está lista para iniciar el ciclo escolar, en cualquier modalidad que determinen las autoridades sanitarias.",
        aforosFiltrosSanitarios: "La asistencia será de forma híbrida, en el que las aulas estarán a un 30% de su capacidad y los alumnos pueden seguir las clases a distancia.",
        referencias: [
            "https://www.milenio.com/politica/jaime-rodriguez-dice-padres-no-quieren-regreso-a-clases-presenciales",
            "https://www.milenio.com/politica/congreso-alza-voz-exige-plan-regreso-clases",
            "https://www.publimetro.com.mx/mx/nuevo-leon/2021/08/02/jovenes-retoman-sus-actividades-academicas-en-nuevo-leon.html",
            "https://www.youtube.com/watch?v=yqr1QurjGxA&t=2233s",
            "https://www.elfinanciero.com.mx/nacional/2021/06/01/cuantos-maestros-y-maestras-han-sido-vacunados-contra-covid-en-mexico-esto-dice-la-sep/",
            "https://www.infobae.com/america/mexico/2021/08/04/ayudenme-a-decidir-la-insolita-encuesta-de-el-bronco-sobre-el-regreso-a-clases-en-nuevo-leon/"
        ],
        color: StateInDefinition
    },
    {
        id: "MX-TAM",
        name: "Tamaulipas",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "SP",
        alumnosVacunados: "NO",
        nombreEstrategia: "Jornada Presencial de Regularización",
        actividadesPresenciales: "Expresó que se evaluarán las condiciones de cada región y de esta manera se determinará el retorno a las aulas educativas para el 30 de agosto, aunque no se podrá obligar a nadie, por lo que será voluntario y se respetará la decisión. <br><br>Educación básica se incorpora el 30 de agosto , Educación Media Superior inica el 21 de septiembre y Educación superior, dependera si es semestral o cuatrimestral. <br> Curso un Pilotaje para el regreso a clases, el cual cuenta con 2 fases de implementación.",
        aforosFiltrosSanitarios: "Están por arrancar un pilotaje denominado Jornada Presencial de Regularización, fase 2. El regreso a las aulas será en los municipios donde se tenga semáforo verde",
        referencias: [
            "https://www.tamaulipas.gob.mx/educacion/avisos/planteles-seleccionados-fase-2/",
            "https://www.milenio.com/politica/comunidad/regreso-a-clases-presenciales-en-tamaulipas-sera-voluntario",
            "https://www.tamaulipas.gob.mx/educacion/avisos/planteles-seleccionados-fase-2/",
            "https://www.tamaulipas.gob.mx/educacion/regresoaclasespresenciales-fasepiloto-boletines/",
            "https://kidstudia.com/guia/todo-sobre-el-regreso-a-clases-en-mexico/tamaulipas/",
            "https://www.milenio.com/politica/regreso-clases-vacaciones-ciclo-2021-2022-tamaulipas",
            "https://www.elsoldetampico.com.mx/local/regional/regreso-a-clases-presenciales-en-tamaulipas-sera-voluntario-cabeza-de-vaca-7026334.html",
            "https://www.hoytamaulipas.net/notas/464556/Regresaran-a-clases-presenciales-en-Tamaulipas-el-30-de-agosto.html",
            "https://www.tamaulipas.gob.mx/educacion/2021/08/acuerdos-para-el-regreso-a-clases-presenciales-en-educacion-basica-2021-2022/"
        ],
        color: StateBack2School
    },
    {
        id: "MX-SIN",
        name: "Sinaloa",
        regresoActividadesPresenciales: "SI",
        fechaRetorno: "30 de Agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "90",
        alumnosVacunados: "NO",
        nombreEstrategia: "Sin información",
        actividadesPresenciales: "El secretario de Educación Pública y Cultura, Juan Alfonso Mejía López, explicó que en cada una de las escuelas se determinará los días en que se darán las clases presenciales y lar virtuales, es decir, los maestros pueden tener las clases en aulas por una semana y la siguiente en línea, o elegir los días de la semana para cada modalidad. <br><br> En Sinaloa existen elementos para un regreso a clases gradual y focalizado, además de seguro para las niñas, niños y jóvenes, de acuerdo a la instrucción del gobernador Quirino Ordaz Coppel, quien fue reconocido por el presidente de la República, Andrés Manuel López Obrador, como el primer mandatario que solicitó la vacunación a las y los maestros del país para un regreso seguro a las escuelas.",
        aforosFiltrosSanitarios: "Regreso a las aulas en Sinaloa deberá atender condiciones de cada comunidad. Regreso a clases en Sinaloa será de forma gradual, focalizado y seguro. Experiencia previa de 955 Centros Comunitarios de Aprendizaje, donde se atendió a 26 mil 26 alumnos con rezago educativo. El congreso del Estado tiene la postura de “Estamos ansiosos porque los estudiantes regresen, pero la tercera ola de contagios es alarmante, ante este panorama es necesario que las autoridades actúen con prudencia: no hay condiciones del regreso seguro a las aulas",
        referencias: [
            "https://mieducacion.sepyc.gob.mx/sinaloa-coincide-con-el-presidente-andres-manuel-lopez-obrador-el-regreso-a-clases-es-por-el-convencimiento-nada-por-la-fuerza/",
            "https://www.debate.com.mx/opinion/Posible-retorno-a-las-aulas-20210730-0348.html",
            "https://mieducacion.sepyc.gob.mx/",
            "https://www.elsoldemazatlan.com.mx/local/regreso-a-clases-en-sinaloa-sera-en-modalidad-mixta-7045888.html",
            "https://www.elsoldemazatlan.com.mx/local/regreso-a-clases-en-sinaloa-sera-en-modalidad-mixta-7045888.html"
        ],
        color: StateBack2School
    },
    {
        id: "MX-DUR",
        name: "Durango",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "Si",
        reincorporacionGradual: "Si",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "100",
        alumnosVacunados: "NO",
        nombreEstrategia: "No disponible",
        actividadesPresenciales: "En entrevista, el Gobernador de Durango confirma el compromiso de regresar presencialmente a partir del 30 de agosto, donde se realizará con toda responsabilidad cuidando lo más importante que es la salud de la población, en este caso de los niños, jóvenes y docentes. Al 9 de agosto se dijo aún no había definición oficial, pero el gobernador se había mostrado a favor. De darse el regreso a clases presenciales sería voluntario y en una modalidad híbrida.donde si los padres de familia si deciden enviar a sus hijos deben firmar una carta responsiva. También señaló que es necesario regresar a clases presenciales, siempre y cuando sean garantizadas las condiciones de salud para los colectivos escolares y haya consenso, aunque sería un proceso gradual y voluntario, no se exigiría uniformes escolares, y disminuyendo cupos en las aulas.",
        aforosFiltrosSanitarios: "No disponible",
        referencias: [
            "https://www.radioformula.com.mx/audio-y-video/audio/20210810/gobernador-de-durango-reitera-el-regreso-a-clases-presenciales-para-el-30-de-agosto/",
            "https://www.heraldodeportes.com.mx/tendencias/2021/8/11/sep-que-estados-aun-no-definen-si-habra-regreso-clases-el-30-de-agosto-18751.html",
            "https://kidstudia.com/guia/todo-sobre-el-regreso-a-clases-en-mexico/durango/",
            "https://www.elsoldedurango.com.mx/local/es-necesario-regreso-a-clases-presenciales-aispuro-7053424.html"
        ],
        color: StateBack2School
    },
    {
        id: "MX-ZAC",
        name: "Zacatecas",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "90.6",
        alumnosVacunados: "NO",
        nombreEstrategia: "Regreso a clases presenciales",
        actividadesPresenciales: "En declaraciones  recientes, se reiteró que el regreso será solo si los padres de familia están de acuerdo. Se comentó que solo en los municipios de el Salvador, Melchor Ocampo, Mezquital del Oro, Apozol, Apulco, donde no hay contaguos se puede retomar el regreso a clases presenciales. Solo se publicó exhorto de la legislatura local para que la Secretaría de Educación y la Secretaría de Salud del Estado de Zacatecas elaboren un plan estratégico de regreso a clases presenciales seguro, ordenado,gradual, escalonado y cauto; con todos los protocolos de salud establecidos, además de valorar la posibilidad de un regreso a clases inmediato en aquellas instituciones públicas y privadas pequeñas,con pocos alumnos y donde las condiciones físicas así lo permitan.<br><br>Sin embargo, Aún no se puede fijar la postura, hasta conocer las condiciones del semáforo epidemiológico y el lineamiento federal.",
        aforosFiltrosSanitarios: "De acuerdo con la encuesta realizada por la Secretaría de Educación de Zacatecas (SEZ) a 101 mil 808 madres, padres de familia y tutores, el 81.3 por ciento dijo que está de acuerdo en que niñas, niños y adolescentes regresen a las escuelas de educación básica de manera presencial. El 92.3 por ciento se mostró dispuesto a colaborar en el establecimiento de los filtros sanitarios en casa, escuela y salón de clases, tal como lo establecen los protocolos de la Secretaría de Educación Pública (SEP). Se respetará la sana distancia, se suspenderán las ceremonias y los alumnos tendrán acceso a jabón, agua y gel alcoholado.<br><br> LA UAZ hará encuesta de movilidad y convivencia, “ya se tienen claros los protocolos de seguridad, de sanitización para todos los espacios, solo veremos si será escalonado, de acuerdo a los espacios o por nivel educativo, sin embargo, la decisión se tomará en agosto",
        referencias: [
            "https://imagenzac.com.mx/capital/necesario-el-regreso-clases-presenciales-en-zacatecas-brena-cantu/",
            "http://www.seduzac.gob.mx/portal/index.php",
            "http://www.seduzac.gob.mx/portal/index.php ",
            "https://www.zacatecas.gob.mx/mas-de-81-de-madres-y-padres-de-familia-estan-de-acuerdo-en-que-alumnos-de-educacion-basica-regresen-a-las-aulas/ ",
            "https://imagenzac.com.mx/capital/estudiantes-regresaran-a-las-aulas-el-30-de-agosto/",
            "http://ntrzacatecas.com/2021/07/12/prepara-uaz-encuesta-de-movilidad-y-convivencia/"
        ],
        color: StateBack2School
    },
    {
        id: "MX-SLP",
        name: "San Luis Potosí",
        regresoActividadesPresenciales: "Por definir",
        fechaRetorno: "Sin información",
        tipoModelo: "A distancia",
        reincorporacionVoluntaria: "Sin Definir",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "90",
        alumnosVacunados: "NO",
        nombreEstrategia: "Sin información",
        actividadesPresenciales: "La autoridad educativa federal dará a conocer información para el regreso a clases y en reunión de CONAEDU",
        aforosFiltrosSanitarios: "No habrá regreso a clases presenciales durante el mes de agosto, además recordó que para el regreso a clases presenciales, cuando existan las condiciones sanitarias, se aplicarán nueve intervenciones o medidas para asegurar el bienestar de la comunidad escolar. <br><br> Hubo una reapertura del 15% de escuelas en junio. El saldo fueron dos casos de contagios en docentes y nueve alumnos",
        referencias: [
            "https://slp.gob.mx/sege/Paginas/NOTICIAS/FECHAS-Y-MODALIDAD-DE-REGRESO-A-CLASES--SE-DAR%C3%81N-A-CONOCER-LA-PR%C3%93XIMA-SEMANA.aspx",
            "https://slp.gob.mx/sege/Paginas/NOTICIAS/NO-HAY-REGRESO-A-CLASES-PRESENCIALES-EN-SAN-LUIS-POTOS%C3%8D-SECRETARIO-DE-EDUCACI%C3%93N.aspx"
        ],
        color: StateInDefinition
    },
    {
        id: "MX-NAY",
        name: "Nayarit",
        regresoActividadesPresenciales: "SI",
        fechaRetorno: "10 de agosto",
        tipoModelo: "A distancia",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "85.4",
        alumnosVacunados: "NO",
        nombreEstrategia: "Aprende en casa",
        actividadesPresenciales: "Se tenía previsto que algunos municipios de la Sierra regresarán a clases presenciales en mayo sin embargo ante el alza en casos de covid y el retroceso del semáforo de verde a amarillo dicho iniciativa se frenó.<br><br> El regreso a clases para educación básica está programado para el 10 de agosto, siempre y cuando Nayarit se encuentre en semáforo verde. <br><br> En estos momentos el Estado de Nayarit NO se encuentra en condiciones de regresar a clases presenciales por el alto índice de incrementos de casos de COVID-19”, declaró en entrevista Martín Isaac Pérez, Subsecretario de Educación Media Superior y Superior en el Estado de Nayarit.",
        aforosFiltrosSanitarios: "El subsecretario de Educación Media Superior y Superior en el Estado, Martín Isaac Pérez quien explicó que el recurso para hacer las reparaciones pertinentes a los planteles tras más de un año de estar solas, comienzan a llegar, por lo tanto, antes de que inicie el ciclo ya deben de estar listas para recibir a los alumnos.<br><br>Siguiendo los protocols establecidos por Gobierno Federal<br><br>En caso de que se reanuden las clases presenciales en el estado, se tomarán la siguientes medidas:<ol><li>Establecimiento de Comités de salud escolar.</li><li>Mantener sana distancia y uso general del cubreboca en los planteles.</li><li>Acceso a agua y jabón.</li><li>Suspensión de todo acto cívico o ceremonia.</li><li>Maximización del uso de espacios abiertos.</li><li>Detección temprana de contagios.</li><li>Cierre de escuelas en caso de contagio.</li></ol>",
        referencias: [
            "https://www.nayarit.gob.mx/seccion/educacion",
            "https://meridiano.mx/seccion/nayarit/nayarit-no-est-en-condiciones-de-regresar-a-clases-presenciales-educaci-n-1/                                         https://www.nayarit.gob.mx/seccion/educacion#:~:text=El%20'Verano%20Divertido'%20iniciar%C3%A1%20el,cuando%20existan%20las%20condiciones%20sanitarias",
            "https://kidstudia.com/guia/todo-sobre-el-regreso-a-clases-en-mexico/nayarit/",
            "https://meridiano.mx/seccion/nayarit/nayarit-no-est-en-condiciones-de-regresar-a-clases-presenciales-educaci-n-1/"
        ],
        color: StateBack2School
    },
    {
        id: "MX-JAL",
        name: "Jalisco",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de Agosto 2021",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "SP",
        alumnosVacunados: "NO",
        nombreEstrategia: "Modelo hibrido y opcional de regreso a clases-Regreso a clases presenciales",
        actividadesPresenciales: "Gobierno estatal anunció que el regreso a las aulas en educación básica será el próximo 30 de agosto, a través de un modelo híbrido y opcional para las familias, que permitirá tener clases presenciales, mientras que en educación media superior y superior se regresará a distancia en agosto y en septiembre de manera presencial; la Universidad de Guadalajara comenzará su ciclo escolar 2021-B de forma virtual el 10 de agosto y será a finales de este mes cuando analice la posibilidad de iniciar la fase presencial el 15 de septiembre. <br><br>La Universidad de Guadalajara mantiene modelo a distancia. <br><br>El regreso a clases será presencial, pero las familias de los estudiantes decidirán si envían o no a sus hijas o hijos a la escuela  Jalisco solicitará a la federación reforzar la vacunación en el AMG en jóvenes de 15 a 30 años, quienes forman parte de la educación media y media superior  <br><br>Por otro lado, indican estar sujetos al semaforo epidemiológico.",
        aforosFiltrosSanitarios: "Elas principales acciones son el uso del cubrebocas es obligatorio para todos los niveles y sana distancia<br>Por otro lado, se emiten protocolos detallados para todos los niveles y actividades:<br>Protocolo de acción ante COVID-19 para Grupos de Seguimiento Académico, Trámites presenciales y Entrega de materiales educativos aplicable a Educación Básica, Media Superior y Superior Docente<br>Protocolo de actuación ante COVID-19 Sector Educativo para Actos Académicos Presenciales en escuelas de Educación Básica de la Secretaría de Educación del Estado de Jalisco.<br>Protocolo de acción ante COVID-19 Para centros de formación para el trabajo, educación continua y academias.<br>Protocolo de actuación ante COVID-19 Sector Educativo para la realización de exámenes presenciales del Sistema de Preparatoria Abierta.<br>Protocolo de actuación ante COVID-19 Sector Educativo para la atención de actividades esenciales en Educación Media Superior.<br>Protocolo de Acción ante COVID-19 para realizar Educación Física en los planteles escolares",
        referencias: [
            "https://www.jalisco.gob.mx/es/prensa/noticias/129538",
            "https://www.jalisco.gob.mx/es/prensa/noticias/127052",
            "https://www.facebook.com/educacion.jalisco/photos/a.446164440747/10158547049890748/",
            "https://portalsej.jalisco.gob.mx/plan-jalisco-para-la-reactivacion-economica/",
            "https://udgtv.com/noticias/regreso-clases-virtuales-decision-basada-criterios-cientificos-udeg/"
        ],
        color: StateBack2School
    },
    {
        id: "MX-AGU",
        name: "Aguascalientes",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "23 de agosto (por confirmar)",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "91",
        alumnosVacunados: "NO",
        nombreEstrategia: "Me sumo a un regreso seguro",
        actividadesPresenciales: "La Asociación de Instituciones Educativas Particulares del Estado ha solicitado al Instituto de Educación de Aguascalientes se les permita iniciar el ciclo lectivo 2021-2022 el próximo 23 de agosto, y no tener que esperar hasta el día 30, habrá que esperar confirmación <br> Los estudiantes podrán ingresar a los planteles, pero no de manera masiva, es decir no regresan los grupos completos al mismo tiempo, será, durante las primeras semanas de manera escalonada y para permitir a los profesores levantar un diagnóstico sobre el aprendizaje logrado durante este periodo de aislamiento. <br> El nivel básico de educación tendrá un modelo mixto de clases, con grupos reducidos y asistencia alternada a los salones de clases. Los niños de los niveles de preescolar, primaria y secundaria deberán ajustarse a las siguientes fechas: <br><br> Jornadas de limpieza escolar. 11, 12 y 13 de agosto. <br> Inscripciones y reinscripciones. Del lunes 16 de agosto al viernes 10 de septiembre. <br> Evaluación diagnóstica. Del lunes 16 de agosto al viernes 10 de septiembre. <br> Período extraordinario de recuperación. Del lunes 13 de septiembre al martes 23 de noviembre dirigido a los alumnos con deficiencias educativas. <br> El nivel medio superior regresará a clases con un modelo mixto. Los alumnos asistirán a clases de manera alternada, en grupos pequeños y con todas las medidas de salud e higiene necesarias para un regreso seguro. <br><br> El regreso a clases de este nivel educativo tendrá varias fechas, dependiendo del sistema al que está incorporada la escuela de tu hijo. Para el 6 de septiembre todas las preparatorias del estado ya deberán estar en clases. Por lo pronto se prevén las siguientes fechas de inicio: <br><br> Bachilleratos tecnológicos. Inicio de clases 23 de agosto. <br> Conalep. Inicio de clases 30 de agosto. <br> Bachilleratos incorporados a universidades. Misma fecha de inicio de la institución de nivel superior a la que se encuentran incorporados. <br> Las universidades darán inicio a las actividades educativas según su propio calendario escolar.   El regreso presencial a clases a partir del 30 de agosto próximo correspondiente al nuevo ciclo lectivo 2021-2022 será con jornadas completas, de 8:00 am a 1:00pm, en el caso de las primarias",
        aforosFiltrosSanitarios: "Protocolo para prevenir contagios durante el regreso progresivo a clases presenciales en escuelas públicas y privadas de educación básica, media superior y superior , publciado el 27 de julio de 2021, en el cual se detallan las estregias para evitar contagios: Uso obligatorio del cubrebocas, puerta abiertas y evitar contacto con picaportes, filtro de hogar, filtro escolar , filtro de aula, capaictaciones para personal y alumnos, limpieza a profundidad de las superficies, espacios y materiales, clausura de bebederos, reorganizar descansos y actividades fisicas, se promoveran clases en espacios abiertos, lavado de mano, evitar compartir alimentos, promover el estornudo de etiqueta (cubrir con el angulo interno del codo), el uniforme escolar no es obligatorio, se limita el aforo de los eventos  especiales, las actividades de servicios escolares serán por cita, <ul> <li>-Se recabaran cartas de corresponsabilidad.</li> <li>-maximizar sana distancia y aprovechamiento de espacios abiertos y el uso permanente e irrestricto de cubrebocas.</li> <li>-lpimite del 40% diario de la población escolar.</li> <li>- No mas de 9 alumnas y alumnos y un docente por aula de educación primaria y telesecundaria.</li> <li>-No mas de 12 alumnos y alumnas y un docente por aula en escuelas secundarias generale sy técnicas.</li> <li>-No se permite en este periodo ningún tipkde expendio de alimentos ni se realizaran clases de educación fisica o artística</li></ul> La Asociación de Instituciones Educativas Particulares del Estado ha solicitado al Instituto de Educación de Aguascalientes se les permita iniciar el ciclo lectivo 2021-2022 el próximo 23 de agosto, y no tener que esperar hasta el día 30, habrá que esperar confirmación.",
        referencias: [
            "http://www.iea.gob.mx/INTERNAS/comunicacion/2020/Boletin_959_2021.pdf",
            "http://www.iea.gob.mx/INTERNAS/comunicacion/2020/Boletin_959_2021.pdf",
            "https://www.elsoldelcentro.com.mx/local/ya-hay-estrategia-para-regresar-a-clases-en-aguascalientes-6494515.html ",
            "https://www.gob.mx/sep/es/articulos/boletin-sep-no-102-concluye-exitosamente-el-proceso-de-vacunacion-a-personal-docente-en-30-entidades-del-pais?idiom=es",
            "http://www.iea.gob.mx/INTERNAS/comunicacion/2020/Boletin_965_2021.pdf",
            "http://www.iea.gob.mx/INTERNAS/regreso/pdfs/GUIASEP_REGRESOCLASES.pdf",
            "https://regresoseguro.iea.edu.mx/",
            "https://kidstudia.com/guia/todo-sobre-el-regreso-a-clases-en-mexico/aguascalientes/",
            "https://www.heraldo.mx/regreso-con-jornadas-completas-y-alternadas/",
            "La Asociación de Instituciones Educativas Particulares del Estado ha solicitado al Instituto de Educación de Aguascalientes se les permita iniciar el ciclo lectivo 2021-2022 el próximo 23 de agosto, y no tener que esperar hasta el día 30, habrá que esperar confirmación"
        ],
        color: StateBack2School
    },
    {
        id: "MX-GUA",
        name: "Guanajuato",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "85.5",
        alumnosVacunados: "NO",
        nombreEstrategia: "Guanajuato educado con R de Reactivación. Regreso a las aulas.",
        actividadesPresenciales: "El secretario reiteró la disposición de las autoridades para que las actividades escolares sean retomadas el 30 de agosto, donde continuarán con el pilotaje que comenzó en marzo y que ha incrementado gradualmente. <br><br> El estado implemento ejercicio piloto ''regreso a las aulas'' , bajo esta experiencia se prevee continuar con un retorno presencial el proximo ciclo",
        aforosFiltrosSanitarios: "Cuenta con protocolos y guias de salud para el regreso a la escuela (Básica, Media superior y superior), las cuales incluyen:<ol><li>Uso obligatorio de cubrebocas.</li><li>4 filtros sanitarios.</li><li>sana distancia.</li><li>Limpieza de areas y mobiliario.</li> <li>Prupos reducidos.</li></ol>",
        referencias: [
            "https://www.seg.guanajuato.gob.mx/RegresoalasAulas/SitePages/Inicio.aspx",
            "https://www.seg.guanajuato.gob.mx/RegresoalasAulas/SitePages/Inicio.aspx",
            "https://notus.com.mx/regreso-a-clases-presenciales-en-guanajuato-30-agosto-2021/",
            "https://www.milenio.com/politica/comunidad/guanajuato-regreso-clases-presenciales-ajustara-municipio",
            "https://www.seg.guanajuato.gob.mx/RegresoalasAulas/SitePages/EducacionVacunada.aspx",
            "https://zonafranca.mx/politica-sociedad/educacion/en-guanajuato-sera-voluntario-el-regreso-a-clases/",
            "https://www.unionguanajuato.mx/2021/08/02/regreso-a-clases-presenciales-en-agosto-calendario-escolar-2021-a-2022-de-la-sep/"
        ],
        color: StateBack2School
    },
    {
        id: "MX-QUE",
        name: "Querétaro",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "95",
        alumnosVacunados: "NO",
        nombreEstrategia: "Programa Especial de Regreso a Clases",
        actividadesPresenciales: "Se Instaló Subcomité Técnico para el Regreso a Clases del Estado de Querétaro, el objetivo: organizar un posible regreso a clases presenciales planeado, escalonado, gradual, y cauto, con el fin de disminuir el riesgo de contagio y proteger la salud de las comunidades escolares.",
        aforosFiltrosSanitarios: "Se realizara de acuerdo a los ''LINEAMIENTOS GENERALES PARA EL REGRESO A LAS ACTIVIDADES ESCOLARES, EN EL MARCO DE LA PANDEMIA COVID-19''",
        referencias: [
            "https://queretaro.gob.mx/regresoaclaseguro.aspx",
            "https://www.queretaro.gob.mx/covid19/contenido/noticiasContenido.aspx?q=vUYGbsxLnli7glS/gQWD0HldeVLSaRLz7RohSiloFmz7sxVv8axXyw==",
            "https://www.queretaro.gob.mx/pdf/SEDEQ_GuiaRegresoaClases.pdf"
        ],
        color: StateBack2School
    },
    {
        id: "MX-HID",
        name: "Hidalgo",
        regresoActividadesPresenciales: "No",
        fechaRetorno: "Sin información",
        tipoModelo: "A distancia",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "99",
        alumnosVacunados: "NO",
        nombreEstrategia: "Regreso Seguro a Clases en los centros educativos en el marco de la pandemia COVID 19, Operativo Escudo, Hidalgo Seguro",
        actividadesPresenciales: "El presidente de la Asociación Estatal de Pdres de Familia, AEPF, afirmó que no hay fecha definitiva para el regreso a clases debido en Hidalgo a la situación de emergencia sanitaria. Son los padres de familia quienes tendrían la última palabra pues se requiere un concenso.De acuerdo a anuncios del gobernador de dicho estado en julio, pidió a las instituciones educativas públicas y privadas del estado postergar las clases presenciales en el estado, debido al incremento de casos de Covid-19 en los últimos días. <br><br> El secretario de Salud de Hidalgo, Efraín Benítez Herrea, señaló que en estos momentos no existen condiciones para el regreso a clases presenciales en la entidad. El funcionario indió que la situación epidemiológica actual no permite el retonrno, programado para finales de agosto, algo que ha dialogado con el titular d ela SEPH, Atilano Rodríguez",
        aforosFiltrosSanitarios: "Filtros escolares, suspensión de registro de entrada y salida de toda la comunidad educativa (alumnos, docentes, personal administrativo y personal de apoyo a la educación , asi como al publico en general) que conlleve el empleo de instrumentos ocmpartidos, cada  institución definira el control de asistencia laboral, limpieza intensiva y desinfección continua de todas las areas de los centros educativos, ventilación en todas las areascampaas de comunicación , dichas estrtegias coordinadas por el Comite Participativo de Salud Escolar (CPSE) ",
        referencias: [
            "https://periodico.hidalgo.gob.mx/?p=44435",
            "https://subrayado.com.mx/hidalgo/cuando-regresan-a-clases-hidalgo-inicio-ciclo-escolar-2021-2022-seph/",
            "https://criteriohidalgo.com/noticias/sin-condiciones-momento-regreso-clases-hidalgo-salud",
            "https://www.milenio.com/ciencia-y-salud/hidalgo-99-docentes-vacunaron-covid-19-seph"
        ],
        color: StateNoBack2School
    },
    {
        id: "MX-COL",
        name: "Colima",
        regresoActividadesPresenciales: "Por Definir",
        fechaRetorno: "Por definir",
        tipoModelo: "A distancia",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "93.5",
        alumnosVacunados: "NO",
        nombreEstrategia: "Estrategia Estatal de Regreso Seguro a Clases Presenciales",
        actividadesPresenciales: "La prueba piloto no se trata de un regreso a clases presencial, esto solo se dará cuando el semáforo epidemiológico esté en verde y las autoridades sanitarias así lo determinen. Los criterios que se han establecido para un regreso seguro a clases en Colima se aplican con la cuestión de un semáforo verde, que personal docente esté vacunado y la participación voluntaria de padres y madres de familia de poder enviar a sus hijos e hijas a las escuelas.",
        aforosFiltrosSanitarios: "Se conformará un comité de salud en cada escuela, filtros al ingreso al plantel, abastecer de agua y jabón, uso obligatorio de mascarilla, cuidado de grupos vulnerables y cuando se detecte algún caso de coronavirus, el plantel cerraría de forma inmediata.",
        referencias: [
            "https://www.milenio.com/estados/colima-pone-a-prueba-el-regreso-a-clases",
            "https://www.colimanoticias.com/antes-del-regreso-a-clases-preservar-la-salud-y-vida-del-alumnado-y-docentes-se/",
            "https://diariodecolima.com/noticias/detalle/2021-07-23-flores-colima-est-preparado-para-iniciar-el-ciclo-escolar",
            "https://elcomentario.ucol.mx/elabora-colima-su-estrategia-para-regreso-a-clases-presenciales/",
            "https://www.gob.mx/sep/es/articulos/boletin-sep-no-102-concluye-exitosamente-el-proceso-de-vacunacion-a-personal-docente-en-30-entidades-del-pais?idiom=es"
        ],
        color: StateInDefinition
    },
    {
        id: "MX-MIC",
        name: "Michoacán de Ocampo",
        regresoActividadesPresenciales: "No",
        fechaRetorno: "Sin información",
        tipoModelo: "A distancia",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "SP",
        alumnosVacunados: "NO",
        nombreEstrategia: "Escuela abierta",
        actividadesPresenciales: "En recientes declaraciones: El gobernador Silvano Aureoles Conejo anunció que en Michoacán no hay condiciones para que niños y niñas regresen a clases presenciales, debido al incremento de contagios de Covid-19 en esta tercera ola. <br>Enfatizó que las condiciones de contagio, y el semáforo naranja en el estado, indican que el regreso a clases sólo puede suceder en nivel de bachillerato y universidades. Reiteró que en ese sentido, todavía no hay condiciones para que niñas y niños acudan a las escuelas de educación básica.",
        aforosFiltrosSanitarios: "El gobernador de Michoacan alertó que un regreso a clases presenciales en primarias y secundarias, aumentará la movilidad de manera muy considerable, y el riesgo de las familias. Ello, describió, por los traslados y contacto que implica llevar, entregar y recoger a los hijos e hijas en las escuelas.",
        referencias: [
            "https://www.eluniversal.com.mx/estados/en-michoacan-no-hay-condiciones-para-regreso-clases-presenciales-aureoles"
        ],
        color: StateNoBack2School
    },
    {
        id: "MX-VER",
        name: "Veracruz de Ignacio de la Llave",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "SP",
        alumnosVacunados: "NO",
        nombreEstrategia: "Regreso a clases presenciales",
        actividadesPresenciales: "El Gobernador consideró necesario que los estudiantes retomen su actividad en las escuelas y por eso el regreso a clases en el estado de Veracruz se dará como lo establece el calendario de la Secretaría de Educación Pública (finales de agosto). En un cambio de opinión de lo que venía sosteniendo en cuanto al retorno a las aulas en la entidad, el Gobernador manifestó categórico que la educación está federalizada; de ahí que será la autoridad educativa federal la que determine cuándo se dará el regreso a la actividad presencial escolar.",
        aforosFiltrosSanitarios: "Entrega de kits de limpieza en todos los planteles <br><br> Acorde al semáforo epidemiológico, aplica SEV estrategias a distancia<br><br> El 24 de junio regresaron a las aulas, al respecto, se cuenta con 682 estrategias por sistema en los modelos presencial, mixto y virtual. La Secretaría de Educación estatal destacó que esta planeación incluye el acuerdo voluntario de la comunidad escolar, para lo que padres y madres recibirán una carta compromiso sobre el cuidado de la salud de sus hijos. <br><br> 1.- Todas las escuelas ubicadas en municipios con Semáforo en color amarillo o naranja, darán atención únicamente en la modalidad a distancia.<br> 2.- En los municipios que se mantenga el color verde del semáforo epidemiológico local, las instituciones podrán continuar según lo programado y decidido por cada centro escolar.<br><br> El personal del plantel educativo podrá asistir a sus escuelas si así lo acuerdan a realizar las tareas pertinentes con o sin estudiantes de acuerdo a los puntos 1 y 2.",
        referencias: [
            "https://www.sev.gob.mx/v1/noticias/leer/2354/",
            "https://www.diariodexalapa.com.mx/local/si-habra-clases-presenciales-pero-no-obligatorio-dijo-el-titular-de-la-sev-zenyazen-escobar-garcia-7029291.html",
            "https://www.diarioelmundo.com.mx/index.php/2021/07/16/en-agosto-regreso-a-clases-en-veracruz/",
            "https://www.milenio.com/estados/regreso-clases-presenciales-veracruz-grupos-reducidos"
        ],
        color: StateBack2School
    },
    {
        id: "MX-PUE",
        name: "Puebla",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de Agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "95",
        alumnosVacunados: "NO",
        nombreEstrategia: "Modelo Educativo Híbrido en el Estado de Puebla Educación Básica y Media Superior Ciclo Escolar 2021-2022",
        actividadesPresenciales: "Para el regreso a clases será prioridad que las y los maestros estén vacunados: Lozano",
        aforosFiltrosSanitarios: "Las escuelas multigrado o de organización completa que puedan atender a toda su población de manera presencial todos los días, deben garantizar la sana distancia, así como la implementación del plan de atención (nivelación) de forma integrada a las jornadas académicas. Aquellas escuelas con mayor matrícula dividirán aforos cuya distribución puede ser por apellidos.",
        referencias: [
            "http://sep.puebla.gob.mx/index.php/component/k2/prueba-2-2-2",
            "https://www.eluniversalpuebla.com.mx/educacion/95-de-maestros-en-puebla-ya-esta-vacunado-contra-covid",
            "https://www.milenio.com/politica/comunidad/clases-presenciales-en-puebla-seran-voluntarias-sep"
        ],
        color: StateBack2School
    },
    {
        id: "MX-TLA",
        name: "Tlaxcala",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "SP",
        alumnosVacunados: "NO",
        nombreEstrategia: "Sin información",
        actividadesPresenciales: "En medios se ha difundido que la incorporación presencial será una vez que el semáforo epidemiológico este en verde.",
        aforosFiltrosSanitarios: "Una vez que el semáforo epidemiológico dé luz verde, estás son las medidas que se tomarán para el regreso a clases presenciales en Tlaxcala: <ol> <li>Conformación de Comités Participativos de Salud.</li> <li>Dotar a las escuelas con insumos de higiene como agua y jabón.</li> <li>Salvaguardar a los docentes en grupos de riesgo.</li> <li>Uso obligatorio de cubrebocas o pañuelo, dentro y fuera de las escuelas, públicas y particulares.</li> <li>Mantener distancia en entradas y salidas de los planteles.</li> <li>Programar recesos escalonados.</li> <li>Maximizar el uso de espacios abiertos.</li> <li>Suspender todo tipo de ceremonias o reuniones.</li> <li>Brindar apoyo socioemocional para alumnos y docentes.</li> </ol>Una comisión de la Secretaría de Educación Pública (SEPE) y el SNTE trabajando para la realización de una logística y la atención en el regreso a clases presenciales. Universidad Autónoma de Tlaxcala (UATx) reconsideraría el regreso a las clases.",
        referencias: [
            "https://www.milenio.com/politica/comunidad/duda-regreso-clases-presenciales-tlaxcala-tercer-ola-covid",
            "https://www.milenio.com/politica/comunidad/duda-regreso-clases-presenciales-tlaxcala-tercer-ola-covid ",
            "https://www.lajornadadeoriente.com.mx/tlaxcala/clases-presenciales-sepe-a-sep/",
            "https://www.elsoldetlaxcala.com.mx/local/alistan-preparatorias-regreso-a-las-aulas-juan-pablo-arroyo-6924698.html",
            "https://kidstudia.com/guia/todo-sobre-el-regreso-a-clases-en-mexico/tlaxcala/#modalidad+del+regreso+a+clases+en+tlaxcala",
            "https://www.milenio.com/politica/comunidad/de-manera-responsable-buscan-que-sea-el-regreso-a-clases-en-tlaxcala",
            "https://amqueretaro.com/mexico/2021/07/02/revisa-sep-el-regreso-a-clases-en-tlaxcala/"
        ],
        color: StateBack2School
    },
    {
        id: "MX-MEX",
        name: "Estado de México",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "Fecha no definida",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "SP",
        alumnosVacunados: "NO",
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
        color: StateBack2School
    },
    {
        id: "MX-CMX",
        name: "Ciudad de México",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "100",
        alumnosVacunados: "SI",
        nombreEstrategia: "Sin información",
        actividadesPresenciales: "Del regreso presencial dijo la Jefa de Gobierno que será un trabajo de interlocución con todas las comunidades escolares y en acuerdo con ellas porque deben tener una participación muy importante en la seguridad sanitaria y de salud. <br><br> El 30 de agosto iniciará el próximo ciclo escolar 2021-2022 en los niveles básico, medio y superior, y a unas semanas de volver a las aulas algunas escuelas públicas ya anunciaron las medidas bajo las que regresarán los estudiantes, toda vez, que México se encuentra atravesando una tercera ola de contagios por la Covid-19. <br><br> La a UNAM inicia el 9 de agosto.  En cuanto al nivel medio superior y superior regresaran a clases presenciales bajo los propios calendarios escolares de cada institución en los estados que se encuentren en semáforo sanitario verde o amarillo. Es importante mencionar que las instituciones que puedan regresar a las aulas decidirán cómo será este regreso, ya sea escalonado o en modalidad híbrida.  El Instituto Politécnico Nacional (IPN) reiteró que durante el próximo ciclo escolar no habrá retorno a clases presenciales y anunció que aplicará un plan híbrido que permita que los politécnicos regresen a las aulas de manera escalonada. <br><br> La Universidad Nacional Autónoma de México (UNAM), recientemente informó que los estudiantes podrán volver a clases presenciales cuando el semáforo epidemiológico se encuentre en color verde. <br><br> Instituto Politécnico Nacional (IPN) anunció que los alumnos no regresarán a clases presenciales durante la primera mitad del ciclo escolar 2021-2022, y destacaron que como medida preventiva analizarán el regreso a las aulas hasta el mes de enero de 2022",
        aforosFiltrosSanitarios: "La UNAM informó que, aunque se esté en semáforo verde durante tres semanas consecutivas, en tanto el alumnado no haya sido vacunado, la asistencia presencial será voluntaria para actividades académicas determinadas por los consejos técnicos. <br><br> El IPN determinó que las actividades de este semestre se llevarán a cabo predominantemente de manera no presencial y que los profesores, los alumnos y personal de apoyo y asistencia a la educación, podrán hacer uso de las instalaciones, voluntariamente, y bajo el consentimiento por escrito de los participantes involucrados.La Universidad Autónoma de México (UAM) ya retomó clases a distancia.<br><br> La UNAM: Las facultades solo podrán pedir la asistencia de los alumnos una vez que la entidad federativa haya permanecido tres semanas consecutivas con el semáforo epidemiológico en color verde. Ya que eso suceda, la incorporación será en grupos reducidos y de manera escalonada. Mientras el alumnado no haya sido vacunado, la asistencia será voluntaria, además, en el eventual retorno presencial se privilegiará a las actividades de bienvenida y reconocimiento de nuestras instalaciones para las generaciones que ingresaron en agosto del 2020 y la de nuevo ingreso del presente año, siempre respetando los límites establecidos del 30% de la matrícula escolar en los espacios educativos.",
        referencias: [
            "https://politica.expansion.mx/cdmx/2021/08/01/el-gobierno-cdmx-se-mantiene-en-su-decision-en-agosto-habra-regreso-a-clases",
            "https://www.eluniversal.com.mx/nacion/ipn-en-proximo-ciclo-escolar-no-habra-regreso-clases-presenciales",
            "https://www.ejecentral.com.mx/en-cdmx-continua-plan-del-regreso-a-clases-presencial/",
            "https://wradio.com.mx/programa/2021/08/03/asi_las_cosas/1628003040_998317.html",
            "https://www.marca.com/claro-mx/trending/2021/07/29/6103211646163fd7978b4590.html",
            "https://kidstudia.com/guia/todo-sobre-el-regreso-a-clases-en-mexico/#%c2%bfqu%c3%a9+estados+regresan+a+clases+presenciales+en+2021%3f",
            "https://planeacion.sep.gob.mx/entidadfederativa.aspx",
            "https://mexico.as.com/mexico/2021/07/30/actualidad/1627609664_758632.html",
            "https://politica.expansion.mx/mexico/2021/07/29/cuando-es-el-regreso-clases-presenciales-universidades-cdmx",
            "https://www.capital21.cdmx.gob.mx/noticias/?p=19324",
            "https://www.elsoldemexico.com.mx/metropoli/cdmx/cdmx-apoya-regreso-a-clases-presenciales-aun-con-semaforo-rojo-por-covid-7052629.html",
            "https://tiempodigital.mx/2021/08/08/unam-ipn-y-uam-contra-regreso-a-clases-presenciales/"
        ],
        color: StateBack2School
    },
    {
        id: "MX-MOR",
        name: "Morelos",
        regresoActividadesPresenciales: "Por definir",
        fechaRetorno: "Sin informacón",
        tipoModelo: "A distancia",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "SP",
        alumnosVacunados: "NO",
        nombreEstrategia: "Regreso a clases",
        actividadesPresenciales: "Se estan coordinando con la Secretaría de Gobernación que realiza con gobernadores, la Secretaría de Salud y de Educación de los estados y se esta analizando todos los escenarios, además mecniona que será relevante la opinión de los padres de familia. <br><br> El periodo de inscripciones y reinscripciones será del 16 de agosto al 10 de septiembre, mientras que las sesiones del Comité Participativo de Salud Escolar, así como las jornadas de limpieza en escuelas serán del 11 al 13 de agosto de 2021. con el fin de estar listo para el inicio de ciclo",
        aforosFiltrosSanitarios: "Terminó en julio el Programa Piloto de Regreso a Clases Presenciales Seguras, voluntarias, escalonadas y graduales sin incidente alguno para todos los que participaron en este proyecto: alumnos, padres de familia, docentes, administrativos y personal de apoyo",
        referencias: [
            "https://morelos.gob.mx/?q=prensa/nota/comunicado-de-prensa-secretaria-de-educacion-3",
            "https://elqueretano.info/trafico/presentan-calendario-escolar-2021-2022-para-morelos/",
            "https://mexico.as.com/mexico/2021/07/30/actualidad/1627609664_758632.html",
            "https://www.milenio.com/estados/morelos-analiza-posible-regreso-a-clases-presenciales",
            "https://mexico.as.com/mexico/2021/07/30/actualidad/1627609664_758632.html"
        ],
        color: StateInDefinition
    },
    {
        id: "MX-GRO",
        name: "Guerrero",
        regresoActividadesPresenciales: "Por definir",
        fechaRetorno: "31 de agosto 2021/03 de septiembre de 2021",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "64.3",
        alumnosVacunados: "NO",
        nombreEstrategia: "De regreso a la escuela",
        actividadesPresenciales: "El CETEG informó que el regreso a clases presenciales se reanudarán hasta que haya semáforo verde, el 100 por ciento del magisterio vacunado y exista un consenso con los padres de familia. <br><br> El próximo 31 de agosto arrancará de manera presencial el ciclo escolar 2021-2022 en casi 12 mil escuelas de Guerrero. regreso a clases será de manera gradual y escalonada.<br><br> Sin embargo, en notas recientes  se refirió que de no haber un cambio en el semáforo epidemiológico a color verde, habría posibilidad de estar frente a grupo, caso contrario, tendrán que seguir con el modelo a distancia.<br><br> Miembros de la Coordinación Estatal de Trabajadores de la educación en Guerrero (CETEG) informó que se realizará consulta a los padres de familia respecto al regreso a clases presenciales , el próximo 30 de agosto, a pesar de la pandemia.",
        aforosFiltrosSanitarios: "Se considerarán tres factores: que el estado se mantenga permanentemente en el color verde en el Semáforo de Riesgo Epidemiológico; que las escuelas cuenten con un protocolo sanitario, un plan escolar que refleje la organización administrativa y académica del plantel, y el fortalecimiento académico a través de una guía estatal para el regreso a clases y el cronograma de actividades para la apertura de escuelas en todos los niveles. <br><br> Por otro lado, los trabajadores de la educación hayan sido vacunados y que el semáforo epidemiológico esté en verde.",
        referencias: [
            "https://heraldodemexico.com.mx/nacional/2021/6/22/guerrero-anuncia-regreso-clases-presenciales-en-agosto-309005.html",
            "https://www.elsoldemexico.com.mx/republica/sociedad/regreso-a-clases-presenciales-en-guerrero-sera-el-3-de-septiembre-preve-gobernador-pandemia-covid-19-6819985.html",
            "https://www.elsoldeacapulco.com.mx/local/complicado-el-regreso-a-clases-presenciales-en-guerrero-escuelas-pandemi-contagios-covid-guerrero-7039433.html",
            "https://snte.org.mx/seccion14/snte-condiciona-el-regreso-a-clases-presenciales-en-guerrero/",
            "https://snte.org.mx/seccion14/con-seguridad-volvemos-a-la-escuela-snte/",
            "https://www.elsoldeacapulco.com.mx/local/complicado-el-regreso-a-clases-presenciales-en-guerrero-escuelas-pandemi-contagios-covid-guerrero-7039433.html",
            "https://suracapulco.mx/consultara-a-los-padres-respecto-al-regreso-a-clases-presenciales-adelanta-la-ceteg/",
            "https://www.milenio.com/estados/guerrero-regreso-clases-presenciales-semaforo-verde"
        ],
        color: StateInDefinition
    },
    {
        id: "MX-OAX",
        name: "Oaxaca",
        regresoActividadesPresenciales: "Por definir",
        fechaRetorno: "30 agosto",
        tipoModelo: "A distancia",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "Sin Definir",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "100",
        alumnosVacunados: "NO",
        nombreEstrategia: "No disponible",
        actividadesPresenciales: "Las autoridades educativas de Oaxaca están llevando pláticas con padres de familia de todos lo municipios. De darse el regreso a clases será de forma presencial, voluntario, gradual y escalonado.<br><br> De acuerdo con la Circular N. SGE.DPE/003/2021, se exhorta a actuar con apego al semáforo epidemilógico. El regreso presencial a clases será cuando el semáforo se encuentre en verde y el proceso de consenso. Otros medios han indicado que de regresar a la presencialidad seria voluntario y paulatino e inciaria a finales del mes de agosto",
        aforosFiltrosSanitarios: "Se implementa un proceso integral y amplio de rehabilitación de baños, y de suministro de agua potable para que estén listas para aplicar el protocolo sanitario anticovid y se pueda reanudar las clases presenciales en los tiempos que reclama el plan de reanudación de actividades escolares después de la pandemia por el SARS-COV-2. <br><br> Milenio informa que en el estado de Oaxaca el regreso a clases de forma presencial será voluntario, gradual y escalonado debido a la pandemia de covid-19; sin embargo se sigue tratando de establecer acuerdos.   El magisterio de la Sección 22 de la CNTE definirá el próximo 18 de agosto la probable fecha y la estrategia para el retorno presencial a las aulas en los 570 municipios de la entidad. Ahí discutirán la propuesta del Instituto Estatal de Educación Pública de Oaxaca, (IEEPCO).",
        referencias: [
            "https://www.youtube.com/watch?v=mr3BZC1o9kM",
            "http://cuartaplana.com/2021/08/El-18-de-agosto-la-S-22-definira-fecha-y-estrategia-para-el-retorno-presencial-a-clases/",
            "https://mexico.as.com/mexico/2021/08/02/actualidad/1627869115_989386.html",
            "https://planeacion.sep.gob.mx/entidadfederativa.aspx",
            "https://www.marca.com/claro-mx/trending/2021/08/03/6109ade946163fda2b8b45fb.html"
        ],
        color: StateInDefinition
    },
    {
        id: "MX-TAB",
        name: "Tabasco",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "SP",
        alumnosVacunados: "NO",
        nombreEstrategia: "A la escuela. Seguro Regreso",
        actividadesPresenciales: "La secretaria de Educación precisó que serán en total 3 mil 800 planteles educativos de Preescolar, Primaria y Secundaria, que atienden a una población de 532 mil educandos, los que serán rehabilitados durante los meses de julio y agosto, como parte de los preparativos ante el posible regreso a clases presenciales para el ciclo escolar 2021-2022, siempre y cuando el semáforo epidemiológico este en color verde. <br><br>En totalidad, escalonado, hibrido, porcentual de niñas, niños y jovenes. <br><br>Escalonado, presencial, híbrido o una mezcla de ambos (implementación de un protocolo Alemán)",
        aforosFiltrosSanitarios: "Desarrollo de materiales informativos y protocolos sanitarios.",
        referencias: [
            "https://heraldodemexico.com.mx/nacional/2021/7/22/tabasco-no-volvera-clases-presenciales-en-agosto-analizan-sea-en-septiembre-318653.html",
            "https://www.elheraldodetabasco.com.mx/local/tabasco-si-regresa-a-clases-presenciales-en-septiembre-7015316.html"
        ],
        color: StateBack2School
    },
    {
        id: "MX-CHP",
        name: "Chiapas",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "100",
        alumnosVacunados: "NO",
        nombreEstrategia: "No disponibles",
        actividadesPresenciales: "Antes del inicio escolar se organizarán reuniones escolares para determinar la forma en que regresarán los alumnos a las escuelas. De manera general, el regreso a las escuelas será en grupos pequeños, de manera alternada y con las recomendaciones sanitarias correspondientes. Fechas de inicio en media superior: Colegio de Bachilleres inician el 06 de septiembre. <br> Bachilleratos tecnológicos inician el 06 de septiembre. <br> Conalep inician el 30 de agosto. <br> Inicio de clases en educación superior: Las instituciones de educación superior estarán iniciando el ciclo escolar conforme su propio calendario institucional. Por lo que este nivel educativo tendrá varias fechas de inicio. Para el 06 de septiembre, todas las universidades ya deben estar con sus actividades académicas. <br><br>  La Universidad Autónoma de Chiapas (UACH) iniciará el ciclo escolar el 09 de agosto con una modalidad de clases presencial mixta. Los alumnos llevarán sus clases en línea, mientras que las prácticas de talleres y laboratorio se realizarán en grupos pequeños a no más del 30%, escalonados y con sana distancia.",
        aforosFiltrosSanitarios: "Medidas para el Regreso a Clases: <ol><li>Uso general de cubrebocas obligatorio. <li> Sana distancia en actividades al interior de los planteles, así como en las entradas y salidas. </li> <li> Recreos escolares escalonados</li> <li> Lugares fijos alternados.</li> <li> Asistencia alternada por apellido.</li> <li> Considera que tus hijos deberán acudir a clases sin fiebre o temperatura mayor a 37°. Estando dentro de la escuela, deberán lavarse frecuentemente las manos o utilizar gel antibacterial y los grupos no podrán ser mayor a 25 alumnos</li></ol>",
        referencias: [
            "https://www.unomasuno.com.mx/regreso-a-clases-en-chiapas-el-proximo-ciclo-escolar/",
            "https://kidstudia.com/guia/todo-sobre-el-regreso-a-clases-en-mexico/chiapas/",
            "https://planeacion.sep.gob.mx/entidadfederativa.aspx",
            "https://www.eluniversal.com.mx/estados/regreso-clases-presenciales-en-chiapas-sera-el-proximo-30-de-agosto-anuncian-autoridades",
            "https://desdepuebla.com/2021/08/07/regreso-a-clases-es-inminente-en-chiapas-pese-al-incremento-de-casos-de-covid-salud-reducira-aforo-en-restaurantes-y-centros-de-entretenimiento/",
            "http://www.areopago.mx/chiapas/29376-cobach-prepara-retorno-a-clases-presenciales"
        ],
        color: StateBack2School
    },  
    {
        id: "MX-CAM",
        name: "Campeche",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "Por Definir",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "88.8",
        alumnosVacunados: "NO",
        nombreEstrategia: "Aprendamos en familia desde casa",
        actividadesPresenciales: "El 10 de agosto se anunció de manera oficial el regreso a clases que será de forma gradual el próximo 30 de agosto. Será decisión de los padres y madres de familia enviar o no a sus hijos. Se acordó que regresarán un total de 904 escuelas de nivel preescolar, primaria y secundaria incluyendo los servicios de la Conafe. <br> <br> Es uno de los estados que implementó la prueba piloto de clases presenciales antes de terminar el ciclo escolar pasado, misma que cerró por el aumento de contagios de covid-19 en la entidad. Por lo que autoridades educativas consideran que no existen las condiciones necesarias para garantizar un regreso seguro a los planteles educativos.<br> <br> El regreso a clases presenciales será cuando el semáforo esté en verde debido a la falta de vacunación de los estudiantes.",
        aforosFiltrosSanitarios: "Cuando se tengan las condiciones necesarias para el regreso a los planteles educativos, se optará por un modelo híbrido de clases, con asistencia alternada, grupos reducidos, así como medidas sanitarias. Algunas de ellas son las siguientes: <br><br>  Uso correcto de cubrebocas obligatorio. <br> Sana distancia dentro de los salones de clases y en todas las actividades al interior de los planteles.<br> Colocación de filtros sanitarios al entrar a la escuela y a la entrada del salón<br> Recuerda que el regreso a clases presenciales es voluntario, si decides enviar a tus hijos a la escuela debes firmar una carta responsiva en donde declaras que tu hijo asiste voluntariamente a la escuela y sin síntomas relacionados al covid-19.",
        referencias: [
            "https://www.poresto.net/campeche/2021/7/15/regreso-clases-en-campeche-sera-en-semaforo-verde-seduc-263676.html",
            "http://campechehoy.mx/2021/07/31/en-campeche-sera-dificil-el-regreso-a-clases-presenciales/",
            "https://educacioncampeche.gob.mx/aprendamosencasa",
            "https://www.lajornadamaya.mx/campeche/177646/el-9-de-agosto-decidira-seduc-si-hay-clases-presenciales-en-campeche",
            "https://www.gob.mx/sep/es/articulos/boletin-sep-no-102-concluye-exitosamente-el-proceso-de-vacunacion-a-personal-docente-en-30-entidades-del-pais?idiom=es",
            "https://www.poresto.net/campeche/2021/8/10/regreso-clases-presenciales-en-campeche-sera-el-30-de-agosto-seduc-271707.html"
        ],
        color: StateBack2School
    },
    {
        id: "MX-YUC",
        name: "Yucatán",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "SP",
        alumnosVacunados: "NO",
        nombreEstrategia: "Regreso seguro a clases",
        actividadesPresenciales: "El Gobierno de Yucatán mantiene su postura del regreso a clases, en forma presencial; para el 30 de agosto próximo. Sin embargo, éste será voluntario, opcional y mixto. Estrategia estatal de Regreso Seguro a Clases, elaborada con base en los lineamientos que emitió la Federación y la participación de la Mesa Central conformada por representantes de seis Secretarías, entre ellas la de Educación y Salud, el Congreso del Estado, universidades, sindicatos, cámaras empresariales, la Comisión estatal de Derechos Humanos (Codhey), padres de familia, estudiantes y colegios.",
        aforosFiltrosSanitarios: "Se considera un retorno voluntario, opcional y mixto. <br><br>Secretaría de Educación considera realizar jornadas de limpieza en las escuelas y sesiones de los Comités Participativos de Salud Escolar; que se desarrollará del 11 al 13 de agosto venideros, como una medida preventiva ante la pandemia mundial por Covid-19.",
        referencias: [
            "http://www.educacion.yucatan.gob.mx/boletines/index",
            "https://www.yucatan.com.mx/merida/yucatan-tendra-un-regreso-a-clases-presencial-en-agosto",
            "https://www.lajornadamaya.mx/yucatan/176643/los-ninos-deben-regresar-a-clases-presenciales-lo-mas-pronto-posible-vila-dosal",
            "https://www.lajornadamaya.mx/yucatan/175807/regreso-a-clases-en-yucatan-sera-el-30-de-agosto"
            
        ],
        color: StateBack2School
    },
    {
        id: "MX-ROO",
        name: "Quintana Roo",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 agosto 2021",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "NO",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "75.6",
        alumnosVacunados: "NO",
        nombreEstrategia: "Plan para Regreso a Clases Seguro",
        actividadesPresenciales: "Centros Comunitarios de Aprendizaje",
        aforosFiltrosSanitarios: "Cuatro pasos: <br> 1) Estar en semáforo amarillo tanto federal como estatal para abrir los Centros Comunitarios de Aprendizaje donde se ofrece asesoría; <br> 2) Rehabilitación de escuelas (infraestructura, limpieza y orden); <br> 3) Aplicación de un diagnóstico académico. <br> 4) Y que cada institución educativa entregue o actualice su plan de regreso a clases, cumpliendo con los protocolos sanitarios.Prueba para diagnosticar el rezago entre los alumnos tras un año y tres meses de clases en línea. Los padres de familia los encargados de aplicar la prueba, que consistirá en un grupo de preguntas de lo que tendrían que conocer según su grado de escolaridad.",
        referencias: [
            "https://qroo.gob.mx/seq/detallan-acciones-de-la-seq-para-el-regreso-clases-destacando-cuatro-importantes-temas"
        ],
        color: StateBack2School
    },
];

var DataStates_v5 = [
    {
        id: "MX-BCS",
        name: "Baja California Sur",
        regresoActividadesPresenciales: "Por definir",
        fechaRetorno: "Por definir",
        tipoModelo: "A distancia",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "78.8",
        alumnosVacunados: "Sin Definir",
        nombreEstrategia: "No disponible",
        actividadesPresenciales: "Las autoridades educativas de Baja California Sur se han pronunciado al regreso a clases presenciales únicamente cuando el semáforo sanitario se encuentre en color verde. Por lo que aún no se tiene una fecha programada para el regreso presencial.<br><br> La presencialidad será únicamente cuando el semáforo esté en verde.",
        aforosFiltrosSanitarios: "Se capacitaron a los comités participativos de salud escolar, en cada escuela debe de existir un comité de esta naturaleza que se encargará de revisar las condiciones en las cuales se encuentra la escuela, se tendrán algunos filtros y el primero desde luego será la casa, será en el hogar donde se revise la condición de su hijo o hija y tener en claro cuáles son los síntomas COVID, el segundo filtro al entrar a la escuela y el tercero previo a entrar al salón de clases.",
        referencias: [
            "https://kidstudia.com/guia/todo-sobre-el-regreso-a-clases-en-mexico/baja-california-sur/",
            "https://www.bcsnoticias.mx/confirmado-baja-california-sur-ya-se-prepara-para-regreso-a-las-aulas-en-agosto-sep/",
            "https://www.elsudcaliforniano.com.mx/local/regreso-a-clases-solo-sera-en-alerta-verde-en-bcs-6987936.html",
            "http://www.bcs.gob.mx/noticias/concluyo-vacunacion-del-personal-educativo-en-bcs/#:~:text=CONCLUY%C3%93%20VACUNACI%C3%93N%20DEL%20PERSONAL%20EDUCATIVO%20EN%20BCS,-La%20Paz%20B.C.S.&text=Con%20la%20aplicaci%C3%B3n%20de%2017,educativo%20de%20Baja%20California%20Sur"
        ],
        color: StateInDefinition
    },
    {
        id: "MX-BCN",
        name: "Baja California Norte",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "76.30",
        alumnosVacunados: "NO",
        nombreEstrategia: "Regreso Seguro a Clases Presenciales",
        actividadesPresenciales: "Se preveé que 24 escuelas vuelvan a clases presenciales durante la primera semana del ciclo 2021-2022 (Lunes 30 de agosto) <br><br>La asistencia será voluntaria, gradual y escalonada. Durante septiembre, los planteles se duplicarán semanalmente, de acuerdo a la disposición de escuelas y la autorización de padres de familia. las clases serán en un modelo híbrido entre presenciales y a distancia, ya que los alumnos seleccionados asistirán tres y dos días de la semana, de manera alternada, a partir de la primera letra del apellido.   el regreso a clases será en 24 escuelas (cuatro por municipio y dos públicas y dos privadas), en la segunda semana serán 48; en la siguiente 72 y después 96, de acuerdo a la evolución y monitoreo del manejo de salud. Serán los padres de familia los que aprueben el regreso de clases presenciales de sus hijos.",
        aforosFiltrosSanitarios: "El regreso a las escuelas de manera presencial, se realizará de forma gradual y segura, incluyendo la realización de jornadas de limpieza previas al ingreso de los estudiantes. las escuelas de cada municipio o poblado serán divididas en áreas que incluyan un centro de salud que se encargará de dar atención a esa región en caso de ser necesario.  Los padres de familia y las escuelas deberán coordinar filtros para evitar la propagación de la enfermedad. en caso de que se detecte un caso sospechoso, el grupo será suspendido por 14 días, mientras que si se confirma un caso de COVID-19 se suspenderán las clases en todo el plantel. Las aulas tendrán un máximo de 10 personas.",
        referencias: [
            "https://www.sandiegouniontribune.com/en-espanol/noticias/bc/articulo/2021-07-26/baja-california-anuncia-regreso-a-clases-presenciales-semaforo-epidemiologico-regional-permanece-verde",
            "http://www.educacionbc.edu.mx/regresoseguro/",
            "https://www.jornada.com.mx/notas/2021/07/26/estados/planean-regreso-a-clases-gradual-en-baja-california-a-partir-de-agosto/#:~:text=El%20gobierno%20de%20Baja%20California,forma%20gradual%2C%20escalonada%20y%20segura.",
            "https://www.bcsnoticias.mx/incierto-el-regreso-a-clases-en-bcs-acercandose-la-fecha-se-tomaran-decisiones-salud/",
            "https://www.gob.mx/sep/es/articulos/boletin-sep-no-102-concluye-exitosamente-el-proceso-de-vacunacion-a-personal-docente-en-30-entidades-del-pais?idiom=es"
        ],
        color: StateBack2School
    },
    {
        id: "MX-SON",
        name: "Sonora",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "87",
        alumnosVacunados: "NO",
        nombreEstrategia: "Retorno Seguro, estrategias para el regreso a clases presenciales del ciclo 2021-2022",
        actividadesPresenciales: "A partir del 30 de agosto, los estudiantes en Sonora regresarán a las aulas conforme a las disposiciones federales y condiciones sanitarias para ver la gradualidad del retorno. <br><br>Regreso a clases presenciales debe darse con una estrategia conjunta para hacerlo de la forma más segura: Gobernadora Pavlovich",
        aforosFiltrosSanitarios: "Ante el aumento de contagios y el registro de estas variantes del coronavirus, la gobernadora Pavlovich instó a seguir con las acciones y programas de prevención, para seguir con las medidas y protocolos sanitarios rigurosos. Salones de clases con buena ventilación.<br><br>La Secretaría de Educación y Cultura y el Instituto Sonorense de Infraestructura Educativa (ISIE) han realizado una valoración de las condiciones de la infraestructura física de los planteles escolares, con el fin de atender a todos los requerimientos apremiantes de los inmuebles.<br><br><ol><li>Pupitres separados al menos metro y medio entre cada uno.</li><li>Máximo 15 alumnos en cada salón.</li><li>Uso de gel antibacterial y lavado frecuente de manos.</li><li>Uso correcto de cubrebocas en todo momento.</li></ol>",
        referencias: [
            "http://www.sec.gob.mx/portal/index.php?op=nota&p=1033",
            "https://kidstudia.com/guia/todo-sobre-el-regreso-a-clases-en-mexico/sonora/#medidas+para+el+regreso+a+clases+en+sonora",
            "https://www.elsoldehermosillo.com.mx/local/es-oficial-alumnos-de-sonora-si-regresaran-a-clases-presenciales-30-de-agosto-sec-gobierno-del-estado-escuelas-7046536.html",
            "http://www.sec.gob.mx/portal/index.php?op=nota&p=1034"
        ],
        color: StateBack2School
    },
    {
        id: "MX-CHH",
        name: "Chihuahua",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "NO",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "95",
        alumnosVacunados: "NO",
        nombreEstrategia: "Estrategia Chihuahua (implementada desde julio)",
        actividadesPresenciales: "Se refrenda el inicio el 30 de agosto, con las actividades del protocolo SEP, y con base en reuniones en coordinación con el equipo de transición del nuevo gobierno por entrar.  Regresan conforme a lo establecido por la SEP, donde el inicio del ciclo escolar 2021-2022 es el miércoles 11 de agosto, advirtiendo que toda medida debe estar sujeta a evaluación e incluso a una rectificación. <br><br>El secretario de Educación dijo que no será ''un regreso a clases normal, sino que el modelo sea de hasta un máximo del 50 por ciento los estudiantes puedan estar acudiendo a las aulas''.  También que: ''A partir del 11 de agosto todas las figuras educativas deberán regresar a labores presenciales con los cursos de preparación del ciclo escolar y el regreso escalonado. Del 11 al 14 de agosto se realizará la jornada de limpieza donde participarán los Comités de Participación en Salud y los padres de familia deberán trabajar para la limpieza de los centros escolares. Del 17 al 20 de agosto los docentes tendrán el taller de capacitación y la semana del 23 al 27 se tendrá el primer Consejo Técnico Escolar del ciclo 2021-2022, a fin de que el lunes 30 de agosto se estén abriendo las escuelas para recibir a los niños''. Para el equipo de transición, la intención es que algunos grupos vayan lunes y miércoles y el viernes se dejen para los alumnos que tengan una mayor necesidad de apoyo.",
        aforosFiltrosSanitarios: "La estrategia Chihuahua plantea tres ejes:  Eje I. estrategia de ajuste significativo en el diseño curricular con aprendizajes esperados, Eje II. centros de asesoría y seguimiento académico, CASA, Eje III: estrategia multianual para la recuperación académica ciclos escolares 2020-2021. 2021-2022. <br><br> Los planteles escolares no abrirán de manera regular los cinco días de la semana de manera simultánea, sino que la vertiente que iniciará a partir del 30 de agosto será con el aforo en los centros escolares del 50%, como máximo.<br><br> Las sesiones de la jornada escolar serán de 45 minutos, luego los estudiantes deberán levantarse y salir del salón para que se ventile, por lo que se ha pedido que los centros escolares que cuenten con domos, canchas, pórticos y otros espacios al aire libre se aprovechen mientras que el clima lo permita.<br><br> La estrategia está acompañada de los filtros sanitarios, los cuales inician desde el hogar, ya que padre y/o madre deben de verificar que no presente síntomas y firmar el compromiso escolar. Al ingresar al plantel deberán lavarse las manos y hacer uso de gel antibacterial.  Además: ''cada plantel escolar elegirá cómo recibirán a los niños, es decir, si por abecedario o grado, si el viernes atenderán a los estudiantes que requieren de atención más individualizado''",
        referencias: [
            "https://www.omnia.com.mx/noticia/191630/regreso-a-clases-sera-coordinado-con-la-federacion-corral",
            "http://www.chihuahua.gob.mx/contenidos/inician-32-mil-docentes-y-personal-administrativo-actividades-del-nuevo-ciclo-escolar-en",
            "https://www.excelsior.com.mx/nacional/capacitan-a-maestros-de-chihuahua-para-regreso-a-clases-presenciales/1465697"
        ],
        color: StateBack2School
    },
    {
        id: "MX-COA",
        name: "Coahuila de Zaragoza",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "23 de agosto",
        tipoModelo: "Híbrido", 
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "85.4",
        alumnosVacunados: "NO",
        nombreEstrategia: "No disponible",
        actividadesPresenciales: "Del 23 de agosto al 03 de septiembre se tiene previsto realizar pruebas diagnósticas y una evaluación para identificar el abandono y rezago escolar.  Del 6 al 30 de septiembre se pretende llevar a cabo un período de recuperación para alumnos en rezago. El regreso a clases presenciales será obligatorio paras los docentes.",
        aforosFiltrosSanitarios: "Previo a la apertura de las escuelas deberá pedírseles a los padres de familia, entre otras cosas, que sus hijos acudan bañados a la escuela y que en caso de notar algún síntoma de enfermedad como fiebre, tos, dolor de garganta o de cabeza no podrán asistir y deberá notificarse a la autoridad del plantel. Las escuelas por su parte deberán prepararse con lo siguiente: Insumos para colocar un filtro a la entrada del plantel, tanto para el personal que trabaja en la escuela como para los alumnos En el filtro deberá haber: • Alcohol en gel con alcohol isopropílico al 70% para la higiene de manos a la entrada al plantel • Termómetro infrarrojo para la toma de temperatura previo a la entrada al plantel. Los salones de clases deberán contar con:<ul><li>• Alcohol en gel con alcohol isopropílico al 70%.</li><li>• Caja de pañuelos desechables.</li><li>• Bote de basura con pedal y tapa.</li><li>• Toallitas desinfectantes para la limpieza del pupitre y/o mesas de trabajo. Las áreas comunes (patios, canchas, áreas de juego) deberán limpiarse como se hace normalmente todos los días, al igual que el resto de las instalaciones, poniendo énfasis en las superficies de mayor contacto como escritorios, mesas, interruptores, picaportes.</li></ul>Todos los baños deberán contar con agua, jabón, sanitas para secarse las manos,papel higiénico y botes de basura con pedal y tapa. Existe la posibilidad detransmisión de SARS-CoV-2 mediante inhalación de la aerosoles fecales por locual se debe poner especial atención en la ventilación de los baños, así como enla utilización estricta de cubreboca al acceder a ellos. Se recomienda educar a losalumnos a bajar la tapa del inodoro antes de jalar la palanca.",
        referencias: [
            "https://www.elheraldodesaltillo.mx/2021/07/27/habra-periodo-de-diagnostico-y-otro-de-recuperacion-al-regreso-a-clases-en-coahuila/",
            "https://www.elheraldodesaltillo.mx/2021/07/05/volverian-el-23-de-agosto-a-clases-presenciales-90-escuelas-en-coahuila/",
            "https://vanguardia.com.mx/articulo/regreso-clases-sera-obligatorio-para-los-profesores-en-coahuila",
            "https://www.saludcoahuila.gob.mx/COVID19/documentos/MANUAL%20REAPERTURA%20ESCOLAR%202021.pdf",
            "https://www.gob.mx/sep/es/articulos/boletin-sep-no-102-concluye-exitosamente-el-proceso-de-vacunacion-a-personal-docente-en-30-entidades-del-pais?idiom=es"
        ],
        color: StateBack2School
    },
    {
        id: "MX-NLE",
        name: "Nuevo León",
        regresoActividadesPresenciales: "Por definir",
        fechaRetorno: "30 de agosto",
        tipoModelo: "A distancia",
        reincorporacionVoluntaria: "Sin Definir",
        reincorporacionGradual: "Sin Definir",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "100",
        alumnosVacunados: "NO",
        nombreEstrategia: "No disponible",
        actividadesPresenciales: "Este miércoles comenzaron las labores de limpieza en las escuelas públicas de Nuevo León, como parte de los planes para un posible regreso a clases presenciales por parte de la Secretaría de Educación a finales de este mes. <br><br> La titular de la secretaría de Educación, María de los Ángeles Errizúris, dijo que tendrán a partir de hoy y hasta el 13 de agosto jornadas de limpieza en los planteles del estado de cara al inicio del próximo ciclo escolar. ''Esto nos permite ir teniendo listos los espacios para un posible regreso a las aulas''. El Bronco aseguró que no puede prometer el regreso a la presencialidad mientras la pandemia no sea controlada en el estado, puesto que no puede exponer a los infantes a contagiarse por asistir a los centros educativos. Jaime Rodríguez, Gobernador del estado, notificó a los alcaldes metropolitanos que la siguiente semana se reunirá con el Consejo de Educación para tomar una decisión respecto al regreso o no a clases presenciales.<br><br> El mandatario afirmó que como primera etapa se hizo el diagnóstico de los planteles, en los que ya se trabaja en su reparación, sin embargo ahora está en el proceso del consenso con maestros y padres de familia que son los que estarán expuestos de aprobarse el retorno a las aulas. El secretario de Salud de Nuevo León dijo: ''Nosotros como Gobierno del Estado estamos viendo las condiciones adecuadas para un regreso a clases seguro, hay una fecha programada para el 30 de agosto, estamos trabajando para que esa fecha sea el regreso a clases presenciales''. Aseguró que falta mucho para el regreso a clases presenciales programado para el 30 de agosto, por lo que los maestros y las escuelas se están preparando. <br><br> El funcionario estatal señaló que todavía falta mucho tiempo y las cosas cambian minuto a minuto.",
        aforosFiltrosSanitarios: "La asistencia será de forma híbrida, en el que las aulas estarán a un 30% de su capacidad y los alumnos pueden seguir las clases a distancia.",
        referencias: [
            "https://www.excelsior.com.mx/nacional/arranca-limpieza-en-escuelas-de-nl-ante-posible-regreso-a-clases/1465606?utm_source=1465606&utm_medium=contentrelated&utm_campaign=main",
            "https://www.infobae.com/america/mexico/2021/08/13/el-bronco-aseguro-que-el-regreso-a-clases-presenciales-dependera-del-control-de-la-pandemia-en-nuevo-leon/",
            "https://d.elhorizonte.mx/local/lunes-analizan-regreso-clases-presenciales-nuevo-leon/4028726",
            "https://www.posta.com.mx/estados/nuevo-leon/analiza-estado-regreso-a-clases-seguro/"

        ],
        color: StateInDefinition
    },
    {
        id: "MX-TAM",
        name: "Tamaulipas",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "SP",
        alumnosVacunados: "NO",
        nombreEstrategia: "Jornada Presencial de Regularización",
        actividadesPresenciales: "Expresó que se evaluarán las condiciones de cada región y de esta manera se determinará el retorno a las aulas educativas para el 30 de agosto, aunque no se podrá obligar a nadie, por lo que será voluntario y se respetará la decisión. <br><br>Educación básica se incorpora el 30 de agosto , Educación Media Superior inica el 21 de septiembre y Educación superior, dependera si es semestral o cuatrimestral. <br> Curso un Pilotaje para el regreso a clases, el cual cuenta con 2 fases de implementación.",
        aforosFiltrosSanitarios: "Están por arrancar un pilotaje denominado Jornada Presencial de Regularización, fase 2. El regreso a las aulas será en los municipios donde se tenga semáforo verde",
        referencias: [
            "https://www.tamaulipas.gob.mx/educacion/avisos/planteles-seleccionados-fase-2/",
            "https://www.milenio.com/politica/comunidad/regreso-a-clases-presenciales-en-tamaulipas-sera-voluntario",
            "https://www.tamaulipas.gob.mx/educacion/avisos/planteles-seleccionados-fase-2/",
            "https://www.tamaulipas.gob.mx/educacion/regresoaclasespresenciales-fasepiloto-boletines/",
            "https://kidstudia.com/guia/todo-sobre-el-regreso-a-clases-en-mexico/tamaulipas/",
            "https://www.milenio.com/politica/regreso-clases-vacaciones-ciclo-2021-2022-tamaulipas",
            "https://www.elsoldetampico.com.mx/local/regional/regreso-a-clases-presenciales-en-tamaulipas-sera-voluntario-cabeza-de-vaca-7026334.html",
            "https://www.hoytamaulipas.net/notas/464556/Regresaran-a-clases-presenciales-en-Tamaulipas-el-30-de-agosto.html",
            "https://www.tamaulipas.gob.mx/educacion/2021/08/acuerdos-para-el-regreso-a-clases-presenciales-en-educacion-basica-2021-2022/"
        ],
        color: StateBack2School
    },
    {
        id: "MX-SIN",
        name: "Sinaloa",
        regresoActividadesPresenciales: "SI",
        fechaRetorno: "30 de Agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "90",
        alumnosVacunados: "NO",
        nombreEstrategia: "Sin información",
        actividadesPresenciales: "El secretario de Educación Pública y Cultura, Juan Alfonso Mejía López, explicó que en cada una de las escuelas se determinará los días en que se darán las clases presenciales y lar virtuales, es decir, los maestros pueden tener las clases en aulas por una semana y la siguiente en línea, o elegir los días de la semana para cada modalidad. <br><br> En Sinaloa existen elementos para un regreso a clases gradual y focalizado, además de seguro para las niñas, niños y jóvenes, de acuerdo a la instrucción del gobernador Quirino Ordaz Coppel, quien fue reconocido por el presidente de la República, Andrés Manuel López Obrador, como el primer mandatario que solicitó la vacunación a las y los maestros del país para un regreso seguro a las escuelas.",
        aforosFiltrosSanitarios: "Regreso a las aulas en Sinaloa deberá atender condiciones de cada comunidad. Regreso a clases en Sinaloa será de forma gradual, focalizado y seguro. Experiencia previa de 955 Centros Comunitarios de Aprendizaje, donde se atendió a 26 mil 26 alumnos con rezago educativo. El congreso del Estado tiene la postura de “Estamos ansiosos porque los estudiantes regresen, pero la tercera ola de contagios es alarmante, ante este panorama es necesario que las autoridades actúen con prudencia: no hay condiciones del regreso seguro a las aulas",
        referencias: [
            "https://mieducacion.sepyc.gob.mx/sinaloa-coincide-con-el-presidente-andres-manuel-lopez-obrador-el-regreso-a-clases-es-por-el-convencimiento-nada-por-la-fuerza/",
            "https://www.debate.com.mx/opinion/Posible-retorno-a-las-aulas-20210730-0348.html",
            "https://mieducacion.sepyc.gob.mx/",
            "https://www.elsoldemazatlan.com.mx/local/regreso-a-clases-en-sinaloa-sera-en-modalidad-mixta-7045888.html",
            "https://www.elsoldemazatlan.com.mx/local/regreso-a-clases-en-sinaloa-sera-en-modalidad-mixta-7045888.html"
        ],
        color: StateBack2School
    },
    {
        id: "MX-DUR",
        name: "Durango",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "Si",
        reincorporacionGradual: "Si",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "100",
        alumnosVacunados: "NO",
        nombreEstrategia: "No disponible",
        actividadesPresenciales: "Se informa en Milenio que el próximo 30 de agosto arrancará el Ciclo Escolar 2021-2022 en el Estado de Durango conforme al calendario oficial de la Secretaría de Educación Pública (SEP). En la Región Lagunera el regreso a las escuelas será de manera voluntaria, y en caso de aquellos padres de familia que prefieran mantener a los hijos en casa, la educación continuará a través de los medios virtuales. Las escuelas que abrirán solamente serán aquellas que cuenten con el servicio de energía eléctrica y agua potable. <br><br>Otro de los factores para reactivar las clases presenciales, es que cada escuela deberá contar con las condiciones para cumplir con los nueve protocolos sanitarios establecidos por la SEP. Previo al retorno a las aulas se hace una revisión a cada edificio educativo, dentro de la “Jornada Nacional de Regreso Seguro a Las Escuelas”. <br><br>También como parte de estas acciones, el pasado lunes el gobernador José Rosas Aispuro y el Secretario de Educación Rubén Calderón Lujan se reunieron con las representaciones sindicales para crear comisiones junto con los comités de participación y salud escolar para realizar las inspecciones y revisiones en las escuelas y garantizar el regreso seguro.        El  gobernador José Rosas Aispuro Torres reiteró que en  Durango continúan los trabajos de preparación con los padres de familia y maestros para generar un regreso a clases seguro en este mes de agosto.       El regreso a clases este 30 de agosto será de forma presencial y voluntario siempre y cuando estén dadas las condiciones de cada plantel. Los servicios de agua y luz serán determinantes, anunció el subsecretario de Educación en La Laguna, Cuitláhuac Valdés, quien consideró que es impostergable hacerlo, sobre todo por la salud mental de los alumnos, así como su formación académica.",
        aforosFiltrosSanitarios: "No disponible",
        referencias: [
            "https://www.milenio.com/estados/clases-presenciales-en-la-laguna-de-durango-fecha-cuando-sera",
            "http://www.noticierosgrem.com.mx/si-hay-condiciones-para-regreso-a-clases-seguro-en-durango-gobernador/",
            "https://www.elsiglodetorreon.com.mx/noticia/1969333.durango-condiciona-el-regreso-a-clases-presenciales-al-estado-de-aulas.html"

        ],
        color: StateBack2School
    },
    {
        id: "MX-ZAC",
        name: "Zacatecas",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "90.6",
        alumnosVacunados: "NO",
        nombreEstrategia: "Regreso a clases presenciales",
        actividadesPresenciales: "Con el objetivo de que las escuelas de la Dirección Regional 2 Federal de la Secretaría de Educación cumplan con las condiciones de sanidad y seguridad para un posible regreso a clases este próximo 30 de agosto, personal de las mismas iniciaron con brigadas de limpieza en preescolar, primaria y secundaria, acciones que se tienen contempladas para los días 11, 12 y 13 del presente mes. <br><br> Regreso a clases en Universidad de Zacatecas será virtual.<br><br> En declaraciones  recientes, se reiteró que el regreso será solo si los padres de familia están de acuerdo. Se comentó que solo en los municipios de el Salvador, Melchor Ocampo, Mezquital del Oro, Apozol, Apulco, donde no hay contaguos se puede retomar el regreso a clases presenciales. Solo se publicó exhorto de la legislatura local para que la Secretaría de Educación y la Secretaría de Salud del Estado de Zacatecas elaboren un plan estratégico de regreso a clases presenciales seguro, ordenado,gradual, escalonado y cauto; con todos los protocolos de salud establecidos, además de valorar la posibilidad de un regreso a clases inmediato en aquellas instituciones públicas y privadas pequeñas,con pocos alumnos y donde las condiciones físicas así lo permitan.<br><br>Sin embargo, Aún no se puede fijar la postura, hasta conocer las condiciones del semáforo epidemiológico y el lineamiento federal.",
        aforosFiltrosSanitarios: "De acuerdo con la encuesta realizada por la Secretaría de Educación de Zacatecas (SEZ) a 101 mil 808 madres, padres de familia y tutores, el 81.3 por ciento dijo que está de acuerdo en que niñas, niños y adolescentes regresen a las escuelas de educación básica de manera presencial. El 92.3 por ciento se mostró dispuesto a colaborar en el establecimiento de los filtros sanitarios en casa, escuela y salón de clases, tal como lo establecen los protocolos de la Secretaría de Educación Pública (SEP). Se respetará la sana distancia, se suspenderán las ceremonias y los alumnos tendrán acceso a jabón, agua y gel alcoholado.<br><br> LA UAZ hará encuesta de movilidad y convivencia, “ya se tienen claros los protocolos de seguridad, de sanitización para todos los espacios, solo veremos si será escalonado, de acuerdo a los espacios o por nivel educativo, sin embargo, la decisión se tomará en agosto",
        referencias: [
            "https://imagenzac.com.mx/capital/necesario-el-regreso-clases-presenciales-en-zacatecas-brena-cantu/",
            "http://www.seduzac.gob.mx/portal/index.php",
            "http://www.seduzac.gob.mx/portal/index.php ",
            "https://www.zacatecas.gob.mx/mas-de-81-de-madres-y-padres-de-familia-estan-de-acuerdo-en-que-alumnos-de-educacion-basica-regresen-a-las-aulas/ ",
            "https://imagenzac.com.mx/capital/estudiantes-regresaran-a-las-aulas-el-30-de-agosto/",
            "http://ntrzacatecas.com/2021/07/12/prepara-uaz-encuesta-de-movilidad-y-convivencia/",
            "https://www.eluniversal.com.mx/estados/regreso-clases-en-universidad-de-zacatecas-sera-virtual",
            "http://ntrzacatecas.com/2021/08/12/joca-prs/"
        ],
        color: StateBack2School
    },
    {
        id: "MX-SLP",
        name: "San Luis Potosí",
        regresoActividadesPresenciales: "SI",
        fechaRetorno: "Sin información",
        tipoModelo: "A distancia",
        reincorporacionVoluntaria: "Sin Definir",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "90",
        alumnosVacunados: "NO",
        nombreEstrategia: "Sin información",
        actividadesPresenciales: "La autoridad educativa federal dará a conocer información para el regreso a clases y en reunión de CONAEDU",
        aforosFiltrosSanitarios: "No habrá regreso a clases presenciales durante el mes de agosto, además recordó que para el regreso a clases presenciales, cuando existan las condiciones sanitarias, se aplicarán nueve intervenciones o medidas para asegurar el bienestar de la comunidad escolar. <br><br> Hubo una reapertura del 15% de escuelas en junio. El saldo fueron dos casos de contagios en docentes y nueve alumnos",
        referencias: [
            "https://slp.gob.mx/sege/Paginas/NOTICIAS/FECHAS-Y-MODALIDAD-DE-REGRESO-A-CLASES--SE-DAR%C3%81N-A-CONOCER-LA-PR%C3%93XIMA-SEMANA.aspx",
            "https://slp.gob.mx/sege/Paginas/NOTICIAS/NO-HAY-REGRESO-A-CLASES-PRESENCIALES-EN-SAN-LUIS-POTOS%C3%8D-SECRETARIO-DE-EDUCACI%C3%93N.aspx",
            "https://www.elsoldesanluis.com.mx/local/confirma-la-sege-el-regreso-a-clases-el-30-de-agosto-en-san-luis-potosi-7073590.html"
        ],
        color: StateBack2School
    },
    {
        id: "MX-NAY",
        name: "Nayarit",
        regresoActividadesPresenciales: "Por definir",
        fechaRetorno: "10 de agosto",
        tipoModelo: "A distancia",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "85.4",
        alumnosVacunados: "NO",
        nombreEstrategia: "Aprende en casa",
        actividadesPresenciales: "Se tenía previsto que algunos municipios de la Sierra regresarán a clases presenciales en mayo sin embargo ante el alza en casos de covid y el retroceso del semáforo de verde a amarillo dicho iniciativa se frenó.<br><br> El regreso a clases para educación básica está programado para el 10 de agosto, siempre y cuando Nayarit se encuentre en semáforo verde. <br><br> En estos momentos el Estado de Nayarit NO se encuentra en condiciones de regresar a clases presenciales por el alto índice de incrementos de casos de COVID-19”, declaró en entrevista Martín Isaac Pérez, Subsecretario de Educación Media Superior y Superior en el Estado de Nayarit.",
        aforosFiltrosSanitarios: "El subsecretario de Educación Media Superior y Superior en el Estado, Martín Isaac Pérez quien explicó que el recurso para hacer las reparaciones pertinentes a los planteles tras más de un año de estar solas, comienzan a llegar, por lo tanto, antes de que inicie el ciclo ya deben de estar listas para recibir a los alumnos.<br><br>Siguiendo los protocols establecidos por Gobierno Federal<br><br>En caso de que se reanuden las clases presenciales en el estado, se tomarán la siguientes medidas:<ol><li>Establecimiento de Comités de salud escolar.</li><li>Mantener sana distancia y uso general del cubreboca en los planteles.</li><li>Acceso a agua y jabón.</li><li>Suspensión de todo acto cívico o ceremonia.</li><li>Maximización del uso de espacios abiertos.</li><li>Detección temprana de contagios.</li><li>Cierre de escuelas en caso de contagio.</li></ol>",
        referencias: [
            "https://www.nayarit.gob.mx/seccion/educacion",
            "https://meridiano.mx/seccion/nayarit/nayarit-no-est-en-condiciones-de-regresar-a-clases-presenciales-educaci-n-1/                                         https://www.nayarit.gob.mx/seccion/educacion#:~:text=El%20'Verano%20Divertido'%20iniciar%C3%A1%20el,cuando%20existan%20las%20condiciones%20sanitarias",
            "https://kidstudia.com/guia/todo-sobre-el-regreso-a-clases-en-mexico/nayarit/",
            "https://meridiano.mx/seccion/nayarit/nayarit-no-est-en-condiciones-de-regresar-a-clases-presenciales-educaci-n-1/"
        ],
        color: StateInDefinition
    },
    {
        id: "MX-JAL",
        name: "Jalisco",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de Agosto 2021",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "SP",
        alumnosVacunados: "NO",
        nombreEstrategia: "Modelo hibrido y opcional de regreso a clases-Regreso a clases presenciales",
        actividadesPresenciales: "Gobierno estatal anunció que el regreso a las aulas en educación básica será el próximo 30 de agosto, a través de un modelo híbrido y opcional para las familias, que permitirá tener clases presenciales, mientras que en educación media superior y superior se regresará a distancia en agosto y en septiembre de manera presencial; la Universidad de Guadalajara comenzará su ciclo escolar 2021-B de forma virtual el 10 de agosto y será a finales de este mes cuando analice la posibilidad de iniciar la fase presencial el 15 de septiembre. <br><br>La Universidad de Guadalajara mantiene modelo a distancia. <br><br>El regreso a clases será presencial, pero las familias de los estudiantes decidirán si envían o no a sus hijas o hijos a la escuela  Jalisco solicitará a la federación reforzar la vacunación en el AMG en jóvenes de 15 a 30 años, quienes forman parte de la educación media y media superior  <br><br>Por otro lado, indican estar sujetos al semaforo epidemiológico.",
        aforosFiltrosSanitarios: "Elas principales acciones son el uso del cubrebocas es obligatorio para todos los niveles y sana distancia<br>Por otro lado, se emiten protocolos detallados para todos los niveles y actividades:<br>Protocolo de acción ante COVID-19 para Grupos de Seguimiento Académico, Trámites presenciales y Entrega de materiales educativos aplicable a Educación Básica, Media Superior y Superior Docente<br>Protocolo de actuación ante COVID-19 Sector Educativo para Actos Académicos Presenciales en escuelas de Educación Básica de la Secretaría de Educación del Estado de Jalisco.<br>Protocolo de acción ante COVID-19 Para centros de formación para el trabajo, educación continua y academias.<br>Protocolo de actuación ante COVID-19 Sector Educativo para la realización de exámenes presenciales del Sistema de Preparatoria Abierta.<br>Protocolo de actuación ante COVID-19 Sector Educativo para la atención de actividades esenciales en Educación Media Superior.<br>Protocolo de Acción ante COVID-19 para realizar Educación Física en los planteles escolares",
        referencias: [
            "https://www.jalisco.gob.mx/es/prensa/noticias/129538",
            "https://www.jalisco.gob.mx/es/prensa/noticias/127052",
            "https://www.facebook.com/educacion.jalisco/photos/a.446164440747/10158547049890748/",
            "https://portalsej.jalisco.gob.mx/plan-jalisco-para-la-reactivacion-economica/",
            "https://udgtv.com/noticias/regreso-clases-virtuales-decision-basada-criterios-cientificos-udeg/"
        ],
        color: StateBack2School
    },
    {
        id: "MX-AGU",
        name: "Aguascalientes",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "23 de agosto (por confirmar)",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "91",
        alumnosVacunados: "NO",
        nombreEstrategia: "Me sumo a un regreso seguro",
        actividadesPresenciales: "La Asociación de Instituciones Educativas Particulares del Estado ha solicitado al Instituto de Educación de Aguascalientes se les permita iniciar el ciclo lectivo 2021-2022 el próximo 23 de agosto, y no tener que esperar hasta el día 30, habrá que esperar confirmación <br> Los estudiantes podrán ingresar a los planteles, pero no de manera masiva, es decir no regresan los grupos completos al mismo tiempo, será, durante las primeras semanas de manera escalonada y para permitir a los profesores levantar un diagnóstico sobre el aprendizaje logrado durante este periodo de aislamiento. <br> El nivel básico de educación tendrá un modelo mixto de clases, con grupos reducidos y asistencia alternada a los salones de clases. Los niños de los niveles de preescolar, primaria y secundaria deberán ajustarse a las siguientes fechas: <br><br> Jornadas de limpieza escolar. 11, 12 y 13 de agosto. <br> Inscripciones y reinscripciones. Del lunes 16 de agosto al viernes 10 de septiembre. <br> Evaluación diagnóstica. Del lunes 16 de agosto al viernes 10 de septiembre. <br> Período extraordinario de recuperación. Del lunes 13 de septiembre al martes 23 de noviembre dirigido a los alumnos con deficiencias educativas. <br> El nivel medio superior regresará a clases con un modelo mixto. Los alumnos asistirán a clases de manera alternada, en grupos pequeños y con todas las medidas de salud e higiene necesarias para un regreso seguro. <br><br> El regreso a clases de este nivel educativo tendrá varias fechas, dependiendo del sistema al que está incorporada la escuela de tu hijo. Para el 6 de septiembre todas las preparatorias del estado ya deberán estar en clases. Por lo pronto se prevén las siguientes fechas de inicio: <br><br> Bachilleratos tecnológicos. Inicio de clases 23 de agosto. <br> Conalep. Inicio de clases 30 de agosto. <br> Bachilleratos incorporados a universidades. Misma fecha de inicio de la institución de nivel superior a la que se encuentran incorporados. <br> Las universidades darán inicio a las actividades educativas según su propio calendario escolar.   El regreso presencial a clases a partir del 30 de agosto próximo correspondiente al nuevo ciclo lectivo 2021-2022 será con jornadas completas, de 8:00 am a 1:00pm, en el caso de las primarias",
        aforosFiltrosSanitarios: "Protocolo para prevenir contagios durante el regreso progresivo a clases presenciales en escuelas públicas y privadas de educación básica, media superior y superior , publciado el 27 de julio de 2021, en el cual se detallan las estregias para evitar contagios: Uso obligatorio del cubrebocas, puerta abiertas y evitar contacto con picaportes, filtro de hogar, filtro escolar , filtro de aula, capaictaciones para personal y alumnos, limpieza a profundidad de las superficies, espacios y materiales, clausura de bebederos, reorganizar descansos y actividades fisicas, se promoveran clases en espacios abiertos, lavado de mano, evitar compartir alimentos, promover el estornudo de etiqueta (cubrir con el angulo interno del codo), el uniforme escolar no es obligatorio, se limita el aforo de los eventos  especiales, las actividades de servicios escolares serán por cita, <ul> <li>-Se recabaran cartas de corresponsabilidad.</li> <li>-maximizar sana distancia y aprovechamiento de espacios abiertos y el uso permanente e irrestricto de cubrebocas.</li> <li>-lpimite del 40% diario de la población escolar.</li> <li>- No mas de 9 alumnas y alumnos y un docente por aula de educación primaria y telesecundaria.</li> <li>-No mas de 12 alumnos y alumnas y un docente por aula en escuelas secundarias generale sy técnicas.</li> <li>-No se permite en este periodo ningún tipkde expendio de alimentos ni se realizaran clases de educación fisica o artística</li></ul> La Asociación de Instituciones Educativas Particulares del Estado ha solicitado al Instituto de Educación de Aguascalientes se les permita iniciar el ciclo lectivo 2021-2022 el próximo 23 de agosto, y no tener que esperar hasta el día 30, habrá que esperar confirmación.",
        referencias: [
            "http://www.iea.gob.mx/INTERNAS/comunicacion/2020/Boletin_959_2021.pdf",
            "http://www.iea.gob.mx/INTERNAS/comunicacion/2020/Boletin_959_2021.pdf",
            "https://www.elsoldelcentro.com.mx/local/ya-hay-estrategia-para-regresar-a-clases-en-aguascalientes-6494515.html ",
            "https://www.gob.mx/sep/es/articulos/boletin-sep-no-102-concluye-exitosamente-el-proceso-de-vacunacion-a-personal-docente-en-30-entidades-del-pais?idiom=es",
            "http://www.iea.gob.mx/INTERNAS/comunicacion/2020/Boletin_965_2021.pdf",
            "http://www.iea.gob.mx/INTERNAS/regreso/pdfs/GUIASEP_REGRESOCLASES.pdf",
            "https://regresoseguro.iea.edu.mx/",
            "https://kidstudia.com/guia/todo-sobre-el-regreso-a-clases-en-mexico/aguascalientes/",
            "https://www.heraldo.mx/regreso-con-jornadas-completas-y-alternadas/",
            "La Asociación de Instituciones Educativas Particulares del Estado ha solicitado al Instituto de Educación de Aguascalientes se les permita iniciar el ciclo lectivo 2021-2022 el próximo 23 de agosto, y no tener que esperar hasta el día 30, habrá que esperar confirmación"
        ],
        color: StateBack2School
    },
    {
        id: "MX-GUA",
        name: "Guanajuato",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "85.5",
        alumnosVacunados: "NO",
        nombreEstrategia: "Guanajuato educado con R de Reactivación. Regreso a las aulas.",
        actividadesPresenciales: "El secretario reiteró la disposición de las autoridades para que las actividades escolares sean retomadas el 30 de agosto, donde continuarán con el pilotaje que comenzó en marzo y que ha incrementado gradualmente. <br><br> El estado implemento ejercicio piloto ''regreso a las aulas'' , bajo esta experiencia se prevee continuar con un retorno presencial el proximo ciclo",
        aforosFiltrosSanitarios: "Cuenta con protocolos y guias de salud para el regreso a la escuela (Básica, Media superior y superior), las cuales incluyen:<ol><li>Uso obligatorio de cubrebocas.</li><li>4 filtros sanitarios.</li><li>sana distancia.</li><li>Limpieza de areas y mobiliario.</li> <li>Prupos reducidos.</li></ol>",
        referencias: [
            "https://www.seg.guanajuato.gob.mx/RegresoalasAulas/SitePages/Inicio.aspx",
            "https://www.seg.guanajuato.gob.mx/RegresoalasAulas/SitePages/Inicio.aspx",
            "https://notus.com.mx/regreso-a-clases-presenciales-en-guanajuato-30-agosto-2021/",
            "https://www.milenio.com/politica/comunidad/guanajuato-regreso-clases-presenciales-ajustara-municipio",
            "https://www.seg.guanajuato.gob.mx/RegresoalasAulas/SitePages/EducacionVacunada.aspx",
            "https://zonafranca.mx/politica-sociedad/educacion/en-guanajuato-sera-voluntario-el-regreso-a-clases/",
            "https://www.unionguanajuato.mx/2021/08/02/regreso-a-clases-presenciales-en-agosto-calendario-escolar-2021-a-2022-de-la-sep/"
        ],
        color: StateBack2School
    },
    {
        id: "MX-QUE",
        name: "Querétaro",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "95",
        alumnosVacunados: "NO",
        nombreEstrategia: "Programa Especial de Regreso a Clases",
        actividadesPresenciales: "Se Instaló Subcomité Técnico para el Regreso a Clases del Estado de Querétaro, el objetivo: organizar un posible regreso a clases presenciales planeado, escalonado, gradual, y cauto, con el fin de disminuir el riesgo de contagio y proteger la salud de las comunidades escolares.",
        aforosFiltrosSanitarios: "Se realizara de acuerdo a los ''LINEAMIENTOS GENERALES PARA EL REGRESO A LAS ACTIVIDADES ESCOLARES, EN EL MARCO DE LA PANDEMIA COVID-19''",
        referencias: [
            "https://queretaro.gob.mx/regresoaclaseguro.aspx",
            "https://www.queretaro.gob.mx/covid19/contenido/noticiasContenido.aspx?q=vUYGbsxLnli7glS/gQWD0HldeVLSaRLz7RohSiloFmz7sxVv8axXyw==",
            "https://www.queretaro.gob.mx/pdf/SEDEQ_GuiaRegresoaClases.pdf"
        ],
        color: StateBack2School
    },
    {
        id: "MX-HID",
        name: "Hidalgo",
        regresoActividadesPresenciales: "No",
        fechaRetorno: "Sin información",
        tipoModelo: "A distancia",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "99",
        alumnosVacunados: "NO",
        nombreEstrategia: "Regreso Seguro a Clases en los centros educativos en el marco de la pandemia COVID 19, Operativo Escudo, Hidalgo Seguro",
        actividadesPresenciales: "El presidente de la Asociación Estatal de Pdres de Familia, AEPF, afirmó que no hay fecha definitiva para el regreso a clases debido en Hidalgo a la situación de emergencia sanitaria. Son los padres de familia quienes tendrían la última palabra pues se requiere un concenso.De acuerdo a anuncios del gobernador de dicho estado en julio, pidió a las instituciones educativas públicas y privadas del estado postergar las clases presenciales en el estado, debido al incremento de casos de Covid-19 en los últimos días. <br><br> El secretario de Salud de Hidalgo, Efraín Benítez Herrea, señaló que en estos momentos no existen condiciones para el regreso a clases presenciales en la entidad. El funcionario indió que la situación epidemiológica actual no permite el retonrno, programado para finales de agosto, algo que ha dialogado con el titular d ela SEPH, Atilano Rodríguez",
        aforosFiltrosSanitarios: "Filtros escolares, suspensión de registro de entrada y salida de toda la comunidad educativa (alumnos, docentes, personal administrativo y personal de apoyo a la educación , asi como al publico en general) que conlleve el empleo de instrumentos ocmpartidos, cada  institución definira el control de asistencia laboral, limpieza intensiva y desinfección continua de todas las areas de los centros educativos, ventilación en todas las areascampaas de comunicación , dichas estrtegias coordinadas por el Comite Participativo de Salud Escolar (CPSE) ",
        referencias: [
            "https://periodico.hidalgo.gob.mx/?p=44435",
            "https://subrayado.com.mx/hidalgo/cuando-regresan-a-clases-hidalgo-inicio-ciclo-escolar-2021-2022-seph/",
            "https://criteriohidalgo.com/noticias/sin-condiciones-momento-regreso-clases-hidalgo-salud",
            "https://www.milenio.com/ciencia-y-salud/hidalgo-99-docentes-vacunaron-covid-19-seph",
            "https://www.milenio.com/ciencia-y-salud/hidalgo-99-docentes-vacunaron-covid-19-seph"
        ],
        color: StateNoBack2School
    },
    {
        id: "MX-COL",
        name: "Colima",
        regresoActividadesPresenciales: "Por Definir",
        fechaRetorno: "Por definir",
        tipoModelo: "A distancia",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "93.5",
        alumnosVacunados: "NO",
        nombreEstrategia: "Estrategia Estatal de Regreso Seguro a Clases Presenciales",
        actividadesPresenciales: "La prueba piloto no se trata de un regreso a clases presencial, esto solo se dará cuando el semáforo epidemiológico esté en verde y las autoridades sanitarias así lo determinen. Los criterios que se han establecido para un regreso seguro a clases en Colima se aplican con la cuestión de un semáforo verde, que personal docente esté vacunado y la participación voluntaria de padres y madres de familia de poder enviar a sus hijos e hijas a las escuelas.",
        aforosFiltrosSanitarios: "Se conformará un comité de salud en cada escuela, filtros al ingreso al plantel, abastecer de agua y jabón, uso obligatorio de mascarilla, cuidado de grupos vulnerables y cuando se detecte algún caso de coronavirus, el plantel cerraría de forma inmediata.",
        referencias: [
            "https://www.milenio.com/estados/colima-pone-a-prueba-el-regreso-a-clases",
            "https://www.colimanoticias.com/antes-del-regreso-a-clases-preservar-la-salud-y-vida-del-alumnado-y-docentes-se/",
            "https://diariodecolima.com/noticias/detalle/2021-07-23-flores-colima-est-preparado-para-iniciar-el-ciclo-escolar",
            "https://elcomentario.ucol.mx/elabora-colima-su-estrategia-para-regreso-a-clases-presenciales/",
            "https://www.gob.mx/sep/es/articulos/boletin-sep-no-102-concluye-exitosamente-el-proceso-de-vacunacion-a-personal-docente-en-30-entidades-del-pais?idiom=es"
        ],
        color: StateInDefinition
    },
    {
        id: "MX-MIC",
        name: "Michoacán de Ocampo",
        regresoActividadesPresenciales: "No",
        fechaRetorno: "Sin información",
        tipoModelo: "A distancia",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "SP",
        alumnosVacunados: "NO",
        nombreEstrategia: "Escuela abierta",
        actividadesPresenciales: "En recientes declaraciones: El gobernador Silvano Aureoles Conejo anunció que en Michoacán no hay condiciones para que niños y niñas regresen a clases presenciales, debido al incremento de contagios de Covid-19 en esta tercera ola. <br>Enfatizó que las condiciones de contagio, y el semáforo naranja en el estado, indican que el regreso a clases sólo puede suceder en nivel de bachillerato y universidades. Reiteró que en ese sentido, todavía no hay condiciones para que niñas y niños acudan a las escuelas de educación básica.",
        aforosFiltrosSanitarios: "El gobernador de Michoacan alertó que un regreso a clases presenciales en primarias y secundarias, aumentará la movilidad de manera muy considerable, y el riesgo de las familias. Ello, describió, por los traslados y contacto que implica llevar, entregar y recoger a los hijos e hijas en las escuelas.",
        referencias: [
            "https://www.eluniversal.com.mx/estados/en-michoacan-no-hay-condiciones-para-regreso-clases-presenciales-aureoles"
        ],
        color: StateNoBack2School
    },
    {
        id: "MX-VER",
        name: "Veracruz de Ignacio de la Llave",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "SP",
        alumnosVacunados: "NO",
        nombreEstrategia: "Regreso a clases presenciales",
        actividadesPresenciales: "El Gobernador consideró necesario que los estudiantes retomen su actividad en las escuelas y por eso el regreso a clases en el estado de Veracruz se dará como lo establece el calendario de la Secretaría de Educación Pública (finales de agosto). En un cambio de opinión de lo que venía sosteniendo en cuanto al retorno a las aulas en la entidad, el Gobernador manifestó categórico que la educación está federalizada; de ahí que será la autoridad educativa federal la que determine cuándo se dará el regreso a la actividad presencial escolar.",
        aforosFiltrosSanitarios: "Entrega de kits de limpieza en todos los planteles <br><br> Acorde al semáforo epidemiológico, aplica SEV estrategias a distancia<br><br> El 24 de junio regresaron a las aulas, al respecto, se cuenta con 682 estrategias por sistema en los modelos presencial, mixto y virtual. La Secretaría de Educación estatal destacó que esta planeación incluye el acuerdo voluntario de la comunidad escolar, para lo que padres y madres recibirán una carta compromiso sobre el cuidado de la salud de sus hijos. <br><br> 1.- Todas las escuelas ubicadas en municipios con Semáforo en color amarillo o naranja, darán atención únicamente en la modalidad a distancia.<br> 2.- En los municipios que se mantenga el color verde del semáforo epidemiológico local, las instituciones podrán continuar según lo programado y decidido por cada centro escolar.<br><br> El personal del plantel educativo podrá asistir a sus escuelas si así lo acuerdan a realizar las tareas pertinentes con o sin estudiantes de acuerdo a los puntos 1 y 2.",
        referencias: [
            "https://www.sev.gob.mx/v1/noticias/leer/2354/",
            "https://www.diariodexalapa.com.mx/local/si-habra-clases-presenciales-pero-no-obligatorio-dijo-el-titular-de-la-sev-zenyazen-escobar-garcia-7029291.html",
            "https://www.diarioelmundo.com.mx/index.php/2021/07/16/en-agosto-regreso-a-clases-en-veracruz/",
            "https://www.milenio.com/estados/regreso-clases-presenciales-veracruz-grupos-reducidos",
            "https://www.milenio.com/estados/regreso-clases-veracruz-debera-escalonado-parcial"
        ],
        color: StateBack2School
    },
    {
        id: "MX-PUE",
        name: "Puebla",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de Agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "95",
        alumnosVacunados: "NO",
        nombreEstrategia: "Modelo Educativo Híbrido en el Estado de Puebla Educación Básica y Media Superior Ciclo Escolar 2021-2022",
        actividadesPresenciales: "Para el regreso a clases será prioridad que las y los maestros estén vacunados: Lozano",
        aforosFiltrosSanitarios: "Las escuelas multigrado o de organización completa que puedan atender a toda su población de manera presencial todos los días, deben garantizar la sana distancia, así como la implementación del plan de atención (nivelación) de forma integrada a las jornadas académicas. Aquellas escuelas con mayor matrícula dividirán aforos cuya distribución puede ser por apellidos.",
        referencias: [
            "http://sep.puebla.gob.mx/index.php/component/k2/prueba-2-2-2",
            "https://www.eluniversalpuebla.com.mx/educacion/95-de-maestros-en-puebla-ya-esta-vacunado-contra-covid",
            "https://www.milenio.com/politica/comunidad/clases-presenciales-en-puebla-seran-voluntarias-sep"
        ],
        color: StateBack2School
    },
    {
        id: "MX-TLA",
        name: "Tlaxcala",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "SP",
        alumnosVacunados: "NO",
        nombreEstrategia: "Sin información",
        actividadesPresenciales: "En medios se ha difundido que la incorporación presencial será una vez que el semáforo epidemiológico este en verde.",
        aforosFiltrosSanitarios: "Una vez que el semáforo epidemiológico dé luz verde, estás son las medidas que se tomarán para el regreso a clases presenciales en Tlaxcala: <ol> <li>Conformación de Comités Participativos de Salud.</li> <li>Dotar a las escuelas con insumos de higiene como agua y jabón.</li> <li>Salvaguardar a los docentes en grupos de riesgo.</li> <li>Uso obligatorio de cubrebocas o pañuelo, dentro y fuera de las escuelas, públicas y particulares.</li> <li>Mantener distancia en entradas y salidas de los planteles.</li> <li>Programar recesos escalonados.</li> <li>Maximizar el uso de espacios abiertos.</li> <li>Suspender todo tipo de ceremonias o reuniones.</li> <li>Brindar apoyo socioemocional para alumnos y docentes.</li> </ol>Una comisión de la Secretaría de Educación Pública (SEPE) y el SNTE trabajando para la realización de una logística y la atención en el regreso a clases presenciales. Universidad Autónoma de Tlaxcala (UATx) reconsideraría el regreso a las clases.",
        referencias: [
            "https://www.milenio.com/politica/comunidad/duda-regreso-clases-presenciales-tlaxcala-tercer-ola-covid",
            "https://www.milenio.com/politica/comunidad/duda-regreso-clases-presenciales-tlaxcala-tercer-ola-covid ",
            "https://www.lajornadadeoriente.com.mx/tlaxcala/clases-presenciales-sepe-a-sep/",
            "https://www.elsoldetlaxcala.com.mx/local/alistan-preparatorias-regreso-a-las-aulas-juan-pablo-arroyo-6924698.html",
            "https://kidstudia.com/guia/todo-sobre-el-regreso-a-clases-en-mexico/tlaxcala/#modalidad+del+regreso+a+clases+en+tlaxcala",
            "https://www.milenio.com/politica/comunidad/de-manera-responsable-buscan-que-sea-el-regreso-a-clases-en-tlaxcala",
            "https://amqueretaro.com/mexico/2021/07/02/revisa-sep-el-regreso-a-clases-en-tlaxcala/"
        ],
        color: StateBack2School
    },
    {
        id: "MX-MEX",
        name: "Estado de México",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "Fecha no definida",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "SP",
        alumnosVacunados: "NO",
        nombreEstrategia: "Plan de Reapertura de regreso a clases 2020*",
        actividadesPresenciales: "Gerardo Monroy Serrano, secretario de Educación del Estado de México anunció de manera oficial que el regreso a clases para el ciclo escolar 2021-2022 en el Edomex se dará de manera híbrida. Explicó que aquellos que opten por las clases presenciales, deberán cumplir estos lineamientos y medidas de prevención. Las escuelas dividirán los grupos en dos para reducir la cantidad de alumnos en las aulas, pues lo que se busca es que los salones no tengan más de 15 alumnos. Unos niños vendrán lunes, miércoles y viernes, y otros el martes y jueves. A la semana siguiente, los que fueron tres días, irán solo martes y jueves y los que fueron dos días, irán lunes, miércoles y viernes, explicó. <br><br>En 2020, presento el plan de reapertura de regreso a clases. Sin embargo, el ciclo pasado fue a distancia y aun no existe una postura definida para el ciclo 21-22. De acuerdo con el COMUNICADO SEB 07/06/2021-Regreso seguro a clases. Indica que deben cumplirse condiciones para asegurar el regreso, pero no confirmando una fecha para la incorporación presencial. <br><br>El secretario de Educación del Estado de México, Gerardo Monroy Serrano, informó que se prevé que el inicio del ciclo escolar 2021-2022, programado para el 30 de agosto se dé de forma híbrida, es decir, retomando actividades presenciales de manera voluntaria, además de continuar con clases y actividades educativas a distancia, haciendo uso de las plataformas digitales. https://www.milenio.com/ciencia-y-salud/regreso-a-clases-sera-presencial-y-a-distancia-seduc",
        aforosFiltrosSanitarios: "Se emite la Guía de Orientación para la Reapertura de las Escuelas ante COVID-19, en la cual indica la implementación del  Comité Participativo de Salud Escolar. <br><br> Aplicación de protocolos y filtros de corresponsabilidad en casa, a la entrada del plantel y en el salón de clases",
        referencias: [
            "https://subeducacionbasica.edomex.gob.mx/sites/subeducacionbasica.edomex.gob.mx/files/files/SEBComunicado07062021.pdfhttps://www.unionedomex.mx/articulo/2021/07/08/educacion/regreso-clases-edomex-2021-2022-conoce-las-actividades-previas",
            "https://www.milenio.com/ciencia-y-salud/regreso-a-clases-sera-presencial-y-a-distancia-seduc",
            "http://148.215.3.96:8283/imgcovid/PLAN%20REAPERTURA%2019%20de%20Mayo.pdf",
            "https://www.eluniversal.com.mx/metropoli/edomex/sin-definir-si-el-ciclo-escolar-2021-2022-iniciara-de-forma-presencial-en-edomex",
            "https://salud.edomex.gob.mx/isem/ac_boletines_informativos",
            "https://tolucalabellacd.com/2021/08/06/educacion/regreso-a-clases-edomex-hibrida-2021-2021-040993/",
            "https://www.jornada.com.mx/notas/2021/08/12/estados/seem-anuncia-regreso-a-clases-en-modalidad-hibrida/"
        ],
        color: StateBack2School
    },
    {
        id: "MX-CMX",
        name: "Ciudad de México",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "100",
        alumnosVacunados: "SI",
        nombreEstrategia: "Sin información",
        actividadesPresenciales: "Del regreso presencial dijo la Jefa de Gobierno que será un trabajo de interlocución con todas las comunidades escolares y en acuerdo con ellas porque deben tener una participación muy importante en la seguridad sanitaria y de salud. <br><br> El 30 de agosto iniciará el próximo ciclo escolar 2021-2022 en los niveles básico, medio y superior, y a unas semanas de volver a las aulas algunas escuelas públicas ya anunciaron las medidas bajo las que regresarán los estudiantes, toda vez, que México se encuentra atravesando una tercera ola de contagios por la Covid-19. <br><br> La a UNAM inicia el 9 de agosto.  En cuanto al nivel medio superior y superior regresaran a clases presenciales bajo los propios calendarios escolares de cada institución en los estados que se encuentren en semáforo sanitario verde o amarillo. Es importante mencionar que las instituciones que puedan regresar a las aulas decidirán cómo será este regreso, ya sea escalonado o en modalidad híbrida.  El Instituto Politécnico Nacional (IPN) reiteró que durante el próximo ciclo escolar no habrá retorno a clases presenciales y anunció que aplicará un plan híbrido que permita que los politécnicos regresen a las aulas de manera escalonada. <br><br> La Universidad Nacional Autónoma de México (UNAM), recientemente informó que los estudiantes podrán volver a clases presenciales cuando el semáforo epidemiológico se encuentre en color verde. <br><br> Instituto Politécnico Nacional (IPN) anunció que los alumnos no regresarán a clases presenciales durante la primera mitad del ciclo escolar 2021-2022, y destacaron que como medida preventiva analizarán el regreso a las aulas hasta el mes de enero de 2022",
        aforosFiltrosSanitarios: "La UNAM informó que, aunque se esté en semáforo verde durante tres semanas consecutivas, en tanto el alumnado no haya sido vacunado, la asistencia presencial será voluntaria para actividades académicas determinadas por los consejos técnicos. <br><br> El IPN determinó que las actividades de este semestre se llevarán a cabo predominantemente de manera no presencial y que los profesores, los alumnos y personal de apoyo y asistencia a la educación, podrán hacer uso de las instalaciones, voluntariamente, y bajo el consentimiento por escrito de los participantes involucrados.La Universidad Autónoma de México (UAM) ya retomó clases a distancia.<br><br> La UNAM: Las facultades solo podrán pedir la asistencia de los alumnos una vez que la entidad federativa haya permanecido tres semanas consecutivas con el semáforo epidemiológico en color verde. Ya que eso suceda, la incorporación será en grupos reducidos y de manera escalonada. Mientras el alumnado no haya sido vacunado, la asistencia será voluntaria, además, en el eventual retorno presencial se privilegiará a las actividades de bienvenida y reconocimiento de nuestras instalaciones para las generaciones que ingresaron en agosto del 2020 y la de nuevo ingreso del presente año, siempre respetando los límites establecidos del 30% de la matrícula escolar en los espacios educativos.",
        referencias: [
            "https://politica.expansion.mx/cdmx/2021/08/01/el-gobierno-cdmx-se-mantiene-en-su-decision-en-agosto-habra-regreso-a-clases",
            "https://www.eluniversal.com.mx/nacion/ipn-en-proximo-ciclo-escolar-no-habra-regreso-clases-presenciales",
            "https://www.ejecentral.com.mx/en-cdmx-continua-plan-del-regreso-a-clases-presencial/",
            "https://wradio.com.mx/programa/2021/08/03/asi_las_cosas/1628003040_998317.html",
            "https://www.marca.com/claro-mx/trending/2021/07/29/6103211646163fd7978b4590.html",
            "https://kidstudia.com/guia/todo-sobre-el-regreso-a-clases-en-mexico/#%c2%bfqu%c3%a9+estados+regresan+a+clases+presenciales+en+2021%3f",
            "https://planeacion.sep.gob.mx/entidadfederativa.aspx",
            "https://mexico.as.com/mexico/2021/07/30/actualidad/1627609664_758632.html",
            "https://politica.expansion.mx/mexico/2021/07/29/cuando-es-el-regreso-clases-presenciales-universidades-cdmx",
            "https://www.capital21.cdmx.gob.mx/noticias/?p=19324",
            "https://www.elsoldemexico.com.mx/metropoli/cdmx/cdmx-apoya-regreso-a-clases-presenciales-aun-con-semaforo-rojo-por-covid-7052629.html",
            "https://tiempodigital.mx/2021/08/08/unam-ipn-y-uam-contra-regreso-a-clases-presenciales/"
        ],
        color: StateBack2School
    },
    {
        id: "MX-MOR",
        name: "Morelos",
        regresoActividadesPresenciales: "Por definir",
        fechaRetorno: "Sin informacón",
        tipoModelo: "A distancia",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "SP",
        alumnosVacunados: "NO",
        nombreEstrategia: "Regreso a clases",
        actividadesPresenciales: "Se esta por definir el regreso presencial, Fernando Salgado Delgado -líder de la agrupación de maestros “El poder de la Educación y la Sociedad”- manifestó tajante que no puede haber retorno si los docentes, padres de familia y estudiante no están vacunados en su totalidad. <br><br>Además, entre los puntos expuestos destaca la exigencia de que para tomar una decisión se necesita que previamente se garanticen recursos para infraestructura, pero también para personal de intendencia y seguridad, para mantener condiciones de salubridad en cada centro escolar y controlar los accesos y filtros.",
        aforosFiltrosSanitarios: "Terminó en julio el Programa Piloto de Regreso a Clases Presenciales Seguras, voluntarias, escalonadas y graduales sin incidente alguno para todos los que participaron en este proyecto: alumnos, padres de familia, docentes, administrativos y personal de apoyo",
        referencias: [
            "https://www.milenio.com/estados/michoacan-iniciara-ciclo-escolar-clases-presenciales",
            "https://launion.com.mx/morelos/avances/noticias/187385-avanza-entrega-de-libros-de-texto-2021-2022-en-escuelas-iebem.html"

        ],
        color: StateInDefinition
    },
    {
        id: "MX-GRO",
        name: "Guerrero",
        regresoActividadesPresenciales: "Por definir",
        fechaRetorno: "31 de agosto 2021/03 de septiembre de 2021",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "64.3",
        alumnosVacunados: "NO",
        nombreEstrategia: "De regreso a la escuela",
        actividadesPresenciales: "El CETEG informó que el regreso a clases presenciales se reanudarán hasta que haya semáforo verde, el 100 por ciento del magisterio vacunado y exista un consenso con los padres de familia. <br><br> El próximo 31 de agosto arrancará de manera presencial el ciclo escolar 2021-2022 en casi 12 mil escuelas de Guerrero. regreso a clases será de manera gradual y escalonada.<br><br> Sin embargo, en notas recientes  se refirió que de no haber un cambio en el semáforo epidemiológico a color verde, habría posibilidad de estar frente a grupo, caso contrario, tendrán que seguir con el modelo a distancia.<br><br> Miembros de la Coordinación Estatal de Trabajadores de la educación en Guerrero (CETEG) informó que se realizará consulta a los padres de familia respecto al regreso a clases presenciales , el próximo 30 de agosto, a pesar de la pandemia.",
        aforosFiltrosSanitarios: "Se considerarán tres factores: que el estado se mantenga permanentemente en el color verde en el Semáforo de Riesgo Epidemiológico; que las escuelas cuenten con un protocolo sanitario, un plan escolar que refleje la organización administrativa y académica del plantel, y el fortalecimiento académico a través de una guía estatal para el regreso a clases y el cronograma de actividades para la apertura de escuelas en todos los niveles. <br><br> Por otro lado, los trabajadores de la educación hayan sido vacunados y que el semáforo epidemiológico esté en verde.",
        referencias: [
            "https://heraldodemexico.com.mx/nacional/2021/6/22/guerrero-anuncia-regreso-clases-presenciales-en-agosto-309005.html",
            "https://www.elsoldemexico.com.mx/republica/sociedad/regreso-a-clases-presenciales-en-guerrero-sera-el-3-de-septiembre-preve-gobernador-pandemia-covid-19-6819985.html",
            "https://www.elsoldeacapulco.com.mx/local/complicado-el-regreso-a-clases-presenciales-en-guerrero-escuelas-pandemi-contagios-covid-guerrero-7039433.html",
            "https://snte.org.mx/seccion14/snte-condiciona-el-regreso-a-clases-presenciales-en-guerrero/",
            "https://snte.org.mx/seccion14/con-seguridad-volvemos-a-la-escuela-snte/",
            "https://www.elsoldeacapulco.com.mx/local/complicado-el-regreso-a-clases-presenciales-en-guerrero-escuelas-pandemi-contagios-covid-guerrero-7039433.html",
            "https://suracapulco.mx/consultara-a-los-padres-respecto-al-regreso-a-clases-presenciales-adelanta-la-ceteg/",
            "https://www.milenio.com/estados/guerrero-regreso-clases-presenciales-semaforo-verde"
        ],
        color: StateInDefinition
    },
    {
        id: "MX-OAX",
        name: "Oaxaca",
        regresoActividadesPresenciales: "Por definir",
        fechaRetorno: "30 agosto",
        tipoModelo: "A distancia",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "Sin Definir",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "100",
        alumnosVacunados: "NO",
        nombreEstrategia: "No disponible",
        actividadesPresenciales: "El gobernador de Oaxaca, Alejandro Murat Hinojosa, afirmó que aún no termina el proceso de consulta con los padres de familia y profesores en los 570 municipios de la entidad para determinar, ante la pandemia por COVID 19, un regreso a clases presencial o virtual, en las 13 mil escuelas del nivel de educación básica, ante el inicio del nuevo ciclo escolar el próximo 30 de agosto. <br><br>Aclaró que primero está la salud y la vida de todos aquellos actores que están involucrados en el proceso educativo, desde los maestros, los padres de familia y hasta la niñez y los jóvenes.",
        aforosFiltrosSanitarios: "Se implementa un proceso integral y amplio de rehabilitación de baños, y de suministro de agua potable para que estén listas para aplicar el protocolo sanitario anticovid y se pueda reanudar las clases presenciales en los tiempos que reclama el plan de reanudación de actividades escolares después de la pandemia por el SARS-COV-2. <br><br> Milenio informa que en el estado de Oaxaca el regreso a clases de forma presencial será voluntario, gradual y escalonado debido a la pandemia de covid-19; sin embargo se sigue tratando de establecer acuerdos.   El magisterio de la Sección 22 de la CNTE definirá el próximo 18 de agosto la probable fecha y la estrategia para el retorno presencial a las aulas en los 570 municipios de la entidad. Ahí discutirán la propuesta del Instituto Estatal de Educación Pública de Oaxaca, (IEEPCO).",
        referencias: [
            "https://www.milenio.com/estados/oaxaca-murat-consulta-padres-regreso-clases-presenciales",
            "http://oaxacadiaadia.com/2021/08/12/regreso-a-clases-en-oaxaca-sera-seguro-murat/",
            "https://www.estado20.mx/2021/08/12/28575"
            
        ],
        color: StateInDefinition
    },
    {
        id: "MX-TAB",
        name: "Tabasco",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "SP",
        alumnosVacunados: "NO",
        nombreEstrategia: "A la escuela. Seguro Regreso",
        actividadesPresenciales: "La secretaria de Educación precisó que serán en total 3 mil 800 planteles educativos de Preescolar, Primaria y Secundaria, que atienden a una población de 532 mil educandos, los que serán rehabilitados durante los meses de julio y agosto, como parte de los preparativos ante el posible regreso a clases presenciales para el ciclo escolar 2021-2022, siempre y cuando el semáforo epidemiológico este en color verde. <br><br> En totalidad, escalonado, hibrido, porcentual de niñas, niños y jovenes escalonado, presencial, híbrido o una mezcla de ambos (implementación de un protocolo Alemán) <br><br> El 20.8 por ciento de alumnos del nivel básico que pertenecen a los ocho municipios donde existen menos contagios y casos activos de COVID-19, estarían regresando a clases presenciales el próximo 30 de agosto, mientras que el 79.2 por ciento seguirá en casa de manera virtual. REGRESARÍAN A LAS AULAS 8 MUNICIPIOS, EL 79.2% SEGUIRÁ CON CLASES EN LÍNEA Unos 112,598 estudiantes de nivel básico que viven en comunidades con bajo contagio y activos de Covid, volverían a escuelas; Setab confirmó que regreso será gradual, virtual y presencial.",
        aforosFiltrosSanitarios: "Desarrollo de materiales informativos y protocolos sanitarios.",
        referencias: [
            "https://heraldodemexico.com.mx/nacional/2021/7/22/tabasco-no-volvera-clases-presenciales-en-agosto-analizan-sea-en-septiembre-318653.html",
            "https://www.elheraldodetabasco.com.mx/local/tabasco-si-regresa-a-clases-presenciales-en-septiembre-7015316.html",
            "https://www.tabascohoy.com/regresarian-a-las-aulas-20-de-estudiantes-confirma-educacion-ciclo-escolar-21-22/?__cf_chl_jschl_tk__=pmd_e7a564a81a81bf5623d59322ed379ea1ee8218d5-1628862700-0-gqNtZGzNAjijcnBszQqi"
        ],
        color: StateBack2School
    },
    {
        id: "MX-CHP",
        name: "Chiapas",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "100",
        alumnosVacunados: "NO",
        nombreEstrategia: "No disponibles",
        actividadesPresenciales: "Vocero de la Sección VII del Sindicato Nacional de Trabajadores de la Educación y de la Coordinadora Nacional de Trabajadores de la Educación dijo en mitin que no se regresará a clases presenciales a partir de este 30 de agosto en que iniciaría el ciclo escolar 2020-2021.",
        aforosFiltrosSanitarios: "Medidas para el Regreso a Clases: <ol><li>Uso general de cubrebocas obligatorio. <li> Sana distancia en actividades al interior de los planteles, así como en las entradas y salidas. </li> <li> Recreos escolares escalonados</li> <li> Lugares fijos alternados.</li> <li> Asistencia alternada por apellido.</li> <li> Considera que tus hijos deberán acudir a clases sin fiebre o temperatura mayor a 37°. Estando dentro de la escuela, deberán lavarse frecuentemente las manos o utilizar gel antibacterial y los grupos no podrán ser mayor a 25 alumnos</li></ol>",
        referencias: [
            "https://www.elheraldodechiapas.com.mx/local/cnte-no-regresara-a-clases-de-manera-presencial-javier-carrasco-7077824.html"
        ],
        color: StateBack2School
    },  
    {
        id: "MX-CAM",
        name: "Campeche",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de mayo",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "88.8",
        alumnosVacunados: "NO",
        nombreEstrategia: "Aprendamos en familia desde casa",
        actividadesPresenciales: "El 10 de agosto se anunció de manera oficial el regreso a clases que será de forma gradual el próximo 30 de agosto. Será decisión de los padres y madres de familia enviar o no a sus hijos. Se acordó que regresarán un total de 904 escuelas de nivel preescolar, primaria y secundaria incluyendo los servicios de la Conafe. <br> <br> Es uno de los estados que implementó la prueba piloto de clases presenciales antes de terminar el ciclo escolar pasado, misma que cerró por el aumento de contagios de covid-19 en la entidad. Por lo que autoridades educativas consideran que no existen las condiciones necesarias para garantizar un regreso seguro a los planteles educativos.<br> <br> El regreso a clases presenciales será cuando el semáforo esté en verde debido a la falta de vacunación de los estudiantes.",
        aforosFiltrosSanitarios: "Cuando se tengan las condiciones necesarias para el regreso a los planteles educativos, se optará por un modelo híbrido de clases, con asistencia alternada, grupos reducidos, así como medidas sanitarias. Algunas de ellas son las siguientes: <br><br>  Uso correcto de cubrebocas obligatorio. <br> Sana distancia dentro de los salones de clases y en todas las actividades al interior de los planteles.<br> Colocación de filtros sanitarios al entrar a la escuela y a la entrada del salón<br> Recuerda que el regreso a clases presenciales es voluntario, si decides enviar a tus hijos a la escuela debes firmar una carta responsiva en donde declaras que tu hijo asiste voluntariamente a la escuela y sin síntomas relacionados al covid-19.",
        referencias: [
            "https://www.poresto.net/campeche/2021/7/15/regreso-clases-en-campeche-sera-en-semaforo-verde-seduc-263676.html",
            "http://campechehoy.mx/2021/07/31/en-campeche-sera-dificil-el-regreso-a-clases-presenciales/",
            "https://educacioncampeche.gob.mx/aprendamosencasa",
            "https://www.lajornadamaya.mx/campeche/177646/el-9-de-agosto-decidira-seduc-si-hay-clases-presenciales-en-campeche",
            "https://www.gob.mx/sep/es/articulos/boletin-sep-no-102-concluye-exitosamente-el-proceso-de-vacunacion-a-personal-docente-en-30-entidades-del-pais?idiom=es",
            "https://www.poresto.net/campeche/2021/8/10/regreso-clases-presenciales-en-campeche-sera-el-30-de-agosto-seduc-271707.html"
        ],
        color: StateBack2School
    },
    {
        id: "MX-YUC",
        name: "Yucatán",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "SP",
        alumnosVacunados: "NO",
        nombreEstrategia: "Regreso seguro a clases",
        actividadesPresenciales: "El Gobierno de Yucatán mantiene su postura del regreso a clases, en forma presencial; para el 30 de agosto próximo. Sin embargo, éste será voluntario, opcional y mixto. Estrategia estatal de Regreso Seguro a Clases, elaborada con base en los lineamientos que emitió la Federación y la participación de la Mesa Central conformada por representantes de seis Secretarías, entre ellas la de Educación y Salud, el Congreso del Estado, universidades, sindicatos, cámaras empresariales, la Comisión estatal de Derechos Humanos (Codhey), padres de familia, estudiantes y colegios.",
        aforosFiltrosSanitarios: "Se considera un retorno voluntario, opcional y mixto. <br><br>Secretaría de Educación considera realizar jornadas de limpieza en las escuelas y sesiones de los Comités Participativos de Salud Escolar; que se desarrollará del 11 al 13 de agosto venideros, como una medida preventiva ante la pandemia mundial por Covid-19.",
        referencias: [
            "http://www.educacion.yucatan.gob.mx/boletines/index",
            "https://www.yucatan.com.mx/merida/yucatan-tendra-un-regreso-a-clases-presencial-en-agosto",
            "https://www.lajornadamaya.mx/yucatan/176643/los-ninos-deben-regresar-a-clases-presenciales-lo-mas-pronto-posible-vila-dosal",
            "https://www.lajornadamaya.mx/yucatan/175807/regreso-a-clases-en-yucatan-sera-el-30-de-agosto"
            
        ],
        color: StateBack2School
    },
    {
        id: "MX-ROO",
        name: "Quintana Roo",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 agosto 2021",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "NO",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "75.6",
        alumnosVacunados: "NO",
        nombreEstrategia: "Plan para Regreso a Clases Seguro",
        actividadesPresenciales: "Centros Comunitarios de Aprendizaje",
        aforosFiltrosSanitarios: "Cuatro pasos: <br> 1) Estar en semáforo amarillo tanto federal como estatal para abrir los Centros Comunitarios de Aprendizaje donde se ofrece asesoría; <br> 2) Rehabilitación de escuelas (infraestructura, limpieza y orden); <br> 3) Aplicación de un diagnóstico académico. <br> 4) Y que cada institución educativa entregue o actualice su plan de regreso a clases, cumpliendo con los protocolos sanitarios.Prueba para diagnosticar el rezago entre los alumnos tras un año y tres meses de clases en línea. Los padres de familia los encargados de aplicar la prueba, que consistirá en un grupo de preguntas de lo que tendrían que conocer según su grado de escolaridad.",
        referencias: [
            "https://qroo.gob.mx/seq/detallan-acciones-de-la-seq-para-el-regreso-clases-destacando-cuatro-importantes-temas"
        ],
        color: StateBack2School
    },
];

var DataStates_v6 = [
    {
        id: "MX-BCS",
        name: "Baja California Sur",
        regresoActividadesPresenciales: "Por definir",
        fechaRetorno: "Por definir",
        tipoModelo: "A distancia",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "78.8",
        alumnosVacunados: "Sin Definir",
        nombreEstrategia: "No disponible",
        actividadesPresenciales: "Las autoridades educativas de Baja California Sur se han pronunciado al regreso a clases presenciales únicamente cuando el semáforo sanitario se encuentre en color verde. Por lo que aún no se tiene una fecha programada para el regreso presencial.<br><br> La presencialidad será únicamente cuando el semáforo esté en verde.",
        aforosFiltrosSanitarios: "Se capacitaron a los comités participativos de salud escolar, en cada escuela debe de existir un comité de esta naturaleza que se encargará de revisar las condiciones en las cuales se encuentra la escuela, se tendrán algunos filtros y el primero desde luego será la casa, será en el hogar donde se revise la condición de su hijo o hija y tener en claro cuáles son los síntomas COVID, el segundo filtro al entrar a la escuela y el tercero previo a entrar al salón de clases.",
        referencias: [
            "https://kidstudia.com/guia/todo-sobre-el-regreso-a-clases-en-mexico/baja-california-sur/",
            "https://www.bcsnoticias.mx/confirmado-baja-california-sur-ya-se-prepara-para-regreso-a-las-aulas-en-agosto-sep/",
            "https://www.elsudcaliforniano.com.mx/local/regreso-a-clases-solo-sera-en-alerta-verde-en-bcs-6987936.html",
            "http://www.bcs.gob.mx/noticias/concluyo-vacunacion-del-personal-educativo-en-bcs/#:~:text=CONCLUY%C3%93%20VACUNACI%C3%93N%20DEL%20PERSONAL%20EDUCATIVO%20EN%20BCS,-La%20Paz%20B.C.S.&text=Con%20la%20aplicaci%C3%B3n%20de%2017,educativo%20de%20Baja%20California%20Sur"
        ],
        color: StateInDefinition
    },
    {
        id: "MX-BCN",
        name: "Baja California Norte",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "76.30",
        alumnosVacunados: "NO",
        nombreEstrategia: "Regreso Seguro a Clases Presenciales",
        actividadesPresenciales: "Se preveé que 24 escuelas vuelvan a clases presenciales durante la primera semana del ciclo 2021-2022 (Lunes 30 de agosto) <br><br>La asistencia será voluntaria, gradual y escalonada. Durante septiembre, los planteles se duplicarán semanalmente, de acuerdo a la disposición de escuelas y la autorización de padres de familia. las clases serán en un modelo híbrido entre presenciales y a distancia, ya que los alumnos seleccionados asistirán tres y dos días de la semana, de manera alternada, a partir de la primera letra del apellido.   el regreso a clases será en 24 escuelas (cuatro por municipio y dos públicas y dos privadas), en la segunda semana serán 48; en la siguiente 72 y después 96, de acuerdo a la evolución y monitoreo del manejo de salud. Serán los padres de familia los que aprueben el regreso de clases presenciales de sus hijos.",
        aforosFiltrosSanitarios: "El regreso a las escuelas de manera presencial, se realizará de forma gradual y segura, incluyendo la realización de jornadas de limpieza previas al ingreso de los estudiantes. las escuelas de cada municipio o poblado serán divididas en áreas que incluyan un centro de salud que se encargará de dar atención a esa región en caso de ser necesario.  Los padres de familia y las escuelas deberán coordinar filtros para evitar la propagación de la enfermedad. en caso de que se detecte un caso sospechoso, el grupo será suspendido por 14 días, mientras que si se confirma un caso de COVID-19 se suspenderán las clases en todo el plantel. Las aulas tendrán un máximo de 10 personas.",
        referencias: [
            "https://www.sandiegouniontribune.com/en-espanol/noticias/bc/articulo/2021-07-26/baja-california-anuncia-regreso-a-clases-presenciales-semaforo-epidemiologico-regional-permanece-verde",
            "http://www.educacionbc.edu.mx/regresoseguro/",
            "https://www.jornada.com.mx/notas/2021/07/26/estados/planean-regreso-a-clases-gradual-en-baja-california-a-partir-de-agosto/#:~:text=El%20gobierno%20de%20Baja%20California,forma%20gradual%2C%20escalonada%20y%20segura.",
            "https://www.bcsnoticias.mx/incierto-el-regreso-a-clases-en-bcs-acercandose-la-fecha-se-tomaran-decisiones-salud/",
            "https://www.gob.mx/sep/es/articulos/boletin-sep-no-102-concluye-exitosamente-el-proceso-de-vacunacion-a-personal-docente-en-30-entidades-del-pais?idiom=es",
            "https://www.poresto.net/campeche/2021/8/15/regreso-clases-en-campeche-conoce-las-fechas-para-inscripcion-del-ciclo-escolar-2021-2022-272491.html"
        ],
        color: StateBack2School
    },
    {
        id: "MX-SON",
        name: "Sonora",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "87",
        alumnosVacunados: "NO",
        nombreEstrategia: "Retorno Seguro, estrategias para el regreso a clases presenciales del ciclo 2021-2022",
        actividadesPresenciales: "A partir del 30 de agosto, los estudiantes en Sonora regresarán a las aulas conforme a las disposiciones federales y condiciones sanitarias para ver la gradualidad del retorno. <br><br>Regreso a clases presenciales debe darse con una estrategia conjunta para hacerlo de la forma más segura: Gobernadora Pavlovich",
        aforosFiltrosSanitarios: "<ol><li> Se invita a los padres de familia, a maestros, a las autoridades educativas a que se integren al Comité́ Participativo de Salud en su escuela.</li> <li>Establecer el filtro de salud en casa, y participar en los filtros de la escuela y del salón de clases, para detectar síntomas y tomar las medidas necesarias.</li><li> Lavarse las manos con agua y jabón y/o gel antibacterial.</li><li> Usar cubrebocas sobre nariz y boca, en todo momento.</li><li> Mantener la sana distancia.</li><li> Dar mayor uso a los espacios abiertos.</li><li> Por ahora, no tener ceremonias ni reuniones generales.</li><li> Avisar inmediatamente la presencia o sospecha de casos de COVID-19 en la escuela.</li><li> Inscribirse a los cursos de apoyo socioemocional en línea de SEP-Salud “Retorno Seguro”: climss.imss.gob.mx</li><li>  Al salir de casa, lleva a la escuela la Carta compromiso de corresponsabilidad.</li></ol><br> Ante el aumento de contagios y el registro de estas variantes del coronavirus, la gobernadora Pavlovich instó a seguir con las acciones y programas de prevención, para seguir con las medidas y protocolos sanitarios rigurosos. Salones de clases con buena ventilación.<br><br>La Secretaría de Educación y Cultura y el Instituto Sonorense de Infraestructura Educativa (ISIE) han realizado una valoración de las condiciones de la infraestructura física de los planteles escolares, con el fin de atender a todos los requerimientos apremiantes de los inmuebles.<br><br><ol><li>Pupitres separados al menos metro y medio entre cada uno.</li><li>Máximo 15 alumnos en cada salón.</li><li>Uso de gel antibacterial y lavado frecuente de manos.</li><li>Uso correcto de cubrebocas en todo momento.</li></ol>",
        referencias: [
            "http://www.sec.gob.mx/portal/index.php?op=nota&p=1033",
            "https://kidstudia.com/guia/todo-sobre-el-regreso-a-clases-en-mexico/sonora/#medidas+para+el+regreso+a+clases+en+sonora",
            "https://www.elsoldehermosillo.com.mx/local/es-oficial-alumnos-de-sonora-si-regresaran-a-clases-presenciales-30-de-agosto-sec-gobierno-del-estado-escuelas-7046536.html",
            "https://www.elsoldehermosillo.com.mx/local/es-oficial-alumnos-de-sonora-si-regresaran-a-clases-presenciales-30-de-agosto-sec-gobierno-del-estado-escuelas-7046536.html",
            "http://www.sec.gob.mx/portal/index.php?op=nota&p=1034",
            "https://www.elsoldehermosillo.com.mx/doble-via/salud/el-covid-19-y-los-ninos-esto-es-lo-que-sabemos-antes-de-ir-a-la-escuela-regreso-a-clases-pandemia-7097189.html"
        ],
        color: StateBack2School
    },
    {
        id: "MX-CHH",
        name: "Chihuahua",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "NO",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "95",
        alumnosVacunados: "NO",
        nombreEstrategia: "Estrategia Chihuahua (implementada desde julio)",
        actividadesPresenciales: "Servicios Educativos del Estado de Chihuahua informó que ayer [17 de agosto] y en los próximos días cada centro educativo se estará reuniendo con el colectivo docentes así como con la sociedad de padres, para establecer las estrategias y habilitar las escuelas que durante las clases virtuales se deterioraron. Asimismo, la Secretaría de Educación y Deporte del Estado indicó que están trabajando para que durante estos días queden habilitadas las aulas y garantizar la seguridad de los maestros y alumnos.  En Parral, con el retorno a clases se recuperará la cantidad de unidades de transporte habida antes del confinamiento, pero los operadores deberán respetar el aforo del 50%, la sana distancia, el uso obligatorio del cubre bocas, y mantener las ventanas abiertas para una adecuada ventilación.  El Colegio de Bachilleres de Chihuahua dice encontrarse listo para un regreso voluntario e híbrido en septiembre. La directora general del Cobach mencionó que el programa con el que cuentan es seguro, ya que en una semana los jóvenes irán una o dos veces a clases presenciales, ello dependiendo de las materias y del número de horas que tengan a la semana.",
        aforosFiltrosSanitarios: "Respecto a la estrategia para el regreso, se añade que los días lunes y miércoles acudirán a clases presenciales sólo la mitad de cada grupo, por lo que los días martes y jueves, asistirá el otro cincuenta por ciento de los estudiantes. Es por ello que los días viernes, la lección será de manera virtual, aunque podría estarse convocando a clases presenciales a aquellos alumnos que presenten un mayor rezago académico.",
        referencias: [
            "https://www.elsoldeparral.com.mx/local/parral/no-hay-quejas-por-parte-de-docentes-que-se-opongan-al-regreso-a-las-aulas-clases-escuelas-noticias-parral-chihuahua-7099419.html",
            "https://www.elsoldeparral.com.mx/local/parral/de-regreso-a-clases-urbanos-deberan-de-respetar-el-50-del-aforo-permitido-alumnos-clases-noticias-parral-chihuahua-7098762.html",
            "https://www.elheraldodechihuahua.com.mx/local/chihuahua/cobach-listo-para-el-regreso-hibrido-en-septiembre-noticias-de-chihuahua-pandemia-contagios-escuelas-educacion-aprendizaje-7089159.html"

        ],
        color: StateBack2School
    },
    {
        id: "MX-COA",
        name: "Coahuila de Zaragoza",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "23 de agosto",
        tipoModelo: "Híbrido", 
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "85.4",
        alumnosVacunados: "NO",
        nombreEstrategia: "No disponible",
        actividadesPresenciales: "Del 23 de agosto al 03 de septiembre se tiene previsto realizar pruebas diagnósticas y una evaluación para identificar el abandono y rezago escolar.  Del 6 al 30 de septiembre se pretende llevar a cabo un período de recuperación para alumnos en rezago. El regreso a clases presenciales será obligatorio paras los docentes.",
        aforosFiltrosSanitarios: "Previo a la apertura de las escuelas deberá pedírseles a los padres de familia, entre otras cosas, que sus hijos acudan bañados a la escuela y que en caso de notar algún síntoma de enfermedad como fiebre, tos, dolor de garganta o de cabeza no podrán asistir y deberá notificarse a la autoridad del plantel. Las escuelas por su parte deberán prepararse con lo siguiente: Insumos para colocar un filtro a la entrada del plantel, tanto para el personal que trabaja en la escuela como para los alumnos En el filtro deberá haber: • Alcohol en gel con alcohol isopropílico al 70% para la higiene de manos a la entrada al plantel • Termómetro infrarrojo para la toma de temperatura previo a la entrada al plantel. Los salones de clases deberán contar con:<ul><li>• Alcohol en gel con alcohol isopropílico al 70%.</li><li>• Caja de pañuelos desechables.</li><li>• Bote de basura con pedal y tapa.</li><li>• Toallitas desinfectantes para la limpieza del pupitre y/o mesas de trabajo. Las áreas comunes (patios, canchas, áreas de juego) deberán limpiarse como se hace normalmente todos los días, al igual que el resto de las instalaciones, poniendo énfasis en las superficies de mayor contacto como escritorios, mesas, interruptores, picaportes.</li></ul>Todos los baños deberán contar con agua, jabón, sanitas para secarse las manos,papel higiénico y botes de basura con pedal y tapa. Existe la posibilidad detransmisión de SARS-CoV-2 mediante inhalación de la aerosoles fecales por locual se debe poner especial atención en la ventilación de los baños, así como enla utilización estricta de cubreboca al acceder a ellos. Se recomienda educar a losalumnos a bajar la tapa del inodoro antes de jalar la palanca.",
        referencias: [
            "https://www.elheraldodesaltillo.mx/2021/07/27/habra-periodo-de-diagnostico-y-otro-de-recuperacion-al-regreso-a-clases-en-coahuila/",
            "https://www.elheraldodesaltillo.mx/2021/07/05/volverian-el-23-de-agosto-a-clases-presenciales-90-escuelas-en-coahuila/",
            "https://vanguardia.com.mx/articulo/regreso-clases-sera-obligatorio-para-los-profesores-en-coahuila",
            "https://www.saludcoahuila.gob.mx/COVID19/documentos/MANUAL%20REAPERTURA%20ESCOLAR%202021.pdf",
            "https://www.gob.mx/sep/es/articulos/boletin-sep-no-102-concluye-exitosamente-el-proceso-de-vacunacion-a-personal-docente-en-30-entidades-del-pais?idiom=es"
        ],
        color: StateBack2School
    },
    {
        id: "MX-NLE",
        name: "Nuevo León",
        regresoActividadesPresenciales: "Por definir",
        fechaRetorno: "30 de agosto",
        tipoModelo: "A distancia",
        reincorporacionVoluntaria: "Sin Definir",
        reincorporacionGradual: "Sin Definir",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "100",
        alumnosVacunados: "NO",
        nombreEstrategia: "No disponible",
        actividadesPresenciales: "Los maestros de Nuevo León se niegan al regreso de las clases presenciales ante el actual escenario de la pandemia del Covid-19, por lo que aún no se aclara si el estado continuará con los estudios a distancia. <br><br> El gobernador de Nuevo León, Jaime Rodríguez Calderón, dijo que hasta el momento no está definida la modalidad del regreso a clases e invitó a los docentes a continuar dando su opinión a través de WhatsApp.",
        aforosFiltrosSanitarios: "La asistencia será de forma híbrida, en el que las aulas estarán a un 30% de su capacidad y los alumnos pueden seguir las clases a distancia.",
        referencias: [
            "https://mexico.as.com/mexico/2021/08/17/actualidad/1629213138_780381.html?omnil=resrelart"
        ],
        color: StateInDefinition
    },
    {
        id: "MX-TAM",
        name: "Tamaulipas",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "SP",
        alumnosVacunados: "NO",
        nombreEstrategia: "Jornada Presencial de Regularización",
        actividadesPresenciales: "El Gobernador Francisco García Cabeza de Vaca y los titulares de la Secretaría de Educación y Secretaría de Salud presentaron este martes las medidas que se llevarán a cabo en Tamaulipas para un regreso seguro, progresivo y voluntario a clases de manera presencial. <br><br> Expresó que se evaluarán las condiciones de cada región y de esta manera se determinará el retorno a las aulas educativas para el 30 de agosto, existen 651 escuelas en posibilidad de regresar a clases, pues están en municipios con semáforo verde y amarillo; estas escuelas se ubican en municipios de zona rural y periferia de ciudades. Así que por el momento, los municipios grandes como Tampico, Altamira, Ciudad Victoria, Reynosa, Matamoros y Nuevo Laredo no están consideradas, pero dependerá del comportamiento de la pandemia.<br><br> Aunque no se podrá obligar a nadie, por lo que será voluntario (con carta responsiva firmada por padres de los estudiantes) y se respetará la decisión de los padres de familia. <br><br> Educación básica se incorpora el 30 de agosto , Educación Media Superior única el 21 de septiembre y Educación superior, dependerá si es semestral o cuatrimestral.<br><br> Curso un Pilotaje para el regreso a clases, el cual cuenta con 2 fases de implementación.",
        aforosFiltrosSanitarios: "Anunció que la firma de una carta responsiva por parte de los padres de familia no será una obligación en Tamaulipas. “Se dio a conocer a nivel nacional que los padres de familia tenían que firmar un documento para poder permitir que sus hijos ingresen a las escuelas, en Tamaulipas eso no es un requisito, no tendrán que firmar absolutamente nada, es totalmente voluntario”, afirmó <br><br> Los municipios que están sujetos a este regreso presencial seguro, progresivo y voluntario deben estar en fase 2 del semáforo epidemiológico.<br><br> Están por arrancar un pilotaje denominado Jornada Presencial de Regularización, fase 2. <br> El regreso a las aulas será en los municipios donde se tenga semáforo verde y amarillo.<br><br> Derivado de la Reunión Interinstitucional llevada a cabo esta semana con la Secretaría de Salud, se establecieron los acuerdos para determinar el Regreso a Clases Presenciales para el Inicio del Ciclo Escolar 2021-2022, en los niveles de Educación Básica, priorizando la salud física y emocional de la comunidad educativa, con acciones de prevención de riesgos ante la contingencia Covid-19. <br>Otro de los acuerdos para el regreso a clases presenciales, es el de suministrar con un kit de insumos para limpieza y sanitización a cada escuela, iniciando con los municipios en semáforo epidemiológico verde y amarillo.",
        referencias: [
            "https://www.tamaulipas.gob.mx/educacion/avisos/planteles-seleccionados-fase-2/",
            "https://www.milenio.com/politica/comunidad/regreso-a-clases-presenciales-en-tamaulipas-sera-voluntario",
            "https://www.tamaulipas.gob.mx/educacion/avisos/planteles-seleccionados-fase-2/",
            "https://www.tamaulipas.gob.mx/educacion/regresoaclasespresenciales-fasepiloto-boletines/",
            "https://kidstudia.com/guia/todo-sobre-el-regreso-a-clases-en-mexico/tamaulipas/",
            "https://www.milenio.com/politica/regreso-clases-vacaciones-ciclo-2021-2022-tamaulipas",
            "https://www.elsoldetampico.com.mx/local/regional/regreso-a-clases-presenciales-en-tamaulipas-sera-voluntario-cabeza-de-vaca-7026334.html",
            "https://www.hoytamaulipas.net/notas/464556/Regresaran-a-clases-presenciales-en-Tamaulipas-el-30-de-agosto.html",
            "https://www.milenio.com/politica/comunidad/regreso-clases-tamaulipas-municipios-semaforo-verde-amarillo",
            "https://www.tamaulipas.gob.mx/educacion/2021/08/acuerdos-para-el-regreso-a-clases-presenciales-en-educacion-basica-2021-2022/",
            "https://www.tamaulipas.gob.mx/2021/08/presenta-gobierno-de-tamaulipas-medidas-para-el-regreso-presencial-a-clases-de-manera-segura-progresiva-y-voluntaria/"
        ],
        color: StateBack2School
    },
    {
        id: "MX-SIN",
        name: "Sinaloa",
        regresoActividadesPresenciales: "SI",
        fechaRetorno: "30 de Agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "90",
        alumnosVacunados: "NO",
        nombreEstrategia: "Sin información",
        actividadesPresenciales: "Medios indican: El modelo para el regreso a clases de manera presencial que implementaron Jalisco y Sinaloa desde marzo pasado es un buen esquema a seguir en este regreso a clases a partir del 30 de agosto próximo, señalaron representantes de la Asociación Mexicanos Primero. <br><br> El secretario de Educación Pública y Cultura, Juan Alfonso Mejía López, explicó que en cada una de las escuelas se determinará los días en que se darán las clases presenciales y lar virtuales, es decir, los maestros pueden tener las clases en aulas por una semana y la siguiente en línea, o elegir los días de la semana para cada modalidad.<br><br> En Sinaloa existen elementos para un regreso a clases gradual y focalizado, además de seguro para las niñas, niños y jóvenes, de acuerdo a la instrucción del gobernador Quirino Ordaz Coppel, quien fue reconocido por el presidente de la República, Andrés Manuel López Obrador, como el primer mandatario que solicitó la vacunación a las y los maestros del país para un regreso seguro a las escuelas.<br><br> En Sinaloa existen elementos para un regreso a clases gradual y focalizado, además de seguro para las niñas, niños y jóvenes, de acuerdo a la instrucción del gobernador Quirino Ordaz Coppel, quien fue reconocido por el presidente de la República, Andrés Manuel López Obrador, como el primer mandatario que solicitó la vacunación a las y los maestros del país para un regreso seguro a las escuelas.",
        aforosFiltrosSanitarios: "Regreso a las aulas en Sinaloa deberá atender condiciones de cada comunidad. Regreso a clases en Sinaloa será de forma gradual, focalizado y seguro. Experiencia previa de 955 Centros Comunitarios de Aprendizaje, donde se atendió a 26 mil 26 alumnos con rezago educativo. El congreso del Estado tiene la postura de “Estamos ansiosos porque los estudiantes regresen, pero la tercera ola de contagios es alarmante, ante este panorama es necesario que las autoridades actúen con prudencia: no hay condiciones del regreso seguro a las aulas",
        referencias: [
            "https://mieducacion.sepyc.gob.mx/sinaloa-coincide-con-el-presidente-andres-manuel-lopez-obrador-el-regreso-a-clases-es-por-el-convencimiento-nada-por-la-fuerza/",
            "https://www.debate.com.mx/opinion/Posible-retorno-a-las-aulas-20210730-0348.html",
            "https://mieducacion.sepyc.gob.mx/",
            "https://www.elsoldemazatlan.com.mx/local/regreso-a-clases-en-sinaloa-sera-en-modalidad-mixta-7045888.html",
            "https://www.elsoldemazatlan.com.mx/local/regreso-a-clases-en-sinaloa-sera-en-modalidad-mixta-7045888.html"
        ],
        color: StateBack2School
    },
    {
        id: "MX-DUR",
        name: "Durango",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "Si",
        reincorporacionGradual: "Si",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "100",
        alumnosVacunados: "NO",
        nombreEstrategia: "No disponible",
        actividadesPresenciales: "''Estamos listos para iniciar clases el día 30 de agosto'', aseguró el gobernador José Aispuro Torres al reiterar que, hasta ahora, sigue en pie el retorno a la actividad presencial en el sector educativo. <br><br> En rueda de prensa informó que están en pláticas con el Sindicato Nacional de Trabajadores de la Educación (SNTE) y con los padres de familia y se iniciarán esta semana pláticas con los maestros en las escuelas para determinar qué se requiere para fortalecer los protocolos.<br><br> Advirtió que las escuelas deben tener cuando menos condiciones de limpieza, agua, servicios sanitarios en operación y servicio de energía eléctrica. <br>El Subsecretario de Educación en la región Laguna de Durango, Cuitláhuac Valdez Gutiérrez, dijo que, si las condiciones de cada plantel son las idóneas, aunado a que los servicios de luz y agua serán determinantes, se tendrá un regreso a clases el próximo 30 de agosto que será de forma presencial y voluntaria.<br><br> Reiteró que, si alguna escuela no cuenta con los servicios esenciales como agua potable y luz, no habrá tal regreso en esa institución, hasta en tanto se solucione, razón por la que se trabajará para atender las deficiencias de los planteles.<br><br> Dijo que a partir de la cantidad de niños que regresen, será la forma en que se irán haciendo los ajustes correspondientes para una mejor atención en los salones de clases.<br><br> Descarta que en el regreso a clases se lleven ceremonias o reuniones generales para evitar aglomeraciones y se debe ser además cautelosos además para evitar posibles contagios y dar aviso de cualquier sospecha de Covid-19.   El Colegio de Bachilleres del Estado de Durango (Cobaed), de 33 planteles con los que cuenta, cuatro regresarán a clases cien por ciento presenciales, ya que se ubican en municipios y localidades sin contagios de Covid, informó el director del subsistema, Víctor Hugo Castañeda Soto. Otros 17 planteles regresarán de forma híbrida y 13 continuarán en modalidad virtual, entre ellos los cuatro que se ubican dentro de la ciudad capital; “veremos qué tan efectivo es este modelo para ir replicándolo poco a poco en el resto de los planteles e integrar otros a formato híbrido”.  En la Universidad Juárez del Estado de Durango (UJED), la Escuela de Matemáticas es la primera institución que regresó a las aulas.<br>Fue una consulta con alumnos, maestros, así como con los trabajadores administrativos, dijo el Rector, en la que todos estuvieron de acuerdo para iniciar el semestre de manera presencial.  El Rector de la UJED (Universidad Juárez del Estado de Durango) destacó que de concretarse un regreso a las aulas, no sería total, sino que se realizaría de manera híbrida, una parte de los alumnos en el salón y otra parte de manera virtual.<br>Fue tajante al señalar que de pasar al rojo en el Semáforo de Riesgo Epidemiológico, para tomar la decisión definitiva se tomaría en cuenta la opinión del alumnado y de los maestros, algo similar a lo que hizo la Facultad de Ciencias Exactas.",
        aforosFiltrosSanitarios: "No disponible",
        referencias: [
            "https://www.elsiglodedurango.com.mx/2021/08/1333619.cuando-menos-escuelas-deben-tener-servicios-basicos-para-regreso-a-clases-jrat.html",
            "https://www.noticiasdelsoldelalaguna.com.mx/local/gomez-palacio/inminente-el-regreso-a-clases-presenciales-en-la-laguna-de-durango-cvg-7080734.html",
            "https://contactohoy.com.mx/tendra-cobaed-cuatro-planteles-con-clases-presenciales/",
            "https://www.elsiglodedurango.com.mx/2021/08/1332614.en-la-ujed-arrancan-clases-presenciales.html",
            "https://www.elsiglodedurango.com.mx/noticia/1333116.ujed-descarta-un-retorno-general.html?full"

        ],
        color: StateBack2School
    },
    {
        id: "MX-ZAC",
        name: "Zacatecas",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "90.6",
        alumnosVacunados: "NO",
        nombreEstrategia: "Regreso a clases presenciales",
        actividadesPresenciales: "El regreso a clases presenciales traería un impacto positivo a niñas, niños y adolescentes luego de 17 meses en confinamiento, aseguró Aimé Alanís Pérez, coordinadora del Programa de Convivencia Escolar de la Secretaría de Educación en Zacatecas (SEZ). <br><br> Con el objetivo de que las escuelas de la Dirección Regional 2 Federal de la Secretaría de Educación cumplan con las condiciones de sanidad y seguridad para un posible regreso a clases este próximo 30 de agosto, personal de las mismas iniciaron con brigadas de limpieza en preescolar, primaria y secundaria, acciones que se tienen contempladas para los días 11, 12 y 13 del presente mes.<br><br> Regreso a clases en Universidad de Zacatecas será virtual<br><br> En declaraciones  recientes, se reiteró que el regreso será solo si los padres de familia están de acuerdo. Se comentó que solo en los municipios de el Salvador, Melchor Ocampo, Mezquital del Oro, Apozol, Apulco, donde no hay contaguos se puede retomar el regreso a clases presenciales.<br>Solo se publicó exhorto de la legislatura local para que la Secretaría de Educación y la Secretaría de Salud del Estado de Zacatecas elaboren un plan estratégico de regreso a clases presenciales seguro, ordenado, gradual, escalonado y cauto; con todos los protocolos de salud establecidos, además de valorar la posibilidad de un regreso a clases inmediato en aquellas instituciones públicas y privadas pequeñas, con pocos alumnos y donde las condiciones físicas así lo permitan.<br><br>Sin embargo, Aún no se puede fijar la postura, hasta conocer las condiciones del semáforo epidemiológico y el lineamiento federal.",
        aforosFiltrosSanitarios: "De acuerdo con la encuesta realizada por la Secretaría de Educación de Zacatecas (SEZ) a 101 mil 808 madres, padres de familia y tutores, el 81.3 por ciento dijo que está de acuerdo en que niñas, niños y adolescentes regresen a las escuelas de educación básica de manera presencial. El 92.3 por ciento se mostró dispuesto a colaborar en el establecimiento de los filtros sanitarios en casa, escuela y salón de clases, tal como lo establecen los protocolos de la Secretaría de Educación Pública (SEP). Se respetará la sana distancia, se suspenderán las ceremonias y los alumnos tendrán acceso a jabón, agua y gel alcoholado.<br><br> LA UAZ hará encuesta de movilidad y convivencia, “ya se tienen claros los protocolos de seguridad, de sanitización para todos los espacios, solo veremos si será escalonado, de acuerdo a los espacios o por nivel educativo, sin embargo, la decisión se tomará en agosto",
        referencias: [
            "https://imagenzac.com.mx/capital/necesario-el-regreso-clases-presenciales-en-zacatecas-brena-cantu/",
            "http://www.seduzac.gob.mx/portal/index.php",
            "http://www.seduzac.gob.mx/portal/index.php ",
            "https://www.zacatecas.gob.mx/mas-de-81-de-madres-y-padres-de-familia-estan-de-acuerdo-en-que-alumnos-de-educacion-basica-regresen-a-las-aulas/ ",
            "https://imagenzac.com.mx/capital/estudiantes-regresaran-a-las-aulas-el-30-de-agosto/",
            "http://ntrzacatecas.com/2021/07/12/prepara-uaz-encuesta-de-movilidad-y-convivencia/",
            "https://www.eluniversal.com.mx/estados/regreso-clases-en-universidad-de-zacatecas-sera-virtual",
            "http://ntrzacatecas.com/2021/08/12/joca-prs/"
        ],
        color: StateBack2School
    },
    {
        id: "MX-SLP",
        name: "San Luis Potosí",
        regresoActividadesPresenciales: "SI",
        fechaRetorno: "Sin información",
        tipoModelo: "A distancia",
        reincorporacionVoluntaria: "Sin Definir",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "90",
        alumnosVacunados: "NO",
        nombreEstrategia: "Sin información",
        actividadesPresenciales: "Aunque los diputados Martha Barajas García y Martín Juárez Córdova coincidieron en que toda la comunidad educativa debe estar protegida y lo mínimo que se requiere es que las escuelas estén en buenas condiciones, con agua, luz, equipo y todo lo necesario para que se cumplan los protocolos sanitarios. No hay un pronunciamiento de la Seccretaria de Educación para confirmar tales  opiniones <br><br>La autoridad educativa federal dará a conocer información para el regreso a clases y en reunión de CONAEDU",
        aforosFiltrosSanitarios: "No habrá regreso a clases presenciales durante el mes de agosto, además recordó que para el regreso a clases presenciales, cuando existan las condiciones sanitarias, se aplicarán nueve intervenciones o medidas para asegurar el bienestar de la comunidad escolar. <br><br> Hubo una reapertura del 15% de escuelas en junio. El saldo fueron dos casos de contagios en docentes y nueve alumnos",
        referencias: [
            "https://slp.gob.mx/sege/Paginas/NOTICIAS/FECHAS-Y-MODALIDAD-DE-REGRESO-A-CLASES--SE-DAR%C3%81N-A-CONOCER-LA-PR%C3%93XIMA-SEMANA.aspx",
            "https://slp.gob.mx/sege/Paginas/NOTICIAS/NO-HAY-REGRESO-A-CLASES-PRESENCIALES-EN-SAN-LUIS-POTOS%C3%8D-SECRETARIO-DE-EDUCACI%C3%93N.aspx",
            "https://www.elsoldesanluis.com.mx/local/confirma-la-sege-el-regreso-a-clases-el-30-de-agosto-en-san-luis-potosi-7073590.html",
            "https://www.elsoldesanluis.com.mx/local/en-slp-no-hay-condiciones-para-regreso-a-clases-presenciales-7097203.html"
        ],
        color: StateBack2School
    },
    {
        id: "MX-NAY",
        name: "Nayarit",
        regresoActividadesPresenciales: "SI",
        fechaRetorno: "10 de agosto",
        tipoModelo: "A distancia",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "85.4",
        alumnosVacunados: "NO",
        nombreEstrategia: "Aprende en casa",
        actividadesPresenciales: "Se tenía previsto que algunos municipios de la Sierra regresarán a clases presenciales en mayo sin embargo ante el alza en casos de covid y el retroceso del semáforo de verde a amarillo dicho iniciativa se frenó.<br><br> El regreso a clases para educación básica está programado para el 10 de agosto, siempre y cuando Nayarit se encuentre en semáforo verde. <br><br> En estos momentos el Estado de Nayarit NO se encuentra en condiciones de regresar a clases presenciales por el alto índice de incrementos de casos de COVID-19”, declaró en entrevista Martín Isaac Pérez, Subsecretario de Educación Media Superior y Superior en el Estado de Nayarit.",
        aforosFiltrosSanitarios: "El subsecretario de Educación Media Superior y Superior en el Estado, Martín Isaac Pérez quien explicó que el recurso para hacer las reparaciones pertinentes a los planteles tras más de un año de estar solas, comienzan a llegar, por lo tanto, antes de que inicie el ciclo ya deben de estar listas para recibir a los alumnos.<br><br>Siguiendo los protocols establecidos por Gobierno Federal<br><br>En caso de que se reanuden las clases presenciales en el estado, se tomarán la siguientes medidas:<ol><li>Establecimiento de Comités de salud escolar.</li><li>Mantener sana distancia y uso general del cubreboca en los planteles.</li><li>Acceso a agua y jabón.</li><li>Suspensión de todo acto cívico o ceremonia.</li><li>Maximización del uso de espacios abiertos.</li><li>Detección temprana de contagios.</li><li>Cierre de escuelas en caso de contagio.</li></ol>",
        referencias: [
            "https://www.nayarit.gob.mx/seccion/educacion",
            "https://meridiano.mx/seccion/nayarit/nayarit-no-est-en-condiciones-de-regresar-a-clases-presenciales-educaci-n-1/",
            "https://www.nayarit.gob.mx/seccion/educacion#:~:text=El%20'Verano%20Divertido'%20iniciar%C3%A1%20el,cuando%20existan%20las%20condiciones%20sanitarias",
            "https://kidstudia.com/guia/todo-sobre-el-regreso-a-clases-en-mexico/nayarit/",
            "https://meridiano.mx/seccion/nayarit/nayarit-no-est-en-condiciones-de-regresar-a-clases-presenciales-educaci-n-1/",
            "https://www.gob.mx/sep/es/articulos/boletin-sep-no-102-concluye-exitosamente-el-proceso-de-vacunacion-a-personal-docente-en-30-entidades-del-pais?idiom=es",
            "https://latinus.us/2021/08/11/regreso-clases-presenciales-estados-volveran-aulas-nuevo-ciclo-escolar/",
            "https://www.eloccidental.com.mx/local/respalda-seccion-49-retorno-a-clases-presenciales-en-nayarit-7082730.html"
        ],
        color: StateBack2School
    },
    {
        id: "MX-JAL",
        name: "Jalisco",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de Agosto 2021",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "SP",
        alumnosVacunados: "NO",
        nombreEstrategia: "Modelo hibrido y opcional de regreso a clases-Regreso a clases presenciales",
        actividadesPresenciales: "El mandatario, Enrique Alfaro reitera que el 30 de agosto habrá retorno a las escuelas. “La manera como crecieron de manera rapidísima los contagios en niños, pero justamente en el período de vacaciones, el momento en el que más crecen los contagios es justamente en este periodo , y afortunadamente el número de contagios en niños ha iniciado su descenso en las últimas semanas, por lo cual reiteramos y sostenemos que el regreso a clases presenciales se sostiene",
        aforosFiltrosSanitarios: "En las principales acciones son: el uso del cubrebocas es obligatorio para todos los niveles y sana distancia<br>Por otro lado, se emiten protocolos detallados para todos los niveles y actividades:<br>Protocolo de acción ante COVID-19 para Grupos de Seguimiento Académico, Trámites presenciales y Entrega de materiales educativos aplicable a Educación Básica, Media Superior y Superior Docente<br>Protocolo de actuación ante COVID-19 Sector Educativo para Actos Académicos Presenciales en escuelas de Educación Básica de la Secretaría de Educación del Estado de Jalisco.<br>Protocolo de acción ante COVID-19 Para centros de formación para el trabajo, educación continua y academias.<br>Protocolo de actuación ante COVID-19 Sector Educativo para la realización de exámenes presenciales del Sistema de Preparatoria Abierta.<br>Protocolo de actuación ante COVID-19 Sector Educativo para la atención de actividades esenciales en Educación Media Superior.<br>Protocolo de Acción ante COVID-19 para realizar Educación Física en los planteles escolares",
        referencias: [
            "https://www.jalisco.gob.mx/es/prensa/noticias/129538",
            "https://www.jalisco.gob.mx/es/prensa/noticias/127052",
            "https://www.facebook.com/educacion.jalisco/photos/a.446164440747/10158547049890748/",
            "https://portalsej.jalisco.gob.mx/plan-jalisco-para-la-reactivacion-economica/",
            "https://udgtv.com/noticias/regreso-clases-virtuales-decision-basada-criterios-cientificos-udeg/"
        ],
        color: StateBack2School
    },
    {
        id: "MX-AGU",
        name: "Aguascalientes",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "23 de agosto (por confirmar)",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "91",
        alumnosVacunados: "NO",
        nombreEstrategia: "Me sumo a un regreso seguro",
        actividadesPresenciales: "La Asociación de Instituciones Educativas Particulares del Estado ha solicitado al Instituto de Educación de Aguascalientes se les permita iniciar el ciclo lectivo 2021-2022 el próximo 23 de agosto, y no tener que esperar hasta el día 30, habrá que esperar confirmación <br> Los estudiantes podrán ingresar a los planteles, pero no de manera masiva, es decir no regresan los grupos completos al mismo tiempo, será, durante las primeras semanas de manera escalonada y para permitir a los profesores levantar un diagnóstico sobre el aprendizaje logrado durante este periodo de aislamiento. <br> El nivel básico de educación tendrá un modelo mixto de clases, con grupos reducidos y asistencia alternada a los salones de clases. Los niños de los niveles de preescolar, primaria y secundaria deberán ajustarse a las siguientes fechas: <br><br> Jornadas de limpieza escolar. 11, 12 y 13 de agosto. <br> Inscripciones y reinscripciones. Del lunes 16 de agosto al viernes 10 de septiembre. <br> Evaluación diagnóstica. Del lunes 16 de agosto al viernes 10 de septiembre. <br> Período extraordinario de recuperación. Del lunes 13 de septiembre al martes 23 de noviembre dirigido a los alumnos con deficiencias educativas. <br> El nivel medio superior regresará a clases con un modelo mixto. Los alumnos asistirán a clases de manera alternada, en grupos pequeños y con todas las medidas de salud e higiene necesarias para un regreso seguro. <br><br> El regreso a clases de este nivel educativo tendrá varias fechas, dependiendo del sistema al que está incorporada la escuela de tu hijo. Para el 6 de septiembre todas las preparatorias del estado ya deberán estar en clases. Por lo pronto se prevén las siguientes fechas de inicio: <br><br> Bachilleratos tecnológicos. Inicio de clases 23 de agosto. <br> Conalep. Inicio de clases 30 de agosto. <br> Bachilleratos incorporados a universidades. Misma fecha de inicio de la institución de nivel superior a la que se encuentran incorporados. <br> Las universidades darán inicio a las actividades educativas según su propio calendario escolar.   El regreso presencial a clases a partir del 30 de agosto próximo correspondiente al nuevo ciclo lectivo 2021-2022 será con jornadas completas, de 8:00 am a 1:00pm, en el caso de las primarias",
        aforosFiltrosSanitarios: "Protocolo para prevenir contagios durante el regreso progresivo a clases presenciales en escuelas públicas y privadas de educación básica, media superior y superior , publciado el 27 de julio de 2021, en el cual se detallan las estregias para evitar contagios: Uso obligatorio del cubrebocas, puerta abiertas y evitar contacto con picaportes, filtro de hogar, filtro escolar , filtro de aula, capaictaciones para personal y alumnos, limpieza a profundidad de las superficies, espacios y materiales, clausura de bebederos, reorganizar descansos y actividades fisicas, se promoveran clases en espacios abiertos, lavado de mano, evitar compartir alimentos, promover el estornudo de etiqueta (cubrir con el angulo interno del codo), el uniforme escolar no es obligatorio, se limita el aforo de los eventos  especiales, las actividades de servicios escolares serán por cita, <ul> <li>-Se recabaran cartas de corresponsabilidad.</li> <li>-maximizar sana distancia y aprovechamiento de espacios abiertos y el uso permanente e irrestricto de cubrebocas.</li> <li>-lpimite del 40% diario de la población escolar.</li> <li>- No mas de 9 alumnas y alumnos y un docente por aula de educación primaria y telesecundaria.</li> <li>-No mas de 12 alumnos y alumnas y un docente por aula en escuelas secundarias generale sy técnicas.</li> <li>-No se permite en este periodo ningún tipkde expendio de alimentos ni se realizaran clases de educación fisica o artística</li></ul> La Asociación de Instituciones Educativas Particulares del Estado ha solicitado al Instituto de Educación de Aguascalientes se les permita iniciar el ciclo lectivo 2021-2022 el próximo 23 de agosto, y no tener que esperar hasta el día 30, habrá que esperar confirmación.",
        referencias: [
            "http://www.hidrocalidodigital.com/aguascalientes-si-tendra-clases-presenciales/#:~:text=Las%20autoridades%20del%20estado%20planean,el%20pr%C3%B3ximo%2030%20de%20agosto."
        ],
        color: StateBack2School
    },
    {
        id: "MX-GUA",
        name: "Guanajuato",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "85.5",
        alumnosVacunados: "NO",
        nombreEstrategia: "Guanajuato educado con R de Reactivación. Regreso a las aulas.",
        actividadesPresenciales: "El gobernador de Guanajuato reiteró que el regreso será voluntario, siempre con la voluntad de los padres y un monitoreo constante del tema de salud.",
        aforosFiltrosSanitarios: "Cuenta con protocolos y guias de salud para el regreso a la escuela (Básica, Media superior y superior), las cuales incluyen:<ol><li>Uso obligatorio de cubrebocas.</li><li>4 filtros sanitarios.</li><li>sana distancia.</li><li>Limpieza de areas y mobiliario.</li> <li>Prupos reducidos.</li></ol>",
        referencias: [
            "https://www.seg.guanajuato.gob.mx/RegresoalasAulas/SitePages/Inicio.aspx",
            "https://www.seg.guanajuato.gob.mx/RegresoalasAulas/SitePages/Inicio.aspx",
            "https://notus.com.mx/regreso-a-clases-presenciales-en-guanajuato-30-agosto-2021/",
            "https://www.milenio.com/politica/comunidad/guanajuato-regreso-clases-presenciales-ajustara-municipio",
            "https://www.seg.guanajuato.gob.mx/RegresoalasAulas/SitePages/EducacionVacunada.aspx",
            "https://zonafranca.mx/politica-sociedad/educacion/en-guanajuato-sera-voluntario-el-regreso-a-clases/",
            "https://www.unionguanajuato.mx/2021/08/02/regreso-a-clases-presenciales-en-agosto-calendario-escolar-2021-a-2022-de-la-sep/"
        ],
        color: StateBack2School
    },
    {
        id: "MX-QUE",
        name: "Querétaro",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "95",
        alumnosVacunados: "NO",
        nombreEstrategia: "Programa Especial de Regreso a Clases",
        actividadesPresenciales: "Se Instaló Subcomité Técnico para el Regreso a Clases del Estado de Querétaro, el objetivo: organizar un posible regreso a clases presenciales planeado, escalonado, gradual, y cauto, con el fin de disminuir el riesgo de contagio y proteger la salud de las comunidades escolares.",
        aforosFiltrosSanitarios: "Se realizara de acuerdo a los ''LINEAMIENTOS GENERALES PARA EL REGRESO A LAS ACTIVIDADES ESCOLARES, EN EL MARCO DE LA PANDEMIA COVID-19''",
        referencias: [
            "https://queretaro.gob.mx/regresoaclaseguro.aspx",
            "https://www.queretaro.gob.mx/covid19/contenido/noticiasContenido.aspx?q=vUYGbsxLnli7glS/gQWD0HldeVLSaRLz7RohSiloFmz7sxVv8axXyw==",
            "https://www.queretaro.gob.mx/pdf/SEDEQ_GuiaRegresoaClases.pdf"
        ],
        color: StateBack2School
    },
    {
        id: "MX-HID",
        name: "Hidalgo",
        regresoActividadesPresenciales: "No",
        fechaRetorno: "Sin información",
        tipoModelo: "A distancia",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "99",
        alumnosVacunados: "NO",
        nombreEstrategia: "Regreso Seguro a Clases en los centros educativos en el marco de la pandemia COVID 19, Operativo Escudo, Hidalgo Seguro",
        actividadesPresenciales: "Al inicio del Ciclo Escolar 2021-2022 se realizará un periodo de valoración diagnóstica y reforzamiento de aprendizajes. Esto con el propósito de identificar posibles casos de ausentismo y evitar el abandono escolar. También acordaron que las escuelas públicas del Sistema Educativo Nacional implementarán 10 acciones para “promover y coadyuvar a la seguridad, salud e higiene de la comunidad escolar”. <br><br>Estas acciones incluyen que los padres de familia o tutores que decidan enviar de manera voluntaria a sus hijos a la escuela deberán firmar una carta compromiso de asistencia voluntaria y corresponsabilidad que será entregada a la autoridad escolar correspondiente. Coincidieron también en mantener el uso de tecnologías y otros materiales y herramientas educativas para fortalecer el proceso de enseñanza-aprendizaje.",
        aforosFiltrosSanitarios: "Filtros escolares, suspensión de registro de entrada y salida de toda la comunidad educativa (alumnos, docentes, personal administrativo y personal de apoyo a la educación , asi como al publico en general) que conlleve el empleo de instrumentos ocmpartidos, cada  institución definira el control de asistencia laboral, limpieza intensiva y desinfección continua de todas las areas de los centros educativos, ventilación en todas las areascampaas de comunicación , dichas estrtegias coordinadas por el Comite Participativo de Salud Escolar (CPSE) ",
        referencias: [
            "https://periodico.hidalgo.gob.mx/?p=44435",
            "https://subrayado.com.mx/hidalgo/cuando-regresan-a-clases-hidalgo-inicio-ciclo-escolar-2021-2022-seph/",
            "https://criteriohidalgo.com/noticias/sin-condiciones-momento-regreso-clases-hidalgo-salud",
            "https://www.milenio.com/ciencia-y-salud/hidalgo-99-docentes-vacunaron-covid-19-seph",
            "https://www.milenio.com/ciencia-y-salud/hidalgo-99-docentes-vacunaron-covid-19-seph"
        ],
        color: StateNoBack2School
    },
    {
        id: "MX-COL",
        name: "Colima",
        regresoActividadesPresenciales: "Por Definir",
        fechaRetorno: "Por definir",
        tipoModelo: "A distancia",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "93.5",
        alumnosVacunados: "NO",
        nombreEstrategia: "Estrategia Estatal de Regreso Seguro a Clases Presenciales",
        actividadesPresenciales: "La prueba piloto no se trata de un regreso a clases presencial, esto solo se dará cuando el semáforo epidemiológico esté en verde y las autoridades sanitarias así lo determinen. Los criterios que se han establecido para un regreso seguro a clases en Colima se aplican con la cuestión de un semáforo verde, que personal docente esté vacunado y la participación voluntaria de padres y madres de familia de poder enviar a sus hijos e hijas a las escuelas.",
        aforosFiltrosSanitarios: "Se conformará un comité de salud en cada escuela, filtros al ingreso al plantel, abastecer de agua y jabón, uso obligatorio de mascarilla, cuidado de grupos vulnerables y cuando se detecte algún caso de coronavirus, el plantel cerraría de forma inmediata.",
        referencias: [
            "https://www.milenio.com/estados/colima-pone-a-prueba-el-regreso-a-clases",
            "https://www.colimanoticias.com/antes-del-regreso-a-clases-preservar-la-salud-y-vida-del-alumnado-y-docentes-se/",
            "https://diariodecolima.com/noticias/detalle/2021-07-23-flores-colima-est-preparado-para-iniciar-el-ciclo-escolar",
            "https://elcomentario.ucol.mx/elabora-colima-su-estrategia-para-regreso-a-clases-presenciales/",
            "https://www.gob.mx/sep/es/articulos/boletin-sep-no-102-concluye-exitosamente-el-proceso-de-vacunacion-a-personal-docente-en-30-entidades-del-pais?idiom=es"
        ],
        color: StateInDefinition
    },
    {
        id: "MX-MIC",
        name: "Michoacán de Ocampo",
        regresoActividadesPresenciales: "No",
        fechaRetorno: "Sin información",
        tipoModelo: "A distancia",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "SP",
        alumnosVacunados: "NO",
        nombreEstrategia: "Escuela abierta",
        actividadesPresenciales: "La postura de los agremiados a la SNTE es de esperar a que baje la ola de contagios de Covid-19: ''por el momento yo les digo que no retornamos, no existen condiciones'', expresó Macedo Negrete. La Secretaría de Educación en el Estado (SEE) reafirma que el inicio del próximo Ciclo Escolar 2021-2022, será “a la distancia” y se preparan dos diagnósticos para proyectar cuando habrá condiciones del retorno presencial, en tanto en educación media superior y superior, habrá mejores condiciones para un modelo híbrido o retorno presencial a través de protocolos. estaremos haciendo dos diagnósticos muy recientes uno en las semanas siguientes, antes de iniciar el ciclo escolar, para ratificar esta determinación; otro diagnóstico será 15 días después de iniciado el ciclo escolar para que en la segunda semana de septiembre saber qué condiciones privan en la entidad.",
        aforosFiltrosSanitarios: "El gobernador de Michoacan alertó que un regreso a clases presenciales en primarias y secundarias, aumentará la movilidad de manera muy considerable, y el riesgo de las familias. Ello, describió, por los traslados y contacto que implica llevar, entregar y recoger a los hijos e hijas en las escuelas.",
        referencias: [
            "https://www.eluniversal.com.mx/estados/en-michoacan-no-hay-condiciones-para-regreso-clases-presenciales-aureoles",
            "https://www.lavozdemichoacan.com.mx/michoacan/educacion/ciclo-escolar-2021-2022-inicia-a-la-distancia-en-educacion-basica-confirma-la-see/"
        ],
        color: StateNoBack2School
    },
    {
        id: "MX-VER",
        name: "Veracruz de Ignacio de la Llave",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "SP",
        alumnosVacunados: "NO",
        nombreEstrategia: "Regreso a clases presenciales",
        actividadesPresenciales: "Regrreso a clases presenciales, el 30 de agosto en Veracruz; será gradual: Zenyazen <br><br> El Gobernador consideró necesario que los estudiantes retomen su actividad en las escuelas y por eso el regreso a clases en el estado de Veracruz se dará como lo establece el calendario de la Secretaría de Educación Pública (finales de agosto). En un cambio de opinión de lo que venía sosteniendo en cuanto al retorno a las aulas en la entidad, el Gobernador manifestó categórico que la educación está federalizada; de ahí que será la autoridad educativa federal la que determine cuándo se dará el regreso a la actividad presencial escolar.",
        aforosFiltrosSanitarios: "Entrega de kits de limpieza en todos los planteles <br><br> Acorde al semáforo epidemiológico, aplica SEV estrategias a distancia<br><br> El 24 de junio regresaron a las aulas, al respecto, se cuenta con 682 estrategias por sistema en los modelos presencial, mixto y virtual. La Secretaría de Educación estatal destacó que esta planeación incluye el acuerdo voluntario de la comunidad escolar, para lo que padres y madres recibirán una carta compromiso sobre el cuidado de la salud de sus hijos. <br><br> 1.- Todas las escuelas ubicadas en municipios con Semáforo en color amarillo o naranja, darán atención únicamente en la modalidad a distancia.<br> 2.- En los municipios que se mantenga el color verde del semáforo epidemiológico local, las instituciones podrán continuar según lo programado y decidido por cada centro escolar.<br><br> El personal del plantel educativo podrá asistir a sus escuelas si así lo acuerdan a realizar las tareas pertinentes con o sin estudiantes de acuerdo a los puntos 1 y 2.",
        referencias: [
            "https://www.sev.gob.mx/v1/noticias/leer/2354/",
            "https://www.diariodexalapa.com.mx/local/si-habra-clases-presenciales-pero-no-obligatorio-dijo-el-titular-de-la-sev-zenyazen-escobar-garcia-7029291.html",
            "https://www.diarioelmundo.com.mx/index.php/2021/07/16/en-agosto-regreso-a-clases-en-veracruz/",
            "https://www.milenio.com/estados/regreso-clases-presenciales-veracruz-grupos-reducidos",
            "https://www.milenio.com/estados/regreso-clases-veracruz-debera-escalonado-parcial",
            "https://imagendeveracruz.mx/estado/regreso-a-clases-presenciales-el-30-de-agosto-en-veracruz-sera-gradual-zenyazen/50116095"
        ],
        color: StateBack2School
    },
    {
        id: "MX-PUE",
        name: "Puebla",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de Agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "95",
        alumnosVacunados: "NO",
        nombreEstrategia: "Modelo Educativo Híbrido en el Estado de Puebla Educación Básica y Media Superior Ciclo Escolar 2021-2022",
        actividadesPresenciales: "Para el regreso a clases será prioridad que las y los maestros estén vacunados: Lozano <ol><li>La educación es un derecho humano que debe garantizarse en todo momento, principalmente en tiempos de crisis, por la importancia que tienen los procesos de sociabilización y humanización, el aprendizaje se convierte en un instrumento de sobrevivencia.</li> <li>Se establece que el servicio público educativo se brindará de forma presencial responsable y ordenada con base en los términos que disponga las autoridades sanitarias, el acuerdo nacional reafirma la ruta trazada en Puebla.</li> <li>El regreso presencial será con carácter voluntario habiendo de por medio una carta compromiso de asistencia voluntaria y corresponsabilidad. <li>La educación debe ser considerada una actividad esencial y por lo tanto requiere la participación presencial de todo el personal para atender a los alumnos y garantizar el derecho a la educación. <li>El modelo híbrido será el sistema de trabajo que adoptarán en el siguiente ciclo escolar 21-22 <li>Las faenas continúan de forma sistemática, del 11 al 13 de agosto participaron 10 mil 817 escuelas que representan el 90% en las faenas escolares de limpieza y desinfección, por su parte el CAPCEE avanza en la intervención de las 480 escuelas vandalizadas. <li>El taller intensivo de capacitación a realizarse del 16 al 20 de agosto podrá llevarse a cabo de manera presencial y a distancia. <li>El Consejo Técnico programado del 23 al 27 de agosto será presencial.</li> <li>Se instrumentará el programa “Por una vida sana, Puebla te cuida” entre la Secretaría de Salud y la Secretaría Educación, el cual permitirá identificar situaciones de vulnerabilidad en los alumnos y así proteger los manteniéndose en la modalidad a distancia en caso de tener alguna comorbilidad.</li> <li>Los maestros rezagados en el programa de vacunación, así como los de nuevo ingreso serán atendidos por la Secretaría de Salud para su vacunación respectiva. <li>Se debe garantizar el derecho a la accesibilidad. Las cuotas estarán mediadas por las asambleas respectivas donde se tomen acuerdos en consenso y en armonía; si existe alguna queja llamar al 222 22938 20 o terminación 25. <li>Ya se están distribuyendo los más de 9.7 millones de libros de texto gratuitos. Representan un recurso didáctico importante que se suma a otros materiales que permiten el acompañamiento del modelo híbrido, como son guías Puebla en casa, aprende en casa, entre otros, la educación a distancia no es sinónimo de internet. <li>Se implementarán 10 acciones clave para promover incubar la seguridad, salud e higiene de la comunidad escolar además de emitirse una guía para el regreso presencial responsable y ordenado. <li>Las instituciones educativas dependientes de la subsecretaría de educación media superior y superior se sujetarán a las disposiciones que en materia educativa y de salud se meta tienen sus propios calendarios <li>Promover el apoyo socioemocional para los educandos y docentes en colaboración con el sector salud. <li>Al inicio del ciclo escolar 2021-2022 se realizaron periodo de valoración diagnóstica de los alumnos y reforzamiento de aprendizajes no sólo de matemáticas y lectura la formación integral, exige diagnósticos y procesos de compensación también integrales como lo establece la nueva escuela mexicana. <li>Se flexibilice al máximo las disposiciones que faciliten el tránsito escolar y permita la inscripción y reinscripción de los alumnos en los tres niveles educativos con objeto de asegurar su permanencia y regreso del sistema educativo nacional la adaptabilidad como dimensión clave del derecho a la educación. <li>La solidaridad y organización es la clave para evitar el riesgo de contagio y atemorización. <li>La escuela y la familia deben convertirse en centros de protección emocional y de contagios en diálogo corresponsable permanente <li> Se invita a mantener una actitud crítica constructiva frente al proceso de regreso presencia la clase, evitando reduccionismo, postura sin fundamentos y de mala fe.</li></ol>",
        aforosFiltrosSanitarios: "Las escuelas multigrado o de organización completa que puedan atender a toda su población de manera presencial todos los días, deben garantizar la sana distancia, así como la implementación del plan de atención (nivelación) de forma integrada a las jornadas académicas. Aquellas escuelas con mayor matrícula dividirán aforos cuya distribución puede ser por apellidos.",
        referencias: [
            "http://sep.puebla.gob.mx/index.php/component/k2/prueba-2-2-2",
            "https://www.eluniversalpuebla.com.mx/educacion/95-de-maestros-en-puebla-ya-esta-vacunado-contra-covid",
            "https://www.milenio.com/politica/comunidad/clases-presenciales-en-puebla-seran-voluntarias-sep",
            "https://www.poblanerias.com/2021/08/educacion-presentan-20-puntos-clave-para-regreso-a-clases-presenciales-en-puebla/"
        ],
        color: StateBack2School
    },
    {
        id: "MX-TLA",
        name: "Tlaxcala",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "SP",
        alumnosVacunados: "NO",
        nombreEstrategia: "Sin información",
        actividadesPresenciales: "En medios se ha difundido que la incorporación presencial será una vez que el semáforo epidemiológico este en verde.",
        aforosFiltrosSanitarios: "Una vez que el semáforo epidemiológico dé luz verde, estás son las medidas que se tomarán para el regreso a clases presenciales en Tlaxcala: <ol> <li>Conformación de Comités Participativos de Salud.</li> <li>Dotar a las escuelas con insumos de higiene como agua y jabón.</li> <li>Salvaguardar a los docentes en grupos de riesgo.</li> <li>Uso obligatorio de cubrebocas o pañuelo, dentro y fuera de las escuelas, públicas y particulares.</li> <li>Mantener distancia en entradas y salidas de los planteles.</li> <li>Programar recesos escalonados.</li> <li>Maximizar el uso de espacios abiertos.</li> <li>Suspender todo tipo de ceremonias o reuniones.</li> <li>Brindar apoyo socioemocional para alumnos y docentes.</li> </ol>Una comisión de la Secretaría de Educación Pública (SEPE) y el SNTE trabajando para la realización de una logística y la atención en el regreso a clases presenciales. Universidad Autónoma de Tlaxcala (UATx) reconsideraría el regreso a las clases.",
        referencias: [
            "https://www.milenio.com/politica/comunidad/duda-regreso-clases-presenciales-tlaxcala-tercer-ola-covid",
            "https://www.milenio.com/politica/comunidad/duda-regreso-clases-presenciales-tlaxcala-tercer-ola-covid ",
            "https://www.lajornadadeoriente.com.mx/tlaxcala/clases-presenciales-sepe-a-sep/",
            "https://www.elsoldetlaxcala.com.mx/local/alistan-preparatorias-regreso-a-las-aulas-juan-pablo-arroyo-6924698.html",
            "https://kidstudia.com/guia/todo-sobre-el-regreso-a-clases-en-mexico/tlaxcala/#modalidad+del+regreso+a+clases+en+tlaxcala",
            "https://www.milenio.com/politica/comunidad/de-manera-responsable-buscan-que-sea-el-regreso-a-clases-en-tlaxcala",
            "https://amqueretaro.com/mexico/2021/07/02/revisa-sep-el-regreso-a-clases-en-tlaxcala/"
        ],
        color: StateBack2School
    },
    {
        id: "MX-MEX",
        name: "Estado de México",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "Sin información",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "SP",
        alumnosVacunados: "NO",
        nombreEstrategia: "Plan de Reapertura de regreso a clases 2020*",
        actividadesPresenciales: "El retorno presencial a las aulas será voluntario, escalonado y tomando todas las medidas preventivas. Desde la semana pasada el personal docente regresó a laboral formalmente para organizar el proceso de inscripción que arrancará este lunes. La mayoría de las escuelas retomó comunicación de manera virtual con los padres de familia.",
        aforosFiltrosSanitarios: "Se emite la Guía de Orientación para la Reapertura de las Escuelas ante COVID-19, en la cual indica la implementación del  Comité Participativo de Salud Escolar. <br><br> Aplicación de protocolos y filtros de corresponsabilidad en casa, a la entrada del plantel y en el salón de clases",
        referencias: [
            "https://subeducacionbasica.edomex.gob.mx/sites/subeducacionbasica.edomex.gob.mx/files/files/SEBComunicado07062021.pdfhttps://www.unionedomex.mx/articulo/2021/07/08/educacion/regreso-clases-edomex-2021-2022-conoce-las-actividades-previas",
            "https://www.milenio.com/ciencia-y-salud/regreso-a-clases-sera-presencial-y-a-distancia-seduc",
            "http://148.215.3.96:8283/imgcovid/PLAN%20REAPERTURA%2019%20de%20Mayo.pdf",
            "https://www.eluniversal.com.mx/metropoli/edomex/sin-definir-si-el-ciclo-escolar-2021-2022-iniciara-de-forma-presencial-en-edomex",
            "https://salud.edomex.gob.mx/isem/ac_boletines_informativos",
            "https://tolucalabellacd.com/2021/08/06/educacion/regreso-a-clases-edomex-hibrida-2021-2021-040993/",
            "https://www.jornada.com.mx/notas/2021/08/12/estados/seem-anuncia-regreso-a-clases-en-modalidad-hibrida/"
        ],
        color: StateBack2School
    },
    {
        id: "MX-CMX",
        name: "Ciudad de México",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "100",
        alumnosVacunados: "SI",
        nombreEstrategia: "Sin información",
        actividadesPresenciales: "La Jefa de Gobierno, Claudia Sheinbaum, dijo que su gobierno sigue trabajando en equipo con la Secretaría de Educación Pública (SEP) y las 16 alcaldías para la limpieza y mantenimiento de las escuelas ante el pronto regreso a las clases presenciales. <br><br> Debido al éxito del programa “La escuela es nuestra, mejor escuela”, mediante el cual padres y madres de familia reciben recursos por parte del Gobierno capitalino para administrarlos y darle mantenimiento menor a las escuelas, éste se ampliará en enero.<br><br> Será la CDMX quien se encargue de proveer gel antibacterial y cubrebocas a los centros educativas en la medida que los soliciten.  El gobierno de la Ciudad de México asegura que no hay marcha atrás en la reapertura de escuelas de nivel básico, para ello, ya prepara un dispositivo de atención a conflictos políticos y sociales, así como un plan de limpieza y vigilancia. El objetivo será coordinar apoyos con las alcaldías, la secretaria de obras y servicios, abasto de agua potable y temas de protección civil.<br><br> La Universidad Nacional Autónoma de México (UNAM), y el Instituto Politécnico Nacional (IPN), han decidió seguir con clases a distancia. 9 y 16 de agosto respectivamente iniciaron clases en esta modalidad.",
        aforosFiltrosSanitarios: "La UNAM informó que, aunque se esté en semáforo verde durante tres semanas consecutivas, en tanto el alumnado no haya sido vacunado, la asistencia presencial será voluntaria para actividades académicas determinadas por los consejos técnicos. <br><br> El IPN determinó que las actividades de este semestre se llevarán a cabo predominantemente de manera no presencial y que los profesores, los alumnos y personal de apoyo y asistencia a la educación, podrán hacer uso de las instalaciones, voluntariamente, y bajo el consentimiento por escrito de los participantes involucrados.La Universidad Autónoma de México (UAM) ya retomó clases a distancia.<br><br> La UNAM: Las facultades solo podrán pedir la asistencia de los alumnos una vez que la entidad federativa haya permanecido tres semanas consecutivas con el semáforo epidemiológico en color verde. Ya que eso suceda, la incorporación será en grupos reducidos y de manera escalonada. Mientras el alumnado no haya sido vacunado, la asistencia será voluntaria, además, en el eventual retorno presencial se privilegiará a las actividades de bienvenida y reconocimiento de nuestras instalaciones para las generaciones que ingresaron en agosto del 2020 y la de nuevo ingreso del presente año, siempre respetando los límites establecidos del 30% de la matrícula escolar en los espacios educativos.",
        referencias: [
            "https://www.infobae.com/america/mexico/2021/08/17/regreso-a-clases-en-cdmx-sheinbaum-aseguro-que-todas-las-escuelas-estan-en-buenas-condiciones/",
            "https://politica.expansion.mx/cdmx/2021/08/17/alista-cdmx-operativo-de-limpieza-y-seguridad-para-regreso-a-clases-presenciales",
            "https://heraldodemexico.com.mx/nacional/2021/8/17/regreso-clases-fechas-importantes-en-calendario-escolar-de-sep-unam-ipn-326680.html"

        ],
        color: StateBack2School
    },
    {
        id: "MX-MOR",
        name: "Morelos",
        regresoActividadesPresenciales: "Por definir",
        fechaRetorno: "Sin informacón",
        tipoModelo: "A distancia",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "SP",
        alumnosVacunados: "NO",
        nombreEstrategia: "Regreso a clases",
        actividadesPresenciales: "Se estan coordinando con la Secretaría de Gobernación que realiza con gobernadores, la Secretaría de Salud y de Educación de los estados y se esta analizando todos los escenarios, además mecniona que será relevante la opinión de los padres de familia. <br><br> El periodo de inscripciones y reinscripciones será del 16 de agosto al 10 de septiembre, mientras que las sesiones del Comité Participativo de Salud Escolar, así como las jornadas de limpieza en escuelas serán del 11 al 13 de agosto de 2021. con el fin de estar listo para el inicio de ciclo",
        aforosFiltrosSanitarios: "Terminó en julio el Programa Piloto de Regreso a Clases Presenciales Seguras, voluntarias, escalonadas y graduales sin incidente alguno para todos los que participaron en este proyecto: alumnos, padres de familia, docentes, administrativos y personal de apoyo",
        referencias: [
            "https://morelos.gob.mx/?q=prensa/nota/comunicado-de-prensa-secretaria-de-educacion-3",
            "https://elqueretano.info/trafico/presentan-calendario-escolar-2021-2022-para-morelos/",
            "https://mexico.as.com/mexico/2021/07/30/actualidad/1627609664_758632.html",
            "https://www.milenio.com/estados/morelos-analiza-posible-regreso-a-clases-presenciales",
            "https://mexico.as.com/mexico/2021/07/30/actualidad/1627609664_758632.html"            

        ],
        color: StateInDefinition
    },
    {
        id: "MX-GRO",
        name: "Guerrero",
        regresoActividadesPresenciales: "Por definir",
        fechaRetorno: "31 de agosto 2021/03 de septiembre de 2021",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "64.3",
        alumnosVacunados: "NO",
        nombreEstrategia: "De regreso a la escuela",
        actividadesPresenciales: "Se regresará a clases presenciales solo 17 de 81 municipios donde existe el menor número de contagios, que son un total de 877 escuelas de nivel Básico, Media Superior y Superior  se pueden abrir , acercando un total de 17mil  485 alumnos  puedan  regresar  a la normalidad en esos lugares. También se indicó ''dónde no haya acuerdo entre padres de familia y maestros simplemente no se hará el regreso a clases''. <br><br> El CETEG informó que el regreso a clases presenciales se reanudarán hasta que haya semáforo verde, el 100 por ciento del magisterio vacunado y exista un consenso con los padres de familia. <br><br> El próximo 31 de agosto arrancará de manera presencial el ciclo escolar 2021-2022 en casi 12 mil escuelas de Guerrero. regreso a clases será de manera gradual y escalonada.<br><br> Sin embargo, en notas recientes  se refirió que de no haber un cambio en el semáforo epidemiológico a color verde, habría posibilidad de estar frente a grupo, caso contrario, tendrán que seguir con el modelo a distancia.<br><br>Miembros de la Coordinación Estatal de Trabajadores de la educación en Guerrero (CETEG) informó que se realizará consulta a los padres de familia respecto al regreso a clases presenciales , el próximo 30 de agosto, a pesar de la pandemia.",
        aforosFiltrosSanitarios: "Se considerarán tres factores: que el estado se mantenga permanentemente en el color verde en el Semáforo de Riesgo Epidemiológico; que las escuelas cuenten con un protocolo sanitario, un plan escolar que refleje la organización administrativa y académica del plantel, y el fortalecimiento académico a través de una guía estatal para el regreso a clases y el cronograma de actividades para la apertura de escuelas en todos los niveles. <br><br> Por otro lado, los trabajadores de la educación hayan sido vacunados y que el semáforo epidemiológico esté en verde.",
        referencias: [
            "https://snte.org.mx/seccion14/snte-condiciona-el-regreso-a-clases-presenciales-en-guerrero/",
            "https://snte.org.mx/seccion14/con-seguridad-volvemos-a-la-escuela-snte/",
            "https://www.milenio.com/estados/guerrero-regreso-clases-presenciales-semaforo-verde",
            "https://www.elfinanciero.com.mx/estados/2021/08/15/solo-en-17-de-81-municipios-guerrerenses-con-bajo-covid-se-volvera-a-clases-presenciales/",
            "https://guerrero.quadratin.com.mx/guerrero-tendra-regreso-a-clases-presenciales-voluntario-astudillo/"
            
        ],
        color: StateInDefinition
    },
    {
        id: "MX-OAX",
        name: "Oaxaca",
        regresoActividadesPresenciales: "Por definir",
        fechaRetorno: "30 agosto",
        tipoModelo: "A distancia",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "Sin Definir",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "100",
        alumnosVacunados: "NO",
        nombreEstrategia: "No disponible",
        actividadesPresenciales: "El director general del Instituto Estatal de Educación Pública de Oaxaca (IEEPO), Francisco Ángel Villarreal, afirmó que el regreso a clases en el estado deberá ser consensuado con los padres de familia, los profesores y las autoridades municipales, para lo que se realizarán análisis escuela por escuela para saber la viabilidad del retorno a las aulas. ''No regresaremos de un solo paso a la escuela y seguramente este retorno se dará de manera híbrida, es decir, presencialmente y también a distancia''. Se respetarán los usos y costumbres de los pueblos originarios.",
        aforosFiltrosSanitarios: "En esta fecha se dice que de darse el regreso a las aulas: ''En este regreso no asistirán todos los niños al mismo tiempo, sino irán de acuerdo con la organización de las escuelas, como en orden alfabético, y también deberán ir de manera mixta...''.  Se está trabajando con la Secretaría de Educación Pública (SEP) para el protocolo sanitario que regirá los planteles en este nuevo ciclo escolar, donde habrán filtros sanitarios en cada escuela, además de que los menores y maestros tendrán que usar de forma permanente el cubrebocas.",
        referencias: [
            "https://www.milenio.com/estados/oaxaca-regreso-clases-debera-acordado-padres-familia",
        ],
        color: StateInDefinition
    },
    {
        id: "MX-TAB",
        name: "Tabasco",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "SP",
        alumnosVacunados: "NO",
        nombreEstrategia: "A la escuela. Seguro Regreso",
        actividadesPresenciales: "La secretaria de Educación precisó que serán en total 3 mil 800 planteles educativos de Preescolar, Primaria y Secundaria, que atienden a una población de 532 mil educandos, los que serán rehabilitados durante los meses de julio y agosto, como parte de los preparativos ante el posible regreso a clases presenciales para el ciclo escolar 2021-2022, siempre y cuando el semáforo epidemiológico este en color verde. <br><br> En totalidad, escalonado, hibrido, porcentual de niñas, niños y jovenes escalonado, presencial, híbrido o una mezcla de ambos (implementación de un protocolo Alemán) <br><br> El 20.8 por ciento de alumnos del nivel básico que pertenecen a los ocho municipios donde existen menos contagios y casos activos de COVID-19, estarían regresando a clases presenciales el próximo 30 de agosto, mientras que el 79.2 por ciento seguirá en casa de manera virtual. REGRESARÍAN A LAS AULAS 8 MUNICIPIOS, EL 79.2% SEGUIRÁ CON CLASES EN LÍNEA Unos 112,598 estudiantes de nivel básico que viven en comunidades con bajo contagio y activos de Covid, volverían a escuelas; Setab confirmó que regreso será gradual, virtual y presencial.",
        aforosFiltrosSanitarios: "Desarrollo de materiales informativos y protocolos sanitarios.",
        referencias: [
            "https://heraldodemexico.com.mx/nacional/2021/7/22/tabasco-no-volvera-clases-presenciales-en-agosto-analizan-sea-en-septiembre-318653.html",
            "https://www.elheraldodetabasco.com.mx/local/tabasco-si-regresa-a-clases-presenciales-en-septiembre-7015316.html",
            "https://www.tabascohoy.com/regresarian-a-las-aulas-20-de-estudiantes-confirma-educacion-ciclo-escolar-21-22/?__cf_chl_jschl_tk__=pmd_e7a564a81a81bf5623d59322ed379ea1ee8218d5-1628862700-0-gqNtZGzNAjijcnBszQqi"
        ],
        color: StateBack2School
    },
    {
        id: "MX-CHP",
        name: "Chiapas",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "100",
        alumnosVacunados: "NO",
        nombreEstrategia: "No disponibles",
        actividadesPresenciales: "Vocero de la Sección VII del Sindicato Nacional de Trabajadores de la Educación y de la Coordinadora Nacional de Trabajadores de la Educación dijo en mitin que no se regresará a clases presenciales a partir de este 30 de agosto en que iniciaría el ciclo escolar 2020-2021.",
        aforosFiltrosSanitarios: "Medidas para el Regreso a Clases: <ol><li>Uso general de cubrebocas obligatorio. <li> Sana distancia en actividades al interior de los planteles, así como en las entradas y salidas. </li> <li> Recreos escolares escalonados</li> <li> Lugares fijos alternados.</li> <li> Asistencia alternada por apellido.</li> <li> Considera que tus hijos deberán acudir a clases sin fiebre o temperatura mayor a 37°. Estando dentro de la escuela, deberán lavarse frecuentemente las manos o utilizar gel antibacterial y los grupos no podrán ser mayor a 25 alumnos</li></ol>",
        referencias: [
            "https://www.elheraldodechiapas.com.mx/local/cnte-no-regresara-a-clases-de-manera-presencial-javier-carrasco-7077824.html"
        ],
        color: StateBack2School
    },  
    {
        id: "MX-CAM",
        name: "Campeche",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de mayo",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "88.8",
        alumnosVacunados: "NO",
        nombreEstrategia: "Aprendamos en familia desde casa",
        actividadesPresenciales: "El 10 de agosto se anunció de manera oficial el regreso a clases que será de forma gradual el próximo 30 de agosto. Será decisión de los padres y madres de familia enviar o no a sus hijos. Se acordó que regresarán un total de 904 escuelas de nivel preescolar, primaria y secundaria incluyendo los servicios de la Conafe. <br> <br> Es uno de los estados que implementó la prueba piloto de clases presenciales antes de terminar el ciclo escolar pasado, misma que cerró por el aumento de contagios de covid-19 en la entidad. Por lo que autoridades educativas consideran que no existen las condiciones necesarias para garantizar un regreso seguro a los planteles educativos.<br> <br> El regreso a clases presenciales será cuando el semáforo esté en verde debido a la falta de vacunación de los estudiantes.",
        aforosFiltrosSanitarios: "Cuando se tengan las condiciones necesarias para el regreso a los planteles educativos, se optará por un modelo híbrido de clases, con asistencia alternada, grupos reducidos, así como medidas sanitarias. Algunas de ellas son las siguientes: <br><br>  Uso correcto de cubrebocas obligatorio. <br> Sana distancia dentro de los salones de clases y en todas las actividades al interior de los planteles.<br> Colocación de filtros sanitarios al entrar a la escuela y a la entrada del salón<br> Recuerda que el regreso a clases presenciales es voluntario, si decides enviar a tus hijos a la escuela debes firmar una carta responsiva en donde declaras que tu hijo asiste voluntariamente a la escuela y sin síntomas relacionados al covid-19.",
        referencias: [
            "https://www.poresto.net/campeche/2021/7/15/regreso-clases-en-campeche-sera-en-semaforo-verde-seduc-263676.html",
            "http://campechehoy.mx/2021/07/31/en-campeche-sera-dificil-el-regreso-a-clases-presenciales/",
            "https://educacioncampeche.gob.mx/aprendamosencasa",
            "https://www.lajornadamaya.mx/campeche/177646/el-9-de-agosto-decidira-seduc-si-hay-clases-presenciales-en-campeche",
            "https://www.gob.mx/sep/es/articulos/boletin-sep-no-102-concluye-exitosamente-el-proceso-de-vacunacion-a-personal-docente-en-30-entidades-del-pais?idiom=es",
            "https://www.poresto.net/campeche/2021/8/10/regreso-clases-presenciales-en-campeche-sera-el-30-de-agosto-seduc-271707.html"
        ],
        color: StateBack2School
    },
    {
        id: "MX-YUC",
        name: "Yucatán",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "SP",
        alumnosVacunados: "NO",
        nombreEstrategia: "Regreso seguro a clases",
        actividadesPresenciales: "El Gobierno de Yucatán mantiene su postura del regreso a clases, en forma presencial; para el 30 de agosto próximo. Sin embargo, éste será voluntario, opcional y mixto. Estrategia estatal de Regreso Seguro a Clases, elaborada con base en los lineamientos que emitió la Federación y la participación de la Mesa Central conformada por representantes de seis Secretarías, entre ellas la de Educación y Salud, el Congreso del Estado, universidades, sindicatos, cámaras empresariales, la Comisión estatal de Derechos Humanos (Codhey), padres de familia, estudiantes y colegios.",
        aforosFiltrosSanitarios: "Se considera un retorno voluntario, opcional y mixto. <br><br>Secretaría de Educación considera realizar jornadas de limpieza en las escuelas y sesiones de los Comités Participativos de Salud Escolar; que se desarrollará del 11 al 13 de agosto venideros, como una medida preventiva ante la pandemia mundial por Covid-19.",
        referencias: [
            "http://www.educacion.yucatan.gob.mx/boletines/index",
            "https://www.yucatan.com.mx/merida/yucatan-tendra-un-regreso-a-clases-presencial-en-agosto",
            "https://www.lajornadamaya.mx/yucatan/176643/los-ninos-deben-regresar-a-clases-presenciales-lo-mas-pronto-posible-vila-dosal",
            "https://www.lajornadamaya.mx/yucatan/175807/regreso-a-clases-en-yucatan-sera-el-30-de-agosto"  
        ],
        color: StateBack2School
    },
    {
        id: "MX-ROO",
        name: "Quintana Roo",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 agosto 2021",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "NO",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "75.6",
        alumnosVacunados: "NO",
        nombreEstrategia: "Plan para Regreso a Clases Seguro",
        actividadesPresenciales: "Los alumnos en Quintana Roo no regresarían a las clases presenciales para el 30 de agosto, afirmó Sergio Acosta Manzanero. <br><br>El presidente de la Asociación Estatal de Padres de Familia, afirmó que las escuelas no estarán listas para el inicio del ciclo escolar 2021-2022.",
        aforosFiltrosSanitarios: "Cuatro pasos: <br> 1) Estar en semáforo amarillo tanto federal como estatal para abrir los Centros Comunitarios de Aprendizaje donde se ofrece asesoría; <br> 2) Rehabilitación de escuelas (infraestructura, limpieza y orden); <br> 3) Aplicación de un diagnóstico académico. <br> 4) Y que cada institución educativa entregue o actualice su plan de regreso a clases, cumpliendo con los protocolos sanitarios.Prueba para diagnosticar el rezago entre los alumnos tras un año y tres meses de clases en línea. Los padres de familia los encargados de aplicar la prueba, que consistirá en un grupo de preguntas de lo que tendrían que conocer según su grado de escolaridad.",
        referencias: [
            "https://qroo.gob.mx/seq/detallan-acciones-de-la-seq-para-el-regreso-clases-destacando-cuatro-importantes-temas",
            "https://www.sdpnoticias.com/estados/quintana-roo/quintana-roo-descartan-regreso-a-clases-presenciales/"

        ],
        color: StateBack2School
    },
];

var DataStates_v7 = [
    {
        id: "MX-BCS",
        name: "Baja California Sur",
        regresoActividadesPresenciales: "Por definir",
        fechaRetorno: "Por definir",
        tipoModelo: "A distancia",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "78.8",
        alumnosVacunados: "Sin Definir",
        nombreEstrategia: "No disponible",
        actividadesPresenciales: "Las autoridades educativas de Baja California Sur se han pronunciado al regreso a clases presenciales únicamente cuando el semáforo sanitario se encuentre en color verde. Por lo que aún no se tiene una fecha programada para el regreso presencial.<br><br> La presencialidad será únicamente cuando el semáforo esté en verde.",
        aforosFiltrosSanitarios: "Se capacitaron a los comités participativos de salud escolar, en cada escuela debe de existir un comité de esta naturaleza que se encargará de revisar las condiciones en las cuales se encuentra la escuela, se tendrán algunos filtros y el primero desde luego será la casa, será en el hogar donde se revise la condición de su hijo o hija y tener en claro cuáles son los síntomas COVID, el segundo filtro al entrar a la escuela y el tercero previo a entrar al salón de clases.",
        referencias: [
            "https://kidstudia.com/guia/todo-sobre-el-regreso-a-clases-en-mexico/baja-california-sur/",
            "https://www.bcsnoticias.mx/confirmado-baja-california-sur-ya-se-prepara-para-regreso-a-las-aulas-en-agosto-sep/",
            "https://www.elsudcaliforniano.com.mx/local/regreso-a-clases-solo-sera-en-alerta-verde-en-bcs-6987936.html",
            "http://www.bcs.gob.mx/noticias/concluyo-vacunacion-del-personal-educativo-en-bcs/#:~:text=CONCLUY%C3%93%20VACUNACI%C3%93N%20DEL%20PERSONAL%20EDUCATIVO%20EN%20BCS,-La%20Paz%20B.C.S.&text=Con%20la%20aplicaci%C3%B3n%20de%2017,educativo%20de%20Baja%20California%20Sur",
            "https://www.animalpolitico.com/2021/08/michoacan-hidalgo-rechazan-regreso-clases-presenciales-estados-siguen-evaluando/"
        ],
        color: StateInDefinition
    },
    {
        id: "MX-BCN",
        name: "Baja California Norte",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "76.30",
        alumnosVacunados: "NO",
        nombreEstrategia: "Regreso Seguro a Clases Presenciales",
        actividadesPresenciales: "Se preveé que 24 escuelas vuelvan a clases presenciales durante la primera semana del ciclo 2021-2022 (Lunes 30 de agosto) <br><br>La asistencia será voluntaria, gradual y escalonada. Durante septiembre, los planteles se duplicarán semanalmente, de acuerdo a la disposición de escuelas y la autorización de padres de familia. las clases serán en un modelo híbrido entre presenciales y a distancia, ya que los alumnos seleccionados asistirán tres y dos días de la semana, de manera alternada, a partir de la primera letra del apellido.   el regreso a clases será en 24 escuelas (cuatro por municipio y dos públicas y dos privadas), en la segunda semana serán 48; en la siguiente 72 y después 96, de acuerdo a la evolución y monitoreo del manejo de salud. Serán los padres de familia los que aprueben el regreso de clases presenciales de sus hijos.",
        aforosFiltrosSanitarios: "El regreso a las escuelas de manera presencial, se realizará de forma gradual y segura, incluyendo la realización de jornadas de limpieza previas al ingreso de los estudiantes. las escuelas de cada municipio o poblado serán divididas en áreas que incluyan un centro de salud que se encargará de dar atención a esa región en caso de ser necesario.  Los padres de familia y las escuelas deberán coordinar filtros para evitar la propagación de la enfermedad. en caso de que se detecte un caso sospechoso, el grupo será suspendido por 14 días, mientras que si se confirma un caso de COVID-19 se suspenderán las clases en todo el plantel. Las aulas tendrán un máximo de 10 personas.",
        referencias: [
            "https://www.sandiegouniontribune.com/en-espanol/noticias/bc/articulo/2021-07-26/baja-california-anuncia-regreso-a-clases-presenciales-semaforo-epidemiologico-regional-permanece-verde",
            "http://www.educacionbc.edu.mx/regresoseguro/",
            "https://www.jornada.com.mx/notas/2021/07/26/estados/planean-regreso-a-clases-gradual-en-baja-california-a-partir-de-agosto/#:~:text=El%20gobierno%20de%20Baja%20California,forma%20gradual%2C%20escalonada%20y%20segura.",
            "https://www.bcsnoticias.mx/incierto-el-regreso-a-clases-en-bcs-acercandose-la-fecha-se-tomaran-decisiones-salud/",
            "https://www.gob.mx/sep/es/articulos/boletin-sep-no-102-concluye-exitosamente-el-proceso-de-vacunacion-a-personal-docente-en-30-entidades-del-pais?idiom=es",
            "https://www.poresto.net/campeche/2021/8/15/regreso-clases-en-campeche-conoce-las-fechas-para-inscripcion-del-ciclo-escolar-2021-2022-272491.html"
        ],
        color: StateBack2School
    },
    {
        id: "MX-SON",
        name: "Sonora",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "87",
        alumnosVacunados: "NO",
        nombreEstrategia: "Retorno Seguro, estrategias para el regreso a clases presenciales del ciclo 2021-2022",
        actividadesPresenciales: "A partir del 30 de agosto, los estudiantes en Sonora regresarán a las aulas conforme a las disposiciones federales y condiciones sanitarias para ver la gradualidad del retorno. <br><br>Regreso a clases presenciales debe darse con una estrategia conjunta para hacerlo de la forma más segura: Gobernadora Pavlovich",
        aforosFiltrosSanitarios: "<ol><li> Se invita a los padres de familia, a maestros, a las autoridades educativas a que se integren al Comité́ Participativo de Salud en su escuela.</li> <li>Establecer el filtro de salud en casa, y participar en los filtros de la escuela y del salón de clases, para detectar síntomas y tomar las medidas necesarias.</li><li> Lavarse las manos con agua y jabón y/o gel antibacterial.</li><li> Usar cubrebocas sobre nariz y boca, en todo momento.</li><li> Mantener la sana distancia.</li><li> Dar mayor uso a los espacios abiertos.</li><li> Por ahora, no tener ceremonias ni reuniones generales.</li><li> Avisar inmediatamente la presencia o sospecha de casos de COVID-19 en la escuela.</li><li> Inscribirse a los cursos de apoyo socioemocional en línea de SEP-Salud “Retorno Seguro”: climss.imss.gob.mx</li><li>  Al salir de casa, lleva a la escuela la Carta compromiso de corresponsabilidad.</li></ol><br> Ante el aumento de contagios y el registro de estas variantes del coronavirus, la gobernadora Pavlovich instó a seguir con las acciones y programas de prevención, para seguir con las medidas y protocolos sanitarios rigurosos. Salones de clases con buena ventilación.<br><br>La Secretaría de Educación y Cultura y el Instituto Sonorense de Infraestructura Educativa (ISIE) han realizado una valoración de las condiciones de la infraestructura física de los planteles escolares, con el fin de atender a todos los requerimientos apremiantes de los inmuebles.<br><br><ol><li>Pupitres separados al menos metro y medio entre cada uno.</li><li>Máximo 15 alumnos en cada salón.</li><li>Uso de gel antibacterial y lavado frecuente de manos.</li><li>Uso correcto de cubrebocas en todo momento.</li></ol>",
        referencias: [
            "http://www.sec.gob.mx/portal/index.php?op=nota&p=1033",
            "https://kidstudia.com/guia/todo-sobre-el-regreso-a-clases-en-mexico/sonora/#medidas+para+el+regreso+a+clases+en+sonora",
            "https://www.elsoldehermosillo.com.mx/local/es-oficial-alumnos-de-sonora-si-regresaran-a-clases-presenciales-30-de-agosto-sec-gobierno-del-estado-escuelas-7046536.html",
            "https://www.elsoldehermosillo.com.mx/local/es-oficial-alumnos-de-sonora-si-regresaran-a-clases-presenciales-30-de-agosto-sec-gobierno-del-estado-escuelas-7046536.html",
            "http://www.sec.gob.mx/portal/index.php?op=nota&p=1034",
            "https://www.elsoldehermosillo.com.mx/doble-via/salud/el-covid-19-y-los-ninos-esto-es-lo-que-sabemos-antes-de-ir-a-la-escuela-regreso-a-clases-pandemia-7097189.html"
        ],
        color: StateBack2School
    },
    {
        id: "MX-CHH",
        name: "Chihuahua",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "NO",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "95",
        alumnosVacunados: "NO",
        nombreEstrategia: "Estrategia Chihuahua (implementada desde julio)",
        actividadesPresenciales: "Ante el regreso contemplado para el 30 de agosto, el Secretario de Educación de Chihuahua reconoció que no todas las escuelas están preparadas para cumplir con los protocolos de sanidad como el lavado de manos, por lo que se les apoyará con material para que puedan tener las instalaciones adecuadas. Esto implicaría que en estos planteles educativos el regreso a clases presencial pueda retrasarse hasta 15 días. <br><br> Detalló que hay 800 escuelas en todo el estado que tienen algún problema de infraestructura para este regreso a clases presencial, pero que se les apoyará.<br><br> Javier González Mocken (encargado de la Educación en el equipo de la próxima administración), encabezó una reunión del equipo de transición de la mesa de educación con autoridades educativas de Ciudad Juárez con el fin de darle el debido seguimiento al proceso de entrega recepción que le fue encomendado en esta materia. González Mocken, dio a conocer que el principal tema abordado en esta reunión fue el de los preparativos para la semana de inicio de clases.    En la Universidad Autónoma de Chihuahua, el director académico dijo que llevarán un modelo de estudios híbrido con clases en línea y presenciales. Para eso el Comité de Salud y cada una de las facultades analizaron de manera previa cuáles materias regresarían a las clases presenciales, y se definió que fueran las prácticas de laboratorio y talleres las que entrarán en modalidad presencial, así como materias que por su complejidad requieren asesorías presenciales. Es un regreso a clases presenciales voluntario y aplicará para todos los campus que tiene la Universidad en el estado de Chihuahua, pero si por alguna razón el alumno no puede realizar los talleres, actividades de laboratorio o prácticas, ya sea de movilidad u otra circunstancia de fuerza mayor, lo podrá hacer más adelante, sin que esto tenga repercusiones negativas en su historial académico.",
        aforosFiltrosSanitarios: "Respecto a la estrategia para el regreso, se añade que los días lunes y miércoles acudirán a clases presenciales sólo la mitad de cada grupo, por lo que los días martes y jueves, asistirá el otro cincuenta por ciento de los estudiantes. Es por ello que los días viernes, la lección será de manera virtual, aunque podría estarse convocando a clases presenciales a aquellos alumnos que presenten un mayor rezago académico.",
        referencias: [
            "https://www.elsoldeparral.com.mx/local/parral/no-hay-quejas-por-parte-de-docentes-que-se-opongan-al-regreso-a-las-aulas-clases-escuelas-noticias-parral-chihuahua-7099419.html",
            "https://www.elsoldeparral.com.mx/local/parral/de-regreso-a-clases-urbanos-deberan-de-respetar-el-50-del-aforo-permitido-alumnos-clases-noticias-parral-chihuahua-7098762.html",
            "https://www.elheraldodechihuahua.com.mx/local/chihuahua/cobach-listo-para-el-regreso-hibrido-en-septiembre-noticias-de-chihuahua-pandemia-contagios-escuelas-educacion-aprendizaje-7089159.html"

        ],
        color: StateBack2School
    },
    {
        id: "MX-COA",
        name: "Coahuila de Zaragoza",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "23 de agosto",
        tipoModelo: "Híbrido", 
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "85.4",
        alumnosVacunados: "NO",
        nombreEstrategia: "No disponible",
        actividadesPresenciales: "Del 23 de agosto al 03 de septiembre se tiene previsto realizar pruebas diagnósticas y una evaluación para identificar el abandono y rezago escolar.  Del 6 al 30 de septiembre se pretende llevar a cabo un período de recuperación para alumnos en rezago. El regreso a clases presenciales será obligatorio paras los docentes.",
        aforosFiltrosSanitarios: "Previo a la apertura de las escuelas deberá pedírseles a los padres de familia, entre otras cosas, que sus hijos acudan bañados a la escuela y que en caso de notar algún síntoma de enfermedad como fiebre, tos, dolor de garganta o de cabeza no podrán asistir y deberá notificarse a la autoridad del plantel. Las escuelas por su parte deberán prepararse con lo siguiente: Insumos para colocar un filtro a la entrada del plantel, tanto para el personal que trabaja en la escuela como para los alumnos En el filtro deberá haber: • Alcohol en gel con alcohol isopropílico al 70% para la higiene de manos a la entrada al plantel • Termómetro infrarrojo para la toma de temperatura previo a la entrada al plantel. Los salones de clases deberán contar con:<ul><li>• Alcohol en gel con alcohol isopropílico al 70%.</li><li>• Caja de pañuelos desechables.</li><li>• Bote de basura con pedal y tapa.</li><li>• Toallitas desinfectantes para la limpieza del pupitre y/o mesas de trabajo. Las áreas comunes (patios, canchas, áreas de juego) deberán limpiarse como se hace normalmente todos los días, al igual que el resto de las instalaciones, poniendo énfasis en las superficies de mayor contacto como escritorios, mesas, interruptores, picaportes.</li></ul>Todos los baños deberán contar con agua, jabón, sanitas para secarse las manos,papel higiénico y botes de basura con pedal y tapa. Existe la posibilidad detransmisión de SARS-CoV-2 mediante inhalación de la aerosoles fecales por locual se debe poner especial atención en la ventilación de los baños, así como enla utilización estricta de cubreboca al acceder a ellos. Se recomienda educar a losalumnos a bajar la tapa del inodoro antes de jalar la palanca.",
        referencias: [
            "https://www.elheraldodesaltillo.mx/2021/07/27/habra-periodo-de-diagnostico-y-otro-de-recuperacion-al-regreso-a-clases-en-coahuila/",
            "https://www.elheraldodesaltillo.mx/2021/07/05/volverian-el-23-de-agosto-a-clases-presenciales-90-escuelas-en-coahuila/",
            "https://vanguardia.com.mx/articulo/regreso-clases-sera-obligatorio-para-los-profesores-en-coahuila",
            "https://www.saludcoahuila.gob.mx/COVID19/documentos/MANUAL%20REAPERTURA%20ESCOLAR%202021.pdf",
            "https://www.gob.mx/sep/es/articulos/boletin-sep-no-102-concluye-exitosamente-el-proceso-de-vacunacion-a-personal-docente-en-30-entidades-del-pais?idiom=es"
        ],
        color: StateBack2School
    },
    {
        id: "MX-NLE",
        name: "Nuevo León",
        regresoActividadesPresenciales: "Por definir",
        fechaRetorno: "30 de agosto",
        tipoModelo: "A distancia",
        reincorporacionVoluntaria: "Sin Definir",
        reincorporacionGradual: "Sin Definir",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "100",
        alumnosVacunados: "NO",
        nombreEstrategia: "No disponible",
        actividadesPresenciales: "Jaime Rodríguez Calderón, gobernador de Nuevo León anunció el regreso a clases presenciales en el próximo ciclo escolar, sólo para aquellos planteles públicos y privados que cumplan con los protocolos sanitarios. El resto podrá tomar la modalidad a distancia o híbrido.  El gobernador de Nuevo León, Jaime Rodríguez Calderón, informó que el próximo ciclo escolar que inicia el 30 de agosto, el regreso presencial debe ser gradual, con medidas como un determinado número de alumnos por aula, permanecer en el salón no más de 3 horas y también híbrido. Sin embargo, dependerá del semáforo epidemiológico si se avanza o se retrocede. <br><br> Para el regreso a clases habrá tres modalidades: presencial, con un número de alumnos determinado por cada salón; por educación a distancia y también híbrido, es decir, presencial y a distancia.<br><br> Sólo se impartirán clases con horarios acortados, sin recreo ni la operación de las ''tienditas''. <br><br> Priorizando la salud tanto del personal docente y de los alumnos, el siguiente ciclo será voluntario y gradual.",
        aforosFiltrosSanitarios: "No se emitirá un aforo por escuela sino por salón y que, si algún plantel llega a presentar un contagio, éste será suspendido por 14 días teniendo que continuar el ciclo de manera virtual.  El secretario de Salud, Manuel de la O. Cavazos mencionó que debido a que hay maestros que podrían ser vulnerables, también se puede adoptar por un sistema escalonado, donde los grupos van a diferentes horas, o un grupo asiste una semana y otro en la siguiente.",
        referencias: [
            "https://www.elfinanciero.com.mx/monterrey/2021/08/20/avalan-regreso-a-clases-presenciales-en-nuevo-leon-no-habra-recreo-ni-tiendita/",
            "https://www.eleconomista.com.mx/estados/Escuelas-de-educacion-basica-en-NL-tendran-esquema-presencial-solo-con-autorizacion-del-Sistema-de-Salud-Jaime-Rodriguez-20210819-0105.html"

        ],
        color: StateBack2School
    },
    {
        id: "MX-TAM",
        name: "Tamaulipas",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "SP",
        alumnosVacunados: "NO",
        nombreEstrategia: "Jornada Presencial de Regularización",
        actividadesPresenciales: "El Gobierno del Estado de Tamaulipas a través de la Secretaría de Educación publicó la Convocatoria Regreso a Clases Presenciales en municipios en Fase I para escuelas de Educación Básica, con un retorno seguro, gradual y voluntario priorizando la salud física y emocional de la comunidad educativa. <br><br>Expresó que se evaluarán las condiciones de cada región y de esta manera se determinará el retorno a las aulas educativas para el 30 de agosto, existen 651 escuelas en posibilidad de regresar a clases, pues están en municipios con semáforo verde y amarillo; estas escuelas se ubican en municipios de zona rural y periferia de ciudades. Así que por el momento, los municipios grandes como Tampico, Altamira, Ciudad Victoria, Reynosa, Matamoros y Nuevo Laredo no están consideradas, pero dependerá del comportamiento de la pandemia.<br><br>Aunque no se podrá obligar a nadie, por lo que será voluntario (con carta responsiva firmada por padres de los estudiantes) y se respetará la decisión de los padres de familia. <br><br>Educación básica se incorpora el 30 de agosto , Educación Media Superior inicia el 21 de septiembre y Educación superior, dependerá si es semestral o cuatrimestral.<br>Pilotaje para el regreso a clases, el cual cuenta con 2 fases de implementación.",
        aforosFiltrosSanitarios: "Anunció que la firma de una carta responsiva por parte de los padres de familia no será una obligación en Tamaulipas. “Se dio a conocer a nivel nacional que los padres de familia tenían que firmar un documento para poder permitir que sus hijos ingresen a las escuelas, en Tamaulipas eso no es un requisito, no tendrán que firmar absolutamente nada, es totalmente voluntario”, afirmó <br><br>Los municipios que están sujetos a este regreso presencial seguro, progresivo y voluntario deben estar en fase 2 del semáforo epidemiológico.<br><br>Anunció que la firma de una carta responsiva por parte de los padres de familia no será una obligación en Tamaulipas. “Se dio a conocer a nivel nacional que los padres de familia tenían que firmar un documento para poder permitir que sus hijos ingresen a las escuelas, en Tamaulipas eso no es un requisito, no tendrán que firmar absolutamente nada, es totalmente voluntario”, afirmó <br><br> Los municipios que están sujetos a este regreso presencial seguro, progresivo y voluntario deben estar en fase 2 del semáforo epidemiológico.<br><br> Están por arrancar un pilotaje denominado Jornada Presencial de Regularización, fase 2. <br> El regreso a las aulas será en los municipios donde se tenga semáforo verde y amarillo.<br><br> Derivado de la Reunión Interinstitucional llevada a cabo esta semana con la Secretaría de Salud, se establecieron los acuerdos para determinar el Regreso a Clases Presenciales para el Inicio del Ciclo Escolar 2021-2022, en los niveles de Educación Básica, priorizando la salud física y emocional de la comunidad educativa, con acciones de prevención de riesgos ante la contingencia Covid-19. <br>Otro de los acuerdos para el regreso a clases presenciales, es el de suministrar con un kit de insumos para limpieza y sanitización a cada escuela, iniciando con los municipios en semáforo epidemiológico verde y amarillo.",
        referencias: [
            "https://www.tamaulipas.gob.mx/educacion/avisos/planteles-seleccionados-fase-2/",
            "https://www.milenio.com/politica/comunidad/regreso-a-clases-presenciales-en-tamaulipas-sera-voluntario",
            "https://www.tamaulipas.gob.mx/educacion/avisos/planteles-seleccionados-fase-2/",
            "https://www.tamaulipas.gob.mx/educacion/regresoaclasespresenciales-fasepiloto-boletines/",
            "https://kidstudia.com/guia/todo-sobre-el-regreso-a-clases-en-mexico/tamaulipas/",
            "https://www.milenio.com/politica/regreso-clases-vacaciones-ciclo-2021-2022-tamaulipas",
            "https://www.elsoldetampico.com.mx/local/regional/regreso-a-clases-presenciales-en-tamaulipas-sera-voluntario-cabeza-de-vaca-7026334.html",
            "https://www.hoytamaulipas.net/notas/464556/Regresaran-a-clases-presenciales-en-Tamaulipas-el-30-de-agosto.html",
            "https://www.milenio.com/politica/comunidad/regreso-clases-tamaulipas-municipios-semaforo-verde-amarillo",
            "https://www.tamaulipas.gob.mx/educacion/2021/08/acuerdos-para-el-regreso-a-clases-presenciales-en-educacion-basica-2021-2022/",
            "https://www.tamaulipas.gob.mx/2021/08/presenta-gobierno-de-tamaulipas-medidas-para-el-regreso-presencial-a-clases-de-manera-segura-progresiva-y-voluntaria/",
            "https://www.tamaulipas.gob.mx/educacion/2021/08/convocatoria-regreso-a-clases-presenciales-para-municipios-en-fase-i/"
        ],
        color: StateBack2School
    },
    {
        id: "MX-SIN",
        name: "Sinaloa",
        regresoActividadesPresenciales: "SI",
        fechaRetorno: "30 de Agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "90",
        alumnosVacunados: "NO",
        nombreEstrategia: "Sin información",
        actividadesPresenciales: "Medios indican: El modelo para el regreso a clases de manera presencial que implementaron Jalisco y Sinaloa desde marzo pasado es un buen esquema a seguir en este regreso a clases a partir del 30 de agosto próximo, señalaron representantes de la Asociación Mexicanos Primero. <br><br> El secretario de Educación Pública y Cultura, Juan Alfonso Mejía López, explicó que en cada una de las escuelas se determinará los días en que se darán las clases presenciales y lar virtuales, es decir, los maestros pueden tener las clases en aulas por una semana y la siguiente en línea, o elegir los días de la semana para cada modalidad.<br><br> En Sinaloa existen elementos para un regreso a clases gradual y focalizado, además de seguro para las niñas, niños y jóvenes, de acuerdo a la instrucción del gobernador Quirino Ordaz Coppel, quien fue reconocido por el presidente de la República, Andrés Manuel López Obrador, como el primer mandatario que solicitó la vacunación a las y los maestros del país para un regreso seguro a las escuelas.<br><br> En Sinaloa existen elementos para un regreso a clases gradual y focalizado, además de seguro para las niñas, niños y jóvenes, de acuerdo a la instrucción del gobernador Quirino Ordaz Coppel, quien fue reconocido por el presidente de la República, Andrés Manuel López Obrador, como el primer mandatario que solicitó la vacunación a las y los maestros del país para un regreso seguro a las escuelas.",
        aforosFiltrosSanitarios: "Regreso a las aulas en Sinaloa deberá atender condiciones de cada comunidad. Regreso a clases en Sinaloa será de forma gradual, focalizado y seguro. Experiencia previa de 955 Centros Comunitarios de Aprendizaje, donde se atendió a 26 mil 26 alumnos con rezago educativo. El congreso del Estado tiene la postura de “Estamos ansiosos porque los estudiantes regresen, pero la tercera ola de contagios es alarmante, ante este panorama es necesario que las autoridades actúen con prudencia: no hay condiciones del regreso seguro a las aulas",
        referencias: [
            "https://mieducacion.sepyc.gob.mx/sinaloa-coincide-con-el-presidente-andres-manuel-lopez-obrador-el-regreso-a-clases-es-por-el-convencimiento-nada-por-la-fuerza/",
            "https://www.debate.com.mx/opinion/Posible-retorno-a-las-aulas-20210730-0348.html",
            "https://mieducacion.sepyc.gob.mx/",
            "https://www.elsoldemazatlan.com.mx/local/regreso-a-clases-en-sinaloa-sera-en-modalidad-mixta-7045888.html",
            "https://www.elsoldemazatlan.com.mx/local/regreso-a-clases-en-sinaloa-sera-en-modalidad-mixta-7045888.html"
        ],
        color: StateBack2School
    },
    {
        id: "MX-DUR",
        name: "Durango",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "Si",
        reincorporacionGradual: "Si",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "100",
        alumnosVacunados: "NO",
        nombreEstrategia: "No disponible",
        actividadesPresenciales: "Únicamente se otorgarán clases presenciales a los estudiantes de preescolar, primaria y secundaria que habitan en los municipios con mínima cantidad de casos activos de COVID-19, porque no será un regreso en masa el ciclo escolar que inicia a finales del mes de agosto, informó el Secretario de Salud del Estado de Durango, (SSD), Sergio González Romero. <br>Los municipios del estado de Durango, que registren poca cantidad de casos activos de COVID-19, serán las zonas donde se autorice la reincorporación de educandos a las aulas.<br>Las escuelas deberán contar con las condiciones indispensables para la seguridad en salud, para los estudiantes, docentes y personal administrativo.",
        aforosFiltrosSanitarios: "No disponible",
        referencias: [
            "https://notigram.com/durango/local-durango/confirman-regreso-presencial-a-clases-en-durango-para-municipios-con-pocos-casos-de-covid-19-20210820-584047"
        ],
        color: StateBack2School
    },
    {
        id: "MX-ZAC",
        name: "Zacatecas",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "90.6",
        alumnosVacunados: "NO",
        nombreEstrategia: "Regreso a clases presenciales",
        actividadesPresenciales: "La secretaria de Educación en Zacatecas, reiteró que el regreso a clases presenciales en la entidad se mantiene para el próximo 30 de agosto para los niveles de educación básica, media superior y superior, dicho retorno será opcional, es decir, serán los tutores, padres y madres de familia quienes decidan si los alumnos y las alumnas acuden o no a los planteles escolares. El regreso presencial será escalonado y ordenado, aunque, no será obligatorio para las y los estudiantes, ni tampoco para los docentes con alguna comorbilidad, por lo que las clases a distancia continuarán para quienes así lo decidan. <br><br>En declaraciones  recientes, se reiteró que el regreso será solo si los padres de familia están de acuerdo. Se comentó que solo en los municipios de el Salvador, Melchor Ocampo, Mezquital del Oro, Apozol, Apulco, donde no hay contagios se puede retomar el regreso a clases presenciales.<br>Solo se publicó exhorto de la legislatura local para que la Secretaría de Educación y la Secretaría de Salud del Estado de Zacatecas elaboren un plan estratégico de regreso a clases presenciales seguro, ordenado, gradual, escalonado y cauto; con todos los protocolos de salud establecidos, además de valorar la posibilidad de un regreso a clases inmediato en aquellas instituciones públicas y privadas pequeñas, con pocos alumnos y donde las condiciones físicas así lo permitan. <br><br>Sin embargo, Aún no se puede fijar la postura, hasta conocer las condiciones del semáforo epidemiológico y el lineamiento federal.",
        aforosFiltrosSanitarios: "De acuerdo con la encuesta realizada por la Secretaría de Educación de Zacatecas (SEZ) a 101 mil 808 madres, padres de familia y tutores, el 81.3 por ciento dijo que está de acuerdo en que niñas, niños y adolescentes regresen a las escuelas de educación básica de manera presencial. El 92.3 por ciento se mostró dispuesto a colaborar en el establecimiento de los filtros sanitarios en casa, escuela y salón de clases, tal como lo establecen los protocolos de la Secretaría de Educación Pública (SEP). Se respetará la sana distancia, se suspenderán las ceremonias y los alumnos tendrán acceso a jabón, agua y gel alcoholado.<br><br> LA UAZ hará encuesta de movilidad y convivencia, “ya se tienen claros los protocolos de seguridad, de sanitización para todos los espacios, solo veremos si será escalonado, de acuerdo a los espacios o por nivel educativo, sin embargo, la decisión se tomará en agosto",
        referencias: [
            "https://imagenzac.com.mx/capital/necesario-el-regreso-clases-presenciales-en-zacatecas-brena-cantu/",
            "http://www.seduzac.gob.mx/portal/index.php",
            "http://www.seduzac.gob.mx/portal/index.php",
            "https://www.zacatecas.gob.mx/mas-de-81-de-madres-y-padres-de-familia-estan-de-acuerdo-en-que-alumnos-de-educacion-basica-regresen-a-las-aulas/ ",
            "https://imagenzac.com.mx/capital/estudiantes-regresaran-a-las-aulas-el-30-de-agosto/",
            "http://ntrzacatecas.com/2021/07/12/prepara-uaz-encuesta-de-movilidad-y-convivencia/",
            "http://ntrzacatecas.com/2021/08/17/regreso-a-escuelas-en-incertidumbre-y-caro/",
            "https://www.elsoldezacatecas.com.mx/local/asi-propone-seduzac-el-regreso-a-clases-presenciales-7121156.html",
            
        ],
        color: StateBack2School
    },
    {
        id: "MX-SLP",
        name: "San Luis Potosí",
        regresoActividadesPresenciales: "SI",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "90",
        alumnosVacunados: "NO",
        nombreEstrategia: "Protocolo para el regreso seguro a clases",
        actividadesPresenciales: "Aunque los diputados Martha Barajas García y Martín Juárez Córdova coincidieron en que toda la comunidad educativa debe estar protegida y lo mínimo que se requiere es que las escuelas estén en buenas condiciones, con agua, luz, equipo y todo lo necesario para que se cumplan los protocolos sanitarios. No hay un pronunciamiento de la Seccretaria de Educación para confirmar tales  opiniones <br><br>La autoridad educativa federal dará a conocer información para el regreso a clases y en reunión de CONAEDU",
        aforosFiltrosSanitarios: "No habrá regreso a clases presenciales durante el mes de agosto, además recordó que para el regreso a clases presenciales, cuando existan las condiciones sanitarias, se aplicarán nueve intervenciones o medidas para asegurar el bienestar de la comunidad escolar. <br><br> Hubo una reapertura del 15% de escuelas en junio. El saldo fueron dos casos de contagios en docentes y nueve alumnos",
        referencias: [
            "https://slp.gob.mx/sege/Paginas/NOTICIAS/FECHAS-Y-MODALIDAD-DE-REGRESO-A-CLASES--SE-DAR%C3%81N-A-CONOCER-LA-PR%C3%93XIMA-SEMANA.aspx",
            "https://slp.gob.mx/sege/Paginas/NOTICIAS/NO-HAY-REGRESO-A-CLASES-PRESENCIALES-EN-SAN-LUIS-POTOS%C3%8D-SECRETARIO-DE-EDUCACI%C3%93N.aspx",
            "https://www.elsoldesanluis.com.mx/local/confirma-la-sege-el-regreso-a-clases-el-30-de-agosto-en-san-luis-potosi-7073590.html",
            "https://www.elsoldesanluis.com.mx/local/en-slp-no-hay-condiciones-para-regreso-a-clases-presenciales-7097203.html",
            "https://www.slp.gob.mx/sege/PDF/Estrategia%20Estatal%20para%20el%20Regreso%20Seguro%20a%20Clases.pdf"
        ],
        color: StateBack2School
    },
    {
        id: "MX-NAY",
        name: "Nayarit",
        regresoActividadesPresenciales: "SI",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "85.4",
        alumnosVacunados: "NO",
        nombreEstrategia: "Aprende en casa",
        actividadesPresenciales: "Se tenía previsto que algunos municipios de la Sierra regresarán a clases presenciales en mayo sin embargo ante el alza en casos de covid y el retroceso del semáforo de verde a amarillo dicho iniciativa se frenó.<br><br> El regreso a clases para educación básica está programado para el 10 de agosto, siempre y cuando Nayarit se encuentre en semáforo verde. <br><br> En estos momentos el Estado de Nayarit NO se encuentra en condiciones de regresar a clases presenciales por el alto índice de incrementos de casos de COVID-19”, declaró en entrevista Martín Isaac Pérez, Subsecretario de Educación Media Superior y Superior en el Estado de Nayarit.",
        aforosFiltrosSanitarios: "El subsecretario de Educación Media Superior y Superior en el Estado, Martín Isaac Pérez quien explicó que el recurso para hacer las reparaciones pertinentes a los planteles tras más de un año de estar solas, comienzan a llegar, por lo tanto, antes de que inicie el ciclo ya deben de estar listas para recibir a los alumnos.<br><br>Siguiendo los protocols establecidos por Gobierno Federal<br><br>En caso de que se reanuden las clases presenciales en el estado, se tomarán la siguientes medidas:<ol><li>Establecimiento de Comités de salud escolar.</li><li>Mantener sana distancia y uso general del cubreboca en los planteles.</li><li>Acceso a agua y jabón.</li><li>Suspensión de todo acto cívico o ceremonia.</li><li>Maximización del uso de espacios abiertos.</li><li>Detección temprana de contagios.</li><li>Cierre de escuelas en caso de contagio.</li></ol>",
        referencias: [
            "https://www.nayarit.gob.mx/seccion/educacion",
            "https://meridiano.mx/seccion/nayarit/nayarit-no-est-en-condiciones-de-regresar-a-clases-presenciales-educaci-n-1/",
            "https://www.nayarit.gob.mx/seccion/educacion#:~:text=El%20'Verano%20Divertido'%20iniciar%C3%A1%20el,cuando%20existan%20las%20condiciones%20sanitarias",
            "https://kidstudia.com/guia/todo-sobre-el-regreso-a-clases-en-mexico/nayarit/",
            "https://meridiano.mx/seccion/nayarit/nayarit-no-est-en-condiciones-de-regresar-a-clases-presenciales-educaci-n-1/",
            "https://www.gob.mx/sep/es/articulos/boletin-sep-no-102-concluye-exitosamente-el-proceso-de-vacunacion-a-personal-docente-en-30-entidades-del-pais?idiom=es",
            "https://latinus.us/2021/08/11/regreso-clases-presenciales-estados-volveran-aulas-nuevo-ciclo-escolar/",
            "https://www.eloccidental.com.mx/local/respalda-seccion-49-retorno-a-clases-presenciales-en-nayarit-7082730.html",
            "https://vallartaindependiente.com/2021/08/16/siempre-si-esta-contemplado-el-regreso-a-las-aulas-en-nayarit/",
            "https://meridiano.mx/articulo/2021-08-16/inminente-regreso-a-clases-presenciales-en-nayarit-este-30-de-agosto-1",
            "https://www.debate.com.mx/estados/SEP-confirma-regreso-a-clases-presenciales-en-Nayarit-sera-escalonado-y-voluntario-20210819-0227.html"
        ],
        color: StateBack2School
    },
    {
        id: "MX-JAL",
        name: "Jalisco",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de Agosto 2021",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "SP",
        alumnosVacunados: "NO",
        nombreEstrategia: "Modelo hibrido y opcional de regreso a clases-Regreso a clases presenciales",
        actividadesPresenciales: "Así, a partir de hoy estarán regresando a las aulas 126 mil 197 estudiantes y ocho mil docentes y se tienen inscritos a 330 mil alumnos para estos niveles de educación media superior y para el próximo 30 de agosto, se estará iniciando el retorno a las aulas en los niveles básicos, es decir, preescolar, primaria y secundaria, siempre y cuando los grupos no rebasen la capacidad del 50 por ciento del aforo en las aulas.",
        aforosFiltrosSanitarios: "En las principales acciones son: el uso del cubrebocas es obligatorio para todos los niveles y sana distancia<br>Por otro lado, se emiten protocolos detallados para todos los niveles y actividades:<br>Protocolo de acción ante COVID-19 para Grupos de Seguimiento Académico, Trámites presenciales y Entrega de materiales educativos aplicable a Educación Básica, Media Superior y Superior Docente<br>Protocolo de actuación ante COVID-19 Sector Educativo para Actos Académicos Presenciales en escuelas de Educación Básica de la Secretaría de Educación del Estado de Jalisco.<br>Protocolo de acción ante COVID-19 Para centros de formación para el trabajo, educación continua y academias.<br>Protocolo de actuación ante COVID-19 Sector Educativo para la realización de exámenes presenciales del Sistema de Preparatoria Abierta.<br>Protocolo de actuación ante COVID-19 Sector Educativo para la atención de actividades esenciales en Educación Media Superior.<br>Protocolo de Acción ante COVID-19 para realizar Educación Física en los planteles escolares",
        referencias: [
            "https://www.jalisco.gob.mx/es/prensa/noticias/129538",
            "https://www.jalisco.gob.mx/es/prensa/noticias/127052",
            "https://www.facebook.com/educacion.jalisco/photos/a.446164440747/10158547049890748/",
            "https://portalsej.jalisco.gob.mx/plan-jalisco-para-la-reactivacion-economica/",
            "https://udgtv.com/noticias/regreso-clases-virtuales-decision-basada-criterios-cientificos-udeg/",
            "https://heraldodemexico.com.mx/nacional/2021/8/23/inicia-ciclo-escolar-2021-2022-en-jalisco-en-educacion-media-superior-bachillerato-de-altas-capacidades-intelectuales-328540.html"
        ],
        color: StateBack2School
    },
    {
        id: "MX-AGU",
        name: "Aguascalientes",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "91",
        alumnosVacunados: "NO",
        nombreEstrategia: "Me sumo a un regreso seguro",
        actividadesPresenciales: "La Asociación de Instituciones Educativas Particulares del Estado ha solicitado al Instituto de Educación de Aguascalientes se les permita iniciar el ciclo lectivo 2021-2022 el próximo 23 de agosto, y no tener que esperar hasta el día 30, habrá que esperar confirmación <br> Los estudiantes podrán ingresar a los planteles, pero no de manera masiva, es decir no regresan los grupos completos al mismo tiempo, será, durante las primeras semanas de manera escalonada y para permitir a los profesores levantar un diagnóstico sobre el aprendizaje logrado durante este periodo de aislamiento. <br> El nivel básico de educación tendrá un modelo mixto de clases, con grupos reducidos y asistencia alternada a los salones de clases. Los niños de los niveles de preescolar, primaria y secundaria deberán ajustarse a las siguientes fechas: <br><br> Jornadas de limpieza escolar. 11, 12 y 13 de agosto. <br> Inscripciones y reinscripciones. Del lunes 16 de agosto al viernes 10 de septiembre. <br> Evaluación diagnóstica. Del lunes 16 de agosto al viernes 10 de septiembre. <br> Período extraordinario de recuperación. Del lunes 13 de septiembre al martes 23 de noviembre dirigido a los alumnos con deficiencias educativas. <br> El nivel medio superior regresará a clases con un modelo mixto. Los alumnos asistirán a clases de manera alternada, en grupos pequeños y con todas las medidas de salud e higiene necesarias para un regreso seguro. <br><br> El regreso a clases de este nivel educativo tendrá varias fechas, dependiendo del sistema al que está incorporada la escuela de tu hijo. Para el 6 de septiembre todas las preparatorias del estado ya deberán estar en clases. Por lo pronto se prevén las siguientes fechas de inicio: <br><br> Bachilleratos tecnológicos. Inicio de clases 23 de agosto. <br> Conalep. Inicio de clases 30 de agosto. <br> Bachilleratos incorporados a universidades. Misma fecha de inicio de la institución de nivel superior a la que se encuentran incorporados. <br> Las universidades darán inicio a las actividades educativas según su propio calendario escolar.   El regreso presencial a clases a partir del 30 de agosto próximo correspondiente al nuevo ciclo lectivo 2021-2022 será con jornadas completas, de 8:00 am a 1:00pm, en el caso de las primarias",
        aforosFiltrosSanitarios: "Protocolo para prevenir contagios durante el regreso progresivo a clases presenciales en escuelas públicas y privadas de educación básica, media superior y superior , publciado el 27 de julio de 2021, en el cual se detallan las estregias para evitar contagios: Uso obligatorio del cubrebocas, puerta abiertas y evitar contacto con picaportes, filtro de hogar, filtro escolar , filtro de aula, capaictaciones para personal y alumnos, limpieza a profundidad de las superficies, espacios y materiales, clausura de bebederos, reorganizar descansos y actividades fisicas, se promoveran clases en espacios abiertos, lavado de mano, evitar compartir alimentos, promover el estornudo de etiqueta (cubrir con el angulo interno del codo), el uniforme escolar no es obligatorio, se limita el aforo de los eventos  especiales, las actividades de servicios escolares serán por cita, <ul> <li>-Se recabaran cartas de corresponsabilidad.</li> <li>-maximizar sana distancia y aprovechamiento de espacios abiertos y el uso permanente e irrestricto de cubrebocas.</li> <li>-lpimite del 40% diario de la población escolar.</li> <li>- No mas de 9 alumnas y alumnos y un docente por aula de educación primaria y telesecundaria.</li> <li>-No mas de 12 alumnos y alumnas y un docente por aula en escuelas secundarias generale sy técnicas.</li> <li>-No se permite en este periodo ningún tipkde expendio de alimentos ni se realizaran clases de educación fisica o artística</li></ul> La Asociación de Instituciones Educativas Particulares del Estado ha solicitado al Instituto de Educación de Aguascalientes se les permita iniciar el ciclo lectivo 2021-2022 el próximo 23 de agosto, y no tener que esperar hasta el día 30, habrá que esperar confirmación.",
        referencias: [
            "http://www.hidrocalidodigital.com/aguascalientes-si-tendra-clases-presenciales/#:~:text=Las%20autoridades%20del%20estado%20planean,el%20pr%C3%B3ximo%2030%20de%20agosto."
        ],
        color: StateBack2School
    },
    {
        id: "MX-GUA",
        name: "Guanajuato",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "85.5",
        alumnosVacunados: "NO",
        nombreEstrategia: "Guanajuato educado con R de Reactivación. Regreso a las aulas.",
        actividadesPresenciales: "El gobernador de Guanajuato reiteró que el regreso será voluntario, siempre con la voluntad de los padres y un monitoreo constante del tema de salud.",
        aforosFiltrosSanitarios: "ventilación en los salones de clase, el tipo de suministro y almacenamiento de agua, la densidad escolar así como la existencia de espacios físicos para el control de filtros.",
        referencias: [
            "https://www.seg.guanajuato.gob.mx/RegresoalasAulas/SitePages/Inicio.aspx",
            "https://www.seg.guanajuato.gob.mx/RegresoalasAulas/SitePages/Inicio.aspx",
            "https://notus.com.mx/regreso-a-clases-presenciales-en-guanajuato-30-agosto-2021/",
            "https://www.milenio.com/politica/comunidad/guanajuato-regreso-clases-presenciales-ajustara-municipio",
            "https://www.seg.guanajuato.gob.mx/RegresoalasAulas/SitePages/EducacionVacunada.aspx",
            "https://zonafranca.mx/politica-sociedad/educacion/en-guanajuato-sera-voluntario-el-regreso-a-clases/",
            "https://www.unionguanajuato.mx/2021/08/02/regreso-a-clases-presenciales-en-agosto-calendario-escolar-2021-a-2022-de-la-sep/",
            "https://www.debate.com.mx/estados/El-regreso-a-clases-presenciales-sera-voluntario-en-Guanajuato-Diego-Sinhue-20210816-0394.html",
            "https://boletines.guanajuato.gob.mx/2021/08/20/prepara-seg-inicio-de-ciclo-escolar-2021-2022/"
        ],
        color: StateBack2School
    },
    {
        id: "MX-QUE",
        name: "Querétaro",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "95",
        alumnosVacunados: "NO",
        nombreEstrategia: "Programa Especial de Regreso a Clases",
        actividadesPresenciales: "Se Instaló Subcomité Técnico para el Regreso a Clases del Estado de Querétaro, el objetivo: organizar un posible regreso a clases presenciales planeado, escalonado, gradual, y cauto, con el fin de disminuir el riesgo de contagio y proteger la salud de las comunidades escolares.",
        aforosFiltrosSanitarios: "Se realizara de acuerdo a los ''LINEAMIENTOS GENERALES PARA EL REGRESO A LAS ACTIVIDADES ESCOLARES, EN EL MARCO DE LA PANDEMIA COVID-19''",
        referencias: [
            "https://queretaro.gob.mx/regresoaclaseguro.aspx",
            "https://www.queretaro.gob.mx/covid19/contenido/noticiasContenido.aspx?q=vUYGbsxLnli7glS/gQWD0HldeVLSaRLz7RohSiloFmz7sxVv8axXyw==",
            "https://www.queretaro.gob.mx/pdf/SEDEQ_GuiaRegresoaClases.pdf"
        ],
        color: StateBack2School
    },
    {
        id: "MX-HID",
        name: "Hidalgo",
        regresoActividadesPresenciales: "No",
        fechaRetorno: "Sin información",
        tipoModelo: "A distancia",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "99",
        alumnosVacunados: "NO",
        nombreEstrategia: "Regreso Seguro a Clases en los centros educativos en el marco de la pandemia COVID 19, Operativo Escudo, Hidalgo Seguro",
        actividadesPresenciales: "En el caso de Hidalgo, el gobernador del estado, Omar Fayad, señaló que analizan que el próximo ciclo escolar sea virtual para no exponer a los docentes y alumnos a un contagio.",
        aforosFiltrosSanitarios: "Filtros escolares, suspensión de registro de entrada y salida de toda la comunidad educativa (alumnos, docentes, personal administrativo y personal de apoyo a la educación , asi como al publico en general) que conlleve el empleo de instrumentos ocmpartidos, cada  institución definira el control de asistencia laboral, limpieza intensiva y desinfección continua de todas las areas de los centros educativos, ventilación en todas las areascampaas de comunicación , dichas estrtegias coordinadas por el Comite Participativo de Salud Escolar (CPSE) ",
        referencias: [
            "https://www.milenio.com/ciencia-y-salud/hidalgo-99-docentes-vacunaron-covid-19-seph",
            "https://latinus.us/2021/08/15/regreso-clases-hidalgo-haya-condiciones-gobernador-reporta-aumento-contagios/",
            "https://hidalgo.jornada.com.mx/cuando-entran-a-clases-en-hidalgo-2021/"
        ],
        color: StateNoBack2School
    },
    {
        id: "MX-COL",
        name: "Colima",
        regresoActividadesPresenciales: "Por Definir",
        fechaRetorno: "Por definir",
        tipoModelo: "A distancia",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "93.5",
        alumnosVacunados: "NO",
        nombreEstrategia: "Estrategia Estatal de Regreso Seguro a Clases Presenciales",
        actividadesPresenciales: "La prueba piloto no se trata de un regreso a clases presencial, esto solo se dará cuando el semáforo epidemiológico esté en verde y las autoridades sanitarias así lo determinen. Los criterios que se han establecido para un regreso seguro a clases en Colima se aplican con la cuestión de un semáforo verde, que personal docente esté vacunado y la participación voluntaria de padres y madres de familia de poder enviar a sus hijos e hijas a las escuelas.",
        aforosFiltrosSanitarios: "Se conformará un comité de salud en cada escuela, filtros al ingreso al plantel, abastecer de agua y jabón, uso obligatorio de mascarilla, cuidado de grupos vulnerables y cuando se detecte algún caso de coronavirus, el plantel cerraría de forma inmediata.",
        referencias: [
            "https://www.milenio.com/estados/colima-pone-a-prueba-el-regreso-a-clases",
            "https://www.colimanoticias.com/antes-del-regreso-a-clases-preservar-la-salud-y-vida-del-alumnado-y-docentes-se/",
            "https://diariodecolima.com/noticias/detalle/2021-07-23-flores-colima-est-preparado-para-iniciar-el-ciclo-escolar",
            "https://elcomentario.ucol.mx/elabora-colima-su-estrategia-para-regreso-a-clases-presenciales/",
            "https://www.gob.mx/sep/es/articulos/boletin-sep-no-102-concluye-exitosamente-el-proceso-de-vacunacion-a-personal-docente-en-30-entidades-del-pais?idiom=es",
            "https://diariodecolima.com/noticias/detalle/2021-08-16-la-entidad-lista-para-el-regreso-a-clases-secretario-de-educacin"
        ],
        color: StateInDefinition
    },
    {
        id: "MX-MIC",
        name: "Michoacán de Ocampo",
        regresoActividadesPresenciales: "No",
        fechaRetorno: "Sin información",
        tipoModelo: "A distancia",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "SP",
        alumnosVacunados: "NO",
        nombreEstrategia: "Escuela abierta",
        actividadesPresenciales: "En Michoacán, los únicos que se presentarán a las aulas el 30 de agosto serán los estudiantes de los niveles medio superior y superior, educación básica continúa clases a distancia.",
        aforosFiltrosSanitarios: "El gobernador de Michoacan alertó que un regreso a clases presenciales en primarias y secundarias, aumentará la movilidad de manera muy considerable, y el riesgo de las familias. Ello, describió, por los traslados y contacto que implica llevar, entregar y recoger a los hijos e hijas en las escuelas.",
        referencias: [
            "https://www.eluniversal.com.mx/estados/en-michoacan-no-hay-condiciones-para-regreso-clases-presenciales-aureoles",
            "https://www.lavozdemichoacan.com.mx/michoacan/educacion/ciclo-escolar-2021-2022-inicia-a-la-distancia-en-educacion-basica-confirma-la-see/",
            "https://www.animalpolitico.com/2021/08/michoacan-hidalgo-rechazan-regreso-clases-presenciales-estados-siguen-evaluando/"
        ],
        color: StateNoBack2School
    },
    {
        id: "MX-VER",
        name: "Veracruz de Ignacio de la Llave",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "SP",
        alumnosVacunados: "NO",
        nombreEstrategia: "Regreso a clases presenciales",
        actividadesPresenciales: "El Gobernador consideró necesario que los estudiantes retomen su actividad en las escuelas y por eso el regreso a clases en el estado de Veracruz se dará como lo establece el calendario de la Secretaría de Educación Pública (finales de agosto). En un cambio de opinión de lo que venía sosteniendo en cuanto al retorno a las aulas en la entidad, el Gobernador manifestó categórico que la educación está federalizada; de ahí que será la autoridad educativa federal la que determine cuándo se dará el regreso a la actividad presencial escolar. <br><br>El secretario de Educación de Veracruz, afirmó que tras la reunión con el Consejo Nacional de Autoridades Educativas se determinó que el regreso a las aulas será el próximo 30 de agosto, aunque será parcial y refirió que la decisión final será de las madres y padres de familia de mandar a sus hijos a la escuela.",
        aforosFiltrosSanitarios: "Entrega de kits de limpieza en todos los planteles <br><br> Acorde al semáforo epidemiológico, aplica SEV estrategias a distancia<br><br> El 24 de junio regresaron a las aulas, al respecto, se cuenta con 682 estrategias por sistema en los modelos presencial, mixto y virtual. La Secretaría de Educación estatal destacó que esta planeación incluye el acuerdo voluntario de la comunidad escolar, para lo que padres y madres recibirán una carta compromiso sobre el cuidado de la salud de sus hijos. <br><br> 1.- Todas las escuelas ubicadas en municipios con Semáforo en color amarillo o naranja, darán atención únicamente en la modalidad a distancia.<br> 2.- En los municipios que se mantenga el color verde del semáforo epidemiológico local, las instituciones podrán continuar según lo programado y decidido por cada centro escolar.<br><br> El personal del plantel educativo podrá asistir a sus escuelas si así lo acuerdan a realizar las tareas pertinentes con o sin estudiantes de acuerdo a los puntos 1 y 2.",
        referencias: [
            "https://www.sev.gob.mx/v1/noticias/leer/2354/",
            "https://www.diariodexalapa.com.mx/local/si-habra-clases-presenciales-pero-no-obligatorio-dijo-el-titular-de-la-sev-zenyazen-escobar-garcia-7029291.html",
            "https://www.diarioelmundo.com.mx/index.php/2021/07/16/en-agosto-regreso-a-clases-en-veracruz/",
            "https://www.milenio.com/estados/regreso-clases-presenciales-veracruz-grupos-reducidos",
            "https://www.elsoldecordoba.com.mx/local/hay-giro-regreso-a-aulas-ya-no-es-obligatorio-afirmo-el-secretario-de-educacion-de-veracruz-zenyazen-7086941.html",
            "https://www.elsoldeorizaba.com.mx/local/cambio-ya-no-es-obligatorio-el-regreso-a-las-aulas-afirmo-el-secretario-de-educacion-de-veracruz-zenyazen-7087120.html"
        ],
        color: StateBack2School
    },
    {
        id: "MX-PUE",
        name: "Puebla",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de Agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "95",
        alumnosVacunados: "NO",
        nombreEstrategia: "Modelo Educativo Híbrido en el Estado de Puebla Educación Básica y Media Superior Ciclo Escolar 2021-2022",
        actividadesPresenciales: "Para el regreso a clases será prioridad que las y los maestros estén vacunados: Lozano <ol><li>La educación es un derecho humano que debe garantizarse en todo momento, principalmente en tiempos de crisis, por la importancia que tienen los procesos de sociabilización y humanización, el aprendizaje se convierte en un instrumento de sobrevivencia.</li> <li>Se establece que el servicio público educativo se brindará de forma presencial responsable y ordenada con base en los términos que disponga las autoridades sanitarias, el acuerdo nacional reafirma la ruta trazada en Puebla.</li> <li>El regreso presencial será con carácter voluntario habiendo de por medio una carta compromiso de asistencia voluntaria y corresponsabilidad. <li>La educación debe ser considerada una actividad esencial y por lo tanto requiere la participación presencial de todo el personal para atender a los alumnos y garantizar el derecho a la educación. <li>El modelo híbrido será el sistema de trabajo que adoptarán en el siguiente ciclo escolar 21-22 <li>Las faenas continúan de forma sistemática, del 11 al 13 de agosto participaron 10 mil 817 escuelas que representan el 90% en las faenas escolares de limpieza y desinfección, por su parte el CAPCEE avanza en la intervención de las 480 escuelas vandalizadas. <li>El taller intensivo de capacitación a realizarse del 16 al 20 de agosto podrá llevarse a cabo de manera presencial y a distancia. <li>El Consejo Técnico programado del 23 al 27 de agosto será presencial.</li> <li>Se instrumentará el programa “Por una vida sana, Puebla te cuida” entre la Secretaría de Salud y la Secretaría Educación, el cual permitirá identificar situaciones de vulnerabilidad en los alumnos y así proteger los manteniéndose en la modalidad a distancia en caso de tener alguna comorbilidad.</li> <li>Los maestros rezagados en el programa de vacunación, así como los de nuevo ingreso serán atendidos por la Secretaría de Salud para su vacunación respectiva. <li>Se debe garantizar el derecho a la accesibilidad. Las cuotas estarán mediadas por las asambleas respectivas donde se tomen acuerdos en consenso y en armonía; si existe alguna queja llamar al 222 22938 20 o terminación 25. <li>Ya se están distribuyendo los más de 9.7 millones de libros de texto gratuitos. Representan un recurso didáctico importante que se suma a otros materiales que permiten el acompañamiento del modelo híbrido, como son guías Puebla en casa, aprende en casa, entre otros, la educación a distancia no es sinónimo de internet. <li>Se implementarán 10 acciones clave para promover incubar la seguridad, salud e higiene de la comunidad escolar además de emitirse una guía para el regreso presencial responsable y ordenado. <li>Las instituciones educativas dependientes de la subsecretaría de educación media superior y superior se sujetarán a las disposiciones que en materia educativa y de salud se meta tienen sus propios calendarios <li>Promover el apoyo socioemocional para los educandos y docentes en colaboración con el sector salud. <li>Al inicio del ciclo escolar 2021-2022 se realizaron periodo de valoración diagnóstica de los alumnos y reforzamiento de aprendizajes no sólo de matemáticas y lectura la formación integral, exige diagnósticos y procesos de compensación también integrales como lo establece la nueva escuela mexicana. <li>Se flexibilice al máximo las disposiciones que faciliten el tránsito escolar y permita la inscripción y reinscripción de los alumnos en los tres niveles educativos con objeto de asegurar su permanencia y regreso del sistema educativo nacional la adaptabilidad como dimensión clave del derecho a la educación. <li>La solidaridad y organización es la clave para evitar el riesgo de contagio y atemorización. <li>La escuela y la familia deben convertirse en centros de protección emocional y de contagios en diálogo corresponsable permanente <li> Se invita a mantener una actitud crítica constructiva frente al proceso de regreso presencia la clase, evitando reduccionismo, postura sin fundamentos y de mala fe.</li></ol>",
        aforosFiltrosSanitarios: "Las escuelas multigrado o de organización completa que puedan atender a toda su población de manera presencial todos los días, deben garantizar la sana distancia, así como la implementación del plan de atención (nivelación) de forma integrada a las jornadas académicas. Aquellas escuelas con mayor matrícula dividirán aforos cuya distribución puede ser por apellidos.",
        referencias: [
            "http://sep.puebla.gob.mx/index.php/component/k2/prueba-2-2-2",
            "https://www.eluniversalpuebla.com.mx/educacion/95-de-maestros-en-puebla-ya-esta-vacunado-contra-covid",
            "https://www.milenio.com/politica/comunidad/clases-presenciales-en-puebla-seran-voluntarias-sep",
            "https://www.poblanerias.com/2021/08/educacion-presentan-20-puntos-clave-para-regreso-a-clases-presenciales-en-puebla/"
        ],
        color: StateBack2School
    },
    {
        id: "MX-TLA",
        name: "Tlaxcala",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "SP",
        alumnosVacunados: "NO",
        nombreEstrategia: "Sin información",
        actividadesPresenciales: "En medios se ha difundido que la incorporación presencial será una vez que el semáforo epidemiológico este en verde. <br><br>El Instituto Tecnológico del Altiplano de Tlaxcala (ITAT), cuenta con un Plan de retorno de actividades académicas esenciales para el semestre escolar que inicia el próximo 23 de agosto, en el cual establecen la modalidad híbrida para la realización de las actividades académicas.",
        aforosFiltrosSanitarios: "Una vez que el semáforo epidemiológico dé luz verde, estás son las medidas que se tomarán para el regreso a clases presenciales en Tlaxcala: <ol> <li>Conformación de Comités Participativos de Salud.</li> <li>Dotar a las escuelas con insumos de higiene como agua y jabón.</li> <li>Salvaguardar a los docentes en grupos de riesgo.</li> <li>Uso obligatorio de cubrebocas o pañuelo, dentro y fuera de las escuelas, públicas y particulares.</li> <li>Mantener distancia en entradas y salidas de los planteles.</li> <li>Programar recesos escalonados.</li> <li>Maximizar el uso de espacios abiertos.</li> <li>Suspender todo tipo de ceremonias o reuniones.</li> <li>Brindar apoyo socioemocional para alumnos y docentes.</li> </ol>Una comisión de la Secretaría de Educación Pública (SEPE) y el SNTE trabajando para la realización de una logística y la atención en el regreso a clases presenciales. Universidad Autónoma de Tlaxcala (UATx) reconsideraría el regreso a las clases.",
        referencias: [
            "https://www.milenio.com/politica/comunidad/duda-regreso-clases-presenciales-tlaxcala-tercer-ola-covid",
            "https://www.milenio.com/politica/comunidad/duda-regreso-clases-presenciales-tlaxcala-tercer-ola-covid ",
            "https://www.lajornadadeoriente.com.mx/tlaxcala/clases-presenciales-sepe-a-sep/",
            "https://www.elsoldetlaxcala.com.mx/local/alistan-preparatorias-regreso-a-las-aulas-juan-pablo-arroyo-6924698.html",
            "https://kidstudia.com/guia/todo-sobre-el-regreso-a-clases-en-mexico/tlaxcala/#modalidad+del+regreso+a+clases+en+tlaxcala",
            "https://www.milenio.com/politica/comunidad/de-manera-responsable-buscan-que-sea-el-regreso-a-clases-en-tlaxcala",
            "https://amqueretaro.com/mexico/2021/07/02/revisa-sep-el-regreso-a-clases-en-tlaxcala/",
            "https://www.elsoldetlaxcala.com.mx/local/sera-hibrido-el-semestre-en-instituto-tecnologico-del-altiplano-de-tlaxcala-7100421.html"
        ],
        color: StateBack2School
    },
    {
        id: "MX-MEX",
        name: "Estado de México",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "SP",
        alumnosVacunados: "NO",
        nombreEstrategia: "Plan de Reapertura de regreso a clases 2020*",
        actividadesPresenciales: "Alfredo del Mazo Maza, señaló que el regreso a clases presenciales en los municipios mexiquenses será de manera voluntaria y que en coordinación con los comités de salud y protección civil se están puliendo las medidas que se llevarán a cabo a partir del próximo 30 de agosto. ",
        aforosFiltrosSanitarios: "Se emite la Guía de Orientación para la Reapertura de las Escuelas ante COVID-19, en la cual indica la implementación del  Comité Participativo de Salud Escolar. <br><br> Aplicación de protocolos y filtros de corresponsabilidad en casa, a la entrada del plantel y en el salón de clases",
        referencias: [
            "https://mexico.as.com/mexico/2021/08/23/actualidad/1629672653_864968.html"
        ],
        color: StateBack2School
    },
    {
        id: "MX-CMX",
        name: "Ciudad de México",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "100",
        alumnosVacunados: "SI",
        nombreEstrategia: "Sin información",
        actividadesPresenciales: "CDMX hará nueva revisión de escuelas previo a regreso a clases presenciales. La jefa de Gobierno señaló que el próximo año se aumentará el presupuesto de “mejor escuela” para dar un mantenimiento mayor a los planteles educativos. <br><br>La Jefa de Gobierno aseguró que de no contar con las condiciones óptimas el periodo académico continuará en línea.   <br>En la UNAM, la Comisión Especial de Seguridad del Consejo Universitario de la Universidad Nacional Autónoma de México aprobó la propuesta sobre los nuevos lineamientos para el regreso a las labores presenciales en la institución. Se actualizó un documento previo del mes de junio, sobre todo en los protocolos de acceso, funcionamiento y ventilación interna en las dependencias universitarias.",
        aforosFiltrosSanitarios: "La UNAM informó que, aunque se esté en semáforo verde durante tres semanas consecutivas, en tanto el alumnado no haya sido vacunado, la asistencia presencial será voluntaria para actividades académicas determinadas por los consejos técnicos. <br><br> El IPN determinó que las actividades de este semestre se llevarán a cabo predominantemente de manera no presencial y que los profesores, los alumnos y personal de apoyo y asistencia a la educación, podrán hacer uso de las instalaciones, voluntariamente, y bajo el consentimiento por escrito de los participantes involucrados.La Universidad Autónoma de México (UAM) ya retomó clases a distancia.<br><br> La UNAM: Las facultades solo podrán pedir la asistencia de los alumnos una vez que la entidad federativa haya permanecido tres semanas consecutivas con el semáforo epidemiológico en color verde. Ya que eso suceda, la incorporación será en grupos reducidos y de manera escalonada. Mientras el alumnado no haya sido vacunado, la asistencia será voluntaria, además, en el eventual retorno presencial se privilegiará a las actividades de bienvenida y reconocimiento de nuestras instalaciones para las generaciones que ingresaron en agosto del 2020 y la de nuevo ingreso del presente año, siempre respetando los límites establecidos del 30% de la matrícula escolar en los espacios educativos.",
        referencias: [
            "https://www.infobae.com/america/mexico/2021/08/17/regreso-a-clases-en-cdmx-sheinbaum-aseguro-que-todas-las-escuelas-estan-en-buenas-condiciones/",
            "https://politica.expansion.mx/cdmx/2021/08/17/alista-cdmx-operativo-de-limpieza-y-seguridad-para-regreso-a-clases-presenciales",
            "https://heraldodemexico.com.mx/nacional/2021/8/17/regreso-clases-fechas-importantes-en-calendario-escolar-de-sep-unam-ipn-326680.html"
        ],
        color: StateBack2School
    },
    {
        id: "MX-MOR",
        name: "Morelos",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "Sin informacón",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "SP",
        alumnosVacunados: "NO",
        nombreEstrategia: "Regreso a clases",
        actividadesPresenciales: "El regreso a clases para el ciclo escolar 2021-2022 también arrancará el próximo lunes, de manera voluntaria, ordenada y responsable, dijo Luis Arturo Cornejo Alatorre, secretario de Educación en la entidad.<br><br>Mencionó que han realizado acciones que permitan otorgar condiciones de seguridad en la salud de los niños, adolescentes y jóvenes para que cuenten con insumos básicos como lo son gel, jabón líquido, cubreboca y elementos de limpieza como cloro, jabón, entre otros",
        aforosFiltrosSanitarios: "Terminó en julio el Programa Piloto de Regreso a Clases Presenciales Seguras, voluntarias, escalonadas y graduales sin incidente alguno para todos los que participaron en este proyecto: alumnos, padres de familia, docentes, administrativos y personal de apoyo",
        referencias: [
            "https://www.milenio.com/estados/morelos-analiza-posible-regreso-a-clases-presenciales",
            "https://mexico.as.com/mexico/2021/07/30/actualidad/1627609664_758632.html",
            "https://www.24-horas.mx/2021/08/23/se-suman-morelos-y-queretaro-a-proximo-regreso-a-clases/"
        ],
        color: StateBack2School
    },
    {
        id: "MX-GRO",
        name: "Guerrero",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "31 de agosto 2021",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "100",
        alumnosVacunados: "NO",
        nombreEstrategia: "La escuela es nuestra",
        actividadesPresenciales: "El gobernador Héctor Astudillo Flores estimó que para el próximo lunes 30 de agosto aproximadamente 800 escuelas de Guerrero podrían reanudar las clases presenciales en zonas donde los casos de Covid 19 son menores. <br><br>Agregó que este martes se instalarán comités de padres de familia y maestros, quienes se coordinarán con el gobierno del estado y será entre jueves o viernes cuando se tenga una cifra exacta de cuántas escuelas y en cuántos municipios se regresará a clases.",
        aforosFiltrosSanitarios: "Se considerarán tres factores: que el estado se mantenga permanentemente en el color verde en el Semáforo de Riesgo Epidemiológico; que las escuelas cuenten con un protocolo sanitario, un plan escolar que refleje la organización administrativa y académica del plantel, y el fortalecimiento académico a través de una guía estatal para el regreso a clases y el cronograma de actividades para la apertura de escuelas en todos los niveles. <br><br> Por otro lado, los trabajadores de la educación hayan sido vacunados y que el semáforo epidemiológico esté en verde.",
        referencias: [
            "https://snte.org.mx/seccion14/snte-condiciona-el-regreso-a-clases-presenciales-en-guerrero/",
            "https://snte.org.mx/seccion14/con-seguridad-volvemos-a-la-escuela-snte/",
            "https://guerrero.quadratin.com.mx/guerrero-tendra-regreso-a-clases-presenciales-voluntario-astudillo/",
            "https://guerrero.quadratin.com.mx/reanudarian-clases-presenciales-800-escuelas-de-guerrero-astudillo/"            
        ],
        color: StateBack2School
    },
    {
        id: "MX-OAX",
        name: "Oaxaca",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "100",
        alumnosVacunados: "NO",
        nombreEstrategia: "No disponible",
        actividadesPresenciales: "El director general del Instituto Estatal de Educación Pública de Oaxaca (IEEPO), Francisco Ángel Villarreal, dio a conocer este 18 de agosto que el regreso a clases en la entidad será consensuado, seguro, gradual, escalonado y mixto. <br><br>Reiteró que la decisión de permitir que las infancias y juventudes retornen a las aulas será resultado del consenso con el magisterio, madres, padres de familia, tutores y autoridades municipales.<br>Por último, señaló que el Gobernador de Oaxaca, Alejandro Murat, y las autoridades estatales mantienen una fluida, correcta y permanente comunicación con el magisterio, así como con la Federación.   En encuentro encabezado por la secretaria de Gobernación, Olga Sánchez Cordero, los mandatarios de [...]; Oaxaca, Alejandro Murat, y Chiapas, Rutilio Escandón, externaron su apoyo al retorno a las aulas, por la salud mental de los estudiantes, y se manifestaron listos para ello, si bien en los dos últimos estados la Coordinadora Nacional de Trabajadores de la Educación se ha expresado en contra. Murat dijo que mantiene un diálogo con la organización magisterial para el regreso a los centros escolares",
        aforosFiltrosSanitarios: "En esta fecha se dice que de darse el regreso a las aulas: ''En este regreso no asistirán todos los niños al mismo tiempo, sino irán de acuerdo con la organización de las escuelas, como en orden alfabético, y también deberán ir de manera mixta...''.  Se está trabajando con la Secretaría de Educación Pública (SEP) para el protocolo sanitario que regirá los planteles en este nuevo ciclo escolar, donde habrán filtros sanitarios en cada escuela, además de que los menores y maestros tendrán que usar de forma permanente el cubrebocas.",
        referencias: [
            "https://www.jornada.com.mx/notas/2021/08/20/politica/avalan-gobernadores-regreso-a-escuelas/",
            "https://www.infobae.com/america/mexico/2021/08/18/como-sera-el-regreso-a-clases-en-oaxaca/ "
        ],
        color: StateBack2School
    },
    {
        id: "MX-TAB",
        name: "Tabasco",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "SP",
        alumnosVacunados: "NO",
        nombreEstrategia: "A la escuela. Seguro Regreso",
        actividadesPresenciales: "El 20 de agosto se publicó el acuerdo mediante el que se establece la estrategia estatal para el regreso a clases presenciales de forma cauta, gradual, ordenada y segura.<br><br> La secretaria de Educación precisó que serán en total 3 mil 800 planteles educativos de Preescolar, Primaria y Secundaria, que atienden a una población de 532 mil educandos, los que serán rehabilitados durante los meses de julio y agosto, como parte de los preparativos ante el posible regreso a clases presenciales para el ciclo escolar 2021-2022, siempre y cuando el semáforo epidemiológico este en color verde.<br><br> En totalidad, escalonado, hibrido, porcentual de niñas, niños y jóvenes escalonado, presencial, híbrido o una mezcla de ambos (implementación de un protocolo Alemán)<br><br> El 20.8 por ciento de alumnos del nivel básico que pertenecen a los ocho municipios donde existen menos contagios y casos activos de COVID-19, estarían regresando a clases presenciales el próximo 30 de agosto, mientras que el 79.2 por ciento seguirá en casa de manera virtual.",
        aforosFiltrosSanitarios: "Desarrollo de materiales informativos y protocolos sanitarios.",
        referencias: [
            "https://heraldodemexico.com.mx/nacional/2021/7/22/tabasco-no-volvera-clases-presenciales-en-agosto-analizan-sea-en-septiembre-318653.html",
            "https://www.elheraldodetabasco.com.mx/local/tabasco-si-regresa-a-clases-presenciales-en-septiembre-7015316.html",
            "https://www.tabascohoy.com/regresarian-a-las-aulas-20-de-estudiantes-confirma-educacion-ciclo-escolar-21-22/?__cf_chl_jschl_tk__=pmd_e7a564a81a81bf5623d59322ed379ea1ee8218d5-1628862700-0-gqNtZGzNAjijcnBszQqi",
            "https://tabasco.gob.mx/PeriodicoOficial/descargar/2407#:~:text=El%20d%C3%ADa%2030%20de%20agosto,adolescentes%20(NNA)%20a%20recibir%20una"
        ],
        color: StateBack2School
    },
    {
        id: "MX-CHP",
        name: "Chiapas",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "100",
        alumnosVacunados: "NO",
        nombreEstrategia: "No disponibles",
        actividadesPresenciales: "Antonio Magdel Velázquez Méndez, subsecretario de Educación en el Estado, enfatizó que el regreso a clases el próximo 30 de agosto será multimodal. (Presencial y virtual). Detalló que, hasta el momento, el la Secretaría de Educación del Estado tiene contemplado el regreso a clases presenciales de 449 mil 115 alumnos de 22 mil centros educativos; o sea, aproximadamente el 25 por ciento del total de alumnos. <br><br> Aseguró que en las escuelas se han entregado paquetes sanitarios que incluyen jabón, cloro, gel antibacterial entres otros artículos que aseguren un espacio limpio para los alumnos. También,  que las instituciones educativas existen Comités de Salud, integrado por docentes, administrativos y personal de salud, que deberán actuar de forma conjunta con los comités de padres de familia.<br>La Coordinadora Nacional de los Trabajadores de la Educación en Chiapas (CNTE) aseguró que no habrá regreso a clases en Chiapas.<br><br> José Luis Escobar Pérez, integrante de la región VII de la CNTE Chiapas, dio a conocer que no existen las condiciones necesarias para que maestros y alumnos retornen a las aulas.<br> Esta organización menciona que están aplicando una encuesta en el país y los resultados se publicarán el 25 de agosto y a la vez serán presentados a la Secretaría de Educación Pública (SEP).",
        aforosFiltrosSanitarios: "Medidas para el Regreso a Clases: <ol><li>Uso general de cubrebocas obligatorio. <li> Sana distancia en actividades al interior de los planteles, así como en las entradas y salidas. </li> <li> Recreos escolares escalonados</li> <li> Lugares fijos alternados.</li> <li> Asistencia alternada por apellido.</li> <li> Considera que tus hijos deberán acudir a clases sin fiebre o temperatura mayor a 37°. Estando dentro de la escuela, deberán lavarse frecuentemente las manos o utilizar gel antibacterial y los grupos no podrán ser mayor a 25 alumnos</li></ol>",
        referencias: [
            "https://www.elheraldodechiapas.com.mx/local/solo-un-25-por-ciento-de-alumnos-podrian-recibir-clases-presenciales-7107695.html",
            "https://diariodechiapas.com/metropoli/rechazan-regreso-a-las-aulas/166032"
        ],
        color: StateBack2School
    },  
    {
        id: "MX-CAM",
        name: "Campeche",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de mayo",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "88.8",
        alumnosVacunados: "NO",
        nombreEstrategia: "Aprendamos en familia desde casa",
        actividadesPresenciales: "El 10 de agosto se anunció de manera oficial el regreso a clases que será de forma gradual el próximo 30 de agosto. Será decisión de los padres y madres de familia enviar o no a sus hijos. Se acordó que regresarán un total de 904 escuelas de nivel preescolar, primaria y secundaria incluyendo los servicios de la Conafe. <br> <br> Es uno de los estados que implementó la prueba piloto de clases presenciales antes de terminar el ciclo escolar pasado, misma que cerró por el aumento de contagios de covid-19 en la entidad. Por lo que autoridades educativas consideran que no existen las condiciones necesarias para garantizar un regreso seguro a los planteles educativos.<br> <br> El regreso a clases presenciales será cuando el semáforo esté en verde debido a la falta de vacunación de los estudiantes.",
        aforosFiltrosSanitarios: "Cuando se tengan las condiciones necesarias para el regreso a los planteles educativos, se optará por un modelo híbrido de clases, con asistencia alternada, grupos reducidos, así como medidas sanitarias. Algunas de ellas son las siguientes: <br><br>  Uso correcto de cubrebocas obligatorio. <br> Sana distancia dentro de los salones de clases y en todas las actividades al interior de los planteles.<br> Colocación de filtros sanitarios al entrar a la escuela y a la entrada del salón<br> Recuerda que el regreso a clases presenciales es voluntario, si decides enviar a tus hijos a la escuela debes firmar una carta responsiva en donde declaras que tu hijo asiste voluntariamente a la escuela y sin síntomas relacionados al covid-19.",
        referencias: [
            "https://www.poresto.net/campeche/2021/7/15/regreso-clases-en-campeche-sera-en-semaforo-verde-seduc-263676.html",
            "http://campechehoy.mx/2021/07/31/en-campeche-sera-dificil-el-regreso-a-clases-presenciales/",
            "https://educacioncampeche.gob.mx/aprendamosencasa",
            "https://www.lajornadamaya.mx/campeche/177646/el-9-de-agosto-decidira-seduc-si-hay-clases-presenciales-en-campeche",
            "https://www.gob.mx/sep/es/articulos/boletin-sep-no-102-concluye-exitosamente-el-proceso-de-vacunacion-a-personal-docente-en-30-entidades-del-pais?idiom=es",
            "https://www.poresto.net/campeche/2021/8/10/regreso-clases-presenciales-en-campeche-sera-el-30-de-agosto-seduc-271707.html"
        ],
        color: StateBack2School
    },
    {
        id: "MX-YUC",
        name: "Yucatán",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "SP",
        alumnosVacunados: "NO",
        nombreEstrategia: "Regreso seguro a clases",
        actividadesPresenciales: "El Gobierno de Yucatán mantiene su postura del regreso a clases, en forma presencial; para el 30 de agosto próximo. Sin embargo, éste será voluntario, opcional y mixto. Estrategia estatal de Regreso Seguro a Clases, elaborada con base en los lineamientos que emitió la Federación y la participación de la Mesa Central conformada por representantes de seis Secretarías, entre ellas la de Educación y Salud, el Congreso del Estado, universidades, sindicatos, cámaras empresariales, la Comisión estatal de Derechos Humanos (Codhey), padres de familia, estudiantes y colegios.",
        aforosFiltrosSanitarios: "Se considera un retorno voluntario, opcional y mixto. <br><br>Secretaría de Educación considera realizar jornadas de limpieza en las escuelas y sesiones de los Comités Participativos de Salud Escolar; que se desarrollará del 11 al 13 de agosto venideros, como una medida preventiva ante la pandemia mundial por Covid-19.",
        referencias: [
            "http://www.educacion.yucatan.gob.mx/boletines/index",
            "https://www.yucatan.com.mx/merida/yucatan-tendra-un-regreso-a-clases-presencial-en-agosto",
            "https://www.lajornadamaya.mx/yucatan/176643/los-ninos-deben-regresar-a-clases-presenciales-lo-mas-pronto-posible-vila-dosal",
            "https://www.lajornadamaya.mx/yucatan/175807/regreso-a-clases-en-yucatan-sera-el-30-de-agosto"  
        ],
        color: StateBack2School
    },
    {
        id: "MX-ROO",
        name: "Quintana Roo",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 agosto 2021",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "NO",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "75.6",
        alumnosVacunados: "NO",
        nombreEstrategia: "Plan para Regreso a Clases Seguro",
        actividadesPresenciales: "Los alumnos en Quintana Roo no regresarían a las clases presenciales para el 30 de agosto, afirmó Sergio Acosta Manzanero. <br><br>El presidente de la Asociación Estatal de Padres de Familia, afirmó que las escuelas no estarán listas para el inicio del ciclo escolar 2021-2022.",
        aforosFiltrosSanitarios: "Cuatro pasos: <br> 1) Estar en semáforo amarillo tanto federal como estatal para abrir los Centros Comunitarios de Aprendizaje donde se ofrece asesoría; <br> 2) Rehabilitación de escuelas (infraestructura, limpieza y orden); <br> 3) Aplicación de un diagnóstico académico. <br> 4) Y que cada institución educativa entregue o actualice su plan de regreso a clases, cumpliendo con los protocolos sanitarios.Prueba para diagnosticar el rezago entre los alumnos tras un año y tres meses de clases en línea. Los padres de familia los encargados de aplicar la prueba, que consistirá en un grupo de preguntas de lo que tendrían que conocer según su grado de escolaridad.",
        referencias: [
            "https://qroo.gob.mx/seq/detallan-acciones-de-la-seq-para-el-regreso-clases-destacando-cuatro-importantes-temas",
            "https://www.sdpnoticias.com/estados/quintana-roo/quintana-roo-descartan-regreso-a-clases-presenciales/"

        ],
        color: StateBack2School
    },
];

var DataStates_v8 = [
    {
        id: "MX-BCS",
        name: "Baja California Sur",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "13 de septiembre",
        tipoModelo: "A distancia",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "78.8",
        alumnosVacunados: "Sin Definir",
        nombreEstrategia: "No disponible",
        actividadesPresenciales: "Del próximo lunes 30 de agosto, fecha que el calendario oficial marca el inicio del ciclo escolar 2021-2022, al viernes 10 de septiembre, los planteles de enseñanza básica de Baja California Sur realizarán tareas de organización con el objetivo de reanudar las clases el lunes 13 de septiembre, ya sea de manera presencial o en el modelo a distancia, informó el secretario de Educación Pública del Estado, Gustavo Rodolfo Cruz Chávez.",
        aforosFiltrosSanitarios: "Se capacitaron a los comités participativos de salud escolar, en cada escuela debe de existir un comité de esta naturaleza que se encargará de revisar las condiciones en las cuales se encuentra la escuela, se tendrán algunos filtros y el primero desde luego será la casa, será en el hogar donde se revise la condición de su hijo o hija y tener en claro cuáles son los síntomas COVID, el segundo filtro al entrar a la escuela y el tercero previo a entrar al salón de clases.",
        referencias: [
            "https://kidstudia.com/guia/todo-sobre-el-regreso-a-clases-en-mexico/baja-california-sur/",
            "https://www.bcsnoticias.mx/confirmado-baja-california-sur-ya-se-prepara-para-regreso-a-las-aulas-en-agosto-sep/",
            "https://www.elsudcaliforniano.com.mx/local/regreso-a-clases-solo-sera-en-alerta-verde-en-bcs-6987936.html",
            "http://www.bcs.gob.mx/noticias/concluyo-vacunacion-del-personal-educativo-en-bcs/#:~:text=CONCLUY%C3%93%20VACUNACI%C3%93N%20DEL%20PERSONAL%20EDUCATIVO%20EN%20BCS,-La%20Paz%20B.C.S.&text=Con%20la%20aplicaci%C3%B3n%20de%2017,educativo%20de%20Baja%20California%20Sur",
            "https://www.animalpolitico.com/2021/08/michoacan-hidalgo-rechazan-regreso-clases-presenciales-estados-siguen-evaluando",
            "http://www.sepbcs.gob.mx/contenido/boletines/2021/08/2021-08-25_Bol162.pdf"

        ],
        color: StateBack2School
    },
    {
        id: "MX-BCN",
        name: "Baja California Norte",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "76.30",
        alumnosVacunados: "NO",
        nombreEstrategia: "Regreso Seguro a Clases Presenciales",
        actividadesPresenciales: "Se preveé que 24 escuelas vuelvan a clases presenciales durante la primera semana del ciclo 2021-2022 (Lunes 30 de agosto) <br><br>La asistencia será voluntaria, gradual y escalonada. Durante septiembre, los planteles se duplicarán semanalmente, de acuerdo a la disposición de escuelas y la autorización de padres de familia. las clases serán en un modelo híbrido entre presenciales y a distancia, ya que los alumnos seleccionados asistirán tres y dos días de la semana, de manera alternada, a partir de la primera letra del apellido.   el regreso a clases será en 24 escuelas (cuatro por municipio y dos públicas y dos privadas), en la segunda semana serán 48; en la siguiente 72 y después 96, de acuerdo a la evolución y monitoreo del manejo de salud. Serán los padres de familia los que aprueben el regreso de clases presenciales de sus hijos.",
        aforosFiltrosSanitarios: "El regreso a las escuelas de manera presencial, se realizará de forma gradual y segura, incluyendo la realización de jornadas de limpieza previas al ingreso de los estudiantes. las escuelas de cada municipio o poblado serán divididas en áreas que incluyan un centro de salud que se encargará de dar atención a esa región en caso de ser necesario.  Los padres de familia y las escuelas deberán coordinar filtros para evitar la propagación de la enfermedad. en caso de que se detecte un caso sospechoso, el grupo será suspendido por 14 días, mientras que si se confirma un caso de COVID-19 se suspenderán las clases en todo el plantel. Las aulas tendrán un máximo de 10 personas.",
        referencias: [
            "https://www.sandiegouniontribune.com/en-espanol/noticias/bc/articulo/2021-07-26/baja-california-anuncia-regreso-a-clases-presenciales-semaforo-epidemiologico-regional-permanece-verde",
            "http://www.educacionbc.edu.mx/regresoseguro/",
            "https://www.jornada.com.mx/notas/2021/07/26/estados/planean-regreso-a-clases-gradual-en-baja-california-a-partir-de-agosto/#:~:text=El%20gobierno%20de%20Baja%20California,forma%20gradual%2C%20escalonada%20y%20segura.",
            "https://www.bcsnoticias.mx/incierto-el-regreso-a-clases-en-bcs-acercandose-la-fecha-se-tomaran-decisiones-salud/",
            "https://www.gob.mx/sep/es/articulos/boletin-sep-no-102-concluye-exitosamente-el-proceso-de-vacunacion-a-personal-docente-en-30-entidades-del-pais?idiom=es",
            "https://www.poresto.net/campeche/2021/8/15/regreso-clases-en-campeche-conoce-las-fechas-para-inscripcion-del-ciclo-escolar-2021-2022-272491.html"
        ],
        color: StateBack2School
    },
    {
        id: "MX-SON",
        name: "Sonora",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "87",
        alumnosVacunados: "NO",
        nombreEstrategia: "Retorno Seguro, estrategias para el regreso a clases presenciales del ciclo 2021-2022",
        actividadesPresenciales: "A partir del 30 de agosto, los estudiantes en Sonora regresarán a las aulas conforme a las disposiciones federales y condiciones sanitarias para ver la gradualidad del retorno. <br><br>Regreso a clases presenciales debe darse con una estrategia conjunta para hacerlo de la forma más segura: Gobernadora Pavlovich",
        aforosFiltrosSanitarios: "<ol><li> Se invita a los padres de familia, a maestros, a las autoridades educativas a que se integren al Comité́ Participativo de Salud en su escuela.</li> <li>Establecer el filtro de salud en casa, y participar en los filtros de la escuela y del salón de clases, para detectar síntomas y tomar las medidas necesarias.</li><li> Lavarse las manos con agua y jabón y/o gel antibacterial.</li><li> Usar cubrebocas sobre nariz y boca, en todo momento.</li><li> Mantener la sana distancia.</li><li> Dar mayor uso a los espacios abiertos.</li><li> Por ahora, no tener ceremonias ni reuniones generales.</li><li> Avisar inmediatamente la presencia o sospecha de casos de COVID-19 en la escuela.</li><li> Inscribirse a los cursos de apoyo socioemocional en línea de SEP-Salud “Retorno Seguro”: climss.imss.gob.mx</li><li>  Al salir de casa, lleva a la escuela la Carta compromiso de corresponsabilidad.</li></ol><br> Ante el aumento de contagios y el registro de estas variantes del coronavirus, la gobernadora Pavlovich instó a seguir con las acciones y programas de prevención, para seguir con las medidas y protocolos sanitarios rigurosos. Salones de clases con buena ventilación.<br><br>La Secretaría de Educación y Cultura y el Instituto Sonorense de Infraestructura Educativa (ISIE) han realizado una valoración de las condiciones de la infraestructura física de los planteles escolares, con el fin de atender a todos los requerimientos apremiantes de los inmuebles.<br><br><ol><li>Pupitres separados al menos metro y medio entre cada uno.</li><li>Máximo 15 alumnos en cada salón.</li><li>Uso de gel antibacterial y lavado frecuente de manos.</li><li>Uso correcto de cubrebocas en todo momento.</li></ol>",
        referencias: [
            "http://www.sec.gob.mx/portal/index.php?op=nota&p=1033",
            "https://kidstudia.com/guia/todo-sobre-el-regreso-a-clases-en-mexico/sonora/#medidas+para+el+regreso+a+clases+en+sonora",
            "https://www.elsoldehermosillo.com.mx/local/es-oficial-alumnos-de-sonora-si-regresaran-a-clases-presenciales-30-de-agosto-sec-gobierno-del-estado-escuelas-7046536.html",
            "https://www.elsoldehermosillo.com.mx/local/es-oficial-alumnos-de-sonora-si-regresaran-a-clases-presenciales-30-de-agosto-sec-gobierno-del-estado-escuelas-7046536.html",
            "http://www.sec.gob.mx/portal/index.php?op=nota&p=1034",
            "https://www.elsoldehermosillo.com.mx/doble-via/salud/el-covid-19-y-los-ninos-esto-es-lo-que-sabemos-antes-de-ir-a-la-escuela-regreso-a-clases-pandemia-7097189.html"
        ],
        color: StateBack2School
    },
    {
        id: "MX-CHH",
        name: "Chihuahua",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "NO",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "95",
        alumnosVacunados: "NO",
        nombreEstrategia: "Estrategia Chihuahua (implementada desde julio)",
        actividadesPresenciales: "Este martes 24 de agosto Javier Corral Jurado, gobernador de Chihuahua, explicó que está firme en el lineamiento para regresar a clases presenciales, con base en un modelo escalonado, limitado al 50% de aforo, fuertes controles sanitarios y la flexibilidad para ajustarse a nuevos dictámenes del sector Salud.   El gobernador explicó que el regreso a clases presenciales, a partir del próximo lunes 30 de agosto, será con un aforo de hasta el 50 por ciento, es decir, que podría ser menos pero nunca rebasarse. “Vamos a privilegiar los espacios abiertos, pero además tiene ciertas características: en el estado de Chihuahua, este regreso presencial, por ejemplo, las sesiones van a ser de 45 minutos, va a haber muchos espacios para estar sanitizando, generando medidas de higiene de desinfección” Las actividades masivas, deportivas, cívicas y culturales seguirán suspendidas o bajo estricto control sanitario.   Ante la cantidad de dudas existentes, este lunes 30 de agosto, la Secretaría de Educación y Deportes de Chihuahua publicó una infografía en la que, entre otros asuntos, aclara que los maestros no tendrán que dar de forma simultánea clases presenciales y en línea durante la jornada, sino que la educación será presencial de lunes a jueves y sólo los viernes a distancia, que los docentes tampoco deberán atender a contraturno vía virtual, manteniendo su horario de trabajo normal, que en Chihuahua no se aplicará la “Carta de corresponsabilidad” sino el Aviso “Nos cuidamos; los cuidamos” y que en caso de un positivo confirmado el grupo pasará a educación a distancia o virtual.  [También que la asistencia presencial no es obligatoria].",
        aforosFiltrosSanitarios: "Iniciarán con aforos del 50%, las sesiones van a ser de 45 minutos; en preescolar solamente habrá tres sesiones diarias, en primaria hasta cinco y en secundaria hasta 7, cada una de 45 minutos, y entre ellas se suspenderá la actividad para ventilar las aulas. De acuerdo al contexto de cada plantel, los grupos se dividirán por grado o por inicial de apellido; se dará seguimiento al modelo de filtros sanitarios saliendo de casa, llegando al plantel, y durante las sesiones académicas.",
        referencias: [
            "https://www.infobae.com/america/mexico/2021/08/25/javier-corral-promueve-regreso-escalonado-a-las-escuelas-de-chihuahua/",
            "http://www.chihuahua.gob.mx/contenidos/apoyamos-impulso-para-el-regreso-presencial-escalonado-clases-javier-corral",
            "https://elpuntero.com.mx/inicio/2021/08/24/no-tendran-maestrs-que-dar-clases-presenciales-y-en-linea-de-manera-simultanea-ni-que-atender-virtual-en-contraturno-en-chihuahua-no-aplicara-carta-de-corresponsabilidad-sino-aviso-propio/"

        ],
        color: StateBack2School
    },
    {
        id: "MX-COA",
        name: "Coahuila de Zaragoza",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "23 de agosto",
        tipoModelo: "Híbrido", 
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "85.4",
        alumnosVacunados: "NO",
        nombreEstrategia: "No disponible",
        actividadesPresenciales: "Del 23 de agosto al 03 de septiembre se tiene previsto realizar pruebas diagnósticas y una evaluación para identificar el abandono y rezago escolar.  Del 6 al 30 de septiembre se pretende llevar a cabo un período de recuperación para alumnos en rezago. El regreso a clases presenciales será obligatorio paras los docentes.",
        aforosFiltrosSanitarios: "Previo a la apertura de las escuelas deberá pedírseles a los padres de familia, entre otras cosas, que sus hijos acudan bañados a la escuela y que en caso de notar algún síntoma de enfermedad como fiebre, tos, dolor de garganta o de cabeza no podrán asistir y deberá notificarse a la autoridad del plantel. Las escuelas por su parte deberán prepararse con lo siguiente: Insumos para colocar un filtro a la entrada del plantel, tanto para el personal que trabaja en la escuela como para los alumnos En el filtro deberá haber: • Alcohol en gel con alcohol isopropílico al 70% para la higiene de manos a la entrada al plantel • Termómetro infrarrojo para la toma de temperatura previo a la entrada al plantel. Los salones de clases deberán contar con:<ul><li>• Alcohol en gel con alcohol isopropílico al 70%.</li><li>• Caja de pañuelos desechables.</li><li>• Bote de basura con pedal y tapa.</li><li>• Toallitas desinfectantes para la limpieza del pupitre y/o mesas de trabajo. Las áreas comunes (patios, canchas, áreas de juego) deberán limpiarse como se hace normalmente todos los días, al igual que el resto de las instalaciones, poniendo énfasis en las superficies de mayor contacto como escritorios, mesas, interruptores, picaportes.</li></ul>Todos los baños deberán contar con agua, jabón, sanitas para secarse las manos,papel higiénico y botes de basura con pedal y tapa. Existe la posibilidad detransmisión de SARS-CoV-2 mediante inhalación de la aerosoles fecales por locual se debe poner especial atención en la ventilación de los baños, así como enla utilización estricta de cubreboca al acceder a ellos. Se recomienda educar a losalumnos a bajar la tapa del inodoro antes de jalar la palanca.",
        referencias: [
            "https://www.elheraldodesaltillo.mx/2021/07/27/habra-periodo-de-diagnostico-y-otro-de-recuperacion-al-regreso-a-clases-en-coahuila/",
            "https://www.elheraldodesaltillo.mx/2021/07/05/volverian-el-23-de-agosto-a-clases-presenciales-90-escuelas-en-coahuila/",
            "https://vanguardia.com.mx/articulo/regreso-clases-sera-obligatorio-para-los-profesores-en-coahuila",
            "https://www.saludcoahuila.gob.mx/COVID19/documentos/MANUAL%20REAPERTURA%20ESCOLAR%202021.pdf",
            "https://www.gob.mx/sep/es/articulos/boletin-sep-no-102-concluye-exitosamente-el-proceso-de-vacunacion-a-personal-docente-en-30-entidades-del-pais?idiom=es"
        ],
        color: StateBack2School
    },
    {
        id: "MX-NLE",
        name: "Nuevo León",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "Sin Definir",
        reincorporacionGradual: "Sin Definir",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "100",
        alumnosVacunados: "NO",
        nombreEstrategia: "No disponible",
        actividadesPresenciales: "Al brindar una rueda de prensa en Palacio de Gobierno, el gobernador del estado reafirmó que el regreso a clases a partir del 30 de agosto será a través de tres modelos: presencial, híbrido y en línea. <br><br></br>Aclaró que sólo el 3 por ciento de las escuelas iniciarán actividades de manera presencial, el 15 por ciento serán híbridas y el 82 por ciento en línea. <br><br>En el caso de infraestructura de educación pública precisó que de 3 mil 600 edificios, 647 tienen daños de “cirugía mayor”, es decir, drenajes que no funcionan, entre otros.   Firme el regreso a las aulas en 30 entidades. Nuevo León dio a conocer que 156 de los tres mil 980 planteles que hay en su territorio retomarán actividades presenciales, sin receso ni venta de alimentos en cooperativas.",
        aforosFiltrosSanitarios: "Medidas sanitarias. Recomendaciones para un regreso saludable a las aulas escolares de nivel básico:<ul><li>• Establecer comités participativos de salud escolar.<li>• Todos los planteles deberán tener acceso a agua y jabón y/o gel antibacterial para lavado de manos constante. </li><li>• Resguardo del personal educativo en grupos de riesgo (mujeres embarazadas y personas inmunocomprometidas). </li><li>• Uso obligatorio de cubrebocas en todo momento. </li><li>• Asegurar una sana distancia entre alumnos y maestros al menos 1.5 metros. </li><li>• Priorizar los espacios abiertos o una adecuada ventilación de las aulas. </li><li>• Suspensión de cualquier tipo de ceremonias o reuniones, como asambleas, recesos recreativos o ceremonias de graduación, y uso de cooperativas. </li><li>• Detección temprana mediante la aplicación de 3 filtros: En casa, al entrar a la escuela y en el salón de clases.</li><li>• Atención psicoemocional.</li><li>• La Secretaría de Educación y la Secretaría de Salud determinarán las condiciones del regreso de acuerdo al cumplimiento de los programas de educación básica y protocolos sanitarios.</li><li>• Si existe un contagio en el plantel educativo, ya sea maestro, alumno o personal administrativo, serán suspendidas las actividades por 14 días para continuar a distancia y se hará el estudio epidemiológico.</li></ul>",
        referencias: [
            "https://www.milenio.com/sociedad/clases-presenciales-nuevoleon-colegios-seguro-social",
            "https://www.razon.com.mx/mexico/firme-regreso-aulas-30-entidades-448357",
            "https://www.nl.gob.mx/campanas/recomendaciones-para-un-regreso-saludable-las-aulas-escolares-de-nivel-basico"
        ],
        color: StateBack2School
    },
    {
        id: "MX-TAM",
        name: "Tamaulipas",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "SP",
        alumnosVacunados: "NO",
        nombreEstrategia: "Jornada Presencial de Regularización",
        actividadesPresenciales: "El Gobernador Francisco García Cabeza de Vaca y los titulares de la Secretaría de Educación y Secretaría de Salud presentaron este martes las medidas que se llevarán a cabo en Tamaulipas para un regreso seguro, progresivo y voluntario a clases de manera presencial. <br><br>Expresó que se evaluarán las condiciones de cada región y de esta manera se determinará el retorno a las aulas educativas para el 30 de agosto, existen 651 escuelas en posibilidad de regresar a clases, pues están en municipios con semáforo verde y amarillo; estas escuelas se ubican en municipios de zona rural y periferia de ciudades. Así que por el momento, los municipios grandes como Tampico, Altamira, Ciudad Victoria, Reynosa, Matamoros y Nuevo Laredo no están consideradas, pero dependerá del comportamiento de la pandemia.<br><br>Aunque no se podrá obligar a nadie, por lo que será voluntario (con carta responsiva firmada por padres de los estudiantes) y se respetará la decisión de los padres de familia. <br><br>Educación básica se incorpora el 30 de agosto , Educación Media Superior única el 21 de septiembre y Educación superior, dependerá si es semestral o cuatrimestral.<br>Curso un Pilotaje para el regreso a clases, el cual cuenta con 2 fases de implementación.<br><br>El Secretario de Educación de Tamaulipas, Mario Gómez Monroy encabezó la Presentación de la Estrategia Estatal Organizacional Regreso a Clases Presenciales Seguro, Gradual y Voluntario para el Ciclo Escolar 2021 – 2022, en sesiones por niveles de educación Especial, Inicial, Preescolar, Primaria y Secundaria. (video de estrategia)<br><br>Definirán escuelas para el retorno a clases presenciales en Tamaulipas<br>La evaluación sobre cuáles escuelas están en condiciones de regresar a las aulas, se definirá el día jueves 26 de agosto.",
        aforosFiltrosSanitarios: "Anunció que la firma de una carta responsiva por parte de los padres de familia no será una obligación en Tamaulipas. “Se dio a conocer a nivel nacional que los padres de familia tenían que firmar un documento para poder permitir que sus hijos ingresen a las escuelas, en Tamaulipas eso no es un requisito, no tendrán que firmar absolutamente nada, es totalmente voluntario”, afirmó <br><br>Los municipios que están sujetos a este regreso presencial seguro, progresivo y voluntario deben estar en fase 2 del semáforo epidemiológico.<br><br>Anunció que la firma de una carta responsiva por parte de los padres de familia no será una obligación en Tamaulipas. “Se dio a conocer a nivel nacional que los padres de familia tenían que firmar un documento para poder permitir que sus hijos ingresen a las escuelas, en Tamaulipas eso no es un requisito, no tendrán que firmar absolutamente nada, es totalmente voluntario”, afirmó <br><br> Los municipios que están sujetos a este regreso presencial seguro, progresivo y voluntario deben estar en fase 2 del semáforo epidemiológico.<br><br> Están por arrancar un pilotaje denominado Jornada Presencial de Regularización, fase 2. <br> El regreso a las aulas será en los municipios donde se tenga semáforo verde y amarillo.<br><br> Derivado de la Reunión Interinstitucional llevada a cabo esta semana con la Secretaría de Salud, se establecieron los acuerdos para determinar el Regreso a Clases Presenciales para el Inicio del Ciclo Escolar 2021-2022, en los niveles de Educación Básica, priorizando la salud física y emocional de la comunidad educativa, con acciones de prevención de riesgos ante la contingencia Covid-19. <br>Otro de los acuerdos para el regreso a clases presenciales, es el de suministrar con un kit de insumos para limpieza y sanitización a cada escuela, iniciando con los municipios en semáforo epidemiológico verde y amarillo.",
        referencias: [
            "https://www.tamaulipas.gob.mx/educacion/avisos/planteles-seleccionados-fase-2/",
            "https://www.milenio.com/politica/comunidad/regreso-a-clases-presenciales-en-tamaulipas-sera-voluntario",
            "https://www.tamaulipas.gob.mx/educacion/avisos/planteles-seleccionados-fase-2/",
            "https://www.tamaulipas.gob.mx/educacion/regresoaclasespresenciales-fasepiloto-boletines/",
            "https://kidstudia.com/guia/todo-sobre-el-regreso-a-clases-en-mexico/tamaulipas/",
            "https://www.milenio.com/politica/regreso-clases-vacaciones-ciclo-2021-2022-tamaulipas",
            "https://www.elsoldetampico.com.mx/local/regional/regreso-a-clases-presenciales-en-tamaulipas-sera-voluntario-cabeza-de-vaca-7026334.html",
            "https://www.hoytamaulipas.net/notas/464556/Regresaran-a-clases-presenciales-en-Tamaulipas-el-30-de-agosto.html",
            "https://www.milenio.com/politica/comunidad/regreso-clases-tamaulipas-municipios-semaforo-verde-amarillo",
            "https://www.tamaulipas.gob.mx/educacion/2021/08/acuerdos-para-el-regreso-a-clases-presenciales-en-educacion-basica-2021-2022/",
            "https://www.tamaulipas.gob.mx/2021/08/presenta-gobierno-de-tamaulipas-medidas-para-el-regreso-presencial-a-clases-de-manera-segura-progresiva-y-voluntaria/",
            "https://www.tamaulipas.gob.mx/educacion/2021/08/convocatoria-regreso-a-clases-presenciales-para-municipios-en-fase-i/",
            "https://www.elsoldetampico.com.mx/local/regional/definiran-escuelas-para-el-retorno-a-clases-presenciales-en-tamaulipas-7127426.html"
        ],
        color: StateBack2School
    },
    {
        id: "MX-SIN",
        name: "Sinaloa",
        regresoActividadesPresenciales: "SI",
        fechaRetorno: "30 de Agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "90",
        alumnosVacunados: "NO",
        nombreEstrategia: "Por decreto, emiten lineamientos para el regreso a clases en Sinaloa",
        actividadesPresenciales: "Medios indican: El modelo para el regreso a clases de manera presencial que implementaron Jalisco y Sinaloa desde marzo pasado es un buen esquema a seguir en este regreso a clases a partir del 30 de agosto próximo, señalaron representantes de la Asociación Mexicanos Primero. <br><br> El secretario de Educación Pública y Cultura, Juan Alfonso Mejía López, explicó que en cada una de las escuelas se determinará los días en que se darán las clases presenciales y lar virtuales, es decir, los maestros pueden tener las clases en aulas por una semana y la siguiente en línea, o elegir los días de la semana para cada modalidad.<br><br> En Sinaloa existen elementos para un regreso a clases gradual y focalizado, además de seguro para las niñas, niños y jóvenes, de acuerdo a la instrucción del gobernador Quirino Ordaz Coppel, quien fue reconocido por el presidente de la República, Andrés Manuel López Obrador, como el primer mandatario que solicitó la vacunación a las y los maestros del país para un regreso seguro a las escuelas.<br><br> En Sinaloa existen elementos para un regreso a clases gradual y focalizado, además de seguro para las niñas, niños y jóvenes, de acuerdo a la instrucción del gobernador Quirino Ordaz Coppel, quien fue reconocido por el presidente de la República, Andrés Manuel López Obrador, como el primer mandatario que solicitó la vacunación a las y los maestros del país para un regreso seguro a las escuelas.",
        aforosFiltrosSanitarios: "Regreso a las aulas en Sinaloa deberá atender condiciones de cada comunidad. Regreso a clases en Sinaloa será de forma gradual, focalizado y seguro. Experiencia previa de 955 Centros Comunitarios de Aprendizaje, donde se atendió a 26 mil 26 alumnos con rezago educativo. El congreso del Estado tiene la postura de “Estamos ansiosos porque los estudiantes regresen, pero la tercera ola de contagios es alarmante, ante este panorama es necesario que las autoridades actúen con prudencia: no hay condiciones del regreso seguro a las aulas",
        referencias: [
            "https://mieducacion.sepyc.gob.mx/sinaloa-coincide-con-el-presidente-andres-manuel-lopez-obrador-el-regreso-a-clases-es-por-el-convencimiento-nada-por-la-fuerza/",
            "https://www.debate.com.mx/opinion/Posible-retorno-a-las-aulas-20210730-0348.html",
            "https://mieducacion.sepyc.gob.mx/",
            "https://www.elsoldemazatlan.com.mx/local/regreso-a-clases-en-sinaloa-sera-en-modalidad-mixta-7045888.html",
            "https://www.elsoldemazatlan.com.mx/local/regreso-a-clases-en-sinaloa-sera-en-modalidad-mixta-7045888.html"
        ],
        color: StateBack2School
    },
    {
        id: "MX-DUR",
        name: "Durango",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "Si",
        reincorporacionGradual: "Si",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "100",
        alumnosVacunados: "NO",
        nombreEstrategia: "No disponible",
        actividadesPresenciales: "Este miércoles 25 se determinará junto al magisterio cuántas escuelas de más más de cinco mil 200 qué hay en el estado, estarían preparadas para brindar clases de manera presencial, afirmó José Aispuro Torres, gobernador del Estado. Dijo que se está realizando un programa, para que las escuelas donde haya las condiciones y que los padres de familia y maestros estén de acuerdo, puedan regresar a clases.Señaló que esas escuelas no recibirían a más del 50 por ciento de los alumnos por clase, se busca que sea en espacios que tengan ventilación, y que esas escuelas cuenten con tomas de agua, energía eléctrica, que cuente con todos los materiales de limpieza, y desde luego con material para desinfectar y que sus sanitarios estén en óptimo servicio.Los horarios serían de menos horas, sin recreos o recesos para evitar la convivencia que pueda representar un riesgo.   Garantiza el secretario de Educación de Durango regreso a clases presenciales seguro. En 48 horas se presentarán los protocolos sanitarios a seguir en los planteles académicos. Ante el regreso a clases presenciales programado para el 30 de agosto, el titular de la Secretaría de Educación del Estado de Durango (SEED), Rubén Calderón Lujan, indicó que se pide comprensión y paciencia acerca de esta información, ya que aún se encuentran en proceso de definir detalles para este nuevo ciclo escolar.",
        aforosFiltrosSanitarios: "Al 24 de agosto, se dice que en 48 horas se presentarán los protocolos sanitarios a seguir en los planteles académicos.",
        referencias: [
            "https://www.elsoldedurango.com.mx/local/este-miercoles-se-define-cuantas-escuelas-regresan-a-clases-presenciales-en-durango-7125588.html",
            "https://lavozdgo.com/2021/08/24/garantiza-seed-regreso-a-clases-presenciales-seguro/"

        ],
        color: StateBack2School
    },
    {
        id: "MX-ZAC",
        name: "Zacatecas",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "90.6",
        alumnosVacunados: "NO",
        nombreEstrategia: "Regreso a clases presenciales",
        actividadesPresenciales: "El regreso a clases presenciales traería un impacto positivo a niñas, niños y adolescentes luego de 17 meses en confinamiento, aseguró Aimé Alanís Pérez, coordinadora del Programa de Convivencia Escolar de la Secretaría de Educación en Zacatecas (SEZ).<br><br>Con el objetivo de que las escuelas de la Dirección Regional 2 Federal de la Secretaría de Educación cumplan con las condiciones de sanidad y seguridad para un posible regreso a clases este próximo 30 de agosto, personal de las mismas iniciaron con brigadas de limpieza en preescolar, primaria y secundaria, acciones que se tienen contempladas para los días 11, 12 y 13 del presente mes.<br><br>Regreso a clases en Universidad de Zacatecas será virtual<br><br>En declaraciones  recientes, se reiteró que el regreso será solo si los padres de familia están de acuerdo. Se comentó que solo en los municipios de el Salvador, Melchor Ocampo, Mezquital del Oro, Apozol, Apulco, donde no hay contaguos se puede retomar el regreso a clases presenciales. Solo se publicó exhorto de la legislatura local para que la Secretaría de Educación y la Secretaría de Salud del Estado de Zacatecas elaboren un plan estratégico de regreso a clases presenciales seguro, ordenado, gradual, escalonado y cauto; con todos los protocolos de salud establecidos, además de valorar la posibilidad de un regreso a clases inmediato en aquellas instituciones públicas y privadas pequeñas, con pocos alumnos y donde las condiciones físicas así lo permitan.<br><br>Sin embargo, Aún no se puede fijar la postura, hasta conocer las condiciones del semáforo epidemiológico y el lineamiento federal.<br><br>Tras convertirse la educación presencial en una actividad esencial, independientemente del color del semáforo epidemiológico del COVID-19, el lunes 30 de agosto regresarán a las aulas en Zacatecas las y los alumnos de educación básica, media superior y superior, cuyos tutores, padres y madres de familia así lo decidan, por lo que la autoridad educativa está preparada para enfrentar el reto.<br>Así lo dio a conocer la Secretaria de Educación estatal, María de Lourdes de la Rosa Vázquez, con base en las Disposiciones para reanudar las actividades de manera presencial en el Ciclo Escolar 2021-2022.<br><br>En total, 496 escuelas no tienen las condiciones necesarias para un regreso seguro a clases presenciales, de acuerdo con el Sindicato Nacional de Trabajadores de la Educación (SNTE) en Zacatecas y de la Secretaría de Educación (SEZ).<br><br>De las 4 mil 500 escuelas que atienden la educación inicial desde preescolar hasta secundaria, más de 10 por ciento no cumplen con los requisitos para garantizar la seguridad de los pequeños, sobre todo en suministros básicos como agua potable, luz eléctrica y drenaje.",
        aforosFiltrosSanitarios: "De acuerdo con la encuesta realizada por la Secretaría de Educación de Zacatecas (SEZ) a 101 mil 808 madres, padres de familia y tutores, el 81.3 por ciento dijo que está de acuerdo en que niñas, niños y adolescentes regresen a las escuelas de educación básica de manera presencial. El 92.3 por ciento se mostró dispuesto a colaborar en el establecimiento de los filtros sanitarios en casa, escuela y salón de clases, tal como lo establecen los protocolos de la Secretaría de Educación Pública (SEP). Se respetará la sana distancia, se suspenderán las ceremonias y los alumnos tendrán acceso a jabón, agua y gel alcoholado.<br><br> LA UAZ hará encuesta de movilidad y convivencia, “ya se tienen claros los protocolos de seguridad, de sanitización para todos los espacios, solo veremos si será escalonado, de acuerdo a los espacios o por nivel educativo, sin embargo, la decisión se tomará en agosto",
        referencias: [
            "https://imagenzac.com.mx/capital/necesario-el-regreso-clases-presenciales-en-zacatecas-brena-cantu/",
            "http://www.seduzac.gob.mx/portal/index.php",
            "http://www.seduzac.gob.mx/portal/index.php",
            "https://www.zacatecas.gob.mx/mas-de-81-de-madres-y-padres-de-familia-estan-de-acuerdo-en-que-alumnos-de-educacion-basica-regresen-a-las-aulas/ ",
            "https://imagenzac.com.mx/capital/estudiantes-regresaran-a-las-aulas-el-30-de-agosto/",
            "http://ntrzacatecas.com/2021/07/12/prepara-uaz-encuesta-de-movilidad-y-convivencia/",
            "http://ntrzacatecas.com/2021/08/17/regreso-a-escuelas-en-incertidumbre-y-caro/",
            "https://www.elsoldezacatecas.com.mx/local/asi-propone-seduzac-el-regreso-a-clases-presenciales-7121156.html",
            "http://ntrzacatecas.com/2021/08/12/joca-prs/",
            "https://www.periodicomirador.com/2021/08/23/zacatecas-preparado-para-el-regreso-a-clases/",
            "http://ntrzacatecas.com/2021/08/25/casi-500-escuelas-sin-regreso-a-aulas/"
            
        ],
        color: StateBack2School
    },
    {
        id: "MX-SLP",
        name: "San Luis Potosí",
        regresoActividadesPresenciales: "SI",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "90",
        alumnosVacunados: "NO",
        nombreEstrategia: "Protocolo para el regreso seguro a clases",
        actividadesPresenciales: "Aunque los diputados Martha Barajas García y Martín Juárez Córdova coincidieron en que toda la comunidad educativa debe estar protegida y lo mínimo que se requiere es que las escuelas estén en buenas condiciones, con agua, luz, equipo y todo lo necesario para que se cumplan los protocolos sanitarios. No hay un pronunciamiento de la Seccretaria de Educación para confirmar tales  opiniones <br><br>La autoridad educativa federal dará a conocer información para el regreso a clases y en reunión de CONAEDU",
        aforosFiltrosSanitarios: "No habrá regreso a clases presenciales durante el mes de agosto, además recordó que para el regreso a clases presenciales, cuando existan las condiciones sanitarias, se aplicarán nueve intervenciones o medidas para asegurar el bienestar de la comunidad escolar. <br><br> Hubo una reapertura del 15% de escuelas en junio. El saldo fueron dos casos de contagios en docentes y nueve alumnos",
        referencias: [
            "https://slp.gob.mx/sege/Paginas/NOTICIAS/FECHAS-Y-MODALIDAD-DE-REGRESO-A-CLASES--SE-DAR%C3%81N-A-CONOCER-LA-PR%C3%93XIMA-SEMANA.aspx",
            "https://slp.gob.mx/sege/Paginas/NOTICIAS/NO-HAY-REGRESO-A-CLASES-PRESENCIALES-EN-SAN-LUIS-POTOS%C3%8D-SECRETARIO-DE-EDUCACI%C3%93N.aspx",
            "https://www.elsoldesanluis.com.mx/local/confirma-la-sege-el-regreso-a-clases-el-30-de-agosto-en-san-luis-potosi-7073590.html",
            "https://www.elsoldesanluis.com.mx/local/en-slp-no-hay-condiciones-para-regreso-a-clases-presenciales-7097203.html",
            "https://www.slp.gob.mx/sege/PDF/Estrategia%20Estatal%20para%20el%20Regreso%20Seguro%20a%20Clases.pdf"
        ],
        color: StateBack2School
    },
    {
        id: "MX-NAY",
        name: "Nayarit",
        regresoActividadesPresenciales: "SI",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "85.4",
        alumnosVacunados: "NO",
        nombreEstrategia: "Aprende en casa",
        actividadesPresenciales: "Se tenía previsto que algunos municipios de la Sierra regresarán a clases presenciales en mayo sin embargo ante el alza en casos de covid y el retroceso del semáforo de verde a amarillo dicho iniciativa se frenó.<br><br> El regreso a clases para educación básica está programado para el 10 de agosto, siempre y cuando Nayarit se encuentre en semáforo verde. <br><br> En estos momentos el Estado de Nayarit NO se encuentra en condiciones de regresar a clases presenciales por el alto índice de incrementos de casos de COVID-19”, declaró en entrevista Martín Isaac Pérez, Subsecretario de Educación Media Superior y Superior en el Estado de Nayarit.",
        aforosFiltrosSanitarios: "El subsecretario de Educación Media Superior y Superior en el Estado, Martín Isaac Pérez quien explicó que el recurso para hacer las reparaciones pertinentes a los planteles tras más de un año de estar solas, comienzan a llegar, por lo tanto, antes de que inicie el ciclo ya deben de estar listas para recibir a los alumnos.<br><br>Siguiendo los protocols establecidos por Gobierno Federal<br><br>En caso de que se reanuden las clases presenciales en el estado, se tomarán la siguientes medidas:<ol><li>Establecimiento de Comités de salud escolar.</li><li>Mantener sana distancia y uso general del cubreboca en los planteles.</li><li>Acceso a agua y jabón.</li><li>Suspensión de todo acto cívico o ceremonia.</li><li>Maximización del uso de espacios abiertos.</li><li>Detección temprana de contagios.</li><li>Cierre de escuelas en caso de contagio.</li></ol>",
        referencias: [
            "https://www.nayarit.gob.mx/seccion/educacion",
            "https://meridiano.mx/seccion/nayarit/nayarit-no-est-en-condiciones-de-regresar-a-clases-presenciales-educaci-n-1/",
            "https://www.nayarit.gob.mx/seccion/educacion#:~:text=El%20'Verano%20Divertido'%20iniciar%C3%A1%20el,cuando%20existan%20las%20condiciones%20sanitarias",
            "https://kidstudia.com/guia/todo-sobre-el-regreso-a-clases-en-mexico/nayarit/",
            "https://meridiano.mx/seccion/nayarit/nayarit-no-est-en-condiciones-de-regresar-a-clases-presenciales-educaci-n-1/",
            "https://www.gob.mx/sep/es/articulos/boletin-sep-no-102-concluye-exitosamente-el-proceso-de-vacunacion-a-personal-docente-en-30-entidades-del-pais?idiom=es",
            "https://latinus.us/2021/08/11/regreso-clases-presenciales-estados-volveran-aulas-nuevo-ciclo-escolar/",
            "https://www.eloccidental.com.mx/local/respalda-seccion-49-retorno-a-clases-presenciales-en-nayarit-7082730.html",
            "https://vallartaindependiente.com/2021/08/16/siempre-si-esta-contemplado-el-regreso-a-las-aulas-en-nayarit/",
            "https://meridiano.mx/articulo/2021-08-16/inminente-regreso-a-clases-presenciales-en-nayarit-este-30-de-agosto-1",
            "https://www.debate.com.mx/estados/SEP-confirma-regreso-a-clases-presenciales-en-Nayarit-sera-escalonado-y-voluntario-20210819-0227.html"
        ],
        color: StateBack2School
    },
    {
        id: "MX-JAL",
        name: "Jalisco",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de Agosto 2021",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "SP",
        alumnosVacunados: "NO",
        nombreEstrategia: "Modelo hibrido y opcional de regreso a clases-Regreso a clases presenciales",
        actividadesPresenciales: "Así, a partir de hoy estarán regresando a las aulas 126 mil 197 estudiantes y ocho mil docentes y se tienen inscritos a 330 mil alumnos para estos niveles de educación media superior y para el próximo 30 de agosto, se estará iniciando el retorno a las aulas en los niveles básicos, es decir, preescolar, primaria y secundaria, siempre y cuando los grupos no rebasen la capacidad del 50 por ciento del aforo en las aulas.",
        aforosFiltrosSanitarios: "En las principales acciones son: el uso del cubrebocas es obligatorio para todos los niveles y sana distancia<br>Por otro lado, se emiten protocolos detallados para todos los niveles y actividades:<br>Protocolo de acción ante COVID-19 para Grupos de Seguimiento Académico, Trámites presenciales y Entrega de materiales educativos aplicable a Educación Básica, Media Superior y Superior Docente<br>Protocolo de actuación ante COVID-19 Sector Educativo para Actos Académicos Presenciales en escuelas de Educación Básica de la Secretaría de Educación del Estado de Jalisco.<br>Protocolo de acción ante COVID-19 Para centros de formación para el trabajo, educación continua y academias.<br>Protocolo de actuación ante COVID-19 Sector Educativo para la realización de exámenes presenciales del Sistema de Preparatoria Abierta.<br>Protocolo de actuación ante COVID-19 Sector Educativo para la atención de actividades esenciales en Educación Media Superior.<br>Protocolo de Acción ante COVID-19 para realizar Educación Física en los planteles escolares",
        referencias: [
            "https://www.jalisco.gob.mx/es/prensa/noticias/129538",
            "https://www.jalisco.gob.mx/es/prensa/noticias/127052",
            "https://www.facebook.com/educacion.jalisco/photos/a.446164440747/10158547049890748/",
            "https://portalsej.jalisco.gob.mx/plan-jalisco-para-la-reactivacion-economica/",
            "https://udgtv.com/noticias/regreso-clases-virtuales-decision-basada-criterios-cientificos-udeg/",
            "https://heraldodemexico.com.mx/nacional/2021/8/23/inicia-ciclo-escolar-2021-2022-en-jalisco-en-educacion-media-superior-bachillerato-de-altas-capacidades-intelectuales-328540.html",
            "https://www.notisistema.com/noticias/regreso-a-clases-presenciales-en-jalisco-se-mantiene-alfaro/"
        ],
        color: StateBack2School
    },
    {
        id: "MX-AGU",
        name: "Aguascalientes",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "91",
        alumnosVacunados: "NO",
        nombreEstrategia: "Me sumo a un regreso seguro",
        actividadesPresenciales: "La Asociación de Instituciones Educativas Particulares del Estado ha solicitado al Instituto de Educación de Aguascalientes se les permita iniciar el ciclo lectivo 2021-2022 el próximo 23 de agosto, y no tener que esperar hasta el día 30, habrá que esperar confirmación <br> Los estudiantes podrán ingresar a los planteles, pero no de manera masiva, es decir no regresan los grupos completos al mismo tiempo, será, durante las primeras semanas de manera escalonada y para permitir a los profesores levantar un diagnóstico sobre el aprendizaje logrado durante este periodo de aislamiento. <br> El nivel básico de educación tendrá un modelo mixto de clases, con grupos reducidos y asistencia alternada a los salones de clases. Los niños de los niveles de preescolar, primaria y secundaria deberán ajustarse a las siguientes fechas: <br><br> Jornadas de limpieza escolar. 11, 12 y 13 de agosto. <br> Inscripciones y reinscripciones. Del lunes 16 de agosto al viernes 10 de septiembre. <br> Evaluación diagnóstica. Del lunes 16 de agosto al viernes 10 de septiembre. <br> Período extraordinario de recuperación. Del lunes 13 de septiembre al martes 23 de noviembre dirigido a los alumnos con deficiencias educativas. <br> El nivel medio superior regresará a clases con un modelo mixto. Los alumnos asistirán a clases de manera alternada, en grupos pequeños y con todas las medidas de salud e higiene necesarias para un regreso seguro. <br><br> El regreso a clases de este nivel educativo tendrá varias fechas, dependiendo del sistema al que está incorporada la escuela de tu hijo. Para el 6 de septiembre todas las preparatorias del estado ya deberán estar en clases. Por lo pronto se prevén las siguientes fechas de inicio: <br><br> Bachilleratos tecnológicos. Inicio de clases 23 de agosto. <br> Conalep. Inicio de clases 30 de agosto. <br> Bachilleratos incorporados a universidades. Misma fecha de inicio de la institución de nivel superior a la que se encuentran incorporados. <br> Las universidades darán inicio a las actividades educativas según su propio calendario escolar.   El regreso presencial a clases a partir del 30 de agosto próximo correspondiente al nuevo ciclo lectivo 2021-2022 será con jornadas completas, de 8:00 am a 1:00pm, en el caso de las primarias",
        aforosFiltrosSanitarios: "Protocolo para prevenir contagios durante el regreso progresivo a clases presenciales en escuelas públicas y privadas de educación básica, media superior y superior , publciado el 27 de julio de 2021, en el cual se detallan las estregias para evitar contagios: Uso obligatorio del cubrebocas, puerta abiertas y evitar contacto con picaportes, filtro de hogar, filtro escolar , filtro de aula, capaictaciones para personal y alumnos, limpieza a profundidad de las superficies, espacios y materiales, clausura de bebederos, reorganizar descansos y actividades fisicas, se promoveran clases en espacios abiertos, lavado de mano, evitar compartir alimentos, promover el estornudo de etiqueta (cubrir con el angulo interno del codo), el uniforme escolar no es obligatorio, se limita el aforo de los eventos  especiales, las actividades de servicios escolares serán por cita, <ul> <li>-Se recabaran cartas de corresponsabilidad.</li> <li>-maximizar sana distancia y aprovechamiento de espacios abiertos y el uso permanente e irrestricto de cubrebocas.</li> <li>-lpimite del 40% diario de la población escolar.</li> <li>- No mas de 9 alumnas y alumnos y un docente por aula de educación primaria y telesecundaria.</li> <li>-No mas de 12 alumnos y alumnas y un docente por aula en escuelas secundarias generale sy técnicas.</li> <li>-No se permite en este periodo ningún tipkde expendio de alimentos ni se realizaran clases de educación fisica o artística</li></ul>",
        referencias: [
            "http://www.hidrocalidodigital.com/aguascalientes-si-tendra-clases-presenciales/#:~:text=Las%20autoridades%20del%20estado%20planean,el%20pr%C3%B3ximo%2030%20de%20agosto."
        ],
        color: StateBack2School
    },
    {
        id: "MX-GUA",
        name: "Guanajuato",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "85.5",
        alumnosVacunados: "NO",
        nombreEstrategia: "Guanajuato educado con R de Reactivación. Regreso a las aulas.",
        actividadesPresenciales: "La SEG informa que no solicitará carta o documento de compromiso de asistencia voluntaria. La medida concuerda con lo dado a conocer este día por la Secretaría de Educación Federal en el Acuerdo número 23/08/21 por el que se establecen diversas disposiciones para el desarrollo del ciclo escolar 2021-2022.",
        aforosFiltrosSanitarios: "ventilación en los salones de clase, el tipo de suministro y almacenamiento de agua, la densidad escolar así como la existencia de espacios físicos para el control de filtros.",
        referencias: [
            "https://www.seg.guanajuato.gob.mx/RegresoalasAulas/SitePages/Inicio.aspx",
            "https://www.seg.guanajuato.gob.mx/RegresoalasAulas/SitePages/Inicio.aspx",
            "https://notus.com.mx/regreso-a-clases-presenciales-en-guanajuato-30-agosto-2021/",
            "https://www.milenio.com/politica/comunidad/guanajuato-regreso-clases-presenciales-ajustara-municipio",
            "https://www.seg.guanajuato.gob.mx/RegresoalasAulas/SitePages/EducacionVacunada.aspx",
            "https://zonafranca.mx/politica-sociedad/educacion/en-guanajuato-sera-voluntario-el-regreso-a-clases/",
            "https://www.unionguanajuato.mx/2021/08/02/regreso-a-clases-presenciales-en-agosto-calendario-escolar-2021-a-2022-de-la-sep/",
            "https://www.debate.com.mx/estados/El-regreso-a-clases-presenciales-sera-voluntario-en-Guanajuato-Diego-Sinhue-20210816-0394.html",
            "https://boletines.guanajuato.gob.mx/2021/08/20/prepara-seg-inicio-de-ciclo-escolar-2021-2022/"
        ],
        color: StateBack2School
    },
    {
        id: "MX-QUE",
        name: "Querétaro",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "95",
        alumnosVacunados: "NO",
        nombreEstrategia: "Programa Especial de Regreso a Clases",
        actividadesPresenciales: "Se Instaló Subcomité Técnico para el Regreso a Clases del Estado de Querétaro, el objetivo: organizar un posible regreso a clases presenciales planeado, escalonado, gradual, y cauto, con el fin de disminuir el riesgo de contagio y proteger la salud de las comunidades escolares.",
        aforosFiltrosSanitarios: "Se realizara de acuerdo a los ''LINEAMIENTOS GENERALES PARA EL REGRESO A LAS ACTIVIDADES ESCOLARES, EN EL MARCO DE LA PANDEMIA COVID-19''",
        referencias: [
            "https://queretaro.gob.mx/regresoaclaseguro.aspx",
            "https://www.queretaro.gob.mx/covid19/contenido/noticiasContenido.aspx?q=vUYGbsxLnli7glS/gQWD0HldeVLSaRLz7RohSiloFmz7sxVv8axXyw==",
            "https://www.queretaro.gob.mx/pdf/SEDEQ_GuiaRegresoaClases.pdf"
        ],
        color: StateBack2School
    },
    {
        id: "MX-HID",
        name: "Hidalgo",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "99",
        alumnosVacunados: "NO",
        nombreEstrategia: "Regreso Seguro a Clases en los centros educativos en el marco de la pandemia COVID 19, Operativo Escudo, Hidalgo Seguro",
        actividadesPresenciales: "El regreso a clases para el ciclo escolar 2021-2022 será el 30 de agosto gradual y voluntario, en tres faces, primero en los 15 municipios en verde y posteriormente evaluando la situación del resto de la entidad, que se mantendrá trabajando a distancia.",
        aforosFiltrosSanitarios: "<ul><li> 1. integración al comité participativo de las escuelas.</li><li> 2. Filtros en casa, escuela y salón de clases.</li><li> 3. lavado de manos con agua y jabón y uso de gel antibacterial. </li><li> 4. uso de cubreboca. </li><li> 5. mantener sana distancia. </li><li> 6. dar mayor uso a los espacios abiertos. </li> <li> 7. no habrá ceremonias ni reuniones generales. </li><li> 8. avisar a la escuela en caso de presencia o sospecha de casos de COVID-19. </li><li> 9. inscibirse en los cursos de apoyo socioemocional en línea de la SEP.</li></ul>",
        referencias: [
            "https://www.milenio.com/ciencia-y-salud/hidalgo-99-docentes-vacunaron-covid-19-seph",
            "https://latinus.us/2021/08/15/regreso-clases-hidalgo-haya-condiciones-gobernador-reporta-aumento-contagios/",
            "https://hidalgo.jornada.com.mx/cuando-entran-a-clases-en-hidalgo-2021/",
            "https://criteriohidalgo.com/noticias/medidas-regreso-clases-presenciales-hidalgo"
        ],
        color: StateBack2School
    },
    {
        id: "MX-COL",
        name: "Colima",
        regresoActividadesPresenciales: "Por Definir",
        fechaRetorno: "Por definir",
        tipoModelo: "Por definir",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "93.5",
        alumnosVacunados: "NO",
        nombreEstrategia: "Estrategia Estatal de Regreso Seguro a Clases Presenciales",
        actividadesPresenciales: "Escenario 1: Escuelas unitarias y bidocentes multigrado, comunitarias Conafe y migrantes con una matrícula menor a 20 alumnos, ubicadas en comunidades rurales, en municipios con baja densidad poblacional, atenderán a todo el alumnado en la modalidad presencial, de acuerdo con el Protocolo de Intervención Escolar Contextualizado. <br><br>Escenario 2: Escuelas de organización completa y grupos menores o hasta 25 alumnos, en municipios y comunidades semiurbanas, atenderán a su alumnado con un enfoque mixto que combine la presencialidad gradual y escalonada, con la educación a distancia, de acuerdo con el Protocolo de Intervención Escolar Contextualizado.<br><br>Escenario 3: Escuelas de organización completa y grupos mayores a 26 alumnos, en localidades urbanas y municipios con mayor densidad demográfica, atenderán al alumnado en las modalidades presencial y escalonada, a distancia y/o mixta, de acuerdo con el Protocolo de Intervención Escolar Contextualizado.",
        aforosFiltrosSanitarios: "Se conformará un comité de salud en cada escuela, filtros al ingreso al plantel, abastecer de agua y jabón, uso obligatorio de mascarilla, cuidado de grupos vulnerables y cuando se detecte algún caso de coronavirus, el plantel cerraría de forma inmediata.",
        referencias: [
            "https://www.milenio.com/estados/colima-pone-a-prueba-el-regreso-a-clases",
            "https://www.colimanoticias.com/antes-del-regreso-a-clases-preservar-la-salud-y-vida-del-alumnado-y-docentes-se/",
            "https://diariodecolima.com/noticias/detalle/2021-07-23-flores-colima-est-preparado-para-iniciar-el-ciclo-escolar",
            "https://elcomentario.ucol.mx/elabora-colima-su-estrategia-para-regreso-a-clases-presenciales/",
            "https://www.gob.mx/sep/es/articulos/boletin-sep-no-102-concluye-exitosamente-el-proceso-de-vacunacion-a-personal-docente-en-30-entidades-del-pais?idiom=es",
            "https://diariodecolima.com/noticias/detalle/2021-08-16-la-entidad-lista-para-el-regreso-a-clases-secretario-de-educacin",
            "https://elcomentario.ucol.mx/oficializa-educacion-el-regreso-a-clases-presenciales-en-colima-para-el-30-de-agosto/",
            "https://www.colimanoticias.com/prepara-educacion-colima-regreso-seguro-a-clases-presenciales/"
        ],
        color: StateInDefinition
    },
    {
        id: "MX-MIC",
        name: "Michoacán de Ocampo",
        regresoActividadesPresenciales: "No",
        fechaRetorno: "Sin información",
        tipoModelo: "A distancia",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "SP",
        alumnosVacunados: "NO",
        nombreEstrategia: "Escuela abierta",
        actividadesPresenciales: "En Michoacán, los únicos que se presentarán a las aulas el 30 de agosto serán los estudiantes de los niveles medio superior y superior, educación básica continúa clases a distancia.",
        aforosFiltrosSanitarios: "El gobernador de Michoacan alertó que un regreso a clases presenciales en primarias y secundarias, aumentará la movilidad de manera muy considerable, y el riesgo de las familias. Ello, describió, por los traslados y contacto que implica llevar, entregar y recoger a los hijos e hijas en las escuelas.",
        referencias: [
            "https://www.eluniversal.com.mx/estados/en-michoacan-no-hay-condiciones-para-regreso-clases-presenciales-aureoles",
            "https://www.lavozdemichoacan.com.mx/michoacan/educacion/ciclo-escolar-2021-2022-inicia-a-la-distancia-en-educacion-basica-confirma-la-see/",
            "https://www.animalpolitico.com/2021/08/michoacan-hidalgo-rechazan-regreso-clases-presenciales-estados-siguen-evaluando/",
            "https://www.elsoldemorelia.com.mx/local/cnte-12-mil-escuelas-no-regresaran-a-clases-presenciales-en-michoacan-7129688.html"
        ],
        color: StateNoBack2School
    },
    {
        id: "MX-VER",
        name: "Veracruz de Ignacio de la Llave",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "SP",
        alumnosVacunados: "NO",
        nombreEstrategia: "Regreso a clases presenciales",
        actividadesPresenciales: "Regrreso a clases presenciales, el 30 de agosto en Veracruz; será gradual: Zenyazen<br><br>El Gobernador consideró necesario que los estudiantes retomen su actividad en las escuelas y por eso el regreso a clases en el estado de Veracruz se dará como lo establece el calendario de la Secretaría de Educación Pública (finales de agosto). En un cambio de opinión de lo que venía sosteniendo en cuanto al retorno a las aulas en la entidad, el Gobernador manifestó categórico que la educación está federalizada; de ahí que será la autoridad educativa federal la que determine cuándo se dará el regreso a la actividad presencial escolar.<br><br>Regreso a clases presenciales en Veracruz será en grupos reducidos y voluntario: gobernador.<br>El titular de la Secretaría de Educación estatal ha insistido en que los padres de familia pueden decidir si mandan o no a sus hijos a las aulas, pero el retorno a clases presenciales se hará al iniciar el nuevo ciclo escolar el 30 de agosto. <br><br>Veracruz regresará a clases presenciales en el inicio del próximo ciclo escolar; el retorno es voluntario, en grupos reducidos, con medidas sanitarias para prevenir contagios de coronavirus y en los planteles que se encuentren en condiciones para hacerlo, informó el gobernador del estado, Cuitláhuac García Jiménez.",
        aforosFiltrosSanitarios: "Entrega de kits de limpieza en todos los planteles <br><br> Acorde al semáforo epidemiológico, aplica SEV estrategias a distancia<br><br> El 24 de junio regresaron a las aulas, al respecto, se cuenta con 682 estrategias por sistema en los modelos presencial, mixto y virtual. La Secretaría de Educación estatal destacó que esta planeación incluye el acuerdo voluntario de la comunidad escolar, para lo que padres y madres recibirán una carta compromiso sobre el cuidado de la salud de sus hijos. <br><br> 1.- Todas las escuelas ubicadas en municipios con Semáforo en color amarillo o naranja, darán atención únicamente en la modalidad a distancia.<br> 2.- En los municipios que se mantenga el color verde del semáforo epidemiológico local, las instituciones podrán continuar según lo programado y decidido por cada centro escolar.<br><br> El personal del plantel educativo podrá asistir a sus escuelas si así lo acuerdan a realizar las tareas pertinentes con o sin estudiantes de acuerdo a los puntos 1 y 2.",
        referencias: [
            "https://www.sev.gob.mx/v1/noticias/leer/2354/",
            "https://www.diariodexalapa.com.mx/local/si-habra-clases-presenciales-pero-no-obligatorio-dijo-el-titular-de-la-sev-zenyazen-escobar-garcia-7029291.html",
            "https://www.diarioelmundo.com.mx/index.php/2021/07/16/en-agosto-regreso-a-clases-en-veracruz/",
            "https://www.milenio.com/estados/regreso-clases-presenciales-veracruz-grupos-reducidos",
            "https://www.elsoldecordoba.com.mx/local/hay-giro-regreso-a-aulas-ya-no-es-obligatorio-afirmo-el-secretario-de-educacion-de-veracruz-zenyazen-7086941.html",
            "https://www.elsoldeorizaba.com.mx/local/cambio-ya-no-es-obligatorio-el-regreso-a-las-aulas-afirmo-el-secretario-de-educacion-de-veracruz-zenyazen-7087120.html",
            "https://www.milenio.com/estados/regreso-clases-presenciales-veracruz-grupos-reducidos",
            "https://www.elfinanciero.com.mx/nacional/2021/08/25/regreso-a-clases-presenciales-veracruz-no-iniciara-en-zonas-afectadas-por-grace/",
            "https://www.milenio.com/estados/veracruz-preve-regreso-clases-presenciales-20-mil-escuelas"
        ],
        color: StateBack2School
    },
    {
        id: "MX-PUE",
        name: "Puebla",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de Agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "95",
        alumnosVacunados: "NO",
        nombreEstrategia: "Modelo Educativo Híbrido en el Estado de Puebla Educación Básica y Media Superior Ciclo Escolar 2021-2022",
        actividadesPresenciales: "Para el regreso a clases será prioridad que las y los maestros estén vacunados: Lozano <ol><li>La educación es un derecho humano que debe garantizarse en todo momento, principalmente en tiempos de crisis, por la importancia que tienen los procesos de sociabilización y humanización, el aprendizaje se convierte en un instrumento de sobrevivencia.</li> <li>Se establece que el servicio público educativo se brindará de forma presencial responsable y ordenada con base en los términos que disponga las autoridades sanitarias, el acuerdo nacional reafirma la ruta trazada en Puebla.</li> <li>El regreso presencial será con carácter voluntario habiendo de por medio una carta compromiso de asistencia voluntaria y corresponsabilidad. <li>La educación debe ser considerada una actividad esencial y por lo tanto requiere la participación presencial de todo el personal para atender a los alumnos y garantizar el derecho a la educación. <li>El modelo híbrido será el sistema de trabajo que adoptarán en el siguiente ciclo escolar 21-22 <li>Las faenas continúan de forma sistemática, del 11 al 13 de agosto participaron 10 mil 817 escuelas que representan el 90% en las faenas escolares de limpieza y desinfección, por su parte el CAPCEE avanza en la intervención de las 480 escuelas vandalizadas. <li>El taller intensivo de capacitación a realizarse del 16 al 20 de agosto podrá llevarse a cabo de manera presencial y a distancia. <li>El Consejo Técnico programado del 23 al 27 de agosto será presencial.</li> <li>Se instrumentará el programa “Por una vida sana, Puebla te cuida” entre la Secretaría de Salud y la Secretaría Educación, el cual permitirá identificar situaciones de vulnerabilidad en los alumnos y así proteger los manteniéndose en la modalidad a distancia en caso de tener alguna comorbilidad.</li> <li>Los maestros rezagados en el programa de vacunación, así como los de nuevo ingreso serán atendidos por la Secretaría de Salud para su vacunación respectiva. <li>Se debe garantizar el derecho a la accesibilidad. Las cuotas estarán mediadas por las asambleas respectivas donde se tomen acuerdos en consenso y en armonía; si existe alguna queja llamar al 222 22938 20 o terminación 25. <li>Ya se están distribuyendo los más de 9.7 millones de libros de texto gratuitos. Representan un recurso didáctico importante que se suma a otros materiales que permiten el acompañamiento del modelo híbrido, como son guías Puebla en casa, aprende en casa, entre otros, la educación a distancia no es sinónimo de internet. <li>Se implementarán 10 acciones clave para promover incubar la seguridad, salud e higiene de la comunidad escolar además de emitirse una guía para el regreso presencial responsable y ordenado. <li>Las instituciones educativas dependientes de la subsecretaría de educación media superior y superior se sujetarán a las disposiciones que en materia educativa y de salud se meta tienen sus propios calendarios <li>Promover el apoyo socioemocional para los educandos y docentes en colaboración con el sector salud. <li>Al inicio del ciclo escolar 2021-2022 se realizaron periodo de valoración diagnóstica de los alumnos y reforzamiento de aprendizajes no sólo de matemáticas y lectura la formación integral, exige diagnósticos y procesos de compensación también integrales como lo establece la nueva escuela mexicana. <li>Se flexibilice al máximo las disposiciones que faciliten el tránsito escolar y permita la inscripción y reinscripción de los alumnos en los tres niveles educativos con objeto de asegurar su permanencia y regreso del sistema educativo nacional la adaptabilidad como dimensión clave del derecho a la educación. <li>La solidaridad y organización es la clave para evitar el riesgo de contagio y atemorización. <li>La escuela y la familia deben convertirse en centros de protección emocional y de contagios en diálogo corresponsable permanente <li> Se invita a mantener una actitud crítica constructiva frente al proceso de regreso presencia la clase, evitando reduccionismo, postura sin fundamentos y de mala fe.</li></ol>",
        aforosFiltrosSanitarios: "Las escuelas multigrado o de organización completa que puedan atender a toda su población de manera presencial todos los días, deben garantizar la sana distancia, así como la implementación del plan de atención (nivelación) de forma integrada a las jornadas académicas. Aquellas escuelas con mayor matrícula dividirán aforos cuya distribución puede ser por apellidos.",
        referencias: [
            "http://sep.puebla.gob.mx/index.php/component/k2/prueba-2-2-2",
            "https://www.eluniversalpuebla.com.mx/educacion/95-de-maestros-en-puebla-ya-esta-vacunado-contra-covid",
            "https://www.milenio.com/politica/comunidad/clases-presenciales-en-puebla-seran-voluntarias-sep",
            "https://www.poblanerias.com/2021/08/educacion-presentan-20-puntos-clave-para-regreso-a-clases-presenciales-en-puebla/"
        ],
        color: StateBack2School
    },
    {
        id: "MX-TLA",
        name: "Tlaxcala",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "SP",
        alumnosVacunados: "NO",
        nombreEstrategia: "Sin información",
        actividadesPresenciales: "En medios se ha difundido que la incorporación presencial será una vez que el semáforo epidemiológico este en verde (habrá cambio de Administración Estatal) <br><br> Cuellar ciscneros , gobernadora electa, comentó estar listos para la incorporación presencial.<br><br> Definirá Salud modo de retorno a clases: Lorena Cuéllar sesionará el próximo jueves con la participación de funcionarios salientes y entrantes. La gobernadora electa de Tlaxcala, Lorena Cuéllar Cisneros, anunció que el jueves 26 de agosto sesionará el Consejo Estatal de Salud para definir las estrategias a seguir para el regreso a clases en las aulas, programado para el lunes próximo.",
        aforosFiltrosSanitarios: "Una vez que el semáforo epidemiológico dé luz verde, estás son las medidas que se tomarán para el regreso a clases presenciales en Tlaxcala: <ul><li>Conformación de Comités Participativos de Salud.</li><li> Dotar a las escuelas con insumos de higiene como agua y jabón.</li><li> Salvaguardar a los docentes en grupos de riesgo.</li><li> Uso obligatorio de cubrebocas o pañuelo, dentro y fuera de las escuelas, públicas y particulares.</li><li> Mantener distancia en entradas y salidas de los planteles.</li><li> Programar recesos escalonados.</li><li> Maximizar el uso de espacios abiertos.</li><li> Suspender todo tipo de ceremonias o reuniones.</li><li> Brindar apoyo socioemocional para alumnos y docentes.</li></ul> Una comisión de la Secretaría de Educación Pública (SEPE) y el SNTE trabajando para la realización de una logística y la atención en el regreso a clases presenciales. Universidad Autónoma de Tlaxcala (UATx) reconsideraría el regreso a las clases.",
        referencias: [
            "https://www.milenio.com/politica/comunidad/duda-regreso-clases-presenciales-tlaxcala-tercer-ola-covid",
            "https://www.lajornadadeoriente.com.mx/tlaxcala/clases-presenciales-sepe-a-sep/",
            "https://www.elsoldetlaxcala.com.mx/local/alistan-preparatorias-regreso-a-las-aulas-juan-pablo-arroyo-6924698.html",
            "https://kidstudia.com/guia/todo-sobre-el-regreso-a-clases-en-mexico/tlaxcala/#modalidad+del+regreso+a+clases+en+tlaxcala",
            "https://www.milenio.com/politica/comunidad/de-manera-responsable-buscan-que-sea-el-regreso-a-clases-en-tlaxcala",
            "https://amqueretaro.com/mexico/2021/07/02/revisa-sep-el-regreso-a-clases-en-tlaxcala/",
            "https://tlaxcala.quadratin.com.mx/principal/garantiza-lorena-cuellar-un-regreso-seguro-a-clases-presenciales/",
            "https://www.elsoldetlaxcala.com.mx/local/definira-salud-modo-de-retorno-a-clases-lorena-cuellar-7123322.html"            
            
        ],
        color: StateBack2School
    },
    {
        id: "MX-MEX",
        name: "Estado de México",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "SP",
        alumnosVacunados: "NO",
        nombreEstrategia: "Plan de Reapertura de regreso a clases 2020*",
        actividadesPresenciales: "Alfredo del Mazo Maza, señaló que el regreso a clases presenciales en los municipios mexiquenses será de manera voluntaria y que en coordinación con los comités de salud y protección civil se están puliendo las medidas que se llevarán a cabo a partir del próximo 30 de agosto. ",
        aforosFiltrosSanitarios: "Para el regreso a clases presenciales en el Estado de México se instalarán tres filtros sanitarios; el primer filtro es en las casas de los estudiantes, el segundo filtro será al entrar a los centros educativos y el tercer filtro será a la entrada de los salones. Del Mazo Maza, señaló que el regreso a las aulas se llevará de manera escalonada y con alternancia en los días.",
        referencias: [
            "https://mexico.as.com/mexico/2021/08/23/actualidad/1629672653_864968.html"
        ],
        color: StateBack2School
    },
    {
        id: "MX-CMX",
        name: "Ciudad de México",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "100",
        alumnosVacunados: "SI",
        nombreEstrategia: "Sin información",
        actividadesPresenciales: "La jefa de Gobierno de la Ciudad de México, Claudia Sheinbaum Pardo, [y las autoridades educativas en la capital] anunciaron las medidas y protocolos para el inicio de clases presenciales en este ciclo escolar 2021-2022, aunque la apertura será universal, es decir contempla todos los planteles, la asistencia de los estudiantes será opcional.   Las autoridades capitalinas anunciaron que cada plantel decidirá las especificaciones particulares en términos sanitarios, como la ventilación y el aforo de los salones de clases. No se contemplan pruebas de Covid-19 en los planteles ni horarios escalonados.  Para la opción a distancia los canales educativos ya empleados continuarán operando. Los profesores y encargados de las clases apoyarán a los estudiantes con materiales, tareas, trabajos, lecturas y programas para que no se rezaguen. Si posteriormente el o la estudiante busca incorporarse al sistema presencial, las autoridades pertinentes darán seguimiento a una valoración diagnóstica para conocer el nivel de aprovechamiento educativo de los estudiantes y determinar su ubicación.",
        aforosFiltrosSanitarios: "Medidas sanitarias: <ul><li> • Creación y activación de los Comités Participativos de Salud Escolar (CPSE).</li><li> • Filtros de salud en casa, entrada de la escuela y aulas.</li><li> • Lavado constante de manos con agua y jabón. </li><li> • Uso correcto y obligatorio de cubrebocas. </li><li> • Espacios con distancia social mínima. </li><li> • Priorizar actividades en espacios abiertos. </li><li> • No se celebrarán ceremonias o eventos que implican aglomeraciones. </li><li> • Avisar inmediatamente a las autoridades competentes, en caso de que se detecte o se sospeche que alguna persona presente algún signo o síntoma respiratorio relacionado con el virus SARS-CoV2. </li><li> • Procurar entre las y los educandos y docentes apoyo socioemocional y promover, entre otros, el curso en línea de SEP-SALUD ''Retorno Seguro'' climss.imss.gob.mx</li></ul>",
        referencias: [
            "https://politica.expansion.mx/cdmx/2021/08/24/protocolo-sanitario-regreso-clases-cdmx",
            "https://www.eleconomista.com.mx/politica/Ciclo-escolar-2021-2022-Como-sera-el-regreso-a-clases-en-la-CDMX-20210824-0098.html"            
        ],
        color: StateBack2School
    },
    {
        id: "MX-MOR",
        name: "Morelos",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "Sin informacón",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "SP",
        alumnosVacunados: "NO",
        nombreEstrategia: "Regreso a clases",
        actividadesPresenciales: "El regreso a clases para el ciclo escolar 2021-2022 también arrancará el próximo lunes, de manera voluntaria, ordenada y responsable, dijo Luis Arturo Cornejo Alatorre, secretario de Educación en la entidad.<br><br>Mencionó que han realizado acciones que permitan otorgar condiciones de seguridad en la salud de los niños, adolescentes y jóvenes para que cuenten con insumos básicos como lo son gel, jabón líquido, cubreboca y elementos de limpieza como cloro, jabón, entre otros",
        aforosFiltrosSanitarios: "Terminó en julio el Programa Piloto de Regreso a Clases Presenciales Seguras, voluntarias, escalonadas y graduales sin incidente alguno para todos los que participaron en este proyecto: alumnos, padres de familia, docentes, administrativos y personal de apoyo",
        referencias: [
            "https://www.milenio.com/estados/morelos-analiza-posible-regreso-a-clases-presenciales",
            "https://mexico.as.com/mexico/2021/07/30/actualidad/1627609664_758632.html",
            "https://www.24-horas.mx/2021/08/23/se-suman-morelos-y-queretaro-a-proximo-regreso-a-clases/"
        ],
        color: StateBack2School
    },
    {
        id: "MX-GRO",
        name: "Guerrero",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "31 de agosto 2021/03 de septiembre de 2021",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "100",
        alumnosVacunados: "NO",
        nombreEstrategia: "La escuela es nuestra",
        actividadesPresenciales: "El gobernador Héctor Astudillo Flores estimó que para el próximo lunes 30 de agosto aproximadamente 800 escuelas de Guerrero podrían reanudar las clases presenciales en zonas donde los casos de Covid 19 son menores. <br><br>Agregó que este martes se instalarán comités de padres de familia y maestros, quienes se coordinarán con el gobierno del estado y será entre jueves o viernes cuando se tenga una cifra exacta de cuántas escuelas y en cuántos municipios se regresará a clases.",
        aforosFiltrosSanitarios: "Se considerarán tres factores: que el estado se mantenga permanentemente en el color verde en el Semáforo de Riesgo Epidemiológico; que las escuelas cuenten con un protocolo sanitario, un plan escolar que refleje la organización administrativa y académica del plantel, y el fortalecimiento académico a través de una guía estatal para el regreso a clases y el cronograma de actividades para la apertura de escuelas en todos los niveles. <br><br> Por otro lado, los trabajadores de la educación hayan sido vacunados y que el semáforo epidemiológico esté en verde.",
        referencias: [
            "https://snte.org.mx/seccion14/snte-condiciona-el-regreso-a-clases-presenciales-en-guerrero/",
            "https://snte.org.mx/seccion14/con-seguridad-volvemos-a-la-escuela-snte/",
            "https://guerrero.quadratin.com.mx/guerrero-tendra-regreso-a-clases-presenciales-voluntario-astudillo/",
            "https://guerrero.quadratin.com.mx/reanudarian-clases-presenciales-800-escuelas-de-guerrero-astudillo/"            
        ],
        color: StateBack2School
    },
    {
        id: "MX-OAX",
        name: "Oaxaca",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "100",
        alumnosVacunados: "NO",
        nombreEstrategia: "No disponible",
        actividadesPresenciales: "El director general del Instituto Estatal de Educación Pública de Oaxaca (IEEPO), Francisco Ángel Villarreal, dio a conocer este 18 de agosto que el regreso a clases en la entidad será consensuado, seguro, gradual, escalonado y mixto. <br><br>Reiteró que la decisión de permitir que las infancias y juventudes retornen a las aulas será resultado del consenso con el magisterio, madres, padres de familia, tutores y autoridades municipales.<br>Por último, señaló que el Gobernador de Oaxaca, Alejandro Murat, y las autoridades estatales mantienen una fluida, correcta y permanente comunicación con el magisterio, así como con la Federación.   En encuentro encabezado por la secretaria de Gobernación, Olga Sánchez Cordero, los mandatarios de [...]; Oaxaca, Alejandro Murat, y Chiapas, Rutilio Escandón, externaron su apoyo al retorno a las aulas, por la salud mental de los estudiantes, y se manifestaron listos para ello, si bien en los dos últimos estados la Coordinadora Nacional de Trabajadores de la Educación se ha expresado en contra. Murat dijo que mantiene un diálogo con la organización magisterial para el regreso a los centros escolares",
        aforosFiltrosSanitarios: "En esta fecha se dice que de darse el regreso a las aulas: ''En este regreso no asistirán todos los niños al mismo tiempo, sino irán de acuerdo con la organización de las escuelas, como en orden alfabético, y también deberán ir de manera mixta...''.  Se está trabajando con la Secretaría de Educación Pública (SEP) para el protocolo sanitario que regirá los planteles en este nuevo ciclo escolar, donde habrán filtros sanitarios en cada escuela, además de que los menores y maestros tendrán que usar de forma permanente el cubrebocas.",
        referencias: [
            "https://www.jornada.com.mx/notas/2021/08/20/politica/avalan-gobernadores-regreso-a-escuelas/",
            "https://www.infobae.com/america/mexico/2021/08/18/como-sera-el-regreso-a-clases-en-oaxaca/ "
        ],
        color: StateBack2School
    },
    {
        id: "MX-TAB",
        name: "Tabasco",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "SP",
        alumnosVacunados: "NO",
        nombreEstrategia: "A la escuela. Seguro Regreso",
        actividadesPresenciales: "La secretaria de Educación precisó que serán en total 3 mil 800 planteles educativos de Preescolar, Primaria y Secundaria, que atienden a una población de 532 mil educandos, los que serán rehabilitados durante los meses de julio y agosto, como parte de los preparativos ante el posible regreso a clases presenciales para el ciclo escolar 2021-2022, siempre y cuando el semáforo epidemiológico este en color verde. <br><br>En totalidad, escalonado, hibrido, porcentual de niñas, niños y jovenes escalonado, presencial, híbrido o una mezcla de ambos (implementación de un protocolo Alemán)<br><br>El 20.8 por ciento de alumnos del nivel básico que pertenecen a los ocho municipios donde existen menos contagios y casos activos de COVID-19, estarían regresando a clases presenciales el próximo 30 de agosto, mientras que el 79.2 por ciento seguirá en casa de manera virtual. REGRESARÍAN A LAS AULAS 8 MUNICIPIOS, EL 79.2% SEGUIRÁ CON CLASES EN LÍNEA<br>Unos 112,598 estudiantes de nivel básico que viven en comunidades con bajo contagio y activos de Covid, volverían a escuelas; Setab confirmó que regreso será gradual, virtual y presencial.<br><br>Nivel básico<br>En el acuerdo se precisa que en el caso de los alumnos de educación básica, será el 30 de agosto cuando se regrese a las clases presenciales, cuya asistencia será de manera voluntaria.<br><br>Educación media y <br>En cuanto a la educación media y media superior, para el caso del Colegio de Bachilleres de Tabasco (Cobatab), se contempla contemplan dos escenarios de operatividad en los centros educativos para el semestre 2021-2022A: continuar en la modalidad virtual y retornar en modalidad híbrida.<br><br>30 de agosto regreso oficial a las aulas en Tabasco<br>El retorno denominado ''La Estrategia Lolli'' contempla el inicio escolar 2021-2022 en 7 municipios a presenciales y el resto virtual.",
        aforosFiltrosSanitarios: "Desarrollo de materiales informativos y protocolos sanitarios.",
        referencias: [
            "https://heraldodemexico.com.mx/nacional/2021/7/22/tabasco-no-volvera-clases-presenciales-en-agosto-analizan-sea-en-septiembre-318653.html",
            "https://www.elheraldodetabasco.com.mx/local/tabasco-si-regresa-a-clases-presenciales-en-septiembre-7015316.html",
            "https://www.tabascohoy.com/regresarian-a-las-aulas-20-de-estudiantes-confirma-educacion-ciclo-escolar-21-22/?__cf_chl_jschl_tk__=pmd_e7a564a81a81bf5623d59322ed379ea1ee8218d5-1628862700-0-gqNtZGzNAjijcnBszQqi",
            "https://www.elheraldodetabasco.com.mx/local/publican-decreto-para-el-regreso-a-clases-presenciales-en-tabasco-7113338.html",
            "https://www.elheraldodetabasco.com.mx/local/30-de-agosto-regreso-oficial-a-las-aulas-en-tabasco-7114918.html"
        ],
        color: StateBack2School
    },
    {
        id: "MX-CHP",
        name: "Chiapas",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "100",
        alumnosVacunados: "NO",
        nombreEstrategia: "No disponibles",
        actividadesPresenciales: "De manera presencial, escalonada o multimodal (presencial y en línea), en Chiapas dará inicio el Ciclo Escolar 2021-2022, el próximo 30 de agosto, un total de 6 mil 878 escuelas de todos los niveles educativos del sistema estatal, informó la Secretaría de Educación del Estado.   Firme el regreso a las aulas en 30 entidades. Chiapas prevé el retorno de más de 10 mil escuelas de los niveles básico y medio superior; la mayoría son planteles ubicados en zonas rurales con menos de 100 alumnos.   Lester Federico López Martínez, coordinador de la zona Altos del Colegio de Bachilleres de Chiapas (Cobach), informó que el pasado lunes iniciaron en los planteles de esta región el curso Propedéutico 2021-2022, con el cual se dio el regreso a las actividades escalonadas en los 43 centros educativos que conforman la coordinación Altos. 38 de ellos iniciaron de manera presencial y 5 de manera virtual, debido a las condiciones político sociales que prevalecen en algunas comunidades de la región.",
        aforosFiltrosSanitarios: "Medidas para el Regreso a Clases: <ol><li>Uso general de cubrebocas obligatorio. <li> Sana distancia en actividades al interior de los planteles, así como en las entradas y salidas. </li> <li> Recreos escolares escalonados</li> <li> Lugares fijos alternados.</li> <li> Asistencia alternada por apellido.</li> <li> Considera que tus hijos deberán acudir a clases sin fiebre o temperatura mayor a 37°. Estando dentro de la escuela, deberán lavarse frecuentemente las manos o utilizar gel antibacterial y los grupos no podrán ser mayor a 25 alumnos</li></ol>",
        referencias: [
            "https://www.elheraldodechiapas.com.mx/local/solo-un-25-por-ciento-de-alumnos-podrian-recibir-clases-presenciales-7107695.html",
            "https://diariodechiapas.com/metropoli/rechazan-regreso-a-las-aulas/166032",
            "https://diariodechiapas.com/ultima-hora/cobach-inicia-actividades/166794"
        ],
        color: StateBack2School
    },  
    {
        id: "MX-CAM",
        name: "Campeche",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de mayo",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "88.8",
        alumnosVacunados: "NO",
        nombreEstrategia: "Aprendamos en familia desde casa",
        actividadesPresenciales: "El 10 de agosto se anunció de manera oficial el regreso a clases que será de forma gradual el próximo 30 de agosto. Será decisión de los padres y madres de familia enviar o no a sus hijos. Se acordó que regresarán un total de 904 escuelas de nivel preescolar, primaria y secundaria incluyendo los servicios de la Conafe. <br> <br> Es uno de los estados que implementó la prueba piloto de clases presenciales antes de terminar el ciclo escolar pasado, misma que cerró por el aumento de contagios de covid-19 en la entidad. Por lo que autoridades educativas consideran que no existen las condiciones necesarias para garantizar un regreso seguro a los planteles educativos.<br> <br> El regreso a clases presenciales será cuando el semáforo esté en verde debido a la falta de vacunación de los estudiantes.",
        aforosFiltrosSanitarios: "Cuando se tengan las condiciones necesarias para el regreso a los planteles educativos, se optará por un modelo híbrido de clases, con asistencia alternada, grupos reducidos, así como medidas sanitarias. Algunas de ellas son las siguientes: <br><br>  Uso correcto de cubrebocas obligatorio. <br> Sana distancia dentro de los salones de clases y en todas las actividades al interior de los planteles.<br> Colocación de filtros sanitarios al entrar a la escuela y a la entrada del salón<br> Recuerda que el regreso a clases presenciales es voluntario, si decides enviar a tus hijos a la escuela debes firmar una carta responsiva en donde declaras que tu hijo asiste voluntariamente a la escuela y sin síntomas relacionados al covid-19.",
        referencias: [
            "https://www.poresto.net/campeche/2021/7/15/regreso-clases-en-campeche-sera-en-semaforo-verde-seduc-263676.html",
            "http://campechehoy.mx/2021/07/31/en-campeche-sera-dificil-el-regreso-a-clases-presenciales/",
            "https://educacioncampeche.gob.mx/aprendamosencasa",
            "https://www.lajornadamaya.mx/campeche/177646/el-9-de-agosto-decidira-seduc-si-hay-clases-presenciales-en-campeche",
            "https://www.gob.mx/sep/es/articulos/boletin-sep-no-102-concluye-exitosamente-el-proceso-de-vacunacion-a-personal-docente-en-30-entidades-del-pais?idiom=es",
            "https://www.poresto.net/campeche/2021/8/10/regreso-clases-presenciales-en-campeche-sera-el-30-de-agosto-seduc-271707.html"
        ],
        color: StateBack2School
    },
    {
        id: "MX-YUC",
        name: "Yucatán",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "SP",
        alumnosVacunados: "NO",
        nombreEstrategia: "Regreso seguro a clases",
        actividadesPresenciales: "El Gobierno de Yucatán mantiene su postura del regreso a clases, en forma presencial; para el 30 de agosto próximo. Sin embargo, éste será voluntario, opcional y mixto. Estrategia estatal de Regreso Seguro a Clases, elaborada con base en los lineamientos que emitió la Federación y la participación de la Mesa Central conformada por representantes de seis Secretarías, entre ellas la de Educación y Salud, el Congreso del Estado, universidades, sindicatos, cámaras empresariales, la Comisión estatal de Derechos Humanos (Codhey), padres de familia, estudiantes y colegios.",
        aforosFiltrosSanitarios: "Se considera un retorno voluntario, opcional y mixto. <br><br>Secretaría de Educación considera realizar jornadas de limpieza en las escuelas y sesiones de los Comités Participativos de Salud Escolar; que se desarrollará del 11 al 13 de agosto venideros, como una medida preventiva ante la pandemia mundial por Covid-19.",
        referencias: [
            "http://www.educacion.yucatan.gob.mx/boletines/index",
            "https://www.yucatan.com.mx/merida/yucatan-tendra-un-regreso-a-clases-presencial-en-agosto",
            "https://www.lajornadamaya.mx/yucatan/176643/los-ninos-deben-regresar-a-clases-presenciales-lo-mas-pronto-posible-vila-dosal",
            "https://www.lajornadamaya.mx/yucatan/175807/regreso-a-clases-en-yucatan-sera-el-30-de-agosto"  
        ],
        color: StateBack2School
    },
    {
        id: "MX-ROO",
        name: "Quintana Roo",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 agosto 2021",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "NO",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "75.6",
        alumnosVacunados: "NO",
        nombreEstrategia: "Plan para Regreso a Clases Seguro",
        actividadesPresenciales: "Los alumnos en Quintana Roo no regresarían a las clases presenciales para el 30 de agosto, afirmó Sergio Acosta Manzanero. <br><br>El presidente de la Asociación Estatal de Padres de Familia, afirmó que las escuelas no estarán listas para el inicio del ciclo escolar 2021-2022.",
        aforosFiltrosSanitarios: "Cuatro pasos: <br> 1) Estar en semáforo amarillo tanto federal como estatal para abrir los Centros Comunitarios de Aprendizaje donde se ofrece asesoría; <br> 2) Rehabilitación de escuelas (infraestructura, limpieza y orden); <br> 3) Aplicación de un diagnóstico académico. <br> 4) Y que cada institución educativa entregue o actualice su plan de regreso a clases, cumpliendo con los protocolos sanitarios.Prueba para diagnosticar el rezago entre los alumnos tras un año y tres meses de clases en línea. Los padres de familia los encargados de aplicar la prueba, que consistirá en un grupo de preguntas de lo que tendrían que conocer según su grado de escolaridad.",
        referencias: [
            "https://qroo.gob.mx/seq/detallan-acciones-de-la-seq-para-el-regreso-clases-destacando-cuatro-importantes-temas",
            "https://www.sdpnoticias.com/estados/quintana-roo/quintana-roo-descartan-regreso-a-clases-presenciales/"

        ],
        color: StateBack2School
    },
];

var DataStates_v9 = [
    {
        id: "MX-BCS",
        name: "Baja California Sur",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "13 de septiembre",
        tipoModelo: "A distancia",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "78.8",
        alumnosVacunados: "Sin Definir",
        nombreEstrategia: "No disponible",
        actividadesPresenciales: "Del próximo lunes 30 de agosto, fecha que el calendario oficial marca el inicio del ciclo escolar 2021-2022, al viernes 10 de septiembre, los planteles de enseñanza básica de Baja California Sur realizarán tareas de organización con el objetivo de reanudar las clases el lunes 13 de septiembre, ya sea de manera presencial o en el modelo a distancia, informó el secretario de Educación Pública del Estado, Gustavo Rodolfo Cruz Chávez.",
        aforosFiltrosSanitarios: "Se capacitaron a los comités participativos de salud escolar, en cada escuela debe de existir un comité de esta naturaleza que se encargará de revisar las condiciones en las cuales se encuentra la escuela, se tendrán algunos filtros y el primero desde luego será la casa, será en el hogar donde se revise la condición de su hijo o hija y tener en claro cuáles son los síntomas COVID, el segundo filtro al entrar a la escuela y el tercero previo a entrar al salón de clases.",
        referencias: [
            "https://kidstudia.com/guia/todo-sobre-el-regreso-a-clases-en-mexico/baja-california-sur/",
            "https://www.bcsnoticias.mx/confirmado-baja-california-sur-ya-se-prepara-para-regreso-a-las-aulas-en-agosto-sep/",
            "https://www.elsudcaliforniano.com.mx/local/regreso-a-clases-solo-sera-en-alerta-verde-en-bcs-6987936.html",
            "http://www.bcs.gob.mx/noticias/concluyo-vacunacion-del-personal-educativo-en-bcs/#:~:text=CONCLUY%C3%93%20VACUNACI%C3%93N%20DEL%20PERSONAL%20EDUCATIVO%20EN%20BCS,-La%20Paz%20B.C.S.&text=Con%20la%20aplicaci%C3%B3n%20de%2017,educativo%20de%20Baja%20California%20Sur",
            "https://www.animalpolitico.com/2021/08/michoacan-hidalgo-rechazan-regreso-clases-presenciales-estados-siguen-evaluando",
            "http://www.sepbcs.gob.mx/contenido/boletines/2021/08/2021-08-25_Bol162.pdf"

        ],
        color: StateBack2School
    },
    {
        id: "MX-BCN",
        name: "Baja California Norte",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "76.30",
        alumnosVacunados: "NO",
        nombreEstrategia: "Regreso Seguro a Clases Presenciales",
        actividadesPresenciales: "Se preveé que 24 escuelas vuelvan a clases presenciales durante la primera semana del ciclo 2021-2022 (Lunes 30 de agosto) <br><br>La asistencia será voluntaria, gradual y escalonada. Durante septiembre, los planteles se duplicarán semanalmente, de acuerdo a la disposición de escuelas y la autorización de padres de familia. las clases serán en un modelo híbrido entre presenciales y a distancia, ya que los alumnos seleccionados asistirán tres y dos días de la semana, de manera alternada, a partir de la primera letra del apellido.   el regreso a clases será en 24 escuelas (cuatro por municipio y dos públicas y dos privadas), en la segunda semana serán 48; en la siguiente 72 y después 96, de acuerdo a la evolución y monitoreo del manejo de salud. Serán los padres de familia los que aprueben el regreso de clases presenciales de sus hijos.",
        aforosFiltrosSanitarios: "El regreso a las escuelas de manera presencial, se realizará de forma gradual y segura, incluyendo la realización de jornadas de limpieza previas al ingreso de los estudiantes. las escuelas de cada municipio o poblado serán divididas en áreas que incluyan un centro de salud que se encargará de dar atención a esa región en caso de ser necesario.  Los padres de familia y las escuelas deberán coordinar filtros para evitar la propagación de la enfermedad. en caso de que se detecte un caso sospechoso, el grupo será suspendido por 14 días, mientras que si se confirma un caso de COVID-19 se suspenderán las clases en todo el plantel. Las aulas tendrán un máximo de 10 personas.",
        referencias: [
            "https://www.sandiegouniontribune.com/en-espanol/noticias/bc/articulo/2021-07-26/baja-california-anuncia-regreso-a-clases-presenciales-semaforo-epidemiologico-regional-permanece-verde",
            "http://www.educacionbc.edu.mx/regresoseguro/",
            "https://www.jornada.com.mx/notas/2021/07/26/estados/planean-regreso-a-clases-gradual-en-baja-california-a-partir-de-agosto/#:~:text=El%20gobierno%20de%20Baja%20California,forma%20gradual%2C%20escalonada%20y%20segura.",
            "https://www.bcsnoticias.mx/incierto-el-regreso-a-clases-en-bcs-acercandose-la-fecha-se-tomaran-decisiones-salud/",
            "https://www.gob.mx/sep/es/articulos/boletin-sep-no-102-concluye-exitosamente-el-proceso-de-vacunacion-a-personal-docente-en-30-entidades-del-pais?idiom=es",
            "https://www.poresto.net/campeche/2021/8/15/regreso-clases-en-campeche-conoce-las-fechas-para-inscripcion-del-ciclo-escolar-2021-2022-272491.html"
        ],
        color: StateBack2School
    },
    {
        id: "MX-SON",
        name: "Sonora",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "87",
        alumnosVacunados: "NO",
        nombreEstrategia: "Retorno Seguro, estrategias para el regreso a clases presenciales del ciclo 2021-2022",
        actividadesPresenciales: "A partir del 30 de agosto, los estudiantes en Sonora regresarán a las aulas conforme a las disposiciones federales y condiciones sanitarias para ver la gradualidad del retorno. <br><br>Regreso a clases presenciales debe darse con una estrategia conjunta para hacerlo de la forma más segura: Gobernadora Pavlovich",
        aforosFiltrosSanitarios: "<ol><li> Se invita a los padres de familia, a maestros, a las autoridades educativas a que se integren al Comité́ Participativo de Salud en su escuela.</li> <li>Establecer el filtro de salud en casa, y participar en los filtros de la escuela y del salón de clases, para detectar síntomas y tomar las medidas necesarias.</li><li> Lavarse las manos con agua y jabón y/o gel antibacterial.</li><li> Usar cubrebocas sobre nariz y boca, en todo momento.</li><li> Mantener la sana distancia.</li><li> Dar mayor uso a los espacios abiertos.</li><li> Por ahora, no tener ceremonias ni reuniones generales.</li><li> Avisar inmediatamente la presencia o sospecha de casos de COVID-19 en la escuela.</li><li> Inscribirse a los cursos de apoyo socioemocional en línea de SEP-Salud “Retorno Seguro”: climss.imss.gob.mx</li><li>  Al salir de casa, lleva a la escuela la Carta compromiso de corresponsabilidad.</li></ol><br> Ante el aumento de contagios y el registro de estas variantes del coronavirus, la gobernadora Pavlovich instó a seguir con las acciones y programas de prevención, para seguir con las medidas y protocolos sanitarios rigurosos. Salones de clases con buena ventilación.<br><br>La Secretaría de Educación y Cultura y el Instituto Sonorense de Infraestructura Educativa (ISIE) han realizado una valoración de las condiciones de la infraestructura física de los planteles escolares, con el fin de atender a todos los requerimientos apremiantes de los inmuebles.<br><br><ol><li>Pupitres separados al menos metro y medio entre cada uno.</li><li>Máximo 15 alumnos en cada salón.</li><li>Uso de gel antibacterial y lavado frecuente de manos.</li><li>Uso correcto de cubrebocas en todo momento.</li></ol>",
        referencias: [
            "http://www.sec.gob.mx/portal/index.php?op=nota&p=1033",
            "https://kidstudia.com/guia/todo-sobre-el-regreso-a-clases-en-mexico/sonora/#medidas+para+el+regreso+a+clases+en+sonora",
            "https://www.elsoldehermosillo.com.mx/local/es-oficial-alumnos-de-sonora-si-regresaran-a-clases-presenciales-30-de-agosto-sec-gobierno-del-estado-escuelas-7046536.html",
            "https://www.elsoldehermosillo.com.mx/local/es-oficial-alumnos-de-sonora-si-regresaran-a-clases-presenciales-30-de-agosto-sec-gobierno-del-estado-escuelas-7046536.html",
            "http://www.sec.gob.mx/portal/index.php?op=nota&p=1034",
            "https://www.elsoldehermosillo.com.mx/doble-via/salud/el-covid-19-y-los-ninos-esto-es-lo-que-sabemos-antes-de-ir-a-la-escuela-regreso-a-clases-pandemia-7097189.html"
        ],
        color: StateBack2School
    },
    {
        id: "MX-CHH",
        name: "Chihuahua",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "NO",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "95",
        alumnosVacunados: "NO",
        nombreEstrategia: "Estrategia Chihuahua (implementada desde julio)",
        actividadesPresenciales: "De un total de 705 niñas, niños y adolescentes (NNA) de Chihuahua que participaron en la encuesta nacional denominada “Caminito de la Escuela”, el 74.67 por ciento expresó que sí desea regresar a la escuela, según informó la Presidenta de la Comisión de Derechos Humanos de la Ciudad de México, Nashieli Ramírez Hernández.    En Chihuahua se capacitan 760 mil personas en cursos sobre bioseguridad por Covid. El doctor Mauricio Hernández Ávila, director de Prestaciones Económicas y Sociales, señaló que estos cursos se realizaron en colaboración con expertos de las Secretarías de Educación Pública, de Salud y del IMSS, y a la fecha de las 760 mil personas que han ingresado, el 73 por ciento ya terminaron y dejaron su evaluación así como recomendaciones.   En el Colegio de Bachilleres del estado de Chihuahua, el próximo 6 de septiembre será el inicio de clases; ante esta situación, el director académico de la institución, Hugo Arias Flores, responderá las dudas de los estudiantes respecto al inicio del semestre 2021-B. a través de una transmisión en vivo este viernes 27 de agosto a las 12:30 horas, mediante la página de Facebook del Cobach.",
        aforosFiltrosSanitarios: "Iniciarán con aforos del 50%, las sesiones van a ser de 45 minutos; en preescolar solamente habrá tres sesiones diarias, en primaria hasta cinco y en secundaria hasta 7, cada una de 45 minutos, y entre ellas se suspenderá la actividad para ventilar las aulas. De acuerdo al contexto de cada plantel, los grupos se dividirán por grado o por inicial de apellido; se dará seguimiento al modelo de filtros sanitarios saliendo de casa, llegando al plantel, y durante las sesiones académicas.",
        referencias: [
            "https://www.elheraldodechihuahua.com.mx/local/chihuahua/desean-ninas-ninos-y-adolescentes-de-chihuahua-regresar-a-la-escuela-regreso-a-clases-alumnos-educacion-7129844.html",
            "https://www.omnia.com.mx/noticia/193026/informa-cedh-que-7-de-cada-10-nna-desean-regresar-a-clases-presenciales",
            "https://www.elheraldodechihuahua.com.mx/local/chihuahua/se-capacitan-760-mil-personas-en-cursos-de-bioseguridad-por-covid-escuelas-pandemia-prevencion-cursos-digitales-7134289.html",
            "http://www.tiempo.com.mx/noticia/respondera_cobach_preguntas_sobre_regreso_a_clases_chihuahua/"
        ],
        color: StateBack2School
    },
    {
        id: "MX-COA",
        name: "Coahuila de Zaragoza",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "23 de agosto",
        tipoModelo: "Híbrido", 
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "85.4",
        alumnosVacunados: "NO",
        nombreEstrategia: "No disponible",
        actividadesPresenciales: "Del 23 de agosto al 03 de septiembre se tiene previsto realizar pruebas diagnósticas y una evaluación para identificar el abandono y rezago escolar.  Del 6 al 30 de septiembre se pretende llevar a cabo un período de recuperación para alumnos en rezago. El regreso a clases presenciales será obligatorio paras los docentes.",
        aforosFiltrosSanitarios: "Previo a la apertura de las escuelas deberá pedírseles a los padres de familia, entre otras cosas, que sus hijos acudan bañados a la escuela y que en caso de notar algún síntoma de enfermedad como fiebre, tos, dolor de garganta o de cabeza no podrán asistir y deberá notificarse a la autoridad del plantel. Las escuelas por su parte deberán prepararse con lo siguiente: Insumos para colocar un filtro a la entrada del plantel, tanto para el personal que trabaja en la escuela como para los alumnos En el filtro deberá haber: • Alcohol en gel con alcohol isopropílico al 70% para la higiene de manos a la entrada al plantel • Termómetro infrarrojo para la toma de temperatura previo a la entrada al plantel. Los salones de clases deberán contar con:<ul><li>• Alcohol en gel con alcohol isopropílico al 70%.</li><li>• Caja de pañuelos desechables.</li><li>• Bote de basura con pedal y tapa.</li><li>• Toallitas desinfectantes para la limpieza del pupitre y/o mesas de trabajo. Las áreas comunes (patios, canchas, áreas de juego) deberán limpiarse como se hace normalmente todos los días, al igual que el resto de las instalaciones, poniendo énfasis en las superficies de mayor contacto como escritorios, mesas, interruptores, picaportes.</li></ul>Todos los baños deberán contar con agua, jabón, sanitas para secarse las manos,papel higiénico y botes de basura con pedal y tapa. Existe la posibilidad detransmisión de SARS-CoV-2 mediante inhalación de la aerosoles fecales por locual se debe poner especial atención en la ventilación de los baños, así como enla utilización estricta de cubreboca al acceder a ellos. Se recomienda educar a losalumnos a bajar la tapa del inodoro antes de jalar la palanca.",
        referencias: [
            "https://www.elheraldodesaltillo.mx/2021/07/27/habra-periodo-de-diagnostico-y-otro-de-recuperacion-al-regreso-a-clases-en-coahuila/",
            "https://www.elheraldodesaltillo.mx/2021/07/05/volverian-el-23-de-agosto-a-clases-presenciales-90-escuelas-en-coahuila/",
            "https://vanguardia.com.mx/articulo/regreso-clases-sera-obligatorio-para-los-profesores-en-coahuila",
            "https://www.saludcoahuila.gob.mx/COVID19/documentos/MANUAL%20REAPERTURA%20ESCOLAR%202021.pdf",
            "https://www.gob.mx/sep/es/articulos/boletin-sep-no-102-concluye-exitosamente-el-proceso-de-vacunacion-a-personal-docente-en-30-entidades-del-pais?idiom=es"
        ],
        color: StateBack2School
    },
    {
        id: "MX-NLE",
        name: "Nuevo León",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "Sin Definir",
        reincorporacionGradual: "Sin Definir",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "100",
        alumnosVacunados: "NO",
        nombreEstrategia: "No disponible",
        actividadesPresenciales: "Los maestros de Nuevo León se niegan al regreso de las clases presenciales ante el actual escenario de la pandemia del Covid-19, por lo que aún no se aclara si el estado continuará con los estudios a distancia.<br><br>El gobernador de Nuevo León, Jaime Rodríguez Calderón, dijo que hasta el momento no está definida la modalidad del regreso a clases e invitó a los docentes a continuar dando su opinión a través de WhatsApp.",
        aforosFiltrosSanitarios: "Medidas sanitarias. Recomendaciones para un regreso saludable a las aulas escolares de nivel básico:<ul><li>• Establecer comités participativos de salud escolar.<li>• Todos los planteles deberán tener acceso a agua y jabón y/o gel antibacterial para lavado de manos constante. </li><li>• Resguardo del personal educativo en grupos de riesgo (mujeres embarazadas y personas inmunocomprometidas). </li><li>• Uso obligatorio de cubrebocas en todo momento. </li><li>• Asegurar una sana distancia entre alumnos y maestros al menos 1.5 metros. </li><li>• Priorizar los espacios abiertos o una adecuada ventilación de las aulas. </li><li>• Suspensión de cualquier tipo de ceremonias o reuniones, como asambleas, recesos recreativos o ceremonias de graduación, y uso de cooperativas. </li><li>• Detección temprana mediante la aplicación de 3 filtros: En casa, al entrar a la escuela y en el salón de clases.</li><li>• Atención psicoemocional.</li><li>• La Secretaría de Educación y la Secretaría de Salud determinarán las condiciones del regreso de acuerdo al cumplimiento de los programas de educación básica y protocolos sanitarios.</li><li>• Si existe un contagio en el plantel educativo, ya sea maestro, alumno o personal administrativo, serán suspendidas las actividades por 14 días para continuar a distancia y se hará el estudio epidemiológico.</li></ul>",
        referencias: [
            "https://www.milenio.com/sociedad/clases-presenciales-nuevoleon-colegios-seguro-social",
            "https://www.razon.com.mx/mexico/firme-regreso-aulas-30-entidades-448357",
            "https://www.nl.gob.mx/campanas/recomendaciones-para-un-regreso-saludable-las-aulas-escolares-de-nivel-basico"
        ],
        color: StateBack2School
    },
    {
        id: "MX-TAM",
        name: "Tamaulipas",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "SP",
        alumnosVacunados: "NO",
        nombreEstrategia: "Jornada Presencial de Regularización",
        actividadesPresenciales: "El Gobernador Francisco García Cabeza de Vaca y los titulares de la Secretaría de Educación y Secretaría de Salud presentaron este martes las medidas que se llevarán a cabo en Tamaulipas para un regreso seguro, progresivo y voluntario a clases de manera presencial. <br><br>Expresó que se evaluarán las condiciones de cada región y de esta manera se determinará el retorno a las aulas educativas para el 30 de agosto, existen 651 escuelas en posibilidad de regresar a clases, pues están en municipios con semáforo verde y amarillo; estas escuelas se ubican en municipios de zona rural y periferia de ciudades. Así que por el momento, los municipios grandes como Tampico, Altamira, Ciudad Victoria, Reynosa, Matamoros y Nuevo Laredo no están consideradas, pero dependerá del comportamiento de la pandemia.<br><br>Aunque no se podrá obligar a nadie, por lo que será voluntario (con carta responsiva firmada por padres de los estudiantes) y se respetará la decisión de los padres de familia. <br><br>Educación básica se incorpora el 30 de agosto , Educación Media Superior única el 21 de septiembre y Educación superior, dependerá si es semestral o cuatrimestral.<br>Curso un Pilotaje para el regreso a clases, el cual cuenta con 2 fases de implementación.<br><br>El Secretario de Educación de Tamaulipas, Mario Gómez Monroy encabezó la Presentación de la Estrategia Estatal Organizacional Regreso a Clases Presenciales Seguro, Gradual y Voluntario para el Ciclo Escolar 2021 – 2022, en sesiones por niveles de educación Especial, Inicial, Preescolar, Primaria y Secundaria. (video de estrategia)<br><br>Definirán escuelas para el retorno a clases presenciales en Tamaulipas<br>La evaluación sobre cuáles escuelas están en condiciones de regresar a las aulas, se definirá el día jueves 26 de agosto. <br><br>Están listas cerca de mil escuelas para su regreso a las clases presenciales en Tamaulipas, dio a conocer el secretario de Educación en el estado, Mario Gómez Monroy, quien reconoció que también se incluyen planteles que se encuentran en semáforo epidemiológico naranja y rojo. Son 921 escuelas que reabrirán sus aulas a partir del lunes 30 de agosto, para recibir a un aproximado de 300 mil estudiantes de todos los niveles educativos, desde preescolar, educación especial, primaria y secundaria, preparatorias y universidad.",
        aforosFiltrosSanitarios: "Anunció que la firma de una carta responsiva por parte de los padres de familia no será una obligación en Tamaulipas. “Se dio a conocer a nivel nacional que los padres de familia tenían que firmar un documento para poder permitir que sus hijos ingresen a las escuelas, en Tamaulipas eso no es un requisito, no tendrán que firmar absolutamente nada, es totalmente voluntario”, afirmó <br><br>Los municipios que están sujetos a este regreso presencial seguro, progresivo y voluntario deben estar en fase 2 del semáforo epidemiológico.<br><br> Están por arrancar un pilotaje denominado Jornada Presencial de Regularización, fase 2. <br> El regreso a las aulas será en los municipios donde se tenga semáforo verde y amarillo.<br><br> Derivado de la Reunión Interinstitucional llevada a cabo esta semana con la Secretaría de Salud, se establecieron los acuerdos para determinar el Regreso a Clases Presenciales para el Inicio del Ciclo Escolar 2021-2022, en los niveles de Educación Básica, priorizando la salud física y emocional de la comunidad educativa, con acciones de prevención de riesgos ante la contingencia Covid-19. <br>Otro de los acuerdos para el regreso a clases presenciales, es el de suministrar con un kit de insumos para limpieza y sanitización a cada escuela, iniciando con los municipios en semáforo epidemiológico verde y amarillo.",
        referencias: [
            "https://www.tamaulipas.gob.mx/educacion/avisos/planteles-seleccionados-fase-2/",
            "https://www.milenio.com/politica/comunidad/regreso-a-clases-presenciales-en-tamaulipas-sera-voluntario",
            "https://www.tamaulipas.gob.mx/educacion/avisos/planteles-seleccionados-fase-2/",
            "https://www.tamaulipas.gob.mx/educacion/regresoaclasespresenciales-fasepiloto-boletines/",
            "https://kidstudia.com/guia/todo-sobre-el-regreso-a-clases-en-mexico/tamaulipas/",
            "https://www.milenio.com/politica/regreso-clases-vacaciones-ciclo-2021-2022-tamaulipas",
            "https://www.elsoldetampico.com.mx/local/regional/regreso-a-clases-presenciales-en-tamaulipas-sera-voluntario-cabeza-de-vaca-7026334.html",
            "https://www.hoytamaulipas.net/notas/464556/Regresaran-a-clases-presenciales-en-Tamaulipas-el-30-de-agosto.html",
            "https://www.milenio.com/politica/comunidad/regreso-clases-tamaulipas-municipios-semaforo-verde-amarillo",
            "https://www.tamaulipas.gob.mx/educacion/2021/08/acuerdos-para-el-regreso-a-clases-presenciales-en-educacion-basica-2021-2022/",
            "https://www.tamaulipas.gob.mx/2021/08/presenta-gobierno-de-tamaulipas-medidas-para-el-regreso-presencial-a-clases-de-manera-segura-progresiva-y-voluntaria/",
            "https://www.tamaulipas.gob.mx/educacion/2021/08/convocatoria-regreso-a-clases-presenciales-para-municipios-en-fase-i/",
            "https://www.elsoldetampico.com.mx/local/regional/definiran-escuelas-para-el-retorno-a-clases-presenciales-en-tamaulipas-7127426.html"
        ],
        color: StateBack2School
    },
    {
        id: "MX-SIN",
        name: "Sinaloa",
        regresoActividadesPresenciales: "SI",
        fechaRetorno: "30 de Agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "90",
        alumnosVacunados: "NO",
        nombreEstrategia: "Por decreto, emiten lineamientos para el regreso a clases en Sinaloa",
        actividadesPresenciales: "Medios indican: El modelo para el regreso a clases de manera presencial que implementaron Jalisco y Sinaloa desde marzo pasado es un buen esquema a seguir en este regreso a clases a partir del 30 de agosto próximo, señalaron representantes de la Asociación Mexicanos Primero. <br><br> El secretario de Educación Pública y Cultura, Juan Alfonso Mejía López, explicó que en cada una de las escuelas se determinará los días en que se darán las clases presenciales y lar virtuales, es decir, los maestros pueden tener las clases en aulas por una semana y la siguiente en línea, o elegir los días de la semana para cada modalidad.<br><br> En Sinaloa existen elementos para un regreso a clases gradual y focalizado, además de seguro para las niñas, niños y jóvenes, de acuerdo a la instrucción del gobernador Quirino Ordaz Coppel, quien fue reconocido por el presidente de la República, Andrés Manuel López Obrador, como el primer mandatario que solicitó la vacunación a las y los maestros del país para un regreso seguro a las escuelas.<br><br> En Sinaloa existen elementos para un regreso a clases gradual y focalizado, además de seguro para las niñas, niños y jóvenes, de acuerdo a la instrucción del gobernador Quirino Ordaz Coppel, quien fue reconocido por el presidente de la República, Andrés Manuel López Obrador, como el primer mandatario que solicitó la vacunación a las y los maestros del país para un regreso seguro a las escuelas.",
        aforosFiltrosSanitarios: "Regreso a las aulas en Sinaloa deberá atender condiciones de cada comunidad. Regreso a clases en Sinaloa será de forma gradual, focalizado y seguro. Experiencia previa de 955 Centros Comunitarios de Aprendizaje, donde se atendió a 26 mil 26 alumnos con rezago educativo. El congreso del Estado tiene la postura de “Estamos ansiosos porque los estudiantes regresen, pero la tercera ola de contagios es alarmante, ante este panorama es necesario que las autoridades actúen con prudencia: no hay condiciones del regreso seguro a las aulas",
        referencias: [
            "https://mieducacion.sepyc.gob.mx/sinaloa-coincide-con-el-presidente-andres-manuel-lopez-obrador-el-regreso-a-clases-es-por-el-convencimiento-nada-por-la-fuerza/",
            "https://www.debate.com.mx/opinion/Posible-retorno-a-las-aulas-20210730-0348.html",
            "https://mieducacion.sepyc.gob.mx/",
            "https://www.elsoldemazatlan.com.mx/local/regreso-a-clases-en-sinaloa-sera-en-modalidad-mixta-7045888.html",
            "https://www.elsoldemazatlan.com.mx/local/regreso-a-clases-en-sinaloa-sera-en-modalidad-mixta-7045888.html"
        ],
        color: StateBack2School
    },
    {
        id: "MX-DUR",
        name: "Durango",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "Si",
        reincorporacionGradual: "Si",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "100",
        alumnosVacunados: "NO",
        nombreEstrategia: "No disponible",
        actividadesPresenciales: "Autoridades y representantes sindicales acordaron un regreso mixto a clases el próximo lunes, ya que cada escuela definirá si vuelven de manera presencial o virtual. <br><br>Después de varias horas de trabajo hemos acordado en plena coincidencia desde luego con nuestras dirigencias sindicales, primero que hay plena disposición del Magisterio y del Gobierno del Estado de iniciar el ciclo escolar el próximo 30 de agosto, desde luego cuidando todos los aspectos que nos lleven a garantizar un regreso seguro a la escuela, informó el gobernador José Aispuro Torres.   De detectarse un caso positivo de COVID en el regreso a clases, no se cerrará la escuela: Se le dará seguimiento ante la posibilidad de más casos fuera del plantel. El secretario de Salud estatal, Sergio González Romero, explicó que el regreso a clases no será masivo ni en todas las escuelas y tampoco será a la máxima capacidad en donde sí sea el inicio del ciclo de manera presencial. “El regreso a clases no es masivo, no será en todas las escuelas ni toda la capacidad que tiene, estamos haciendo un estudio muy minucioso a través del INEGI y de la universidad Juárez del Estado de Durango, no solamente para ver cómo se va a comportar el virus sino georeferenciar las zonas de alto contagio y ahí valorar muy bien el regreso a clases”.   En el Colegio de Bachilleres del Estado de Durango (Cobaed), al menos 3 de los 33 planteles arrancaron con clases presenciales, se trata de aquellos ubicados en las zonas de menos riesgo de contagio como San Juan de Guadalupe y El Durazno; no obstante 17 más lo hicieron en la modalidad híbrida y los 13 restantes continuarán con clases virtuales, según el contexto de riesgo.",
        aforosFiltrosSanitarios: "Sin información",
        referencias: [
            "https://www.elsoldedurango.com.mx/local/este-miercoles-se-define-cuantas-escuelas-regresan-a-clases-presenciales-en-durango-7125588.html",
            "https://lavozdgo.com/2021/08/24/garantiza-seed-regreso-a-clases-presenciales-seguro/"

        ],
        color: StateBack2School
    },
    {
        id: "MX-ZAC",
        name: "Zacatecas",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "90.6",
        alumnosVacunados: "NO",
        nombreEstrategia: "Regreso a clases presenciales",
        actividadesPresenciales: "La secretaria de Educación en Zacatecas, reiteró que el regreso a clases presenciales en la entidad se mantiene para el próximo 30 de agosto para los niveles de educación básica, media superior y superior, dicho retorno será opcional, es decir, serán los tutores, padres y madres de familia quienes decidan si los alumnos y las alumnas acuden o no a los planteles escolares. El regreso presencial será escalonado y ordenado, aunque, no será obligatorio para las y los estudiantes, ni tampoco para los docentes con alguna comorbilidad, por lo que las clases a distancia continuarán para quienes así lo decidan. <br><br> En declaraciones recientes, se reiteró que el regreso será solo si los padres de familia están de acuerdo. Se comentó que solo en los municipios de el Salvador, Melchor Ocampo, Mezquital del Oro, Apozol, Apulco, donde no hay contagios se puede retomar el regreso a clases presenciales.<br><br> Se publicó exhorto de la legislatura local para que la Secretaría de Educación y la Secretaría de Salud del Estado de Zacatecas elaboren un plan estratégico de regreso a clases presenciales seguro, ordenado, gradual, escalonado y cauto; con todos los protocolos de salud establecidos, además de valorar la posibilidad de un regreso a clases inmediato en aquellas instituciones públicas y privadas pequeñas, con pocos alumnos y donde las condiciones físicas así lo permitan.<br><br> De las 4 mil 500 escuelas que atienden la educación inicial desde preescolar hasta secundaria, más de 10 por ciento no cumplen con los requisitos para garantizar la seguridad de los pequeños, sobre todo en suministros básicos como agua potable, luz eléctrica y drenaje.<br><br>Oscar Castruita, titular de la SNTE sección 58 dijo que aproximadamente 500 escuelas de zonas rurales no regresarán a clases presenciales, esto debido a que no cuentan con los elementos necesarios para un retorno seguro, tales como agua potable ni energia electrica.",
        aforosFiltrosSanitarios: "De acuerdo con la encuesta realizada por la Secretaría de Educación de Zacatecas (SEZ) a 101 mil 808 madres, padres de familia y tutores, el 81.3 por ciento dijo que está de acuerdo en que niñas, niños y adolescentes regresen a las escuelas de educación básica de manera presencial. El 92.3 por ciento se mostró dispuesto a colaborar en el establecimiento de los filtros sanitarios en casa, escuela y salón de clases, tal como lo establecen los protocolos de la Secretaría de Educación Pública (SEP). Se respetará la sana distancia, se suspenderán las ceremonias y los alumnos tendrán acceso a jabón, agua y gel alcoholado.<br><br> LA UAZ hará encuesta de movilidad y convivencia, “ya se tienen claros los protocolos de seguridad, de sanitización para todos los espacios, solo veremos si será escalonado, de acuerdo a los espacios o por nivel educativo, sin embargo, la decisión se tomará en agosto",
        referencias: [
            "https://imagenzac.com.mx/capital/necesario-el-regreso-clases-presenciales-en-zacatecas-brena-cantu/",
            "http://www.seduzac.gob.mx/portal/index.php",
            "http://ntrzacatecas.com/2021/08/18/vuelta-a-clases-es-positiva-para-menores-alanis/",
            "https://www.zacatecas.gob.mx/mas-de-81-de-madres-y-padres-de-familia-estan-de-acuerdo-en-que-alumnos-de-educacion-basica-regresen-a-las-aulas/ ",
            "https://imagenzac.com.mx/capital/estudiantes-regresaran-a-las-aulas-el-30-de-agosto/",
            "http://ntrzacatecas.com/2021/07/12/prepara-uaz-encuesta-de-movilidad-y-convivencia/",
            "https://www.eluniversal.com.mx/estados/regreso-clases-en-universidad-de-zacatecas-sera-virtual",
            "http://ntrzacatecas.com/2021/08/12/joca-prs/",
            "http://ntrzacatecas.com/2021/08/17/regreso-a-escuelas-en-incertidumbre-y-caro/",
            "https://www.elsoldezacatecas.com.mx/local/asi-propone-seduzac-el-regreso-a-clases-presenciales-7121156.html",
            "https://www.periodicomirador.com/2021/08/23/zacatecas-preparado-para-el-regreso-a-clases/",
            "http://ntrzacatecas.com/2021/08/25/casi-500-escuelas-sin-regreso-a-aulas/",
            "https://imagenzac.com.mx/capital/no-regresaran-a-clases-presenciales-500-escuelas-en-zacatecas/"
        ],
        color: StateBack2School
    },
    {
        id: "MX-SLP",
        name: "San Luis Potosí",
        regresoActividadesPresenciales: "SI",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "90",
        alumnosVacunados: "NO",
        nombreEstrategia: "Protocolo para el regreso seguro a clases",
        actividadesPresenciales: "Aunque los diputados Martha Barajas García y Martín Juárez Córdova coincidieron en que toda la comunidad educativa debe estar protegida y lo mínimo que se requiere es que las escuelas estén en buenas condiciones, con agua, luz, equipo y todo lo necesario para que se cumplan los protocolos sanitarios. No hay un pronunciamiento de la Seccretaria de Educación para confirmar tales  opiniones <br><br>La autoridad educativa federal dará a conocer información para el regreso a clases y en reunión de CONAEDU",
        aforosFiltrosSanitarios: "No habrá regreso a clases presenciales durante el mes de agosto, además recordó que para el regreso a clases presenciales, cuando existan las condiciones sanitarias, se aplicarán nueve intervenciones o medidas para asegurar el bienestar de la comunidad escolar. <br><br> Hubo una reapertura del 15% de escuelas en junio. El saldo fueron dos casos de contagios en docentes y nueve alumnos",
        referencias: [
            "https://slp.gob.mx/sege/Paginas/NOTICIAS/FECHAS-Y-MODALIDAD-DE-REGRESO-A-CLASES--SE-DAR%C3%81N-A-CONOCER-LA-PR%C3%93XIMA-SEMANA.aspx",
            "https://slp.gob.mx/sege/Paginas/NOTICIAS/NO-HAY-REGRESO-A-CLASES-PRESENCIALES-EN-SAN-LUIS-POTOS%C3%8D-SECRETARIO-DE-EDUCACI%C3%93N.aspx",
            "https://www.elsoldesanluis.com.mx/local/confirma-la-sege-el-regreso-a-clases-el-30-de-agosto-en-san-luis-potosi-7073590.html",
            "https://www.elsoldesanluis.com.mx/local/en-slp-no-hay-condiciones-para-regreso-a-clases-presenciales-7097203.html",
            "https://www.slp.gob.mx/sege/PDF/Estrategia%20Estatal%20para%20el%20Regreso%20Seguro%20a%20Clases.pdf"
        ],
        color: StateBack2School
    },
    {
        id: "MX-NAY",
        name: "Nayarit",
        regresoActividadesPresenciales: "SI",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "85.4",
        alumnosVacunados: "NO",
        nombreEstrategia: "Aprende en casa",
        actividadesPresenciales: "Se tenía previsto que algunos municipios de la Sierra regresarán a clases presenciales en mayo sin embargo ante el alza en casos de covid y el retroceso del semáforo de verde a amarillo dicho iniciativa se frenó.<br><br> El regreso a clases para educación básica está programado para el 10 de agosto, siempre y cuando Nayarit se encuentre en semáforo verde. <br><br> En estos momentos el Estado de Nayarit NO se encuentra en condiciones de regresar a clases presenciales por el alto índice de incrementos de casos de COVID-19”, declaró en entrevista Martín Isaac Pérez, Subsecretario de Educación Media Superior y Superior en el Estado de Nayarit.",
        aforosFiltrosSanitarios: "El subsecretario de Educación Media Superior y Superior en el Estado, Martín Isaac Pérez quien explicó que el recurso para hacer las reparaciones pertinentes a los planteles tras más de un año de estar solas, comienzan a llegar, por lo tanto, antes de que inicie el ciclo ya deben de estar listas para recibir a los alumnos.<br><br>Siguiendo los protocols establecidos por Gobierno Federal<br><br>En caso de que se reanuden las clases presenciales en el estado, se tomarán la siguientes medidas:<ol><li>Establecimiento de Comités de salud escolar.</li><li>Mantener sana distancia y uso general del cubreboca en los planteles.</li><li>Acceso a agua y jabón.</li><li>Suspensión de todo acto cívico o ceremonia.</li><li>Maximización del uso de espacios abiertos.</li><li>Detección temprana de contagios.</li><li>Cierre de escuelas en caso de contagio.</li></ol>",
        referencias: [
            "https://www.nayarit.gob.mx/seccion/educacion",
            "https://meridiano.mx/seccion/nayarit/nayarit-no-est-en-condiciones-de-regresar-a-clases-presenciales-educaci-n-1/",
            "https://www.nayarit.gob.mx/seccion/educacion#:~:text=El%20'Verano%20Divertido'%20iniciar%C3%A1%20el,cuando%20existan%20las%20condiciones%20sanitarias",
            "https://kidstudia.com/guia/todo-sobre-el-regreso-a-clases-en-mexico/nayarit/",
            "https://meridiano.mx/seccion/nayarit/nayarit-no-est-en-condiciones-de-regresar-a-clases-presenciales-educaci-n-1/",
            "https://www.gob.mx/sep/es/articulos/boletin-sep-no-102-concluye-exitosamente-el-proceso-de-vacunacion-a-personal-docente-en-30-entidades-del-pais?idiom=es",
            "https://latinus.us/2021/08/11/regreso-clases-presenciales-estados-volveran-aulas-nuevo-ciclo-escolar/",
            "https://www.eloccidental.com.mx/local/respalda-seccion-49-retorno-a-clases-presenciales-en-nayarit-7082730.html",
            "https://vallartaindependiente.com/2021/08/16/siempre-si-esta-contemplado-el-regreso-a-las-aulas-en-nayarit/",
            "https://meridiano.mx/articulo/2021-08-16/inminente-regreso-a-clases-presenciales-en-nayarit-este-30-de-agosto-1",
            "https://www.debate.com.mx/estados/SEP-confirma-regreso-a-clases-presenciales-en-Nayarit-sera-escalonado-y-voluntario-20210819-0227.html"
        ],
        color: StateBack2School
    },
    {
        id: "MX-JAL",
        name: "Jalisco",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de Agosto 2021",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "SP",
        alumnosVacunados: "NO",
        nombreEstrategia: "Modelo hibrido y opcional de regreso a clases-Regreso a clases presenciales",
        actividadesPresenciales: "El mandatario, Enrique Alfaro reitera que el 30 de agosto habrá retorno a las escuelas. “La manera como crecieron de manera rapidísima los contagios en niños, pero justamente en el período de vacaciones, el momento en el que más crecen los contagios es justamente en este periodo , y afortunadamente el número de contagios en niños ha iniciado su descenso en las últimas semanas, por lo cual reiteramos y sostenemos que el regreso a clases presenciales se sostiene.",
        aforosFiltrosSanitarios: "Filtros familiares. Antes de enviar a tu hija o hijo a la escuela, identifica si presenta algún síntoma asociado al COVID-19 como fiebre, tos, dolor de cabeza o garganta, pérdida del olfato o del gusto, dificultad para respirar, entre otros. <br><br>Si presenta alguno de ellos, no lo lleves a la escuela, notifica a la autoridad educativa y acudan a la Unidad Médica que les corresponde.<ul><li>1. Aforo permitido: Si el grupo es menor al 50 % de la capacidad del aula, todos los estudiantes asisten de lunes a viernes todas las semanas. Los grupos con más estudiantes se dividen; la mitad asiste a clases presenciales durante una semana, mientras la otra realiza actividades a distancia.</li><li> 2. Medidas a seguir: El personal de la escuela vigilará el cumplimiento de las medidas sanitarias, pero proteger la salud de la comunidad educativa es tarea de todas y todos, por ello, es importante que expliques a tus hijas o hijos la importancia de atenderlas durante el tiempo que permanecen en la escuela.</li></ul>",
        referencias: [
            "https://coronavirus.jalisco.gob.mx/todo-sobre-el-regreso-a-clases/",
            "https://portalsej.jalisco.gob.mx/plan-jalisco-para-la-reactivacion-economica/",
            "https://udgtv.com/noticias/regreso-clases-virtuales-decision-basada-criterios-cientificos-udeg/",
            "https://www.notisistema.com/noticias/regreso-a-clases-presenciales-en-jalisco-se-mantiene-alfaro/"
        ],
        color: StateBack2School
    },
    {
        id: "MX-AGU",
        name: "Aguascalientes",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "91",
        alumnosVacunados: "NO",
        nombreEstrategia: "Me sumo a un regreso seguro",
        actividadesPresenciales: "La Asociación de Instituciones Educativas Particulares del Estado ha solicitado al Instituto de Educación de Aguascalientes se les permita iniciar el ciclo lectivo 2021-2022 el próximo 23 de agosto, y no tener que esperar hasta el día 30, habrá que esperar confirmación <br> Los estudiantes podrán ingresar a los planteles, pero no de manera masiva, es decir no regresan los grupos completos al mismo tiempo, será, durante las primeras semanas de manera escalonada y para permitir a los profesores levantar un diagnóstico sobre el aprendizaje logrado durante este periodo de aislamiento. <br> El nivel básico de educación tendrá un modelo mixto de clases, con grupos reducidos y asistencia alternada a los salones de clases. Los niños de los niveles de preescolar, primaria y secundaria deberán ajustarse a las siguientes fechas: <br><br> Jornadas de limpieza escolar. 11, 12 y 13 de agosto. <br> Inscripciones y reinscripciones. Del lunes 16 de agosto al viernes 10 de septiembre. <br> Evaluación diagnóstica. Del lunes 16 de agosto al viernes 10 de septiembre. <br> Período extraordinario de recuperación. Del lunes 13 de septiembre al martes 23 de noviembre dirigido a los alumnos con deficiencias educativas. <br> El nivel medio superior regresará a clases con un modelo mixto. Los alumnos asistirán a clases de manera alternada, en grupos pequeños y con todas las medidas de salud e higiene necesarias para un regreso seguro. <br><br> El regreso a clases de este nivel educativo tendrá varias fechas, dependiendo del sistema al que está incorporada la escuela de tu hijo. Para el 6 de septiembre todas las preparatorias del estado ya deberán estar en clases. Por lo pronto se prevén las siguientes fechas de inicio: <br><br> Bachilleratos tecnológicos. Inicio de clases 23 de agosto. <br> Conalep. Inicio de clases 30 de agosto. <br> Bachilleratos incorporados a universidades. Misma fecha de inicio de la institución de nivel superior a la que se encuentran incorporados. <br> Las universidades darán inicio a las actividades educativas según su propio calendario escolar.   El regreso presencial a clases a partir del 30 de agosto próximo correspondiente al nuevo ciclo lectivo 2021-2022 será con jornadas completas, de 8:00 am a 1:00pm, en el caso de las primarias",
        aforosFiltrosSanitarios: "Protocolo para prevenir contagios durante el regreso progresivo a clases presenciales en escuelas públicas y privadas de educación básica, media superior y superior , publciado el 27 de julio de 2021, en el cual se detallan las estregias para evitar contagios: Uso obligatorio del cubrebocas, puerta abiertas y evitar contacto con picaportes, filtro de hogar, filtro escolar , filtro de aula, capaictaciones para personal y alumnos, limpieza a profundidad de las superficies, espacios y materiales, clausura de bebederos, reorganizar descansos y actividades fisicas, se promoveran clases en espacios abiertos, lavado de mano, evitar compartir alimentos, promover el estornudo de etiqueta (cubrir con el angulo interno del codo), el uniforme escolar no es obligatorio, se limita el aforo de los eventos  especiales, las actividades de servicios escolares serán por cita, <ul> <li>-Se recabaran cartas de corresponsabilidad.</li> <li>-maximizar sana distancia y aprovechamiento de espacios abiertos y el uso permanente e irrestricto de cubrebocas.</li> <li>-lpimite del 40% diario de la población escolar.</li> <li>- No mas de 9 alumnas y alumnos y un docente por aula de educación primaria y telesecundaria.</li> <li>-No mas de 12 alumnos y alumnas y un docente por aula en escuelas secundarias generale sy técnicas.</li> <li>-No se permite en este periodo ningún tipkde expendio de alimentos ni se realizaran clases de educación fisica o artística</li></ul>",
        referencias: [
            "http://www.hidrocalidodigital.com/aguascalientes-si-tendra-clases-presenciales/#:~:text=Las%20autoridades%20del%20estado%20planean,el%20pr%C3%B3ximo%2030%20de%20agosto."
        ],
        color: StateBack2School
    },
    {
        id: "MX-GUA",
        name: "Guanajuato",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "85.5",
        alumnosVacunados: "NO",
        nombreEstrategia: "Guanajuato educado con R de Reactivación. Regreso a las aulas.",
        actividadesPresenciales: "La SEG informa que no solicitará carta o documento de compromiso de asistencia voluntaria. La medida concuerda con lo dado a conocer este día por la Secretaría de Educación Federal en el Acuerdo número 23/08/21 por el que se establecen diversas disposiciones para el desarrollo del ciclo escolar 2021-2022.",
        aforosFiltrosSanitarios: "ventilación en los salones de clase, el tipo de suministro y almacenamiento de agua, la densidad escolar así como la existencia de espacios físicos para el control de filtros.",
        referencias: [
            "https://www.seg.guanajuato.gob.mx/RegresoalasAulas/SitePages/Inicio.aspx",
            "https://www.seg.guanajuato.gob.mx/RegresoalasAulas/SitePages/Inicio.aspx",
            "https://notus.com.mx/regreso-a-clases-presenciales-en-guanajuato-30-agosto-2021/",
            "https://www.milenio.com/politica/comunidad/guanajuato-regreso-clases-presenciales-ajustara-municipio",
            "https://www.seg.guanajuato.gob.mx/RegresoalasAulas/SitePages/EducacionVacunada.aspx",
            "https://zonafranca.mx/politica-sociedad/educacion/en-guanajuato-sera-voluntario-el-regreso-a-clases/",
            "https://www.unionguanajuato.mx/2021/08/02/regreso-a-clases-presenciales-en-agosto-calendario-escolar-2021-a-2022-de-la-sep/",
            "https://www.debate.com.mx/estados/El-regreso-a-clases-presenciales-sera-voluntario-en-Guanajuato-Diego-Sinhue-20210816-0394.html",
            "https://boletines.guanajuato.gob.mx/2021/08/20/prepara-seg-inicio-de-ciclo-escolar-2021-2022/"
        ],
        color: StateBack2School
    },
    {
        id: "MX-QUE",
        name: "Querétaro",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "95",
        alumnosVacunados: "NO",
        nombreEstrategia: "Programa Especial de Regreso a Clases",
        actividadesPresenciales: "Se Instaló Subcomité Técnico para el Regreso a Clases del Estado de Querétaro, el objetivo: organizar un posible regreso a clases presenciales planeado, escalonado, gradual, y cauto, con el fin de disminuir el riesgo de contagio y proteger la salud de las comunidades escolares.",
        aforosFiltrosSanitarios: "Se realizara de acuerdo a los ''LINEAMIENTOS GENERALES PARA EL REGRESO A LAS ACTIVIDADES ESCOLARES, EN EL MARCO DE LA PANDEMIA COVID-19''",
        referencias: [
            "https://queretaro.gob.mx/regresoaclaseguro.aspx",
            "https://www.queretaro.gob.mx/covid19/contenido/noticiasContenido.aspx?q=vUYGbsxLnli7glS/gQWD0HldeVLSaRLz7RohSiloFmz7sxVv8axXyw==",
            "https://www.queretaro.gob.mx/pdf/SEDEQ_GuiaRegresoaClases.pdf"
        ],
        color: StateBack2School
    },
    {
        id: "MX-HID",
        name: "Hidalgo",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "99",
        alumnosVacunados: "NO",
        nombreEstrategia: "Regreso Seguro a Clases en los centros educativos en el marco de la pandemia COVID 19, Operativo Escudo, Hidalgo Seguro",
        actividadesPresenciales: "El regreso a clases para el ciclo escolar 2021-2022 será el 30 de agosto gradual y voluntario, en tres faces, primero en los 15 municipios en verde y posteriormente evaluando la situación del resto de la entidad, que se mantendrá trabajando a distancia.",
        aforosFiltrosSanitarios: "<ul><li> 1. integración al comité participativo de las escuelas.</li><li> 2. Filtros en casa, escuela y salón de clases.</li><li> 3. lavado de manos con agua y jabón y uso de gel antibacterial. </li><li> 4. uso de cubreboca. </li><li> 5. mantener sana distancia. </li><li> 6. dar mayor uso a los espacios abiertos. </li> <li> 7. no habrá ceremonias ni reuniones generales. </li><li> 8. avisar a la escuela en caso de presencia o sospecha de casos de COVID-19. </li><li> 9. inscibirse en los cursos de apoyo socioemocional en línea de la SEP.</li></ul>",
        referencias: [
            "https://www.milenio.com/ciencia-y-salud/hidalgo-99-docentes-vacunaron-covid-19-seph",
            "https://latinus.us/2021/08/15/regreso-clases-hidalgo-haya-condiciones-gobernador-reporta-aumento-contagios/",
            "https://hidalgo.jornada.com.mx/cuando-entran-a-clases-en-hidalgo-2021/",
            "https://criteriohidalgo.com/noticias/medidas-regreso-clases-presenciales-hidalgo"
        ],
        color: StateBack2School
    },
    {
        id: "MX-COL",
        name: "Colima",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido, según sea el caso",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "93.5",
        alumnosVacunados: "NO",
        nombreEstrategia: "Estrategia Estatal de Regreso Seguro a Clases Presenciales",
        actividadesPresenciales: "Para el ciclo 2021-2022 se tomarán en cuenta tres modalidades para el regreso a clases presenciales. La primera modalidad  es el retorno a actividades presenciales de forma total en los planteles cuya densidad demográfica sea muy baja, como en las escuelas multigrado y comunitarias, con grupos de menos de 20 alumnos.  <br><br>La segunda modalidad es un regreso gradual y escalonado para escuelas de comunidades semi urbanas, con densidad mediana, en donde hay grupos de menos de 25 alumnos; ahí los docentes podrán dividir por orden alfabético los grupos, para que la mitad asista lunes y miércoles, la otra mitad martes y jueves, y dejar el viernes para atender casos de rezago educativo.  Y  la tercera modalidad es la mixta, para escuelas urbanas donde tienen grupos mayores de 25 alumnos; ahí será decisión del colectivo escolar determinar o combinar las actividades presenciales con la estrategia a distancia.",
        aforosFiltrosSanitarios: "Se conformará un comité de salud en cada escuela, filtros al ingreso al plantel, abastecer de agua y jabón, uso obligatorio de mascarilla, cuidado de grupos vulnerables y cuando se detecte algún caso de coronavirus, el plantel cerraría de forma inmediata.",
        referencias: [
            "https://www.milenio.com/estados/colima-pone-a-prueba-el-regreso-a-clases",
            "https://www.colimanoticias.com/antes-del-regreso-a-clases-preservar-la-salud-y-vida-del-alumnado-y-docentes-se/",
            "https://diariodecolima.com/noticias/detalle/2021-07-23-flores-colima-est-preparado-para-iniciar-el-ciclo-escolar",
            "https://elcomentario.ucol.mx/elabora-colima-su-estrategia-para-regreso-a-clases-presenciales/",
            "https://www.gob.mx/sep/es/articulos/boletin-sep-no-102-concluye-exitosamente-el-proceso-de-vacunacion-a-personal-docente-en-30-entidades-del-pais?idiom=es",
            "https://diariodecolima.com/noticias/detalle/2021-08-16-la-entidad-lista-para-el-regreso-a-clases-secretario-de-educacin",
            "https://elcomentario.ucol.mx/oficializa-educacion-el-regreso-a-clases-presenciales-en-colima-para-el-30-de-agosto/",
            "https://www.colimanoticias.com/prepara-educacion-colima-regreso-seguro-a-clases-presenciales/",
            "https://www.milenio.com/estados/clases-presenciales-colima-anuncia-regreso-30-agosto",
            "https://www.afmedios.com/educacion-colima-anuncia-regreso-a-clases-en-3-modalidades/"
        ],
        color: StateBack2School
    },
    {
        id: "MX-MIC",
        name: "Michoacán de Ocampo",
        regresoActividadesPresenciales: "No",
        fechaRetorno: "Sin información",
        tipoModelo: "A distancia",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "SP",
        alumnosVacunados: "NO",
        nombreEstrategia: "Escuela abierta",
        actividadesPresenciales: "En Michoacán, los únicos que se presentarán a las aulas el 30 de agosto serán los estudiantes de los niveles medio superior y superior, educación básica continúa clases a distancia.",
        aforosFiltrosSanitarios: "El gobernador de Michoacan alertó que un regreso a clases presenciales en primarias y secundarias, aumentará la movilidad de manera muy considerable, y el riesgo de las familias. Ello, describió, por los traslados y contacto que implica llevar, entregar y recoger a los hijos e hijas en las escuelas.",
        referencias: [
            "https://www.eluniversal.com.mx/estados/en-michoacan-no-hay-condiciones-para-regreso-clases-presenciales-aureoles",
            "https://www.lavozdemichoacan.com.mx/michoacan/educacion/ciclo-escolar-2021-2022-inicia-a-la-distancia-en-educacion-basica-confirma-la-see/",
            "https://www.animalpolitico.com/2021/08/michoacan-hidalgo-rechazan-regreso-clases-presenciales-estados-siguen-evaluando/",
            "https://www.elsoldemorelia.com.mx/local/cnte-12-mil-escuelas-no-regresaran-a-clases-presenciales-en-michoacan-7129688.html"
        ],
        color: StateNoBack2School
    },
    {
        id: "MX-VER",
        name: "Veracruz de Ignacio de la Llave",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "SP",
        alumnosVacunados: "NO",
        nombreEstrategia: "Regreso a clases presenciales",
        actividadesPresenciales: "El Gobernador consideró necesario que los estudiantes retomen su actividad en las escuelas y por eso el regreso a clases en el estado de Veracruz se dará como lo establece el calendario de la Secretaría de Educación Pública (finales de agosto). En un cambio de opinión de lo que venía sosteniendo en cuanto al retorno a las aulas en la entidad, el Gobernador manifestó categórico que la educación está federalizada; de ahí que será la autoridad educativa federal la que determine cuándo se dará el regreso a la actividad presencial escolar. <br><br>El secretario de Educación de Veracruz, afirmó que tras la reunión con el Consejo Nacional de Autoridades Educativas se determinó que el regreso a las aulas será el próximo 30 de agosto, aunque será parcial y refirió que la decisión final será de las madres y padres de familia de mandar a sus hijos a la escuela.<br><br>Regreso a clases presenciales: Veracruz no iniciará en zonas afectadas por huracán Grace.<br>Se prevé regreso a clases presenciales en 20 mil escuelas. En tanto, los planteles de 64 municipios que registraron afectaciones por el paso del huracán 'Grace', no podrán retomar clases a final de mes.",
        aforosFiltrosSanitarios: "Entrega de kits de limpieza en todos los planteles <br><br> Acorde al semáforo epidemiológico, aplica SEV estrategias a distancia<br><br> El 24 de junio regresaron a las aulas, al respecto, se cuenta con 682 estrategias por sistema en los modelos presencial, mixto y virtual. La Secretaría de Educación estatal destacó que esta planeación incluye el acuerdo voluntario de la comunidad escolar, para lo que padres y madres recibirán una carta compromiso sobre el cuidado de la salud de sus hijos. <br><br> 1.- Todas las escuelas ubicadas en municipios con Semáforo en color amarillo o naranja, darán atención únicamente en la modalidad a distancia.<br> 2.- En los municipios que se mantenga el color verde del semáforo epidemiológico local, las instituciones podrán continuar según lo programado y decidido por cada centro escolar.<br><br> El personal del plantel educativo podrá asistir a sus escuelas si así lo acuerdan a realizar las tareas pertinentes con o sin estudiantes de acuerdo a los puntos 1 y 2.",
        referencias: [
            "https://www.sev.gob.mx/v1/noticias/leer/2354/",
            "https://www.diariodexalapa.com.mx/local/si-habra-clases-presenciales-pero-no-obligatorio-dijo-el-titular-de-la-sev-zenyazen-escobar-garcia-7029291.html",
            "https://www.diarioelmundo.com.mx/index.php/2021/07/16/en-agosto-regreso-a-clases-en-veracruz/",
            "https://www.milenio.com/estados/regreso-clases-presenciales-veracruz-grupos-reducidos",
            "https://www.elsoldecordoba.com.mx/local/hay-giro-regreso-a-aulas-ya-no-es-obligatorio-afirmo-el-secretario-de-educacion-de-veracruz-zenyazen-7086941.html",
            "https://www.elsoldeorizaba.com.mx/local/cambio-ya-no-es-obligatorio-el-regreso-a-las-aulas-afirmo-el-secretario-de-educacion-de-veracruz-zenyazen-7087120.html",
            "https://www.milenio.com/estados/regreso-clases-presenciales-veracruz-grupos-reducidos",
            "https://www.elfinanciero.com.mx/nacional/2021/08/25/regreso-a-clases-presenciales-veracruz-no-iniciara-en-zonas-afectadas-por-grace/",
            "https://www.milenio.com/estados/veracruz-preve-regreso-clases-presenciales-20-mil-escuelas"
        ],
        color: StateBack2School
    },
    {
        id: "MX-PUE",
        name: "Puebla",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de Agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "95",
        alumnosVacunados: "NO",
        nombreEstrategia: "Modelo Educativo Híbrido en el Estado de Puebla Educación Básica y Media Superior Ciclo Escolar 2021-2022",
        actividadesPresenciales: "Para el regreso a clases será prioridad que las y los maestros estén vacunados: Lozano <ol><li>La educación es un derecho humano que debe garantizarse en todo momento, principalmente en tiempos de crisis, por la importancia que tienen los procesos de sociabilización y humanización, el aprendizaje se convierte en un instrumento de sobrevivencia.</li> <li>Se establece que el servicio público educativo se brindará de forma presencial responsable y ordenada con base en los términos que disponga las autoridades sanitarias, el acuerdo nacional reafirma la ruta trazada en Puebla.</li> <li>El regreso presencial será con carácter voluntario habiendo de por medio una carta compromiso de asistencia voluntaria y corresponsabilidad. <li>La educación debe ser considerada una actividad esencial y por lo tanto requiere la participación presencial de todo el personal para atender a los alumnos y garantizar el derecho a la educación. <li>El modelo híbrido será el sistema de trabajo que adoptarán en el siguiente ciclo escolar 21-22 <li>Las faenas continúan de forma sistemática, del 11 al 13 de agosto participaron 10 mil 817 escuelas que representan el 90% en las faenas escolares de limpieza y desinfección, por su parte el CAPCEE avanza en la intervención de las 480 escuelas vandalizadas. <li>El taller intensivo de capacitación a realizarse del 16 al 20 de agosto podrá llevarse a cabo de manera presencial y a distancia. <li>El Consejo Técnico programado del 23 al 27 de agosto será presencial.</li> <li>Se instrumentará el programa “Por una vida sana, Puebla te cuida” entre la Secretaría de Salud y la Secretaría Educación, el cual permitirá identificar situaciones de vulnerabilidad en los alumnos y así proteger los manteniéndose en la modalidad a distancia en caso de tener alguna comorbilidad.</li> <li>Los maestros rezagados en el programa de vacunación, así como los de nuevo ingreso serán atendidos por la Secretaría de Salud para su vacunación respectiva. <li>Se debe garantizar el derecho a la accesibilidad. Las cuotas estarán mediadas por las asambleas respectivas donde se tomen acuerdos en consenso y en armonía; si existe alguna queja llamar al 222 22938 20 o terminación 25. <li>Ya se están distribuyendo los más de 9.7 millones de libros de texto gratuitos. Representan un recurso didáctico importante que se suma a otros materiales que permiten el acompañamiento del modelo híbrido, como son guías Puebla en casa, aprende en casa, entre otros, la educación a distancia no es sinónimo de internet. <li>Se implementarán 10 acciones clave para promover incubar la seguridad, salud e higiene de la comunidad escolar además de emitirse una guía para el regreso presencial responsable y ordenado. <li>Las instituciones educativas dependientes de la subsecretaría de educación media superior y superior se sujetarán a las disposiciones que en materia educativa y de salud se meta tienen sus propios calendarios <li>Promover el apoyo socioemocional para los educandos y docentes en colaboración con el sector salud. <li>Al inicio del ciclo escolar 2021-2022 se realizaron periodo de valoración diagnóstica de los alumnos y reforzamiento de aprendizajes no sólo de matemáticas y lectura la formación integral, exige diagnósticos y procesos de compensación también integrales como lo establece la nueva escuela mexicana. <li>Se flexibilice al máximo las disposiciones que faciliten el tránsito escolar y permita la inscripción y reinscripción de los alumnos en los tres niveles educativos con objeto de asegurar su permanencia y regreso del sistema educativo nacional la adaptabilidad como dimensión clave del derecho a la educación. <li>La solidaridad y organización es la clave para evitar el riesgo de contagio y atemorización. <li>La escuela y la familia deben convertirse en centros de protección emocional y de contagios en diálogo corresponsable permanente <li> Se invita a mantener una actitud crítica constructiva frente al proceso de regreso presencia la clase, evitando reduccionismo, postura sin fundamentos y de mala fe.</li></ol>",
        aforosFiltrosSanitarios: "Las escuelas multigrado o de organización completa que puedan atender a toda su población de manera presencial todos los días, deben garantizar la sana distancia, así como la implementación del plan de atención (nivelación) de forma integrada a las jornadas académicas. Aquellas escuelas con mayor matrícula dividirán aforos cuya distribución puede ser por apellidos.",
        referencias: [
            "http://sep.puebla.gob.mx/index.php/component/k2/prueba-2-2-2",
            "https://www.eluniversalpuebla.com.mx/educacion/95-de-maestros-en-puebla-ya-esta-vacunado-contra-covid",
            "https://www.milenio.com/politica/comunidad/clases-presenciales-en-puebla-seran-voluntarias-sep",
            "https://www.poblanerias.com/2021/08/educacion-presentan-20-puntos-clave-para-regreso-a-clases-presenciales-en-puebla/"
        ],
        color: StateBack2School
    },
    {
        id: "MX-TLA",
        name: "Tlaxcala",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "SP",
        alumnosVacunados: "NO",
        nombreEstrategia: "Sin información",
        actividadesPresenciales: "En medios se ha difundido que la incorporación presencial será una vez que el semáforo epidemiológico este en verde (habrá cambio de Administración Estatal) Cuellar ciscneros , gobernadora electa, comentó estar listos para la incorporación presencial.<br><br> El Instituto Tecnológico del Altiplano de Tlaxcala (ITAT), cuenta con un Plan de retorno de actividades académicas esenciales para el semestre escolar que inicia el 23 de agosto, en el cual establecen la modalidad híbrida para la realización de las actividades académicas. <br><br>La gobernadora electa de Tlaxcala, anunció que el jueves 26 de agosto sesionará el Consejo Estatal de Salud para definir las estrategias a seguir para el regreso a clases en las aulas, programado para el lunes 30.<br><br>El gobernador de Tlaxcala, Marco Mena Rodríguez, se deslindó de la responsabilidad que genera el regreso a clases presenciales como lo ha pronosticado el Gobierno Federal en los distintos niveles educativos, pues aseguró que corresponde a la administración de Lorena Cuéllar Cisneros, tomar esa determinación.",
        aforosFiltrosSanitarios: "Una vez que el semáforo epidemiológico dé luz verde, estás son las medidas que se tomarán para el regreso a clases presenciales en Tlaxcala: <ul><li>Conformación de Comités Participativos de Salud.</li><li> Dotar a las escuelas con insumos de higiene como agua y jabón.</li><li> Salvaguardar a los docentes en grupos de riesgo.</li><li> Uso obligatorio de cubrebocas o pañuelo, dentro y fuera de las escuelas, públicas y particulares.</li><li> Mantener distancia en entradas y salidas de los planteles.</li><li> Programar recesos escalonados.</li><li> Maximizar el uso de espacios abiertos.</li><li> Suspender todo tipo de ceremonias o reuniones.</li><li> Brindar apoyo socioemocional para alumnos y docentes.</li></ul> Una comisión de la Secretaría de Educación Pública (SEPE) y el SNTE trabajando para la realización de una logística y la atención en el regreso a clases presenciales. Universidad Autónoma de Tlaxcala (UATx) reconsideraría el regreso a las clases.",
        referencias: [
            "https://www.milenio.com/politica/comunidad/duda-regreso-clases-presenciales-tlaxcala-tercer-ola-covid",
            "https://www.lajornadadeoriente.com.mx/tlaxcala/clases-presenciales-sepe-a-sep/",
            "https://www.elsoldetlaxcala.com.mx/local/alistan-preparatorias-regreso-a-las-aulas-juan-pablo-arroyo-6924698.html",
            "https://kidstudia.com/guia/todo-sobre-el-regreso-a-clases-en-mexico/tlaxcala/#modalidad+del+regreso+a+clases+en+tlaxcala",
            "https://www.milenio.com/politica/comunidad/de-manera-responsable-buscan-que-sea-el-regreso-a-clases-en-tlaxcala",
            "https://amqueretaro.com/mexico/2021/07/02/revisa-sep-el-regreso-a-clases-en-tlaxcala/",
            "https://tlaxcala.quadratin.com.mx/principal/garantiza-lorena-cuellar-un-regreso-seguro-a-clases-presenciales/",
            "https://www.elsoldetlaxcala.com.mx/local/definira-salud-modo-de-retorno-a-clases-lorena-cuellar-7123322.html"            
            
        ],
        color: StateBack2School
    },
    {
        id: "MX-MEX",
        name: "Estado de México",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "SP",
        alumnosVacunados: "NO",
        nombreEstrategia: "Plan de Reapertura de regreso a clases 2020*",
        actividadesPresenciales: "Alfredo del Mazo Maza, señaló que el regreso a clases presenciales en los municipios mexiquenses será de manera voluntaria y que en coordinación con los comités de salud y protección civil se están puliendo las medidas que se llevarán a cabo a partir del próximo 30 de agosto. ",
        aforosFiltrosSanitarios: "Para el regreso a clases presenciales en el Estado de México se instalarán tres filtros sanitarios; el primer filtro es en las casas de los estudiantes, el segundo filtro será al entrar a los centros educativos y el tercer filtro será a la entrada de los salones. Del Mazo Maza, señaló que el regreso a las aulas se llevará de manera escalonada y con alternancia en los días.",
        referencias: [
            "https://mexico.as.com/mexico/2021/08/23/actualidad/1629672653_864968.html"
        ],
        color: StateBack2School
    },
    {
        id: "MX-CMX",
        name: "Ciudad de México",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "100",
        alumnosVacunados: "SI",
        nombreEstrategia: "Sin información",
        actividadesPresenciales: "A cuatro días del inicio de clases presenciales, la jefa de Gobierno insistió en que es factible el retorno a las aulas, dado el avance de vacunación que alcanza ya al 93% de los adultos de la Ciudad con al menos una dosis y cuyo impacto se refleja de manera positiva en el descenso de hospitalizaciones por Covid-19.   El regreso a clases en CDMX es absolutamente voluntario dijo el titular de la Autoridad Educativa Federal en la CDMX, Luis Humberto Fernández. “El tema no es de cuántos alumnos se pueden recibir por grupo, es si se puede garantizar la sana distancia “. “Es el regreso a clases más complicado en la historia, es absolutamente voluntario, no necesariamente las clases a distancia, se mantendrán las herramientas para garantizar los aprendizajes”, afirmó.  La Coordinadora Nacional de los Trabajadores de la Educación (CNTE) anunció que sus maestros no regresarán a clases presenciales el 30 de agosto en cinco estados: Ciudad de México (CDMX), Guerrero, Michoacán, Chiapas y Oaxaca.",
        aforosFiltrosSanitarios: "Medidas sanitarias: <ul><li> • Creación y activación de los Comités Participativos de Salud Escolar (CPSE).</li><li> • Filtros de salud en casa, entrada de la escuela y aulas.</li><li> • Lavado constante de manos con agua y jabón. </li><li> • Uso correcto y obligatorio de cubrebocas. </li><li> • Espacios con distancia social mínima. </li><li> • Priorizar actividades en espacios abiertos. </li><li> • No se celebrarán ceremonias o eventos que implican aglomeraciones. </li><li> • Avisar inmediatamente a las autoridades competentes, en caso de que se detecte o se sospeche que alguna persona presente algún signo o síntoma respiratorio relacionado con el virus SARS-CoV2. </li><li> • Procurar entre las y los educandos y docentes apoyo socioemocional y promover, entre otros, el curso en línea de SEP-SALUD ''Retorno Seguro'' climss.imss.gob.mx</li></ul>",
        referencias: [
            "https://www.la-prensa.com.mx/metropoli/es-factible-el-regreso-a-las-aulas-en-cdmx-insiste-sheinbuam-7134350.html",
            "https://www.radioformula.com.mx/audio-y-video/audio/20210826/el-regreso-a-clases-en-cdmx-es-absolutamente-voluntario-luis-humberto-fernandez/",
            "https://www.sdpnoticias.com/mexico/cnte-no-regresara-a-clases-presenciales-en-5-estados/"
        ],
        color: StateBack2School
    },
    {
        id: "MX-MOR",
        name: "Morelos",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "Sin informacón",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "SP",
        alumnosVacunados: "NO",
        nombreEstrategia: "Regreso a clases",
        actividadesPresenciales: "Cornejo Alatorre exhortó a los padres de familia a inscribir a sus hijos en las escuelas, esto para garantizar su derecho a la educación y el correcto proceso de enseñanza – aprendizaje y así fortalecer los mecanismos de comunicación estrecha entre alumnos y profesores. <br><br>El texto original de este artículo fue publicado por la Agencia Quadratín en la siguiente dirección: https://morelos.quadratin.com.mx/preparado-morelos-para-regreso-a-clases-2021-2022/<br><br>Este contenido se encuentra protegido por la ley. Si lo cita, por favor mencione la fuente y haga un enlace a la nota original de donde usted lo ha tomado. Agencia Quadratín. Todos los Derechos Reservados © 2018. Se estan coordinando con la Secretaría de Gobernación que realiza con gobernadores, la Secretaría de Salud y de Educación de los estados y se esta analizando todos los escenarios, además mecniona que será relevante la opinión de los padres de familia.<br><br>El periodo de inscripciones y reinscripciones será del 16 de agosto al 10 de septiembre, mientras que las sesiones del Comité Participativo de Salud Escolar, así como las jornadas de limpieza en escuelas serán del 11 al 13 de agosto de 2021. con el fin de estar listo para el inicio de ciclo",
        aforosFiltrosSanitarios: "Terminó en julio el Programa Piloto de Regreso a Clases Presenciales Seguras, voluntarias, escalonadas y graduales sin incidente alguno para todos los que participaron en este proyecto: alumnos, padres de familia, docentes, administrativos y personal de apoyo",
        referencias: [
            "https://morelos.gob.mx/?q=prensa/nota/comunicado-de-prensa-secretaria-de-educacion-3",
            "https://elqueretano.info/trafico/presentan-calendario-escolar-2021-2022-para-morelos/",
            "https://mexico.as.com/mexico/2021/07/30/actualidad/1627609664_758632.html",
            "https://www.milenio.com/estados/morelos-analiza-posible-regreso-a-clases-presenciales",
            "https://mexico.as.com/mexico/2021/07/30/actualidad/1627609664_758632.html",
            "https://morelos.quadratin.com.mx/preparado-morelos-para-regreso-a-clases-2021-2022/"
        ],
        color: StateBack2School
    },
    {
        id: "MX-GRO",
        name: "Guerrero",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "31 de agosto 2021/03 de septiembre de 2021",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "100",
        alumnosVacunados: "NO",
        nombreEstrategia: "La escuela es nuestra",
        actividadesPresenciales: "Solo el 25 por ciento de todas las escuelas públicas en Oaxaca regresarán a clases el próximo 30 de agosto, de cara al próximo ciclo escolar, de acuerdo con el director general del Instituto Estatal de Educación Pública de Oaxaca (IEEPO), Francisco Ángel Villarreal. Al comparecer ante la legislatura local, precisó que 2 mil 686 escuelas públicas de educación básica retomaran actividades de manera semipresencial, ante la pandemia de coronavirus, al igual que 447 escuelas privadas, es decir el 85 por ciento de estas instituciones.    El gobernador de Oaxaca anunció que la mayor parte de las 13 mil escuelas de educación primaria, de nivel bachillerato y superior arrancarán clases bajo un esquema de educación a distancia y virtual, sin embargo, aclaró que hay un acuerdo para que menos del 25 por ciento regrese de manera semipresencial. Por su parte el director general del Instituto Estatal de educación pública de Oaxaca (IEEPO), Francisco Ángel Villarreal, indicó que el estado se encuentra preparado para iniciar el ciclo escolar 2021-2022, pues se plantearon las condiciones para que el regreso a clases sea seguro, organizado, voluntario, gradual y escalonado. Reiteró que un 25 por ciento de las escuelas retomarán actividades de forma semipresencial, principalmente en la zona de los valles centrales y la ciudad de Oaxaca.",
        aforosFiltrosSanitarios: "Se considerarán tres factores: que el estado se mantenga permanentemente en el color verde en el Semáforo de Riesgo Epidemiológico; que las escuelas cuenten con un protocolo sanitario, un plan escolar que refleje la organización administrativa y académica del plantel, y el fortalecimiento académico a través de una guía estatal para el regreso a clases y el cronograma de actividades para la apertura de escuelas en todos los niveles. <br><br> Por otro lado, los trabajadores de la educación hayan sido vacunados y que el semáforo epidemiológico esté en verde.",
        referencias: [
            "https://snte.org.mx/seccion14/snte-condiciona-el-regreso-a-clases-presenciales-en-guerrero/",
            "https://snte.org.mx/seccion14/con-seguridad-volvemos-a-la-escuela-snte/",
            "https://guerrero.quadratin.com.mx/guerrero-tendra-regreso-a-clases-presenciales-voluntario-astudillo/",
            "https://guerrero.quadratin.com.mx/reanudarian-clases-presenciales-800-escuelas-de-guerrero-astudillo/",
            "https://www.elfinanciero.com.mx/estados/2021/08/15/solo-en-17-de-81-municipios-guerrerenses-con-bajo-covid-se-volvera-a-clases-presenciales/",
            "https://guerrero.quadratin.com.mx/guerrero-tendra-regreso-a-clases-presenciales-voluntario-astudillo/"
        ],
        color: StateBack2School
    },
    {
        id: "MX-OAX",
        name: "Oaxaca",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "100",
        alumnosVacunados: "NO",
        nombreEstrategia: "No disponible",
        actividadesPresenciales: "El director general del Instituto Estatal de Educación Pública de Oaxaca (IEEPO), Francisco Ángel Villarreal, dio a conocer este 18 de agosto que el regreso a clases en la entidad será consensuado, seguro, gradual, escalonado y mixto. <br><br>Reiteró que la decisión de permitir que las infancias y juventudes retornen a las aulas será resultado del consenso con el magisterio, madres, padres de familia, tutores y autoridades municipales.<br>Por último, señaló que el Gobernador de Oaxaca, Alejandro Murat, y las autoridades estatales mantienen una fluida, correcta y permanente comunicación con el magisterio, así como con la Federación.   En encuentro encabezado por la secretaria de Gobernación, Olga Sánchez Cordero, los mandatarios de [...]; Oaxaca, Alejandro Murat, y Chiapas, Rutilio Escandón, externaron su apoyo al retorno a las aulas, por la salud mental de los estudiantes, y se manifestaron listos para ello, si bien en los dos últimos estados la Coordinadora Nacional de Trabajadores de la Educación se ha expresado en contra. Murat dijo que mantiene un diálogo con la organización magisterial para el regreso a los centros escolares",
        aforosFiltrosSanitarios: "En esta fecha se dice que de darse el regreso a las aulas: ''En este regreso no asistirán todos los niños al mismo tiempo, sino irán de acuerdo con la organización de las escuelas, como en orden alfabético, y también deberán ir de manera mixta...''.  Se está trabajando con la Secretaría de Educación Pública (SEP) para el protocolo sanitario que regirá los planteles en este nuevo ciclo escolar, donde habrán filtros sanitarios en cada escuela, además de que los menores y maestros tendrán que usar de forma permanente el cubrebocas.",
        referencias: [
            "https://www.jornada.com.mx/notas/2021/08/20/politica/avalan-gobernadores-regreso-a-escuelas/",
            "https://www.infobae.com/america/mexico/2021/08/18/como-sera-el-regreso-a-clases-en-oaxaca/ "
        ],
        color: StateBack2School
    },
    {
        id: "MX-TAB",
        name: "Tabasco",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "SP",
        alumnosVacunados: "NO",
        nombreEstrategia: "A la escuela. Seguro Regreso",
        actividadesPresenciales: "La secretaria de Educación precisó que serán en total 3 mil 800 planteles educativos de Preescolar, Primaria y Secundaria, que atienden a una población de 532 mil educandos, los que serán rehabilitados durante los meses de julio y agosto, como parte de los preparativos ante el posible regreso a clases presenciales para el ciclo escolar 2021-2022, siempre y cuando el semáforo epidemiológico este en color verde. <br><br>En totalidad, escalonado, hibrido, porcentual de niñas, niños y jovenes escalonado, presencial, híbrido o una mezcla de ambos (implementación de un protocolo Alemán)<br><br>El 20.8 por ciento de alumnos del nivel básico que pertenecen a los ocho municipios donde existen menos contagios y casos activos de COVID-19, estarían regresando a clases presenciales el próximo 30 de agosto, mientras que el 79.2 por ciento seguirá en casa de manera virtual. REGRESARÍAN A LAS AULAS 8 MUNICIPIOS, EL 79.2% SEGUIRÁ CON CLASES EN LÍNEA<br>Unos 112,598 estudiantes de nivel básico que viven en comunidades con bajo contagio y activos de Covid, volverían a escuelas; Setab confirmó que regreso será gradual, virtual y presencial.<br><br>Nivel básico<br>En el acuerdo se precisa que en el caso de los alumnos de educación básica, será el 30 de agosto cuando se regrese a las clases presenciales, cuya asistencia será de manera voluntaria.<br><br>Educación media y <br>En cuanto a la educación media y media superior, para el caso del Colegio de Bachilleres de Tabasco (Cobatab), se contempla contemplan dos escenarios de operatividad en los centros educativos para el semestre 2021-2022A: continuar en la modalidad virtual y retornar en modalidad híbrida.<br><br>30 de agosto regreso oficial a las aulas en Tabasco<br>El retorno denominado ''La Estrategia Lolli'' contempla el inicio escolar 2021-2022 en 7 municipios a presenciales y el resto virtual.",
        aforosFiltrosSanitarios: "Desarrollo de materiales informativos y protocolos sanitarios.",
        referencias: [
            "https://heraldodemexico.com.mx/nacional/2021/7/22/tabasco-no-volvera-clases-presenciales-en-agosto-analizan-sea-en-septiembre-318653.html",
            "https://www.elheraldodetabasco.com.mx/local/tabasco-si-regresa-a-clases-presenciales-en-septiembre-7015316.html",
            "https://www.tabascohoy.com/regresarian-a-las-aulas-20-de-estudiantes-confirma-educacion-ciclo-escolar-21-22/?__cf_chl_jschl_tk__=pmd_e7a564a81a81bf5623d59322ed379ea1ee8218d5-1628862700-0-gqNtZGzNAjijcnBszQqi",
            "https://www.elheraldodetabasco.com.mx/local/publican-decreto-para-el-regreso-a-clases-presenciales-en-tabasco-7113338.html",
            "https://www.elheraldodetabasco.com.mx/local/30-de-agosto-regreso-oficial-a-las-aulas-en-tabasco-7114918.html",
            "https://tabasco.gob.mx/PeriodicoOficial/descargar/2407#:~:text=El%20d%C3%ADa%2030%20de%20agosto,adolescentes%20(NNA)%20a%20recibir%20una"
        ],
        color: StateBack2School
    },
    {
        id: "MX-CHP",
        name: "Chiapas",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "100",
        alumnosVacunados: "NO",
        nombreEstrategia: "No disponibles",
        actividadesPresenciales: "El gobernador de Chiapas, Rutilio Escandón Cadenas afirmó que  Chiapas está listo para regresar a clases presenciales el próximo 30 de agosto, pues ha habido acuerdos entre las autoridades y la comunidad educativa. El 30 de agosto lnformará  junto con el presidente Andrés Manuel López Obrado.",
        aforosFiltrosSanitarios: "Medidas para el Regreso a Clases: <ol><li>Uso general de cubrebocas obligatorio. <li> Sana distancia en actividades al interior de los planteles, así como en las entradas y salidas. </li> <li> Recreos escolares escalonados</li> <li> Lugares fijos alternados.</li> <li> Asistencia alternada por apellido.</li> <li> Considera que tus hijos deberán acudir a clases sin fiebre o temperatura mayor a 37°. Estando dentro de la escuela, deberán lavarse frecuentemente las manos o utilizar gel antibacterial y los grupos no podrán ser mayor a 25 alumnos</li></ol>",
        referencias: [
            "https://www.milenio.com/estados/chiapas-listo-regreso-presencial-clases-gobernador"
        ],
        color: StateBack2School
    },  
    {
        id: "MX-CAM",
        name: "Campeche",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de mayo",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "88.8",
        alumnosVacunados: "NO",
        nombreEstrategia: "Aprendamos en familia desde casa",
        actividadesPresenciales: "El 10 de agosto se anunció de manera oficial el regreso a clases que será de forma gradual el próximo 30 de agosto. Será decisión de los padres y madres de familia enviar o no a sus hijos. Se acordó que regresarán un total de 904 escuelas de nivel preescolar, primaria y secundaria incluyendo los servicios de la Conafe. <br> <br> Es uno de los estados que implementó la prueba piloto de clases presenciales antes de terminar el ciclo escolar pasado, misma que cerró por el aumento de contagios de covid-19 en la entidad. Por lo que autoridades educativas consideran que no existen las condiciones necesarias para garantizar un regreso seguro a los planteles educativos.<br> <br> El regreso a clases presenciales será cuando el semáforo esté en verde debido a la falta de vacunación de los estudiantes.",
        aforosFiltrosSanitarios: "Cuando se tengan las condiciones necesarias para el regreso a los planteles educativos, se optará por un modelo híbrido de clases, con asistencia alternada, grupos reducidos, así como medidas sanitarias. Algunas de ellas son las siguientes: <br><br>  Uso correcto de cubrebocas obligatorio. <br> Sana distancia dentro de los salones de clases y en todas las actividades al interior de los planteles.<br> Colocación de filtros sanitarios al entrar a la escuela y a la entrada del salón<br> Recuerda que el regreso a clases presenciales es voluntario, si decides enviar a tus hijos a la escuela debes firmar una carta responsiva en donde declaras que tu hijo asiste voluntariamente a la escuela y sin síntomas relacionados al covid-19.",
        referencias: [
            "https://www.poresto.net/campeche/2021/7/15/regreso-clases-en-campeche-sera-en-semaforo-verde-seduc-263676.html",
            "http://campechehoy.mx/2021/07/31/en-campeche-sera-dificil-el-regreso-a-clases-presenciales/",
            "https://educacioncampeche.gob.mx/aprendamosencasa",
            "https://www.lajornadamaya.mx/campeche/177646/el-9-de-agosto-decidira-seduc-si-hay-clases-presenciales-en-campeche",
            "https://www.gob.mx/sep/es/articulos/boletin-sep-no-102-concluye-exitosamente-el-proceso-de-vacunacion-a-personal-docente-en-30-entidades-del-pais?idiom=es",
            "https://www.poresto.net/campeche/2021/8/10/regreso-clases-presenciales-en-campeche-sera-el-30-de-agosto-seduc-271707.html"
        ],
        color: StateBack2School
    },
    {
        id: "MX-YUC",
        name: "Yucatán",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "SP",
        alumnosVacunados: "NO",
        nombreEstrategia: "Regreso seguro a clases",
        actividadesPresenciales: "El Gobierno de Yucatán mantiene su postura del regreso a clases, en forma presencial; para el 30 de agosto próximo. Sin embargo, éste será voluntario, opcional y mixto. Estrategia estatal de Regreso Seguro a Clases, elaborada con base en los lineamientos que emitió la Federación y la participación de la Mesa Central conformada por representantes de seis Secretarías, entre ellas la de Educación y Salud, el Congreso del Estado, universidades, sindicatos, cámaras empresariales, la Comisión estatal de Derechos Humanos (Codhey), padres de familia, estudiantes y colegios.<br><br>Gobierno de Yucatán anuncia el protocolo oficial del regreso a clases 2021-2022.<br>El gobierno del Estado anunció el protocolo para el regreso a clases del ciclo 2021-2022 que, debido a la pandemia de Covid-19, se desarrollará a partir del 30 de agosto en modelo híbrido (presencial y a distancia) y voluntario.<br><br>El protocolo para el regreso a clases fue presentado por el secretario estatal de Educación, Liborio Vidal Aguilar, en un acto encabezado por el gobernador Mauricio Vila Dosal",
        aforosFiltrosSanitarios: "Se considera un retorno voluntario, opcional y mixto. <br><br>Secretaría de Educación considera realizar jornadas de limpieza en las escuelas y sesiones de los Comités Participativos de Salud Escolar; que se desarrollará del 11 al 13 de agosto venideros, como una medida preventiva ante la pandemia mundial por Covid-19.",
        referencias: [
            "http://www.educacion.yucatan.gob.mx/boletines/index",
            "https://www.yucatan.com.mx/merida/yucatan-tendra-un-regreso-a-clases-presencial-en-agosto",
            "https://www.lajornadamaya.mx/yucatan/176643/los-ninos-deben-regresar-a-clases-presenciales-lo-mas-pronto-posible-vila-dosal",
            "https://www.lajornadamaya.mx/yucatan/175807/regreso-a-clases-en-yucatan-sera-el-30-de-agosto",
            "https://www.excelsior.com.mx/nacional/ratifica-vila-que-en-yucatan-se-volvera-a-clases-presenciales/1464347",
            "https://sipse.com/novedades-yucatan/regreso-clases-yucatan-semipresencial-mauricio-vila-405028.html",
            "https://sipse.com/novedades-yucatan/protocolo-regreso-seguro-escuelas-yucatan-406731.html",
            "https://www.yucatan.com.mx/merida/asi-sera-el-regreso-a-clases-en-yucatan"
        ],
        color: StateBack2School
    },
    {
        id: "MX-ROO",
        name: "Quintana Roo",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 agosto 2021",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "NO",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "75.6",
        alumnosVacunados: "NO",
        nombreEstrategia: "Plan para Regreso a Clases Seguro",
        actividadesPresenciales: "Los alumnos en Quintana Roo no regresarían a las clases presenciales para el 30 de agosto, afirmó Sergio Acosta Manzanero. <br><br>El presidente de la Asociación Estatal de Padres de Familia, afirmó que las escuelas no estarán listas para el inicio del ciclo escolar 2021-2022.",
        aforosFiltrosSanitarios: "Cuatro pasos: <br> 1) Estar en semáforo amarillo tanto federal como estatal para abrir los Centros Comunitarios de Aprendizaje donde se ofrece asesoría; <br> 2) Rehabilitación de escuelas (infraestructura, limpieza y orden); <br> 3) Aplicación de un diagnóstico académico. <br> 4) Y que cada institución educativa entregue o actualice su plan de regreso a clases, cumpliendo con los protocolos sanitarios.Prueba para diagnosticar el rezago entre los alumnos tras un año y tres meses de clases en línea. Los padres de familia los encargados de aplicar la prueba, que consistirá en un grupo de preguntas de lo que tendrían que conocer según su grado de escolaridad.",
        referencias: [
            "https://qroo.gob.mx/seq/detallan-acciones-de-la-seq-para-el-regreso-clases-destacando-cuatro-importantes-temas",
            "https://www.sdpnoticias.com/estados/quintana-roo/quintana-roo-descartan-regreso-a-clases-presenciales/"

        ],
        color: StateBack2School
    },
];

var DataStates = [
    {
        id: "MX-BCS",
        name: "Baja California Sur",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "13 de septiembre",
        tipoModelo: "A distancia",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "78.8",
        alumnosVacunados: "Sin Definir",
        nombreEstrategia: "No disponible",
        actividadesPresenciales: "Del próximo lunes 30 de agosto, fecha que el calendario oficial marca el inicio del ciclo escolar 2021-2022, al viernes 10 de septiembre, los planteles de enseñanza básica de Baja California Sur realizarán tareas de organización con el objetivo de reanudar las clases el lunes 13 de septiembre, ya sea de manera presencial o en el modelo a distancia, informó el secretario de Educación Pública del Estado, Gustavo Rodolfo Cruz Chávez.",
        aforosFiltrosSanitarios: "Se capacitaron a los comités participativos de salud escolar, en cada escuela debe de existir un comité de esta naturaleza que se encargará de revisar las condiciones en las cuales se encuentra la escuela, se tendrán algunos filtros y el primero desde luego será la casa, será en el hogar donde se revise la condición de su hijo o hija y tener en claro cuáles son los síntomas COVID, el segundo filtro al entrar a la escuela y el tercero previo a entrar al salón de clases.",
        referencias: [
            "https://kidstudia.com/guia/todo-sobre-el-regreso-a-clases-en-mexico/baja-california-sur/",
            "https://www.bcsnoticias.mx/confirmado-baja-california-sur-ya-se-prepara-para-regreso-a-las-aulas-en-agosto-sep/",
            "https://www.elsudcaliforniano.com.mx/local/regreso-a-clases-solo-sera-en-alerta-verde-en-bcs-6987936.html",
            "http://www.bcs.gob.mx/noticias/concluyo-vacunacion-del-personal-educativo-en-bcs/#:~:text=CONCLUY%C3%93%20VACUNACI%C3%93N%20DEL%20PERSONAL%20EDUCATIVO%20EN%20BCS,-La%20Paz%20B.C.S.&text=Con%20la%20aplicaci%C3%B3n%20de%2017,educativo%20de%20Baja%20California%20Sur",
            "https://www.animalpolitico.com/2021/08/michoacan-hidalgo-rechazan-regreso-clases-presenciales-estados-siguen-evaluando",
            "http://www.sepbcs.gob.mx/contenido/boletines/2021/08/2021-08-25_Bol162.pdf"

        ],
        color: StateBack2School
    },
    {
        id: "MX-BCN",
        name: "Baja California Norte",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "76.30",
        alumnosVacunados: "NO",
        nombreEstrategia: "Regreso Seguro a Clases Presenciales",
        actividadesPresenciales: "Se preveé que 24 escuelas vuelvan a clases presenciales durante la primera semana del ciclo 2021-2022 (Lunes 30 de agosto) <br><br>La asistencia será voluntaria, gradual y escalonada. Durante septiembre, los planteles se duplicarán semanalmente, de acuerdo a la disposición de escuelas y la autorización de padres de familia. las clases serán en un modelo híbrido entre presenciales y a distancia, ya que los alumnos seleccionados asistirán tres y dos días de la semana, de manera alternada, a partir de la primera letra del apellido.   el regreso a clases será en 24 escuelas (cuatro por municipio y dos públicas y dos privadas), en la segunda semana serán 48; en la siguiente 72 y después 96, de acuerdo a la evolución y monitoreo del manejo de salud. Serán los padres de familia los que aprueben el regreso de clases presenciales de sus hijos.",
        aforosFiltrosSanitarios: "El regreso a las escuelas de manera presencial, se realizará de forma gradual y segura, incluyendo la realización de jornadas de limpieza previas al ingreso de los estudiantes. las escuelas de cada municipio o poblado serán divididas en áreas que incluyan un centro de salud que se encargará de dar atención a esa región en caso de ser necesario.  Los padres de familia y las escuelas deberán coordinar filtros para evitar la propagación de la enfermedad. en caso de que se detecte un caso sospechoso, el grupo será suspendido por 14 días, mientras que si se confirma un caso de COVID-19 se suspenderán las clases en todo el plantel. Las aulas tendrán un máximo de 10 personas.",
        referencias: [
            "https://www.sandiegouniontribune.com/en-espanol/noticias/bc/articulo/2021-07-26/baja-california-anuncia-regreso-a-clases-presenciales-semaforo-epidemiologico-regional-permanece-verde",
            "http://www.educacionbc.edu.mx/regresoseguro/",
            "https://www.jornada.com.mx/notas/2021/07/26/estados/planean-regreso-a-clases-gradual-en-baja-california-a-partir-de-agosto/#:~:text=El%20gobierno%20de%20Baja%20California,forma%20gradual%2C%20escalonada%20y%20segura.",
            "https://www.bcsnoticias.mx/incierto-el-regreso-a-clases-en-bcs-acercandose-la-fecha-se-tomaran-decisiones-salud/",
            "https://www.gob.mx/sep/es/articulos/boletin-sep-no-102-concluye-exitosamente-el-proceso-de-vacunacion-a-personal-docente-en-30-entidades-del-pais?idiom=es",
            "https://www.poresto.net/campeche/2021/8/15/regreso-clases-en-campeche-conoce-las-fechas-para-inscripcion-del-ciclo-escolar-2021-2022-272491.html"
        ],
        color: StateBack2School
    },
    {
        id: "MX-SON",
        name: "Sonora",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "87",
        alumnosVacunados: "NO",
        nombreEstrategia: "Retorno Seguro, estrategias para el regreso a clases presenciales del ciclo 2021-2022",
        actividadesPresenciales: "A partir del 30 de agosto, los estudiantes en Sonora regresarán a las aulas conforme a las disposiciones federales y condiciones sanitarias para ver la gradualidad del retorno. <br><br>Regreso a clases presenciales debe darse con una estrategia conjunta para hacerlo de la forma más segura: Gobernadora Pavlovich",
        aforosFiltrosSanitarios: "<ol><li> Se invita a los padres de familia, a maestros, a las autoridades educativas a que se integren al Comité́ Participativo de Salud en su escuela.</li> <li>Establecer el filtro de salud en casa, y participar en los filtros de la escuela y del salón de clases, para detectar síntomas y tomar las medidas necesarias.</li><li> Lavarse las manos con agua y jabón y/o gel antibacterial.</li><li> Usar cubrebocas sobre nariz y boca, en todo momento.</li><li> Mantener la sana distancia.</li><li> Dar mayor uso a los espacios abiertos.</li><li> Por ahora, no tener ceremonias ni reuniones generales.</li><li> Avisar inmediatamente la presencia o sospecha de casos de COVID-19 en la escuela.</li><li> Inscribirse a los cursos de apoyo socioemocional en línea de SEP-Salud “Retorno Seguro”: climss.imss.gob.mx</li><li>  Al salir de casa, lleva a la escuela la Carta compromiso de corresponsabilidad.</li></ol><br> Ante el aumento de contagios y el registro de estas variantes del coronavirus, la gobernadora Pavlovich instó a seguir con las acciones y programas de prevención, para seguir con las medidas y protocolos sanitarios rigurosos. Salones de clases con buena ventilación.<br><br>La Secretaría de Educación y Cultura y el Instituto Sonorense de Infraestructura Educativa (ISIE) han realizado una valoración de las condiciones de la infraestructura física de los planteles escolares, con el fin de atender a todos los requerimientos apremiantes de los inmuebles.<br><br><ol><li>Pupitres separados al menos metro y medio entre cada uno.</li><li>Máximo 15 alumnos en cada salón.</li><li>Uso de gel antibacterial y lavado frecuente de manos.</li><li>Uso correcto de cubrebocas en todo momento.</li></ol>",
        referencias: [
            "http://www.sec.gob.mx/portal/index.php?op=nota&p=1033",
            "https://kidstudia.com/guia/todo-sobre-el-regreso-a-clases-en-mexico/sonora/#medidas+para+el+regreso+a+clases+en+sonora",
            "https://www.elsoldehermosillo.com.mx/local/es-oficial-alumnos-de-sonora-si-regresaran-a-clases-presenciales-30-de-agosto-sec-gobierno-del-estado-escuelas-7046536.html",
            "https://www.elsoldehermosillo.com.mx/local/es-oficial-alumnos-de-sonora-si-regresaran-a-clases-presenciales-30-de-agosto-sec-gobierno-del-estado-escuelas-7046536.html",
            "http://www.sec.gob.mx/portal/index.php?op=nota&p=1034",
            "https://www.elsoldehermosillo.com.mx/doble-via/salud/el-covid-19-y-los-ninos-esto-es-lo-que-sabemos-antes-de-ir-a-la-escuela-regreso-a-clases-pandemia-7097189.html"
        ],
        color: StateBack2School
    },
    {
        id: "MX-CHH",
        name: "Chihuahua",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "NO",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "95",
        alumnosVacunados: "NO",
        nombreEstrategia: "Estrategia Chihuahua (implementada desde julio)",
        actividadesPresenciales: "De un total de 705 niñas, niños y adolescentes (NNA) de Chihuahua que participaron en la encuesta nacional denominada “Caminito de la Escuela”, el 74.67 por ciento expresó que sí desea regresar a la escuela, según informó la Presidenta de la Comisión de Derechos Humanos de la Ciudad de México, Nashieli Ramírez Hernández.    En Chihuahua se capacitan 760 mil personas en cursos sobre bioseguridad por Covid. El doctor Mauricio Hernández Ávila, director de Prestaciones Económicas y Sociales, señaló que estos cursos se realizaron en colaboración con expertos de las Secretarías de Educación Pública, de Salud y del IMSS, y a la fecha de las 760 mil personas que han ingresado, el 73 por ciento ya terminaron y dejaron su evaluación así como recomendaciones.   En el Colegio de Bachilleres del estado de Chihuahua, el próximo 6 de septiembre será el inicio de clases; ante esta situación, el director académico de la institución, Hugo Arias Flores, responderá las dudas de los estudiantes respecto al inicio del semestre 2021-B. a través de una transmisión en vivo este viernes 27 de agosto a las 12:30 horas, mediante la página de Facebook del Cobach.",
        aforosFiltrosSanitarios: "Iniciarán con aforos del 50%, las sesiones van a ser de 45 minutos; en preescolar solamente habrá tres sesiones diarias, en primaria hasta cinco y en secundaria hasta 7, cada una de 45 minutos, y entre ellas se suspenderá la actividad para ventilar las aulas. De acuerdo al contexto de cada plantel, los grupos se dividirán por grado o por inicial de apellido; se dará seguimiento al modelo de filtros sanitarios saliendo de casa, llegando al plantel, y durante las sesiones académicas.",
        referencias: [
            "https://www.elheraldodechihuahua.com.mx/local/chihuahua/desean-ninas-ninos-y-adolescentes-de-chihuahua-regresar-a-la-escuela-regreso-a-clases-alumnos-educacion-7129844.html",
            "https://www.omnia.com.mx/noticia/193026/informa-cedh-que-7-de-cada-10-nna-desean-regresar-a-clases-presenciales",
            "https://www.elheraldodechihuahua.com.mx/local/chihuahua/se-capacitan-760-mil-personas-en-cursos-de-bioseguridad-por-covid-escuelas-pandemia-prevencion-cursos-digitales-7134289.html",
            "http://www.tiempo.com.mx/noticia/respondera_cobach_preguntas_sobre_regreso_a_clases_chihuahua/"
        ],
        color: StateBack2School
    },
    {
        id: "MX-COA",
        name: "Coahuila de Zaragoza",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "23 de agosto",
        tipoModelo: "Híbrido", 
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "85.4",
        alumnosVacunados: "NO",
        nombreEstrategia: "No disponible",
        actividadesPresenciales: "Del 23 de agosto al 03 de septiembre se tiene previsto realizar pruebas diagnósticas y una evaluación para identificar el abandono y rezago escolar.  Del 6 al 30 de septiembre se pretende llevar a cabo un período de recuperación para alumnos en rezago. El regreso a clases presenciales será obligatorio paras los docentes.",
        aforosFiltrosSanitarios: "Previo a la apertura de las escuelas deberá pedírseles a los padres de familia, entre otras cosas, que sus hijos acudan bañados a la escuela y que en caso de notar algún síntoma de enfermedad como fiebre, tos, dolor de garganta o de cabeza no podrán asistir y deberá notificarse a la autoridad del plantel. Las escuelas por su parte deberán prepararse con lo siguiente: Insumos para colocar un filtro a la entrada del plantel, tanto para el personal que trabaja en la escuela como para los alumnos En el filtro deberá haber: • Alcohol en gel con alcohol isopropílico al 70% para la higiene de manos a la entrada al plantel • Termómetro infrarrojo para la toma de temperatura previo a la entrada al plantel. Los salones de clases deberán contar con:<ul><li>• Alcohol en gel con alcohol isopropílico al 70%.</li><li>• Caja de pañuelos desechables.</li><li>• Bote de basura con pedal y tapa.</li><li>• Toallitas desinfectantes para la limpieza del pupitre y/o mesas de trabajo. Las áreas comunes (patios, canchas, áreas de juego) deberán limpiarse como se hace normalmente todos los días, al igual que el resto de las instalaciones, poniendo énfasis en las superficies de mayor contacto como escritorios, mesas, interruptores, picaportes.</li></ul>Todos los baños deberán contar con agua, jabón, sanitas para secarse las manos,papel higiénico y botes de basura con pedal y tapa. Existe la posibilidad detransmisión de SARS-CoV-2 mediante inhalación de la aerosoles fecales por locual se debe poner especial atención en la ventilación de los baños, así como enla utilización estricta de cubreboca al acceder a ellos. Se recomienda educar a losalumnos a bajar la tapa del inodoro antes de jalar la palanca.",
        referencias: [
            "https://www.elheraldodesaltillo.mx/2021/07/27/habra-periodo-de-diagnostico-y-otro-de-recuperacion-al-regreso-a-clases-en-coahuila/",
            "https://www.elheraldodesaltillo.mx/2021/07/05/volverian-el-23-de-agosto-a-clases-presenciales-90-escuelas-en-coahuila/",
            "https://vanguardia.com.mx/articulo/regreso-clases-sera-obligatorio-para-los-profesores-en-coahuila",
            "https://www.saludcoahuila.gob.mx/COVID19/documentos/MANUAL%20REAPERTURA%20ESCOLAR%202021.pdf",
            "https://www.gob.mx/sep/es/articulos/boletin-sep-no-102-concluye-exitosamente-el-proceso-de-vacunacion-a-personal-docente-en-30-entidades-del-pais?idiom=es"
        ],
        color: StateBack2School
    },
    {
        id: "MX-NLE",
        name: "Nuevo León",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "Sin Definir",
        reincorporacionGradual: "Sin Definir",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "100",
        alumnosVacunados: "NO",
        nombreEstrategia: "No disponible",
        actividadesPresenciales: "Los maestros de Nuevo León se niegan al regreso de las clases presenciales ante el actual escenario de la pandemia del Covid-19, por lo que aún no se aclara si el estado continuará con los estudios a distancia.<br><br>El gobernador de Nuevo León, Jaime Rodríguez Calderón, dijo que hasta el momento no está definida la modalidad del regreso a clases e invitó a los docentes a continuar dando su opinión a través de WhatsApp.",
        aforosFiltrosSanitarios: "Medidas sanitarias. Recomendaciones para un regreso saludable a las aulas escolares de nivel básico:<ul><li>• Establecer comités participativos de salud escolar.<li>• Todos los planteles deberán tener acceso a agua y jabón y/o gel antibacterial para lavado de manos constante. </li><li>• Resguardo del personal educativo en grupos de riesgo (mujeres embarazadas y personas inmunocomprometidas). </li><li>• Uso obligatorio de cubrebocas en todo momento. </li><li>• Asegurar una sana distancia entre alumnos y maestros al menos 1.5 metros. </li><li>• Priorizar los espacios abiertos o una adecuada ventilación de las aulas. </li><li>• Suspensión de cualquier tipo de ceremonias o reuniones, como asambleas, recesos recreativos o ceremonias de graduación, y uso de cooperativas. </li><li>• Detección temprana mediante la aplicación de 3 filtros: En casa, al entrar a la escuela y en el salón de clases.</li><li>• Atención psicoemocional.</li><li>• La Secretaría de Educación y la Secretaría de Salud determinarán las condiciones del regreso de acuerdo al cumplimiento de los programas de educación básica y protocolos sanitarios.</li><li>• Si existe un contagio en el plantel educativo, ya sea maestro, alumno o personal administrativo, serán suspendidas las actividades por 14 días para continuar a distancia y se hará el estudio epidemiológico.</li></ul>",
        referencias: [
            "https://www.milenio.com/sociedad/clases-presenciales-nuevoleon-colegios-seguro-social",
            "https://www.razon.com.mx/mexico/firme-regreso-aulas-30-entidades-448357",
            "https://www.nl.gob.mx/campanas/recomendaciones-para-un-regreso-saludable-las-aulas-escolares-de-nivel-basico"
        ],
        color: StateBack2School
    },
    {
        id: "MX-TAM",
        name: "Tamaulipas",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "SP",
        alumnosVacunados: "NO",
        nombreEstrategia: "Jornada Presencial de Regularización",
        actividadesPresenciales: "El Gobernador Francisco García Cabeza de Vaca y los titulares de la Secretaría de Educación y Secretaría de Salud presentaron este martes las medidas que se llevarán a cabo en Tamaulipas para un regreso seguro, progresivo y voluntario a clases de manera presencial. <br><br>Expresó que se evaluarán las condiciones de cada región y de esta manera se determinará el retorno a las aulas educativas para el 30 de agosto, existen 651 escuelas en posibilidad de regresar a clases, pues están en municipios con semáforo verde y amarillo; estas escuelas se ubican en municipios de zona rural y periferia de ciudades. Así que por el momento, los municipios grandes como Tampico, Altamira, Ciudad Victoria, Reynosa, Matamoros y Nuevo Laredo no están consideradas, pero dependerá del comportamiento de la pandemia.<br><br>Aunque no se podrá obligar a nadie, por lo que será voluntario (con carta responsiva firmada por padres de los estudiantes) y se respetará la decisión de los padres de familia. <br><br>Educación básica se incorpora el 30 de agosto , Educación Media Superior única el 21 de septiembre y Educación superior, dependerá si es semestral o cuatrimestral.<br>Curso un Pilotaje para el regreso a clases, el cual cuenta con 2 fases de implementación.<br><br>El Secretario de Educación de Tamaulipas, Mario Gómez Monroy encabezó la Presentación de la Estrategia Estatal Organizacional Regreso a Clases Presenciales Seguro, Gradual y Voluntario para el Ciclo Escolar 2021 – 2022, en sesiones por niveles de educación Especial, Inicial, Preescolar, Primaria y Secundaria. (video de estrategia)<br><br>Definirán escuelas para el retorno a clases presenciales en Tamaulipas<br>La evaluación sobre cuáles escuelas están en condiciones de regresar a las aulas, se definirá el día jueves 26 de agosto. <br><br>Están listas cerca de mil escuelas para su regreso a las clases presenciales en Tamaulipas, dio a conocer el secretario de Educación en el estado, Mario Gómez Monroy, quien reconoció que también se incluyen planteles que se encuentran en semáforo epidemiológico naranja y rojo. Son 921 escuelas que reabrirán sus aulas a partir del lunes 30 de agosto, para recibir a un aproximado de 300 mil estudiantes de todos los niveles educativos, desde preescolar, educación especial, primaria y secundaria, preparatorias y universidad.",
        aforosFiltrosSanitarios: "Anunció que la firma de una carta responsiva por parte de los padres de familia no será una obligación en Tamaulipas. “Se dio a conocer a nivel nacional que los padres de familia tenían que firmar un documento para poder permitir que sus hijos ingresen a las escuelas, en Tamaulipas eso no es un requisito, no tendrán que firmar absolutamente nada, es totalmente voluntario”, afirmó <br><br>Los municipios que están sujetos a este regreso presencial seguro, progresivo y voluntario deben estar en fase 2 del semáforo epidemiológico.<br><br> Están por arrancar un pilotaje denominado Jornada Presencial de Regularización, fase 2. <br> El regreso a las aulas será en los municipios donde se tenga semáforo verde y amarillo.<br><br> Derivado de la Reunión Interinstitucional llevada a cabo esta semana con la Secretaría de Salud, se establecieron los acuerdos para determinar el Regreso a Clases Presenciales para el Inicio del Ciclo Escolar 2021-2022, en los niveles de Educación Básica, priorizando la salud física y emocional de la comunidad educativa, con acciones de prevención de riesgos ante la contingencia Covid-19. <br>Otro de los acuerdos para el regreso a clases presenciales, es el de suministrar con un kit de insumos para limpieza y sanitización a cada escuela, iniciando con los municipios en semáforo epidemiológico verde y amarillo.",
        referencias: [
            "https://www.tamaulipas.gob.mx/educacion/avisos/planteles-seleccionados-fase-2/",
            "https://www.milenio.com/politica/comunidad/regreso-a-clases-presenciales-en-tamaulipas-sera-voluntario",
            "https://www.tamaulipas.gob.mx/educacion/avisos/planteles-seleccionados-fase-2/",
            "https://www.tamaulipas.gob.mx/educacion/regresoaclasespresenciales-fasepiloto-boletines/",
            "https://kidstudia.com/guia/todo-sobre-el-regreso-a-clases-en-mexico/tamaulipas/",
            "https://www.milenio.com/politica/regreso-clases-vacaciones-ciclo-2021-2022-tamaulipas",
            "https://www.elsoldetampico.com.mx/local/regional/regreso-a-clases-presenciales-en-tamaulipas-sera-voluntario-cabeza-de-vaca-7026334.html",
            "https://www.hoytamaulipas.net/notas/464556/Regresaran-a-clases-presenciales-en-Tamaulipas-el-30-de-agosto.html",
            "https://www.milenio.com/politica/comunidad/regreso-clases-tamaulipas-municipios-semaforo-verde-amarillo",
            "https://www.tamaulipas.gob.mx/educacion/2021/08/acuerdos-para-el-regreso-a-clases-presenciales-en-educacion-basica-2021-2022/",
            "https://www.tamaulipas.gob.mx/2021/08/presenta-gobierno-de-tamaulipas-medidas-para-el-regreso-presencial-a-clases-de-manera-segura-progresiva-y-voluntaria/",
            "https://www.tamaulipas.gob.mx/educacion/2021/08/convocatoria-regreso-a-clases-presenciales-para-municipios-en-fase-i/",
            "https://www.elsoldetampico.com.mx/local/regional/definiran-escuelas-para-el-retorno-a-clases-presenciales-en-tamaulipas-7127426.html"
        ],
        color: StateBack2School
    },
    {
        id: "MX-SIN",
        name: "Sinaloa",
        regresoActividadesPresenciales: "SI",
        fechaRetorno: "30 de Agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "90",
        alumnosVacunados: "NO",
        nombreEstrategia: "Por decreto, emiten lineamientos para el regreso a clases en Sinaloa",
        actividadesPresenciales: "Medios indican: El modelo para el regreso a clases de manera presencial que implementaron Jalisco y Sinaloa desde marzo pasado es un buen esquema a seguir en este regreso a clases a partir del 30 de agosto próximo, señalaron representantes de la Asociación Mexicanos Primero. <br><br> El secretario de Educación Pública y Cultura, Juan Alfonso Mejía López, explicó que en cada una de las escuelas se determinará los días en que se darán las clases presenciales y lar virtuales, es decir, los maestros pueden tener las clases en aulas por una semana y la siguiente en línea, o elegir los días de la semana para cada modalidad.<br><br> En Sinaloa existen elementos para un regreso a clases gradual y focalizado, además de seguro para las niñas, niños y jóvenes, de acuerdo a la instrucción del gobernador Quirino Ordaz Coppel, quien fue reconocido por el presidente de la República, Andrés Manuel López Obrador, como el primer mandatario que solicitó la vacunación a las y los maestros del país para un regreso seguro a las escuelas.<br><br> En Sinaloa existen elementos para un regreso a clases gradual y focalizado, además de seguro para las niñas, niños y jóvenes, de acuerdo a la instrucción del gobernador Quirino Ordaz Coppel, quien fue reconocido por el presidente de la República, Andrés Manuel López Obrador, como el primer mandatario que solicitó la vacunación a las y los maestros del país para un regreso seguro a las escuelas.",
        aforosFiltrosSanitarios: "Regreso a las aulas en Sinaloa deberá atender condiciones de cada comunidad. Regreso a clases en Sinaloa será de forma gradual, focalizado y seguro. Experiencia previa de 955 Centros Comunitarios de Aprendizaje, donde se atendió a 26 mil 26 alumnos con rezago educativo. El congreso del Estado tiene la postura de “Estamos ansiosos porque los estudiantes regresen, pero la tercera ola de contagios es alarmante, ante este panorama es necesario que las autoridades actúen con prudencia: no hay condiciones del regreso seguro a las aulas",
        referencias: [
            "https://mieducacion.sepyc.gob.mx/sinaloa-coincide-con-el-presidente-andres-manuel-lopez-obrador-el-regreso-a-clases-es-por-el-convencimiento-nada-por-la-fuerza/",
            "https://www.debate.com.mx/opinion/Posible-retorno-a-las-aulas-20210730-0348.html",
            "https://mieducacion.sepyc.gob.mx/",
            "https://www.elsoldemazatlan.com.mx/local/regreso-a-clases-en-sinaloa-sera-en-modalidad-mixta-7045888.html",
            "https://www.elsoldemazatlan.com.mx/local/regreso-a-clases-en-sinaloa-sera-en-modalidad-mixta-7045888.html"
        ],
        color: StateBack2School
    },
    {
        id: "MX-DUR",
        name: "Durango",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "Si",
        reincorporacionGradual: "Si",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "100",
        alumnosVacunados: "NO",
        nombreEstrategia: "No disponible",
        actividadesPresenciales: "Autoridades y representantes sindicales acordaron un regreso mixto a clases el próximo lunes, ya que cada escuela definirá si vuelven de manera presencial o virtual. <br><br>Después de varias horas de trabajo hemos acordado en plena coincidencia desde luego con nuestras dirigencias sindicales, primero que hay plena disposición del Magisterio y del Gobierno del Estado de iniciar el ciclo escolar el próximo 30 de agosto, desde luego cuidando todos los aspectos que nos lleven a garantizar un regreso seguro a la escuela, informó el gobernador José Aispuro Torres.   De detectarse un caso positivo de COVID en el regreso a clases, no se cerrará la escuela: Se le dará seguimiento ante la posibilidad de más casos fuera del plantel. El secretario de Salud estatal, Sergio González Romero, explicó que el regreso a clases no será masivo ni en todas las escuelas y tampoco será a la máxima capacidad en donde sí sea el inicio del ciclo de manera presencial. “El regreso a clases no es masivo, no será en todas las escuelas ni toda la capacidad que tiene, estamos haciendo un estudio muy minucioso a través del INEGI y de la universidad Juárez del Estado de Durango, no solamente para ver cómo se va a comportar el virus sino georeferenciar las zonas de alto contagio y ahí valorar muy bien el regreso a clases”.   En el Colegio de Bachilleres del Estado de Durango (Cobaed), al menos 3 de los 33 planteles arrancaron con clases presenciales, se trata de aquellos ubicados en las zonas de menos riesgo de contagio como San Juan de Guadalupe y El Durazno; no obstante 17 más lo hicieron en la modalidad híbrida y los 13 restantes continuarán con clases virtuales, según el contexto de riesgo.",
        aforosFiltrosSanitarios: "Sin información",
        referencias: [
            "https://www.elsoldedurango.com.mx/local/este-miercoles-se-define-cuantas-escuelas-regresan-a-clases-presenciales-en-durango-7125588.html",
            "https://lavozdgo.com/2021/08/24/garantiza-seed-regreso-a-clases-presenciales-seguro/"

        ],
        color: StateBack2School
    },
    {
        id: "MX-ZAC",
        name: "Zacatecas",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "90.6",
        alumnosVacunados: "NO",
        nombreEstrategia: "Regreso a clases presenciales",
        actividadesPresenciales: "La secretaria de Educación en Zacatecas, reiteró que el regreso a clases presenciales en la entidad se mantiene para el próximo 30 de agosto para los niveles de educación básica, media superior y superior, dicho retorno será opcional, es decir, serán los tutores, padres y madres de familia quienes decidan si los alumnos y las alumnas acuden o no a los planteles escolares. El regreso presencial será escalonado y ordenado, aunque, no será obligatorio para las y los estudiantes, ni tampoco para los docentes con alguna comorbilidad, por lo que las clases a distancia continuarán para quienes así lo decidan. <br><br> En declaraciones recientes, se reiteró que el regreso será solo si los padres de familia están de acuerdo. Se comentó que solo en los municipios de el Salvador, Melchor Ocampo, Mezquital del Oro, Apozol, Apulco, donde no hay contagios se puede retomar el regreso a clases presenciales.<br><br> Se publicó exhorto de la legislatura local para que la Secretaría de Educación y la Secretaría de Salud del Estado de Zacatecas elaboren un plan estratégico de regreso a clases presenciales seguro, ordenado, gradual, escalonado y cauto; con todos los protocolos de salud establecidos, además de valorar la posibilidad de un regreso a clases inmediato en aquellas instituciones públicas y privadas pequeñas, con pocos alumnos y donde las condiciones físicas así lo permitan.<br><br> De las 4 mil 500 escuelas que atienden la educación inicial desde preescolar hasta secundaria, más de 10 por ciento no cumplen con los requisitos para garantizar la seguridad de los pequeños, sobre todo en suministros básicos como agua potable, luz eléctrica y drenaje.<br><br>Oscar Castruita, titular de la SNTE sección 58 dijo que aproximadamente 500 escuelas de zonas rurales no regresarán a clases presenciales, esto debido a que no cuentan con los elementos necesarios para un retorno seguro, tales como agua potable ni energia electrica.",
        aforosFiltrosSanitarios: "De acuerdo con la encuesta realizada por la Secretaría de Educación de Zacatecas (SEZ) a 101 mil 808 madres, padres de familia y tutores, el 81.3 por ciento dijo que está de acuerdo en que niñas, niños y adolescentes regresen a las escuelas de educación básica de manera presencial. El 92.3 por ciento se mostró dispuesto a colaborar en el establecimiento de los filtros sanitarios en casa, escuela y salón de clases, tal como lo establecen los protocolos de la Secretaría de Educación Pública (SEP). Se respetará la sana distancia, se suspenderán las ceremonias y los alumnos tendrán acceso a jabón, agua y gel alcoholado.<br><br> LA UAZ hará encuesta de movilidad y convivencia, “ya se tienen claros los protocolos de seguridad, de sanitización para todos los espacios, solo veremos si será escalonado, de acuerdo a los espacios o por nivel educativo, sin embargo, la decisión se tomará en agosto",
        referencias: [
            "https://imagenzac.com.mx/capital/necesario-el-regreso-clases-presenciales-en-zacatecas-brena-cantu/",
            "http://www.seduzac.gob.mx/portal/index.php",
            "http://ntrzacatecas.com/2021/08/18/vuelta-a-clases-es-positiva-para-menores-alanis/",
            "https://www.zacatecas.gob.mx/mas-de-81-de-madres-y-padres-de-familia-estan-de-acuerdo-en-que-alumnos-de-educacion-basica-regresen-a-las-aulas/ ",
            "https://imagenzac.com.mx/capital/estudiantes-regresaran-a-las-aulas-el-30-de-agosto/",
            "http://ntrzacatecas.com/2021/07/12/prepara-uaz-encuesta-de-movilidad-y-convivencia/",
            "https://www.eluniversal.com.mx/estados/regreso-clases-en-universidad-de-zacatecas-sera-virtual",
            "http://ntrzacatecas.com/2021/08/12/joca-prs/",
            "http://ntrzacatecas.com/2021/08/17/regreso-a-escuelas-en-incertidumbre-y-caro/",
            "https://www.elsoldezacatecas.com.mx/local/asi-propone-seduzac-el-regreso-a-clases-presenciales-7121156.html",
            "https://www.periodicomirador.com/2021/08/23/zacatecas-preparado-para-el-regreso-a-clases/",
            "http://ntrzacatecas.com/2021/08/25/casi-500-escuelas-sin-regreso-a-aulas/",
            "https://imagenzac.com.mx/capital/no-regresaran-a-clases-presenciales-500-escuelas-en-zacatecas/"
        ],
        color: StateBack2School
    },
    {
        id: "MX-SLP",
        name: "San Luis Potosí",
        regresoActividadesPresenciales: "SI",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "90",
        alumnosVacunados: "NO",
        nombreEstrategia: "Protocolo para el regreso seguro a clases",
        actividadesPresenciales: "Aunque los diputados Martha Barajas García y Martín Juárez Córdova coincidieron en que toda la comunidad educativa debe estar protegida y lo mínimo que se requiere es que las escuelas estén en buenas condiciones, con agua, luz, equipo y todo lo necesario para que se cumplan los protocolos sanitarios. No hay un pronunciamiento de la Seccretaria de Educación para confirmar tales  opiniones <br><br>La autoridad educativa federal dará a conocer información para el regreso a clases y en reunión de CONAEDU",
        aforosFiltrosSanitarios: "No habrá regreso a clases presenciales durante el mes de agosto, además recordó que para el regreso a clases presenciales, cuando existan las condiciones sanitarias, se aplicarán nueve intervenciones o medidas para asegurar el bienestar de la comunidad escolar. <br><br> Hubo una reapertura del 15% de escuelas en junio. El saldo fueron dos casos de contagios en docentes y nueve alumnos",
        referencias: [
            "https://slp.gob.mx/sege/Paginas/NOTICIAS/FECHAS-Y-MODALIDAD-DE-REGRESO-A-CLASES--SE-DAR%C3%81N-A-CONOCER-LA-PR%C3%93XIMA-SEMANA.aspx",
            "https://slp.gob.mx/sege/Paginas/NOTICIAS/NO-HAY-REGRESO-A-CLASES-PRESENCIALES-EN-SAN-LUIS-POTOS%C3%8D-SECRETARIO-DE-EDUCACI%C3%93N.aspx",
            "https://www.elsoldesanluis.com.mx/local/confirma-la-sege-el-regreso-a-clases-el-30-de-agosto-en-san-luis-potosi-7073590.html",
            "https://www.elsoldesanluis.com.mx/local/en-slp-no-hay-condiciones-para-regreso-a-clases-presenciales-7097203.html",
            "https://www.slp.gob.mx/sege/PDF/Estrategia%20Estatal%20para%20el%20Regreso%20Seguro%20a%20Clases.pdf"
        ],
        color: StateBack2School
    },
    {
        id: "MX-NAY",
        name: "Nayarit",
        regresoActividadesPresenciales: "SI",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "85.4",
        alumnosVacunados: "NO",
        nombreEstrategia: "Aprende en casa",
        actividadesPresenciales: "Se tenía previsto que algunos municipios de la Sierra regresarán a clases presenciales en mayo sin embargo ante el alza en casos de covid y el retroceso del semáforo de verde a amarillo dicho iniciativa se frenó.<br><br> El regreso a clases para educación básica está programado para el 10 de agosto, siempre y cuando Nayarit se encuentre en semáforo verde. <br><br> En estos momentos el Estado de Nayarit NO se encuentra en condiciones de regresar a clases presenciales por el alto índice de incrementos de casos de COVID-19”, declaró en entrevista Martín Isaac Pérez, Subsecretario de Educación Media Superior y Superior en el Estado de Nayarit.",
        aforosFiltrosSanitarios: "El subsecretario de Educación Media Superior y Superior en el Estado, Martín Isaac Pérez quien explicó que el recurso para hacer las reparaciones pertinentes a los planteles tras más de un año de estar solas, comienzan a llegar, por lo tanto, antes de que inicie el ciclo ya deben de estar listas para recibir a los alumnos.<br><br>Siguiendo los protocols establecidos por Gobierno Federal<br><br>En caso de que se reanuden las clases presenciales en el estado, se tomarán la siguientes medidas:<ol><li>Establecimiento de Comités de salud escolar.</li><li>Mantener sana distancia y uso general del cubreboca en los planteles.</li><li>Acceso a agua y jabón.</li><li>Suspensión de todo acto cívico o ceremonia.</li><li>Maximización del uso de espacios abiertos.</li><li>Detección temprana de contagios.</li><li>Cierre de escuelas en caso de contagio.</li></ol>",
        referencias: [
            "https://www.nayarit.gob.mx/seccion/educacion",
            "https://meridiano.mx/seccion/nayarit/nayarit-no-est-en-condiciones-de-regresar-a-clases-presenciales-educaci-n-1/",
            "https://www.nayarit.gob.mx/seccion/educacion#:~:text=El%20'Verano%20Divertido'%20iniciar%C3%A1%20el,cuando%20existan%20las%20condiciones%20sanitarias",
            "https://kidstudia.com/guia/todo-sobre-el-regreso-a-clases-en-mexico/nayarit/",
            "https://meridiano.mx/seccion/nayarit/nayarit-no-est-en-condiciones-de-regresar-a-clases-presenciales-educaci-n-1/",
            "https://www.gob.mx/sep/es/articulos/boletin-sep-no-102-concluye-exitosamente-el-proceso-de-vacunacion-a-personal-docente-en-30-entidades-del-pais?idiom=es",
            "https://latinus.us/2021/08/11/regreso-clases-presenciales-estados-volveran-aulas-nuevo-ciclo-escolar/",
            "https://www.eloccidental.com.mx/local/respalda-seccion-49-retorno-a-clases-presenciales-en-nayarit-7082730.html",
            "https://vallartaindependiente.com/2021/08/16/siempre-si-esta-contemplado-el-regreso-a-las-aulas-en-nayarit/",
            "https://meridiano.mx/articulo/2021-08-16/inminente-regreso-a-clases-presenciales-en-nayarit-este-30-de-agosto-1",
            "https://www.debate.com.mx/estados/SEP-confirma-regreso-a-clases-presenciales-en-Nayarit-sera-escalonado-y-voluntario-20210819-0227.html"
        ],
        color: StateBack2School
    },
    {
        id: "MX-JAL",
        name: "Jalisco",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de Agosto 2021",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "SP",
        alumnosVacunados: "NO",
        nombreEstrategia: "Modelo hibrido y opcional de regreso a clases-Regreso a clases presenciales",
        actividadesPresenciales: "El mandatario, Enrique Alfaro reitera que el 30 de agosto habrá retorno a las escuelas. “La manera como crecieron de manera rapidísima los contagios en niños, pero justamente en el período de vacaciones, el momento en el que más crecen los contagios es justamente en este periodo , y afortunadamente el número de contagios en niños ha iniciado su descenso en las últimas semanas, por lo cual reiteramos y sostenemos que el regreso a clases presenciales se sostiene.",
        aforosFiltrosSanitarios: "Filtros familiares. Antes de enviar a tu hija o hijo a la escuela, identifica si presenta algún síntoma asociado al COVID-19 como fiebre, tos, dolor de cabeza o garganta, pérdida del olfato o del gusto, dificultad para respirar, entre otros. <br><br>Si presenta alguno de ellos, no lo lleves a la escuela, notifica a la autoridad educativa y acudan a la Unidad Médica que les corresponde.<ul><li>1. Aforo permitido: Si el grupo es menor al 50 % de la capacidad del aula, todos los estudiantes asisten de lunes a viernes todas las semanas. Los grupos con más estudiantes se dividen; la mitad asiste a clases presenciales durante una semana, mientras la otra realiza actividades a distancia.</li><li> 2. Medidas a seguir: El personal de la escuela vigilará el cumplimiento de las medidas sanitarias, pero proteger la salud de la comunidad educativa es tarea de todas y todos, por ello, es importante que expliques a tus hijas o hijos la importancia de atenderlas durante el tiempo que permanecen en la escuela.</li></ul>",
        referencias: [
            "https://coronavirus.jalisco.gob.mx/todo-sobre-el-regreso-a-clases/",
            "https://portalsej.jalisco.gob.mx/plan-jalisco-para-la-reactivacion-economica/",
            "https://udgtv.com/noticias/regreso-clases-virtuales-decision-basada-criterios-cientificos-udeg/",
            "https://www.notisistema.com/noticias/regreso-a-clases-presenciales-en-jalisco-se-mantiene-alfaro/"
        ],
        color: StateBack2School
    },
    {
        id: "MX-AGU",
        name: "Aguascalientes",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "91",
        alumnosVacunados: "NO",
        nombreEstrategia: "Me sumo a un regreso seguro",
        actividadesPresenciales: "La Asociación de Instituciones Educativas Particulares del Estado ha solicitado al Instituto de Educación de Aguascalientes se les permita iniciar el ciclo lectivo 2021-2022 el próximo 23 de agosto, y no tener que esperar hasta el día 30, habrá que esperar confirmación <br> Los estudiantes podrán ingresar a los planteles, pero no de manera masiva, es decir no regresan los grupos completos al mismo tiempo, será, durante las primeras semanas de manera escalonada y para permitir a los profesores levantar un diagnóstico sobre el aprendizaje logrado durante este periodo de aislamiento. <br> El nivel básico de educación tendrá un modelo mixto de clases, con grupos reducidos y asistencia alternada a los salones de clases. Los niños de los niveles de preescolar, primaria y secundaria deberán ajustarse a las siguientes fechas: <br><br> Jornadas de limpieza escolar. 11, 12 y 13 de agosto. <br> Inscripciones y reinscripciones. Del lunes 16 de agosto al viernes 10 de septiembre. <br> Evaluación diagnóstica. Del lunes 16 de agosto al viernes 10 de septiembre. <br> Período extraordinario de recuperación. Del lunes 13 de septiembre al martes 23 de noviembre dirigido a los alumnos con deficiencias educativas. <br> El nivel medio superior regresará a clases con un modelo mixto. Los alumnos asistirán a clases de manera alternada, en grupos pequeños y con todas las medidas de salud e higiene necesarias para un regreso seguro. <br><br> El regreso a clases de este nivel educativo tendrá varias fechas, dependiendo del sistema al que está incorporada la escuela de tu hijo. Para el 6 de septiembre todas las preparatorias del estado ya deberán estar en clases. Por lo pronto se prevén las siguientes fechas de inicio: <br><br> Bachilleratos tecnológicos. Inicio de clases 23 de agosto. <br> Conalep. Inicio de clases 30 de agosto. <br> Bachilleratos incorporados a universidades. Misma fecha de inicio de la institución de nivel superior a la que se encuentran incorporados. <br> Las universidades darán inicio a las actividades educativas según su propio calendario escolar.   El regreso presencial a clases a partir del 30 de agosto próximo correspondiente al nuevo ciclo lectivo 2021-2022 será con jornadas completas, de 8:00 am a 1:00pm, en el caso de las primarias",
        aforosFiltrosSanitarios: "Protocolo para prevenir contagios durante el regreso progresivo a clases presenciales en escuelas públicas y privadas de educación básica, media superior y superior , publciado el 27 de julio de 2021, en el cual se detallan las estregias para evitar contagios: Uso obligatorio del cubrebocas, puerta abiertas y evitar contacto con picaportes, filtro de hogar, filtro escolar , filtro de aula, capaictaciones para personal y alumnos, limpieza a profundidad de las superficies, espacios y materiales, clausura de bebederos, reorganizar descansos y actividades fisicas, se promoveran clases en espacios abiertos, lavado de mano, evitar compartir alimentos, promover el estornudo de etiqueta (cubrir con el angulo interno del codo), el uniforme escolar no es obligatorio, se limita el aforo de los eventos  especiales, las actividades de servicios escolares serán por cita, <ul> <li>-Se recabaran cartas de corresponsabilidad.</li> <li>-maximizar sana distancia y aprovechamiento de espacios abiertos y el uso permanente e irrestricto de cubrebocas.</li> <li>-lpimite del 40% diario de la población escolar.</li> <li>- No mas de 9 alumnas y alumnos y un docente por aula de educación primaria y telesecundaria.</li> <li>-No mas de 12 alumnos y alumnas y un docente por aula en escuelas secundarias generale sy técnicas.</li> <li>-No se permite en este periodo ningún tipkde expendio de alimentos ni se realizaran clases de educación fisica o artística</li></ul>",
        referencias: [
            "http://www.hidrocalidodigital.com/aguascalientes-si-tendra-clases-presenciales/#:~:text=Las%20autoridades%20del%20estado%20planean,el%20pr%C3%B3ximo%2030%20de%20agosto."
        ],
        color: StateBack2School
    },
    {
        id: "MX-GUA",
        name: "Guanajuato",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "85.5",
        alumnosVacunados: "NO",
        nombreEstrategia: "Guanajuato educado con R de Reactivación. Regreso a las aulas.",
        actividadesPresenciales: "La SEG informa que no solicitará carta o documento de compromiso de asistencia voluntaria. La medida concuerda con lo dado a conocer este día por la Secretaría de Educación Federal en el Acuerdo número 23/08/21 por el que se establecen diversas disposiciones para el desarrollo del ciclo escolar 2021-2022.",
        aforosFiltrosSanitarios: "ventilación en los salones de clase, el tipo de suministro y almacenamiento de agua, la densidad escolar así como la existencia de espacios físicos para el control de filtros.",
        referencias: [
            "https://www.seg.guanajuato.gob.mx/RegresoalasAulas/SitePages/Inicio.aspx",
            "https://www.seg.guanajuato.gob.mx/RegresoalasAulas/SitePages/Inicio.aspx",
            "https://notus.com.mx/regreso-a-clases-presenciales-en-guanajuato-30-agosto-2021/",
            "https://www.milenio.com/politica/comunidad/guanajuato-regreso-clases-presenciales-ajustara-municipio",
            "https://www.seg.guanajuato.gob.mx/RegresoalasAulas/SitePages/EducacionVacunada.aspx",
            "https://zonafranca.mx/politica-sociedad/educacion/en-guanajuato-sera-voluntario-el-regreso-a-clases/",
            "https://www.unionguanajuato.mx/2021/08/02/regreso-a-clases-presenciales-en-agosto-calendario-escolar-2021-a-2022-de-la-sep/",
            "https://www.debate.com.mx/estados/El-regreso-a-clases-presenciales-sera-voluntario-en-Guanajuato-Diego-Sinhue-20210816-0394.html",
            "https://boletines.guanajuato.gob.mx/2021/08/20/prepara-seg-inicio-de-ciclo-escolar-2021-2022/"
        ],
        color: StateBack2School
    },
    {
        id: "MX-QUE",
        name: "Querétaro",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "95",
        alumnosVacunados: "NO",
        nombreEstrategia: "Programa Especial de Regreso a Clases",
        actividadesPresenciales: "Se Instaló Subcomité Técnico para el Regreso a Clases del Estado de Querétaro, el objetivo: organizar un posible regreso a clases presenciales planeado, escalonado, gradual, y cauto, con el fin de disminuir el riesgo de contagio y proteger la salud de las comunidades escolares.",
        aforosFiltrosSanitarios: "Se realizara de acuerdo a los ''LINEAMIENTOS GENERALES PARA EL REGRESO A LAS ACTIVIDADES ESCOLARES, EN EL MARCO DE LA PANDEMIA COVID-19''",
        referencias: [
            "https://queretaro.gob.mx/regresoaclaseguro.aspx",
            "https://www.queretaro.gob.mx/covid19/contenido/noticiasContenido.aspx?q=vUYGbsxLnli7glS/gQWD0HldeVLSaRLz7RohSiloFmz7sxVv8axXyw==",
            "https://www.queretaro.gob.mx/pdf/SEDEQ_GuiaRegresoaClases.pdf"
        ],
        color: StateBack2School
    },
    {
        id: "MX-HID",
        name: "Hidalgo",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "99",
        alumnosVacunados: "NO",
        nombreEstrategia: "Regreso Seguro a Clases en los centros educativos en el marco de la pandemia COVID 19, Operativo Escudo, Hidalgo Seguro",
        actividadesPresenciales: "El regreso a clases para el ciclo escolar 2021-2022 será el 30 de agosto gradual y voluntario, en tres faces, primero en los 15 municipios en verde y posteriormente evaluando la situación del resto de la entidad, que se mantendrá trabajando a distancia.",
        aforosFiltrosSanitarios: "<ul><li> 1. integración al comité participativo de las escuelas.</li><li> 2. Filtros en casa, escuela y salón de clases.</li><li> 3. lavado de manos con agua y jabón y uso de gel antibacterial. </li><li> 4. uso de cubreboca. </li><li> 5. mantener sana distancia. </li><li> 6. dar mayor uso a los espacios abiertos. </li> <li> 7. no habrá ceremonias ni reuniones generales. </li><li> 8. avisar a la escuela en caso de presencia o sospecha de casos de COVID-19. </li><li> 9. inscibirse en los cursos de apoyo socioemocional en línea de la SEP.</li></ul>",
        referencias: [
            "https://www.milenio.com/ciencia-y-salud/hidalgo-99-docentes-vacunaron-covid-19-seph",
            "https://latinus.us/2021/08/15/regreso-clases-hidalgo-haya-condiciones-gobernador-reporta-aumento-contagios/",
            "https://hidalgo.jornada.com.mx/cuando-entran-a-clases-en-hidalgo-2021/",
            "https://criteriohidalgo.com/noticias/medidas-regreso-clases-presenciales-hidalgo"
        ],
        color: StateBack2School
    },
    {
        id: "MX-COL",
        name: "Colima",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido, según sea el caso",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "93.5",
        alumnosVacunados: "NO",
        nombreEstrategia: "Estrategia Estatal de Regreso Seguro a Clases Presenciales",
        actividadesPresenciales: "Para el ciclo 2021-2022 se tomarán en cuenta tres modalidades para el regreso a clases presenciales. La primera modalidad  es el retorno a actividades presenciales de forma total en los planteles cuya densidad demográfica sea muy baja, como en las escuelas multigrado y comunitarias, con grupos de menos de 20 alumnos.  <br><br>La segunda modalidad es un regreso gradual y escalonado para escuelas de comunidades semi urbanas, con densidad mediana, en donde hay grupos de menos de 25 alumnos; ahí los docentes podrán dividir por orden alfabético los grupos, para que la mitad asista lunes y miércoles, la otra mitad martes y jueves, y dejar el viernes para atender casos de rezago educativo.  Y  la tercera modalidad es la mixta, para escuelas urbanas donde tienen grupos mayores de 25 alumnos; ahí será decisión del colectivo escolar determinar o combinar las actividades presenciales con la estrategia a distancia.",
        aforosFiltrosSanitarios: "Se conformará un comité de salud en cada escuela, filtros al ingreso al plantel, abastecer de agua y jabón, uso obligatorio de mascarilla, cuidado de grupos vulnerables y cuando se detecte algún caso de coronavirus, el plantel cerraría de forma inmediata.",
        referencias: [
            "https://www.milenio.com/estados/colima-pone-a-prueba-el-regreso-a-clases",
            "https://www.colimanoticias.com/antes-del-regreso-a-clases-preservar-la-salud-y-vida-del-alumnado-y-docentes-se/",
            "https://diariodecolima.com/noticias/detalle/2021-07-23-flores-colima-est-preparado-para-iniciar-el-ciclo-escolar",
            "https://elcomentario.ucol.mx/elabora-colima-su-estrategia-para-regreso-a-clases-presenciales/",
            "https://www.gob.mx/sep/es/articulos/boletin-sep-no-102-concluye-exitosamente-el-proceso-de-vacunacion-a-personal-docente-en-30-entidades-del-pais?idiom=es",
            "https://diariodecolima.com/noticias/detalle/2021-08-16-la-entidad-lista-para-el-regreso-a-clases-secretario-de-educacin",
            "https://elcomentario.ucol.mx/oficializa-educacion-el-regreso-a-clases-presenciales-en-colima-para-el-30-de-agosto/",
            "https://www.colimanoticias.com/prepara-educacion-colima-regreso-seguro-a-clases-presenciales/",
            "https://www.milenio.com/estados/clases-presenciales-colima-anuncia-regreso-30-agosto",
            "https://www.afmedios.com/educacion-colima-anuncia-regreso-a-clases-en-3-modalidades/"
        ],
        color: StateBack2School
    },
    {
        id: "MX-MIC",
        name: "Michoacán de Ocampo",
        regresoActividadesPresenciales: "No",
        fechaRetorno: "Sin información",
        tipoModelo: "A distancia",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "SP",
        alumnosVacunados: "NO",
        nombreEstrategia: "Escuela abierta",
        actividadesPresenciales: "En Michoacán, los únicos que se presentarán a las aulas el 30 de agosto serán los estudiantes de los niveles medio superior y superior, educación básica continúa clases a distancia.",
        aforosFiltrosSanitarios: "El gobernador de Michoacan alertó que un regreso a clases presenciales en primarias y secundarias, aumentará la movilidad de manera muy considerable, y el riesgo de las familias. Ello, describió, por los traslados y contacto que implica llevar, entregar y recoger a los hijos e hijas en las escuelas.",
        referencias: [
            "https://www.eluniversal.com.mx/estados/en-michoacan-no-hay-condiciones-para-regreso-clases-presenciales-aureoles",
            "https://www.lavozdemichoacan.com.mx/michoacan/educacion/ciclo-escolar-2021-2022-inicia-a-la-distancia-en-educacion-basica-confirma-la-see/",
            "https://www.animalpolitico.com/2021/08/michoacan-hidalgo-rechazan-regreso-clases-presenciales-estados-siguen-evaluando/",
            "https://www.elsoldemorelia.com.mx/local/cnte-12-mil-escuelas-no-regresaran-a-clases-presenciales-en-michoacan-7129688.html"
        ],
        color: StateNoBack2School
    },
    {
        id: "MX-VER",
        name: "Veracruz de Ignacio de la Llave",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "SP",
        alumnosVacunados: "NO",
        nombreEstrategia: "Regreso a clases presenciales",
        actividadesPresenciales: "El Gobernador consideró necesario que los estudiantes retomen su actividad en las escuelas y por eso el regreso a clases en el estado de Veracruz se dará como lo establece el calendario de la Secretaría de Educación Pública (finales de agosto). En un cambio de opinión de lo que venía sosteniendo en cuanto al retorno a las aulas en la entidad, el Gobernador manifestó categórico que la educación está federalizada; de ahí que será la autoridad educativa federal la que determine cuándo se dará el regreso a la actividad presencial escolar. <br><br>El secretario de Educación de Veracruz, afirmó que tras la reunión con el Consejo Nacional de Autoridades Educativas se determinó que el regreso a las aulas será el próximo 30 de agosto, aunque será parcial y refirió que la decisión final será de las madres y padres de familia de mandar a sus hijos a la escuela.<br><br>Regreso a clases presenciales: Veracruz no iniciará en zonas afectadas por huracán Grace.<br>Se prevé regreso a clases presenciales en 20 mil escuelas. En tanto, los planteles de 64 municipios que registraron afectaciones por el paso del huracán 'Grace', no podrán retomar clases a final de mes.",
        aforosFiltrosSanitarios: "Entrega de kits de limpieza en todos los planteles <br><br> Acorde al semáforo epidemiológico, aplica SEV estrategias a distancia<br><br> El 24 de junio regresaron a las aulas, al respecto, se cuenta con 682 estrategias por sistema en los modelos presencial, mixto y virtual. La Secretaría de Educación estatal destacó que esta planeación incluye el acuerdo voluntario de la comunidad escolar, para lo que padres y madres recibirán una carta compromiso sobre el cuidado de la salud de sus hijos. <br><br> 1.- Todas las escuelas ubicadas en municipios con Semáforo en color amarillo o naranja, darán atención únicamente en la modalidad a distancia.<br> 2.- En los municipios que se mantenga el color verde del semáforo epidemiológico local, las instituciones podrán continuar según lo programado y decidido por cada centro escolar.<br><br> El personal del plantel educativo podrá asistir a sus escuelas si así lo acuerdan a realizar las tareas pertinentes con o sin estudiantes de acuerdo a los puntos 1 y 2.",
        referencias: [
            "https://www.sev.gob.mx/v1/noticias/leer/2354/",
            "https://www.diariodexalapa.com.mx/local/si-habra-clases-presenciales-pero-no-obligatorio-dijo-el-titular-de-la-sev-zenyazen-escobar-garcia-7029291.html",
            "https://www.diarioelmundo.com.mx/index.php/2021/07/16/en-agosto-regreso-a-clases-en-veracruz/",
            "https://www.milenio.com/estados/regreso-clases-presenciales-veracruz-grupos-reducidos",
            "https://www.elsoldecordoba.com.mx/local/hay-giro-regreso-a-aulas-ya-no-es-obligatorio-afirmo-el-secretario-de-educacion-de-veracruz-zenyazen-7086941.html",
            "https://www.elsoldeorizaba.com.mx/local/cambio-ya-no-es-obligatorio-el-regreso-a-las-aulas-afirmo-el-secretario-de-educacion-de-veracruz-zenyazen-7087120.html",
            "https://www.milenio.com/estados/regreso-clases-presenciales-veracruz-grupos-reducidos",
            "https://www.elfinanciero.com.mx/nacional/2021/08/25/regreso-a-clases-presenciales-veracruz-no-iniciara-en-zonas-afectadas-por-grace/",
            "https://www.milenio.com/estados/veracruz-preve-regreso-clases-presenciales-20-mil-escuelas"
        ],
        color: StateBack2School
    },
    {
        id: "MX-PUE",
        name: "Puebla",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de Agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "95",
        alumnosVacunados: "NO",
        nombreEstrategia: "Modelo Educativo Híbrido en el Estado de Puebla Educación Básica y Media Superior Ciclo Escolar 2021-2022",
        actividadesPresenciales: "Para el regreso a clases será prioridad que las y los maestros estén vacunados: Lozano <ol><li>La educación es un derecho humano que debe garantizarse en todo momento, principalmente en tiempos de crisis, por la importancia que tienen los procesos de sociabilización y humanización, el aprendizaje se convierte en un instrumento de sobrevivencia.</li> <li>Se establece que el servicio público educativo se brindará de forma presencial responsable y ordenada con base en los términos que disponga las autoridades sanitarias, el acuerdo nacional reafirma la ruta trazada en Puebla.</li> <li>El regreso presencial será con carácter voluntario habiendo de por medio una carta compromiso de asistencia voluntaria y corresponsabilidad. <li>La educación debe ser considerada una actividad esencial y por lo tanto requiere la participación presencial de todo el personal para atender a los alumnos y garantizar el derecho a la educación. <li>El modelo híbrido será el sistema de trabajo que adoptarán en el siguiente ciclo escolar 21-22 <li>Las faenas continúan de forma sistemática, del 11 al 13 de agosto participaron 10 mil 817 escuelas que representan el 90% en las faenas escolares de limpieza y desinfección, por su parte el CAPCEE avanza en la intervención de las 480 escuelas vandalizadas. <li>El taller intensivo de capacitación a realizarse del 16 al 20 de agosto podrá llevarse a cabo de manera presencial y a distancia. <li>El Consejo Técnico programado del 23 al 27 de agosto será presencial.</li> <li>Se instrumentará el programa “Por una vida sana, Puebla te cuida” entre la Secretaría de Salud y la Secretaría Educación, el cual permitirá identificar situaciones de vulnerabilidad en los alumnos y así proteger los manteniéndose en la modalidad a distancia en caso de tener alguna comorbilidad.</li> <li>Los maestros rezagados en el programa de vacunación, así como los de nuevo ingreso serán atendidos por la Secretaría de Salud para su vacunación respectiva. <li>Se debe garantizar el derecho a la accesibilidad. Las cuotas estarán mediadas por las asambleas respectivas donde se tomen acuerdos en consenso y en armonía; si existe alguna queja llamar al 222 22938 20 o terminación 25. <li>Ya se están distribuyendo los más de 9.7 millones de libros de texto gratuitos. Representan un recurso didáctico importante que se suma a otros materiales que permiten el acompañamiento del modelo híbrido, como son guías Puebla en casa, aprende en casa, entre otros, la educación a distancia no es sinónimo de internet. <li>Se implementarán 10 acciones clave para promover incubar la seguridad, salud e higiene de la comunidad escolar además de emitirse una guía para el regreso presencial responsable y ordenado. <li>Las instituciones educativas dependientes de la subsecretaría de educación media superior y superior se sujetarán a las disposiciones que en materia educativa y de salud se meta tienen sus propios calendarios <li>Promover el apoyo socioemocional para los educandos y docentes en colaboración con el sector salud. <li>Al inicio del ciclo escolar 2021-2022 se realizaron periodo de valoración diagnóstica de los alumnos y reforzamiento de aprendizajes no sólo de matemáticas y lectura la formación integral, exige diagnósticos y procesos de compensación también integrales como lo establece la nueva escuela mexicana. <li>Se flexibilice al máximo las disposiciones que faciliten el tránsito escolar y permita la inscripción y reinscripción de los alumnos en los tres niveles educativos con objeto de asegurar su permanencia y regreso del sistema educativo nacional la adaptabilidad como dimensión clave del derecho a la educación. <li>La solidaridad y organización es la clave para evitar el riesgo de contagio y atemorización. <li>La escuela y la familia deben convertirse en centros de protección emocional y de contagios en diálogo corresponsable permanente <li> Se invita a mantener una actitud crítica constructiva frente al proceso de regreso presencia la clase, evitando reduccionismo, postura sin fundamentos y de mala fe.</li></ol>",
        aforosFiltrosSanitarios: "Las escuelas multigrado o de organización completa que puedan atender a toda su población de manera presencial todos los días, deben garantizar la sana distancia, así como la implementación del plan de atención (nivelación) de forma integrada a las jornadas académicas. Aquellas escuelas con mayor matrícula dividirán aforos cuya distribución puede ser por apellidos.",
        referencias: [
            "http://sep.puebla.gob.mx/index.php/component/k2/prueba-2-2-2",
            "https://www.eluniversalpuebla.com.mx/educacion/95-de-maestros-en-puebla-ya-esta-vacunado-contra-covid",
            "https://www.milenio.com/politica/comunidad/clases-presenciales-en-puebla-seran-voluntarias-sep",
            "https://www.poblanerias.com/2021/08/educacion-presentan-20-puntos-clave-para-regreso-a-clases-presenciales-en-puebla/"
        ],
        color: StateBack2School
    },
    {
        id: "MX-TLA",
        name: "Tlaxcala",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "SP",
        alumnosVacunados: "NO",
        nombreEstrategia: "Sin información",
        actividadesPresenciales: "En medios se ha difundido que la incorporación presencial será una vez que el semáforo epidemiológico este en verde (habrá cambio de Administración Estatal) Cuellar ciscneros , gobernadora electa, comentó estar listos para la incorporación presencial.<br><br> El Instituto Tecnológico del Altiplano de Tlaxcala (ITAT), cuenta con un Plan de retorno de actividades académicas esenciales para el semestre escolar que inicia el 23 de agosto, en el cual establecen la modalidad híbrida para la realización de las actividades académicas. <br><br>La gobernadora electa de Tlaxcala, anunció que el jueves 26 de agosto sesionará el Consejo Estatal de Salud para definir las estrategias a seguir para el regreso a clases en las aulas, programado para el lunes 30.<br><br>El gobernador de Tlaxcala, Marco Mena Rodríguez, se deslindó de la responsabilidad que genera el regreso a clases presenciales como lo ha pronosticado el Gobierno Federal en los distintos niveles educativos, pues aseguró que corresponde a la administración de Lorena Cuéllar Cisneros, tomar esa determinación.",
        aforosFiltrosSanitarios: "Una vez que el semáforo epidemiológico dé luz verde, estás son las medidas que se tomarán para el regreso a clases presenciales en Tlaxcala: <ul><li>Conformación de Comités Participativos de Salud.</li><li> Dotar a las escuelas con insumos de higiene como agua y jabón.</li><li> Salvaguardar a los docentes en grupos de riesgo.</li><li> Uso obligatorio de cubrebocas o pañuelo, dentro y fuera de las escuelas, públicas y particulares.</li><li> Mantener distancia en entradas y salidas de los planteles.</li><li> Programar recesos escalonados.</li><li> Maximizar el uso de espacios abiertos.</li><li> Suspender todo tipo de ceremonias o reuniones.</li><li> Brindar apoyo socioemocional para alumnos y docentes.</li></ul> Una comisión de la Secretaría de Educación Pública (SEPE) y el SNTE trabajando para la realización de una logística y la atención en el regreso a clases presenciales. Universidad Autónoma de Tlaxcala (UATx) reconsideraría el regreso a las clases.",
        referencias: [
            "https://www.milenio.com/politica/comunidad/duda-regreso-clases-presenciales-tlaxcala-tercer-ola-covid",
            "https://www.lajornadadeoriente.com.mx/tlaxcala/clases-presenciales-sepe-a-sep/",
            "https://www.elsoldetlaxcala.com.mx/local/alistan-preparatorias-regreso-a-las-aulas-juan-pablo-arroyo-6924698.html",
            "https://kidstudia.com/guia/todo-sobre-el-regreso-a-clases-en-mexico/tlaxcala/#modalidad+del+regreso+a+clases+en+tlaxcala",
            "https://www.milenio.com/politica/comunidad/de-manera-responsable-buscan-que-sea-el-regreso-a-clases-en-tlaxcala",
            "https://amqueretaro.com/mexico/2021/07/02/revisa-sep-el-regreso-a-clases-en-tlaxcala/",
            "https://tlaxcala.quadratin.com.mx/principal/garantiza-lorena-cuellar-un-regreso-seguro-a-clases-presenciales/",
            "https://www.elsoldetlaxcala.com.mx/local/definira-salud-modo-de-retorno-a-clases-lorena-cuellar-7123322.html"            
            
        ],
        color: StateBack2School
    },
    {
        id: "MX-MEX",
        name: "Estado de México",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "SP",
        alumnosVacunados: "NO",
        nombreEstrategia: "Plan de Reapertura de regreso a clases 2020*",
        actividadesPresenciales: "Alfredo del Mazo Maza, señaló que el regreso a clases presenciales en los municipios mexiquenses será de manera voluntaria y que en coordinación con los comités de salud y protección civil se están puliendo las medidas que se llevarán a cabo a partir del próximo 30 de agosto. ",
        aforosFiltrosSanitarios: "Para el regreso a clases presenciales en el Estado de México se instalarán tres filtros sanitarios; el primer filtro es en las casas de los estudiantes, el segundo filtro será al entrar a los centros educativos y el tercer filtro será a la entrada de los salones. Del Mazo Maza, señaló que el regreso a las aulas se llevará de manera escalonada y con alternancia en los días.",
        referencias: [
            "https://mexico.as.com/mexico/2021/08/23/actualidad/1629672653_864968.html"
        ],
        color: StateBack2School
    },
    {
        id: "MX-CMX",
        name: "Ciudad de México",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "100",
        alumnosVacunados: "SI",
        nombreEstrategia: "Sin información",
        actividadesPresenciales: "A cuatro días del inicio de clases presenciales, la jefa de Gobierno insistió en que es factible el retorno a las aulas, dado el avance de vacunación que alcanza ya al 93% de los adultos de la Ciudad con al menos una dosis y cuyo impacto se refleja de manera positiva en el descenso de hospitalizaciones por Covid-19.   El regreso a clases en CDMX es absolutamente voluntario dijo el titular de la Autoridad Educativa Federal en la CDMX, Luis Humberto Fernández. “El tema no es de cuántos alumnos se pueden recibir por grupo, es si se puede garantizar la sana distancia “. “Es el regreso a clases más complicado en la historia, es absolutamente voluntario, no necesariamente las clases a distancia, se mantendrán las herramientas para garantizar los aprendizajes”, afirmó.  La Coordinadora Nacional de los Trabajadores de la Educación (CNTE) anunció que sus maestros no regresarán a clases presenciales el 30 de agosto en cinco estados: Ciudad de México (CDMX), Guerrero, Michoacán, Chiapas y Oaxaca.",
        aforosFiltrosSanitarios: "Medidas sanitarias: <ul><li> • Creación y activación de los Comités Participativos de Salud Escolar (CPSE).</li><li> • Filtros de salud en casa, entrada de la escuela y aulas.</li><li> • Lavado constante de manos con agua y jabón. </li><li> • Uso correcto y obligatorio de cubrebocas. </li><li> • Espacios con distancia social mínima. </li><li> • Priorizar actividades en espacios abiertos. </li><li> • No se celebrarán ceremonias o eventos que implican aglomeraciones. </li><li> • Avisar inmediatamente a las autoridades competentes, en caso de que se detecte o se sospeche que alguna persona presente algún signo o síntoma respiratorio relacionado con el virus SARS-CoV2. </li><li> • Procurar entre las y los educandos y docentes apoyo socioemocional y promover, entre otros, el curso en línea de SEP-SALUD ''Retorno Seguro'' climss.imss.gob.mx</li></ul>",
        referencias: [
            "https://www.la-prensa.com.mx/metropoli/es-factible-el-regreso-a-las-aulas-en-cdmx-insiste-sheinbuam-7134350.html",
            "https://www.radioformula.com.mx/audio-y-video/audio/20210826/el-regreso-a-clases-en-cdmx-es-absolutamente-voluntario-luis-humberto-fernandez/",
            "https://www.sdpnoticias.com/mexico/cnte-no-regresara-a-clases-presenciales-en-5-estados/"
        ],
        color: StateBack2School
    },
    {
        id: "MX-MOR",
        name: "Morelos",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "Sin informacón",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "SP",
        alumnosVacunados: "NO",
        nombreEstrategia: "Regreso a clases",
        actividadesPresenciales: "Cornejo Alatorre exhortó a los padres de familia a inscribir a sus hijos en las escuelas, esto para garantizar su derecho a la educación y el correcto proceso de enseñanza – aprendizaje y así fortalecer los mecanismos de comunicación estrecha entre alumnos y profesores. <br><br>El texto original de este artículo fue publicado por la Agencia Quadratín en la siguiente dirección: https://morelos.quadratin.com.mx/preparado-morelos-para-regreso-a-clases-2021-2022/<br><br>Este contenido se encuentra protegido por la ley. Si lo cita, por favor mencione la fuente y haga un enlace a la nota original de donde usted lo ha tomado. Agencia Quadratín. Todos los Derechos Reservados © 2018. Se estan coordinando con la Secretaría de Gobernación que realiza con gobernadores, la Secretaría de Salud y de Educación de los estados y se esta analizando todos los escenarios, además mecniona que será relevante la opinión de los padres de familia.<br><br>El periodo de inscripciones y reinscripciones será del 16 de agosto al 10 de septiembre, mientras que las sesiones del Comité Participativo de Salud Escolar, así como las jornadas de limpieza en escuelas serán del 11 al 13 de agosto de 2021. con el fin de estar listo para el inicio de ciclo",
        aforosFiltrosSanitarios: "Terminó en julio el Programa Piloto de Regreso a Clases Presenciales Seguras, voluntarias, escalonadas y graduales sin incidente alguno para todos los que participaron en este proyecto: alumnos, padres de familia, docentes, administrativos y personal de apoyo",
        referencias: [
            "https://morelos.gob.mx/?q=prensa/nota/comunicado-de-prensa-secretaria-de-educacion-3",
            "https://elqueretano.info/trafico/presentan-calendario-escolar-2021-2022-para-morelos/",
            "https://mexico.as.com/mexico/2021/07/30/actualidad/1627609664_758632.html",
            "https://www.milenio.com/estados/morelos-analiza-posible-regreso-a-clases-presenciales",
            "https://mexico.as.com/mexico/2021/07/30/actualidad/1627609664_758632.html",
            "https://morelos.quadratin.com.mx/preparado-morelos-para-regreso-a-clases-2021-2022/"
        ],
        color: StateBack2School
    },
    {
        id: "MX-GRO",
        name: "Guerrero",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "31 de agosto 2021/03 de septiembre de 2021",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "100",
        alumnosVacunados: "NO",
        nombreEstrategia: "La escuela es nuestra",
        actividadesPresenciales: "Solo el 25 por ciento de todas las escuelas públicas en Oaxaca regresarán a clases el próximo 30 de agosto, de cara al próximo ciclo escolar, de acuerdo con el director general del Instituto Estatal de Educación Pública de Oaxaca (IEEPO), Francisco Ángel Villarreal. Al comparecer ante la legislatura local, precisó que 2 mil 686 escuelas públicas de educación básica retomaran actividades de manera semipresencial, ante la pandemia de coronavirus, al igual que 447 escuelas privadas, es decir el 85 por ciento de estas instituciones.    El gobernador de Oaxaca anunció que la mayor parte de las 13 mil escuelas de educación primaria, de nivel bachillerato y superior arrancarán clases bajo un esquema de educación a distancia y virtual, sin embargo, aclaró que hay un acuerdo para que menos del 25 por ciento regrese de manera semipresencial. Por su parte el director general del Instituto Estatal de educación pública de Oaxaca (IEEPO), Francisco Ángel Villarreal, indicó que el estado se encuentra preparado para iniciar el ciclo escolar 2021-2022, pues se plantearon las condiciones para que el regreso a clases sea seguro, organizado, voluntario, gradual y escalonado. Reiteró que un 25 por ciento de las escuelas retomarán actividades de forma semipresencial, principalmente en la zona de los valles centrales y la ciudad de Oaxaca.",
        aforosFiltrosSanitarios: "Se considerarán tres factores: que el estado se mantenga permanentemente en el color verde en el Semáforo de Riesgo Epidemiológico; que las escuelas cuenten con un protocolo sanitario, un plan escolar que refleje la organización administrativa y académica del plantel, y el fortalecimiento académico a través de una guía estatal para el regreso a clases y el cronograma de actividades para la apertura de escuelas en todos los niveles. <br><br> Por otro lado, los trabajadores de la educación hayan sido vacunados y que el semáforo epidemiológico esté en verde.",
        referencias: [
            "https://snte.org.mx/seccion14/snte-condiciona-el-regreso-a-clases-presenciales-en-guerrero/",
            "https://snte.org.mx/seccion14/con-seguridad-volvemos-a-la-escuela-snte/",
            "https://guerrero.quadratin.com.mx/guerrero-tendra-regreso-a-clases-presenciales-voluntario-astudillo/",
            "https://guerrero.quadratin.com.mx/reanudarian-clases-presenciales-800-escuelas-de-guerrero-astudillo/",
            "https://www.elfinanciero.com.mx/estados/2021/08/15/solo-en-17-de-81-municipios-guerrerenses-con-bajo-covid-se-volvera-a-clases-presenciales/",
            "https://guerrero.quadratin.com.mx/guerrero-tendra-regreso-a-clases-presenciales-voluntario-astudillo/"
        ],
        color: StateBack2School
    },
    {
        id: "MX-OAX",
        name: "Oaxaca",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "100",
        alumnosVacunados: "NO",
        nombreEstrategia: "No disponible",
        actividadesPresenciales: "El director general del Instituto Estatal de Educación Pública de Oaxaca (IEEPO), Francisco Ángel Villarreal, dio a conocer este 18 de agosto que el regreso a clases en la entidad será consensuado, seguro, gradual, escalonado y mixto. <br><br>Reiteró que la decisión de permitir que las infancias y juventudes retornen a las aulas será resultado del consenso con el magisterio, madres, padres de familia, tutores y autoridades municipales.<br>Por último, señaló que el Gobernador de Oaxaca, Alejandro Murat, y las autoridades estatales mantienen una fluida, correcta y permanente comunicación con el magisterio, así como con la Federación.   En encuentro encabezado por la secretaria de Gobernación, Olga Sánchez Cordero, los mandatarios de [...]; Oaxaca, Alejandro Murat, y Chiapas, Rutilio Escandón, externaron su apoyo al retorno a las aulas, por la salud mental de los estudiantes, y se manifestaron listos para ello, si bien en los dos últimos estados la Coordinadora Nacional de Trabajadores de la Educación se ha expresado en contra. Murat dijo que mantiene un diálogo con la organización magisterial para el regreso a los centros escolares",
        aforosFiltrosSanitarios: "En esta fecha se dice que de darse el regreso a las aulas: ''En este regreso no asistirán todos los niños al mismo tiempo, sino irán de acuerdo con la organización de las escuelas, como en orden alfabético, y también deberán ir de manera mixta...''.  Se está trabajando con la Secretaría de Educación Pública (SEP) para el protocolo sanitario que regirá los planteles en este nuevo ciclo escolar, donde habrán filtros sanitarios en cada escuela, además de que los menores y maestros tendrán que usar de forma permanente el cubrebocas.",
        referencias: [
            "https://www.jornada.com.mx/notas/2021/08/20/politica/avalan-gobernadores-regreso-a-escuelas/",
            "https://www.infobae.com/america/mexico/2021/08/18/como-sera-el-regreso-a-clases-en-oaxaca/ "
        ],
        color: StateBack2School
    },
    {
        id: "MX-TAB",
        name: "Tabasco",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "SP",
        alumnosVacunados: "NO",
        nombreEstrategia: "A la escuela. Seguro Regreso",
        actividadesPresenciales: "La secretaria de Educación precisó que serán en total 3 mil 800 planteles educativos de Preescolar, Primaria y Secundaria, que atienden a una población de 532 mil educandos, los que serán rehabilitados durante los meses de julio y agosto, como parte de los preparativos ante el posible regreso a clases presenciales para el ciclo escolar 2021-2022, siempre y cuando el semáforo epidemiológico este en color verde. <br><br>En totalidad, escalonado, hibrido, porcentual de niñas, niños y jovenes escalonado, presencial, híbrido o una mezcla de ambos (implementación de un protocolo Alemán)<br><br>El 20.8 por ciento de alumnos del nivel básico que pertenecen a los ocho municipios donde existen menos contagios y casos activos de COVID-19, estarían regresando a clases presenciales el próximo 30 de agosto, mientras que el 79.2 por ciento seguirá en casa de manera virtual. REGRESARÍAN A LAS AULAS 8 MUNICIPIOS, EL 79.2% SEGUIRÁ CON CLASES EN LÍNEA<br>Unos 112,598 estudiantes de nivel básico que viven en comunidades con bajo contagio y activos de Covid, volverían a escuelas; Setab confirmó que regreso será gradual, virtual y presencial.<br><br>Nivel básico<br>En el acuerdo se precisa que en el caso de los alumnos de educación básica, será el 30 de agosto cuando se regrese a las clases presenciales, cuya asistencia será de manera voluntaria.<br><br>Educación media y <br>En cuanto a la educación media y media superior, para el caso del Colegio de Bachilleres de Tabasco (Cobatab), se contempla contemplan dos escenarios de operatividad en los centros educativos para el semestre 2021-2022A: continuar en la modalidad virtual y retornar en modalidad híbrida.<br><br>30 de agosto regreso oficial a las aulas en Tabasco<br>El retorno denominado ''La Estrategia Lolli'' contempla el inicio escolar 2021-2022 en 7 municipios a presenciales y el resto virtual.",
        aforosFiltrosSanitarios: "Desarrollo de materiales informativos y protocolos sanitarios.",
        referencias: [
            "https://heraldodemexico.com.mx/nacional/2021/7/22/tabasco-no-volvera-clases-presenciales-en-agosto-analizan-sea-en-septiembre-318653.html",
            "https://www.elheraldodetabasco.com.mx/local/tabasco-si-regresa-a-clases-presenciales-en-septiembre-7015316.html",
            "https://www.tabascohoy.com/regresarian-a-las-aulas-20-de-estudiantes-confirma-educacion-ciclo-escolar-21-22/?__cf_chl_jschl_tk__=pmd_e7a564a81a81bf5623d59322ed379ea1ee8218d5-1628862700-0-gqNtZGzNAjijcnBszQqi",
            "https://www.elheraldodetabasco.com.mx/local/publican-decreto-para-el-regreso-a-clases-presenciales-en-tabasco-7113338.html",
            "https://www.elheraldodetabasco.com.mx/local/30-de-agosto-regreso-oficial-a-las-aulas-en-tabasco-7114918.html",
            "https://tabasco.gob.mx/PeriodicoOficial/descargar/2407#:~:text=El%20d%C3%ADa%2030%20de%20agosto,adolescentes%20(NNA)%20a%20recibir%20una"
        ],
        color: StateBack2School
    },
    {
        id: "MX-CHP",
        name: "Chiapas",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "100",
        alumnosVacunados: "NO",
        nombreEstrategia: "No disponibles",
        actividadesPresenciales: "El gobernador de Chiapas, Rutilio Escandón Cadenas afirmó que  Chiapas está listo para regresar a clases presenciales el próximo 30 de agosto, pues ha habido acuerdos entre las autoridades y la comunidad educativa. El 30 de agosto lnformará  junto con el presidente Andrés Manuel López Obrado.",
        aforosFiltrosSanitarios: "Medidas para el Regreso a Clases: <ol><li>Uso general de cubrebocas obligatorio. <li> Sana distancia en actividades al interior de los planteles, así como en las entradas y salidas. </li> <li> Recreos escolares escalonados</li> <li> Lugares fijos alternados.</li> <li> Asistencia alternada por apellido.</li> <li> Considera que tus hijos deberán acudir a clases sin fiebre o temperatura mayor a 37°. Estando dentro de la escuela, deberán lavarse frecuentemente las manos o utilizar gel antibacterial y los grupos no podrán ser mayor a 25 alumnos</li></ol>",
        referencias: [
            "https://www.milenio.com/estados/chiapas-listo-regreso-presencial-clases-gobernador"
        ],
        color: StateBack2School
    },  
    {
        id: "MX-CAM",
        name: "Campeche",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de mayo",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "88.8",
        alumnosVacunados: "NO",
        nombreEstrategia: "Aprendamos en familia desde casa",
        actividadesPresenciales: "El 10 de agosto se anunció de manera oficial el regreso a clases que será de forma gradual el próximo 30 de agosto. Será decisión de los padres y madres de familia enviar o no a sus hijos. Se acordó que regresarán un total de 904 escuelas de nivel preescolar, primaria y secundaria incluyendo los servicios de la Conafe. <br> <br> Es uno de los estados que implementó la prueba piloto de clases presenciales antes de terminar el ciclo escolar pasado, misma que cerró por el aumento de contagios de covid-19 en la entidad. Por lo que autoridades educativas consideran que no existen las condiciones necesarias para garantizar un regreso seguro a los planteles educativos.<br> <br> El regreso a clases presenciales será cuando el semáforo esté en verde debido a la falta de vacunación de los estudiantes.",
        aforosFiltrosSanitarios: "Cuando se tengan las condiciones necesarias para el regreso a los planteles educativos, se optará por un modelo híbrido de clases, con asistencia alternada, grupos reducidos, así como medidas sanitarias. Algunas de ellas son las siguientes: <br><br>  Uso correcto de cubrebocas obligatorio. <br> Sana distancia dentro de los salones de clases y en todas las actividades al interior de los planteles.<br> Colocación de filtros sanitarios al entrar a la escuela y a la entrada del salón<br> Recuerda que el regreso a clases presenciales es voluntario, si decides enviar a tus hijos a la escuela debes firmar una carta responsiva en donde declaras que tu hijo asiste voluntariamente a la escuela y sin síntomas relacionados al covid-19.",
        referencias: [
            "https://www.poresto.net/campeche/2021/7/15/regreso-clases-en-campeche-sera-en-semaforo-verde-seduc-263676.html",
            "http://campechehoy.mx/2021/07/31/en-campeche-sera-dificil-el-regreso-a-clases-presenciales/",
            "https://educacioncampeche.gob.mx/aprendamosencasa",
            "https://www.lajornadamaya.mx/campeche/177646/el-9-de-agosto-decidira-seduc-si-hay-clases-presenciales-en-campeche",
            "https://www.gob.mx/sep/es/articulos/boletin-sep-no-102-concluye-exitosamente-el-proceso-de-vacunacion-a-personal-docente-en-30-entidades-del-pais?idiom=es",
            "https://www.poresto.net/campeche/2021/8/10/regreso-clases-presenciales-en-campeche-sera-el-30-de-agosto-seduc-271707.html"
        ],
        color: StateBack2School
    },
    {
        id: "MX-YUC",
        name: "Yucatán",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 de agosto",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "SI",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "SP",
        alumnosVacunados: "NO",
        nombreEstrategia: "Regreso seguro a clases",
        actividadesPresenciales: "El Gobierno de Yucatán mantiene su postura del regreso a clases, en forma presencial; para el 30 de agosto próximo. Sin embargo, éste será voluntario, opcional y mixto. Estrategia estatal de Regreso Seguro a Clases, elaborada con base en los lineamientos que emitió la Federación y la participación de la Mesa Central conformada por representantes de seis Secretarías, entre ellas la de Educación y Salud, el Congreso del Estado, universidades, sindicatos, cámaras empresariales, la Comisión estatal de Derechos Humanos (Codhey), padres de familia, estudiantes y colegios.<br><br>Gobierno de Yucatán anuncia el protocolo oficial del regreso a clases 2021-2022.<br>El gobierno del Estado anunció el protocolo para el regreso a clases del ciclo 2021-2022 que, debido a la pandemia de Covid-19, se desarrollará a partir del 30 de agosto en modelo híbrido (presencial y a distancia) y voluntario.<br><br>El protocolo para el regreso a clases fue presentado por el secretario estatal de Educación, Liborio Vidal Aguilar, en un acto encabezado por el gobernador Mauricio Vila Dosal",
        aforosFiltrosSanitarios: "Se considera un retorno voluntario, opcional y mixto. <br><br>Secretaría de Educación considera realizar jornadas de limpieza en las escuelas y sesiones de los Comités Participativos de Salud Escolar; que se desarrollará del 11 al 13 de agosto venideros, como una medida preventiva ante la pandemia mundial por Covid-19.",
        referencias: [
            "http://www.educacion.yucatan.gob.mx/boletines/index",
            "https://www.yucatan.com.mx/merida/yucatan-tendra-un-regreso-a-clases-presencial-en-agosto",
            "https://www.lajornadamaya.mx/yucatan/176643/los-ninos-deben-regresar-a-clases-presenciales-lo-mas-pronto-posible-vila-dosal",
            "https://www.lajornadamaya.mx/yucatan/175807/regreso-a-clases-en-yucatan-sera-el-30-de-agosto",
            "https://www.excelsior.com.mx/nacional/ratifica-vila-que-en-yucatan-se-volvera-a-clases-presenciales/1464347",
            "https://sipse.com/novedades-yucatan/regreso-clases-yucatan-semipresencial-mauricio-vila-405028.html",
            "https://sipse.com/novedades-yucatan/protocolo-regreso-seguro-escuelas-yucatan-406731.html",
            "https://www.yucatan.com.mx/merida/asi-sera-el-regreso-a-clases-en-yucatan"
        ],
        color: StateBack2School
    },
    {
        id: "MX-ROO",
        name: "Quintana Roo",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "30 agosto 2021",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "SI",
        reincorporacionGradual: "NO",
        docentesVacunados: "SI",
        docentesVacunadosPorcentaje: "75.6",
        alumnosVacunados: "NO",
        nombreEstrategia: "Plan para Regreso a Clases Seguro",
        actividadesPresenciales: "Los alumnos en Quintana Roo no regresarían a las clases presenciales para el 30 de agosto, afirmó Sergio Acosta Manzanero. <br><br>El presidente de la Asociación Estatal de Padres de Familia, afirmó que las escuelas no estarán listas para el inicio del ciclo escolar 2021-2022.",
        aforosFiltrosSanitarios: "Cuatro pasos: <br> 1) Estar en semáforo amarillo tanto federal como estatal para abrir los Centros Comunitarios de Aprendizaje donde se ofrece asesoría; <br> 2) Rehabilitación de escuelas (infraestructura, limpieza y orden); <br> 3) Aplicación de un diagnóstico académico. <br> 4) Y que cada institución educativa entregue o actualice su plan de regreso a clases, cumpliendo con los protocolos sanitarios.Prueba para diagnosticar el rezago entre los alumnos tras un año y tres meses de clases en línea. Los padres de familia los encargados de aplicar la prueba, que consistirá en un grupo de preguntas de lo que tendrían que conocer según su grado de escolaridad.",
        referencias: [
            "https://qroo.gob.mx/seq/detallan-acciones-de-la-seq-para-el-regreso-clases-destacando-cuatro-importantes-temas",
            "https://www.sdpnoticias.com/estados/quintana-roo/quintana-roo-descartan-regreso-a-clases-presenciales/"

        ],
        color: StateBack2School
    },
];

$(document).ready(function(){
    $('.modal').modal();
    $('.tooltipped').tooltip();
    $('.sidenav').sidenav();
//    $('#slide-out').sidenav('open');

    var c_blue = 0, c_orange = 0, c_yellow = 0, c_gray = 0;

    for(var i=0; i<DataStates.length; i++){

        if( DataStates[i].color == "rgba(  0,  24,  75, 1)" )
            c_blue = c_blue + 1;
        else if( DataStates[i].color == "rgba(255, 165,   0, 1)" )
            c_orange = c_orange + 1;
        else if( DataStates[i].color == "rgba(237, 234,  55, 1)" )
            c_yellow = c_yellow + 1;
        else if( DataStates[i].color == "rgba(200, 200, 200, 1)" )
            c_gray = c_gray + 1;
    }

    $('.si_regresan').text( "("+c_blue+")" );
    $('.por_definir').text( "("+c_orange+")" );
    $('.no_regresan').text( "("+c_yellow+")" );
    $('.sin_informacion').text( "("+c_gray+")" );

    console.log( "Si regresan: " + c_blue + "\nPor definir: " + c_orange + "\nNo regresan: " + c_yellow + "\nSin información: " + c_gray );

//    $('#activate-timeline').click();
//    $('#timeline-range').click();

    $('.fecha_corte').text( Corte_Informacion[ (Corte_Informacion.length-1) ] );
    UpdateMap(DataStates_v9);
});

$('#activate-timeline').on('click', function(){
    console.log('Clicked => ', $('#activate-timeline').prop('checked') );
    if( $('#activate-timeline').prop('checked') ){
        $('.timeline-container').css('display', 'block');
        $('#timeline-range').value('8');
    }else{
        $('.timeline-container').css('display', 'none');
        $('.fecha_corte').text( Corte_Informacion[ (Corte_Informacion.length-1) ] );
        UpdateMap(DataStates_v9);
    }
});

$('#activate-timeline').on('change', function(){
    console.log('Clicked => ', $('#activate-timeline').prop('checked') );
    if( $('#activate-timeline').prop('checked') ){
        $('.timeline-container').css('display', 'block');
        $('#timeline-range').value('8');
    }else{
        $('.timeline-container').css('display', 'none');
        $('.fecha_corte').text( Corte_Informacion[ (Corte_Informacion.length-1) ] );
        UpdateMap(DataStates);
    }
});

$('#timeline-range').on('mousedown mousemove change', function(){
    var slider_position = $('.value').text();
    var fechaCorteIndice = parseInt(slider_position);
    var fechaCorte = Corte_Informacion[fechaCorteIndice-1];
    
    $('.fecha_corte').text( Corte_Informacion[fechaCorteIndice-1] );

    if( fechaCorte == '1 de agosto de 2021' )
        UpdateMap(DataStates_v1);
    else if( fechaCorte == '4 de agosto de 2021' )
        UpdateMap(DataStates_v2);
    else if( fechaCorte == '6 de agosto de 2021' )
        UpdateMap(DataStates_v3);
    else if( fechaCorte == '11 de agosto de 2021' )
        UpdateMap(DataStates_v4);
    else if( fechaCorte == '13 de agosto de 2021' )
        UpdateMap(DataStates_v5);
    else if( fechaCorte == '18 de agosto de 2021' )
        UpdateMap(DataStates_v6);
    else if( fechaCorte == '20 de agosto de 2021' )
        UpdateMap(DataStates_v7);
    else if( fechaCorte == '25 de agosto de 2021' )
        UpdateMap(DataStates_v8);
    else if( fechaCorte == '27 de agosto de 2021' )
        UpdateMap(DataStates_v9);

});

function UpdateMap(DataStates){
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
    
        color_splited = DataActualState.color.split(',');
        color_background = color_splited[0] + ',' + color_splited[1] + ',' + color_splited[2] + ', 0.9)';
    
        $('#ShowStateInformation').css({
            background: "linear-gradient("+color_background+" 0%, "+color_background+" 25%, rgba(255, 255, 255, 0.9) 25%, rgba(255, 255, 255, 0.9) 100%)"
        });
    
        $('.country-name').text(DataActualState.name);
        $('.fechaRetorno').html(DataActualState.fechaRetorno);
        $('.tipoModelo').text(DataActualState.tipoModelo);
        $('.nombreEstrategia').html(DataActualState.nombreEstrategia);
        $('.actividadesPresenciales').html(DataActualState.actividadesPresenciales);
        $('.aforosFiltrosSanitarios').html(DataActualState.aforosFiltrosSanitarios);
    
        var ReincoportationVoluntary = '';
    
        if( DataActualState.reincorporacionVoluntaria == 'SI' ){
            ReincoportationVoluntary = 'check_circle';
        } else if( DataActualState.reincorporacionVoluntaria == 'NO' ){
            ReincoportationVoluntary = 'cancel';
        }else{
            ReincoportationVoluntary = 'info';
        }
    
        var ReincoportationGradual = '';
    
        if( DataActualState.reincorporacionGradual == 'SI' ){
            ReincoportationGradual = 'check_circle';
        } else if( DataActualState.reincorporacionGradual == 'NO' ){
            ReincoportationGradual = 'cancel';
        }else{
            ReincoportationGradual = 'info';
        }
    
        var DocentesVacunados = '';
    
        if( DataActualState.docentesVacunados == 'SI' ){
            DocentesVacunados = 'check_circle';
        } else if( DataActualState.docentesVacunados == 'NO' ){
            DocentesVacunados = 'cancel';
        }else{
            DocentesVacunados = 'info';
        }
    
        $('.reincorporacionVoluntaria').html("<i class='material-icons icon-color-"+ReincoportationVoluntary+"'>"+ReincoportationVoluntary+"</i>");
        $('.reincorporacionGradual   ').html("<i class='material-icons icon-color-"+ReincoportationGradual+"'>"+ReincoportationGradual+"</i>");
        $('.docentesVacunados        ').html("<i class='material-icons icon-color-"+DocentesVacunados+"'>"+DocentesVacunados+"</i>");
        $('.alumnosVacunados         ').html("<i class='material-icons icon-color-"+DataActualState.alumnosVacunados+"'>"+DataActualState.alumnosVacunados+"</i>");
    
        if( DataActualState.docentesVacunadosPorcentaje == 'SP' )
            $('.porcentage_vaccune').text('Profesores vacunados');
        else
            $('.porcentage_vaccune').text(''+DataActualState.docentesVacunadosPorcentaje+'% de profesores vacunados');
    
        var TypeSate = DataActualState.color;
        if( TypeSate == "rgba(255, 255,   0, 1)" )
            $('.country-name').css('color', 'rgba(80, 80, 80, 0.9)');
        else
            $('.country-name').css('color', 'white');
    
        var ref = "";
        var refSplited = "";
    
        if( DataActualState.referencias.length > 5 )
            $('.card-references').css('overflow-y', 'scroll');
        else
            $('.card-references').css('overflow-y', 'auto');
    
        for(var i=0; i<DataActualState.referencias.length; i++){
            refSplited = DataActualState.referencias[i].split('/');
            ref = ref+"<a class='truncate' href='"+DataActualState.referencias[i]+"'>"+DataActualState.referencias[i]+"</a>";
        }
    //  ["+(i+1)+"]
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
}

/*
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

    color_splited = DataActualState.color.split(',');
    color_background = color_splited[0] + ',' + color_splited[1] + ',' + color_splited[2] + ', 0.9)';

    $('#ShowStateInformation').css({
        background: "linear-gradient("+color_background+" 0%, "+color_background+" 25%, rgba(255, 255, 255, 0.9) 25%, rgba(255, 255, 255, 0.9) 100%)"
    });

    $('.country-name').text(DataActualState.name);
    $('.fechaRetorno').html(DataActualState.fechaRetorno);
    $('.tipoModelo').text(DataActualState.tipoModelo);
    $('.nombreEstrategia').html(DataActualState.nombreEstrategia);
    $('.actividadesPresenciales').html(DataActualState.actividadesPresenciales);
    $('.aforosFiltrosSanitarios').html(DataActualState.aforosFiltrosSanitarios);

    var ReincoportationVoluntary = '';

    if( DataActualState.reincorporacionVoluntaria == 'SI' ){
        ReincoportationVoluntary = 'check_circle';
    } else if( DataActualState.reincorporacionVoluntaria == 'NO' ){
        ReincoportationVoluntary = 'cancel';
    }else{
        ReincoportationVoluntary = 'info';
    }

    var ReincoportationGradual = '';

    if( DataActualState.reincorporacionGradual == 'SI' ){
        ReincoportationGradual = 'check_circle';
    } else if( DataActualState.reincorporacionGradual == 'NO' ){
        ReincoportationGradual = 'cancel';
    }else{
        ReincoportationGradual = 'info';
    }

    var DocentesVacunados = '';

    if( DataActualState.docentesVacunados == 'SI' ){
        DocentesVacunados = 'check_circle';
    } else if( DataActualState.docentesVacunados == 'NO' ){
        DocentesVacunados = 'cancel';
    }else{
        DocentesVacunados = 'info';
    }

    $('.reincorporacionVoluntaria').html("<i class='material-icons icon-color-"+ReincoportationVoluntary+"'>"+ReincoportationVoluntary+"</i>");
    $('.reincorporacionGradual   ').html("<i class='material-icons icon-color-"+ReincoportationGradual+"'>"+ReincoportationGradual+"</i>");
    $('.docentesVacunados        ').html("<i class='material-icons icon-color-"+DocentesVacunados+"'>"+DocentesVacunados+"</i>");
    $('.alumnosVacunados         ').html("<i class='material-icons icon-color-"+DataActualState.alumnosVacunados+"'>"+DataActualState.alumnosVacunados+"</i>");

    if( DataActualState.docentesVacunadosPorcentaje == 'SP' )
        $('.porcentage_vaccune').text('Profesores vacunados');
    else
        $('.porcentage_vaccune').text(''+DataActualState.docentesVacunadosPorcentaje+'% de profesores vacunados');

    var TypeSate = DataActualState.color;
    if( TypeSate == "rgba(255, 255,   0, 1)" )
        $('.country-name').css('color', 'rgba(80, 80, 80, 0.9)');
    else
        $('.country-name').css('color', 'white');

    var ref = "";
    var refSplited = "";

    if( DataActualState.referencias.length > 5 )
        $('.card-references').css('overflow-y', 'scroll');
    else
        $('.card-references').css('overflow-y', 'auto');

    for(var i=0; i<DataActualState.referencias.length; i++){
        refSplited = DataActualState.referencias[i].split('/');
        ref = ref+"<a class='truncate' href='"+DataActualState.referencias[i]+"'>"+DataActualState.referencias[i]+"</a>";
    }
//  ["+(i+1)+"]
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
*/



