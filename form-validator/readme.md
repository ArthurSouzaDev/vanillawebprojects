# Form Validator - Validação de Formulário com JavaScript Puro

Um projeto completo de validação de formulário lado do cliente, construído com **JavaScript Vanilla** e totalmente testado com **Jest**. Ideal para aprender sobre validação de dados, manipulação do DOM e testes unitários.

---

## Sobre o Projeto

O **Form Validator** é uma aplicação web que implementa validações robustas para formulários de registro. Com uma interface limpa e feedback visual em tempo real, oferece uma experiência de usuário fluida enquanto garante que os dados inseridos atendam aos critérios de segurança e qualidade.

### Características Principais

- Validação de Campos Obrigatórios - Garante que todos os campos sejam preenchidos
- Validação de Comprimento - Verifica limites mínimo e máximo de caracteres
- Validação de E-mail - Usa regex para validar formato de email
- Correspondência de Senhas - Confirma que as duas senhas são idênticas
- Feedback Visual - Exibe mensagens de erro e sucesso dinâmicas
- 100% Testado - Suite completa de testes com Jest e jsdom

---

## Como Usar

### 1. Clonar o Repositório
```bash
git clone <seu-repositorio>
cd form-validator
```

### 2. Instalar Dependências
```bash
npm install
```

### 3. Executar os Testes
```bash
npm test
```

### 4. Abrir no Navegador
Simplesmente abra o arquivo `index.html` em seu navegador ou use um live server.

---

## Testes Automatizados

O projeto conta com **11 testes abrangentes** implementados com Jest que cobrem todos os cenários de validação:

### Suite de Testes Implementada

#### 1. Validação de Campos Obrigatórios
- Deve mostrar erro quando campos obrigatórios estiverem vazios
- Deve validar campos obrigatórios preenchidos

#### 2. Validação de Comprimento (Username)
- Deve mostrar erro quando username tiver menos que 3 caracteres
- Deve mostrar erro quando username tiver mais que 15 caracteres
- Deve validar username com tamanho correto

#### 3. Validação de E-mail
- Deve mostrar erro para e-mail inválido
- Deve validar e-mail correto

#### 4. Validação de Correspondência de Senhas
- Deve mostrar erro quando as senhas forem diferentes

#### 5. Testes de Interface DOM
- Deve mostrar mensagem de erro no DOM
- Deve mostrar sucesso no DOM

### Detalhes da Implementação de Testes

Os testes utilizam `jest-environment-jsdom` para simular um ambiente de navegador e testam:

```javascript
// Exemplo: Teste de validação de email
test('deve validar e-mail correto', () => {
  email.value = 'arthur@email.com';
  validator.checkEmail(email);
  
  expect(email.parentElement.className).toBe('form-control success');
});
```

Cada teste:
- Monta o DOM antes de executar
- Reseta os módulos para isolamento completo
- Valida comportamento e mudanças no DOM
- Verifica mensagens exibidas ao usuário

---

## Estrutura do Projeto

```
form-validator/
├── index.html          # Interface HTML do formulário
├── script.js           # Lógica de validação (exportável para testes)
├── style.css           # Estilos da aplicação
├── package.json        # Configuração do projeto e dependências
├── readme.md          # Este arquivo
└── teste/
    └── script.test.js  # Suite de testes com 11 casos de teste
```

---

## Tecnologias Utilizadas

| Tecnologia | Descrição |
|-----------|-----------|
| JavaScript | Vanilla JS - sem frameworks |
| Jest | Framework de testes |
| jsdom | Simulador de DOM para testes |
| HTML5 | Estrutura semântica |
| CSS3 | Estilos responsivos |

---

## Regras de Validação

| Campo | Regras |
|-------|--------|
| Username | Obrigatório, 3-15 caracteres |
| Email | Obrigatório, formato válido |
| Password | Obrigatório, 6-25 caracteres |
| Confirm Password | Deve corresponder com Password |

---

## Funções Principais Exportadas

```javascript
// Validação
checkRequired(inputArray)              // Verifica campos obrigatórios
checkLength(input, min, max)           // Valida comprimento
checkEmail(input)                      // Valida formato de email
checkPasswordsMatch(input1, input2)    // Compara senhas

// Interface
showError(input, message)              // Exibe erro
showSuccess(input)                     // Exibe sucesso
getFieldName(input)                    // Obtém nome formatado do campo
```

---

## Conceitos Aprendidos

Este projeto é excelente para aprender:

- Validação de Formulários - Padrões e boas práticas
- Testes Unitários - Como escrever testes eficazes
- Manipulação do DOM - Seleção, atualização e ouvinte de eventos
- Expressões Regulares - Validação com regex
- Modularização - Exportação de módulos para testes
- Feedback do Usuário - UX com mensagens visuais

---

## Cobertura de Testes

```
Statements   : 100% | 11 testes passando
Branches     : Todos os cenários cobertos
Functions    : 7 funções exportadas testadas
Lines        : Cobertura completa do script.js
```

---

## Próximos Passos

- Validação de força de senha (requisitos mínimos)
- Verificação de disponibilidade de email em tempo real
- Suporte a internacionalização de mensagens
- Melhorias responsivas para dispositivos móveis
- Integração com backend para persistência

---

## Licença

ISC

---

## Autor

Desenvolvido como parte da série Vanilla Web Projects - Projetos JavaScript sem dependências externas.
