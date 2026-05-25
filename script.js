const traductorIA = {
    // === 1. Admisión y Valoración ===
    "TRIAGE": {
        titulo: "Clasificación Realizada (Triage)",
        urgencia: "estable",
        traduccion: "Su familiar ya completó la valoración inicial de prioridad médica. Se reporta estable en la sala de espera interna y está programado para ingresar a consultorio muy pronto."
    },
    "VALORACION": {
        titulo: "En Valoración Médica Directa",
        urgencia: "intermedio",
        traduccion: "El médico especialista de turno se encuentra examinando personalmente a su ser querido en el área de atención clínica para emitir un diagnóstico definitivo."
    },
    "REVALORACION": {
        titulo: "En Revaloración Clínica",
        urgencia: "intermedio",
        traduccion: "El personal de salud está reevaluando los signos vitales y la respuesta del paciente a los primeros manejos para determinar si requiere exámenes adicionales."
    },

    // === 2. Área de Críticos ===
    "REANIMACION": {
        titulo: "🚨 En Sala de Reanimación Vital",
        urgencia: "critico",
        traduccion: "¡Atención! El paciente ha ingresado al área de soporte vital avanzado debido a un compromiso severo de sus funciones respiratorias o cardíacas. Todo el equipo de especialistas se encuentra concentrado ejecutando maniobras críticas de estabilización."
    },
    "SHOCK_TRAUMA": {
        titulo: "🚨 Unidad de Shock Trauma",
        urgencia: "critico",
        traduccion: "El paciente se encuentra en el área de Shock Trauma para contener una emergencia médica aguda (como un infarto, crisis neurológica o trauma severo). Se están aplicando medicamentos e intervenciones de alta velocidad para asegurar sus signos vitales."
    },
    "QUIROFANO_EMERG": {
        titulo: "🚨 Quirófano de Emergencias Urgente",
        urgencia: "critico",
        traduccion: "El cirujano de turno determinó que el paciente requiere una intervención quirúrgica inmediata para corregir una situación que compromete su vida. El paciente ya fue trasladado al área quirúrgica."
    },
    "UCI_TRAMITE": {
        titulo: "🚨 Trámite de Ingreso a Cuidado Crítico (UCI)",
        urgencia: "critico",
        traduccion: "Debido a la alta complejidad de su cuadro clínico, el paciente requiere monitoreo continuo de terapia intensiva. El hospital se encuentra gestionando y asignando la cama en la Unidad de Cuidados Intensivos (UCI)."
    },

    // === 3. Ayudas Diagnósticas ===
    "EXAMENES_LAB": {
        titulo: "Orden de Laboratorio Clínico",
        urgencia: "intermedio",
        traduccion: "El doctor solicitó análisis médicos (muestras de sangre/orina). El personal clínico está gestionando la recolección; los tiempos de espera dependen del procesamiento del laboratorio."
    },
    "IMAGENES_TAC": {
        titulo: "Traslado a Diagnóstico por Imágenes",
        urgencia: "intermedio",
        traduccion: "Se generó una orden para estudios avanzados (Radiografía o TAC). El equipo de enfermería acompaña al paciente al área especializada para tomar los exámenes."
    },
    "ECOGRAFIA": {
        titulo: "Estudio de Ecografía en Curso",
        urgencia: "intermedio",
        traduccion: "Se está realizando un ultrasonido especializado en tiempo real para evaluar de manera interna los órganos del paciente y descartar anomalías agudas."
    },
    "RESULTADOS_REV": {
        titulo: "Resultados en Revisión Médica",
        urgencia: "intermedio",
        traduccion: "Los reportes de laboratorio o imágenes ya están listos en el sistema hospitalario. El médico asignado los está evaluando minuciosamente para definir los pasos a seguir."
    },

    // === 4. Tratamientos y Procedimientos ===
    "MEDICACION_IV": {
        titulo: "Tratamiento y Medicación en Curso",
        urgencia: "intermedio",
        traduccion: "Se le está administrando medicamento recetado directamente a través de una vía venosa para controlar y mitigar los síntomas agudos. El paciente está bajo monitoreo constante."
    },
    "PROCEDIMIENTO_MENOR": {
        titulo: "Procedimiento Menor en Sala",
        urgencia: "intermedio",
        traduccion: "El equipo médico realiza una intervención menor (como una sutura, curación avanzada o inmovilización) que requiere cuidado intermedio y asepsia."
    },
    "TERAPIA_RESP": {
        titulo: "Terapia Respiratoria",
        urgencia: "intermedio",
        traduccion: "Se están aplicando micronebulizaciones o soporte de oxígeno para mejorar la ventilación, abrir las vías aéreas y estabilizar los niveles de oxígeno del paciente."
    },
    "TRANSFUSION": {
        titulo: "Transfusión de Componentes Sanguíneos",
        urgencia: "critico",
        traduccion: "Se ha iniciado la administración segura de componentes sanguíneos (sangre/plasma) bajo estricto protocolo clínico para reponer pérdidas o corregir alteraciones hemodinámicas."
    },

    // === 5. Estancia e Internamiento ===
    "OBSERVACION": {
        titulo: "Traslado a Sala de Observación",
        urgencia: "critico",
        traduccion: "El médico determinó monitorear la evolución del paciente durante las próximas horas. Ha sido asignado a una camilla en la sala de observación para su mayor seguridad."
    },
    "HOSPITALIZACION": {
        titulo: "Asignación de Cama / Hospitalización",
        urgencia: "critico",
        traduccion: "Dada la condición médica, el paciente requiere quedarse internado en las plantas de hospitalización general para recibir un tratamiento continuo y especializado."
    },
    "REMITIDO": {
        titulo: "Remisión Institucional en Trámite",
        urgencia: "critico",
        traduccion: "Se inició el traslado regulado hacia un centro hospitalario de mayor complejidad para que el paciente reciba atención por subespecialidades que no poseemos en esta sede."
    },

    // === 6. Salidas ===
    "ALTA_MEDICA": {
        titulo: "Plan de Alta e Instrucciones de Salida",
        urgencia: "estable",
        traduccion: "¡Buenas noticias! El paciente ha completado su ciclo de urgencias de forma satisfactoria. El médico está preparando la fórmula médica y las recomendaciones de cuidado en casa."
    },
    "ALTA_VOLUNTARIA": {
        titulo: "Egreso por Alta Voluntaria",
        urgencia: "estable",
        traduccion: "El paciente o su tutor legal decidieron retirar al paciente del centro médico bajo su propia responsabilidad, firmando el desistimiento de la atención profesional."
    }
};

