
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
        actividadesPresenciales: "Solo se han emitido lineamientos para trabajadores de la Secretaría estatal y su incorporación a labores presenciales.",
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
        aforosFiltrosSanitarios: "Se contempla la asistencia de 10 personas por aula y con distancia de 1.8m,  así como las medidas sanitarias incentivadas desde el inicio de la pandemia y sanitización de los espacios escolares.",
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
        actividadesPresenciales: "Sin información",
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
        actividadesPresenciales: "<br>Comunicados oficiales indican encontrarse listos para este regreso a clases, y la modalidad dependerá del comportamiento del semáforo ante el Covid-19 y las indicaciones que emita la Secretaría de Salud. Indican iniciar el ciclo escolar el 30 de agosto, sin embargo no han definido la  modalidad. <br><br> El comunicado oficial (17 de junio de 2021) de la Cooridnación general de comunicación social de NL, indica que la reactivación educativa en colegios y escuelas de 25 municipios rurales de NL. ''No es regreso a clases (presenciales), es regreso a actividades escolares para que el maestro vaya adaptandose, vea que su escuela está en condiciones'' <br><br>",
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
        aforosFiltrosSanitarios: "Las principales acciones son el uso del cubrebocas es obligatorio para todos los niveles y sana distancia. <br> <br> Por otro lado, se emiten protocolos detallados para todos los niveles y actividades: <br> <br> Protocolo de acción ante COVID-19 para Grupos de Seguimiento Académico, Trámites presenciales y Entrega de materiales educativos aplicable a Educación Básica, Media Superior y Superior Docente <br> <br> Protocolo de actuación ante COVID-19 Sector Educativo para Actos Académicos Presenciales en escuelas de Educación Básica de la Secretaría de Educación del Estado de Jalisco. <br> <br> Protocolo de acción ante COVID-19 Para centros de formación para el trabajo, educación continua y academias. <br> <br> Protocolo de actuación ante COVID-19 Sector Educativo para la realización de exámenes presenciales del Sistema de Preparatoria Abierta. <br> <br> Protocolo de actuación ante COVID-19 Sector Educativo para la atención de actividades esenciales en Educación Media Superior. <br> <br> Protocolo de Acción ante COVID-19 para realizar Educación Física en los planteles escolares",
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
        color: "rgba(255, 165, 0, 1)"
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
        color: "rgba(0, 24, 75, 1)"
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
        actividadesPresenciales: "La asistencia sera voluntaria  para alumnos, docentes  y personal administratvio, de acuerdo al semáforo epidemiológico. se priorizará a los niños, niñas y adolescentes que, durante el ciclo escolar han tenido una comunicación intermitente y una participación baja en actividades propuestas por el docente, asi como los que han tenido una participación prácticamente inexistente. Aesta modalidad se le denomina ''Escuela Abierta''.<br><br> Se priorizará a atención de alumnos en riesgo de reprobar o abandonar, alumnas y alomnos en condiciiones vulnerables, que presenten dificultades de comunicación , deberán se atendidos de manera prioritaria. <br><br> Las actividades a realizar<br> 1. Jornadas contra el rezago escolar y valoración diagn´stic<br> 2.Asesoría pedagógic<br> 3.Apoyo psicoemociona<br> 4.Acciones de limpieza y sanitarias en el plantel educativ<br> 5. Entrega de libros de texto, equipo y material didáctic<br> 6. Trámites escolare<br> 7.Utilización de equipos y servicio<br> 8. Uso de infraestructura escolar (laboratorios, talleres<br> 9. Acciones de construcción y mantenimeint<br> 10. Sesiones de órganos colegiados del plantel educativo <br><br> ** aunque aun no hay una postura definitiva, según los medios",
        aforosFiltrosSanitarios: "Protocolo para prevenir contagios duranre el regreso prograsivo a clases presenciales en escuelas públicas y privadas de educación básica, media superior y superior , publciado el 27 de julio de 2021, en el cual se detallan las estregias para evitar contagios: Uso obligatorio del cubrebocas, puerta abiertas y evitar contacto con picaportes, filtro de hogar, filtro escolar , filtro de aula, capaictaciones para personal y alumnos, limpieza a profundidad de las superficies, espacios y materiales, clausura de bebederos, reorganizar descansos y actividades fisicas, se promoveran clases en espacios abiertos, lavado de mano, evitar compartir alimentos, promover el estornudo de etiqueta (cubrir con el angulo interno del codo), el uniforme escolar no es obligatorio, se limita el aforo de los eventos  especiales, las actividades de servicios escolares serán por cita, <ul><li>Se recabaran cartas de corresponsabilidad</li> <li>maximizar sana distancia y aprovechamiento de espacios abiertos y el uso permanente e irrestricto de cubrebocas</li> <li>lpimite del 40% diario de la población escolar</li> <li> No mas de 9 alumnas y alumnos y un docente por aula de educación primaria y telesecundaria</li> <li>No mas de 12 alumnos y alumnas y un docente por aula en escuelas secundarias generale sy técnicas</li> <li>No se permite en este periodo ningún tipkde expendio de alimentos ni se realizaran clases de educación fisica o artística</li> </ul>",
        color: "rgba(0, 24, 75, 1)"
    },
    {
        id: "MX-VER",
        name: "Veracruz de Ignacio de la Llave ",
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
        color: "rgba(0, 24, 75, 1)"
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
        color: "rgba(0, 24, 75, 1)"
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
        color: "rgba(0, 24, 75, 1)"
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
        color: "rgba(255, 165, 0, 1)"
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
        color: "rgba(0, 24, 75, 1)"
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
        color: "rgba(0, 24, 75, 1)"
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
        color: "rgba(0, 24, 75, 1)"
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
        color: "rgba(255, 165, 0, 1)"
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
        color: "rgba(0, 24, 75, 1)"
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
        aforosFiltrosSanitarios: "que cada municipio de Chiapas responde a distintas realidades, aunque  en todas se aplicarán los protocolos que correspondan para que con cuidados  se continue con el servicio educativo.  Con esa finalidad se conformarán  comités de salud en cada escuela, el  uso obligatorio del cubre bocas, la sana distancia, suspensión de cualquier  tipo de ceremonias y reuniones masivas. Asimismo,  se garantizará el abasto de agua y jabón, el uso del gel anti bacterial y la revisión  de temperatura en cada plantel, entre otras acciones",
        color: "rgba(0, 24, 75, 1)"
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
        color: "rgba(255, 165, 0, 1)"
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
        color: "rgba(0, 24, 75, 1)"
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
        color: "rgba(0, 24, 75, 1)"
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




