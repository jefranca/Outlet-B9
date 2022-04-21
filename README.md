# Outlet B9

## Languages & frameworks

<div align="center"><img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt=""/><span>&nbsp;</span>
 <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt=""/>  <span>&nbsp;</span>
 <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt=""/></div>
 
 ## Routes

### GET /
This route will list all items included.
Example:

```
[
  {
    "id": 1,
    "product": "Camisa Marvel",
    "size": "GG",
    "img": "{url da imagem}",
    "amount": 2,
    "value": 29
    ]
  },
   {
    "id": 2,
    "product": "Camisa Marvel",
    "size": "P",
    "img": "{url da imagem}",
    "amount": 1,
    "value": 29
    ]
  },
  {
    "id": 3,
    "product": "Camisa Harry Potter",
    "size": "P",
    "img": "{url da imagem}",
    "amount": 1,
    "value": 59
    ]
  }
]

```
### GET /item/:id
This route will list one item.
Example:

```
  {
    "id": 3,
    "product": "Camisa Marvel",
    "size": "GG",
    "img": "{url da imagem}",
    "amount": 2,
    "value": 29
    ]
  }

```
You need to send the id of the item in the link
Example:
```
  localhost:4000/item/3

```

### POST /item
This route will post a new item.
You need to send the new item
Example:
```
{
  "product": "Camisa Harry Potter",
  "size": "XG",
  "image": "{url da imagem}"
  "value": 59,
  "amount" :12
}
```

### PUT /item/sell/:id
This route will sell an item
You need to send the item id you wants to sell on the website
Example: If I want to delete the id:1, I'll send:
```
  localhost:3000/item/sell/1
```
The amount of the item will decrease 1.

### PUT /item/add
This route will add more amount to an item in the database
You need to send the id and the amount tou want to increase on the website
Example:
```
{
  "id":1,
  "amount":5
}
```
The amount of the item(id=1) will increase 5.

## 🚀 Instalando o Desafio

Siga os passos,

Clone esse repositorio
```
git clone https://github.com/jefranca/outlet-b9.git
```

Rode o comenado para instalar as dependências
```
npm i
```

Inicie usando
```
npm start
```

Use para desenvolvimento
```
npm run start:dev
```

## Made By

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/87549949?s=400&u=6d0fc77e66618e9da7b5dec5ce3f0b1b236aa10a&v=4" width="100px;" alt="Foto do jefranca no GitHub"/><br>
        <sub>
          <b>Jean França</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
