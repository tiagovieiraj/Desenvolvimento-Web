function validaForm(event) {
    event.preventDefault();
    var frm = event.target.elements;
    if (!frm.nome.value || frm.nome.value.length < 3) {
        alert("Por favor, digite seu nome.");
        frm.nome.focus();
    }

    if (!frm.idade.value) {
        alert("Por favor, digite sua idade.");
        frm.idade.focus();
    }

    if (!frm.hobbie.value) {
        alert("Por favor, conte-nos um pouco sobre você.");
        frm.hobbie.focus();
    }
}