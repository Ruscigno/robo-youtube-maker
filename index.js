const readline = require('readline-sync')

function start(){
    const content = {}

    content.searchTerm = askAndReturnSearchTearm()

    function askAndReturnSearchTearm() {
        return readline.question('Type a Wikipedia search term: ')
    }

    console.log(content)
}

start()