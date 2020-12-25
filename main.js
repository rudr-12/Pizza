menu_list_array=[
    "Chicken tandoori pizza",
    "Veg supreme pizza",
    "Paneer tikka pizza",
    "Deluxe veggie pizza",
    "Veg Extravanza pizza"
];
function get_menu() {
    var htmldata;
    htmldata="<ol class='menulist'>"
    menu_list_array.sort();
    for(var i=0;i<menu_list_array.lenght;i++){
        htmldata=htmldata+'<li>' + menu_list_array[i] + '<li>'
    } 
    htmldata=htmldata+'</ol>'
document.getElementById("")
}