// Laboratório de programação front-end: sem armazenamento permanente.
const formulario = document.querySelector('#form-inscricao');
const campoNome = document.querySelector('#nome');
const campoEmail = document.querySelector('#email');
const campoTurma = document.querySelector('#turma');
const lista = document.querySelector('#lista-inscricoes');
const mensagem = document.querySelector('#mensagem');
const botaoConsulta = document.querySelector('#consultar-curso');
const resultadoConsulta = document.querySelector('#resultado-consulta');

let totalInscritos = 0;

function validarNome() {
  const nome = campoNome.value.trim();
  const valido = nome.length >= 3;
  campoNome.setCustomValidity(valido ? '' : 'Informe um nome com pelo menos 3 caracteres não vazios.');
  return valido;
}

campoNome.addEventListener('input', () => campoNome.setCustomValidity(''));

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault(); // Impede o recarregamento automático da página.

  validarNome();
  if (!formulario.reportValidity()) return;

  const inscricao = {
    nome: campoNome.value.trim(),
    email: campoEmail.value.trim(),
    turma: campoTurma.value
  };

  const item = document.createElement('li');
  item.textContent = `${inscricao.nome} • ${inscricao.turma} • ${inscricao.email}`;
  lista.append(item); // textContent evita interpretar os dados como HTML.

  totalInscritos += 1;
  mensagem.textContent = `Inscrição adicionada. Total nesta sessão: ${totalInscritos}.`;
  formulario.reset();
  campoNome.setCustomValidity('');
  campoNome.focus();
});

botaoConsulta.addEventListener('click', async () => {
  botaoConsulta.disabled = true;
  resultadoConsulta.textContent = 'Consultando dados da oficina...';

  try {
    // A página deve ser aberta por servidor HTTP local, e não por file://.
    const resposta = await fetch('./dados/curso.json');
    if (!resposta.ok) throw new Error(`Falha HTTP ${resposta.status}`);

    const curso = await resposta.json();
    resultadoConsulta.textContent = `${curso.titulo} • ${curso.vagas} vagas • ${curso.modalidade}.`;
  } catch (erro) {
    console.error('Falha na consulta:', erro);
    resultadoConsulta.textContent = 'Não foi possível consultar. Verifique o servidor e a aba Rede do navegador.';
  } finally {
    botaoConsulta.disabled = false;
  }
});
