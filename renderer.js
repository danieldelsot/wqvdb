const letra=['Q','E','T','U','P','A','D','G','J','L','Z','C','B'];

const chkcod=function(cod){
    if(cod.length!=6)return false;
    if(!/\d{5}[A-Z]/.test(cod))return false;
    let s=0;
    let l=0;
    for(let i=0;i<5;i++){
        s+=(i+1)*cod[i];
        l+=cod[i];
    }
    let x=s%7;
    l%=13;
    if(x>4||x==0)return false;
    if(letra[l]!=cod[5])return false;
    return x;
};

const comp=function(){
    let cod=$('#cod').val();
    let resp=$('#resp');
    resp.css({color:''});
    let id=chkcod(cod);
    if(!id){
        resp.css({color:'red'})
        resp.html('Código no válido.');
        return;
    }
    resp.html('Código válido para la categoría '+id+'.');
};

const gencod=function(n){
    let b=String(parseInt(Math.random()*9000+1000));
    let s=0;
    for(let i=0;i<b.length;i++)s+=b[i]*(i+2);
    s%=7;
    let a=(((n-s)%7)+7)%7;
    b=''+a+b;
    s=0;
    for(let i=0;i<b.length;i++)s+=b[i];
    s%=13;
    return ''+b+letra[s];
};

const cods=[0,gencod(1),gencod(2),gencod(3)];
const sols=[0,'7/13','25/52','3/10'];

const responder=function(n){
    let r=$('#sol'+n).val();
    if(r==sols[n]){
        $('#resp'+n).html('Correcto, tu código es '+cods[n]+'.');
        return;
    }
    $('#resp'+n).html('Incorrecto. Vuelve a intentarlo.');
};

const cargar=function(id){
    $('.cont').fadeOut(500);
    $('#'+id).fadeIn(500);
};

const paginar=function(n){
    $('.pag').fadeOut(500);
    let i=setInterval(()=>{
        $('#pag'+n).fadeIn(500);
        clearInterval(i);
    },500);
};

window.onload=function(){
    cargar('intro');
};