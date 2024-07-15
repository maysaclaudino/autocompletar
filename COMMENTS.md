# Introdução
Este arquivo documenta as decisões tomadas ao longo do desenvolvimento do projeto, com foco nas tecnologias empregadas e nos passos seguidos para sua implementação.

# Estudo inicial
Inicialmente, busquei compreender através das documentações o funcionamento de tecnologias com as quais eu tinha pouco ou nenhum contato prévio, como GraphQL, Docker e ReactJS. O objetivo era identificar como cada uma dessas tecnologias se encaixaria nas diferentes etapas do projeto.

O propósito principal era minimizar o número de dependências e instalações necessárias para o projeto.

Depois de ter tido essa visão inicial comecei a pesquisar bibliotecas de autocompletar open-source que eu poderia usar. A escolhida foi o [Ajax Autocomplete for JQuery](https://github.com/devbridge/jQuery-Autocomplete) devido a sua simplicidade. A única dependência é o JQuery e para a biblioteca funcionar apenas um arquivo de 34Kb é necessário. A documentação também é simples e clara e mexendo no site de aplicação de exemplo vi que ela possuía todas as características necessárias para o projeto como o destaque em negrito do termo digitado, destaque ao passar o mouse, atualização da barra de pesquisa ao clicar na sugestão entre outros.

Após essa análise inicial, comecei a pesquisar bibliotecas open-source de autocompletar que pudessem ser utilizadas. A biblioteca escolhida foi o [Ajax Autocomplete for JQuery](https://github.com/devbridge/jQuery-Autocomplete) devido à sua simplicidade e documentação clara. Explorando o site de aplicação de exemplo, verifiquei que ela possuía todas as características necessárias para o projeto, como destaque em negrito do termo digitado, destaque ao passar o mouse, atualização da barra de pesquisa ao clicar na sugestão, entre outros. A única dependência é o JQuery, e a implementação das configurações da biblioteca estão presentes em um único arquivo de 34Kb.

Para concluir a etapa de preparação, faltava apenas escolher os dados a serem usados na pesquisa. Para evitar a instalação de um banco de dados, optei por usar um arquivo JSON já populado com os dados na pasta do projeto. Encontrei o conjunto de dados no [Portal de Dados Abertos do Governo Federal](https://dados.gov.br/home), especificamente a lista de [Canais de Programação de Programadoras Ativos Credenciados na Ancine](https://dados.gov.br/dados/conjuntos-dados/canais-de-programacao-de-programadoras-ativos-credenciados-na-ancine), que considerei um domínio interessante para a barra de pesquisa.

# Front-end e Biblioteca Autocomplete

A primeira ação foi criar um projeto React e replicar o [site de demonstração](http://devbridge.github.io/jQuery-Autocomplete/) da biblioteca Autocomplete para entender melhor cada parte dela e como fornecer os dados necessários. Na demonstração, os dados estão armazenados em um array em um arquivo JavaScript.

Após entender as importações e o código HTML, bem como a chamada em JQuery para substituir a tag HTML e fazer a demonstração funcionar, passei ao back-end para substituir os dados da demonstração pelos dados do arquivo JSON de canais mencionado anteriormente.

# Back-end e GraphQL

Enfrentei algumas dificuldades iniciais, pois, embora entendesse o funcionamento geral do GraphQL, ainda não sabia exatamente como fazer com que o front-end passasse primeiro pelo GraphQL para então se comunicar com o back-end. Sendo que, tendo o arquivo JSON, eu poderia escrever um código em JavaScript no próprio front-end para transformar o JSON em um array com o nome dos canais.

Após pesquisas mais aprofundadas, encontrei um exemplo que realizava queries de GraphQL em um arquivo JSON, o que era exatamente o que eu procurava. Com o [Apollo Server](https://www.apollographql.com/docs/apollo-server/), construí um servidor e escrevi a Query `channels` e seu respectivo resolver que retorna uma lista com todos os canais do JSON. Testei a query na Sandbox do Apollos Server.

# Conectando Back-end e Front-end

Então finalmente eu tinha um prototipo da aplicação onde o front-end buscava todos os canais uma única vez e usava como base da pesquisa.

Com o back-end e front-end parcialmente desenvolvidos, o próximo passo foi integrá-los antes de seguir com funcionalidades mais específicas.

Minha primeira tentativa foi usar o Apollo Client para fazer as requisições GraphQL, como havia visto em alguns exemplos. No entanto, isso não funcionou, pois precisei realizar importações dentro de arquivos .js na pasta public do React, gerando erros de compilação que não consegui contornar.

Me lembrei, então, que a biblioteca Autocomplete permite realizar requisições Ajax para obter os dados, bastando transformar o resultado em uma array. Dessa forma, obtive um protótipo da aplicação onde o front-end buscava todos os canais uma única vez e os utilizava como base para a barra de pesquisa.

# Funcionalidades

Ainda faltava implementar algumas funcionalidades para completar a aplicação:
-   As sugestões só começam a ser exibidas após digitar, no minimo, 4 caracteres;
-   O back-end precisa retornar, no máximo, 20 sugestões.

A primeira funcionalidade foi simples de implementar, utilizando a opção `minChars` fornecida pela biblioteca.

A segunda funcionalidade foi um pouco mais trabalhosa. Percebi que o retorno do back-end deveria ser baseado no que a pessoa usuária digitava, e não apenas obter a lista de canais uma única vez. Alterei a definição da query para receber um parâmetro de prefixo (início do nome do canal) e um limite de quantos canais devolver. Após alterar a query no back-end, reformulei a requisição no front-end para que fosse feita a cada interação do usuário, recebendo o texto do input como parâmetro.

Com isso, a aplicação estava funcionando 🥳

# Estilização

Com a aplicação funcionando, o próximo passo foi torná-la visualmente amigável. Optei por usar o framework [Simple.css](https://simplecss.org/), que faria a estilização principal. Este framework não requer nenhuma instalação adicional, pois está publicado na CDN, bastando incluir o link na head do HTML.

Após adicionar as imagens e fazer algumas estilizações manuais no index.css, o projeto estava pronto.

# Docker

Para facilitar a execução e instalação da aplicação em outras máquinas, estudei o funcionamento do Docker e escrevi os arquivos Dockerfile para o back-end e front-end, além do docker-compose.yml para configurar e executar o projeto usando apenas o comando `docker compose up`.

# Considerações finais

Este projeto foi um desafio muito legal, no qual tive a oportunidade de aprender e implementar várias ferramentas e tecnologias que eu desconhecia, mas que se mostraram extremamente úteis. Construir todas as partes do projeto ampliou minha visão sobre como cada componente de uma aplicação se conecta e como elas dependem entre si. Gostei muito do aprendizado e fiquei satisfeita e feliz com o resultado final.