const personalMedico = {
    "mellizo": { contraseña: "siau2026", codigo: "101", firma: "Dr. Alejandro Mellizo", especialidad: "Especialista en Medicina de Urgencias" },
    "martinez": { contraseña: "siau2026", codigo: "102", firma: "Dra. Elena Martínez", especialidad: "Especialista en Pediatría Clínica" },
    "restrepo": { contraseña: "siau2026", codigo: "103", firma: "Dr. Carlos Restrepo", especialidad: "Especialista en Cirugía General" }
};

let medicoLogueado = "";
let cedulaFamiliarActiva = ""; 

window.onload = function() {
    const ultimaPantalla = localStorage.getItem("siau_ultima_pantalla") || "Inicio";
    const ultimoMedicoFirma = localStorage.getItem("siau_medico_firma");
    const ultimoMedicoEspe = localStorage.getItem("siau_medico_especialidad");

    if (ultimaPantalla === "ModuloMedico" && ultimoMedicoFirma) {
        medicoLogueado = ultimoMedicoFirma;
        document.getElementById("saludoMedico").innerText = `👨‍⚕️ Panel del ${ultimoMedicoFirma}`;
        document.getElementById("especialidadMedico").innerText = ultimoMedicoEspe;
        irAPantalla('ModuloMedico');
    } else {
        irAPantalla(ultimaPantalla);
    }
};

