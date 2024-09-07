function pesquisar(){

    let section = document.getElementById("resultados-pesquisa")
    // console.log(section);

    let campoPesquisa = document.getElementById("campo-pesquisa").value
   
    let resultados = ""

    if (campoPesquisa == ''){
        section.innerHTML = "Nada foi encontrado"
        return
    }

    let nome = ""
    let descricao = ""
    let tag = ""
       

    for (let dado of dados) {
        nome = dado.nome.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tag = dado.tag.toLowerCase()
        if(nome.includes(campoPesquisa) || tag.includes(campoPesquisa)) {  

            resultados += `
            <div class="item-resultado">
            <h2>${dado.nome}</h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href=${dado.link} target="_blank">Mais informações</a>
            </div>`

        }
        
       
    }

    section.innerHTML = resultados

    

}


