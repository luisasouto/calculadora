# Calculadora

Calculadora funcional feita com HTML, CSS e JavaScript puro, como primeiro projeto da minha trilha de estudos em JavaScript.

**Acesse:** https://luisasouto.github.io/calculadora/

<img width="307" height="379" alt="image" src="https://github.com/user-attachments/assets/e4932112-6e5e-4ddb-8ed4-aec83d84fc4b" />


## Funcionalidades

- Quatro operações: soma, subtração, multiplicação e divisão
- Números decimais, com bloqueio de ponto duplicado
- Zero à esquerda removido automaticamente (`0` → `5`, e não `05`)
- Divisão por zero exibe "Indefinido" e bloqueia novas operações até digitar um número ou limpar
- `=` repetido refaz a última operação (`5 + 3 = = =` → `8`, `11`, `14`)
- Continuar a conta a partir do resultado (`12 × 5 = + 1 =` → `61`)
- Arredondamento para evitar erros de ponto flutuante (`0.1 + 0.2` → `0.3`)
- Botão `C` para limpar tudo

## Tecnologias

- HTML5
- CSS3
- JavaScript (sem bibliotecas)

## O que aprendi

- Planejamento de cada etapa, entender o que acontece ou deve ser feito antes de ir para o codigo, pensar em cada passo, cada clique de botão e o que ele faz, entender isso primeiro antes de codar.
- Em vez de colocar um evento em cada botão, coloquei um só no teclado inteiro e usei o `event.target` pra saber qual botão foi clicado. Isso se chama delegação de eventos.
- Com o `data-*`, o botão mostra `×` e `÷` pra quem usa, mas guarda `*` e `/` pro JavaScript fazer a conta.
- Entendi que o que é criado dentro de uma função some a cada clique. Por isso as informações da conta ficam fora dela, pra continuarem guardadas até o `=`.
