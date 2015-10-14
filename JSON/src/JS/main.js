/* Core Functionality of tree menu. */

"use strict";

var WilliamHillHomeJS = (function () {
    /* Private */
    var menuId = "",menuEl="", JSONData;
    return {
        /* Public Methods */
        newNode: function (parentNodeId, id, cls, description, isMenu) {
            var parentNode,newNode,newlabel,newCheckBox, newUL;
            menuId="main-menu";
            if(parentNodeId==null){
                parentNodeId="WH-Menu";
            }
            parentNode = document.getElementById(parentNodeId);
            if(!description) {
                description = parentNode.children.length + 1;
            }
            if(isMenu!=null) {
                newNode = document.createElement("li");
                newlabel = document.createElement("Label");
                newlabel.className = "menu_label";
                newlabel.setAttribute("for","chk_"+id);
                newlabel.innerHTML = "+ " + description;
                newNode.appendChild(newlabel);
                newCheckBox = document.createElement('input');
                newCheckBox.type = "checkbox";
                newCheckBox.id = "chk_"+id;
                newNode.appendChild(newCheckBox);
                newUL = document.createElement("UL");
                newNode.appendChild(newUL);
                newUL.setAttribute("id", id);
                parentNode.appendChild(newNode);
                return newUL;
            }else{
                newNode = document.createElement("li");
                newNode.setAttribute("id", id);
                newNode.appendChild(document.createTextNode(description));
                parentNode.appendChild(newNode);
                return newNode;
            }
        },
        loadJSON: function (url) {
            try {
                var xmlhttp = new XMLHttpRequest();
                xmlhttp.onreadystatechange = function () {
                    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                        JSONData = JSON.parse(xmlhttp.responseText);
                        WilliamHillHomeJS.createTree();
                    }
                }
                xmlhttp.open("GET", url, true);
                xmlhttp.send();
            } catch (err) {
                alert("loadJSON Error:" + err);
                /* log error */
            }
            return this;
        },
        createTree: function (ele, menu) {
            var i, key, obj,nextItem;
            if(ele==null){
                ele=this.menuEl;
            }
            if(menu==null){
                menu=JSONData.menu;
            }
            for(i in menu){
                key = i;
                    obj = menu[i],
                    nextItem = WilliamHillHomeJS.newNode(ele.id, obj.id, obj.cssClass, obj.description, obj.menu);
                if (obj.menu!=null) {
                    WilliamHillHomeJS.createTree(nextItem, obj.menu);
                }
            }
            return this;
        },
        init: function (menuId) {
            this.menuId = menuId;
            this.menuEl = document.getElementById(this.menuId); /* Cache for efficiency */
            return this;
        },
    };
})();