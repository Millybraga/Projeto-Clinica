let currentStep = 1;

function showStep(step) {
    document.getElementById(`step${step}`).style.display = 'block';
}

function nextStep() {
    if (currentStep < 10) {
        document.getElementById(`step${currentStep}`).style.display = 'none';
        currentStep++;
        showStep(currentStep);
        updateProgress();
    }
}


function updateProgress() {
  const progressWidth = ((currentStep - 1) / 5) * 100; // Assume 6 passos, então divide por 5
  document.querySelector('.progress').style.width = progressWidth + '%';
}


function confirmConsulta() {
    const consultaEstado = document.getElementById('consultaEstado').value;
    const consultaTipo = document.getElementById('consultaTipo').value;
    const consultaData = document.getElementById('consultaData').value;
    const consultaEspecialidade = document.getElementById('consultaEspecialidade').value;
    //const consultaHora = document.getElementById('consultaHora').value;
    //const consultaMedico = document.getElementById('consultaMedico').value;

    //var textoDiv = consultaHora.textContent;
    document.getElementById('confirmEstado').innerText = consultaEstado;
    document.getElementById('confirmTipo').innerText = consultaTipo;
    document.getElementById('confirmData').innerText = consultaData;
    document.getElementById('confirmEspecialidade').innerText = consultaEspecialidade;
    //document.getElementById('confirmHora').innerText = textoDiv;
    //document.getElementById('confirmMedico').innerText = consultaMedico;
}

function submitForm() {
    alert('Consulta agendada com sucesso!');
}


//Abrir calendario
function abrirCalendario() {
    var dataInput = document.getElementById('dataInput');
    dataInput.focus();
    dataInput.click();
  }