function irAPantalla(pantalla) {
    document.getElementById("pantallaInicio").style.display = "none";
    document.getElementById("pantallaLoginMedico").style.display = "none";
    document.getElementById("pantallaModuloMedico").style.display = "none";
    document.getElementById("pantallaModuloFamiliar").style.display = "none";
    document.getElementById("errorLogin").style.display = "none";
    
    cedulaFamiliarActiva = ""; 
    limpiarBuscador();

    localStorage.setItem("siau_ultima_pantalla", pantalla);

    if (pantalla === 'Inicio') document.getElementById("pantallaInicio").style.display = "block";
    if (pantalla === 'LoginMedico') document.getElementById("pantallaLoginMedico").style.display = "block";
    if (pantalla === 'ModuloMedico') {
        document.getElementById("pantallaModuloMedico").style.display = "block";
        document.getElementById("bloqueDudaFamiliarMed").style.display = "none";
        document.getElementById("btnAbrirMensajeria").style.display = "none";
        verificarNotificacionesMedico();
        cargarListaPacientesMedico();
    }
    if (pantalla === 'ModuloFamiliar') {
        document.getElementById("pantallaModuloFamiliar").style.display = "block";
        document.getElementById("notificacionesFamiliar").style.display = "none";
    }
}

function validarCredenciales() {
    const user = document.getElementById("userMed").value.trim().toLowerCase();
    const pass = document.getElementById("passMed").value.trim();
    const codigo = document.getElementById("codigoMed").value.trim(); 
    const errorBox = document.getElementById("errorLogin");

    if (personalMedico[user] && personalMedico[user].contraseña === pass && personalMedico[user].codigo === codigo) {
        medicoLogueado = personalMedico[user].firma; 
        errorBox.style.display = "none";
        
        document.getElementById("saludoMedico").innerText = `👨‍⚕️ Panel del ${personalMedico[user].firma}`;
        document.getElementById("especialidadMedico").innerText = personalMedico[user].especialidad;
        
        localStorage.setItem("siau_medico_firma", personalMedico[user].firma);
        localStorage.setItem("siau_medico_especialidad", personalMedico[user].especialidad);

        irAPantalla('ModuloMedico');
    } else {
        errorBox.style.display = "block";
    }
}

function cerrarSesion() {
    document.getElementById("userMed").value = "";
    document.getElementById("passMed").value = "";
    document.getElementById("codigoMed").value = "";
    medicoLogueado = "";
    localStorage.removeItem("siau_medico_firma");
    localStorage.removeItem("siau_medico_especialidad");
    irAPantalla('Inicio');
}

function verificarNotificacionesMedico() {
    const contenedor = document.getElementById("notificacionesMedico");
    const lista = document.getElementById("listaNotificacionesMed");
    lista.innerHTML = "";
    let alertas = 0;

    for (let i = 0; i < localStorage.length; i++) {
        const llave = localStorage.key(i);
        if (llave.startsWith("siau_doc_")) {
            try {
                const paciente = JSON.parse(localStorage.getItem(llave));
                if (paciente && paciente.dudaFamiliar && !paciente.respuestaMedico) {
                    alertas++;
                    const li = document.createElement("li");
                    li.style.cursor = "pointer";
                    li.style.padding = "8px 10px";
                    li.style.borderBottom = "1px solid #eee";
                    li.innerHTML = `📌 El familiar de <b>${paciente.nombre}</b> (C.C. ${paciente.doc}) ingresó una duda. <span style="color: #0077b6; font-size: 11px; font-weight: bold; display: block; text-align: right;">[Responder]</span>`;
                    
                    li.onclick = function() {
                        seleccionarPacienteParaEditar(paciente.doc, paciente.nombre, paciente.estado);
                    };
                    lista.appendChild(li);
                }
            } catch(e) { console.error(e); }
        }
    }
    contenedor.style.display = alertas > 0 ? "block" : "none";
}

