const createPostsContainer = () => {
  const postsContainer = document.createElement("div"); // create a div element
  const postsContainerHeading = document.createElement("h2");

  postsContainerHeading.innerText = "Posts from server";

  postsContainer.setAttribute("id", "posts-container"); // give the div element an id
  postsContainerHeading.setAttribute("id", "posts-heading");

  postsContainer.appendChild(postsContainerHeading);
  document.body.appendChild(postsContainer); // append the div to the body so we can see it
  // without the above line of code, the postContainer is created but never added to the document
  // think of the body like an array (its a tree though) and appendChild is like pushing to the array
  // if we create something and never push we can never see it in our array. Same concept

  showPosts();
};

const showPosts = async () => {
  const posts = await getPosts();
  // we have to await get post because even though we are handling
  // async behavior in the function itself. The function call does take an unknown amount of time
  // without await we would have an undefined value.

  const postsContainer = document.getElementById("posts-container");
  // any container or element selected here must be created prior to
  // calling a function like this. Order matters.

  for (const post of posts) {
    const postElement = document.createElement("p");

    postElement.setAttribute("class", "posts");
    postElement.innerText = post.message; // post being an array of objects

    postsContainer.appendChild(postElement);
  }

  //for each post we create a p tag, give it a class name, and append it to
  // the post container which does exist by the time this function is called.
  // Simply put, we append newly created elements to an existing html element.
  // This can be either the body (which is there from the start) or some container/parent
  // element that does exist on the page.

  // for this to work we can call show posts at the bottom of the createPostsContainer
  // function or in the initialize page function after the createPostsContainer.
};

const getPosts = async () => {
  const res = await fetch("/posts");
  const data = await res.json();

  console.log("response data ", data);
  return data;
};

const initializePage = () => {
  // function for simply calling containers that should show up on the page
  createPostsContainer();
};

window.onload = initializePage;
/*
our html page still reads top down. By the time the script tag loads
we do not yet have access to the body or anything below the script tag. 
option 1: put the script tag as the last element in the body tag (ew)
option 2: put the script tag in the head and use some method to wait for the 
        body elements to be present before attempting to select them. 

window.onload says I will wait for images, elements, and css to load before running
the javascript file(s). 
*/
