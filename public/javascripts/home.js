window.addEventListener('DOMContentLoaded', () =>{
    bindWord();
})

function bindWord() {
    const elements = document.querySelectorAll('.btn-danger');
    const wordContainer = document.querySelector("#word-list-container")
    elements.forEach(e =>{
        e.addEventListener('click', ($event) => {
            const wordId = $event.target.getAttribute('wordid');
            axios.delete('/words/' + wordId)
                .then( function(response){
                    wordContainer.innerHTML = response.data;
                    bindWord();
                    console.log(response)
                })
                .catch( function(err){
                    console.log(err)
                })
        })
    })
}