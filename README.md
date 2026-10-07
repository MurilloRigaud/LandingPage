# Tico Film — Loja Automotiva

Site institucional da **Tico Film**, desenvolvido para apresentar a empresa, seus serviços automotivos, avaliações de clientes e um visualizador interativo de personalização veicular.

O projeto foi construído com foco em uma experiência moderna, responsiva e coerente com a identidade visual da marca, utilizando uma paleta escura com destaques em vermelho.

---

## Sobre o projeto

A aplicação funciona como uma vitrine digital da Tico Film, reunindo informações institucionais, serviços oferecidos, avaliações de clientes e recursos interativos.

Entre os principais objetivos do projeto estão:

- apresentar os serviços da loja de forma clara e organizada;
- reforçar a identidade visual da Tico Film;
- facilitar o contato com a empresa pelo WhatsApp;
- oferecer uma navegação responsiva para desktop, tablet e celular;
- permitir que o usuário visualize possibilidades de personalização do veículo;
- integrar avaliações reais do Google, quando a integração estiver habilitada.

---

## Funcionalidades

### Página inicial

A Home conta com um carrossel de banners responsivo, utilizado para destacar campanhas, serviços e comunicações importantes da empresa.

### Serviços

Página responsável por apresentar os principais serviços oferecidos pela Tico Film, com navegação para páginas individuais com mais detalhes.

Entre os serviços apresentados no projeto estão:

- películas automotivas;
- rastreadores;
- plotagem automotiva;
- acessórios automotivos;
- estética e personalização veicular.

### Páginas de serviço

Cada serviço pode possuir uma página própria com:

- apresentação;
- imagem de destaque;
- benefícios;
- diferenciais;
- opções disponíveis;
- informações complementares.

### Quem Somos

Seção institucional com informações sobre a empresa, experiência, missão, compromisso e diferenciais.

### Visualizador / Simulador

Recurso interativo desenvolvido para permitir que o usuário visualize alterações estéticas no veículo antes da contratação do serviço.

Dependendo da opção selecionada, o simulador pode trabalhar com:

- alteração visual da carroceria;
- aplicação de cores;
- visualização de películas;
- comparação entre diferentes opções de personalização.

### Avaliações

Página destinada à exibição de avaliações de clientes.

A arquitetura do projeto permite integrar avaliações reais do Google por meio de uma API intermediária no backend, evitando a exposição de credenciais no frontend.

### Contato

Área com informações de contato da empresa e acesso rápido ao WhatsApp.

### WhatsApp flutuante

O site possui um botão global de WhatsApp que permanece disponível durante a navegação entre as páginas.

---

## Tecnologias utilizadas

### Frontend

- Angular 21
- TypeScript
- Angular Router
- Angular Material
- Angular CDK
- RxJS
- HTML5
- SCSS / CSS
- Material Symbols

### Ferramentas de desenvolvimento

- Angular CLI 21
- TypeScript 5.9
- npm
- Vitest
- Prettier

### Backend para avaliações do Google

Quando a integração com avaliações estiver habilitada, a arquitetura pode utilizar:

- Node.js
- Express
- Google Places API
- dotenv
- CORS

A chave da API do Google deve permanecer exclusivamente no backend.

---

## Estrutura do projeto

Uma visão simplificada da organização da aplicação:

```text
LandingPage/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── header/
│   │   │   ├── footer/
│   │   │   └── pages/
│   │   │       ├── home/
│   │   │       ├── servicos/
│   │   │       ├── quem-somos/
│   │   │       ├── avaliacoes/
│   │   │       ├── contato/
│   │   │       └── simulador/
│   │   │
│   │   ├── services/
│   │   ├── app.config.ts
│   │   ├── app.routes.ts
│   │   └── app.html
│   │
│   ├── assets/
│   ├── styles.scss
│   └── index.html
│
├── server/                 # opcional: integração com Google Reviews
│   ├── server.js
│   └── .env
│
├── angular.json
├── package.json
└── README.md
```

> A estrutura exata pode variar conforme a evolução do projeto.

---

## Pré-requisitos

Antes de executar o projeto, tenha instalado:

- Node.js em uma versão compatível com Angular 21;
- npm;
- Angular CLI, opcionalmente instalado globalmente.

Para verificar suas versões:

```bash
node -v
npm -v
ng version
```

---

## Instalação

Clone o repositório:

```bash
git clone URL_DO_REPOSITORIO
```

Entre na pasta do projeto:

```bash
cd LandingPage
```

Instale as dependências:

```bash
npm install
```

---

## Executando o projeto

Para iniciar o servidor de desenvolvimento:

```bash
npm start
```

ou:

```bash
ng serve
```

