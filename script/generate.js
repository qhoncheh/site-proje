
function generateJobItem(detail, jsonDataItem) {

    

        let jobDetail = document.createElement("div");
        jobDetail.className = "detail";

        let picDetail = document.createElement("div");
        picDetail.className = "pic";

        let image = document.createElement("img");
        image.src = "img/jobs/" + jsonDataItem.pic;

        let inf = document.createElement("div");
        inf.className = "info";

        let h = document.createElement("h2");
        h.innerHTML = jsonDataItem.title;

        let jobItems = document.createElement("div");
        jobItems.className = "items";

        let ulData = document.createElement("ul");

        let liData = document.createElement("li");
        liData.innerHTML = jsonDataItem.detail;

        let li2Data = document.createElement("li");
        li2Data.innerHTML = jsonDataItem.location;

        let li3Data = document.createElement("li");
        li3Data.innerHTML = jsonDataItem.object;

        let data = document.createElement("div");
        data.className = "data";

        let btn1 = document.createElement("button");
        btn1.className = "sendrezome";
        btn1.innerHTML = jsonDataItem.send;

        let btn2 = document.createElement("button");
        btn2.className = "neshan";
        btn2.innerHTML = jsonDataItem.data;





        ulData.appendChild(liData);
        ulData.appendChild(li2Data);
        ulData.appendChild(li3Data);

        jobItems.appendChild(ulData);

        inf.appendChild(h);
        inf.appendChild(jobItems);


        picDetail.appendChild(image);

        jobDetail.appendChild(picDetail);
        jobDetail.appendChild(inf);

        jobsData.appendChild(jobDetail);

        data.appendChild(btn1);
        data.appendChild(btn2);
        jobDetail.appendChild(data);

        document.getElementById(holderId).appendChild(jobDetail);



    }

    function fillWithJobss(holderId, jsonData) {
        document.getElementById(holderId).innerHTML="";

        for (let i = 0; i < jsonData.length; i++) {
            generateJobItem(holderId, jsonData[i])
        }
    }
