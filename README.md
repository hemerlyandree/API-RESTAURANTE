# 🍽️ API de Restaurante

API REST para gerenciamento de um restaurante: listagem de produtos, abertura e fechamento de mesas, registro de pedidos e cálculo do total da conta.

## 📋 Sumário

- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Estrutura do projeto](#-estrutura-do-projeto)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação e execução](#-instalação-e-execução)
- [Banco de dados](#-banco-de-dados)
- [Rotas da API](#-rotas-da-api)
- [Testando com o Insomnia](#-testando-com-o-insomnia)
- [Tratamento de erros e validações](#-tratamento-de-erros-e-validações)
- [Autor](#-autor)

## ✅ Funcionalidades

- Listar os alimentos/produtos do cardápio
- Abrir e fechar mesas
- Realizar pedidos vinculados a uma mesa
- Adicionar itens aos pedidos
- Calcular o total da conta de uma mesa
- Validação de dados de entrada com **Zod**
- Tratamento centralizado de exceções

## 🛠️ Tecnologias

| Tecnologia | Uso |
| --- | --- |
| [Node.js](https://nodejs.org/) | Ambiente de execução |
| [TypeScript](https://www.typescriptlang.org/) | Tipagem estática |
| [Express](https://expressjs.com/) | Servidor HTTP e rotas |
| [SQLite](https://www.sqlite.org/) | Banco de dados |
| [Knex.js](https://knexjs.org/) | Query builder e migrations |
| [Zod](https://zod.dev/) | Validação de dados |
| [Insomnia](https://insomnia.rest/) | Testes das requisições |

## 📁 Estrutura do projeto

```
.
├── src
│   ├── controllers     # Regras de cada rota (lógica das requisições)
│   ├── database        # Conexão, migrations e seeds do banco
│   ├── middlewares     # Validações e tratamento de erros
│   ├── routes          # Definição das rotas da API
│   ├── utils           # Utilitários (ex.: classe de erro da aplicação)
│   └── server.ts       # Ponto de entrada da aplicação
├── Requests-Insomnia   # Coleção de requisições para importar no Insomnia
├── knexfile.ts         # Configuração do Knex
├── package.json
└── tsconfig.json
```

## 📌 Pré-requisitos

- [Node.js](https://nodejs.org/) 18 ou superior
- npm (já vem com o Node.js)
- [Insomnia](https://insomnia.rest/download) (opcional, para testar a API)


## 🗄️ Banco de dados

O projeto utiliza **SQLite**, então não é necessário instalar nenhum servidor de banco de dados: o arquivo `.db` é criado automaticamente na pasta `src/database` ao rodar as migrations.

O Knex está configurado com **restrição de chaves estrangeiras habilitada**, garantindo a integridade dos relacionamentos entre as tabelas.

### Principais entidades

| Tabela | Descrição |
| --- | --- |
| `products` | Alimentos/itens do cardápio (nome e preço) |
| `tables` | Mesas do restaurante |
| `tables_sessions` | Registro de abertura e fechamento de cada mesa |
| `orders` | Itens pedidos em uma mesa (produto, quantidade e preço) |

> Ajuste os nomes das tabelas conforme as suas migrations.

## 🔗 Rotas da API

> Ajuste os caminhos conforme o que está definido na pasta `src/routes`.

### Produtos

| Método | Rota | Descrição |
| --- | --- | --- |
| `GET` | `/products` | Lista todos os alimentos do cardápio |

### Mesas

| Método | Rota | Descrição |
| --- | --- | --- |
| `GET` | `/tables` | Lista as mesas |

### Sessões de mesa

| Método | Rota | Descrição |
| --- | --- | --- |
| `GET` | `/tables-sessions` | Lista as sessões de mesa |
| `POST` | `/tables-sessions` | Abre uma mesa |
| `PATCH` | `/tables-sessions/:id` | Fecha uma mesa |

**Exemplo de corpo para abrir uma mesa (`POST`):**

```json
{
  "table_id": 1
}
```

### Pedidos

| Método | Rota | Descrição |
| --- | --- | --- |
| `POST` | `/orders` | Realiza um pedido para uma mesa aberta |
| `GET` | `/orders/table-session/:table_session_id` | Lista os pedidos de uma mesa |
| `GET` | `/orders/table-session/:table_session_id/total` | Calcula o total da conta da mesa |

**Exemplo de corpo para realizar um pedido (`POST`):**

```json
{
  "table_session_id": 1,
  "product_id": 3,
  "quantity": 2
}
```

**Exemplo de resposta do total da conta:**

```json
{
  "total": 89.8,
  "quantity": 4
}
```

## 🧪 Testando com o Insomnia

O arquivo `Requests-Insomnia` na raiz do projeto contém todas as requisições prontas.

1. Abra o Insomnia
2. Vá em **Import** (ou `Ctrl + O`)
3. Selecione o arquivo `Requests-Insomnia`
4. Com o servidor rodando, execute as requisições

## ⚠️ Tratamento de erros e validações

- Os dados enviados nas requisições são validados com **Zod** (middlewares).
- Erros de negócio (ex.: pedir em uma mesa fechada) retornam mensagens claras com o status HTTP adequado.
- Erros inesperados são capturados por um middleware global de tratamento de exceções.

**Exemplo de resposta de erro:**

```json
{
  "message": "Mesa fechada"
}
```

## 👩‍💻 Autor

Feito por **[hemerlyandree](https://github.com/hemerlyandree)**.
