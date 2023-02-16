# [myTechArticles](https://mytecharticles.onrender.com/)

Gerenciador de links de tecnologia desenvolvido como teste para o processo seletivo do programa de trainee da Devnology.

<p align="center">
    <img src="https://i.imgur.com/gpfk929.gif" />
    <img src="https://i.imgur.com/ujSVH1k.gif" />
    <img src="https://i.imgur.com/D3zI81P.gif" />
    <img src="https://i.imgur.com/Y4iuBx4.gif" />
</p>

## Tecnologias

O projeto foi desenvolvido utilizando `MERN Stack` (MongoDB, Express.js, React.js e Node.js), com `Bootstrap` para estilização, `JWT` para autenticação de usuários, `mongoose` para a criação dos modelos e `puppeteer` para web scraping.

## Processo de desenvolvimento

O primeiro passo foi desenvolver a `API` de gerenciamento dos links, etabelecendo o modelo para o banco de dados e as suas rotas.

<p align="center">
    <img src="https://i.imgur.com/c41HJMT.png" width=400 />
    </br>
    <em>modelo de artigo</em>
</p>
<p align="center">
    <img src="https://i.imgur.com/8FeG0IA.png" width=400 />
    </br>
    <em>rotas de artigo</em>
</p>

Em seguida foi criado o client com `create-react-app` para a interface de gerenciamento, com uma página inicial de exibição dos artigos salvos (possibilitando edição e exclusão) e páginas de formulário para criação/edição dos links.

O terceiro passo foi a implementação da autenticação de usuários utilizando `JWT`, com a criação do modelo (e os métodos estáticos de login e cadastro) e a implementação de suas rotas no servidor. Também foram criadas as interfaces de login e de cadastro e implementado o gerenciamento da autenticação utilizando Context API.

<p align="center">
    <img src="https://i.imgur.com/2PHoFIT.png" width=400 />
    </br>
    <em>modelo de usuário</em>
</p>
<p align="center">
    <img src="https://i.imgur.com/W3HoD2Q.png" width=400 />
    </br>
    <em>rotas de usuário</em>
</p>

Posteriomente, foi implementado o `scraper` de artigos do blog devGo, que também possui um endpoint na API e é exibido no front possibilitando que o usuário salve qualquer link de artigo do blog com apenas um click.

Finalmente, tanto o `server`, quanto o `client` foram hospedados no [Render](https://render.com/).

## Rodando localmente

### Pré-requisitos

É necessário ter [Node.js e npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm), além do [Git](https://git-scm.com/downloads) instalados na sua máquina.

### Rodando o backend

Primeiramente, é necessário criar uma  um banco de dados no Atlas MongoDB e

```bash
# clonar esse repositório
$ git clone <https://github.com/plhrsl/devnology-trainee-test>

# entrar no diretório do servidor
$ cd server
```
No diretório do servidor, crie um arquivo `.env` com as variáveis indicadas em `.env.example`. Primeiramente, crie um cluster com o [MongoDB Atlas](https://www.mongodb.com/docs/atlas/tutorial/deploy-free-tier-cluster/) e atribua a URI de conexão a `MONGO_URI`. Além disso, atribua uma senha forte a `JWT_SECRET`.

```bash
# instalar as dependências do servidor
$ npm install

# iniciar o servidor em modo de desenvolvimento
$ npm run dev

# o servidor vai iniciar em localhost:5000
```

### Rodando o frontend

```bash
# entrar no diretório do client
$ cd web

# instalar as dependências do client
$ npm install

# iniciar o client em modo de desenvolvimento
$ npm start

# o client vai iniciar em localhost:3000
```
