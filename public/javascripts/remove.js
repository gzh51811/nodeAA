$("#tijiao").on("click", () => {
    var name = $("#inputEmail4").val();
    // var age = $("#inputPassword4").val();
    // var skill = $("#inputAddress").val();
    // var description = $("#inputAddress2").val();
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/setting/removeUser",
        data: {
            "name": name,
        },
        success(data) {
            // resolve(data)
            tijiao.innerHTML = " 数据删除成功";
            setTimeout(()=>{
                tijiao.innerHTML = "删除";
            },1000)
        }
    })
})