const readline = require('readline-sync')

function start(){
    const content = {}

    content.searchTerm = askAndReturnSearchTearm()
    content.prefix = askAndReturnPrefix()

    function askAndReturnSearchTearm() {
        return readline.question('Type a Wikipedia search term: ') 
    }

    function askAndReturnSearchTearm() {
        const prefixes = ['Who is', 'What is', 'The history of', 'CANCEL']
        const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Choose a prefix')
        const selectedPrefixText = prefixes[selectedPrefixIndex]
        return selectedPrefixText
    }

    console.log(content)
}

start()