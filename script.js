document.getElementById('submit-comment').addEventListener('click', function() {
    var nameInput = document.getElementById('name-input');
    var commentInput = document.getElementById('comment-input');
    var commentList = document.getElementById('comment-list');

    var username = nameInput.value.trim() !== "" ? nameInput.value : "Username";

    if (commentInput.value.trim() !== "") {
        var newComment = document.createElement('li');
        newComment.innerHTML = `<strong>${username}</strong>: ${commentInput.value}`;

        commentList.appendChild(newComment);
        nameInput.value = ""; // Clear the name input field
        commentInput.value = ""; // Clear the comment input field
    } else {
        alert("Please write a comment before submitting.");
    }
});
