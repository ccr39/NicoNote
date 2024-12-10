// ==UserScript==
// @name         浏览器笔记本-NicoNote
// @name:zh-CN   浏览器笔记本-NicoNote
// @name:zh-TW   瀏覽器筆記本-NicoNote
// @name:en      Notebook in browser-NicoNote
// @namespace    https://github.com/ccr39/NicoNote
// @version      beta0.1
// @description        一个可以应用于浏览器的笔记本脚本。轻量，方便，支持 Markdown 语法。高效的浏览器学习工具。
// @description:zh-CN  一个可以应用于浏览器的笔记本脚本。轻量，方便，支持 Markdown 语法。高效的浏览器学习工具。
// @description:zh-TW  一個可以應用於瀏覽器的筆記本腳本。輕量，方便，支持 Markdown 語法。高效的瀏覽器學習工具。
// @description:en     A Notebook script in browser.Lightweight、Convenient，Supports Markdown syntax.Efficient learning tool in browsers.
// @author       ccr39
// @match        *://*/*
// @icon         data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIj4KIDxnPgogIDx0aXRsZT5MYXllciAxPC90aXRsZT4KICA8cmVjdCBpZD0ic3ZnXzUiIGhlaWdodD0iNTcxLjk5OTk4IiB3aWR0aD0iNTk2Ljk5OTk4IiB5PSItNDAuMzMzMzMiIHg9Ii02MS4wMDAwMSIgc3Ryb2tlPSIjMDAwIiBmaWxsPSIjMDA3ZmZmIi8+CiAgPGcgc3Ryb2tlPSJudWxsIiBpZD0ic3ZnXzEiPgogICA8cGF0aCBmaWxsPSIjZmZmZmZmIiBzdHJva2U9Im51bGwiIGQ9Im00MDUuNTc4MzgsMTFsLTI5NC41NTAzNCwwYy0xMy43MzIxNSwwIC0yNC45MDM4MiwxMS41OTE1NiAtMjQuOTAzODIsMjUuODM5ODRsMCwzNi4xOTU4OGwtMTQuODE3NzcsMGMtNy42NDA4NiwwIC0xMy44MzU0NSw2LjQyNzQyIC0xMy44MzU0NSwxNC4zNTU0N3M2LjE5NDU5LDE0LjM1NTQ3IDEzLjgzNTQ1LDE0LjM1NTQ3bDE0LjgxNzc3LDBsMCw1NS41OTI5OWwtMTQuODE3NzcsMGMtNy42NDA4NiwwIC0xMy44MzU0NSw2LjQyNzQyIC0xMy44MzU0NSwxNC4zNTU0N3M2LjE5NDU5LDE0LjM1NTQ3IDEzLjgzNTQ1LDE0LjM1NTQ3bDE0LjgxNzc3LDBsMCw1NS41OTM5NGwtMTQuODE3NzcsMGMtNy42NDA4NiwwIC0xMy44MzU0NSw2LjQyNzQyIC0xMy44MzU0NSwxNC4zNTU0N3M2LjE5NDU5LDE0LjM1NTQ3IDEzLjgzNTQ1LDE0LjM1NTQ3bDE0LjgxNzc3LDBsMCw1NS41OTM5NGwtMTQuODE3NzcsMGMtNy42NDA4NiwwIC0xMy44MzU0NSw2LjQyNzQyIC0xMy44MzU0NSwxNC4zNTU0N3M2LjE5NDU5LDE0LjM1NTQ3IDEzLjgzNTQ1LDE0LjM1NTQ3bDE0LjgxNzc3LDBsMCw1NS41OTI5OWwtMTQuODE3NzcsMGMtNy42NDA4NiwwIC0xMy44MzU0NSw2LjQyNzQyIC0xMy44MzU0NSwxNC4zNTU0N3M2LjE5NDU5LDE0LjM1NTQ3IDEzLjgzNTQ1LDE0LjM1NTQ3bDE0LjgxNzc3LDBsMCwzNi4xOTU4OGMwLDE0LjI0ODI4IDExLjE3MTY3LDI1LjgzOTg0IDI0LjkwMzgyLDI1LjgzOTg0bDI5NC41NTAzNCwwYzI0LjIzNDE4LDAgNDMuOTUwNjIsLTIwLjQ1NjU0IDQzLjk1MDYyLC00NS42MDI1NGwwLC0zOTguNzk0OTJjMCwtMjUuMTQ2IC0xOS43MTU1MiwtNDUuNjAyNTQgLTQzLjk1MDYyLC00NS42MDI1NHptMTYuMjc5NzIsNDQ0LjM5NzQ1YzAsOS4zMTM4MyAtNy4zMDIzNSwxNi44OTE2IC0xNi4yNzk3MiwxNi44OTE2bC0yOTEuNzgzMjUsMGwwLC0zMy4zMjQ3OGwxNC44MTc3NywwYzcuNjQwODYsMCAxMy44MzU0NSwtNi40Mjc0MiAxMy44MzU0NSwtMTQuMzU1NDdzLTYuMTk0NTksLTE0LjM1NTQ3IC0xMy44MzU0NSwtMTQuMzU1NDdsLTE0LjgxNzc3LDBsMCwtNTUuNTkyOTlsMTQuODE3NzcsMGM3LjY0MDg2LDAgMTMuODM1NDUsLTYuNDI3NDIgMTMuODM1NDUsLTE0LjM1NTQ3cy02LjE5NDU5LC0xNC4zNTU0NyAtMTMuODM1NDUsLTE0LjM1NTQ3bC0xNC44MTc3NywwbDAsLTU1LjU5Mzk0bDE0LjgxNzc3LDBjNy42NDA4NiwwIDEzLjgzNTQ1LC02LjQyNzQyIDEzLjgzNTQ1LC0xNC4zNTU0N3MtNi4xOTQ1OSwtMTQuMzU1NDcgLTEzLjgzNTQ1LC0xNC4zNTU0N2wtMTQuODE3NzcsMGwwLC01NS41OTM5NGwxNC44MTc3NywwYzcuNjQwODYsMCAxMy44MzU0NSwtNi40Mjc0MiAxMy44MzU0NSwtMTQuMzU1NDdzLTYuMTk0NTksLTE0LjM1NTQ3IC0xMy44MzU0NSwtMTQuMzU1NDdsLTE0LjgxNzc3LDBsMCwtNTUuNTkyOTlsMTQuODE3NzcsMGM3LjY0MDg2LDAgMTMuODM1NDUsLTYuNDI3NDIgMTMuODM1NDUsLTE0LjM1NTQ3cy02LjE5NDU5LC0xNC4zNTU0NyAtMTMuODM1NDUsLTE0LjM1NTQ3bC0xNC44MTc3NywwbDAsLTMzLjMyNDc4bDI5MS43ODMyNSwwYzguOTc2NDQsMCAxNi4yNzk3Miw3LjU3NjgyIDE2LjI3OTcyLDE2Ljg5MTZsMCwzOTguNzk0OTJ6IiBpZD0ic3ZnXzIiLz4KICAgPHBhdGggZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSJudWxsIiBkPSJtMzY2LjU0NzY0LDQxMC4yNTMzM2wtNjUuOTk4OCwwYy03LjY0MDg2LDAgLTEzLjgzNTQ1LDYuNDI3NDIgLTEzLjgzNTQ1LDE0LjM1NTQ3czYuMTk0NTksMTQuMzU1NDcgMTMuODM1NDUsMTQuMzU1NDdsNjUuOTk4OCwwYzcuNjQwODYsMCAxMy44MzU0NSwtNi40Mjc0MiAxMy44MzU0NSwtMTQuMzU1NDdzLTYuMTk0NTksLTE0LjM1NTQ3IC0xMy44MzU0NSwtMTQuMzU1NDd6IiBpZD0ic3ZnXzMiLz4KICAgPHBhdGggZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSJudWxsIiBkPSJtMzY2LjU0NzY0LDczLjAzNTcybC0xNjkuMTIwODksMGMtNy42NDA4NiwwIC0xMy44MzU0NSw2LjQyNzQyIC0xMy44MzU0NSwxNC4zNTU0N2wwLDc3Ljg5NDY5YzAsNy45MjgwNSA2LjE5NDU5LDE0LjM1NTQ3IDEzLjgzNTQ1LDE0LjM1NTQ3bDE2OS4xMjA4OSwwYzcuNjQwODYsMCAxMy44MzU0NSwtNi40Mjc0MiAxMy44MzU0NSwtMTQuMzU1NDdsMCwtNzcuODk0NjljMCwtNy45MjgwNSAtNi4xOTQ1OSwtMTQuMzU1NDcgLTEzLjgzNTQ1LC0xNC4zNTU0N3ptLTEzLjgzNTQ1LDc3Ljg5NDY5bC0xNDEuNDQ5OTgsMGwwLC00OS4xODM3NWwxNDEuNDQ5OTgsMGwwLDQ5LjE4Mzc1eiIgaWQ9InN2Z180Ii8+CiAgPC9nPgogPC9nPgoKPC9zdmc+
// @grant        unsafeWindow
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @grant        GM_info
// @grant        GM_xmlhttpRequest
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_addStyle
// @license      GNU GPL-3.0
// @supportURL   https://github.com/ccr39/NicoNote
// @homepage     https://github.com/ccr39/NicoNote
// @require      https://cdn.jsdelivr.net/npm/vditor/dist/index.min.js
// ==/UserScript==

