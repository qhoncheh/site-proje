        /*  search2 */ 

        search2.onkeyup = function(){
            
            result2.className = "show";
            overlay2.className = "show";

            var searched = "";

            searched = jobs.filter(el => el.location.indexOf(this.value) != -1 && this.value != '');

            fillSearch(searched);
        }

        overlay2.onclick = function(){
        result2.className = "hide";
        overlay2.className = "hide";
        }
        
        function fillSearch(jsonData){
            result2.innerHTML = []
            for(let el of jsonData){
                
                let searchItem = document.createElement("div");
                
                    let spanItem = document.createElement("span");
                    spanItem.innerHTML = el.location;

                searchItem.appendChild(spanItem);
                result2.appendChild(searchItem);


            }
        }

        /* search3 */ 
        search3.onkeyup2 = function(){
            
            result3.className = "show";
            overlay3.className = "show";

            var searched2 = "";

            searched2 = jobs.filter(el => el.title.indexOf(this.value) != -1 && this.value != '');

            fillSearch2(searched2);
        }

        overlay3.onclick = function(){
        result3.className = "hide";
        overlay3.className = "hide";
        }
        
        function fillSearch2(jsonData2){

            result3.innerHTML = []
            for(let el of jsonData2){
                
                let searchItem2 = document.createElement("div");
                
                    let spanItem2 = document.createElement("span");
                    spanItem2.innerHTML = el.title;

                searchItem2.appendChild(spanItem2);
                result3.appendChild(searchItem2);


            }
        }
