
//前端发送 --更新数据请求 --给后端路由

$("#tijiao").on("click", () => {
    var name = $("#inputEmail4").val();
    var age = $("#inputPassword4").val();
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/setting/updateUser",
        data: {
            "name": name,
            "age": age
        },
        success(data) {
            // resolve(data)
            tijiao.innerHTML = " 数据更新成功";
            setTimeout(()=>{
                tijiao.innerHTML = "提交更新";
            },500)
        }
    })
})