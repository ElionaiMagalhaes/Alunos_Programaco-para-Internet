# Laboratório: JavaScript, DOM, validação e fetch

Disciplina: Programação para Internet | Professor Msc Elionai Magalhães

## Objetivos
Praticar `const`, `let`, funções, condicionais, eventos, manipulação de elementos HTML, validação no cliente e leitura assíncrona de JSON. Todos os dados são fictícios e não há armazenamento nem envio de inscrições.

## Ferramentas
- Navegador moderno (Chrome, Edge ou Firefox), com ferramentas de desenvolvedor (F12).
- VS Code é recomendado, mas não obrigatório.
- Python 3 instalado **ou** extensão de servidor local como Live Server do VS Code.

## Execução passo a passo
1. Extraia o ZIP mantendo a pasta `dados` no mesmo diretório dos outros arquivos.
2. Abra o terminal dentro da pasta `Programacao_Internet_JS_Laboratorio`.
3. Execute `python -m http.server 5500` (Windows: tente `py -m http.server 5500` se necessário).
4. Acesse `http://localhost:5500` no navegador. Não abra o arquivo pela URL `file://`: nesse modo o `fetch` local pode ser bloqueado.
5. Abra as ferramentas do navegador (F12) e selecione as abas **Console** e **Rede/Network**.
6. Preencha Nome, E-mail e Turma; clique em **Adicionar inscrição**. Verifique a lista e a mensagem atualizada.
7. Tente nome vazio ou com apenas espaços, e-mail inválido ou turma não selecionada. Observe a validação.
8. Clique em **Consultar oficina**. Observe primeiro “Consultando...” e depois as informações de `dados/curso.json`.
9. Na aba Rede, localize a requisição `curso.json`, confirme o status 200 e visualize a resposta JSON.
10. Para simular falha HTTP, altere temporariamente no código `./dados/curso.json` para `./dados/inexistente.json`; recarregue a página e observe a mensagem de erro e o status 404 na aba Rede. Restaure o caminho depois.

## Tarefa orientada
A) Altere a mensagem de sucesso para mostrar o nome da última pessoa cadastrada.
B) Inclua uma nova opção de Turma no HTML.
C) Acrescente no JSON o campo `duracaoHoras` e mostre-o na resposta. Observe que é preciso ajustar a string em `app.js`.
D) Explique por que `textContent` é preferível a `innerHTML` para apresentar texto digitado pelo usuário.
E) Explique por que validação no navegador não substitui a validação em um servidor real.

## Resultados esperados
A lista aumenta a cada inscrição válida; as inválidas não entram na lista. A consulta retorna os dados fictícios do JSON quando o servidor está funcionando; falhas mostram uma mensagem recuperável e reabilitam o botão.

## Referências
- https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide
- https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model
- https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch
- https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Extensions/Forms/Form_validation

**Observação:** protótipo exclusivamente didático; não cadastra dados de maneira persistente. Não use dados pessoais reais.
