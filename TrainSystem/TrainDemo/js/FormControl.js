var i = 0;
var divIdNo = 1;
var documentWidth = $(document).width();
var documentHeight = $(document).height();


document.getElementById("add-input").onclick = function () {
    var namecount = i;
    var div1 = document.getElementById("test");
    var div;
    if ((i >= 3 && i % 3 == 0) || i == 0) {
        div = NewDiv();

    }
    else {
        div = document.getElementById("div" + divIdNo);
    }

    var table = NewObject("table");
    //姓名
    AddTr(table, InputObject("姓 名：", "请输入姓名", "name"));
    //职位
    AddTr(table, InputObject("职 位：", "请输入职位", "dept"));
    //电子邮箱
    AddTr(table, InputObject("电子邮箱：", "请输入正确电子邮箱", "email"));
    //电话号码
    AddTr(table, InputObject("电话号码：", "请输入正确电话号码", "phone"));
    //手机号码
    AddTr(table, InputObject("手机号码：", "请输入正确手机号码", "mobile"));
    var innerDiv = NewInnerDiv();
    innerDiv.appendChild(table);
    if ((i >= 3 && i % 3 == 0) || i == 0) {
        div.appendChild(innerDiv);

        div1.appendChild(div);
    }
    else {
        div.appendChild(innerDiv);
    }
    i++;

    if (i >= 3 && i % 3 == 0) {
        divIdNo++;
    }
};
function InputObject(spanText, placeholder, nameText) {
    var obj = new Object();
    obj.spanText = spanText;
    obj.placeholder = placeholder;
    obj.nameText = nameText;
    return obj;
}

function AddTr(table, obj) {
    var tr = NewObject("tr");

    var td1 = NewObject("td");
    var td2 = NewObject("td");


    var input = NewInput(obj.placeholder, obj.nameText,obj.spanText);



    var alertSpan = NewObject("span");
    alertSpan.style.color = "red";
    alertSpan.setAttribute("name", obj.nameText + "Span");
    alertSpan.innerText = "";

    td1.appendChild(input);
    td2.appendChild(alertSpan);

    tr.appendChild(td1);
    tr.appendChild(td2);
    table.appendChild(tr);
}

function NewObject(elementName) {
    var obj = document.createElement(elementName);

    return obj;
}
function NewInnerDiv() {
    var div = document.createElement("div");
    div.setAttribute("id", "innerDiv" + i);
    div.setAttribute("name", "innerDiv");
    div.setAttribute("class", "jumbotron");
    var styleStr = "";

    div.appendChild(NewCloseI("innerDiv" + i));
    styleStr += "width:" + documentWidth / 100 * 27.5 + "px; ";
    styleStr += "height:" + documentWidth / 100 * 20 + "px; ";
    styleStr += "float: left; "
    styleStr += "margin: 0.1% 0.1%; ";
    div.setAttribute("style", styleStr+"position:relative");
    return div;
}

function NewDiv() {
    var div = document.createElement("div");
    //div.setAttribute("class", "jumbotron");
    div.setAttribute("id", "div" + divIdNo);
    div.setAttribute("name", "div");
    //div.setAttribute("style", "position:relative");
    //iv.appendChild(NewCloseI("div" + divIdNo));
    return div;
}

function NewInput(placeholder, name,spanText) {

    var formcontrolDiv = document.createElement("div");
    formcontrolDiv.setAttribute("class", "form-group");
    formcontrolDiv.setAttribute("style", "margin:1%;");


    var input = document.createElement("input");
    var colDiv = document.createElement("div");

    colDiv.className = "col-sm-7";
    input.setAttribute("type", "text");
    input.setAttribute("class", "form-control");
    input.setAttribute("placeholder", placeholder);
    input.setAttribute("name", name);
    input.setAttribute("id", name + i);
    input.setAttribute("value", "");
    input.style.width = "180px";

    colDiv.appendChild(input);
    var span = NewObject("label");
    span.setAttribute("for", input.id);
    span.className = "control-label col-sm-5";
    span.style.marginLeft = "-40px";
    span.innerText = spanText;
    //colDiv.appendChild(input);

    formcontrolDiv.appendChild(span);
    formcontrolDiv.appendChild(colDiv);

    return formcontrolDiv;
}

