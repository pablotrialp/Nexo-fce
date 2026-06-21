const subjects = {
  administracion: {
    name: "Administracion I",
    short: "Administracion",
    description: "Conceptos introductorios de organizaciones, objetivos, ambiente, sistemas y criterios administrativos.",
    source: "Resumen de Administracion I",
    diagnosisResult: "Nivel inicial intermedio en Administracion I. Reforza organizacion como entidad social, ambiente organizacional y criterios de eficacia, eficiencia y efectividad.",
    questions: [
      {
        type: "choice",
        text: "Segun el material, una organizacion puede definirse como:",
        options: [
          "Una unidad social construida deliberadamente para alcanzar fines especificos.",
          "Un conjunto de bienes sin personas ni objetivos.",
          "Una actividad individual sin division de tareas."
        ],
        answer: 0
      },
      {
        type: "truefalse",
        text: "La eficiencia mide el logro de objetivos sin considerar los recursos utilizados.",
        answer: false
      },
      {
        type: "choice",
        text: "Cual de estos elementos pertenece al ambiente especifico de una organizacion?",
        options: ["Clientes y proveedores.", "Clima global del planeta como unica variable.", "La historia completa de la humanidad."],
        answer: 0
      },
      {
        type: "truefalse",
        text: "Los objetivos guian actividades, fijan prioridades y permiten controlar el desempeno.",
        answer: true
      },
      {
        type: "choice",
        text: "La efectividad se entiende como:",
        options: ["Ser eficaz y eficiente a la vez, sosteniendolo en el tiempo.", "Ahorrar recursos aunque no se cumplan objetivos.", "Cumplir objetivos una sola vez sin revisar resultados."],
        answer: 0
      }
    ],
    challenge: {
      title: "Organizaciones y criterios administrativos",
      prompt: "Practica con preguntas rapidas sobre organizacion, ambiente, objetivos, eficacia, eficiencia y efectividad."
    },
    tutor: [
      { keywords: ["eficiencia", "eficacia", "efectividad"], answer: "En Administracion I, eficacia es alcanzar los objetivos previstos; eficiencia es hacerlo atendiendo al uso de recursos, buscando producir mas con menos; efectividad combina ambas y las sostiene en el tiempo." },
      { keywords: ["organizacion", "organizaciones"], answer: "El resumen define a las organizaciones como unidades sociales o agrupaciones humanas deliberadamente construidas para alcanzar fines especificos. Tambien tienen personas, objetivos, actividades, division del trabajo, normas y continuidad." },
      { keywords: ["ambiente", "contexto"], answer: "El ambiente general influye de manera indirecta mediante factores culturales, politicos, legales, economicos, tecnologicos, naturales y sociodemograficos. El ambiente especifico influye de forma directa: clientes, proveedores, competidores, financiamiento y reguladores." },
      { keywords: ["objetivo", "meta", "fines"], answer: "Los fines explican la razon de ser de la organizacion. Los objetivos son resultados futuros que guian actividades, fijan prioridades y permiten controlar desempeno. Las metas son resultados esperados de corto plazo para areas o subareas." }
    ]
  },
  economia: {
    name: "Introduccion a la Economia",
    short: "Economia",
    description: "Escasez, decisiones, flujo circular, factores de produccion, frontera de posibilidades, costo de oportunidad y enfoques micro y macro.",
    source: "Resumen de Introduccion a la Economia",
    diagnosisResult: "Buen inicio en Economia. Reforza escasez, costo de oportunidad, flujo circular y frontera de posibilidades de produccion.",
    questions: [
      {
        type: "choice",
        text: "La economia parte del problema de que:",
        options: ["Los recursos son escasos y deben asignarse entre fines alternativos.", "Los recursos son ilimitados.", "Todas las necesidades se satisfacen automaticamente."],
        answer: 0
      },
      {
        type: "choice",
        text: "El costo de oportunidad de un bien es:",
        options: ["Aquello a lo que se renuncia para obtenerlo.", "Su precio escrito en una factura.", "La suma de todos los impuestos de la economia."],
        answer: 0
      },
      {
        type: "truefalse",
        text: "La FPP muestra combinaciones posibles de dos bienes dadas la tecnologia y los recursos disponibles.",
        answer: true
      },
      {
        type: "choice",
        text: "En el flujo circular, las familias:",
        options: ["Son duenas de factores de produccion y compran bienes y servicios.", "Solo producen bienes finales.", "No participan de ningun mercado."],
        answer: 0
      },
      {
        type: "truefalse",
        text: "La macroeconomia estudia decisiones individuales de familias y empresas, mientras que la microeconomia estudia inflacion y desempleo agregados.",
        answer: false
      }
    ],
    challenge: {
      title: "Escasez, FPP y costo de oportunidad",
      prompt: "Responde preguntas cortas para practicar decisiones economicas, intercambio y frontera de posibilidades."
    },
    tutor: [
      { keywords: ["escasez", "recursos"], answer: "El resumen plantea que existe escasez de recursos y que deben asignarse a muchos fines distintos. Por eso la economia estudia decisiones y trade-offs." },
      { keywords: ["costo", "oportunidad"], answer: "El costo de oportunidad es aquello a lo que se debe renunciar para obtener un bien. Es central para entender especializacion, intercambio y FPP." },
      { keywords: ["fpp", "frontera"], answer: "La FPP representa combinaciones de dos bienes que una economia puede producir con recursos y tecnologia disponibles. Permite ver eficiencia, ineficiencia, trade-offs y crecimiento." },
      { keywords: ["micro", "macro"], answer: "Microeconomia estudia como familias y empresas toman decisiones e interactuan. Macroeconomia observa la economia agregada, incluyendo inflacion, desempleo y crecimiento." }
    ]
  },
  contabilidad: {
    name: "Contabilidad I",
    short: "Contabilidad",
    description: "Sistema de informacion contable, patrimonio, usuarios, principios, activo, pasivo, patrimonio neto y ecuacion contable.",
    source: "Resumen de Contabilidad I",
    diagnosisResult: "Base inicial correcta en Contabilidad I. Reforza patrimonio, informacion contable, activo, pasivo y ecuacion fundamental.",
    questions: [
      {
        type: "choice",
        text: "La contabilidad se ocupa principalmente de:",
        options: ["Informar sobre patrimonio, economia, estado financiero y sus cambios.", "Solo registrar ventas sin producir informacion.", "Disenar campanas publicitarias."],
        answer: 0
      },
      {
        type: "truefalse",
        text: "La teneduria de libros y la contabilidad son exactamente lo mismo.",
        answer: false
      },
      {
        type: "choice",
        text: "La igualdad fundamental contable es:",
        options: ["Activo = Pasivo + Patrimonio neto.", "Pasivo = Ventas + Clientes.", "Activo = Gastos - Ingresos."],
        answer: 0
      },
      {
        type: "choice",
        text: "El activo incluye bienes tangibles e intangibles que:",
        options: ["Fueron transmitidos en propiedad al ente y pueden brindar beneficios futuros.", "Siempre son deudas con terceros.", "Nunca pertenecen al ente."],
        answer: 0
      },
      {
        type: "truefalse",
        text: "El principio de devengado indica registrar cambios cuando se originan, sin importar si se cancelan en ese momento.",
        answer: true
      }
    ],
    challenge: {
      title: "Patrimonio y ecuacion contable",
      prompt: "Practica conceptos de informacion contable, patrimonio, activo, pasivo y principios contables."
    },
    tutor: [
      { keywords: ["contabilidad", "teneduria"], answer: "La teneduria de libros se vincula con el registro. La contabilidad, ademas de registrar, procesa y comunica informacion patrimonial, economica y financiera para controlar y tomar decisiones." },
      { keywords: ["activo", "pasivo", "patrimonio"], answer: "La igualdad fundamental es Activo = Pasivo + Patrimonio neto. El activo reune bienes y derechos del ente; el pasivo representa obligaciones; el patrimonio neto incluye aportes y resultados acumulados." },
      { keywords: ["devengado"], answer: "El principio de devengado indica que los cambios deben registrarse cuando se originan, aunque no se cobren o paguen en ese mismo momento." },
      { keywords: ["informes", "usuarios"], answer: "Los informes contables comunican informacion procesada a usuarios internos y externos. El usuario externo recibe informacion periodica y sintetica sobre patrimonio, variaciones y aspectos financieros." }
    ]
  }
};

const bibliographyNote = "Contenido basado en la bibliografia actualizada utilizada por la Facultad de Ciencias Economicas para las materias iniciales.";
const protectedPages = ["dashboard.html", "seleccion-carrera.html", "materia.html", "diagnostico.html", "desafio.html", "biblioteca.html", "cultura.html", "modelos.html", "tutor.html", "progreso.html"];
const examSubjectOptions = [
  { slug: "administracion", label: "Administración I", dbNames: ["Administracion I", "Administración I"] },
  { slug: "economia", label: "Introducción a la Economía", dbNames: ["Introduccion a la Economia", "Introducción a la Economía"] },
  { slug: "contabilidad", label: "Contabilidad I", dbNames: ["Contabilidad I"] }
];
const fallbackExamTopics = {
  administracion: [
    "Introducción a la Administración",
    "Organizaciones",
    "Planeamiento",
    "Organización",
    "Dirección",
    "Control"
  ],
  economia: [
    "Escasez",
    "Costo de oportunidad",
    "Frontera de posibilidades de producción",
    "Oferta y demanda",
    "Microeconomía",
    "Macroeconomía"
  ],
  contabilidad: [
    "Patrimonio",
    "Activo",
    "Pasivo",
    "Patrimonio neto",
    "Devengado",
    "Estados contables"
  ]
};
let activeSession = null;
let dashboardAiUsage = null;
let dashboardAiUsageUnavailable = false;
let dashboardHasUserProgress = false;
let dashboardUserProgressUnavailable = false;
let tutorChatHistory = [];
const progressKey = "nexoProgress";

const challengeBlocks = {
  administracion: [
    {
      title: "Conceptos base",
      label: "Base",
      questions: [
        subjects.administracion.questions[0],
        subjects.administracion.questions[1],
        subjects.administracion.questions[3]
      ]
    },
    {
      title: "Ambiente y objetivos",
      label: "Contexto",
      questions: [
        subjects.administracion.questions[2],
        subjects.administracion.questions[4],
        {
          type: "choice",
          text: "Que funcion cumplen las metas dentro de una organizacion?",
          options: ["Concretan resultados esperados de corto plazo.", "Reemplazan por completo a los fines institucionales.", "Eliminan la necesidad de controlar resultados."],
          answer: 0
        }
      ]
    },
    {
      title: "Aplicacion practica",
      label: "Practica",
      questions: [
        {
          type: "truefalse",
          text: "Una organizacion puede adaptarse mejor si interpreta los cambios de su ambiente.",
          answer: true
        },
        {
          type: "choice",
          text: "Si una empresa logra su objetivo usando menos recursos que antes, mejora principalmente su:",
          options: ["Eficiencia.", "Identidad visual.", "Tamano juridico."],
          answer: 0
        },
        {
          type: "choice",
          text: "Cual seria un indicador razonable para revisar desempeno?",
          options: ["Comparar objetivos previstos con resultados obtenidos.", "Ignorar los recursos utilizados.", "Medir solo opiniones sin datos."],
          answer: 0
        }
      ]
    }
  ],
  economia: [
    {
      title: "Escasez y decisiones",
      label: "Base",
      questions: [
        subjects.economia.questions[0],
        subjects.economia.questions[1],
        {
          type: "truefalse",
          text: "Elegir entre alternativas implica asumir algun costo de oportunidad.",
          answer: true
        }
      ]
    },
    {
      title: "FPP y agentes",
      label: "Modelo",
      questions: [
        subjects.economia.questions[2],
        subjects.economia.questions[3],
        {
          type: "choice",
          text: "Un punto dentro de la FPP suele representar:",
          options: ["Uso ineficiente de recursos disponibles.", "Produccion imposible.", "Maxima eficiencia tecnica."],
          answer: 0
        }
      ]
    },
    {
      title: "Micro y macro",
      label: "Practica",
      questions: [
        subjects.economia.questions[4],
        {
          type: "choice",
          text: "Cual tema corresponde a la macroeconomia?",
          options: ["Inflacion agregada.", "La eleccion de una familia entre dos bienes.", "La estructura de costos de una empresa puntual."],
          answer: 0
        },
        {
          type: "truefalse",
          text: "El flujo circular ayuda a visualizar intercambios entre familias, empresas y mercados.",
          answer: true
        }
      ]
    }
  ],
  contabilidad: [
    {
      title: "Informacion contable",
      label: "Base",
      questions: [
        subjects.contabilidad.questions[0],
        subjects.contabilidad.questions[1],
        {
          type: "choice",
          text: "Para que sirve la informacion contable?",
          options: ["Para controlar y tomar decisiones.", "Solo para decorar informes.", "Para evitar registrar operaciones."],
          answer: 0
        }
      ]
    },
    {
      title: "Patrimonio",
      label: "Ecuacion",
      questions: [
        subjects.contabilidad.questions[2],
        subjects.contabilidad.questions[3],
        {
          type: "choice",
          text: "El pasivo representa principalmente:",
          options: ["Obligaciones del ente con terceros.", "Bienes de uso propio sin deuda.", "Resultados positivos acumulados."],
          answer: 0
        }
      ]
    },
    {
      title: "Principios y aplicacion",
      label: "Practica",
      questions: [
        subjects.contabilidad.questions[4],
        {
          type: "truefalse",
          text: "El patrimonio neto se vincula con aportes y resultados acumulados.",
          answer: true
        },
        {
          type: "choice",
          text: "Si se compra mercaderia a credito, aumenta:",
          options: ["Activo y pasivo.", "Solo patrimonio neto.", "Solo ingresos por ventas."],
          answer: 0
        }
      ]
    }
  ]
};

