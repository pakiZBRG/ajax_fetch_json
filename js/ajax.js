window.addEventListener('load', () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "man.json");

    xhr.onload = function(){
        const data = JSON.parse(this.responseText);
        const man = data.howToBeAMan;
        let output = ''
        const calm = data.howToCalm;
        let Calm = '';
        const dress = data.Appereance;
        let Dress = ''

        man.forEach(kid => {
            output += `
                <ul class='man-deeds'>
                    <li class='man-deeds-title'>${kid.id}. ${kid.title}</li>
                    <li class='man-deeds-body'>${kid.content}</li>
                </ul>
            `;
        });
        document.getElementById('deeds').innerHTML = output

        dress.forEach(kid => {
            Dress += `
                <ul class='man-deeds'>
                    <li class='man-deeds-title teal'>${kid.id}. ${kid.title}</li>
                    <li class='man-deeds-body'>${kid.content}</li>
                </ul>
            `;
        })
        document.getElementById('appereance').innerHTML = Dress

        calm.forEach(kid => {
            Calm += `
                <ul class='man-deeds'>
                    <li class='man-deeds-title magenta'>${kid.id}. ${kid.title}</li>
                    <li class='man-deeds-body'>${kid.content}</li>
                </ul>
            `;
        })
        document.getElementById('calm').innerHTML = Calm
    }

    xhr.send()
});