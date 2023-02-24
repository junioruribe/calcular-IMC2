function calcular() {
    
    var p,e,resultado,imc,esta,nom;
    nom=document.getElementById('txtNom').value;
    p=document.getElementById('txtPeso').value;
    e=document.getElementById('txtEstatura').value;
    if (validar(nom,p,e)==true) {
        imc=getIMC(p,e);
    esta=getEstado(imc);
    document.getElementById('txtimc').value=imc;
    document.getElementById('resultado').value=esta;
    } else {
        alert('intentalo de nuevo')
    }
    
}

function getIMC(peso,estatura) {
    var imc;
    imc=peso/(estatura*estatura);
    imc=imc.toFixed(1);
    return imc;
}

function getEstado(imc) {
    if (imc<18) {
        return 'Esta en bajo de peso';
    } else {
        if (imc>=18 && imc<=24) {
            return 'Esta en peso normal';
        } else {
            if (imc>25 && imc<=27) {
                return 'Esta en sobrepeso';
            } else {
                return 'Esta obeso';
            }
        }
    }
}

function limpiar() {
    document.getElementById('txtNom').value="";
    document.getElementById('txtPeso').value="";
    document.getElementById('txtEstatura').value="";
    document.getElementById('txtimc').value="";
    document.getElementById('resultado').value="";
}

function validar(nom,peso,esta) {
    var vali=true;
    if (nom===""|| peso==="" || esta==="") {
        alert('Faltan datos');
        vali=false;
    } else if (nom.lenght<4 || nom.lenght>20) {
        alert('El nombre debe ser superior de 4 y menor de 20 caracteres');
        vali=false;
    } else if (isNaN(peso)) {
        alert('Peso debe ser un numero');
        vali=false;
    }else if (isNaN(esta)) {
        alert('Estatura debe ser un numero');
        vali=false;
    }
    return vali;
}