Depois, abra no navegador:

```text
http://localhost:4200
```

A aplicação será atualizada automaticamente durante o desenvolvimento sempre que os arquivos forem alterados.

---

## Build de produção

Para gerar uma versão otimizada do projeto:

```bash
npm run build
```

ou:

```bash
ng build
```

Os arquivos de produção serão gerados no diretório configurado pelo Angular.

---

## Testes

Para executar os testes:

```bash
npm test
```

---

## Integração com avaliações do Google

A integração com avaliações deve ser feita por meio de um backend ou função serverless.

### Arquitetura recomendada

```text
Google Places API
        ↓
Node / Express
        ↓
/api/avaliacoes
        ↓
Angular
        ↓
Página de avaliações
```

Essa abordagem evita colocar a chave da API do Google diretamente no código Angular.

### Variáveis de ambiente

Crie um arquivo:

```text
server/.env
```

Exemplo:

```env
GOOGLE_PLACES_API_KEY=SUA_CHAVE_AQUI
GOOGLE_PLACE_ID=SEU_PLACE_ID_AQUI
PORT=3000
```

Nunca publique esse arquivo no repositório.

Adicione ao `.gitignore`:

```gitignore
server/.env
```

### Desenvolvimento local

Caso o backend esteja configurado, execute em um terminal:

```bash
node server/server.js
```

E em outro terminal:

```bash
npm start
```

Exemplo de URLs locais:

```text
Frontend: http://localhost:4200
Backend:  http://localhost:3000
```

---

## Segurança

Algumas recomendações importantes para este projeto:

- nunca armazenar chaves privadas diretamente no Angular;
- não versionar arquivos `.env`;
- restringir chaves de APIs no Google Cloud;
- utilizar HTTPS em produção;
- manter dependências atualizadas;
- validar dados recebidos de APIs externas;
- utilizar `rel="noopener noreferrer"` em links externos abertos em nova aba.

---

## Responsividade

O projeto foi desenvolvido para funcionar em diferentes tamanhos de tela.

Os principais layouts contemplam:

- desktop;
- tablet;
- smartphones.

São utilizadas técnicas como:

```css
clamp()
minmax()
grid
flexbox
aspect-ratio
media queries
```

O objetivo é manter a identidade visual da marca sem comprometer a navegação em dispositivos menores.

---

## Identidade visual

O site utiliza principalmente:

- preto como fundo principal;
- branco para textos;
- vermelho como cor de destaque;
- cinza em textos secundários e bordas;
- verde exclusivamente em elementos relacionados ao WhatsApp.

A proposta visual busca transmitir:

- tecnologia;
- estética automotiva;
- segurança;
- personalização;
- profissionalismo.

---

## Boas práticas adotadas

O projeto utiliza ou prevê:

- componentes reutilizáveis;
- rotas Angular;
- layout responsivo;
- HTML semântico;
- componentes standalone;
- carregamento dinâmico de dados;
- separação entre frontend e backend;
- proteção de credenciais;
- estados de carregamento e erro;
- atributos de acessibilidade;
- textos alternativos para imagens;
- navegação compatível com diferentes dispositivos.

---

## Melhorias futuras

Algumas evoluções previstas ou recomendadas para o projeto:

- integração definitiva das avaliações do Google;
- cache de avaliações no backend;
- página 404 personalizada;
- títulos e descrições SEO por rota;
- melhorias no simulador;
- otimização e compressão de imagens;
- lazy loading;
- melhorias adicionais de acessibilidade;
- integração com redes sociais;
- inclusão de localização real da loja;
- painel simples para atualização de conteúdos;
- otimização de Core Web Vitals.

---

## Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm start` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera o build de produção |
| `npm run watch` | Executa build em modo de observação |
| `npm test` | Executa os testes |
| `ng serve` | Inicia diretamente o Angular Dev Server |

---

## Contato

**Tico Film — Loja Automotiva**

Vitória da Conquista — Bahia

WhatsApp:

```text
(77) 98116-6684
```

Link direto:

```text
https://wa.me/5577981166684
```

---

## Autor

Projeto desenvolvido para a **Tico Film — Loja Automotiva**.

Desenvolvimento e manutenção do site:

```text
Murillo Rigaud dos Santos Oliveira
```

GitHub:

```text
https://github.com/MurilloRigaud
```

---

## Licença

Este projeto foi desenvolvido para uso da Tico Film.

O código, identidade visual, imagens, logotipos e demais conteúdos da marca devem ser utilizados de acordo com a autorização de seus respectivos proprietários.

---

<p align="center">
  <strong>Tico Film — Estética, proteção e tecnologia para o seu veículo.</strong>
</p>
