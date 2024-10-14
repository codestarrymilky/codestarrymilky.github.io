function addComment() {  
    const commentBox = document.getElementById('commentBox');  
    const commentText = commentBox.value.trim();  
    const commentsContainer = document.getElementById('commentsContainer');  
  
    if (commentText) {  
        const newComment = document.createElement('div');  
        newComment.classList.add('comment');  
        newComment.textContent = commentText;  
        commentsContainer.appendChild(newComment);  
        commentBox.value = '';  
    } else {  
        alert('请写下你的评论！');  
    }  
}
