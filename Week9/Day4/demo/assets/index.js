const getComments = () => {
  // const response = await fetch("/comments");
  // const data = await response.json();

  // console.log("data ", data);
  // return data.comments;
  const comments = localStorage.getItem("comments");

  if (comments && comments.length) return JSON.parse(comments);
  else {
    localStorage.setItem("comments", JSON.stringify([]));
    return [];
  }
};

const addComment = (comment) => {
  const commentsListContainer = document.getElementById(
    "comments-list-container"
  );

  const pTag = document.createElement("p");
  pTag.innerText = comment;
  commentsListContainer.append(pTag);
};

window.addEventListener("DOMContentLoaded", () => {
  console.log("dom has loaded");

  const comments = getComments();
  for (const comment of comments) {
    addComment(comment);
  }

  const commentInput = document.getElementById("comment");
  const commentsForm = document.getElementById("comments-form");

  commentsForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const comment = createComment(commentInput.value);

    if (comment) {
      addComment(comment);

      commentInput.value = "";
    }
  });

  const createComment = (comment) => {
    // const response = await fetch("/comments", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ comment }),
    // });

    // const data = await response.json();
    // console.log("data ", data);
    // return data.comment;
    const comments = getComments();

    comments.push(comment);

    localStorage.setItem("comments", JSON.stringify(comments));

    return comment;
  };
});
