window.addEventListener('load', () => {
    fetch('man.json')
        .then(res => res.json())
        .then(data => {
            const man = data.howToBehave;
            let output = '';
            const woman = data.Woman;
            let Woman = ''
            const suffer = data.howToSuffer;
            let Suffer = '';

            suffer.forEach(kid => {
                Suffer += `
                    <ul class='man-deeds'>
                        <li class='man-deeds-title blue'>${kid.id}. ${kid.title}</li>
                        <li class='man-deeds-body'>${kid.content}</li>
                    </ul>
                `
            })
            document.getElementById('suffer').innerHTML = Suffer;

            man.forEach(kid => {
                output += `
                    <ul class='man-deeds'>
                        <li class='man-deeds-title crimson'>${kid.id}. ${kid.title}</li>
                        <li class='man-deeds-body'>${kid.content}</li>
                    </ul>
                `
            })
            document.getElementById('behave').innerHTML = output;

            woman.forEach(kid => {
                Woman += `
                    <ul class='man-deeds'>
                        <li class='man-deeds-title coral'>${kid.id}. ${kid.title}</li>
                        <li class='man-deeds-body'>${kid.content}</li>
                    </ul>
                `
            })
            document.getElementById('woman').innerHTML = Woman;
        })
})