    var input = document.getElementById('searchField');
    var elements;
    
    // input.addEventListener("keyup", search());

    input.addEventListener("keyup", function(){

        //para teste
        console.log(input.value);
        search();
    })

    function search() {

        let conteudo = input.value.toLowerCase();
        
        elements.forEach(el => {
                if (el.innerText.toLowerCase().includes(conteudo)) {
                    el.classList.add('is-visible');
                    el.classList.remove('is-hidden');
                } else {
                    el.classList.add('is-hidden');
                }
        });

        if(conteudo == ""){
            elements.forEach(el => {
                el.className = ('is-hidden');
            });
        }

    }


    function elSetup() {
        elements = document.querySelectorAll('#mainSection > button');

        elements.forEach(el => {
            el.className += 'is-hidden';
        });

        return elements;
    }