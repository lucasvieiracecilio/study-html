const surpriseTag = document.getElementById("surprise")
const body = document.getElementById("body")
const button = document.getElementById("button")
const commentsListsDiv = document.getElementById("comments-div")
const commentInput = document.getElementById("comment-input")
const commentsList = document.getElementById("comments-list")

button.addEventListener("click", (e) => {
    e.preventDefault()
    const newComment = commentInput.value
    const newCommentElement = document.createElement("li")
    newCommentElement.textContent = newComment
    commentsList.appendChild(newCommentElement)
    commentsListsDiv.classList.remove("display-none")
    commentsListsDiv.classList.add("display-block")
})