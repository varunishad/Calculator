var num = document.getElementsByClassName("num");
        var val = document.getElementById("val");
        var i;

        val.addEventListener("keydown", function (event) {
            if (event.keyCode === 13) {
                event.preventDefault();
                if (val.value === "") {
                    return;
                } else {
                    val.value = eval(val.value);
                }
            }
        });


        function noAlphabets(evt) {
            // Only ASCII charactar in that range allowed 
            var ASCIICode = (evt.which) ? evt.which : evt.keyCode
            if (ASCIICode > 31 && (ASCIICode < 40 || ASCIICode > 57))
                return false;
            return true;

        }

        var lastAns = "";
        function display(i) {
            if (i === "clear") {
                val.value = "";
                console.log(lastAns);
            } 
            else if(i === "backspace"){
                var displayVal = val.value;
                val.value = displayVal.substring(0,displayVal.length-1)
            }
            else if (i === "="){
                if(val.value === "")return;
                else{
                    val.value = eval(val.value);
                    lastAns = val.value;
                    console.log(lastAns);
                }
            } 
            else if(i === "ans"){
                if(lastAns === "")return;
                else{
                    val.value = lastAns;
                  }
                }
            else {
                val.value += i;
            }

            val.focus();
        }