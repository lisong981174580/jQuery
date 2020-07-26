class jQuery {
  constructor(selector) {
    const result = document.querySelectorAll(selector);
    const length = result.length;

    for (let i = 0; i < length; i++) {
      this[i] = result[i];
    }

    this.length = length;
    this.selector = selector;
  }

  get(index) {
    return this[index];
  }

  each(fn) {
    for (let i = 0; i < this.length; i++) {
      const elem = this[i];

      fn(elem);
    }
  }

  on(type, fn) {
    return this.each(elem => {
      // 第三个参数为默认值，事件执行在冒泡阶段执行，可不设置
      elem.addEventListener(type, fn.bind(this, elem), false); 
    })
  }

  // TODO: 可继续扩展
}

// 插件机制
jQuery.prototype.dialog = function(info) {
    alert(info);
}

// 复写机制，造轮子
class myJQuery extends jQuery {
  constructor(selector) {
    super(selector);
  }

  // 扩展自己的方法
  addClass(className) {

  }

  style(data) {
    
  }
} 