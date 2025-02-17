# StarCafé API  ☕

## Descrição
A **StarCafé API** é uma API REST que permite a gestão do cardápio e pedidos de uma cafeteria.
Os clientes podem consultar o menu, fazer pedidos, e a administração pode gerenciar os produtos disponíveis.

---

## Tecnologias Utilizadas
- Node.js
- Express
- Postman (para testes)

---

## **Endpoints da API**

### **1️⃣ Listar Cafés**
- **Rota:** `GET /cafes`
- **Funcionalidade:** Retorna a lista de todos os cafés disponíveis no menu.
- **Cabeçalhos:**
  - `Accept: application/json` → Define que o cliente espera resposta em JSON.
- **Respostas:**
  - `200 OK`: Retorna a lista de cafés.
  - **Exemplo:**
    ```json
    [
      {
        "id": 1,
        "nome": "Café Capuccino",
        "valor": 8.90,
        "tipo": "Capuccino"
      }
    ]
    ```

---

### **2️⃣ Buscar Café por ID**
- **Rota:** `GET /cafes/:id`
- **Funcionalidade:** Retorna um café específico pelo ID.
- **Cabeçalhos:**
  - `Accept: application/json`
- **Respostas:**
  - `200 OK`: Retorna o café encontrado.
  - `404 Not Found`: Se o ID não existir.
  - **Exemplo:**
    ```json
    {
      "id": 1,
      "nome": "Café Capuccino",
      "valor": 8.90,
      "tipo": "Capuccino"
    }
    ```

---

### **3️⃣ Criar um Novo Café**
- **Rota:** `POST /cafes`
- **Funcionalidade:** Adiciona um novo café ao menu.
- **Cabeçalhos:**
  - `Content-Type: application/json` → Define que o corpo da requisição está em JSON.
  - `Accept: application/json`
- **Corpo da Requisição:**
  ```json
  {
    "nome": "Expresso Duplo",
    "valor": 5.50,
    "tipo": "Expresso"
  }
  ```
- **Respostas:**
  - `201 Created`: Retorna o café criado.
  - `400 Bad Request`: Se faltar algum campo obrigatório.
  - **Exemplo de resposta:**
    ```json
    {
      "id": 3,
      "nome": "Expresso Duplo",
      "valor": 5.50,
      "tipo": "Expresso"
    }
    ```

---

### **4️⃣ Remover um Café**
- **Rota:** `DELETE /cafes/:id`
- **Funcionalidade:** Remove um café do menu pelo ID.
- **Cabeçalhos:**
  - `Accept: application/json`
- **Respostas:**
  - `200 OK`: Se o café foi removido com sucesso.
  - `404 Not Found`: Se o ID do café não existir.
  - **Exemplo:**
    ```json
    {
      "message": "Café removido com sucesso",
      "cafeRemovido": {
        "id": 3,
        "nome": "Expresso Duplo",
        "valor": 5.50,
        "tipo": "Expresso"
      }
    }
    ```

---

## **Códigos de Status e Justificativas**
| Código | Significado | Quando ocorre |
|---------|------------|---------------|
| `200 OK` | Requisição bem-sucedida | Ao listar cafés ou buscar um café existente |
| `201 Created` | Novo recurso criado | Ao adicionar um novo café |
| `400 Bad Request` | Requisição inválida | Se faltar algum campo obrigatório na criação do café |
| `404 Not Found` | Recurso não encontrado | Se o café não for encontrado pelo ID |

---

## **Como Rodar a API**
1. Instale as dependências:
   ```sh
   npm install
   ```
2. Inicie o servidor:
   ```sh
   node index.js
   ```
   ou, se estiver usando **nodemon**:
   ```sh
   nodemon index.js
   ```
3. Acesse os endpoints via Postman ou navegador.

---

# **Autor** ✍🏻
Desenvolvido por Flavia Mendes como parte do projeto StarCafé na disciplina Back-End ministrada pelos instrutores Thiago Ferreira e Marcelo Carboni. 🚀

