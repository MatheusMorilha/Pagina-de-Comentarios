document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.formContainer form')
    const nomeInput = document.getElementById('nomeInput')
    const comentarioInput = document.getElementById('comentarioInput')
    const commentsContainer = document.querySelector('.comentarios')

    nomeInput.addEventListener('input', function() {
        const maxLengthNameInput = 35

        if(nomeInput.value.length > maxLengthNameInput){
            nomeInput.value = nomeInput.value.slice(0, maxLengthNameInput)
        }
    })

    comentarioInput.addEventListener('input', function(){
        const maxLengthComentarioInput = 60

        if(comentarioInput.value.length > maxLengthComentarioInput){
            comentarioInput.value = comentarioInput.value.slice(0, maxLengthComentarioInput)
        }
    })

    form.addEventListener('submit', (e) => {
        e.preventDefault()

        const nome = nomeInput.value.trim()
        const comentario = comentarioInput.value.trim()

        if (!nome || !comentario) {
            alert('Por favor, preencha todos os campos antes de comentar!');
            return;
        }

        const linhaComentario = document.createElement('div')
        linhaComentario.classList.add('linhaComentario')

        const nomeUsuario = document.createElement('p')
        nomeUsuario.textContent = nome + ':'
        nomeUsuario.style.fontWeight = 'bold'

        const comentarioTexto = document.createElement('p')
        comentarioTexto.textContent = comentario

        linhaComentario.appendChild(nomeUsuario)
        linhaComentario.appendChild(comentarioTexto)

        commentsContainer.prepend(linhaComentario)

        nomeInput.value = ''
        comentarioInput.value = ''

    })
})