function limpiarFormularioMedico() {
    document.getElementById("medicoDoc").value = "";
    document.getElementById("medicoPaciente").value = "";
    document.getElementById("medicoDoc").disabled = false;
    document.getElementById("medicoEstado").selectedIndex = 0;
    document.getElementById("btnGuardarMed").innerText = "🔄 Actualizar Estado Clínico";
    
    // Ocultar componentes de mensajería al limpiar
    document.getElementById("bloqueDudaFamiliarMed").style.display = "none";
    document.getElementById("btnAbrirMensajeria").style.display = "none";
    document.getElementById("respuestaMedicoInput").value = "";
}

function registrarEstado() {
    const doc = document.getElementById("medicoDoc").value.trim();
    const nombre = document.getElementById("medicoPaciente").value.trim().replace(/\s+/g, ' ');
    const estado = document.getElementById("medicoEstado").value;
    const horaActual = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    if (!doc || !nombre) {
        alert("Atención: Por favor, complete todos los campos antes de guardar.");
        return;
    }

    let historialPrevio = [];
    let dudaPendiente = "";
    let respuestaDuda = "";
    let esCambioEstado = true;
    
    const registroExistente = localStorage.getItem("siau_doc_" + doc);
    if (registroExistente) {
        try {
            const pacienteViejo = JSON.parse(registroExistente);
            historialPrevio = pacienteViejo.historial || [{ estado: pacienteViejo.estado, hora: pacienteViejo.hora }];
            dudaPendiente = pacienteViejo.dudaFamiliar || "";
            respuestaDuda = pacienteViejo.respuestaMedico || "";
            if (pacienteViejo.estado === estado) esCambioEstado = false;
        } catch(e) { historialPrevio = []; }
    }

    if (historialPrevio.length === 0 || historialPrevio[historialPrevio.length - 1].estado !== estado) {
        historialPrevio.push({ estado: estado, hora: horaActual });
    }

    const registroPaciente = { 
        doc, nombre, estado, hora: horaActual, historial: historialPrevio,
        medicoAsignado: medicoLogueado || "Médico de Turno",
        dudaFamiliar: dudaPendiente, respuestaMedico: respuestaDuda, notificarCambio: esCambioEstado 
    };
    
    localStorage.setItem("siau_doc_" + doc, JSON.stringify(registroPaciente));
    
    const llaveNombre = "siau_nom_" + nombre.toLowerCase();
    let listaPacientesMismoNombre = [];
    try {
        const datosExistentes = localStorage.getItem(llaveNombre);
        if (datosExistentes) {
            const parseado = JSON.parse(datosExistentes);
            listaPacientesMismoNombre = Array.isArray(parseado) ? parseado : [parseado];
        }
    } catch (e) { listaPacientesMismoNombre = []; }
    
    listaPacientesMismoNombre = listaPacientesMismoNombre.filter(p => p && p.doc !== doc);
    listaPacientesMismoNombre.push(registroPaciente);
    localStorage.setItem(llaveNombre, JSON.stringify(listaPacientesMismoNombre));

    alert(`✅ Estado clínico guardado con éxito para: ${nombre}.`);
    limpiarFormularioMedico();
    verificarNotificacionesMedico();
    cargarListaPacientesMedico();
}

function cargarListaPacientesMedico() {
    const contenedor = document.getElementById("listaPacientesMed");
    contenedor.innerHTML = "";
    let pacientesContados = 0;

    for (let i = 0; i < localStorage.length; i++) {
        const llave = localStorage.key(i);
        if (llave.startsWith("siau_doc_")) {
            pacientesContados++;
            try {
                const paciente = JSON.parse(localStorage.getItem(llave));
                if(!paciente) continue;
                const urgencia = traductorIA[paciente.estado].urgencia;
                const tituloEstado = traductorIA[paciente.estado].titulo;
                
                let colorClase = "bg-estable";
                if (urgencia === "critico") colorClase = "bg-critico";
                if (urgencia === "intermedio") colorClase = "bg-intermedio";

                const indicadorMensaje = (paciente.dudaFamiliar && !paciente.respuestaMedico) ? " 💬 🔴" : "";

                const item = document.createElement("div");
                item.className = "item-paciente-medico";
                item.setAttribute("onclick", `seleccionarPacienteParaEditar('${paciente.doc}', '${paciente.nombre.replace(/'/g, "\\'")}', '${paciente.estado}')`);
                item.innerHTML = `
                    <div>
                        <b>${paciente.nombre}</b> ${indicadorMensaje} <br><small style="color:#666;">C.C. ${paciente.doc} | Dr. ${paciente.medicoAsignado}</small>
                    </div>
                    <span class="badge-estado ${colorClase}">${tituloEstado}</span>
                `;
                contenedor.appendChild(item);
            } catch(e) { console.error(e); }
        }
    }
    if (pacientesContados === 0) {
        contenedor.innerHTML = `<p style="font-size:13px; color:#999; text-align:center; margin:15px 0;">No hay pacientes registrados.</p>`;
    }
}

