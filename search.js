    var input = document.getElementById('searchField');
    var elements = document.querySelectorAll('#mainSection > button');
    var container = document.getElementById('mainSection');
    var matches;
    
    // input.addEventListener("keyup", search());

    input.addEventListener("keyup", function(){search()});
    input.addEventListener("focusout", function(){fadeOut()}) ;
    input.addEventListener("focusin", function(){focusIn()}) ;
    

    function search() {


        let conteudo = input.value.toLowerCase().trim();
        let readMore = document.querySelector('.readMore');
        
        elements.forEach(el => {el.classList.remove('odd');})

         matches = [...elements].filter( el => el.innerText.toLowerCase().includes(conteudo));

        if(matches.length > 0){
            if(matches.length > 15){
                    matches = matches.slice(0,15);        
                    readMore.classList.add('readVisible');
            }

            matches.forEach(el => {
                el.classList.add('is-visible');
            })
            container.classList.add('is-visible');
        }else{
            container.classList.remove('is-visible');
            elements.forEach(el => {
                el.classList.remove('is-visible');
            });
        }

         matchesNot = [...elements].filter(el => !el.innerText.toLowerCase().includes(conteudo)) ;

         if(matchesNot.length > 0){
             matchesNot.forEach(el => {
                el.classList.remove('is-visible');
             })
         }else{
            container.classList.remove('is-visible');
         }

        [...elements].filter( el => el.classList.contains('is-visible' || 'readMore'))
        .filter( (el, index) => index % 2 )
        .map( el => el.classList.add('odd'));

        

        if(conteudo == ""){
            fadeOut();
        }
    
    }

    function focusIn(){
        if(matches.length > 0){
            fadeIn();
        }else{
            return(console.log('Sem matches'));
        }
    }

    async function fadeIn(){
        await a();
        await b();

        function a(){
            return new Promise(function(resolve){
                setTimeout(function() {
                    container.classList.add('is-visible');
                    resolve();
                },210);
            });
        };
    
        function b(){
            return new Promise(function(resolve){
                matches.forEach(el => {
                        el.classList.add('is-visible');
                    });
                    resolve();
            });
        };
    };

    

    async function fadeOut(){
        await a();
        await b();

        function a(){
            return new Promise(function(resolve){
                setTimeout(function() {
                    container.classList.remove('is-visible');
                    resolve();
                },210);
            });
        };
    
        function b(){
            return new Promise(function(resolve){
                elements.forEach(el => {
                        el.classList.remove('is-visible');
                    });
                    resolve();
            });
        };
    };

  
    // function elSetup() {
    //     elements = document.querySelectorAll('#mainSection > button');

    //     // elements.forEach(el => {
    //     //     el.classList.add('is-hidden');
    //     // });

    //     return elements;
    // }