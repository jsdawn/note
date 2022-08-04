export const useSlideIn = () => {
  const vSlide = {
    mounted: (el: HTMLElement) => {
      const delay = Math.random() * 0.6;
      el.style.opacity = '0';
      el.style.transform = 'translate(0px, 50px)';
      el.style.transition = `transform .35s ease-out ${delay}s, opacity .35s ease-out ${delay}s`;
      // 创建元素监听器
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          // 判断是否是当前元素，并且出现在窗口
          if (entry.target == el && entry.isIntersecting) {
            el.style.opacity = '1';
            el.style.transform = 'translate(0px, 0px)';
            observer.unobserve(el);
          }
        });
      });
      // 监听元素
      observer.observe(el);
    },
  };

  return vSlide;
};
