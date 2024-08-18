document.getElementById('submit-comment').addEventListener('click', function() {
    var commentInput = document.getElementById('comment-input');
    var commentList = document.getElementById('comment-list');

    if (commentInput.value.trim() !== "") {
        var newComment = document.createElement('li');
        newComment.textContent = commentInput.value;

        commentList.appendChild(newComment);
        commentInput.value = ""; 
    } else {
        alert("Please write a comment before submitting.");
    }
});
