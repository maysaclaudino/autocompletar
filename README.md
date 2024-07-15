# Busca com Autocompletar

Este projeto consiste em uma página com um formulário de busca de canais de televisão onde, ao digitar o termo inicial, sugestões serão exibidas para completar o termo da busca.

## Para executar

Primeiro, baixe este repositório em sua máquina.

### Com Docker Compose

Instale o Docker Compose [seguindo as instruções da documentação](https://docs.docker.com/desktop/).

> O Docker Desktop ainda não é compatível com o Ubuntu 24.04 e por isso
> não abre. Uma forma de contornar e fazer o Docker abrir e executar é
> com o comando:
> `sudo sysctl -w kernel.apparmor_restrict_unprivileged_userns=0 && systemctl --user restart docker-desktop`

Com o docker em execução, para rodar o projeto entre na pasta do projeto autocompletar e execute o comando:
```bash
docker compose up
```
Acesse o projeto em [http://localhost:3000](http://localhost:3000)

### Sem Docker

Instale o Node.js [seguindo as instruções da documentação](https://nodejs.org/en/download/package-manager).

Abra duas janelas do terminal e em ambas entre na pasta do projeto autocompletar.

Na primeira janela execute os comandos abaixo.
```bash
cd backend
npm install
npm start
```

Na segunda janela execute os comandos:
```bash
cd frontend
npm install
npm start
```

O projeto será aberto automaticamente no navegador no endereço [http://localhost:3000](http://localhost:3000)