function seleccionarPacienteParaEditar(doc, nombre, estado) {
    document.getElementById("medicoDoc").value = doc;
    document.getElementById("medicoDoc").disabled = true;
    document.getElementById("medicoPaciente").value = nombre;
    document.getElementById("medicoEstado").value = estado;
    document.getElementById("btnGuardarMed").innerText = "🔄 Actualizar Estado Clínico";

    document.getElementById("bloqueDudaFamiliarMed").style.display = "none";
    document.getElementById("btnAbrirMensajeria").style.display = "block";

    try {
        const paciente = JSON.parse(localStorage.getItem("siau_doc_" + doc));
        if (paciente && paciente.dudaFamiliar) {
            document.getElementById("textoDudaFamiliarMed").innerText = `"${paciente.dudaFamiliar}"`;
            document.getElementById("respuestaMedicoInput").value = paciente.respuestaMedico || "";
        } else {
            document.getElementById("textoDudaFamiliarMed").innerText = "Ninguna pregunta formulada. Envío de aclaraciones libres de evolución.";
            document.getElementById("respuestaMedicoInput").value = paciente ? (paciente.respuestaMedico || "") : "";
        }
    } catch(e) { console.error(e); }
}


function conmutarPanelMensaje() {
    const panel = document.getElementById("bloqueDudaFamiliarMed");
    if(panel.style.display === "none") {
        panel.style.display = "block";
    } else {
        panel.style.display = "none";
    }
}

// 🧼 ENVIAR MENSAJE: Ejecuta la acción, limpia los campos por completo y vuelve a ocultar todo
function enviarRespuestaMedico() {
    const doc = document.getElementById("medicoDoc").value;
    const respuestaInput = document.getElementById("respuestaMedicoInput");
    const respuesta = respuestaInput.value.trim();

    if (!respuesta) {
        alert("Por favor escriba una respuesta antes de enviar.");
        return;
    }

    try {
        const paciente = JSON.parse(localStorage.getItem("siau_doc_" + doc));
        paciente.respuestaMedico = respuesta;
        localStorage.setItem("siau_doc_" + doc, JSON.stringify(paciente));

        const llaveNombre = "siau_nom_" + paciente.nombre.toLowerCase();
        let lista = [];
        try {
            lista = JSON.parse(localStorage.getItem(llaveNombre)) || [];
            if(!Array.isArray(lista)) lista = [lista];
        } catch(e) { lista = []; }
        
        lista = lista.filter(p => p && p.doc !== doc);
        lista.push(paciente);
        localStorage.setItem(llaveNombre, JSON.stringify(lista));

        alert("✅ Respuesta enviada exitosamente.");

       
        respuestaInput.value = ""; // Vacia por completo el cuadro de texto escrito
        document.getElementById("textoDudaFamiliarMed").innerText = ""; // Borra el historial de la pregunta anterior
        
        // Oculta el panel amarillo y el botón de mensajería inmediatamente
        document.getElementById("bloqueDudaFamiliarMed").style.display = "none";
        document.getElementById("btnAbrirMensajeria").style.display = "none";
        
        // Reinicia el formulario general para recibir al siguiente paciente
        limpiarFormularioMedico();
        verificarNotificacionesMedico();
        cargarListaPacientesMedico();
    } catch(e) { console.error(e); }
}

