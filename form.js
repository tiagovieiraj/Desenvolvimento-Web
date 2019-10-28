function validaForm(frm) {
    //verifica se o campo nome foi preenchido e 
    //possui no mínimo três caracteres
    if (frm.nome.value == "" || frm.nome.value === null || frm.nome.value.lenght < 3) {
        alert("Por favor, digite seu nome.");
        frm.nome.focus();
        //o form não é enviado
        return false;
    }

    if (frm.idade.value == "" || frm.idade.value === null ) {
        alert("Por favor, digite sua idade.");
        frm.idade.focus();
    }

    
    if (frm.hobbie.value == "" || frm.hobbie.value === null ) {
        alert("Por favor, conte-nos um pouco sobre você.");
        frm.hobbie.focus();
        return false;
    }
}