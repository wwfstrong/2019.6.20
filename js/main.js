let hashA = init();
    let keys = hashA["keys"];
    let hash = hashA["hash"];

    generateKeyboard(keys, hash);
    toggleListenKeyPress(true);
    let input = document.querySelector("input");
    input.onblur = () => {
      toggleListenKeyPress(true);
    };
    input.onfocus = () => {
      toggleListenKeyPress(false);
    };

    let baidu = document.querySelector("#baidu");
    baidu.onclick = () => {
      window.open("http://www.baidu.com/s?wd=" + input.value);
    };
    let google = document.querySelector("#google");
    google.onclick = () => {
      window.open("http://www.google.com/search?q=" + input.value);
    };

    function tag(tagName) {
      return document.createElement(tagName);
    }
    function createSpan(textContent) {
      let span = tag("span");
      span.className = "text";
      span.textContent = textContent;
      return span;
    }
    function createImage(domain) {
      let img = tag("img");
      if (domain) {
        img.src = "http://" + domain + "/favicon.ico";
      } else {
        img.src = "//i.loli.net/2017/11/10/5a05afbc5e183.png";
      }
      img.onerror = function (xxx) {
        xxx.target.src = "//i.loli.net/2017/11/10/5a05afbc5e183.png";
      };
      return img;
    }
    function init() {
      let keys = {
        0: {
          0: "q",
          1: "w",
          2: "e",
          3: "r",
          4: "t",
          5: "y",
          6: "u",
          7: "i",
          8: "o",
          9: "p",
          length: 10
        },
        1: {
          0: "a",
          1: "s",
          2: "d",
          3: "f",
          4: "g",
          5: "h",
          6: "j",
          7: "k",
          8: "l",
          length: 9
        },
        2: {
          0: "z",
          1: "x",
          2: "c",
          3: "v",
          4: "b",
          5: "n",
          6: "m",
          length: 7
        },
        length: 3
      };
      let hash = {
        q: "www.qq.com",
        w: "weibo.com",
        e: "ganji.com",
        r: "radio.cn",
        t: "tmall.com",
        y: "qunar.com",
        u: "uc.cn",
        i: "iqiyi.com",
        o: "163.com",
        p: "people.com.cn",
        a: "acfun.cn",
        s: "www.sina.com.cn",
        d: "douyu.com",
        f: "www.ifeng.com",
        g: "guazi.com",
        h: "huya.com",
        j: "www.jd.com",
        k: "douban.com",
        l: "taobao.com",
        z: "zhaopin.com",
        x: "ximalaya.com",
        c: "ctrip.com",
        v: "www.vip.com",
        b: "bilibili.com",
        n: "mi.com",
        m: "meituan.com"
      };
      return {
        keys: keys,
        hash: hash
      };
    }
    function generateKeyboard(keys, hash) {
      for (let index = 0; index < keys["length"]; index = index + 1) {
        let div = tag("div");
        div.className = "row";
        keyboard.appendChild(div);
        let row = keys[index];
        for (let index2 = 0; index2 < row["length"]; index2 = index2 + 1) {
          let span = createSpan(row[index2]);
          let img = createImage(hash[row[index2]]);
          let kbd = tag("kbd");
          kbd.className = "key";
          kbd.appendChild(span);
          kbd.appendChild(img);
          div.appendChild(kbd);
        }
      }
    }
    function listenToUser(www) {
      let key = www["key"];
      let website = hash[key];
      window.open("http://" + website, "_blank");
    }
    function toggleListenKeyPress(isListen) {
      document[isListen ? "addEventListener" : "removeEventListener"](
        "keypress",
        listenToUser
      );
    }

      // let kbd = document.querySelectorAll('kbd')
      // for (let i = 0; i < kbd.length; i++) {
      //   kbd[i].onclick = function (www) {
      //     let website = hash[text];
      //     window.open("http://" + website, "_blank");
      //   }
      // }