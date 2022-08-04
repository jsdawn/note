// 图片懒加载
export const useLazyLoad = () => {
  const vLazy = {
    mounted: (el: HTMLElement) => {
      // 创建元素监听器
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          // 判断是否是当前元素，并且出现在窗口
          if (entry.target == el && entry.isIntersecting) {
            const src = el.dataset.src;
            el.style.backgroundImage = `url(${src})`;
            observer.unobserve(el);
          }
        });
      });
      // 监听元素
      observer.observe(el);
    },
  };

  return vLazy;
};