const reinforcementBlocks = {
  administracion: [
    {
      title: "Integracion de conceptos",
      label: "Integracion",
      questions: [
        {
          type: "choice",
          text: "Si una organizacion redefine prioridades frente a nuevos competidores, esta respondiendo a cambios del:",
          options: ["Ambiente especifico.", "Patrimonio neto.", "Sistema de registracion."],
          answer: 0
        },
        {
          type: "truefalse",
          text: "Los fines explican la razon de ser de una organizacion y los objetivos traducen resultados buscados.",
          answer: true
        },
        {
          type: "choice",
          text: "Que combinacion representa mejor la efectividad?",
          options: ["Alcanzar objetivos usando bien los recursos y sostenerlo en el tiempo.", "Ahorrar recursos sin cumplir objetivos.", "Cumplir una tarea sin medir resultados."],
          answer: 0
        }
      ]
    },
    {
      title: "Caso breve",
      label: "Caso",
      questions: [
        {
          type: "choice",
          text: "Una facultad organiza tutorias para reducir abandonos. Ese resultado esperado funciona como:",
          options: ["Objetivo.", "Proveedor.", "Activo intangible."],
          answer: 0
        },
        {
          type: "truefalse",
          text: "Controlar desempeno permite comparar resultados obtenidos con objetivos previstos.",
          answer: true
        },
        {
          type: "choice",
          text: "Si se cumplen objetivos pero con desperdicio alto de recursos, falta mejorar:",
          options: ["Eficiencia.", "Mision.", "Ambiente general."],
          answer: 0
        }
      ]
    }
  ],
  economia: [
    {
      title: "Aplicacion de modelos",
      label: "Integracion",
      questions: [
        {
          type: "choice",
          text: "Si una economia produce fuera de su FPP, esa combinacion es:",
          options: ["Inalcanzable con recursos y tecnologia actuales.", "Siempre eficiente.", "Un punto de desempleo."],
          answer: 0
        },
        {
          type: "truefalse",
          text: "La especializacion y el intercambio pueden mejorar las posibilidades de consumo.",
          answer: true
        },
        {
          type: "choice",
          text: "Cuando una empresa decide cuanto producir, el analisis pertenece principalmente a:",
          options: ["Microeconomia.", "Macroeconomia.", "Contabilidad patrimonial."],
          answer: 0
        }
      ]
    },
    {
      title: "Decisiones y agregados",
      label: "Caso",
      questions: [
        {
          type: "choice",
          text: "El desempleo nacional se analiza como variable:",
          options: ["Macroeconomica.", "Individual.", "Exclusivamente contable."],
          answer: 0
        },
        {
          type: "truefalse",
          text: "La escasez obliga a elegir incluso cuando no hay dinero involucrado.",
          answer: true
        },
        {
          type: "choice",
          text: "En el flujo circular, las empresas demandan factores para:",
          options: ["Producir bienes y servicios.", "Eliminar mercados.", "Evitar intercambios."],
          answer: 0
        }
      ]
    }
  ],
  contabilidad: [
    {
      title: "Ecuacion aplicada",
      label: "Integracion",
      questions: [
        {
          type: "choice",
          text: "Si aumenta un activo y aumenta una deuda por el mismo importe, la ecuacion contable:",
          options: ["Se mantiene equilibrada.", "Siempre se rompe.", "Elimina el patrimonio neto."],
          answer: 0
        },
        {
          type: "truefalse",
          text: "Un informe contable puede ser util para usuarios internos y externos.",
          answer: true
        },
        {
          type: "choice",
          text: "Los bienes y derechos del ente se agrupan dentro del:",
          options: ["Activo.", "Pasivo.", "Resultado negativo."],
          answer: 0
        }
      ]
    },
    {
      title: "Registro y criterio",
      label: "Caso",
      questions: [
        {
          type: "choice",
          text: "Registrar una operacion cuando se origina responde al principio de:",
          options: ["Devengado.", "Publicidad.", "Costo de oportunidad."],
          answer: 0
        },
        {
          type: "truefalse",
          text: "La contabilidad no se limita al registro: tambien procesa y comunica informacion.",
          answer: true
        },
        {
          type: "choice",
          text: "Una obligacion pendiente de pago forma parte del:",
          options: ["Pasivo.", "Activo.", "Ingreso devengado."],
          answer: 0
        }
      ]
    }
  ]
};

document.addEventListener("DOMContentLoaded", async () => {
  if (redirectPasswordRecoveryToLogin()) return;
  const canContinue = await protectPage();
  if (!canContinue) return;
  initAuthForms();
  await initPasswordReset();
  initLogout();
  await renderLoggedInUser();
  await hydrateUserProgress();
  await hydrateDashboardAiUsage();
  initCareerForm();
  renderSubjectPage();
  await hydrateChallengeQuestions();
  renderDashboard();
  renderDiagnostic();
  renderChallenge();
  await renderTutor();
  renderProgressPage();
  initCultureGuide();
  initExamModels();
  initPremiumCheckout();
  await initPremiumSuccess();
});

function currentSubject() {
  const params = new URLSearchParams(window.location.search);
  const slug = normalizeSubjectSlug(params.get("materia")) || "administracion";
  return subjects[slug] ? slug : "administracion";
}

function hasSubjectParam() {
  return new URLSearchParams(window.location.search).has("materia");
}

function normalizeSubjectSlug(value) {
  if (value === "introduccion") return "economia";
  return value;
}

function publicSubjectSlug(slug) {
  return slug === "economia" ? "introduccion" : slug;
}

function subjectUrl(page, slug = currentSubject()) {
  return `${page}?materia=${publicSubjectSlug(slug)}`;
}

async function protectPage() {
  const page = window.location.pathname.split("/").pop();
  const isProtected = document.body.dataset.authRequired === "true" || protectedPages.includes(page);
  if (!isProtected) return true;

  const supabase = window.nexoSupabase;
  if (!supabase) {
    window.location.href = "login.html";
    return false;
  }

  const { data, error } = await supabase.auth.getSession();
  if (error || !data.session) {
    window.location.href = "login.html";
    return false;
  }

  activeSession = data.session;
  return true;
}

function userDisplayName(user) {
  const metadata = user?.user_metadata || {};
  const fullName = metadata.full_name || [metadata.first_name, metadata.last_name].filter(Boolean).join(" ");
  return fullName?.trim() || user?.email?.split("@")[0] || localStorage.getItem("nexoStudentName") || "estudiante";
}

async function currentSession() {
  if (activeSession) return activeSession;
  const supabase = window.nexoSupabase;
  if (!supabase) return null;
  const { data, error } = await supabase.auth.getSession();
  if (error || !data.session) return null;
  activeSession = data.session;
  return activeSession;
}

async function renderLoggedInUser() {
  const targets = document.querySelectorAll("[data-nav-user-name], [data-student-name]");
  const logos = document.querySelectorAll(".logo");
  if (!targets.length && !logos.length) return;

  const session = await currentSession();
  logos.forEach((logo) => {
    logo.setAttribute("href", session ? "dashboard.html" : "index.html");
  });

  if (!targets.length) return;
  const displayName = userDisplayName(session?.user);
  if (displayName) localStorage.setItem("nexoStudentName", displayName);

  targets.forEach((target) => {
    target.textContent = displayName;
  });

  const practiceButton = document.querySelector("[data-practice-exercise]");
  const chatForm = document.querySelector("[data-chat-form]");
  const chat = document.querySelector("[data-chat]");
  const input = chatForm?.querySelector("input");
  const submit = chatForm?.querySelector("button[type='submit']");

  practiceButton?.addEventListener("click", async () => {
    const prompt = "Generá un ejercicio de práctica tipo parcial sobre los temas seleccionados para mi próximo examen.";
    if (!window.nexoTutorExamContext) {
      appendBubble(chat, "Cargá un próximo examen para generar ejercicios contextualizados.", "ai");
      return;
    }

    await sendPracticeExercisePrompt(prompt, { chat, input, submit, practiceButton });
  });
}

async function sendPracticeExercisePrompt(message, controls) {
  const { chat, input, submit, practiceButton } = controls;
  appendBubble(chat, message, "user");
  tutorChatHistory.push({ role: "user", content: message });

  if (submit) submit.disabled = true;
  if (practiceButton) practiceButton.disabled = true;
  const loadingBubble = appendBubble(chat, "Pensando una respuesta breve...", "ai");

  try {
    const result = await requestTutorChatAnswer(message);
    loadingBubble.textContent = result.answer;
    tutorChatHistory.push({ role: "assistant", content: result.answer });
    tutorChatHistory = tutorChatHistory.slice(-12);
    updateTutorChatUsage(result);
  } catch (error) {
    loadingBubble.textContent = error?.message || "No pude responder ahora. Probá de nuevo en un momento.";
    loadingBubble.classList.add("error");
  } finally {
    if (submit) submit.disabled = false;
    if (practiceButton) practiceButton.disabled = false;
    input?.focus();
  }
}

function initAuthForms() {
  const form = document.querySelector("[data-auth-form]");
  if (!form) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const supabase = window.nexoSupabase;
    const message = document.querySelector("[data-message]");
    const email = document.querySelector("#email")?.value?.trim();
    const password = document.querySelector("#password")?.value || "";

    if (!supabase) {
      showAuthMessage(message, "No se pudo conectar con Supabase. Revisa la configuracion del cliente.", true);
      return;
    }

    if (form.dataset.authMode === "register") {
      await registerWithSupabase(form, supabase, message, email, password);
      return;
    }

    await loginWithSupabase(supabase, message, email, password);
  });
}

async function initPasswordReset() {
  const resetLink = document.querySelector("[data-password-reset-link]");
  const resetRequestForm = document.querySelector("[data-password-reset-request]");
  const resetCancel = document.querySelector("[data-password-reset-cancel]");
  const resetForm = document.querySelector("[data-reset-password-form]");
  const authForm = document.querySelector("[data-auth-form]");
  const message = document.querySelector("[data-message]");
  const supabase = window.nexoSupabase;
  const isResetFlow = isPasswordRecoveryUrl();
  const hasRecoveryError = hasPasswordRecoveryError();

  if (resetLink) {
    resetLink.addEventListener("click", (event) => {
      event.preventDefault();
      hideAuthMessage(message);
      if (authForm) authForm.hidden = true;
      if (resetRequestForm) resetRequestForm.hidden = false;
      if (resetForm) resetForm.hidden = true;
      const resetEmail = document.querySelector("#reset-email");
      if (resetEmail) {
        resetEmail.value = document.querySelector("#email")?.value?.trim() || "";
        resetEmail.focus();
      }
    });
  }

  if (resetCancel) {
    resetCancel.addEventListener("click", () => {
      hideAuthMessage(message);
      if (resetRequestForm) resetRequestForm.hidden = true;
      if (resetForm) resetForm.hidden = true;
      if (authForm) authForm.hidden = false;
      document.querySelector("#email")?.focus();
    });
  }

  if (resetRequestForm) {
    resetRequestForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      if (!supabase) {
        showAuthMessage(message, "No se pudo conectar con Supabase. Revisa la configuracion del cliente.", true);
        return;
      }

      const emailInput = document.querySelector("#reset-email");
      const email = emailInput?.value?.trim();
      if (!email) {
        showAuthMessage(message, "Ingresa tu email para enviar el enlace de recuperacion.", true);
        emailInput?.focus();
        return;
      }

      const redirectTo = `${window.location.origin}${window.location.pathname}?reset=password`;
      const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo });

      if (error) {
        showAuthMessage(message, error.message || "No se pudo enviar el email de recuperacion.", true);
        return;
      }

      showAuthMessage(message, "Te enviamos un enlace para restablecer tu contrasena. Revisa tu email.");
    });
  }

  if (hasRecoveryError) {
    if (authForm) authForm.hidden = false;
    if (resetRequestForm) resetRequestForm.hidden = true;
    if (resetForm) resetForm.hidden = true;
    showAuthMessage(message, "El enlace de recuperación venció o ya fue utilizado. Solicitá uno nuevo.", true);
  } else if (isResetFlow && resetForm && authForm) {
    authForm.hidden = true;
    if (resetRequestForm) resetRequestForm.hidden = true;
    resetForm.hidden = true;

    const recoverySession = await createRecoverySession(supabase);
    if (recoverySession) {
      activeSession = recoverySession;
      resetForm.hidden = false;
    } else {
      showAuthMessage(message, "El enlace de recuperación venció o ya fue utilizado. Solicitá uno nuevo.", true);
      authForm.hidden = false;
    }
  } else {
    if (authForm) authForm.hidden = false;
    if (resetRequestForm) resetRequestForm.hidden = true;
    if (resetForm) resetForm.hidden = true;
  }

  if (!resetForm) return;

  resetForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!supabase) {
      showAuthMessage(message, "No se pudo conectar con Supabase. Revisa la configuracion del cliente.", true);
      return;
    }

    const password = document.querySelector("#new-password")?.value || "";
    const confirmPassword = document.querySelector("#confirm-password")?.value || "";
    if (password !== confirmPassword) {
      showAuthMessage(message, "Las contrasenas no coinciden.", true);
      return;
    }

    const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
    if (sessionError || !sessionData.session) {
      showAuthMessage(message, "El enlace de recuperación venció o ya fue utilizado. Solicitá uno nuevo.", true);
      resetForm.hidden = true;
      if (authForm) authForm.hidden = false;
      return;
    }

    const { error } = await supabase.auth.updateUser({ password });
    if (error) {
      showAuthMessage(message, error.message || "No se pudo actualizar la contrasena.", true);
      return;
    }

    showAuthMessage(message, "Contrasena actualizada correctamente. Redirigiendo...");
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 650);
  });
}

