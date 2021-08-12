// check for connection
console.log("connected!");

document.getElementById('addSong').addEventListener('click', event => {
 event.preventDefault()

 let song = document.getElementById('song').value
 // console.log(song);

 // Create a list element item and classes
 let songElem = document.createElement('li')
 songElem.className = 'notListened'
 // itemElem.textContent = item
 songElem.innerHTML = `
   <button class="isListened">✓</button>
   <button class="delete">x</button>
   <span>${song}</span>
   `

 // append song element to the songs unordered list
 document.getElementById('songs').append(songElem)
 // clear input for song so user can enter new value
 document.getElementById('song').value = ""

})


// trigger for every element in the document
document.addEventListener('click', event => {

 // for class delete will remove from the list
 if (event.target.className === 'delete') {
  event.target.parentNode.remove()
  // if class contains isListened...(the check mark clicked)
 } else if (event.target.classList.contains('isListened')) {
  // if class contains not listened... then remove notListened and add isListened for sytling
  if (event.target.parentNode.classList.contains('notListened')) {
   event.target.parentNode.classList.remove('notListened')
   event.target.parentNode.classList.add('isListened')
   // otherwise/else remove isListened and add notListend for sytling
  } else {
   event.target.parentNode.classList.remove('isListened')
   event.target.parentNode.classList.add('notListened')
  }
 }
})
