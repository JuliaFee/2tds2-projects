const posts = [];


function savePost(){
    const title = document.getElementById("title").value;
    const category = document.getElementById("category").value;
    const resume = document.getElementById("resume").value;
    const author = document.getElementById("author").value;
    const date = document.getElementById("date").value;

    if (title && category && resume && author && date ){
    storePost(title, category, resume, author, date);
    cleanFields();
    } else {
        alert("Preencha todos os campos!");
    }
    
   
}
function cleanFields(){
    const title = document.getElementById("title").value = "";
    const category = document.getElementById("category").value = "";
    const resume = document.getElementById("resume").value = "";
    const author = document.getElementById("author").value = "";
    const date = document.getElementById("date").value = "";

}
function storePost(title, category, resume, author, date){
    const post = {
      title,
      category,
      resume,
      author,
      date
    }

    posts.push(post);

    console.log(posts);
}