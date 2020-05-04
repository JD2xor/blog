---
title: "{{ replace .TranslationBaseName "-" " " | title }}"
date: {{ .Date }}
archives: "{{ dateFormat "2006" .Date }}"
categories: "post"
tags: ["blog", "post"]
# draft: true
banner: [
    {
        src: "/post/insert_image_here.svg",
        alt: "insert image here"
    }
]
toc: true
---



<!--more-->

