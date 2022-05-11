# Bem vindo ao Desafio Callix - Space X

Este é o backend/api do desafio. Todas as requisições à [API](https://github.com/r-spacex/SpaceX-API) da [_Space X_](https://spacex.com) são feitas aqui e já formatado para tratamento no frontend.

## Sobre

Aqui ficam algumas informações sobre a API.

### Como foi feito?

Esta api foi feita utilizando [_Typescript_](https://www.typescriptlang.org/docs/) como linguagem de programação, [_Express.js_](https://expressjs.com/) para roteamento e criação do servidor, [_Axios_](https://axios-http.com/) para requisições à APIs terceiras e outros pacotes que criam o ecosistema backend.

### O que essa API faz?

Basicamente essa API busca lançamentos futuros e passados da _Space X_ e entrega apenas os dados necessários para que o frontend exiba-os de forma elegante.

## Instalação

Para fazer a instalação é muito simples, siga os passos abaixo para que tudo funcione corretamente.

1. Clone este repositório utilizando `git clone https://github.com/marcelloc97/dcallix-backend.git` ou utilize sua ferramenta favorita.
2. Navegue à pasta `dcallix-backend` ou como você a nomeou utlizando `cd nome_da_pasta`.
3. Digite `yarn` ou `npm install` para instalar todas as dependências em sua máquina.
4. Após isso use `yarn dev` para inicializar em modo desenvolvimento ou `yarn start` para inicializar modo produção.

Agora aproveite a API :)
Se caso quiser contribuir, faça um Fork deste repositório, altere e mande um Pull Request para que eu possa atualizá-lo. Lembre-se de criar uma branch respectiva ao que você está fazendo, ex: `feature/nome-da-branch`.

## Vendo mais a fundo

Agora vamos ver um pouco mais a fundo. Após fazer toda a instalação do repositório, vamos navergar pelos arquivos e explicar o que cada um faz.
Logo na raíz do código-fonte temos:

* `.gitignore`
* `index.ts`
* `package.json`
* `README.md` <- você está aqui
* `tsconfig.json`
* `.env`

***

* `src`

Vamos ver um pouco mais o que cara arquivo da raíz faz.

### .gitignore

Aqui ficam os arquivos no qual o git vai ignorar quando fizer commit e push.
Siga a [documentação](https://git-scm.com/doc) para mais informações.

### index.ts

O index.ts é responsável pela configuração e inicialização do servidor express.

### package.json

Este arquivo é responsável por tudo na API, não precisamos ir mais a fundo sobre.

### tsconfig.json

Este arquivo é necessário para que o Typescript funcione corretamente, nele pode-se configura como será a build, execução e até como ele vai transpilar o código para Javascript, nesse caso, utilizando CommonJS.

### .env

Calma, eu sei que o arquivo não veio quando você clonou o repositório, mas você pode criá-lo na raíz da API.
O arquivo `.env` (respectivo a _environment_) é responsável por administrar/organizar chaves importantes para a API. Ex:

```js
  PORT = 3333
  DATABASE_KEY = chave_aqui
```

### src

Agora vamos para o principal deste repositório, a pasta `src`.

#### O que temos dentro dela?

Nela há uma série de arquivos, vamos abordá-los com calma.
Na raíz da src temos três pastas, sendo elas:

* `controllers`
* `interfaces`
* `services`

e um arquivo chamado `routes.ts`.

#### O que o _routes.ts_ faz?

Basicamente ele separa as rotas que a API vai cobrir.
Ex:

* `http://localhost:3333/launches/next`

Acima há um exemplo de como fica a url da rota `/launches/next`. Ele cria esta rota e quando é chamada pelo frontend ou pelo browser (isso sendo método **GET**), dispara uma função com parâmetros `request` e `response` onde `request` é o que o frontend requisitou para a API e `response` o que a API vai devolver pro frontend.

#### controllers

Dentro desta pasta há todos os controladores das rotas. Lembra quando mencionei que a rota chamada dispara uma função? Então, ela chamará as funções que estão criadas dentro de um controller.
Cada controller tem sua responsabilidade de tratar o dado, seja do banco de dados até uma API terceira. Ele tratará e fará a `response` dessas informações de volta para quem a requisitou.

Dentro desta pasta temos então os arquivos:

* `index.ts`
* `previousController.ts`
* `upcomingController.ts`

##### controllers/index.ts

Este arquivo apenas exporta todos os que estão dentro da pasta para facilitar a importação em outros arquivos de fora.

##### controllers/previousController.ts

Aqui é onde a mágica acontece! Dentro deste arquivo basicamente fazemos as requisições à API da Space X utilizando dois `services`, sendo eles `getPreviousLaunch` e `getLatestLaunches`, mas falaremos sobre eles depois.
