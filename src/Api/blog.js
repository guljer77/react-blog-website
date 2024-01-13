export const saveBlog = (id) =>{
  fetch(`http://localhost:5000/blogs`,{
    method: "POST",
    headers: {
      "content-type":"application/json"
    },
    body: JSON.stringify(id)
  })
  .then(res=> res.json())
  .then(data=> console.log(data))
}