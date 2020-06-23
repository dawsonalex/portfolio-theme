---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true
tags: []
type: "post"
{{ with .Site.Params.author }}author: "{{ . }}"{{ end }}
---