# Commerce Client FrontEnd API
<center><a href="https://github.com/rodrigoazv"><img alt="Por: " src="https://img.shields.io/github/followers/rodrigoazv?style=social"></a>  <a href="https://www.linkedin.com/in/rodrigo-azevedo-30885a164/    "><img alt="Tecnologias" src="https://img.shields.io/node/v/latest"></a></center>

## 💻 Sobre o projeto

Projeto foi desenvolvido como desafio tecnico a respeito da possibilidade de desenvolver as features nele especificadas.

## 🎨 Arquitetura e Tecnologias

A arquitetura da aplicação foi inspirada nos conceitos de clean architecture, buscando desacoplar conceitos e blocos, deixando o codigo altamente legível :

##### O Cliente foi montada utilizando o padrão de componentes junto ao redux, cada um com sua funcionalidade evitando dependências entre elas e desta forma tornando-a mais funcional e segura.

| Requerimento       |  Tecnologia   |
|--------------------|---------------|
| Nodejs             | >= 10.0       |


| Camadas        | Conteúdo                                           |Função                                   |
|----------------|----------------------------------------------------|-----------------------------------------|
| Componentes    |Componentes são uma lista de paginas reacts componentizadas e estilizadas                      | Exibem o conteudo da tela separado por blocos   |
| Pages          |São componentes que reprezentam a tela unindo todos os componentes                             | Unir componentes e exibir em routes             |
| Store          |Galeria de reducers/actions/services responsaveis pelo controle de estados e chamadas a api    | Reuso de funções (Error handler por exemplo )   |
| Styles         |Padrão de guia de estilos globais da aplicação                                                 | Centralizar uso de tipos                        |                                         |

## 🚀 Como executar o projeto

💡É necessário ter o NODEJS>=10.0 e a api do stone hero configurada para acesso.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [.Nodejs](https://nodejs.org/en/)
Além disto caso queira por as mãos no código é bom ter um editor como o [VSCode.](https://code.visualstudio.com/)

Visto que seja feito a configuração de todas as variaveis de ambiente, você pode seguir o passo a passo.


#### 🎲 Rodando o FrontEnd (client)

```bash

# Clone este repositório
$ git clone https://github.com/rodrigoazv/hero-cliente

# Acesse a pasta do projeto no terminal/cmd
$ cd commerce-client

# Instale as dependências
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ yarn start

# O servidor inciará na porta:3000 - acesse http://localhost:3000 ou na porta configurada no env example

```

# Lançamentos Principais

Esta primeira versão contempla as seguintes features

    - Adicionar produto ao carrinho ( Somente quantidade )
    - Enviar seu email para receber newsletter
    - Ver lista de produtos
    - Design responsivo

# Licença

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
