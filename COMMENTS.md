# Relatório
Oi esse arquivo contem as decisões de projeto

## Estudo inicial
Comecei indo atrás de procurar entender como funcionavam algumas tecnologias necessárias que eu tive pouco ou nenhum contato como GraphQL, Docker e ReactJS para entender em quais etapas do projetos elas se encaixariam e como. falar da documentação

Meu objetivo era que esse projeto utilizasse a menor quantidade de dependências possíveis e poucas instalações fossem necessárias.

Depois de ter tido essa visão inicial comecei a pesquisar bibliotecas de autocompletar open-source que eu poderia usar. A escolhida foi o [Ajax Autocomplete for JQuery](https://github.com/devbridge/jQuery-Autocomplete) devido a sua simplicidade. A única dependência é o JQuery e para a biblioteca funcionar apenas um arquivo de 34Kb é necessário. A documentação também é simples e clara e mexendo no site de aplicação de exemplo vi que ela possuía todas as características necessárias para o projeto como o destaque em negrito do termo digitado, destaque ao passar o mouse, atualização da barra de pesquisa ao clicar na sugestão entre outros.

Para finalizar a etapa de preparo agora só faltava escolher os dados usados na pesquisa. Visando não precisar instalar um banco de dados para rodar o projeto optei por usar um arquivo JSON já populado com os dados na pasta do projeto. Para isso fui atrás de um conjunto de dados e encontrei o [Portal de Dados Abertos do Governo Federal](https://dados.gov.br/home) de onde encontrei a lista de [Canais de Programação de Programadoras Ativos Credenciados na Ancine](https://dados.gov.br/dados/conjuntos-dados/canais-de-programacao-de-programadoras-ativos-credenciados-na-ancine) que avaliei ser um domínio legal de pesquisa de uma barra de pesquisa.

Com todas as ferramentas em mãos agora eu posso começar o código.

## Frontend e biblioteca Autocomplete

A primeira coisa que fiz foi criar um projeto React e replicar nele o [site de demonstração](http://devbridge.github.io/jQuery-Autocomplete/) da biblioteca Autocomplete para entender melhor cada parte dela e como eu deveria fornecer os dados para ela funcionar. Na demonstração os dados estão guardados em uma array em um arquivo .js e foi nisso que eu tentei transformar os dados JSON inicialmente. 

Depois de entender as importações e código do HTML e como fazer a chamada em JQuery para substituir a tag HTML e conseguir fazer a demonstação funcionar, fui para o backend para substituir os dados da demonstração pelos meus do arquivo JSON de canais.

## Backend e GraphQL

Aqui eu tive uma certa dificuldade pois apesar de ter entendido em termos gerais como o GraphQL funcionava ainda não tinha entendido como exatamente fazer com que o frontend passasse primeiro pelo GraphQL para esse sim se comunicar com o backend. Sendo que tendo o arquivo JSON eu poderia no proprio frontend escrever um código em javascript que transformasse o JSON em uma array de canais. 

Precisei pesquisar um pouco mais a fundo até encontrar um exemplo que realizava querys de GraphQL em um arquivo JSON, que era o que eu precisava (até então só tinha visto exemplos de requisições hardcoded ou de um banco de dados). 

A partir daí e usando o [Apollo Server](https://www.apollographql.com/docs/apollo-server/) na construção do servidor conseguir escrever uma query `channels` que retornava todos os canais do JSON e com o GraphQL eu tinha a liberdade de escolher quais parametros do JSON retornar e testei ela na propria interface do Apollo Service.

## Conectando back e front

Com o back e o front parcialmente feitos eu queria agora juntar tudo antes de seguir com algumas funcionalidades mais específicas.

Minha primeira tentativa foi usando o Apollo Client para fazer as requisições do GraphQL como havia visto em alguns exemplos, mas isso não estava dando certo pois para a biblioteca Autocomplete funcionar eu precisava realizar importações dentro de arquivos .js na pasta public do React e isso estava gerando erros de compilação que eu não consegui contornar.

Aí me atentei que a biblioteca Autocomplete permite realizar requisições ajax no para obter os dados e então bastava transformar o resultado em uma array que os dados seriam aceitos.

Então finalmente eu tinha um prototipo da aplicação onde o frontend buscava todos os canais uma única vez e usava como base da pesquisa.

## Funcionalidades

Ainda faltava implementar algumas funcionalidades para a aplicação estar completa
-   As sugestões só começam a ser exibidas após digitar, no minimo, 4 caracteres;
-   O backend precisa retornar, no máximo, 20 sugestões.

A primeira é simples, bastava usar a opção `minChars` fornecida pela biblioteca.

A segunda foi um pouco mais trabalhosa por que foi aí que percebi que o retorno do backend deveria ser baseado no que a pessoa usuária digitou e não era só obter a lista de canais uma única vez. Para isso precisei alterar a definição da query para que recebesse um parametro de prefixo que é o início do nome do canal e um limite de quantos canais devolver. Depois de alterar a query no backend precisei reformular a requisição no front para que ela fosse feita a cada interação da pessoa usuária e que recebesse esse parametro do input.

Feito isso, a aplicação estava funcionando 100%!!!

## Estilização

Com a aplicação funcionando agora era só deixar ela amigável visualmente. Optei por usar o framework [Simple.css](https://simplecss.org/) que faria a estilização principal por mim. Ela também não precisa de nenhuma instalação adicional pois está publicada na CDN então bastava incluir o link na head do HTML.

Depois de adicionar as imagens e adicionar mais algumas estilizações manuais no index.css a aplicação estava finalmente pronta.

## Docker

Para que a aplicação seja facilmente rodável e instalável em outras máquinas fui entender melhor sobre Docker, sua instalação e escrevi os arquivos Dockerfile para o backend e frontend e o docker-compose.yml para que o projeto fosse configurado e executado usando somente o comando `docker compose up`

# Considerações finais

Foi um desafio muito legal em que tive a oportunidade de aprender e implementar várias ferramentas e tecnologias que por vezes eu não conhecia mas se mostraram muito úteis na construção da aplicação. Construir todas as partes do projeto também me trouxe uma visão amplificada de como cada parte de uma aplicação web se conecta e como elas dependem entre si. Gostei muito do aprendizado e fiquei contente com o resultado obtido.