function buscarPaciente() {
    let query = document.getElementById("buscarQuery").value.trim().toLowerCase();
    const cajaResultado = document.getElementById("resultadoBusqueda");
    const boxNotiFam = document.getElementById("notificacionesFamiliar");

    if (cedulaFamiliarActiva !== "") {
        query = cedulaFamiliarActiva;
    }

    if (!query) {
        alert("Por favor, introduzca el número de cédula o el nombre.");
        return;
    }

    let resultadosEncontrados = [];
    let datosPorDoc = localStorage.getItem("siau_doc_" + query);

    if (datosPorDoc) {
        try { resultadosEncontrados.push(JSON.parse(datosPorDoc)); } catch(e){}
    } else {
        for (let i = 0; i < localStorage.length; i++) {
            const llave = localStorage.key(i);
            if (llave.startsWith("siau_nom_") && llave.includes(query)) {
                try {
                    const contenido = JSON.parse(localStorage.getItem(llave));
                    if (Array.isArray(contenido)) resultadosEncontrados = resultadosEncontrados.concat(contenido);
                    else if (contenido) resultadosEncontrados.push(contenido); 
                } catch (e) { console.error(e); }
            }
        }
    }

    resultadosEncontrados = resultadosEncontrados.filter(p => p !== null && p !== undefined);

    if (resultadosEncontrados.length > 0) {
        cajaResultado.innerHTML = ""; 
        cajaResultado.style.display = "block";

        const esHomonimo = resultadosEncontrados.length > 1 && cedulaFamiliarActiva === "";
        const primerPaciente = resultadosEncontrados[0];

        if (!esHomonimo) {
            if (primerPaciente.notificarCambio) {
                boxNotiFam.style.display = "block";
                document.getElementById("textoNotificacionFam").innerHTML = `📢 <b>¡Atención!</b> El estado clínico cambió a: <b>${traductorIA[primerPaciente.estado].titulo}</b>.`;
                primerPaciente.notificarCambio = false;
                localStorage.setItem("siau_doc_" + primerPaciente.doc, JSON.stringify(primerPaciente));
            } else if (primerPaciente.respuestaMedico) {
                boxNotiFam.style.display = "block";
                document.getElementById("textoNotificacionFam").innerHTML = `📩 El <b>${primerPaciente.medicoAsignado}</b> respondió su inquietud en la sección inferior.`;
            } else {
                boxNotiFam.style.display = "none";
            }
        } else {
            boxNotiFam.style.display = "none";
        }

        if (esHomonimo) {
            alert(`⚠️ Alerta de Privacidad: Se detectó más de un paciente con el nombre "${query.toUpperCase()}".\n\nPor seguridad, seleccione la tarjeta de su familiar.`);
            cajaResultado.innerHTML += `<div id="bannerHomonimos" style="color:#856404; background-color:#fff3cd; border: 1px solid #ffeeba; padding:12px; border-radius:8px; font-size:13.5px; font-weight:bold; text-align:center; margin-bottom:15px;">⚠️ Coincidencia de Nombres: Identifique a su familiar por la Cédula (C.C.).</div>`;
        }

        resultadosEncontrados.forEach((paciente, index) => {
            const conducta = traductorIA[paciente.estado] || { titulo: paciente.estado, urgencia: "estable", traduccion: "Procesando." };
            
            let claseTriage = "triage-estable"; 
            if (conducta.urgencia === "critico") claseTriage = "triage-critico";
            if (conducta.urgencia === "intermedio") claseTriage = "triage-intermedio";

            const tarjetaPaciente = document.createElement("div");
            tarjetaPaciente.className = `resultado-paciente-item ${claseTriage}`;
            tarjetaPaciente.id = `tarjeta_paciente_${index}`;
            tarjetaPaciente.style.padding = "18px";
            tarjetaPaciente.style.borderRadius = "10px";
            tarjetaPaciente.style.marginBottom = "15px";
            
            if (esHomonimo) {
                tarjetaPaciente.style.cursor = "pointer";
                tarjetaPaciente.setAttribute("onclick", `seleccionarUnicoHomonimo('tarjeta_paciente_${index}', 'cuerpo_estado_${index}', ${resultadosEncontrados.length}, '${paciente.medicoAsignado}', ${paciente.respuestaMedico ? true : false}, ${paciente.notificarCambio ? true : false}, '${paciente.estado}', '${paciente.doc}')`);
            }

            const estiloInicialContenido = esHomonimo ? "display: none; margin-top: 15px;" : "margin-top: 15px;";
            const mensajeAyudaClic = esHomonimo ? `<div class="mensaje-clic-ayuda" style="text-align:right; font-size:11px; color:#005b94; font-weight:bold; margin-top:5px;">Presione aquí para confirmar identidad ⬇️</div>` : "";

            let htmlHistorial = "";
            if (paciente.historial && paciente.historial.length > 0) {
                htmlHistorial = `<div style="margin-top:12px; background:rgba(255,255,255,0.6); padding:10px; border-radius:6px; border:1px dashed #bbb;">
                    <span style="font-size:11px; font-weight:bold; color:#333; display:block; margin-bottom:5px;">🕒 Línea de tiempo de atención:</span>`;
                paciente.historial.forEach(h => {
                    htmlHistorial += `<div style="font-size:11.5px; color:#444;">• <b>${h.hora}</b> - ${(traductorIA[h.estado] ? traductorIA[h.estado].titulo : h.estado)}</div>`;
                });
                htmlHistorial += `</div>`;
            }

            let htmlBuzonMensajes = `
                <div style="margin-top:15px; background:#fff; padding:12px; border:1px solid #ced4da; border-radius:6px;">
                    <span style="font-size:12px; font-weight:bold; color:#005b94; display:block; margin-bottom:5px;">💬 Enviar duda al especialista de turno:</span>
                    <input type="text" id="inputDudaFamiliar_${paciente.doc}" placeholder="Ej: ¿Tiene dolor?" style="font-size:13px; padding:6px; width:75%; display:inline-block; margin-bottom:0;">
                    <button onclick="guardarDudaFamiliar('${paciente.doc}')" style="width:22%; display:inline-block; padding:6px; font-size:12px; float:right; margin-top:0;">Enviar</button>
                    <div style="clear:both;"></div>
            `;

            if (paciente.dudaFamiliar) {
                htmlBuzonMensajes += `<p style="font-size:12px; margin:8px 0 0 0; color:#555;"><b>Su pregunta:</b> "${paciente.dudaFamiliar}"</p>`;
                if (paciente.respuestaMedico) {
                    htmlBuzonMensajes += `<p style="font-size:12.5px; margin:5px 0 0 0; color:#2a9d8f; background:#e8f8f5; padding:6px; border-radius:4px; border-left:3px solid #2a9d8f;"><b>Respuesta:</b> ${paciente.respuestaMedico}</p>`;
                } else {
                    htmlBuzonMensajes += `<p style="font-size:11px; margin:5px 0 0 0; color:#e76f51; font-style:italic;">⏳ Esperando respuesta médica en tiempo real...</p>`;
                }
            }
            htmlBuzonMensajes += `</div>`;

            tarjetaPaciente.innerHTML = `
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="background:#005b94; color:white; padding:4px 10px; border-radius:4px; font-weight:bold; font-size:13px;">${paciente.nombre}</span>
                    <span class="badge-triage-tarjeta tag-${conducta.urgencia}">${conducta.urgencia.toUpperCase()}</span>
                </div>
                <div style="font-size: 13px; color: #444; margin-top:8px;"><b>Identificación:</b> C.C. ${paciente.doc} | <b>Tratante:</b> ${paciente.medicoAsignado}</div>
                ${mensajeAyudaClic}
                
                <div id="cuerpo_estado_${index}" style="${estiloInicialContenido}">
                    <hr style="border:0; border-top:1px solid rgba(0,0,0,0.1); margin:10px 0;">
                    <div style="font-size:15px; font-weight:bold; margin-bottom:5px; color:#111;">📍 Situación Médica: ${conducta.titulo}</div>
                    <p style="background:white; padding:12px; border-radius:6px; border:1px solid rgba(0,0,0,0.08); font-size:13.5px; line-height:1.4; color:#222;">${conducta.traduccion}</p>
                    <small style="color:#666; font-size:11px; font-weight:5px;">Último reporte hospitalario: ${paciente.hora}</small>
                    
                    <button onclick="buscarPaciente()" style="width:100%; background:#2a9d8f; color:white; border:none; padding:8px; margin-top:12px; border-radius:4px; font-weight:bold; cursor:pointer;">🔄 Actualizar Información</button>
                    ${htmlHistorial}
                    ${htmlBuzonMensajes}
                </div>
            `;
            cajaResultado.appendChild(tarjetaPaciente);
        });
    } else {
        alert("Información no encontrada.");
        cajaResultado.style.display = "none";
        boxNotiFam.style.display = "none";
    }
}

