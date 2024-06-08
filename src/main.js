const apiUrl = "https://fakestoreapi.com/products";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#botao_criar").addEventListener("click", criar);
  document
    .querySelector("#botao_visualizar")
    .addEventListener("click", visualizar);
  document
    .querySelector("#botao_atualizar")
    .addEventListener("click", atualizar);
  document.querySelector("#botao_excluir").addEventListener("click", excluir);
});

function criar(event) {
  event.preventDefault();
  const nomeInput = document.getElementById("nomeAd");
  const precoInput = document.getElementById("precoAd");
  const descInput = document.getElementById("descAd");
  const catInput = document.getElementById("categoriaAd");

  if (nomeInput && precoInput && descInput && catInput) {
    const nome = nomeInput.value;
    const preco = parseFloat(precoInput.value);
    const desc = descInput.value;
    const cat = catInput.value;

    const dados = {
      title: nome,
      price: preco,
      description: desc,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Collage_of_Six_Cats-02.jpg/420px-Collage_of_Six_Cats-02.jpg",
      category: cat,
    };

    fetch(apiUrl, {
      method: "POST", // Método HTTP para Criar
      headers: {
        "Content-Type": "application/json", // Cabeçalho da requisição
      },
      body: JSON.stringify(dados), // Corpo da requisição
    })
      .then((response) => response.json()) // Converter a resposta para JSON
      .then((data) => {
        let div = document.getElementById("responseAd");
        div.innerHTML = "";
        let resposta = document.createElement("p");
        let nomeRes = document.createElement("p");
        let precoRes = document.createElement("p");
        let idRes = document.createElement("p");
        let descRes = document.createElement("p");
        let catRes = document.createElement("p");
        div.appendChild(resposta);
        resposta.innerText = "Resposta:";
        div.appendChild(idRes);
        idRes.innerText = `Id: ${data.id}`;
        div.appendChild(nomeRes);
        nomeRes.innerText = `Nome: ${data.title}`;
        div.appendChild(precoRes);
        precoRes.innerText = `Preço: ${data.price}`;
        div.appendChild(descRes);
        descRes.innerText = `Descrição: ${data.description}`;
        div.appendChild(catRes);
        catRes.innerText = `Categoria: ${data.category}`;

        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } else {
    console.error("Elementos de entrada não encontrados");
  }
}

function visualizar(event) {
  event.preventDefault();
  const idVi = document.getElementById("idenVi");

  if (idVi) {
    const id = idVi.value;

    fetch(`${apiUrl}/${id}`)
      .then((res) => res.json())
      .then((data) => {
        let div = document.getElementById("responseVi");
        div.innerHTML = "";
        let resposta = document.createElement("p");
        let nomeRes = document.createElement("p");
        let precoRes = document.createElement("p");
        let idRes = document.createElement("p");
        let descRes = document.createElement("p");
        let catRes = document.createElement("p");
        div.appendChild(resposta);
        resposta.innerText = "Resposta:";
        div.appendChild(idRes);
        idRes.innerText = `Id: ${data.id}`;
        div.appendChild(nomeRes);
        nomeRes.innerText = `Nome: ${data.title}`;
        div.appendChild(precoRes);
        precoRes.innerText = `Preço: ${data.price}`;
        div.appendChild(descRes);
        descRes.innerText = `Descrição: ${data.description}`;
        div.appendChild(catRes);
        catRes.innerText = `Categoria: ${data.category}`;

        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } else {
    console.error("Elementos de entrada não encontrados");
  }
}

function atualizar(event) {
  event.preventDefault();

  const idInput = document.getElementById("idenAt");
  const nomeInput = document.getElementById("nomeAt");
  const precoInput = document.getElementById("precoAt");
  const descInput = document.getElementById("descAt");
  const catInput = document.getElementById("categoriaAt");

  if (idInput && nomeInput && precoInput && descInput && catInput) {
    const id = parseInt(idInput.value);
    const nome = nomeInput.value;
    const preco = parseFloat(precoInput.value);
    const desc = descInput.value;
    const cat = catInput.value;

    const dados = {
      title: nome,
      price: preco,
      description: desc,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Collage_of_Six_Cats-02.jpg/420px-Collage_of_Six_Cats-02.jpg",
      category: cat,
    };

    fetch(`${apiUrl}/${id}`, {
      method: "PUT", // Método HTTP para Atualizar
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dados),
    })
      .then((response) => response.json())
      .then((data) => {
        let div = document.getElementById("responseAt");
        div.innerHTML = "";
        let resposta = document.createElement("p");
        let nomeRes = document.createElement("p");
        let precoRes = document.createElement("p");
        let idRes = document.createElement("p");
        let descRes = document.createElement("p");
        let catRes = document.createElement("p");
        div.appendChild(resposta);
        resposta.innerText = "Resposta:";
        div.appendChild(idRes);
        idRes.innerText = `Id: ${data.id}`;
        div.appendChild(nomeRes);
        nomeRes.innerText = `Nome: ${data.title}`;
        div.appendChild(precoRes);
        precoRes.innerText = `Preço: ${data.price}`;
        div.appendChild(descRes);
        descRes.innerText = `Descrição: ${data.description}`;
        div.appendChild(catRes);
        catRes.innerText = `Categoria: ${data.category}`;

        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } else {
    console.error("Elementos de entrada não encontrados");
  }
}

function excluir(event) {
  event.preventDefault();
  const idEx = document.getElementById("idenEx");

  if (idEx) {
    const id = idEx.value;

    fetch(`${apiUrl}/${id}`, {
      method: "DELETE", // Método HTTP para Deletar
    })
      .then((res) => res.json())
      .then((data) => {
        let div = document.getElementById("responseEx");
        div.innerHTML = "";
        let resposta = document.createElement("p");
        let nomeRes = document.createElement("p");
        let precoRes = document.createElement("p");
        let idRes = document.createElement("p");
        let descRes = document.createElement("p");
        let catRes = document.createElement("p");
        div.appendChild(resposta);
        resposta.innerText = "Produto excluído:";
        div.appendChild(idRes);
        idRes.innerText = `Id: ${data.id}`;
        div.appendChild(nomeRes);
        nomeRes.innerText = `Nome: ${data.title}`;
        div.appendChild(precoRes);
        precoRes.innerText = `Preço: ${data.price}`;
        div.appendChild(descRes);
        descRes.innerText = `Descrição: ${data.description}`;
        div.appendChild(catRes);
        catRes.innerText = `Categoria: ${data.category}`;

        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } else {
    console.error("Elementos de entrada não encontrados");
  }
}
