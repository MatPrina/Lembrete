# Documentação

## Sumário

1.  [Visão Geral](#vis%C3%A3o-geral)
2.  [Tecnologias Utilizadas](#tecnologias-utilizadas)
3.  [Funcionalidades](#funcionalidades)
4.  [Instalação e Configuração](#instala%C3%A7%C3%A3o-e-configura%C3%A7%C3%A3o)
----------

### 1. Visão Geral

Este projeto de lembretes foi criado para treinar e aprimorar conhecimentos em **React** e **Spring**. Ele fornece uma interface simples para o gerenciamento de lembretes, com funcionalidades de **cadastro** e **login** para que o usuário possa criar e acessar seus lembretes.

### 2. Tecnologias Utilizadas
-   **Linguagem:** JavaScript, Java
-   **Frameworks:** React, Spring
-   **Banco de Dados:** H2
-   **Ferramentas:** Git

### 3. Funcionalidades
-   **Cadastro**: O sistema permite que o usuário se cadastre para criar uma conta.
-   **Login**: Após o cadastro, o usuário pode fazer login para acessar seus lembretes.
-   **Adicionar Lembretes**: O usuário pode criar e salvar novos lembretes.
-   **Alterar Cadastro**: O sistema oferece a possibilidade de o usuário editar suas informações de cadastro.

### 4. Instalação e Configuração


#### Requisitos

Antes de iniciar, é necessário ter os seguintes requisitos instalados:

-   **Java 17 ou superior** (JDK)
-   **Maven** (para executar o backend)
-   **Node.js** (para executar o frontend)

#### Passos para Executar o Projeto

1.  **Clone o repositório**:

    `git clone https://github.com/MatPrina/Lembrete`
    `cd Lembrete` 
    
3.  **Execute o Backend**:
    
    -   Navegue até a pasta `back`:
    
        `cd back` 
        
    -   Execute o comando Maven para iniciar o servidor Spring:
        
        `mvn spring-boot:run` 
        
    -   O backend será iniciado na porta **8080**.
4.  **Execute o Frontend**:
    
    -   Abra um novo terminal e, no diretório raiz do projeto, navegue até a pasta `front`:
      
        `cd front` 
        
    -   Instale as dependências do React:
        
        `npm install` 
        
    -   Inicie o servidor de desenvolvimento:
     
        `npm start` 
        
    -   O frontend será iniciado na porta **3000**.

#### Acessando o Sistema

-   **Frontend**: Acesse `http://localhost:3000` no navegador para interagir com a interface do sistema.
-   **Backend**: O backend estará rodando em `http://localhost:8080`.