function NewCloseI(id) {
    var div = document.createElement("div");
    div.setAttribute("style", "position:absolute;top:0;right:0;");

    var a = document.createElement("a");
    a.setAttribute("style", "text-decoration: none; cursor: pointer");
    a.setAttribute("onclick", "CloseDiv('" + id + "')");


    var ai = document.createElement("i");
    ai.setAttribute("style", "cursor: pointer;");
    ai.setAttribute("class", "fa fa-close fa");
    a.appendChild(ai);

    div.appendChild(a);
    return div;
}

function SetValue() {
    var nameString = StringBulider("name");
    //if (nameString == "error")
    //return false;
    var deptString = StringBulider("dept");
    if (deptString == "error")
        return false;
    var emailString = StringBulider("email");
    if (emailString == "error")
        return false;
    var phoneString = StringBulider("phone");
    if (phoneString == "error")
        return false;
    var mobileString = StringBulider("mobile");
    if (mobileString == "error")
        return false;
    document.getElementById("hiddenName").value = nameString;
    document.getElementById("hiddenDept").value = deptString;
    document.getElementById("hiddenEmail").value = emailString;
    document.getElementById("hiddenPhone").value = phoneString;
    document.getElementById("hiddenMobile").value = mobileString;

};

function StringBulider(nameText) {
    var textList = document.getElementsByName(nameText);
    var string = "";
    for (var i = 0; i < textList.length; i++) {
        if (textList[i].value == null || textList[i].value == "") {
            string += textList[i].value + "|";
        }
        else if (textList[i].value.indexOf("|") == -1) {
            string += textList[i].value + "|";
        }
        else { window.alert("文本中不能含有特殊字符|."); return "error" }
    }
    return string;
}

function CloseDiv(id) {
    document.getElementById(id).parentNode.removeChild(document.getElementById(id));
}

function isEmail(email) { return email.length > 6 && /^[\w\-\.]+@[\w\-\.]+(\.\w+)+$/.test(email); }


function validate_form(thisform) {
    with (thisform) {
        var divList = document.getElementsByName("div");

        var name = "";
        var dept = "";
        var email = "";
        var phone = "";
        var mobile = "";
        for (var a = 0; a <= divList.length; a++) {


            nameObject = document.getElementById("name" + a);
            deptObject = document.getElementById("dept" + a);
            emailObject = document.getElementById("email" + a);
            phoneObject = document.getElementById("phone" + a);
            mobileObject = document.getElementById("mobile" + a);

            if (validate_required(nameObject, "请输入姓名") == false)
            { nameObject.focus(); return false; }
            //if (validate_required("dept", "请输入职位") == false)
            //{ dept.focus(); return false; }
            if (validate_required(emailObject, "请输入电子邮件") == false || checkEmail(emailObject, "邮箱格式不符合规范") == false) {
                emailObject.focus();
                return false;
            }
            if (validate_required(phoneObject, "请输入电话号码") == false || checkPhone(phoneObject, "电话号码不符合规范") == false)
            { phoneObject.focus(); return false; }
            if (validate_required(mobileObject, "请输入手机号码") == false || checkMobile(phoneObject, "手机号码不符合规范") == false)
            { mobileObject.focus(); return false; }

        }
    }
}


//function checkEmail() {
//    //对电子邮件的验证
//    var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
//    var email = $("email").value;
//    if (!myreg.test(email)) {
//        checkEmailflag = false;
//        $("email_warn").style.color = 'red';
//        $("email_warn").innerHTML = "  × 邮箱格式不符合规范";
//    } else {
//        checkEmailflag = true;
//        $("email_warn").style.color = 'blue';
//        $("email_warn").innerHTML = "√ 邮箱格式正确";
//    }
//}

function checkPhone(field, alerttxt) {
    var
 re = /^0\d{2,3}-?\d{7,8}$/;
    if (!myreg.test(field.value))
    { alert(alerttxt); return false; }
    else { return true; }
}


function checkMobile(field, alerttxt) {
    var myreg = /^1\d{10}$/
    if (!myreg.test(field.value))
    { alert(alerttxt); return false; }
    else { return true; }
}

function checkEmail(field, alerttxt) {
    //对电子邮件的验证
    var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;

    if (!myreg.test(field.value))
    { alert(alerttxt); return false; }
    else { return true; }
}


function validate_required(field, alerttxt) {
    if (field.value == null || field.value == "")
    { alert(alerttxt); return false; }
    else { return true; }
}