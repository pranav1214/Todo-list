var node = document.getElementById("div1")

function func(){
    var node1 = document.createElement('div');
    node1.append(document.getElementById("ip1").value)

    var node2 = document.createElement('button');
    node2.append("Done");
    node1.append(node2);
    node.append(node1)
    node2.onclick = function(){
        node.removeChild(node1);
    }
}