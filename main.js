var pronoun = ['the ','our '];
var adj = ['great ', 'big ' ];
var noun = ['jogger','racoon'];

let ul = document.getElementById("names");
for (let i = 0; i < pronoun.length; i++) {
    for (let c = 0; c < adj.length; c++) {
        for (let n = 0; n < noun.length; n++) {
           var generator = pronoun[i] + adj[c] + noun[n] ;
           let li = document.createElement('li');
            li.innerHTML = generator;
            ul.appendChild(li);
        }
        
    }
    
}