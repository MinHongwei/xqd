import React from 'react';
import PhotoSwipe from 'photoswipe';
import PhotoswipeUIDefault from 'photoswipe/dist/photoswipe-ui-default';
import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';
/**
 * @author 闵宏维
 * ps.可以自行新建并重写，但是拒绝做任何更改，欢迎反应bug  qq：2959000390，
 */
export default class ImgSwipe extends React.Component {
  componentDidMount() {
    const parseThumbnailElements = (el) => {
      const thumbElements = el.childNodes;
      const numNodes = thumbElements.length;
      const items = [];
      let item;
      for (let i = 0; i < numNodes; i += 1) {
        if (thumbElements[i] !== undefined) {
          const imgname = thumbElements[i].tagName;
          if (imgname !== 'IMG') {
            thumbElements[i].remove(imgname);
          }
        }
      }
      for (let i = 0; i < numNodes; i += 1) {
        const itemSrc = thumbElements[i].currentSrc;
        if (itemSrc !== undefined) {
          item = {
            src: itemSrc,
            msrc: itemSrc,
            w: thumbElements[i].dataset.width || 1920,
            h: thumbElements[i].dataset.height || 1080,
            title: thumbElements[i].alt,
          };
        }
        items.push(item);
      }
      return items;
    };

    const openPhotoSwipe = (index, galleryElement) => {
      const pswpElement = document.getElementById('showImg');
      const items = parseThumbnailElements(galleryElement);

      const options = {
        galleryUID: galleryElement.getAttribute('data-pswp-uid'),
      };
      options.index = parseInt(index, 10);
      if (isNaN(options.index)) {
        return;
      }
      // if (disableAnimation) {
      //   options.showAnimationDuration = 0; // 当 用户输入展示图片链接时，默认加载出图，
      // }
      this.gallery = new PhotoSwipe(pswpElement, PhotoswipeUIDefault, items, options);
      this.gallery.init();
    };
    const closest = function closest(el, fn) {
      return el && (fn(el) ? el : closest(el.parentNode, fn));
    };
    const onThumbnailsClick = (e) => {
      const e1 = e;
      if (e1.preventDefault) {
        e1.preventDefault();
      } else {
        e1.returnValue = false;
      }
      const eTarget = e1.target || e1.srcElement;
      const clickedListItem = closest(eTarget, (ei) => {
        return ei !== undefined;
      });
      if (!clickedListItem) {
        return;
      }
      const clickedGallery = clickedListItem.parentNode;
      const { childNodes } = clickedListItem.parentNode;
      let index;
      for (let i = 0; i < childNodes.length; i += 1) {
        if (childNodes[i] !== undefined) {
          const imgname = childNodes[i].tagName;
          if (imgname !== 'IMG') {
            childNodes[i].remove(imgname);
          }
        }
      }
      for (let i = 0; i < childNodes.length; i += 1) {
        if (childNodes[i].currentSrc === clickedListItem.currentSrc) {
          index = i;
        }
      }
      if (index >= 0) {
        openPhotoSwipe(index, clickedGallery);
      }
      return false;
    };
    const galleryElements = document.querySelectorAll('#imgSwipe');
    for (let i = 0, l = galleryElements.length; i < l; i += 1) {
      galleryElements[i].setAttribute('data-pswp-uid', i + 1);
      galleryElements[i].onclick = onThumbnailsClick;
    }
  }

  componentWillUnmount = () => {
    this.closeGallery();
  };

  closeGallery = () => {
    if (!this.gallery) return;
    this.gallery.close();
  };

  render() {
    const { imgs = [] } = this.props;
    const imgsTag = imgs.map(img => img);
    return (
      <div>
        <div id="imgSwipe">{imgsTag}</div>

        <div className="pswp" tabIndex="-1" role="dialog" aria-hidden="true" id="showImg">
          <div className="pswp__bg" />
          <div className="pswp__scroll-wrap">
            <div className="pswp__container">
              <div className="pswp__item" />
              <div className="pswp__item" />
              <div className="pswp__item" />
            </div>
            <div className="pswp__ui pswp__ui--hidden">
              <div className="pswp__top-bar">
                <div className="pswp__counter" />
                <button className="pswp__button pswp__button--close" title="关 闭 (Esc)" />
                <button className="pswp__button pswp__button--fs" title="全 屏" />
                <button className="pswp__button pswp__button--zoom" title="放大/缩小" />
                <div className="pswp__preloader">
                  <div className="pswp__preloader__icn">
                    <div className="pswp__preloader__cut">
                      <div className="pswp__preloader__donut" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                <div className="pswp__share-tooltip" />
              </div>
              <button className="pswp__button pswp__button--arrow--left" title="上一张(左箭头)" />
              <button className="pswp__button pswp__button--arrow--right" title="下一张(右箭头)" />
              <div className="pswp__caption">
                <div
                  className="pswp__caption__center"
                  style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
                />
              </div>
            </div>
          </div>
        </div>
        <style>
          {`
              .ant-card-body img {
                  cursor: pointer;
                  }
                `}
        </style>
      </div>
    );
  }
}