function currentPageName() {
  return window.location.pathname.split("/").pop() || "index.html";
}

function queryParams() {
  return new URLSearchParams(window.location.search);
}

function hashParams() {
  return new URLSearchParams(window.location.hash.replace(/^#/, ""));
}

function isRecoveryHash() {
  const hash = hashParams();
  return hash.get("type") === "recovery" || (Boolean(hash.get("access_token")) && hash.get("type") === "recovery");
}

function hasPasswordRecoveryError() {
  const query = queryParams();
  const hash = hashParams();
  const hasErrorDescription = Boolean(query.get("error_description") || hash.get("error_description"));
  const values = [
    query.get("error"),
    query.get("error_code"),
    query.get("error_description"),
    hash.get("error"),
    hash.get("error_code"),
    hash.get("error_description")
  ].filter(Boolean).join(" ").toLowerCase();

  return hasErrorDescription || values.includes("access_denied") || values.includes("otp_expired");
}

function recoveryRedirectHash() {
  if (window.location.hash) return window.location.hash;

  const query = queryParams();
  const params = new URLSearchParams();
  ["error", "error_code", "error_description", "type"].forEach((key) => {
    const value = query.get(key);
    if (value) params.set(key, value);
  });

  const serialized = params.toString();
  return serialized ? `#${serialized}` : "";
}

function redirectPasswordRecoveryToLogin() {
  if (currentPageName() === "login.html") return false;
  if (!isRecoveryHash() && !hasPasswordRecoveryError()) return false;

  window.location.href = `login.html?reset=password${recoveryRedirectHash()}`;
  return true;
}

function isPasswordRecoveryUrl() {
  const query = queryParams();
  const hash = hashParams();
  return query.get("reset") === "password" || query.get("type") === "recovery" || hash.get("type") === "recovery" || Boolean(query.get("code"));
}

async function createRecoverySession(supabase) {
  if (!supabase) return null;

  const query = queryParams();
  const hash = hashParams();
  const code = query.get("code");
  const accessToken = hash.get("access_token");
  const refreshToken = hash.get("refresh_token");

  try {
    if (code) {
      const { data, error } = await supabase.auth.exchangeCodeForSession(code);
      if (error) throw error;
      return data.session || null;
    }

    if (accessToken && refreshToken) {
      const { data, error } = await supabase.auth.setSession({
        access_token: accessToken,
        refresh_token: refreshToken
      });
      if (error) throw error;
      return data.session || null;
    }

    const { data, error } = await supabase.auth.getSession();
    if (error) throw error;
    return data.session || null;
  } catch (error) {
    console.error("Error al validar el enlace de recuperacion en NEXO.", error);
    return null;
  }
}

function hideAuthMessage(message) {
  if (!message) return;
  message.classList.remove("show", "error");
}

async function loginWithSupabase(supabase, message, email, password) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error || !data.session) {
      showAuthMessage(message, error?.message || "Email o contrasena incorrectos.", true);
      return;
    }

    window.location.href = "seleccion-carrera.html";
  } catch (error) {
    showAuthMessage(message, "Ocurrio un error inesperado. Intenta nuevamente.", true);
    console.error("Error de login en NEXO.", error);
  }
}

async function registerWithSupabase(form, supabase, message, email, password) {
  try {
    const confirmPassword = document.querySelector("#confirm")?.value || "";
    if (password !== confirmPassword) {
      showAuthMessage(message, "Las contrasenas no coinciden.", true);
      return;
    }

    const studentName = document.querySelector("#name")?.value?.trim() || "estudiante";
    const lastName = document.querySelector("#last")?.value?.trim() || "";
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: studentName,
          last_name: lastName,
          full_name: `${studentName} ${lastName}`.trim()
        }
      }
    });

    if (error) {
      showAuthMessage(message, error.message || "No se pudo crear la cuenta.", true);
      return;
    }

    localStorage.setItem("nexoStudentName", studentName);
    const session = data.session;
    showAuthMessage(message, session ? "Cuenta creada correctamente. Redirigiendo..." : "Cuenta creada. Revisa tu email para confirmar el acceso.");

    if (!session) return;

    setTimeout(() => {
      window.location.href = form.dataset.redirect || "seleccion-carrera.html";
    }, 650);
  } catch (error) {
    showAuthMessage(message, "Ocurrio un error inesperado. Intenta nuevamente.", true);
    console.error("Error de registro en NEXO.", error);
  }
}

function showAuthMessage(message, text, isError = false) {
  if (!message) return;
  message.textContent = text;
  message.classList.toggle("error", isError);
  message.classList.add("show");
}

function initLogout() {
  document.querySelectorAll("[data-logout]").forEach((button) => {
    button.addEventListener("click", async () => {
      const supabase = window.nexoSupabase;
      if (supabase) await supabase.auth.signOut();
      window.location.href = "index.html";
    });
  });
}

function initCareerForm() {
  const careerForm = document.querySelector("[data-career-form]");
  if (!careerForm) return;
  const confirm = document.querySelector("[data-career-confirm]");
  const confirmTitle = document.querySelector("[data-career-confirm-title]");
  const confirmText = document.querySelector("[data-career-confirm-text]");
  const confirmButton = document.querySelector("[data-career-confirm-button]");

  const paintSelection = () => {
    const selected = careerForm.querySelector("input:checked");
    if (!selected || !confirm) return;
    const isReady = selected.value === "Licenciatura en Administracion";
    confirmTitle.textContent = selected.value;
    confirmText.textContent = isReady
      ? "Recorrido completo disponible. Podes continuar al panel academico."
      : "Esta carrera esta visible, pero el recorrido completo todavia no esta habilitado.";
    confirmButton.disabled = !isReady;
    confirmButton.textContent = isReady ? "Continuar" : "Proximamente";
    confirm.classList.add("show");
    confirm.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };

  careerForm.addEventListener("change", paintSelection);

  careerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const selected = careerForm.querySelector("input:checked")?.value;
    if (selected !== "Licenciatura en Administracion") {
      const message = document.querySelector("[data-message]");
      if (message) {
        message.textContent = "Para continuar, selecciona Licenciatura en Administracion.";
        message.classList.add("show");
      }
      return;
    }
    localStorage.setItem("nexoCareer", selected);
    window.location.href = "dashboard.html";
  });
}

function defaultProgress() {
  return {
    totalPoints: 0,
    completedChallenges: 0,
    completedDiagnostics: 0,
    streak: 1,
    studyMinutes: 0,
    subjects: {}
  };
}

function getProgress() {
  try {
    return { ...defaultProgress(), ...JSON.parse(localStorage.getItem(progressKey) || "{}") };
  } catch {
    return defaultProgress();
  }
}

function saveProgress(progress) {
  localStorage.setItem(progressKey, JSON.stringify(progress));
}

