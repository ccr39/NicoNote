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
// @require       https://unpkg.com/vditor/dist/index.min.js
// @require      https://unpkg.com/vditor@3.10.8/dist/js/i18n/zh_CN.js
// @run-at       document-idle
// @connect      *
// ==/UserScript==
GM_addStyle(`@import url('https://unpkg.com/vditor/dist/index.css');`);
(()=>{
    'use strict';

//-------------------------------------------------------------------------------------
    const nicoButton = document.createElement('div');
    const nicoIcon = document.createElement('img');
    nicoButton.id = "nicoBt";
    nicoIcon.id = "nicoIcon";
    nicoIcon.src = 'data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIj4KIDxnPgogIDx0aXRsZT5MYXllciAxPC90aXRsZT4KICA8cmVjdCBpZD0ic3ZnXzUiIGhlaWdodD0iNTcxLjk5OTk4IiB3aWR0aD0iNTk2Ljk5OTk4IiB5PSItNDAuMzMzMzMiIHg9Ii02MS4wMDAwMSIgc3Ryb2tlPSIjMDAwIiBmaWxsPSIjMDA3ZmZmIi8+CiAgPGcgc3Ryb2tlPSJudWxsIiBpZD0ic3ZnXzEiPgogICA8cGF0aCBmaWxsPSIjZmZmZmZmIiBzdHJva2U9Im51bGwiIGQ9Im00MDUuNTc4MzgsMTFsLTI5NC41NTAzNCwwYy0xMy43MzIxNSwwIC0yNC45MDM4MiwxMS41OTE1NiAtMjQuOTAzODIsMjUuODM5ODRsMCwzNi4xOTU4OGwtMTQuODE3NzcsMGMtNy42NDA4NiwwIC0xMy44MzU0NSw2LjQyNzQyIC0xMy44MzU0NSwxNC4zNTU0N3M2LjE5NDU5LDE0LjM1NTQ3IDEzLjgzNTQ1LDE0LjM1NTQ3bDE0LjgxNzc3LDBsMCw1NS41OTI5OWwtMTQuODE3NzcsMGMtNy42NDA4NiwwIC0xMy44MzU0NSw2LjQyNzQyIC0xMy44MzU0NSwxNC4zNTU0N3M2LjE5NDU5LDE0LjM1NTQ3IDEzLjgzNTQ1LDE0LjM1NTQ3bDE0LjgxNzc3LDBsMCw1NS41OTM5NGwtMTQuODE3NzcsMGMtNy42NDA4NiwwIC0xMy44MzU0NSw2LjQyNzQyIC0xMy44MzU0NSwxNC4zNTU0N3M2LjE5NDU5LDE0LjM1NTQ3IDEzLjgzNTQ1LDE0LjM1NTQ3bDE0LjgxNzc3LDBsMCw1NS41OTM5NGwtMTQuODE3NzcsMGMtNy42NDA4NiwwIC0xMy44MzU0NSw2LjQyNzQyIC0xMy44MzU0NSwxNC4zNTU0N3M2LjE5NDU5LDE0LjM1NTQ3IDEzLjgzNTQ1LDE0LjM1NTQ3bDE0LjgxNzc3LDBsMCw1NS41OTI5OWwtMTQuODE3NzcsMGMtNy42NDA4NiwwIC0xMy44MzU0NSw2LjQyNzQyIC0xMy44MzU0NSwxNC4zNTU0N3M2LjE5NDU5LDE0LjM1NTQ3IDEzLjgzNTQ1LDE0LjM1NTQ3bDE0LjgxNzc3LDBsMCwzNi4xOTU4OGMwLDE0LjI0ODI4IDExLjE3MTY3LDI1LjgzOTg0IDI0LjkwMzgyLDI1LjgzOTg0bDI5NC41NTAzNCwwYzI0LjIzNDE4LDAgNDMuOTUwNjIsLTIwLjQ1NjU0IDQzLjk1MDYyLC00NS42MDI1NGwwLC0zOTguNzk0OTJjMCwtMjUuMTQ2IC0xOS43MTU1MiwtNDUuNjAyNTQgLTQzLjk1MDYyLC00NS42MDI1NHptMTYuMjc5NzIsNDQ0LjM5NzQ1YzAsOS4zMTM4MyAtNy4zMDIzNSwxNi44OTE2IC0xNi4yNzk3MiwxNi44OTE2bC0yOTEuNzgzMjUsMGwwLC0zMy4zMjQ3OGwxNC44MTc3NywwYzcuNjQwODYsMCAxMy44MzU0NSwtNi40Mjc0MiAxMy44MzU0NSwtMTQuMzU1NDdzLTYuMTk0NTksLTE0LjM1NTQ3IC0xMy44MzU0NSwtMTQuMzU1NDdsLTE0LjgxNzc3LDBsMCwtNTUuNTkyOTlsMTQuODE3NzcsMGM3LjY0MDg2LDAgMTMuODM1NDUsLTYuNDI3NDIgMTMuODM1NDUsLTE0LjM1NTQ3cy02LjE5NDU5LC0xNC4zNTU0NyAtMTMuODM1NDUsLTE0LjM1NTQ3bC0xNC44MTc3NywwbDAsLTU1LjU5Mzk0bDE0LjgxNzc3LDBjNy42NDA4NiwwIDEzLjgzNTQ1LC02LjQyNzQyIDEzLjgzNTQ1LC0xNC4zNTU0N3MtNi4xOTQ1OSwtMTQuMzU1NDcgLTEzLjgzNTQ1LC0xNC4zNTU0N2wtMTQuODE3NzcsMGwwLC01NS41OTM5NGwxNC44MTc3NywwYzcuNjQwODYsMCAxMy44MzU0NSwtNi40Mjc0MiAxMy44MzU0NSwtMTQuMzU1NDdzLTYuMTk0NTksLTE0LjM1NTQ3IC0xMy44MzU0NSwtMTQuMzU1NDdsLTE0LjgxNzc3LDBsMCwtNTUuNTkyOTlsMTQuODE3NzcsMGM3LjY0MDg2LDAgMTMuODM1NDUsLTYuNDI3NDIgMTMuODM1NDUsLTE0LjM1NTQ3cy02LjE5NDU5LC0xNC4zNTU0NyAtMTMuODM1NDUsLTE0LjM1NTQ3bC0xNC44MTc3NywwbDAsLTMzLjMyNDc4bDI5MS43ODMyNSwwYzguOTc2NDQsMCAxNi4yNzk3Miw3LjU3NjgyIDE2LjI3OTcyLDE2Ljg5MTZsMCwzOTguNzk0OTJ6IiBpZD0ic3ZnXzIiLz4KICAgPHBhdGggZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSJudWxsIiBkPSJtMzY2LjU0NzY0LDQxMC4yNTMzM2wtNjUuOTk4OCwwYy03LjY0MDg2LDAgLTEzLjgzNTQ1LDYuNDI3NDIgLTEzLjgzNTQ1LDE0LjM1NTQ3czYuMTk0NTksMTQuMzU1NDcgMTMuODM1NDUsMTQuMzU1NDdsNjUuOTk4OCwwYzcuNjQwODYsMCAxMy44MzU0NSwtNi40Mjc0MiAxMy44MzU0NSwtMTQuMzU1NDdzLTYuMTk0NTksLTE0LjM1NTQ3IC0xMy44MzU0NSwtMTQuMzU1NDd6IiBpZD0ic3ZnXzMiLz4KICAgPHBhdGggZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSJudWxsIiBkPSJtMzY2LjU0NzY0LDczLjAzNTcybC0xNjkuMTIwODksMGMtNy42NDA4NiwwIC0xMy44MzU0NSw2LjQyNzQyIC0xMy44MzU0NSwxNC4zNTU0N2wwLDc3Ljg5NDY5YzAsNy45MjgwNSA2LjE5NDU5LDE0LjM1NTQ3IDEzLjgzNTQ1LDE0LjM1NTQ3bDE2OS4xMjA4OSwwYzcuNjQwODYsMCAxMy44MzU0NSwtNi40Mjc0MiAxMy44MzU0NSwtMTQuMzU1NDdsMCwtNzcuODk0NjljMCwtNy45MjgwNSAtNi4xOTQ1OSwtMTQuMzU1NDcgLTEzLjgzNTQ1LC0xNC4zNTU0N3ptLTEzLjgzNTQ1LDc3Ljg5NDY5bC0xNDEuNDQ5OTgsMGwwLC00OS4xODM3NWwxNDEuNDQ5OTgsMGwwLDQ5LjE4Mzc1eiIgaWQ9InN2Z180Ii8+CiAgPC9nPgogPC9nPgoKPC9zdmc+';
    var nicoButtonStyle =`position: fixed;
    left: ${window.innerWidth-80}px;
    top: 50px;
    width: 48px;
    height: 48px;
    border: 2px solid #D3D3D3;
    border-radius: 50%;
    background: rgb(0, 127, 255);
    z-index: 214748364700;
    text-align: center`;
    //用字符串写样式，给自己跪了。。。最后一个center后的;可写可不写
    //若在引号内换行，要在每行末加上\
    var nicoIconStyle = `height: 71%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    :hover{filter: brightness(0.7);`;
    //第一句表示依照浏览器边框定位，left与bottom定义位置，width与height定义长宽，border用于定义边框，border-radius用于实现圆形效果,z-index定义了元素的图层高度，设置一个很大的数字可以保证其置于其他图像上方。
    nicoButton.setAttribute("style",nicoButtonStyle);
    nicoIcon.setAttribute("style",nicoIconStyle);
    if (window.self === window.top) {
        document.querySelector("html").appendChild(nicoButton);
        nicoButton.appendChild(nicoIcon);
    }
    //setAttribute(,)可以改变元素属性，用来改变nicoButton的CSS样式
    nicoButton.addEventListener("mouseover", function () {//mouseover指的是鼠标移上去的事件
        nicoButton.style.width = "55px";
        nicoButton.style.height = "55px";//变大
        nicoButton.style.cursor = "pointer";//手指
    });
    nicoButton.addEventListener("mouseout", function () {//mouseout指的是鼠标移走的事件
        nicoButton.style.width = "48px";
        nicoButton.style.height = "48px";
        nicoButton.style.cursor = "";
    });
    var ifNicoNotDiv = true;
    letWeDrag(nicoButton,true);

    nicoButton.addEventListener("click", function () {
        if(ifNicoNotDiv){
            //用点击事件呼出编辑框,添加在 nicoBt 后面
            nicoButton.style.opacity="0.3";
            //透明化
            nicoNoteDiv.style.top = `${parseInt(nicoButton.style.top)}px`;
            nicoNoteDiv.style.left = `${parseInt(nicoButton.style.left)-parseInt(nicoNoteDiv.style.width)}px`;
            nicoNoteDiv.style.display = "";
            //相对图标位置呼出编辑框。
            ifNicoNotDiv = false;
            nicoNoteDiv.style.display = "";
        }
        else{
            nicoNoteDiv.style.display = "none";
            nicoButton.style.opacity="1";
            ifNicoNotDiv = true;
            //点击两次隐藏。
        }});
//----------------------------------------上方主要编辑了按钮的功能，下方来编辑Note框---------------------------------------------------
    var nicoNoteDiv = document.createElement("div");
    //这里用document.creatElement()创建元素。ps.比最开始进步了
    nicoNoteDiv.setAttribute("id","nicoNoteDiv");
    var nicoDivStyle = `position: fixed;
    top: 60px;
    width: 360px;
    height: 200px;
    z-index: 214748364700;
    background: black;
    border: 1px solid #D3D3D3;
    resize: both;
    overflow: auto;
    border-radius: 10px;
    `;
    //border-radius绘制圆角矩形
    nicoNoteDiv.setAttribute("style",nicoDivStyle);
    nicoNoteDiv.style.top = `${parseInt(nicoButton.style.top)}px`;
    nicoNoteDiv.style.left = `${parseInt(nicoButton.style.left)-parseInt(nicoNoteDiv.style.width)}px`;
    nicoNoteDiv.style.display = "none";
    document.querySelector("html").appendChild(nicoNoteDiv);

//---------------------------------------限制大小---------------------------
    document.addEventListener("mouseup",()=>{
        if(parseInt(nicoNoteDiv.style.width)<200){ nicoNoteDiv.style.width="200px";};
        if(parseInt(nicoNoteDiv.style.height)<40){ nicoNoteDiv.style.height="40px";}
    });
//------------------------------改变窗口大小调节位置----------------------------------------
    window.top.addEventListener('resize', () => {
        const elementWidth = nicoButton.offsetWidth;
        const viewportWidth = window.innerWidth;
        nicoButton.style.left = (viewportWidth - elementWidth-10) + "px";
        nicoNoteDiv.style.top = `${parseInt(nicoButton.style.top)}px`;
        nicoNoteDiv.style.left = `${parseInt(nicoButton.style.left)-parseInt(nicoNoteDiv.style.width)}px`;
    });
//————————————————引入 Vditor—————————————————————————————
    const nicoVditor = document.createElement("div");
    nicoVditor.id = "nicoVditor";
    nicoVditor.style = `
    position: absolute;
    width: 100%;
    top: 0;
    bottom: 0;
    background: #D3D3D3;
    `;
    //用``来写，又进步了。这里在absolute下定义top和bottom后不定义height，就可以让其填满。
    nicoNoteDiv.appendChild(nicoVditor);
    const vditor = new Vditor("nicoVditor",{
        width: "100%",
        placeholder: 'NicoNote🤗',
        toolbar: ['emoji','table','edit-mode'],
        cache: {
            enable: false,
        },
        after: () =>{
            const nicoToolbar=document.querySelector("#nicoVditor > div.vditor-toolbar");
            nicoToolbar.style.cursor = "move";
        letWeDrag(nicoNoteDiv,false,nicoToolbar);
        }
    });
//---------------------------------------底下是一个可以让元素可以被拖动的函数---------------------------
    function letWeDrag(dragDiv,ifBt,nicoToolbar){
        let offsetX = 0;
        let offsetY = 0;
        let nicoDivX =0;
        let nicoDivY =0;
        let ifDragging = false;
        //充当一个布尔变量，用于判断是否在抓取移动状态,let为局部变量
        if(ifBt){dragDiv.addEventListener("mousedown",(e) => {//"mousedown"即监测鼠标点下的事件。
            ifDragging = true;
            offsetX = e.clientX;
            offsetY = e.clientY;
            //记录初始鼠标坐标(相对于左上角)
            nicoDivY = parseInt(dragDiv.style.top);
            nicoDivX = parseInt(dragDiv.style.left);
            //获取div的位置parseInt（）会将字符串转化为数字（忽略最后的非数字部分）
            e.preventDefault();
            //用来禁止鼠标拖拽时选中的功能
        })}
        else{nicoToolbar.addEventListener("mousedown",(e) => {//通过监听内部div调整外部div
            ifDragging = true;
            offsetX = e.clientX;
            offsetY = e.clientY;
            nicoDivY = parseInt(dragDiv.style.top);
            nicoDivX = parseInt(dragDiv.style.left);
            e.preventDefault();
        })};
        document.addEventListener('mousemove',(e)=>{
            if(ifDragging){
                const { clientX, clientY } = e;
                //获取当前鼠标坐标
                dragDiv.style.top = `${nicoDivY+clientY-offsetY}px`;
                dragDiv.style.left = `${nicoDivX+clientX-offsetX}px`;
                //${}表示在字符串中插入函数或变量，但要确保使用反引号`Code`
                if(ifBt){dragDiv.style.pointerEvents = "none";}
                //禁止单击，防止拖拽同时点击。
            }
        });
        document.addEventListener("mouseup",() =>{
            ifDragging = false;
            if(ifBt){dragDiv.style.pointerEvents = "auto";} // 恢复点击
        });
        //松开鼠标，停止拖拽
    }



})();