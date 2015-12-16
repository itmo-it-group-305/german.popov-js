/**
 * Created by gerh on 04.12.15.
 */
var form =
{tag:'form',
    child: [{tag:'button', text:'x'},
            {tag:'button', text:'Отправить', id:'send'},
            {tag:'label', text:'Имя'},
            {tag:'input', type:'text', id:'name'},
            {tag:'label', text:'Телефон'},
            {tag:'input', type:'text', id:'telephone'},
            {tag:'label', text:'Почта'},
            {tag:'input', type:'text', id:'email'}]
};

function builderHtml(obj) {
    for(i in obj){
        if(i=='tag'){   //проверка что не пустой
            elm=document.createElement(obj[i])
        }
        if(i=='text'){
            elm.innerHTML=obj[i];
        }
        if(i=='type' || i=='id'){
            elm.setAttribute(i,obj[i])
        }
    }
    return elm;
}

function builderForm(obj) {
    for (i in obj) {
        console.log('builderForm');
        if (i == 'tag') {
            parent = document.createElement(obj[i])
            }
        console.log(parent);
        if (i == 'child') {
            for (j in obj.child) {
                parent.appendChild(builderHtml(obj.child[j]))
            }
        }

    }
    return parent;
}
parent=document.getElementById('form');
console.log(parent);
parent.appendChild(builderForm(form));
function checkEmptyField (field) {
    return Boolean(field.value);
    }
document.getElementById('send').onclick=
function getFieldsForm() {
    var field = ['name', 'telephone', 'email'];
    for (i in field) {
        var obj = document.getElementById(field[i]);
        if (checkEmptyValue(obj)) {
        obj.style.border = '5px solid green';
            return true;//    снять красную рамку
        }else {
        obj.style.border = '5px solid red';  //установить крусную рамку
        }
    }
    return false;
};


//var str= '44:44'
//    ptr=/\d{2}:\d{2}/
//    ptr.test(str);      Разминка
//    //str.match(ptr);

// Проверка телефона
function checkPhone(str) {
    ptr=/b7\(d{3}\)\d{3}-\d{2}-\d{2}\b/;
    return ptr.test(str);
}