function normalizeText(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function slugFromSubjectName(value) {
  const normalized = normalizeText(value);
  if (normalized.includes("admin")) return "administracion";
  if (normalized.includes("economia")) return "economia";
  if (normalized.includes("contabilidad")) return "contabilidad";
  return null;
}

function subjectNamesForSlug(slug) {
  const names = {
    administracion: ["Administracion I", "Administración I"],
    economia: ["Introduccion a la Economia", "Introducción a la Economía"],
    contabilidad: ["Contabilidad I"]
  };
  return names[slug] || [subjects[slug]?.name].filter(Boolean);
}

function ensureSubjectProgress(progress, slug) {
  if (!progress.subjects) progress.subjects = {};
  if (!progress.subjects[slug]) {
    progress.subjects[slug] = {
      points: 0,
      completedBlocks: [],
      completedReviewBlocks: [],
      challengeRound: 0,
      diagnosticScore: null,
      lastScore: null,
      correctAnswers: 0,
      wrongAnswers: 0
    };
  }
  if (!progress.subjects[slug].completedReviewBlocks) progress.subjects[slug].completedReviewBlocks = [];
  if (typeof progress.subjects[slug].challengeRound !== "number") progress.subjects[slug].challengeRound = 0;
  if (typeof progress.subjects[slug].correctAnswers !== "number") progress.subjects[slug].correctAnswers = 0;
  if (typeof progress.subjects[slug].wrongAnswers !== "number") progress.subjects[slug].wrongAnswers = 0;
  return progress.subjects[slug];
}

async function hydrateUserProgress() {
  const session = await currentSession();
  const supabase = window.nexoSupabase;
  if (!session?.user || !supabase) return;

  dashboardUserProgressUnavailable = false;
  const { data, error } = await supabase
    .from("user_progress")
    .select("subject,total_points,completed_challenges,correct_answers,wrong_answers,streak,last_activity_at")
    .eq("user_id", session.user.id);

  if (error) {
    dashboardHasUserProgress = false;
    dashboardUserProgressUnavailable = true;
    return;
  }

  if (!Array.isArray(data) || !data.length) {
    dashboardHasUserProgress = false;
    return;
  }

  dashboardHasUserProgress = true;

  const progress = getProgress();
  progress.totalPoints = 0;
  progress.completedChallenges = 0;
  progress.studyMinutes = 0;
  progress.streak = 1;

  data.forEach((row) => {
    const slug = subjects[row.subject] ? row.subject : slugFromSubjectName(row.subject);
    if (!slug || !subjects[slug]) return;

    const subjectProgress = ensureSubjectProgress(progress, slug);
    const completedCount = Number(row.completed_challenges || 0);
    const firstRoundTotal = challengeBlocks[slug]?.length || 0;
    const reviewTotal = reinforcementBlocks[slug]?.length || 0;
    const completedFirst = Math.min(completedCount, firstRoundTotal);
    const completedReview = Math.min(Math.max(completedCount - firstRoundTotal, 0), reviewTotal);

    subjectProgress.points = Number(row.total_points || 0);
    subjectProgress.completedBlocks = Array.from({ length: completedFirst }, (_, index) => index);
    subjectProgress.completedReviewBlocks = Array.from({ length: completedReview }, (_, index) => index);
    subjectProgress.challengeRound = completedFirst >= firstRoundTotal && reviewTotal ? 1 : 0;
    subjectProgress.correctAnswers = Number(row.correct_answers || 0);
    subjectProgress.wrongAnswers = Number(row.wrong_answers || 0);
    subjectProgress.lastScore = subjectProgress.lastScore || (row.last_activity_at ? { date: row.last_activity_at } : null);

    progress.totalPoints += subjectProgress.points;
    progress.completedChallenges += completedCount;
    progress.studyMinutes += completedCount * 15;
    progress.streak = Math.max(progress.streak, Number(row.streak || 1));
  });

  saveProgress(progress);
}

async function hydrateDashboardAiUsage() {
  const dashboard = document.querySelector("[data-dashboard]");
  if (!dashboard) return;

  const session = await currentSession();
  const supabase = window.nexoSupabase;
  if (!session?.user || !supabase) return;

  dashboardAiUsageUnavailable = false;
  const { data, error } = await supabase
    .from("ai_usage")
    .select("used_count,limit_count,is_premium")
    .eq("user_id", session.user.id)
    .maybeSingle();

  if (error) {
    dashboardAiUsage = null;
    dashboardAiUsageUnavailable = true;
    return;
  }

  dashboardAiUsage = data || null;
  updatePremiumUi(Boolean(dashboardAiUsage?.is_premium));
}

function updatePremiumUi(isPremium) {
  document.querySelectorAll("[data-premium-badge]").forEach((badge) => {
    badge.hidden = !isPremium;
  });

  document.querySelectorAll("[data-premium-checkout], [data-premium-cta]").forEach((node) => {
    node.hidden = isPremium;
  });
}

function initPremiumCheckout() {
  document.querySelectorAll("[data-premium-checkout]").forEach((button) => {
    button.addEventListener("click", async () => {
      await startPremiumCheckout(button);
    });
  });
}

async function startPremiumCheckout(button = null) {
  const originalText = button?.textContent;
  if (button) {
    button.disabled = true;
    button.textContent = "Abriendo checkout...";
  }

  try {
    const session = await currentSession();
    if (!session?.access_token) {
      throw new Error("premium_login_required");
    }

    const response = await fetch("/api/create-preference", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${session.access_token}`
      }
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok || !data.init_point) throw new Error("premium_checkout_failed");
    window.location.href = data.init_point;
  } catch {
    alert("No se pudo abrir Mercado Pago. Si estás probando en local, verificá MERCADOPAGO_ACCESS_TOKEN o probá desde la versión publicada.");
    if (button) {
      button.disabled = false;
      button.textContent = originalText;
    }
  }
}

async function initPremiumSuccess() {
  const result = document.querySelector("[data-premium-result]");
  if (!result) return;
  return;

  const session = await currentSession();
  const supabase = window.nexoSupabase;
  if (!session?.user || !supabase) {
    result.textContent = "Iniciá sesión para activar Premium en tu cuenta.";
    return;
  }

  const now = new Date().toISOString();
  const { error } = await supabase.from("ai_usage").upsert({
    user_id: session.user.id,
    is_premium: true,
    updated_at: now
  }, { onConflict: "user_id" });

  if (error) {
    result.textContent = "El pago fue aprobado, pero no pudimos activar Premium automáticamente. Contactá soporte.";
    return;
  }

  dashboardAiUsage = { ...(dashboardAiUsage || {}), is_premium: true };
  updatePremiumUi(true);
  result.textContent = "Premium activado correctamente. Ya tenés consultas ilimitadas.";
}

async function initPremiumSuccess() {
  const result = document.querySelector("[data-premium-result]");
  if (!result) return;

  result.textContent = "Verificando pago...";

  const params = new URLSearchParams(window.location.search);
  const paymentId = params.get("payment_id") || params.get("collection_id");
  if (!paymentId) {
    result.textContent = "No pudimos verificar el pago.";
    return;
  }

  try {
    const response = await fetch("/api/confirm-premium", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ payment_id: paymentId })
    });
    const data = await response.json().catch(() => ({}));

    if (response.ok && data.status === "approved") {
      dashboardAiUsage = { ...(dashboardAiUsage || {}), is_premium: true };
      updatePremiumUi(true);
      result.textContent = "Premium activado correctamente.";
      return;
    }

    if (data.status === "not_approved") {
      result.textContent = "El pago todavia no fue aprobado.";
      return;
    }

    result.textContent = data.message || "No pudimos activar Premium. Intenta nuevamente o contacta soporte.";
  } catch {
    result.textContent = "No pudimos activar Premium. Intenta nuevamente o contacta soporte.";
  }
}

function showPremiumModal({ title, text, primary = "Activar Premium", secondary = "Seguir gratis", onSecondary = null }) {
  const backdrop = document.createElement("div");
  backdrop.className = "modal-backdrop";
  backdrop.innerHTML = `
    <article class="card modal-card">
      <h2>${escapeHtml(title)}</h2>
      <p>${escapeHtml(text)}</p>
      <div class="actions">
        <button class="btn btn-primary" type="button" data-modal-premium>${escapeHtml(primary)}</button>
        <button class="btn btn-secondary" type="button" data-modal-close>${escapeHtml(secondary)}</button>
      </div>
    </article>
  `;
  document.body.appendChild(backdrop);

  backdrop.querySelector("[data-modal-close]")?.addEventListener("click", () => {
    backdrop.remove();
    if (typeof onSecondary === "function") onSecondary();
  });

  backdrop.querySelector("[data-modal-premium]")?.addEventListener("click", () => {
    const button = backdrop.querySelector("[data-modal-premium]");
    startPremiumCheckout(button);
  });
}

async function syncSubjectProgress(slug, progress = getProgress()) {
  const session = await currentSession();
  const supabase = window.nexoSupabase;
  if (!session?.user || !supabase || !subjects[slug]) return;

  const subjectProgress = ensureSubjectProgress(progress, slug);
  const completedCount = subjectProgress.completedBlocks.length + subjectProgress.completedReviewBlocks.length;
  const now = new Date().toISOString();

  await supabase.from("user_progress").upsert({
    user_id: session.user.id,
    subject: slug,
    total_points: subjectProgress.points,
    completed_challenges: completedCount,
    correct_answers: subjectProgress.correctAnswers || 0,
    wrong_answers: subjectProgress.wrongAnswers || 0,
    streak: progress.streak || 1,
    last_activity_at: now,
    updated_at: now
  }, { onConflict: "user_id,subject" });
}

function storeDiagnosticResult(slug, score, total) {
  const progress = getProgress();
  const subjectProgress = ensureSubjectProgress(progress, slug);
  if (subjectProgress.diagnosticScore === null) progress.completedDiagnostics += 1;
  subjectProgress.diagnosticScore = { score, total, date: new Date().toISOString() };
  subjectProgress.correctAnswers += score;
  subjectProgress.wrongAnswers += total - score;
  saveProgress(progress);
  syncSubjectProgress(slug, progress);
}

function completeChallengeBlock(slug, roundIndex, blockIndex, score, total) {
  const progress = getProgress();
  const subjectProgress = ensureSubjectProgress(progress, slug);
  const completedKey = roundIndex === 0 ? "completedBlocks" : "completedReviewBlocks";
  const alreadyCompleted = subjectProgress[completedKey].includes(blockIndex);
  const points = score * 10 + (score === total ? 10 : 0);

  if (!alreadyCompleted) {
    subjectProgress[completedKey].push(blockIndex);
    subjectProgress.points += points;
    subjectProgress.correctAnswers += score;
    subjectProgress.wrongAnswers += total - score;
    progress.totalPoints += points;
    progress.completedChallenges += 1;
    progress.studyMinutes += 15;
  }

  subjectProgress.lastScore = { score, total, points: alreadyCompleted ? 0 : points, date: new Date().toISOString() };
  saveProgress(progress);
  syncSubjectProgress(slug, progress);
  return { points: alreadyCompleted ? 0 : points, alreadyCompleted };
}

function subjectCompletion(slug) {
  const progress = getProgress();
  const subjectProgress = ensureSubjectProgress(progress, slug);
  const totalBlocks = (challengeBlocks[slug]?.length || 0) + (reinforcementBlocks[slug]?.length || 0);
  const completed = subjectProgress.completedBlocks.length + subjectProgress.completedReviewBlocks.length;
  return Math.round((completed / Math.max(totalBlocks, 1)) * 100);
}

function renderDashboard() {
  const dashboard = document.querySelector("[data-dashboard]");
  if (!dashboard) return;

  const progress = getProgress();
  const studentName = userDisplayName(activeSession?.user);
  const completedBlocks = Object.keys(subjects).reduce((total, slug) => {
    const subjectProgress = ensureSubjectProgress(progress, slug);
    return total + subjectProgress.completedBlocks.length + subjectProgress.completedReviewBlocks.length;
  }, 0);
  const totalBlocks = Object.keys(subjects).reduce((total, slug) => total + challengeBlocks[slug].length + reinforcementBlocks[slug].length, 0);
  const general = totalBlocks ? Math.round((completedBlocks / totalBlocks) * 100) : 0;
  const dashboardStreak = dashboardHasUserProgress && Number.isFinite(Number(progress.streak)) ? Number(progress.streak) : 0;

  setText("[data-student-name]", studentName);
  setText("[data-total-points]", `${progress.totalPoints} pts`);
  setText("[data-general-progress]", `${general}%`);
  setText("[data-streak]", `${dashboardStreak} día${dashboardStreak === 1 ? "" : "s"}`);
  setText("[data-dashboard-streak-pill]", dashboardUserProgressUnavailable ? "Racha activa · sin datos" : `Racha activa · ${dashboardStreak} día${dashboardStreak === 1 ? "" : "s"}`);
  setText("[data-dashboard-points-pill]", `Puntos acumulados · ${progress.totalPoints} pts`);
  setText("[data-dashboard-ai-pill]", dashboardAiUsageText(dashboardAiUsage, dashboardAiUsageUnavailable));
  setText("[data-completed-challenges]", String(progress.completedChallenges));
  setText("[data-study-hours]", `${Math.floor(progress.studyMinutes / 60)} h ${progress.studyMinutes % 60} min`);
  setProgress("[data-general-bar]", general);
  setProgress("[data-points-bar]", Math.min(progress.totalPoints / 10, 100));
  setProgress("[data-streak-bar]", Math.min(dashboardStreak * 10, 100));
  setProgress("[data-challenges-bar]", Math.min(progress.completedChallenges * 12, 100));
  setProgress("[data-hours-bar]", Math.min(progress.studyMinutes / 3, 100));
  renderDashboardNextAction();

  Object.keys(subjects).forEach((slug) => {
    const completion = subjectCompletion(slug);
    setText(`[data-subject-progress="${slug}"]`, `${completion}% completado`);
    setProgress(`[data-subject-bar="${slug}"]`, completion);
  });
}

function renderDashboardNextAction() {
  const title = document.querySelector("[data-next-action-title]");
  const copy = document.querySelector("[data-next-action-copy]");
  const link = document.querySelector("[data-next-action-link]");
  if (!title || !copy || !link) return;

  const nextSlug = nextPracticeSubjectSlug();
  const subject = subjects[nextSlug];
  const completion = subjectCompletion(nextSlug);
  const publicSlug = publicSubjectSlug(nextSlug);

  const titleBySlug = {
    administracion: `Completar el siguiente bloque de ${subject.name}`,
    economia: `Continuar con ${subject.name}`,
    contabilidad: `Reforzar ${subject.name}`
  };

  title.textContent = titleBySlug[nextSlug] || `Continuar con ${subject.name}`;
  copy.textContent = dashboardHasUserProgress
    ? `${subject.name} registra ${completion}% completado. Te conviene continuar por la materia con menor avance.`
    : "Sin progreso previo registrado, empezá por Administración I para iniciar el recorrido.";
  link.textContent = "Continuar desafío";
  link.setAttribute("href", `desafio.html?materia=${publicSlug}`);
}

function nextPracticeSubjectSlug() {
  if (!dashboardHasUserProgress) return "administracion";

  const statePriority = {
    economia: 0,
    administracion: 1,
    contabilidad: 2
  };

  return ["administracion", "economia", "contabilidad"]
    .map((slug) => ({ slug, completion: subjectCompletion(slug), priority: statePriority[slug] ?? 9 }))
    .sort((a, b) => a.completion - b.completion || a.priority - b.priority)[0]?.slug || "administracion";
}

function dashboardAiUsageText(usage, unavailable = false) {
  if (unavailable) return "IA · sin datos";
  if (usage?.is_premium) return "Premium activo · IA ilimitada";
  if (!usage) return "IA · 4 restantes";

  const limit = Number.isFinite(Number(usage.limit_count)) ? Number(usage.limit_count) : 4;
  const used = Number.isFinite(Number(usage.used_count)) ? Number(usage.used_count) : 0;
  const remaining = Math.max(0, limit - used);
  if (remaining === 0) return "Límite IA alcanzado";
  return `IA · ${remaining} restante${remaining === 1 ? "" : "s"}`;
}

function renderProgressPage() {
  const progressPage = document.querySelector("[data-progress-page]");
  if (!progressPage) return;

  const progress = getProgress();
  const subjectEntries = Object.keys(subjects).map((slug) => [slug, subjectCompletion(slug)]);
  const average = subjectEntries.length
    ? Math.round(subjectEntries.reduce((total, [, value]) => total + value, 0) / subjectEntries.length)
    : 0;
  const level = Math.max(1, Math.floor(progress.totalPoints / 120) + 1);

  setText("[data-level]", `Nivel ${level} - Explorador academico`);
  setText("[data-progress-total]", `${average}%`);
  setText("[data-points-total]", `${progress.totalPoints} pts`);
  setText("[data-progress-streak]", `${progress.streak} dia${progress.streak === 1 ? "" : "s"}`);
  setProgress("[data-level-bar]", Math.min((progress.totalPoints % 120) / 1.2, 100));
  setProgress("[data-progress-total-bar]", average);
  setProgress("[data-points-total-bar]", Math.min(progress.totalPoints / 10, 100));
  setProgress("[data-progress-streak-bar]", Math.min(progress.streak * 10, 100));

  subjectEntries.forEach(([slug, completion]) => {
    const subjectProgress = ensureSubjectProgress(progress, slug);
    setText(`[data-progress-copy="${slug}"]`, progressCopy(slug, subjectProgress));
    setProgress(`[data-progress-bar="${slug}"]`, completion);
  });
}

function progressCopy(slug, subjectProgress) {
  const blocks = subjectProgress.completedBlocks.length + subjectProgress.completedReviewBlocks.length;
  const total = challengeBlocks[slug].length + reinforcementBlocks[slug].length;
  const diagnosis = subjectProgress.diagnosticScore
    ? `Diagnostico ${subjectProgress.diagnosticScore.score}/${subjectProgress.diagnosticScore.total}.`
    : "Diagnostico pendiente.";
  return `${diagnosis} ${blocks}/${total} bloques de aprendizaje completados.`;
}

function questionFromRow(row) {
  const answerIndex = { A: 0, B: 1, C: 2 }[String(row.correct_option || "").trim().toUpperCase()];
  if (answerIndex === undefined) return null;
  return {
    type: "choice",
    text: row.question_text,
    options: [row.option_a, row.option_b, row.option_c],
    answer: answerIndex,
    explanation: row.explanation || ""
  };
}

function buildBlocksFromQuestions(slug, questions, roundIndex) {
  const size = 3;
  const start = roundIndex === 0 ? 0 : 9;
  const maxBlocks = roundIndex === 0 ? 3 : 2;
  const labels = roundIndex === 0 ? ["Base", "Practica", "Integracion"] : ["Refuerzo", "Caso"];

  return Array.from({ length: maxBlocks }, (_, index) => {
    const blockQuestions = questions.slice(start + index * size, start + (index + 1) * size);
    if (blockQuestions.length < size) return null;
    return {
      title: `${subjects[slug].short}: bloque ${index + 1}`,
      label: labels[index] || `Bloque ${index + 1}`,
      questions: blockQuestions
    };
  }).filter(Boolean);
}

async function hydrateChallengeQuestions() {
  const challenge = document.querySelector("[data-challenge]");
  const supabase = window.nexoSupabase;
  if (!challenge || !supabase) return;

  const slug = currentSubject();
  const { data, error } = await supabase
    .from("questions")
    .select("career,subject,difficulty,question_text,option_a,option_b,option_c,correct_option,explanation,is_active")
    .eq("is_active", true)
    .in("subject", subjectNamesForSlug(slug))
    .order("created_at", { ascending: true });

  if (error || !Array.isArray(data)) return;

  const remoteQuestions = data
    .filter((row) => slugFromSubjectName(row.subject) === slug)
    .map(questionFromRow)
    .filter(Boolean);

  if (remoteQuestions.length < 3) return;

  const firstRound = buildBlocksFromQuestions(slug, remoteQuestions, 0);
  const secondRound = buildBlocksFromQuestions(slug, remoteQuestions, 1);

  if (firstRound.length) challengeBlocks[slug] = firstRound;
  if (secondRound.length) reinforcementBlocks[slug] = secondRound;
}

function setText(selector, value) {
  const node = document.querySelector(selector);
  if (node) node.textContent = value;
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function setProgress(selector, value) {
  const node = document.querySelector(selector);
  if (node) node.style.width = `${Math.max(0, Math.min(100, value))}%`;
}

function renderSubjectPage() {
  const subjectPage = document.querySelector("[data-subject-page]");
  const isSubjectIndex = Boolean(subjectPage) && !hasSubjectParam();

  if (subjectPage) {
    document.querySelectorAll("[data-subject-index]").forEach((node) => {
      node.hidden = !isSubjectIndex;
    });
    document.querySelectorAll("[data-subject-detail]").forEach((node) => {
      node.hidden = isSubjectIndex;
    });
  }

  if (isSubjectIndex) {
    renderSubjectIndex();
    return;
  }

  const slug = currentSubject();
  const subject = subjects[slug];
  if (subjectPage) document.title = `${subject.name} | NEXO`;
  document.querySelectorAll("[data-subject-name]").forEach((node) => {
    node.textContent = subject.name;
  });
  document.querySelectorAll("[data-subject-description]").forEach((node) => {
    node.textContent = subject.description;
  });
  document.querySelectorAll("[data-subject-source]").forEach((node) => {
    node.textContent = subject.source;
  });
  document.querySelectorAll("[data-bibliography-note]").forEach((node) => {
    node.textContent = bibliographyNote;
  });
  document.querySelectorAll("[data-subject-link]").forEach((node) => {
    const page = node.dataset.subjectLink;
    node.setAttribute("href", subjectUrl(page, slug));
  });
}

function renderSubjectIndex() {
  const list = document.querySelector("[data-subject-index-list]");
  if (!list) return;

  document.title = "Materias | NEXO";
  const progress = getProgress();
  const subjectStates = {
    administracion: "Activa",
    economia: "En curso",
    contabilidad: "Pendiente"
  };

  list.innerHTML = Object.keys(subjects).map((slug) => {
    const completion = subjectCompletion(slug);
    const subjectProgress = ensureSubjectProgress(progress, slug);
    const completedBlocks = subjectProgress.completedBlocks.length + subjectProgress.completedReviewBlocks.length;
    const totalBlocks = (challengeBlocks[slug]?.length || 0) + (reinforcementBlocks[slug]?.length || 0);
    const state = subjectStates[slug] || "En desarrollo";
    const detailUrl = subjectUrl("materia.html", slug);
    const challengeUrl = subjectUrl("desafio.html", slug);
    const progressCopy = totalBlocks
      ? `${completion}% completado · ${completedBlocks}/${totalBlocks} bloques`
      : "Disponible próximamente";

    return `
      <article class="card subject-index-card">
        <span class="badge">${state}</span>
        <h3>${subjects[slug].name}</h3>
        <p>${subjects[slug].description}</p>
        <strong class="subject-index-progress">${progressCopy}</strong>
        <div class="progress"><span style="width:${completion}%"></span></div>
        <div class="actions">
          <a class="btn btn-secondary" href="${detailUrl}">Ver materia</a>
          <a class="btn btn-primary" href="${challengeUrl}">Continuar desafío</a>
        </div>
      </article>
    `;
  }).join("");
}

function renderDiagnostic() {
  const form = document.querySelector("[data-diagnostic]");
  if (!form) return;

  const slug = currentSubject();
  const subject = subjects[slug];
  const list = document.querySelector("[data-question-list]");
  const submitButton = form.querySelector('button[type="submit"]');
  const exitButton = document.querySelector("[data-diagnostic-exit]");
  if (list) list.innerHTML = subject.questions.map((question, index) => questionMarkup(question, index, "diagnostic")).join("");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const score = scoreQuiz(form, subject.questions, "diagnostic");
    const total = subject.questions.length;
    const misses = diagnosticMisses(form, subject.questions, "diagnostic");
    const result = document.querySelector("[data-result]");
    if (result) {
      const perfect = score === total;
      const high = score >= Math.ceil(total * 0.8);
      const message = perfect
        ? `Excelente diagnostico en ${subject.name}: respondiste ${score}/${total} correctamente. Ya estas listo para pasar al desafio de practica.`
        : high
          ? `Muy buen resultado en ${subject.name}: ${score}/${total} correctas. Te conviene repasar los puntos finos y seguir con un desafio.`
          : `${subject.diagnosisResult} Resultado: ${score}/${total} respuestas correctas.`;
      result.textContent = message;
      result.classList.add("show");
    }
    renderDiagnosticFeedback(subject.questions, misses);
    storeDiagnosticResult(slug, score, total);
    submitButton.disabled = true;
    submitButton.textContent = "Diagnostico finalizado";
    if (exitButton) exitButton.textContent = "Volver a la materia";
    const actions = document.querySelector("[data-result-actions]");
    if (actions) actions.classList.add("show");
    result?.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}

function diagnosticMisses(scope, questions, prefix) {
  return questions.reduce((misses, question, index) => {
    const selected = scope.querySelector(`input[name="${prefix}-${index}"]:checked`);
    const value = question.type === "truefalse" ? selected?.value === "true" : Number(selected?.value);
    if (!selected || value !== question.answer) misses.push({ question, index, selected: selected?.value });
    return misses;
  }, []);
}

function renderDiagnosticFeedback(questions, misses) {
  const feedback = document.querySelector("[data-diagnostic-feedback]");
  if (!feedback) return;
  const missedIndexes = new Set(misses.map((item) => item.index));
  feedback.innerHTML = `
    <h3>Revision del diagnostico</h3>
    <div class="feedback-list">
      ${questions.map((question, index) => {
        const correct = !missedIndexes.has(index);
        return `<div class="feedback-item ${correct ? "correct" : "wrong"}">
          <strong>Pregunta ${index + 1}</strong>
          <span>${correct ? "Correcta" : "A revisar"}</span>
          <p>${question.text}</p>
          <p><b>Respuesta correcta:</b> ${answerText(question)}</p>
        </div>`;
      }).join("")}
    </div>
    <p class="feedback-note">${misses.length ? "Te conviene repasar las preguntas marcadas con el Tutor IA o pasar al test diario para practicar con nuevos bloques." : "Completaste el diagnostico sin errores. Podes avanzar al test diario para sumar puntos."}</p>
  `;
  feedback.classList.add("show");
}

function answerText(question) {
  if (question.type === "truefalse") return question.answer ? "Verdadero" : "Falso";
  return question.options[question.answer];
}

function selectedAnswerText(scope, question, index, prefix) {
  const selected = scope.querySelector(`input[name="${prefix}-${index}"]:checked`);
  if (!selected) return "Sin responder";
  if (question.type === "truefalse") return selected.value === "true" ? "Verdadero" : "Falso";
  return question.options[Number(selected.value)] || "Sin responder";
}

function hasSelectedAnswer(scope, index, prefix) {
  return Boolean(scope.querySelector(`input[name="${prefix}-${index}"]:checked`));
}

function selectedAnswerIsCorrect(scope, question, index, prefix) {
  const selected = scope.querySelector(`input[name="${prefix}-${index}"]:checked`);
  if (!selected) return false;
  const value = question.type === "truefalse" ? selected.value === "true" : Number(selected.value);
  return value === question.answer;
}

function firstUnansweredQuestion(scope, questions, prefix) {
  return questions.findIndex((_, index) => !hasSelectedAnswer(scope, index, prefix));
}

function renderAiErrorHelp(scope, questions, prefix, subjectName) {
  scope.querySelectorAll(".ai-error-help").forEach((node) => node.remove());
  const renderedHelp = [];

  questions.forEach((question, index) => {
    const questionNode = scope.querySelector(`[data-question-index="${index}"]`);
    if (!questionNode || !hasSelectedAnswer(scope, index, prefix) || selectedAnswerIsCorrect(scope, question, index, prefix)) return;

    const help = document.createElement("div");
    help.className = "ai-error-help";
    help.innerHTML = `
      <button class="btn btn-secondary" type="button" data-ai-error-button>Explicame mi error con IA</button>
      <div class="ai-error-response" data-ai-error-response></div>
    `;
    questionNode.appendChild(help);
    renderedHelp.push(help);

    const button = help.querySelector("[data-ai-error-button]");
    const response = help.querySelector("[data-ai-error-response]");

    button.addEventListener("click", async () => {
      button.disabled = true;
      button.textContent = "Generando explicacion...";
      response.textContent = "";
      response.classList.remove("show", "error");

      try {
        const { data: sessionData } = await window.nexoSupabase.auth.getSession();
        const accessToken = sessionData?.session?.access_token;
        if (!accessToken) throw new Error("Tenes que iniciar sesion para usar el Tutor IA.");

        const result = await fetch("/api/explain-error", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${accessToken}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            subject: subjectName,
            question_text: question.text,
            selected_answer_text: selectedAnswerText(scope, question, index, prefix),
            correct_answer_text: answerText(question),
            official_explanation: question.explanation || answerText(question)
          })
        });
        const data = await result.json();
        if (data.limitReached) {
          response.textContent = data.message || "Llegaste al límite gratuito de explicaciones IA.";
          response.classList.add("show");
          button.textContent = "Limite gratuito alcanzado";
          showPremiumModal({
            title: "Llegaste al límite gratuito de explicaciones IA",
            text: "Con NEXO Premium podés recibir explicaciones ilimitadas y seguir practicando sin interrupciones.",
            primary: "Activar Premium",
            secondary: "Seguir sin IA"
          });
          return;
        }
        if (!result.ok || !data.explanation) throw new Error(data.error || "No se pudo generar la explicacion.");
        const remainingCopy = typeof data.remainingUses === "number"
          ? `<p class="ai-usage-note">Te quedan ${data.remainingUses} explicaciones IA gratuitas.</p>`
          : data.isPremium
            ? '<p class="ai-usage-note">NEXO Premium activo.</p>'
            : "";
        response.innerHTML = `<p>${escapeHtml(data.explanation)}</p>${remainingCopy}`;
        response.classList.add("show");
        button.textContent = "Explicacion generada";
      } catch (error) {
        response.textContent = error?.message || "No se pudo generar la explicacion ahora. Revisa la explicacion oficial e intenta nuevamente.";
        response.classList.add("show", "error");
        button.disabled = false;
        button.textContent = "Reintentar explicacion con IA";
      }
    });
  });

  return renderedHelp;
}

function renderChallenge() {
  const challenge = document.querySelector("[data-challenge]");
  if (!challenge) return;

  const slug = currentSubject();
  const subject = subjects[slug];
  const rounds = [challengeBlocks[slug] || [], reinforcementBlocks[slug] || []];
  const progress = getProgress();
  const subjectProgress = ensureSubjectProgress(progress, slug);
  let roundIndex = Math.min(subjectProgress.challengeRound || 0, rounds.length - 1);
  let blocks = rounds[roundIndex];
  let completedKey = roundIndex === 0 ? "completedBlocks" : "completedReviewBlocks";
  let completedBlocks = subjectProgress[completedKey];
  let blockIndex = Math.min(completedBlocks.length, blocks.length - 1);
  let activeBlock = blocks[blockIndex];
  let nextMode = "block";
  document.querySelector("[data-challenge-title]").textContent = subject.challenge.title;
  document.querySelector("[data-challenge-prompt]").textContent = subject.challenge.prompt;
  const list = document.querySelector("[data-challenge-list]");
  const map = document.querySelector("[data-learning-map]");
  const blockName = document.querySelector("[data-block-name]");
  const blockProgress = document.querySelector("[data-block-progress]");
  const livePoints = document.querySelector("[data-live-points]");
  const pomodoro = initPomodoro();

  const renderMap = () => {
    if (!map) return;
    map.innerHTML = blocks.map((block, index) => {
      const done = completedBlocks.includes(index);
      const active = index === blockIndex && !done;
      const locked = index > completedBlocks.length;
      const className = ["map-node", done ? "done" : "", active ? "active" : "", locked ? "locked" : ""].filter(Boolean).join(" ");
      const state = done ? "Completado" : active ? "En curso" : locked ? "Bloqueado" : "Disponible";
      return `<div class="${className}"><span>${index + 1}</span><div><strong>${block.label}</strong><small>${state}</small></div></div>`;
    }).join("");
  };

  const renderBlock = () => {
    blocks = rounds[roundIndex];
    completedKey = roundIndex === 0 ? "completedBlocks" : "completedReviewBlocks";
    completedBlocks = subjectProgress[completedKey];
    activeBlock = blocks[blockIndex];
    list.innerHTML = activeBlock.questions.map((question, index) => questionMarkup(question, index, "challenge")).join("");
    if (blockName) blockName.textContent = activeBlock.title;
    if (blockProgress) blockProgress.textContent = `Ronda ${roundIndex + 1} - Bloque ${blockIndex + 1} de ${blocks.length}`;
    if (livePoints) livePoints.textContent = `${getProgress().totalPoints} pts`;
    renderMap();
  };
  renderBlock();

  const finishButton = document.querySelector("[data-finish-challenge]");
  const nextButton = document.querySelector("[data-next-challenge]");
  const reward = document.querySelector("[data-reward]");

  if (completedBlocks.length >= blocks.length && roundIndex === rounds.length - 1) {
    finishButton.textContent = "Recorrido completado";
    finishButton.disabled = true;
    reward.textContent = "Completaste la segunda ronda de aprendizaje. El recorrido queda finalizado con tus puntos acumulados guardados.";
    reward.classList.add("show");
  } else if (completedBlocks.length >= blocks.length && roundIndex === 0) {
    nextMode = "round";
    finishButton.textContent = "Primera ronda completada";
    finishButton.disabled = true;
    nextButton.textContent = "Iniciar segunda ronda";
    nextButton.classList.add("show");
    reward.textContent = `Primera ronda completa. Mantenes ${getProgress().totalPoints} pts acumulados y podes iniciar una nueva seccion con preguntas distintas.`;
    reward.classList.add("show");
  }

  finishButton.addEventListener("click", () => {
    const unansweredIndex = firstUnansweredQuestion(challenge, activeBlock.questions, "challenge");
    if (unansweredIndex !== -1) {
      const unansweredNode = challenge.querySelector(`[data-question-index="${unansweredIndex}"]`);
      reward.textContent = `Te falta responder la pregunta ${unansweredIndex + 1} antes de finalizar el bloque.`;
      reward.classList.add("show");
      unansweredNode?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    const score = scoreQuiz(challenge, activeBlock.questions, "challenge");
    const total = activeBlock.questions.length;
    const award = completeChallengeBlock(slug, roundIndex, blockIndex, score, total);
    const aiErrorHelp = renderAiErrorHelp(challenge, activeBlock.questions, "challenge", subject.name);
    const updatedProgress = getProgress();
    const updatedSubject = ensureSubjectProgress(updatedProgress, slug);
    subjectProgress.completedBlocks = updatedSubject.completedBlocks;
    subjectProgress.completedReviewBlocks = updatedSubject.completedReviewBlocks;
    completedBlocks = subjectProgress[completedKey];
    const hasNextBlock = completedBlocks.length < blocks.length;
    const hasSecondRound = roundIndex === 0 && reinforcementBlocks[slug]?.length;
    const pointsText = award.alreadyCompleted
      ? "Este bloque ya estaba completado; no se duplicaron puntos."
      : `Sumaste +${award.points} puntos.`;
    reward.textContent = `${activeBlock.title}: ${score}/${total} respuestas correctas. ${pointsText}`;
    if (aiErrorHelp.length) {
      reward.textContent += " Revisa el boton de IA debajo de cada pregunta incorrecta.";
    }
    reward.classList.add("show");
    pomodoro.stop();
    finishButton.textContent = "Bloque completado";
    finishButton.disabled = true;
    if (livePoints) livePoints.textContent = `${updatedProgress.totalPoints} pts`;
    renderMap();
    if (hasNextBlock) {
      nextMode = "block";
      nextButton.textContent = "Continuar al siguiente bloque";
      nextButton.classList.add("show");
    } else if (hasSecondRound) {
      nextMode = "round";
      nextButton.textContent = "Iniciar segunda ronda";
      nextButton.classList.add("show");
      reward.textContent += ` Primera ronda completa. Tus ${updatedProgress.totalPoints} pts quedan acumulados para la nueva seccion.`;
    } else {
      nextButton.classList.remove("show");
      reward.textContent += " Segunda ronda completada. Recorrido del desafio finalizado.";
    }
    const firstAiButton = aiErrorHelp[0]?.querySelector("[data-ai-error-button]");
    (firstAiButton || reward).scrollIntoView({ behavior: "smooth", block: "center" });
  });

  nextButton.addEventListener("click", () => {
    if (nextMode === "round") {
      roundIndex = 1;
      subjectProgress.challengeRound = 1;
      const progressToSave = getProgress();
      ensureSubjectProgress(progressToSave, slug).challengeRound = 1;
      saveProgress(progressToSave);
      blockIndex = 0;
    } else {
      blockIndex = Math.min(blockIndex + 1, blocks.length - 1);
    }
    renderBlock();
    pomodoro.reset();
    reward.classList.remove("show");
    nextButton.classList.remove("show");
    finishButton.disabled = false;
    finishButton.textContent = "Finalizar bloque";
    list.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function questionMarkup(question, index, prefix) {
  if (question.type === "truefalse") {
    return `
      <div class="question" data-question-index="${index}">
        <h3>Pregunta ${index + 1}: ${question.text}</h3>
        <div class="options">
          <label class="option"><input type="radio" name="${prefix}-${index}" value="true" required> Verdadero</label>
          <label class="option"><input type="radio" name="${prefix}-${index}" value="false" required> Falso</label>
        </div>
      </div>`;
  }

  return `
    <div class="question" data-question-index="${index}">
      <h3>Pregunta ${index + 1}: ${question.text}</h3>
      <div class="options">
        ${question.options.map((option, optionIndex) => `<label class="option"><input type="radio" name="${prefix}-${index}" value="${optionIndex}" required> ${option}</label>`).join("")}
      </div>
    </div>`;
}

function scoreQuiz(scope, questions, prefix) {
  return questions.reduce((total, question, index) => {
    const selected = scope.querySelector(`input[name="${prefix}-${index}"]:checked`);
    if (!selected) return total;
    const value = question.type === "truefalse" ? selected.value === "true" : Number(selected.value);
    return value === question.answer ? total + 1 : total;
  }, 0);
}

function initPomodoro() {
  const start = document.querySelector("[data-pomodoro-start]");
  const reset = document.querySelector("[data-pomodoro-reset]");
  const display = document.querySelector("[data-pomodoro-display]");
  let seconds = 15 * 60;
  let timer = null;

  const paint = () => {
    const min = String(Math.floor(seconds / 60)).padStart(2, "0");
    const sec = String(seconds % 60).padStart(2, "0");
    display.textContent = `${min}:${sec}`;
  };

  start.addEventListener("click", () => {
    if (timer) return;
    start.textContent = "En curso";
    timer = setInterval(() => {
      seconds = Math.max(0, seconds - 1);
      paint();
      if (seconds === 0) {
        clearInterval(timer);
        timer = null;
        start.textContent = "Reiniciar foco";
      }
    }, 1000);
  });

  reset.addEventListener("click", () => {
    resetTimer();
  });

  const stopTimer = () => {
    clearInterval(timer);
    timer = null;
    start.textContent = seconds === 0 ? "Reiniciar foco" : "Continuar foco";
  };

  const resetTimer = () => {
    clearInterval(timer);
    timer = null;
    seconds = 15 * 60;
    start.textContent = "Iniciar foco";
    paint();
  };

  paint();
  return { stop: stopTimer, reset: resetTimer };
}

async function renderTutor() {
  const chatForm = document.querySelector("[data-chat-form]");
  if (!chatForm) return;

  await initAcademicAssistant();
  await hydrateTutorChatUsage();

  const input = chatForm.querySelector("input");
  const submit = chatForm.querySelector("button[type='submit']");
  const practiceButton = chatForm.querySelector("[data-practice-exercise]");
  const chat = document.querySelector("[data-chat]");
  const slug = currentSubject();
  const subject = subjects[slug];
  document.querySelector("[data-tutor-intro]").textContent = `Estoy usando como base ${subject.source} y la bibliografia actualizada de la Facultad de Ciencias Economicas.`;

  chatForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!input.value.trim()) return;

    const question = input.value.trim();
    appendBubble(chat, question, "user");
    tutorChatHistory.push({ role: "user", content: question });
    input.value = "";

    if (submit) submit.disabled = true;
    const loadingBubble = appendBubble(chat, "Pensando una respuesta breve...", "ai");

    try {
      const result = await requestTutorChatAnswer(question);
      loadingBubble.textContent = result.answer;
      tutorChatHistory.push({ role: "assistant", content: result.answer });
      tutorChatHistory = tutorChatHistory.slice(-12);
      updateTutorChatUsage(result);
    } catch (error) {
      loadingBubble.textContent = error?.message || "No pude responder ahora. Probá de nuevo en un momento.";
      loadingBubble.classList.add("error");
    } finally {
      if (submit) submit.disabled = false;
      input.focus();
    }
  });
}

async function hydrateTutorChatUsage() {
  try {
    const result = await tutorChatFetch("GET");
    updateTutorChatUsage(result);
  } catch {
    setText("[data-tutor-chat-usage]", "Consultas Tutor IA restantes: --");
  }
}

async function requestTutorChatAnswer(message) {
  const result = await tutorChatFetch("POST", {
    message,
    history: tutorChatHistory.slice(0, -1).slice(-6),
    academic_context: window.nexoTutorExamContext || null
  });

  if (result.limitReached) {
    updateTutorChatUsage(result);
    showPremiumModal({
      title: "Llegaste al límite gratuito del Tutor IA",
      text: "Activá Premium para continuar con consultas ilimitadas, ejercicios de práctica y recomendaciones personalizadas.",
      primary: "Activar Premium",
      secondary: "Seguir gratis"
    });
    throw new Error(result.message || "Alcanzaste el limite gratuito del Chat Tutor IA. Activar Premium habilitara consultas ilimitadas.");
  }

  if (!result.answer) throw new Error(result.error || "El Tutor IA no devolvio una respuesta.");
  return result;
}

async function tutorChatFetch(method, body) {
  const session = await currentSession();
  if (!session?.access_token) throw new Error("Tenes que iniciar sesion para usar el Chat Tutor IA.");

  const response = await fetch("/api/tutor-chat", {
    method,
    headers: {
      "Authorization": `Bearer ${session.access_token}`,
      ...(body ? { "Content-Type": "application/json" } : {})
    },
    body: body ? JSON.stringify(body) : undefined
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || "No se pudo conectar con el Chat Tutor IA.");
  return data;
}

function updateTutorChatUsage(usage) {
  const target = document.querySelector("[data-tutor-chat-usage]");
  if (!target || !usage) return;

  if (usage.isPremium) {
    target.textContent = "Consultas Tutor IA: Ilimitadas";
    updatePremiumUi(true);
    return;
  }

  updatePremiumUi(false);
  const remaining = Number.isFinite(Number(usage.remainingUses)) ? Number(usage.remainingUses) : 0;
  target.textContent = `Consultas Tutor IA restantes: ${remaining}`;
}

async function initAcademicAssistant() {
  const assistant = document.querySelector(".academic-assistant");
  if (!assistant) return;

  const form = assistant.querySelector("[data-exam-goal-form]");
  const emptyState = assistant.querySelector("[data-exam-empty-state]");
  const cards = assistant.querySelector("[data-academic-cards]");
  const list = assistant.querySelector("[data-exam-goal-list]");
  const toggleButtons = assistant.querySelectorAll("[data-exam-form-toggle]");
  const cancelButton = assistant.querySelector("[data-exam-form-cancel]");
  const message = assistant.querySelector("[data-exam-goal-message]");
  const submit = form?.querySelector("[data-exam-submit]");
  const idInput = form?.querySelector("[data-exam-goal-id]");
  const subjectSelect = form?.querySelector("[data-exam-subject-select]");
  const topicOptions = form?.querySelector("[data-exam-topic-options]");
  const dateInput = form?.querySelector("[name='exam_date']");

  if (subjectSelect) {
    renderExamSubjectOptions(subjectSelect);
    subjectSelect.value = currentSubject();
    await renderExamTopicOptions(topicOptions, subjectSelect.value);
    subjectSelect.addEventListener("change", async () => {
      await renderExamTopicOptions(topicOptions, subjectSelect.value);
    });
  }
  if (dateInput) dateInput.min = todayDateString();

  toggleButtons.forEach((button) => {
    button.addEventListener("click", async () => {
      await resetExamGoalForm(form);
      if (form) form.hidden = false;
      if (emptyState) emptyState.hidden = true;
      hideExamGoalMessage(message);
      subjectSelect?.focus();
    });
  });

  cancelButton?.addEventListener("click", async () => {
    await resetExamGoalForm(form);
    if (form) form.hidden = true;
    if (emptyState && cards?.hidden) emptyState.hidden = false;
    hideExamGoalMessage(message);
  });

  form?.addEventListener("submit", async (event) => {
    event.preventDefault();
    hideExamGoalMessage(message);

    if (submit) submit.disabled = true;

    try {
      const isEditing = Boolean(idInput?.value);
      await saveExamGoal(new FormData(form));
      await refreshAcademicAssistant();
      await resetExamGoalForm(form);
      form.hidden = true;
      showExamGoalMessage(message, isEditing ? "Cambios guardados correctamente." : "Examen guardado correctamente.");
    } catch (error) {
      showExamGoalMessage(message, error?.message || "No se pudo guardar el examen.", true);
    } finally {
      if (submit) submit.disabled = false;
    }
  });

  list?.addEventListener("click", async (event) => {
    const action = event.target.closest("[data-exam-action]");
    if (!action) return;

    const item = action.closest("[data-exam-id]");
    const examId = item?.dataset.examId;
    if (!examId) return;

    const examGoals = await fetchFutureExamGoals();
    const examGoal = examGoals.find((goal) => goal.id === examId);
    if (!examGoal) return;

    if (action.dataset.examAction === "edit") {
      await loadExamGoalIntoForm(form, examGoal);
      if (emptyState) emptyState.hidden = true;
      form.hidden = false;
      hideExamGoalMessage(message);
      subjectSelect?.focus();
      return;
    }

    if (action.dataset.examAction === "delete") {
      const confirmed = confirm("¿Querés eliminar este examen?");
      if (!confirmed) return;
      action.disabled = true;
      try {
        await deleteExamGoal(examId);
        await refreshAcademicAssistant();
      } catch (error) {
        showExamGoalMessage(message, error?.message || "No se pudo eliminar el examen.", true);
      } finally {
        action.disabled = false;
      }
    }
  });

  try {
    await refreshAcademicAssistant();
  } catch (error) {
    console.error("No se pudo cargar el proximo examen.", error);
    if (emptyState) emptyState.hidden = false;
    if (cards) cards.hidden = true;
    showExamGoalMessage(message, "No se pudo cargar tu próximo examen. Intentá de nuevo más tarde.", true);
  }
}

async function saveExamGoal(formData) {
  const session = await currentSession();
  const supabase = window.nexoSupabase;
  if (!session?.user || !supabase) throw new Error("Tenés que iniciar sesión para guardar tu examen.");

  const examId = String(formData.get("id") || "").trim();
  const subjectSlug = String(formData.get("subject") || "").trim();
  const subject = examSubjectLabel(subjectSlug);
  const examDate = String(formData.get("exam_date") || "").trim();
  const topics = formData.getAll("topics").map((topic) => String(topic).trim()).filter(Boolean);

  if (!subjectSlug || !subject) throw new Error("Elegí la materia del examen.");
  if (!examDate) throw new Error("Ingresá la fecha del examen.");
  if (!topics.length) throw new Error("Elegí al menos un tema del examen.");

  if (examId) {
    const { data, error } = await supabase
      .from("exam_goals")
      .update({ subject, exam_date: examDate, topics })
      .eq("id", examId)
      .eq("user_id", session.user.id)
      .select("id,subject,exam_date,topics,created_at")
      .single();

    if (error) throw error;
    return data;
  }

  const { data: existing, error: existingError } = await supabase
    .from("exam_goals")
    .select("id")
    .eq("user_id", session.user.id)
    .eq("subject", subject)
    .eq("exam_date", examDate)
    .maybeSingle();

  if (existingError) throw existingError;

  if (existing?.id) {
    const { data, error } = await supabase
      .from("exam_goals")
      .update({ topics })
      .eq("id", existing.id)
      .eq("user_id", session.user.id)
      .select("id,subject,exam_date,topics,created_at")
      .single();

    if (error) throw error;
    return data;
  }

  const { data, error } = await supabase
    .from("exam_goals")
    .insert({
      user_id: session.user.id,
      subject,
      exam_date: examDate,
      topics
    })
    .select("id,subject,exam_date,topics,created_at")
    .single();

  if (error) throw error;
  return data;
}

async function fetchNextExamGoal() {
  const examGoals = await fetchFutureExamGoals();
  return examGoals[0] || null;
}

async function fetchFutureExamGoals() {
  const session = await currentSession();
  const supabase = window.nexoSupabase;
  if (!session?.user || !supabase) return [];

  const { data, error } = await supabase
    .from("exam_goals")
    .select("id,subject,exam_date,topics,created_at")
    .eq("user_id", session.user.id)
    .gte("exam_date", todayDateString())
    .order("exam_date", { ascending: true })
    .order("created_at", { ascending: true });

  if (error) throw error;
  return Array.isArray(data) ? data : [];
}

async function deleteExamGoal(examId) {
  const session = await currentSession();
  const supabase = window.nexoSupabase;
  if (!session?.user || !supabase) throw new Error("TenÃ©s que iniciar sesiÃ³n para eliminar tu examen.");

  const { error } = await supabase
    .from("exam_goals")
    .delete()
    .eq("id", examId)
    .eq("user_id", session.user.id);

  if (error) throw error;
}

async function refreshAcademicAssistant() {
  const examGoals = await fetchFutureExamGoals();
  const nextExam = examGoals[0] || null;
  const academicPerformance = nextExam ? await fetchAcademicPerformance(nextExam.subject) : null;
  renderAcademicAssistant(nextExam, academicPerformance);
  renderExamGoalList(examGoals);
}

async function fetchAcademicPerformance(subjectName) {
  const session = await currentSession();
  const supabase = window.nexoSupabase;
  const slug = slugFromSubjectName(subjectName);
  if (!session?.user || !supabase || !slug) return null;

  const { data, error } = await supabase
    .from("user_progress")
    .select("subject,total_points,completed_challenges,correct_answers,wrong_answers,streak,last_activity_at,updated_at")
    .eq("user_id", session.user.id)
    .in("subject", [slug, ...subjectNamesForSlug(slug)])
    .limit(1)
    .maybeSingle();

  if (error || !data) return null;

  const correctAnswers = Number(data.correct_answers || 0);
  const wrongAnswers = Number(data.wrong_answers || 0);
  const totalResponses = correctAnswers + wrongAnswers;

  return {
    subject: subjectName,
    completed_challenges: Number(data.completed_challenges || 0),
    total_points: Number(data.total_points || 0),
    correct_answers: correctAnswers,
    wrong_answers: wrongAnswers,
    total_responses: totalResponses,
    accuracy_rate: totalResponses ? correctAnswers / totalResponses : null,
    wrong_rate: totalResponses ? wrongAnswers / totalResponses : null,
    streak: Number(data.streak || 0),
    last_activity_at: data.last_activity_at || null,
    updated_at: data.updated_at || null
  };
}

function renderExamGoalList(examGoals) {
  const assistant = document.querySelector(".academic-assistant");
  if (!assistant) return;

  const section = assistant.querySelector("[data-exam-list-section]");
  const list = assistant.querySelector("[data-exam-goal-list]");
  if (!section || !list) return;

  section.hidden = !examGoals.length;
  list.innerHTML = examGoals.map((examGoal) => {
    const topicList = Array.isArray(examGoal.topics) ? examGoal.topics : [];
    const topics = topicList.length ? topicList.join(", ") : "Sin temas seleccionados";
    const daysLeft = daysUntilExam(examGoal.exam_date);

    return `
      <article class="academic-exam-item" data-exam-id="${escapeHtml(examGoal.id)}">
        <div>
          <strong>${escapeHtml(examGoal.subject)}</strong>
          <div class="academic-exam-meta">${escapeHtml(formatExamDate(examGoal.exam_date))} · ${escapeHtml(examDaysLabel(daysLeft))}</div>
          <div class="academic-exam-topics">${escapeHtml(topics)}</div>
        </div>
        <div class="actions">
          <button class="btn btn-secondary" type="button" data-exam-action="edit">Editar</button>
          <button class="btn btn-secondary" type="button" data-exam-action="delete">Eliminar</button>
        </div>
      </article>
    `;
  }).join("");
}

async function loadExamGoalIntoForm(form, examGoal) {
  if (!form || !examGoal) return;

  const idInput = form.querySelector("[data-exam-goal-id]");
  const subjectSelect = form.querySelector("[data-exam-subject-select]");
  const topicOptions = form.querySelector("[data-exam-topic-options]");
  const dateInput = form.querySelector("[name='exam_date']");
  const submit = form.querySelector("[data-exam-submit]");
  const subjectSlug = slugFromSubjectName(examGoal.subject) || currentSubject();
  const topics = Array.isArray(examGoal.topics) ? examGoal.topics : [];

  if (idInput) idInput.value = examGoal.id || "";
  if (subjectSelect) subjectSelect.value = subjectSlug;
  if (dateInput) dateInput.value = examGoal.exam_date || "";
  await renderExamTopicOptions(topicOptions, subjectSlug, topics, false);
  if (submit) submit.textContent = "Guardar cambios";
}

async function resetExamGoalForm(form) {
  if (!form) return;

  const idInput = form.querySelector("[data-exam-goal-id]");
  const submit = form.querySelector("[data-exam-submit]");
  const dateInput = form.querySelector("[name='exam_date']");
  const subjectSelect = form.querySelector("[data-exam-subject-select]");
  const topicOptions = form.querySelector("[data-exam-topic-options]");

  if (idInput) idInput.value = "";
  if (dateInput) dateInput.value = "";
  if (subjectSelect) subjectSelect.value = currentSubject();
  await renderExamTopicOptions(topicOptions, subjectSelect?.value || currentSubject());
  if (submit) submit.textContent = "Guardar examen";
}

function renderAcademicAssistant(examGoal, academicPerformance = null) {
  const assistant = document.querySelector(".academic-assistant");
  if (!assistant) return;

  const emptyState = assistant.querySelector("[data-exam-empty-state]");
  const cards = assistant.querySelector("[data-academic-cards]");
  const actions = assistant.querySelector("[data-academic-actions]");
  const subject = assistant.querySelector("[data-next-exam-subject]");
  const date = assistant.querySelector("[data-next-exam-date]");
  const days = assistant.querySelector("[data-next-exam-days]");
  const examTopics = assistant.querySelector("[data-exam-topics]");
  const weakTopics = assistant.querySelector("[data-weak-topics]");
  const performance = assistant.querySelector("[data-academic-performance]");
  const recommendation = assistant.querySelector("[data-study-recommendation]");

  if (!examGoal) {
    window.nexoTutorExamContext = null;
    if (emptyState) emptyState.hidden = false;
    if (cards) cards.hidden = true;
    if (actions) actions.hidden = true;
    return;
  }

  const daysLeft = daysUntilExam(examGoal.exam_date);
  const topicList = Array.isArray(examGoal.topics) ? examGoal.topics : [];
  const weakness = academicWeaknessesForExam(examGoal);
  const recommendationText = studyRecommendation(daysLeft, topicList, academicPerformance);
  window.nexoTutorExamContext = {
    ...examGoal,
    days_left: daysLeft,
    weak_topics: weakness.topics,
    academic_performance: academicPerformance
  };

  if (emptyState) emptyState.hidden = true;
  if (cards) cards.hidden = false;
  if (actions) actions.hidden = false;

  if (subject) {
    subject.textContent = examGoal.subject;
    subject.dataset.nextExamSubject = examGoal.subject;
  }

  if (date) {
    date.textContent = formatExamDate(examGoal.exam_date);
    date.dataset.nextExamDate = examGoal.exam_date;
  }

  if (days) {
    days.textContent = examDaysLabel(daysLeft);
    days.dataset.nextExamDays = String(daysLeft);
  }

  if (examTopics) {
    examTopics.dataset.examTopics = topicList.join(", ");
    examTopics.innerHTML = topicList.length
      ? topicList.map((topic) => `<li>${escapeHtml(topic)}</li>`).join("")
      : "<li>Sin temas cargados todavía</li>";
  }

  if (weakTopics) {
    weakTopics.dataset.weakTopics = weakness.topics.join(", ");
    weakTopics.innerHTML = weakness.topics.length
      ? `<ul class="academic-topic-list">${weakness.topics.map((topic) => `<li>${escapeHtml(topic)}</li>`).join("")}</ul>`
      : `<p>${escapeHtml(weakness.message)}</p>`;
  }

  if (performance) {
    performance.textContent = academicPerformance
      ? performanceSummary(academicPerformance)
      : "Aún no hay suficiente práctica registrada en esta materia.";
  }

  if (recommendation) {
    recommendation.textContent = recommendationText;
    recommendation.dataset.studyRecommendation = recommendationText;
  }
}

function renderExamSubjectOptions(select) {
  if (!select) return;
  select.innerHTML = examSubjectOptions
    .map((option) => `<option value="${option.slug}">${escapeHtml(option.label)}</option>`)
    .join("");
}

async function renderExamTopicOptions(container, subjectSlug, selectedTopics = [], selectFirst = true) {
  if (!container) return;

  const availableTopics = await availableExamTopics(subjectSlug);
  const topics = [...new Set([...availableTopics, ...selectedTopics].map((topic) => String(topic || "").trim()).filter(Boolean))];
  const selected = new Set(selectedTopics.map((topic) => normalizeText(topic)));
  container.innerHTML = topics.map((topic, index) => `
    <label class="academic-topic-option">
      <input type="checkbox" name="topics" value="${escapeHtml(topic)}" ${selected.has(normalizeText(topic)) || (!selected.size && selectFirst && index === 0) ? "checked" : ""}>
      <span>${escapeHtml(topic)}</span>
    </label>
  `).join("");
}

async function availableExamTopics(subjectSlug) {
  const remoteTopics = await fetchQuestionTopics(subjectSlug);
  return remoteTopics.length ? remoteTopics : fallbackExamTopics[subjectSlug] || [];
}

async function fetchQuestionTopics(subjectSlug) {
  const supabase = window.nexoSupabase;
  if (!supabase || !subjectSlug) return [];

  const { data, error } = await supabase
    .from("questions")
    .select("topic")
    .in("subject", subjectNamesForSlug(subjectSlug))
    .eq("is_active", true)
    .not("topic", "is", null);

  if (error || !Array.isArray(data)) return [];

  return [...new Set(data.map((row) => String(row.topic || "").trim()).filter(Boolean))]
    .sort((first, second) => first.localeCompare(second, "es"));
}

function examSubjectLabel(subjectSlug) {
  return examSubjectOptions.find((option) => option.slug === subjectSlug)?.label || "";
}

function academicWeaknessesForExam(examGoal) {
  const slug = slugFromSubjectName(examGoal?.subject);
  const progress = getProgress();
  const subjectProgress = slug ? ensureSubjectProgress(progress, slug) : null;

  if (!subjectProgress || !subjectProgress.wrongAnswers) {
    return {
      topics: [],
      message: "Completá desafíos para detectar temas a reforzar."
    };
  }

  return {
    topics: [],
    message: "Completá desafíos para detectar temas a reforzar."
  };
}

function academicWeaknessesForExam() {
  return {
    topics: [],
    message: "Hoy NEXO mide tu rendimiento por materia. Para detectar temas débiles, completá desafíos clasificados por tema."
  };
}

function academicWeaknessesForExam() {
  return {
    topics: [],
    message: "Hoy NEXO mide tu rendimiento por materia. Para detectar fortalezas y debilidades por tema, completá desafíos clasificados por tema."
  };
}

function performanceSummary(performance) {
  if (!performance || !performance.total_responses) {
    return "Aún no hay suficiente práctica registrada en esta materia.";
  }

  const accuracy = Math.round(Number(performance.accuracy_rate || 0) * 100);
  const completed = Number(performance.completed_challenges || 0);
  return `Rendimiento actual en ${performance.subject}: ${accuracy}% de aciertos · ${completed} desafío${completed === 1 ? "" : "s"} completado${completed === 1 ? "" : "s"}.`;
}

function todayDateString() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function dateFromDateString(value) {
  const [year, month, day] = String(value || "").split("-").map(Number);
  return new Date(year, month - 1, day);
}

function daysUntilExam(examDate) {
  const today = dateFromDateString(todayDateString());
  const target = dateFromDateString(examDate);
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  return Math.ceil((target - today) / millisecondsPerDay);
}

function formatExamDate(examDate) {
  return dateFromDateString(examDate).toLocaleDateString("es-AR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  });
}

function examDaysLabel(daysLeft) {
  if (daysLeft === 0) return "Es hoy";
  if (daysLeft === 1) return "Falta 1 día";
  return `Faltan ${daysLeft} días`;
}

function studyRecommendation(daysLeft, weakTopics = []) {
  const daysCopy = daysLeft === 1 ? "Falta 1 día" : `Faltan ${Math.max(daysLeft, 0)} días`;

  if (!weakTopics.length) {
    return `${daysCopy} para tu examen. Completá desafíos de los temas seleccionados para que NEXO pueda detectar prioridades de estudio.`;
  }

  return `${daysCopy} para tu examen. Priorizá ${weakTopics.slice(0, 2).join(" y ")}, donde registrás más errores.`;
}

function studyRecommendation(daysLeft, topics = [], performance = null) {
  const safeDays = Math.max(daysLeft, 0);
  const dayText = safeDays === 1 ? "1 día" : `${safeDays} días`;
  const topicText = topics.length ? topics.slice(0, 3).join(" y ") : "los temas seleccionados";
  const hasPerformance = performance && Number.isFinite(Number(performance.accuracy_rate));
  const accuracy = hasPerformance ? Math.round(Number(performance.accuracy_rate) * 100) : null;

  if (!hasPerformance || !performance.total_responses) {
    if (safeDays <= 3) {
      return `Como faltan ${dayText} para el examen, priorizá repaso intensivo y ejercicios prácticos de ${topicText}. Completá desafíos para que NEXO pueda medir tu rendimiento real.`;
    }
    if (safeDays <= 10) {
      return `Faltan ${dayText} para el examen. Combiná teoría con práctica y completá desafíos de ${topicText} para registrar tu avance.`;
    }
    return `Faltan ${dayText} para el examen. Avanzá de forma progresiva con ${topicText} y sumá desafíos para construir tu diagnóstico académico.`;
  }

  if (accuracy < 50) {
    if (safeDays <= 3) {
      return `Tu rendimiento actual es ${accuracy}%. Como faltan ${dayText} para el examen, priorizá ejercicios prácticos de ${topicText} y completá al menos 2 desafíos adicionales antes de rendir.`;
    }
    if (safeDays <= 10) {
      return `Tu rendimiento actual es ${accuracy}%. Reforzá la materia con teoría breve, práctica guiada y desafíos adicionales de ${topicText}.`;
    }
    return `Tu rendimiento actual es ${accuracy}%. Tenés tiempo para reforzar la materia: estudiá ${topicText} de forma progresiva y aumentá la cantidad de desafíos.`;
  }

  if (accuracy <= 75) {
    if (safeDays <= 3) {
      return `Tu rendimiento actual es ${accuracy}%. Consolidá conocimientos con ejercicios prácticos de ${topicText} y repasá los conceptos que todavía te generen dudas.`;
    }
    if (safeDays <= 10) {
      return `Tu rendimiento actual es ${accuracy}%. Alterná práctica y teoría, y completá desafíos adicionales para consolidar ${topicText}.`;
    }
    return `Tu rendimiento actual es ${accuracy}%. Mantené un estudio progresivo y usá las próximas semanas para consolidar ${topicText}.`;
  }

  if (safeDays <= 3) {
    return `Tu rendimiento es sólido (${accuracy}%). En estos ${dayText}, hacé simulacros cortos, repasos finales y ejercicios prácticos de ${topicText}.`;
  }

  if (safeDays <= 10) {
    return `Tu rendimiento es sólido (${accuracy}%). Combiná simulacros con repasos puntuales y completá algunos desafíos extra para llegar con ritmo.`;
  }

  return "Tu rendimiento es sólido. Aprovechá las próximas semanas para realizar simulacros y reforzar conceptos puntuales.";
}

function showExamGoalMessage(message, text, isError = false) {
  if (!message) return;
  message.textContent = text;
  message.classList.toggle("error", isError);
  message.classList.add("show");
}

function hideExamGoalMessage(message) {
  if (!message) return;
  message.classList.remove("show", "error");
  message.textContent = "";
}

function tutorAnswer(question, subject) {
  const normalized = question.toLowerCase();
  const match = subject.tutor.find((item) => item.keywords.some((keyword) => normalized.includes(keyword)));
  if (match) return match.answer;

  return `Sobre ${subject.name}, puedo ayudarte con los temas principales del resumen: ${subject.description}. Proba preguntar por un concepto puntual para recibir una explicacion mas precisa.`;
}

function appendBubble(chat, text, type) {
  const bubble = document.createElement("div");
  bubble.className = `bubble ${type}`;
  bubble.textContent = text;
  chat.appendChild(bubble);
  return bubble;
}

async function initCultureGuide() {
  const guide = document.querySelector("[data-culture-guide]");
  if (!guide) return;

  const pdfPath = "assets/cultura-universitaria.pdf";
  const viewer = guide.querySelector("[data-pdf-viewer]");
  const placeholder = guide.querySelector("[data-pdf-placeholder]");
  const status = guide.querySelector("[data-pdf-status]");

  try {
    const response = await fetch(pdfPath, { method: "HEAD", cache: "no-store" });
    if (!response.ok) throw new Error("PDF pendiente");
    if (viewer) viewer.hidden = false;
    if (placeholder) placeholder.hidden = true;
    if (status) status.textContent = "La guia esta disponible para visualizar online o descargar.";
  } catch {
    if (viewer) viewer.hidden = true;
    if (placeholder) placeholder.hidden = false;
    if (status) status.textContent = "El PDF aun no esta cargado. El enlace queda preparado para assets/cultura-universitaria.pdf.";
  }
}

async function initExamModels() {
  const modelsPage = document.querySelector("[data-exam-models]");
  if (!modelsPage) return;

  const viewer = modelsPage.querySelector("[data-pdf-viewer]");
  const placeholder = modelsPage.querySelector("[data-pdf-placeholder]");
  const status = modelsPage.querySelector("[data-pdf-status]");
  const availableCards = modelsPage.querySelectorAll("[data-model-card][data-pdf-path]");

  availableCards.forEach(async (card) => {
    const pdfPath = card.dataset.pdfPath;
    const openLink = card.querySelector("[data-pdf-open]");
    const downloadLink = card.querySelector("[data-pdf-download]");
    const badge = card.querySelector("[data-model-status]");

    try {
      const response = await fetch(pdfPath, { method: "HEAD", cache: "no-store" });
      if (!response.ok) throw new Error("PDF pendiente");
      if (badge) badge.textContent = "Disponible";
      if (openLink) openLink.removeAttribute("aria-disabled");
      if (downloadLink) downloadLink.removeAttribute("aria-disabled");
      if (viewer) viewer.hidden = false;
      if (placeholder) placeholder.hidden = true;
      if (status) status.textContent = "El modelo de Administración I esta disponible para visualizar online o descargar.";
    } catch {
      if (badge) badge.textContent = "Disponible";
      if (openLink) openLink.setAttribute("aria-disabled", "true");
      if (downloadLink) downloadLink.setAttribute("aria-disabled", "true");
      if (viewer) viewer.hidden = true;
      if (placeholder) placeholder.hidden = false;
      if (status) status.textContent = `El PDF aun no esta cargado. El enlace queda preparado para ${pdfPath}.`;
    }
  });
}