GM_addStyle(`
@import url('https://cdn.jsdelivr.net/npm/vditor/dist/index.css');
`);

(function() {
    'use strict';
    var htmlNicoButton = '\
    <div id="nicoBt">\
		    <img id="nicoIcon" src="data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIj4KIDxnPgogIDx0aXRsZT5MYXllciAxPC90aXRsZT4KICA8cmVjdCBpZD0ic3ZnXzUiIGhlaWdodD0iNTcxLjk5OTk4IiB3aWR0aD0iNTk2Ljk5OTk4IiB5PSItNDAuMzMzMzMiIHg9Ii02MS4wMDAwMSIgc3Ryb2tlPSIjMDAwIiBmaWxsPSIjMDA3ZmZmIi8+CiAgPGcgc3Ryb2tlPSJudWxsIiBpZD0ic3ZnXzEiPgogICA8cGF0aCBmaWxsPSIjZmZmZmZmIiBzdHJva2U9Im51bGwiIGQ9Im00MDUuNTc4MzgsMTFsLTI5NC41NTAzNCwwYy0xMy43MzIxNSwwIC0yNC45MDM4MiwxMS41OTE1NiAtMjQuOTAzODIsMjUuODM5ODRsMCwzNi4xOTU4OGwtMTQuODE3NzcsMGMtNy42NDA4NiwwIC0xMy44MzU0NSw2LjQyNzQyIC0xMy44MzU0NSwxNC4zNTU0N3M2LjE5NDU5LDE0LjM1NTQ3IDEzLjgzNTQ1LDE0LjM1NTQ3bDE0LjgxNzc3LDBsMCw1NS41OTI5OWwtMTQuODE3NzcsMGMtNy42NDA4NiwwIC0xMy44MzU0NSw2LjQyNzQyIC0xMy44MzU0NSwxNC4zNTU0N3M2LjE5NDU5LDE0LjM1NTQ3IDEzLjgzNTQ1LDE0LjM1NTQ3bDE0LjgxNzc3LDBsMCw1NS41OTM5NGwtMTQuODE3NzcsMGMtNy42NDA4NiwwIC0xMy44MzU0NSw2LjQyNzQyIC0xMy44MzU0NSwxNC4zNTU0N3M2LjE5NDU5LDE0LjM1NTQ3IDEzLjgzNTQ1LDE0LjM1NTQ3bDE0LjgxNzc3LDBsMCw1NS41OTM5NGwtMTQuODE3NzcsMGMtNy42NDA4NiwwIC0xMy44MzU0NSw2LjQyNzQyIC0xMy44MzU0NSwxNC4zNTU0N3M2LjE5NDU5LDE0LjM1NTQ3IDEzLjgzNTQ1LDE0LjM1NTQ3bDE0LjgxNzc3LDBsMCw1NS41OTI5OWwtMTQuODE3NzcsMGMtNy42NDA4NiwwIC0xMy44MzU0NSw2LjQyNzQyIC0xMy44MzU0NSwxNC4zNTU0N3M2LjE5NDU5LDE0LjM1NTQ3IDEzLjgzNTQ1LDE0LjM1NTQ3bDE0LjgxNzc3LDBsMCwzNi4xOTU4OGMwLDE0LjI0ODI4IDExLjE3MTY3LDI1LjgzOTg0IDI0LjkwMzgyLDI1LjgzOTg0bDI5NC41NTAzNCwwYzI0LjIzNDE4LDAgNDMuOTUwNjIsLTIwLjQ1NjU0IDQzLjk1MDYyLC00NS42MDI1NGwwLC0zOTguNzk0OTJjMCwtMjUuMTQ2IC0xOS43MTU1MiwtNDUuNjAyNTQgLTQzLjk1MDYyLC00NS42MDI1NHptMTYuMjc5NzIsNDQ0LjM5NzQ1YzAsOS4zMTM4MyAtNy4zMDIzNSwxNi44OTE2IC0xNi4yNzk3MiwxNi44OTE2bC0yOTEuNzgzMjUsMGwwLC0zMy4zMjQ3OGwxNC44MTc3NywwYzcuNjQwODYsMCAxMy44MzU0NSwtNi40Mjc0MiAxMy44MzU0NSwtMTQuMzU1NDdzLTYuMTk0NTksLTE0LjM1NTQ3IC0xMy44MzU0NSwtMTQuMzU1NDdsLTE0LjgxNzc3LDBsMCwtNTUuNTkyOTlsMTQuODE3NzcsMGM3LjY0MDg2LDAgMTMuODM1NDUsLTYuNDI3NDIgMTMuODM1NDUsLTE0LjM1NTQ3cy02LjE5NDU5LC0xNC4zNTU0NyAtMTMuODM1NDUsLTE0LjM1NTQ3bC0xNC44MTc3NywwbDAsLTU1LjU5Mzk0bDE0LjgxNzc3LDBjNy42NDA4NiwwIDEzLjgzNTQ1LC02LjQyNzQyIDEzLjgzNTQ1LC0xNC4zNTU0N3MtNi4xOTQ1OSwtMTQuMzU1NDcgLTEzLjgzNTQ1LC0xNC4zNTU0N2wtMTQuODE3NzcsMGwwLC01NS41OTM5NGwxNC44MTc3NywwYzcuNjQwODYsMCAxMy44MzU0NSwtNi40Mjc0MiAxMy44MzU0NSwtMTQuMzU1NDdzLTYuMTk0NTksLTE0LjM1NTQ3IC0xMy44MzU0NSwtMTQuMzU1NDdsLTE0LjgxNzc3LDBsMCwtNTUuNTkyOTlsMTQuODE3NzcsMGM3LjY0MDg2LDAgMTMuODM1NDUsLTYuNDI3NDIgMTMuODM1NDUsLTE0LjM1NTQ3cy02LjE5NDU5LC0xNC4zNTU0NyAtMTMuODM1NDUsLTE0LjM1NTQ3bC0xNC44MTc3NywwbDAsLTMzLjMyNDc4bDI5MS43ODMyNSwwYzguOTc2NDQsMCAxNi4yNzk3Miw3LjU3NjgyIDE2LjI3OTcyLDE2Ljg5MTZsMCwzOTguNzk0OTJ6IiBpZD0ic3ZnXzIiLz4KICAgPHBhdGggZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSJudWxsIiBkPSJtMzY2LjU0NzY0LDQxMC4yNTMzM2wtNjUuOTk4OCwwYy03LjY0MDg2LDAgLTEzLjgzNTQ1LDYuNDI3NDIgLTEzLjgzNTQ1LDE0LjM1NTQ3czYuMTk0NTksMTQuMzU1NDcgMTMuODM1NDUsMTQuMzU1NDdsNjUuOTk4OCwwYzcuNjQwODYsMCAxMy44MzU0NSwtNi40Mjc0MiAxMy44MzU0NSwtMTQuMzU1NDdzLTYuMTk0NTksLTE0LjM1NTQ3IC0xMy44MzU0NSwtMTQuMzU1NDd6IiBpZD0ic3ZnXzMiLz4KICAgPHBhdGggZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSJudWxsIiBkPSJtMzY2LjU0NzY0LDczLjAzNTcybC0xNjkuMTIwODksMGMtNy42NDA4NiwwIC0xMy44MzU0NSw2LjQyNzQyIC0xMy44MzU0NSwxNC4zNTU0N2wwLDc3Ljg5NDY5YzAsNy45MjgwNSA2LjE5NDU5LDE0LjM1NTQ3IDEzLjgzNTQ1LDE0LjM1NTQ3bDE2OS4xMjA4OSwwYzcuNjQwODYsMCAxMy44MzU0NSwtNi40Mjc0MiAxMy44MzU0NSwtMTQuMzU1NDdsMCwtNzcuODk0NjljMCwtNy45MjgwNSAtNi4xOTQ1OSwtMTQuMzU1NDcgLTEzLjgzNTQ1LC0xNC4zNTU0N3ptLTEzLjgzNTQ1LDc3Ljg5NDY5bC0xNDEuNDQ5OTgsMGwwLC00OS4xODM3NWwxNDEuNDQ5OTgsMGwwLDQ5LjE4Mzc1eiIgaWQ9InN2Z180Ii8+CiAgPC9nPgogPC9nPgoKPC9zdmc+">\
    </div>\
    ';
    //用字符串定义这个元素，很臭吧。。。。
    if (window.self === window.top) {
        document.querySelector("body").insertAdjacentHTML("afterend",htmlNicoButton);
    }
    var nicoButton = document.getElementById("nicoBt");
    var nicoIcon = document.getElementById("nicoIcon");
    //var 表示定义变量，根据getElementById()利用id找到<div>元素
    var nicoButtonStyle = "\
    position: fixed;\
    right: 1%;\
    bottom:80%;\
    width: 48px;\
    height: 48px;\
    border: 2px solid #D3D3D3;\
    border-radius: 50%;\
    background: rgb(0, 127, 255);\
    z-index: 214748364700;\
    text-align: center;\
    ";
    //用字符串写样式，给自己跪了。。。
    var nicoIconStyle = "\
    height: 71%;\
    position: absolute;\
    top: 50%;\
    left: 50%;\
    transform: translate(-50%, -50%);\
    :hover\
    {\
    filter: brightness(0.7);  \
    }\
    ";
    //第一句表示依照浏览器边框定位，right与bottom定义位置，width与height定义长宽，border用于定义边框，border-radius用于实现圆形效果,z-index定义了元素的图层高度，设置一个很大的数字可以保证其置于其他图像上方。
    //定义<div>元素的CSS样式，输入字符串时进行换行操作,在每行末尾加上\
    //末尾的;可加可不加
    nicoButton.setAttribute("style",nicoButtonStyle);
    nicoIcon.setAttribute("style",nicoIconStyle);
    //setAttribute(,)可以改变元素属性，用来改变nicoButton的CSS样式
    nicoButton.addEventListener("mouseover", function () {
        nicoButton.style.width = "55px";
        nicoButton.style.height = "55px";//变大
        nicoButton.style.cursor = "pointer";//手指
    });
    nicoButton.addEventListener("mouseout", function () {
        nicoButton.style.width = "48px";
        nicoButton.style.height = "48px";
        nicoButton.style.cursor = "";
    });
    var nicoNoteDiv = document.createElement("div");//这里用document.creatElement()创建元素。ps.比最开始进步了
    nicoNoteDiv.setAttribute("id","nicoNoteDiv");
    var nicoDivStyle = "\
    position: fixed;\
    right: 8%;\
    bottom: 38%;\
    width: 360px;\
    height: 400px;\
    z-index: 214748364700;\
    background: black;\
    overflow: hidden;\
    resize: both;\
    }\
    ";
    nicoNoteDiv.setAttribute("style",nicoDivStyle);
    nicoButton.addEventListener("click", function () {
     document.querySelector("html").appendChild(nicoNoteDiv);//用点击事件呼出编辑框,添加在 nicoBt 后面
     nicoButton.style.opacity="0.3";//透明化
    });
})();