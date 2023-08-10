const getComments = async () => {
  const response = await fetch("/comments");
  const data = await response.json();

  console.log("data ", data);
  return data.comments;
};

const addComment = (comment) => {
  const commentsListContainer = document.getElementById(
    "comments-list-container"
  );

  const pTag = document.createElement("p");
  pTag.innerText = comment;
  commentsListContainer.append(pTag);
};

window.addEventListener("DOMContentLoaded", async () => {
  console.log("dom has loaded");

  const comments = await getComments();
  for (const comment of comments) {
    addComment(comment);
  }

  const commentInput = document.getElementById("comment");
  const commentsForm = document.getElementById("comments-form");

  commentsForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const comment = await createComment(commentInput.value);

    if (comment) {
      addComment(comment);

      commentInput.value = "";
    }
  });

  const createComment = async (comment) => {
    const response = await fetch("/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ comment }),
    });

    const data = await response.json();
    console.log("data ", data);
    return data.comment;
  };
});
