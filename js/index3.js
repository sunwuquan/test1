var oUl = document.getElementById("clicks");
var oLi = oUl.getElementsByTagName("li");
var array = new Array();

for (var i = 0; i < oLi.length; i++) {
    (function (k) {
        var oBtn = oLi[k].getElementsByTagName("button");
        for (var m = 0; m < oBtn.length; m++) {
            (function (n) {
                oBtn[n].onclick = function (ev) {
                    var target = ev.target;
                    calculate(array, k, n, target, oBtn);
                };
            })(m)
        }
    })(i)
}


function calculate(array, liIndex, n, target, oBtn) {

    console.log(liIndex + "====" + n)

    if (!isExist(liIndex)) {
        if (array.length < 4) {
            array[array.length] = new selectModel(liIndex, n)
            setClassName(target, oBtn, n);
        } else {
            return;
        }
    } else {
        var index = getIndex(liIndex);
        var model = array[index];
        var selectId = model.selectId;

        if (selectId == n) {
            remove(liIndex);
            setClassName(target, oBtn, n);
        } else {
            model.selectId = n;
            //array[index] = model;
            setClassName(target, oBtn, n);
        }
    }
}

function setClassName(target, oBtn, n) {
    if (target.className == "content_body_left_left_active") {
        target.className = "content_body_left_left";
    } else {
        target.className = "content_body_left_left_active";
    }
    if (n == 0) {
        oBtn[1].className = "content_body_left_left";
    } else if (n == 1) {
        oBtn[0].className = "content_body_left_left";
    }
}

function isExist(liIndex) {
    for (i in array) {
        var model = array[i];
        if (model.liIndex == liIndex) {
            return true;
        }
    }
    return false;
}

function getIndex(liIndex) {
    for (i in array) {
        var model = array[i];
        if (model.liIndex == liIndex) {
            return i;
        }
    }
    return -1;
}

function remove(index) {
    var newArray = new Array();
    for (i in array) {
        if (i != index) {
            newArray[i] = array[i]
        }
    }
    array = newArray;
}

function selectModel(liIndex, selectId) {
    this.liIndex = liIndex;
    this.selectId = selectId;

}

//测试 jquery
$("#btn_submit").click(function () {
    $("#layer").slideDown(2000);
//           alert("ok");
});
$("#tijiao").click(function () {
    $("#layer").slideUp(2000);
});