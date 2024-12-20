


    function getNewUser(){
        fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
        // console.log(data.results[0]);
        const {name, gender, email, picture} = data.results[0];
        console.log(data)
        document.querySelector("#parent") .innerHTML +=   
        `
           <div class="card  w-52 bg-zinc-700 rounded-md px-6 py-6 flex flex-col items-center justify-center">
            <div class="image h-14 w-14 bg-zinc-500 rounded-full  overflow-hidden">
             <img src="${picture.large}" alt="user" class="w-full h-full fit-cover">
            </div>
            <h3 class="text-2xl text-white opacity-90 font-semibold">${name.first}</h3>
            <h4 class="text-sm text-white opacity-60 font-semibold">${gender}</h4>
            <h5 class="text-sm text-white opacity-40 ">${email}</h5>
            <p class="text-xs text-white opacity-80">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
           </div>
        `
    })
    }

    document.querySelector("#getUser").addEventListener("click", function(){
        getNewUser();
    })
   