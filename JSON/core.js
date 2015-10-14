var JSON = {
    "menu": [{
        "id": "contact",
        "leaf": true,
        "description": "Contact Us",
        "link": "",
        "content": "contactUs.html",
        "cssClass": "static-content",
        "menu": null
    }, {
        "id": "rules",
        "leaf": false,
        "description": "Sports Betting Rules",
        "link": "",
        "content": "",
        "cssClass": "",
        "menu": [{
            "id": "types",
            "leaf": true,
            "description": "Wager Types",
            "link": "",
            "content": "wagerTypes.html",
            "cssClass": "static-content wager-types",
            "menu": null
        }, {
            "id": "odds",
            "leaf": true,
            "description": "Odds & Lines",
            "link": "",
            "content": "oddsAndLines.html",
            "cssClass": "static-content",
            "menu": null
        }, {
            "id": "policies",
            "leaf": true,
            "description": "Rules & Policies",
            "link": "",
            "content": "rulesAndPolicies.html",
            "cssClass": "static-content rules-policies",
            "menu": null
        }, {
            "id": "bonuses",
            "leaf": true,
            "description": "Sports Bonuses",
            "link": "",
            "content": "sportsBonuses.html",
            "cssClass": "static-content",
            "menu": null
        }]
    }, {
        "id": "conditions",
        "leaf": false,
        "description": "Terms & Conditions",
        "link": "",
        "content": "",
        "cssClass": "",
        "menu": [{
            "id": "termsOfService",
            "leaf": true,
            "description": "Terms of Service",
            "link": "",
            "content": "termsOfService.html",
            "cssClass": "static-content",
            "menu": null
        }, {
            "id": "privacy",
            "leaf": true,
            "description": "Privacy Policy",
            "link": "",
            "content": "privacy.html",
            "cssClass": "static-content",
            "menu": null
        }]
    }, {
        "id": "view",
        "leaf": true,
        "description": "View in: Mobile | Full Site",
        "link": "",
        "content": "view.html",
        "cssClass": "static-content",
        "menu": null
    }]
};

function newNode (parentNodeId, id, cls, description, isMenu) {

    var parentNode,newNode;
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
        var newlabel = document.createElement("Label");
        newlabel.className = "menu_label";
        newlabel.setAttribute("for","chk_"+id);
        newlabel.innerHTML = "+ " + description;
        newNode.appendChild(newlabel);

        var newCheckBox = document.createElement('input');
        newCheckBox.type = "checkbox";
        newCheckBox.id = "chk_"+id;
        newNode.appendChild(newCheckBox);
        var newUL = document.createElement("UL");
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

}

function buildMenu(element, menu) {
    for(i in menu){
        var key = i,
        obj = menu[i],
            nextItem = newNode(element.id, obj.id, obj.cssClass, obj.description, obj.menu);
        if (obj.menu!=null) {
            buildMenu(nextItem, obj.menu);
        }
    }

};

$(document).ready(function () {
    var menu = $(".main-menu");
    buildMenu(menu, JSON.menu);
});