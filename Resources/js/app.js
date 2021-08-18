
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

var StateBack2School   = "rgba(  0,  24,  75, 1)"; // Azul
var StateInDefinition  = "rgba(255, 165,   0, 1)"; // Orange
var StateNoBack2School = "rgba(237, 234,  55, 1)"; // Yellow
var StateNoInformation = "rgba(200, 200, 200, 1)"; // Gray

var DataStates = [
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

$(document).ready(function(){
    $('.modal').modal();
    $('.tooltipped').tooltip();

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
        $('.porcentage_vaccune').text('');
    else
        $('.porcentage_vaccune').text('('+DataActualState.docentesVacunadosPorcentaje+'%)');

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




