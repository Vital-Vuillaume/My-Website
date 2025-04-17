if (window.location.protocol != "https:") {
    window.location.protocol="https:";
}

const production = document.querySelector(".production");

const btnNavigations = document.querySelectorAll(".navigation");

const content = document.querySelector(".content");






document.title = btnNavigations[0].textContent.trim();

btnNavigations[0].classList.add('active');

addContent(
    "./images/profile.png", 
    "Vital Vuillaume",

    `    
    <p>Main skills : </p>
    <p>Main Projets : </p>
    <p>Favorite Tech : </p>
    `,

    `        
    <p class="year">JS, Bash, Python</p>
    <p class="year">site, bot, scripts</p>
    <p class="year">IA, Bitcoin, IoT</p>
    `,

    "Computing has always been my passion. I love exploring new technologies and creating innovative solutions, from automating tasks to building websites and applications. I’m driven by the challenge of transforming ideas into digital realities that improve efficiency and productivity. Whether it's solving problems or designing cutting-edge tools, I enjoy pushing the limits of what's possible and continuously evolving in the world of tech."
);








btnNavigations.forEach(btnNavigation => {
    btnNavigation.addEventListener('click', function() {

        content.innerHTML = "";

        btnNavigations.forEach(btn => btn.classList.remove('active'));

        btnNavigation.classList.add('active');

        document.title = btnNavigation.textContent.trim();

        switch (btnNavigation) {
            case btnNavigations[0]:

                addContent(
                    "./images/profile.png", 
                    "Vital Vuillaume",
                
                    `    
                    <p>Main skills : </p>
                    <p>Main Projets : </p>
                    <p>Favorite Tech : </p>
                    `,
                
                    `        
                    <p class="year">JS, Bash, Python</p>
                    <p>site, bot, scripts</p>
                    <p>IA, Bitcoin, IoT</p>
                    `,
                
                    "Computing has always been my passion. I love exploring new technologies and creating innovative solutions, from automating tasks to building websites and applications. I’m driven by the challenge of transforming ideas into digital realities that improve efficiency and productivity. Whether it's solving problems or designing cutting-edge tools, I enjoy pushing the limits of what's possible and continuously evolving in the world of tech."
                );

                break;
            case btnNavigations[1]:

                addContent(
                    "./images/creation.png", 
                    "My personal projects", 

                    `
                    <p>Bot JT : </p>
                    <p>ListenGo : </p>
                    <p>HackyPi : </p>
                    <p>Click Wave : </p>
                    <p>Color Invertor : </p>
                    <p>Bot Moodle : </p>
                    <p>Text-Reverse : </p>
                    <p>Hack AI : </p>
                    <p>Msg Hash : </p>
                    `,

                    `
                    <a class="linkRep" target="_blank" href="https://github.com/Vital-Vuillaume/bot-JT">Work log auto</a>
                    <a class="linkRep" target="_blank" href="https://github.com/Vital-Vuillaume/ListenGo">AI assistant</a>
                    <a class="linkRep" target="_blank" href="https://github.com/Vital-Vuillaume/My-Scripts-HackyPI">Script on USB</a>
                    <a class="linkRep" target="_blank" href="https://github.com/Vital-Vuillaume/Click-Wave">Click automation</a>
                    <a class="linkRep" target="_blank" href="https://github.com/Vital-Vuillaume/Color-Invertor">Invert image color</a>
                    <a class="linkRep" target="_blank" href="https://github.com/Vital-Vuillaume/Bot-Moodle">Fetch Moodle files</a>
                    <a class="linkRep" target="_blank" href="https://rmbi.ch/vital/text-reverse">Ordering words</a>
                    <a class="linkRep" target="_blank" href="https://github.com/Vital-Vuillaume/Hack-AI">AI scraping</a>
                    <a class="linkRep" target="_blank" href="https://rmbi.ch/vital/msg-hash">Encryption system</a>
                    `,

                    "My projects highlight my passion for technology and creative problem-solving. From automation tools to AI-powered systems and interactive web platforms, they demonstrate my technical expertise and dedication to building impactful, user-focused solutions. I constantly strive to explore new technologies and create projects that drive innovation and make a positive difference."
                );

                break;
            case btnNavigations[2]:

                addContent(
                    "./images/collaboration.png", 
                    "My collaborations",

                    `
                    <p>FreeSpace : </p>
                    <p>RevyTech : </p>
                    `,

                    `
                    <a class="linkRep" target="_blank" href="https://space.theserver.life/">Instant messaging</a>
                    <a class="linkRep" target="_blank" href="https://recytech.me/">Computer shop</a>
                    `,

                    "My collaborations are founded on a proactive and efficient approach, aiming to bring together skills to achieve shared objectives. Through constant idea exchange, I foster synergy that ensures projects are completed on time and meet quality standards. I value open communication and the complementarity of talents to maximize results and enrich the collective experience."
                );

                break;
        }
    });
});

function addContent(image, nom, answer, reponse, description) {
    content.innerHTML += `               
    
            <div class="block imgBlock">
                <img class="imgProfil" src="${image}" alt="section image">
                <p>${nom}</p>
              </div>
              
    `;

    content.innerHTML += `

        <div class="block profile">
            <div class="answer">   
                ${answer}
            </div>
            <div class="reponse">
                ${reponse}
            </div>
        </div>
        `
        ;

    content.innerHTML += `

            <div class="block description">
                <p>${description}</p>
            </div>

    `;
}





let date = new Date().getFullYear()

production.textContent = `ⓒ ${date} - Vital production`;