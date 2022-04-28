btnSubmit.addEventListener("click", function(e) {   
    e.preventDefault();
   
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const idade = document.getElementById('idade').value;
    
    const setor = document.getElementById('setor').value;
    
    const radiosGenero = document.getElementsByName("genero");
    const radiosContrato = document.getElementsByName("contrato");

    const getSelectedRadio = (radios) => {
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                return radios[i].value;
            }
        }
    }
    
    const genero = getSelectedRadio(radiosGenero);
    const contrato = getSelectedRadio(radiosContrato);
    
    const cargos = document.getElementById('cargo');
    const cargo = cargos.options[cargos.selectedIndex].text;
    
    let data;

    if(document.getElementById('data').value) {
        data = new Date(document.getElementById('data').value);
    }
    const now  = new Date();

    if (!name) {
        alert('Informe o nome.')
    } else if (!email) {
        alert('Informe o email.')
    } else if (!idade) {
        alert('Informe a idade.')
    } else if (!genero) {
        alert('Informe o sexo.')
    } else if (!contrato) {
        alert('Informe a forma de contratação.')
    } else if (!cargo) {
        alert('Informe o cargo.')
    } else if (!setor) {
        alert('Informe o setor.')
    } else if (!data) {
        alert('Informe a data de registro.')
    } else if (name.length < 5) {
        alert('O nome precisa ter pelo menos 5 caracteres.')
    } else if (data.getFullYear() < 2021) {
        alert('A data de registro não pode ser anterior ao ano de 2021.')
    } else if (data > now) {
        alert('A data de registro não pode ser posterior a data atual.')
    } else if (idade < 18) {
        alert('A idade não pode ser menor que 18 Anos.')

    } else {
        const res = { name, email, idade, genero, contrato, cargo, setor, data }

        alert(JSON.stringify(res));
    }
})