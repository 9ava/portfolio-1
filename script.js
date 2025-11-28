// 구아바약국

document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    const mobileMenu = document.getElementById('mobileMenu');
    const gnb = document.getElementById('gnb');
    const gnbLinks = gnb.querySelectorAll('a');

    // 모바일 메뉴 토글
    mobileMenu.addEventListener('click', function() {
        this.classList.toggle('active');
        gnb.classList.toggle('active');
    });

    // 메뉴 클릭 시 닫기
    gnbLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            gnb.classList.remove('active');
        });
    });

    // 외부 클릭 시 메뉴 닫기
    document.addEventListener('click', function(e) {
        if (!gnb.contains(e.target) && !mobileMenu.contains(e.target)) {
            mobileMenu.classList.remove('active');
            gnb.classList.remove('active');
        }
    });

    // 스무스 스크롤
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            var href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            var target = document.querySelector(href);
            if (target) {
                var headerHeight = header.offsetHeight;
                var targetPosition = target.offsetTop - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ESC 키로 메뉴 닫기
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            mobileMenu.classList.remove('active');
            gnb.classList.remove('active');
        }
    });
});
