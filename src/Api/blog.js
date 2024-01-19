import Swal from "sweetalert2";

export const saveBlog = (id) =>{
  fetch(`https://blog-server-14vb0vvb4-guljer77.vercel.app/blogs`,{
    method: "POST",
    headers: {
      "content-type":"application/json"
    },
    body: JSON.stringify(id)
  })
  .then(res=> res.json())
  .then(data=> {
    if(data.insertedId){
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Blog Post Added Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  })
}

export const deleteBlogPost = (id) =>{
  Swal.fire({
    title: "Are you sure?",
    text: "Delete Successfully!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then(result => {
    if (result.isConfirmed) {
      fetch(`https://blog-server-14vb0vvb4-guljer77.vercel.app/blogs/${id}`, {
        method: "DELETE",
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
    }
  });
} 

export const updateData = (id, item)=>{
  fetch(`https://blog-server-14vb0vvb4-guljer77.vercel.app/blogs/${id}`,{
    method: "PUT",
    headers: {
      "content-type":"application/json"
    },
    body: JSON.stringify(item)
  })
  .then(res=> res.json())
  .then(data=>{
    if (data.modifiedCount > 0){
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Blog Update Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  })
}
