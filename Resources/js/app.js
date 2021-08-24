
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




