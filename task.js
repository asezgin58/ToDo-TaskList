window.onload = function () {
    var i = 0;
    var taskId = null;

    function addDoneTask(e) {

        var parent = e.parentElement;
        var mainparent = parent.parentElement;

        //alert(e)
        //parent.removeChild(e.parentElement); //OR
        mainparent.remove();
        document.getElementById("DoneTaskList").appendChild(e.parentElement);
        e.disabled = true;

    }

    function deleteTask(e) {
        var parent = e.parentElement;
        var mainparent = parent.parentElement;
        mainparent.remove();
    }

    function keyCode(event) {
        var tus = event.keyCode;

        console.log(event);
        if (tus == 13) {
            addTask();
        }
    }

    function editTask(e) {
        //var task=document.getElementById("taskName").value;

        var parent = e.parentElement;
        var mainparent = parent.parentElement;

        document.getElementById("taskName").value = mainparent.innerText;

        document.getElementById("taskName").focus();

        taskId = mainparent.firstElementChild.id;
    }

    function addTask() {
        var task = document.getElementById("taskName").value;

        //alert(task);
        if (task != "") {
            if (taskId != null) {
                document.getElementById(taskId).lastElementChild.innerHTML = " " + task;
                taskId = null;
            } else {
                i++;
                var str = "<div class='taskParent'>" +
                    "<div class=\"check-item\" id=\"task" + i + "\">\n" +
                    "                    <input type=\"checkbox\" class=\"checkTask\" name=\"task\" onclick=\"addDoneTask(this)\"><label id='lbl'> " + task + " </label>\n" +
                    "                </div>" +
                    "<div class=\"submit-button\">\n" +
                    "                <input type=\"button\" value=\"EDIT\"\" class='submit-button edit'>" +
                    "                <input type=\"button\" value=\"DEL\" onclick=\"deleteTask(this)\" class='submit-button delete'>\n" +
                    "            </div>" +
                    "</div>";

                document.getElementById("TotalTaskList").insertAdjacentHTML("beforeend", str);
            }
        } else {
            alert("Object should not empty!")
        }

        document.getElementById("taskName").value = "";

    }

    window.editTask = editTask;
    window.addDoneTask = addDoneTask;
    window.deleteTask = deleteTask;

    document.getElementById("taskName").focus();

    // var date=new Date();
    // document.getElementById("hour").innerHTML=date.getHours() + ':' + date.getMinutes();

    // var d=document.getElementById("taskList").firstElementChild.innerHTML;
    // console.log(d);

    var addBtn = document.getElementById('addBtn');
    var taskName = document.getElementById('taskName');

    document.addEventListener('click', function(e) {

        if (e.target.className.indexOf('edit') !== -1) {
            console.log(e.target);
            editTask(e.target);
        }
    });

    addBtn.addEventListener('click', function() {
        addTask();
    });

    taskName.addEventListener('keydown', keyCode);

}