function seleccionarUnicoHomonimo(idTarjetaSeleccionada, idCuerpoSeleccionado, totalElementos, medicoAsignado, tieneRespuesta, tieneCambioEstado, codigoEstado, documentoIdentidad) {
    const banner = document.getElementById("bannerHomonimos");
    if (banner) banner.style.display = "none";

    cedulaFamiliarActiva = documentoIdentidad; 

    for (let i = 0; i < totalElementos; i++) {
        const tarjetaActual = document.getElementById(`tarjeta_paciente_${i}`);
        if (tarjetaActual) {
            if (`tarjeta_paciente_${i}` !== idTarjetaSeleccionada) {
                tarjetaActual.style.display = "none"; 
            } else {
                tarjetaActual.style.cursor = "default";
                tarjetaActual.removeAttribute("onclick");
                const txt = tarjetaActual.querySelector(".mensaje-clic-ayuda");
                if (txt) txt.style.display = "none";
            }
        }
    }

    document.getElementById(idCuerpoSeleccionado).style.display = "block";
    const boxNotiFam = document.getElementById("notificacionesFamiliar");
    
    if (tieneCambioEstado) {
        boxNotiFam.style.display = "block";
        document.getElementById("textoNotificacionFam").innerHTML = `📢 <b>¡Atención!</b> El estado clínico cambió a: <b>${traductorIA[codigoEstado].titulo}</b>.`;
    } else if (tieneRespuesta) {
        boxNotiFam.style.display = "block";
        document.getElementById("textoNotificacionFam").innerHTML = `📩 El <b>${medicoAsignado}</b> resolvió su inquietud.`;
    }
}

