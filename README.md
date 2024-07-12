# Busca com Auto-completar

# Para executar
Precisa ter o docker compose instalado. Instruções em https://docs.docker.com/desktop/install/linux-install/.

O Docker Desktop ainda não é compatível com Ubuntu 24.04 (não abre). Uma forma de contornar e fazer o docker rodar é com os comandos
sudo sysctl -w kernel.apparmor_restrict_unprivileged_userns=0
systemctl --user restart docker-desktop

Com o docker rodando basta entrar na pasta do Autocomplete e executar o comando
docker compose up

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