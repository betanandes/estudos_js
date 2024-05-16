//addEventListener só pode pegar um evento por vez. Ou seja, no exemplo abaixo só pegará o evento submt. 

const form = document.getElementById('forM')

forM.addEventListener('submit', function (event) { 
    event.preventDefault();
    const documento = document.getElementById('seuCpf').value;
    const nome = document.getElementById('seuNome').value;
    const idade = document.getElementById('suaIdade').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const seuNascimento = document.getElementById('seuNascimento').value;
    const nomeMae = document.getElementById('nomeMae').value;
    


    const formData = {
        documento: documento,
        nome: nome,
        idade: idade,
        sobrenome: sobrenome,
        seuNascimento: seuNascimento,
        nomeMae: nomeMae

    };

    //"cadastroData" é nome da chave que eu dou. É preciso informar uma chave e um valor.
    localStorage.setItem('cadastroData', JSON.stringify(formData));

    window.location.href = 'index.html';
});