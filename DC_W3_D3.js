var libButton = document.getElementById('lib-button');
        var libIt = function() {
            var storyDiv = document.getElementById("story");
            var noun = document.getElementById("noun");
            var noun_input = noun.value;

            var adjective = document.getElementById("adjective");
            var adjective_input = adjective.value;

            var person = document.getElementById("person");
            var person_input = person.value;
            storyDiv.innerHTML = "Once upon a time, a man named " + noun_input + " was living alone in a village. He was so " + adjective_input + " that everybody called him " + person_input;
        };
        
        libButton.addEventListener('click', libIt);


