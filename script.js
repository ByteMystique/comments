document.getElementById('submit-comment').addEventListener('click', function() {
    var commentInput = document.getElementById('comment-input');
    var commentList = document.getElementById('comment-list');

    var username = "Username";

    if (commentInput.value.trim() !== "") {
        var newComment = document.createElement('li');
        newComment.innerHTML = `<strong>${username}</strong>: ${commentInput.value}`;

        commentList.appendChild(newComment);
        commentInput.value = ""; // Clear the comment input field
    } else {
        alert("Please write a comment before submitting.");
    }
});
