let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-images img');
    if (index >= slides.length) {
        currentSlide = 0; // 如果索引超出范围，返回到第一张
    } else if (index < 0) {
        currentSlide = slides.length - 1; // 如果索引小于0，返回到最后一张
    } else {
        currentSlide = index; // 设置当前索引
    }
    const offset = -currentSlide * 100; // 计算偏移量
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

function moveSlide(direction) {
    showSlide(currentSlide + direction);
}

// 自动播放
setInterval(() => {
    moveSlide(1);
}, 5000); // 每5秒切换一次

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide); // 初始化显示第一张图片

    // 动态主题切换
    const themeToggle = document.querySelector('.theme-toggle');
    let darkMode = false;

    themeToggle.addEventListener('click', () => {
        darkMode = !darkMode;
        if (darkMode) {
            document.body.style.backgroundColor = '#333'; // 深色背景
            document.body.style.color = '#f4f4f4'; // 浅色文字
            themeToggle.style.backgroundColor = '#4CAF50'; // 按钮背景
            themeToggle.style.color = '#fff'; // 按钮文字
            // 隐藏轮播图
            document.querySelector('.carousel').style.display = 'none'; // 隐藏轮播图
            // 调整其他元素的样式
            document.querySelector('.container').style.backgroundColor = '#444'; // 内容区域背景
            document.querySelector('.container').style.color = '#f4f4f4'; // 内容区域文字
            // 调整教育背景、工作经验、技能和项目经验的样式
            const eduItems = document.querySelectorAll('.edu-item, .exp-item, .skill, .project');
            eduItems.forEach(item => {
                item.style.backgroundColor = '#555'; // 深色背景
                item.style.color = '#f4f4f4'; // 浅色文字
            });
        } else {
            document.body.style.backgroundColor = '#f4f4f4'; // 浅色背景
            document.body.style.color = '#333'; // 深色文字
            themeToggle.style.backgroundColor = '#fff'; // 按钮背景
            themeToggle.style.color = '#333'; // 按钮文字
            // 显示轮播图
            document.querySelector('.carousel').style.display = 'block'; // 显示轮播图
            // 恢复其他元素的样式
            document.querySelector('.container').style.backgroundColor = '#fff'; // 内容区域背景
            document.querySelector('.container').style.color = '#333'; // 内容区域文字
            // 恢复教育背景、工作经验、技能和项目经验的样式
            const eduItems = document.querySelectorAll('.edu-item, .exp-item, .skill, .project');
            eduItems.forEach(item => {
                item.style.backgroundColor = '#fafafa'; // 浅色背景
                item.style.color = '#333'; // 深色文字
            });
        }
    });
});