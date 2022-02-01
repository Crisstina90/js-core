var scores = [50, 85 ,98, 54, 40, 88, 36, 74, 56, 45] 

document.write('Al doilea scor este:' + scores[1] + '<br>')
document.write('Ultimul scor este:' + scores[9] + '<br>')

var max = 0
for (let i =0; i < scores.length; i++) {
    if (scores[i] > max) {
        max = scores[i]
    }
}
document.write('Scorul maxim este:' + max + '<br>')

// sort ordoneaza elementele din array in ordine ascendenta
scores.sort()
document.write(scores + '<br>')

var fruits = ['orange', 'banana', 'apple', 'wasabi']

fruits[0] = 'kiwi'

// push adauga la sfarsitul array-ului - pop scoaate de la sfarsit
fruits.push('pear')

// adauga la inceputul array-ului - shift scoate de la inceput
fruits.unshift('strawberry')

fruits.sort()
document.write(fruits + '<br>')

// sterge doua elemente incepand de la pozitia 1
fruits.splice(1, 2)
document.write(fruits + '<br>')

var words = ['hello',  'Visual Studio', 'Java Script', 'if', 'object']

var upperWords = []

for (let word of words) {
    // word[0] este prima litera, verifica ca se afla intre A-Z 
    // o alta varianta: word[0].toUpperCase() === word[0]
    if(word[0] >= 'A' && word[0] <= 'Z') {
        upperWords.push(word)

    }
}
upperWords.sort()
document.write(upperWords)