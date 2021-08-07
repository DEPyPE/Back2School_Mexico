close all, clear all, clc

FileData      = fopen('Resources/data/Versión_2.0/DataRead.csv' , 'r');
FileDataWrite = fopen('Resources/data/Versión_2.0/DataWrite.txt', 'w');

num_states = 32;
voidData = ' ';
TypeColor = '';
    
for i = 1:num_states
    line = fgetl(FileData);
    DataLine = string( strsplit(line, ',') );
    
    if( DataLine(3) == 'SI' )
        TypeColor = 'StateBack2School';
    elseif( DataLine(3) == 'NO' )
        TypeColor = 'StateNoBack2School';
    elseif( DataLine(3) == 'Por Definir' )
        TypeColor = 'StateInDefinition';
    end

    Referencias = strsplit( DataLine(11), ' ' );
    
    fprintf(FileDataWrite, '\n{\n\t id: "%s",',                            DataLine( 1)   );
    fprintf(FileDataWrite, '\n\t name: "%s",',                             DataLine( 2)   );
    fprintf(FileDataWrite, '\n\t regresoActividadesPresenciales: "%s",',   DataLine( 3)   );
    fprintf(FileDataWrite, '\n\t fechaRetorno: "%s",',                     DataLine( 4)   );
    fprintf(FileDataWrite, '\n\t tipoModelo: "%s",',                       DataLine( 5)   );
    fprintf(FileDataWrite, '\n\t reincorporacionVoluntaria: "%s",',        DataLine( 7)   );
    fprintf(FileDataWrite, '\n\t reincorporacionGradual: "%s",',           DataLine( 8)   );
    fprintf(FileDataWrite, '\n\t docentesVacunados: "%s",',                DataLine( 9)   );
    fprintf(FileDataWrite, '\n\t docentesVacunadosPorcentaje: "%s",',      DataLine(10)   );
    fprintf(FileDataWrite, '\n\t alumnosVacunados: "%s",',                 'SI'           );
    fprintf(FileDataWrite, '\n\t nombreEstrategia: "%s",',                 DataLine( 7)   );
    fprintf(FileDataWrite, '\n\t actividadesPresenciales: "%s",',           ''            );
    fprintf(FileDataWrite, '\n\t aforosFiltrosSanitarios: "%s",',           ''            );
    fprintf(FileDataWrite, '\n\t referencias: [\n\t\t"%s",   ',              Referencias(1) );
    for ref = 2:(size(Referencias, 2) - 1)
        fprintf(FileDataWrite, '\n \t\t"%s",',                             Referencias(ref) );
    end
    fprintf(FileDataWrite, '\n \t\t"%s"\n\t ],',                                 Referencias(end) );
    
    fprintf(FileDataWrite, '\n\t color: %s \n},',                        TypeColor    ); 
end

fprintf('\n\n');

% {
%     id: "MX-BCS",
%     name: "Baja California Sur",
%     regresoActividadesPresenciales: "No",
%     fechaRetorno: "Por definir",
%     tipoModelo: "A distancia",
%     reincorporacionVoluntaria: "check_circle",
%     reincorporacionGradual: "check_circle",
%     docentesVacunados: "check_circle",
%     docentesVacunadosPorcentaje: "78.8",
%     alumnosVacunados: "info",
%     nombreEstrategia: "No disponible",
%     actividadesPresenciales: "Las autoridades educativas de Baja California Sur se han pronunciado al regreso a clases presenciales únicamente cuando el semáforo sanitario se encuentre en color verde. Por lo que aún no se tiene una fecha programada para el regreso presencial. <br><br>La presencialidad será únicamente cuando el semáforo esté en verde.",
%     aforosFiltrosSanitarios: "Se capacitaron a los comités participativos de salud escolar, en cada escuela debe de existir un comité de esta naturaleza que se encargará de revisar las condiciones en las cuales se encuentra la escuela, se tendrán algunos filtros y el primero desde luego será la casa, será en el hogar donde se revise la condición de su hijo o hija y tener en claro cuáles son los síntomas COVID, el segundo filtro al entrar a la escuela y el tercero previo a entrar al salón de clases",
%     referencias: [
%         "https://kidstudia.com/guia/todo-sobre-el-regreso-a-clases-en-mexico/baja-california-sur/",
%         "https://www.bcsnoticias.mx/confirmado-baja-california-sur-ya-se-prepara-para-regreso-a-las-aulas-en-agosto-sep/",
%         "https://www.elsudcaliforniano.com.mx/local/regreso-a-clases-solo-sera-en-alerta-verde-en-bcs-6987936.html",
%         "http://www.bcs.gob.mx/noticias/concluyo-vacunacion-del-personal-educativo-en-bcs/#:~:text=CONCLUY%C3%93%20VACUNACI%C3%93N%20DEL%20PERSONAL%20EDUCATIVO%20EN%20BCS,-La%20Paz%20B.C.S.&text=Con%20la%20aplicaci%C3%B3n%20de%2017,educativo%20de%20Baja%20California%20Sur."
%     ],
%     color: StateNoBack2School
% },




