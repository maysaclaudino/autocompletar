# Busca com Auto-completar

## Para executar

### Com Docker

É necessário ter o Docker Compose instalado. Siga as instruções em [instalação do Docker](https://docs.docker.com/desktop/install/linux-install/).

O Docker Desktop ainda não é compatível com o Ubuntu 24.04 (não abre). Uma forma de contornar e fazer o Docker rodar é com os comandos:

```bash
sudo sysctl -w kernel.apparmor_restrict_unprivileged_userns=0
systemctl --user restart docker-desktop
```

Com o docker rodando basta entrar na pasta do Autocomplete e executar o comando

```bash
docker compose up
```

Acesse o projeto em http://localhost:3000

### Sem Docker
...

# Dependências
Docker

Node.js 

## frontend
React/Next

Apollo client

GraphQL

## backend
Apollo Server

GraphQL

https://simplecss.org/demo