function guardarDudaFamiliar(doc) {
    const textoDuda = document.getElementById(`inputDudaFamiliar_${doc}`).value.trim();
    if (!textoDuda) {
        alert("Por favor escriba una duda.");
        return;
    }

    try {
        const paciente = JSON.parse(localStorage.getItem("siau_doc_" + doc));
        paciente.dudaFamiliar = textoDuda;
        paciente.respuestaMedico = ""; 

        localStorage.setItem("siau_doc_" + doc, JSON.stringify(paciente));

        const llaveNombre = "siau_nom_" + paciente.nombre.toLowerCase();
        let lista = [];
        try {
            lista = JSON.parse(localStorage.getItem(llaveNombre)) || [];
            if(!Array.isArray(lista)) lista = [lista];
        } catch(e){ lista = []; }
        
        lista = lista.filter(p => p && p.doc !== doc);
        lista.push(paciente);
        localStorage.setItem(llaveNombre, JSON.stringify(lista));

        alert("📬 Inquietud guardada de forma segura. El médico recibirá la notificación.");
        buscarPaciente(); 
    } catch(e) { console.error(e); }
}

function limpiarBuscador() {
    cedulaFamiliarActiva = ""; 
    const campo = document.getElementById("buscarQuery");
    const caja = document.getElementById("resultadoBusqueda");
    const boxNotiFam = document.getElementById("notificacionesFamiliar");
    if (campo) campo.value = "";
    if (caja) { caja.innerHTML = ""; caja.style.display = "none"; }
    if (boxNotiFam) boxNotiFam.style.display = "none";
}