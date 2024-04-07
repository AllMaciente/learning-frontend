const repositories = document.querySelector('.github')

function getApiGitHub(){
    fetch('https://api.github.com/users/AllMaciente/repos')
        .then(async res =>{
            if(!res.ok){
                throw new Error(res.status);
            }

            let data = await res.json();
            data.map( item =>   {
                let project = document.createElement('div');

                project.innerHTML = `
                <div class="project">
                    <div>
                        <h4 class="title">${ item.name}</h4>
                        <span class="dateCreate">${ Intl.DateTimeFormat('pt-BR').format(new Date(item.created_at))}</span>
                    </div>
                    <div>
                        <a href="${ item.html_url}" target="_blank">Url: ${ item.full_name}</a>
                        <span class="language"><span class="circle"></span>${ item.language}</span>
                    </div>
                </div>
                `

                repositories.appendChild(project);
            })
        })
}

getApiGitHub()