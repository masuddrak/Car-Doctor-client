
const Blogs = () => {
    // const handelSubmit=(e)=>{
    //     e.preventDefault()
    //     const from=e.target
    //     const name=from.name.value
    //     const image=from.image.value
    //     console.log(name,image)
    // }

    return (
        <div>
            <form action="/uploadfile" encType="multipart/form-data" method="post">
                <input type="text" className="border" placeholder="Enter Name" name="name" />
                <input type="file" name="image" />
                <input type="submit" value="create post"  className="bg-success px-2"/>
            </form>
        </div>
        
    );
};

export default Blogs;