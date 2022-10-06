<p>
<img src="https://website-v9.vercel.app/logo-dark.svg" width="200">
</p>
<h1>hello-prisma</h1>

## Apresentação

Esta é a meu primeiro projeto utilizando a biblioteca [prisma](https://www.prisma.io/). Baseado no [exemplo de implementação](https://www.prisma.io/docs/getting-started/quickstart) da própria documentação.

## Objetivo do Prisma

Ele tem o intúito de melhorar a experiência do desenvolvedor, fornecendo migrações automatizadas, segurança e tipo de preenchimento automático aos seus modelos de dados.

Ele atua na camada do backend permitindo uma comunicação mais agradável entre o `client` e o `database`.


## Instalação

```bash
git clone https://github.com/natanaeldeveloper/hello-prisma.git
```
```bash
cd hello-prisma
```
```bash
npm install
```

## Configuração 

```bash
touch .env
```

Adicione ao arquivo `.env` o username, password e nome do seu banco de dados a url de conexão do prisma.

```JS
DATABASE_URL=postgresql://mydbuser:mypassword@localhost:5432/mydb
```

neste exemplo estou utilizando o banco de dados `postgresql` mas você pode optar por utilizar outro banco. Para mais detalhes consulte: [Connection URLs (Reference) | Prisma Docs](https://www.prisma.io/docs/reference/database-reference/connection-urls)

## Execução

Para gerar uma estrutura no banco de dados apartir das migrations do projeto execute:
```bash
npx prisma db push
```

Caso você queira realizar o processo inverso (gerar migrations apartir da estrutura do banco de dados) execute:
```bash
npx prisma db pull
```

## Estrutura de Pastas

```JS
 |- node_modules/
 |- prisma/
 |   |- migrations/
 |   |- schemea.prisma
 |- src/
 |- .env
 |- pachage.json
 |- tsconfig.json
 | // ...
```
