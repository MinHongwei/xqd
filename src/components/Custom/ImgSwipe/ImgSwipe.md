/**
 * @author MinHongwei
 * 参考：photoswipe官网入门中的第二个例子
 * 提示：可以使用，复制重写，但禁止作者以外的人做任何更改
 * 使用方法：
 *  第一步：引入该组件 import ImgSwipe from '组件的相对路径';
 *  第二步：
 *    const imgs = [
 *     <img itemProp="contentUrl" style={{ margin: '10px' }} alt="minhw" width="100%" src="http://www.xunqiandu.com/images/imtest.png" data-width="1924" data-height="1024" />,
 *    <img itemProp="contentUrl" style={{ marginTop: '10px' }} alt="minhw" width="100%" src="http://www.xunqiandu.com/images/img-2.jpg" />,
 *    <img itemProp="contentUrl" alt="minhw" width="100%" src="http://www.xunqiandu.com/images/img-3.jpg" />,
 *  ];
 *    图片数组定义说明：
 *         1. 图之间的宽度使用margin便签，alt中已被吾定义为图放大时下部的描述显示，为空即不描述；空格不为空，如" "不为空。
 *         2. data-width="1924" 为自定义放大效果的宽； data-height="1024"; 为为自定义放大效果的高，
 *            不设置吾自定义的属性，即为使用默认值 1920*1080
 *   第三步：<ImgSwipe imgs={imgs} /> --放在要用图片的位置
 */