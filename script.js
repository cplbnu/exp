document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".overlay");

    images.forEach(function(image) {
        let clickCount = 0; // 初始化点击计数器

        image.addEventListener("click", function() {
            clickCount++; // 每次点击计数器加1

            if (clickCount % 2 === 1) {
                image.classList.add("hidden"); // 奇数次点击隐藏图片
            } else {
                image.classList.remove("hidden"); // 偶数次点击显示图片
            }
        });
    });
});
