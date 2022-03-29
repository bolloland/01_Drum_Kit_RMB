const playSound = (e) => {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
        // audio is now defined as an element on our page that has a data-key element of the ones we created on the html page
    
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
        // now will find all elements with a KEY tag
        // NOTICE to use .key and not key, as .key represents a class. 
    
        if (!audio) return
        //if we hit a null button, dont return anything
        audio.currentTime = 0 //rewinds sound file to beginning
        audio.play()
    
        key.classList.add('playing')
        // same as: key.addClass('playing')
        // we defined key above, as having those class attributes, and now we are adding a new classList attribute to it called ".playing", located in our css file. 
    
}

const removeTransition = (e) => {
    // console.log(e, e.propertyName)
    if (e.propertyName != 'transform') return //skip if it's not transformed
    // console.log(e.target)
    e.target.classList.remove('playing')
}

//transition end event - identify all keys
const keys = document.querySelectorAll('.key')
// 'transitionend' is an event that's fired when a CSS transition is completed, callback is removeTrans which we then have to define...back up top. 
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

window.addEventListener('keydown', playSound) 