# Introdução ao Sequelize

## Rodar o repositório:

### Na primeira vez é necessário instalar as dependencias:
1. `npm install` na pasta raiz
2. Se for em ambiente local: `npm install --dev` na pasta raiz
3. `npm install jsonwebtoken` na pasta raiz
4. Criar arquivo `.env`
5. Atualizar arquivo `.env_example` conforme desejar.
6. `cp .env_example .env` na pasta raiz

### Para rodar o repositório em ambiente local
1. `npm run start:dev`

## Trabalhando com migrations:

Apagar as migrations de exemplo que estão no projeto.

### Abrir um novo terminal e criar a migration
1. `sequelize migration:generate --name criar_tabela_alunos`
2. `npx sequelize-cli migration:generate --name criar_tabela_usuarios`

### Rodar uma migration. Opções:
1. Opção nº 1: `sequelize db:migrate`
2. Opção nº 2: `npx sequelize db:migrate`

### Reverter a última migration:
1. `sequelize-cli db:migrate:undo`
2. `npx sequelize-cli db:migrate:undo`

## Documentação do Sequelize:
https://sequelize.org/docs/v6/core-concepts/model-basics/

## Novas Bibliotecas utilizadas:

### instalar o sequelize
`npm install sequelize` 
### instalar o driver do PostgreSQL
`npm install pg` 
### instalar o CLI do sequelize
`npm install -g sequelize-cli` 
### instalar o dotenv
`npm install dotenv`


## Criação de Pastas e Arquivos
1. Criar uma pasta `routes` dentro da pasta `src`.
2. Adicionar arquivos `(nome do arquivo).routes.js` dentro da pasta `routes`.
3. Adicionar arquivos `(nome do arquivo).js` na pasta models
    Esse arquivo é uma representação da tabela em seu banco de dados.
4. Criar uma pasta `middlewares` dentro da pasta `src`.
5. Adicionar arquivos `(nome do arquivo).js` dentro da pasta `middlewares`
    Esse arquivo serve para fazer validação nas rotas
