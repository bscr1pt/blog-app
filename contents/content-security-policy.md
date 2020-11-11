---
title: What is Content-Security Policy?
tag: web-security
slug: content-security-policy
date: '2020/11/07'
more: https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
image: https://image.freepik.com/free-vector/cyber-security-wallpaper-with-futuristic-elements_23-2148534259.jpg
about: These attacks are used for everything from data theft to site defacement to distribution of malware.
firstWords: Pellentesque condimentum velit vel justo rutrum, sit amet commodo diam tincidunt.
---

Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement to distribution of malware.

CSP is designed to be fully backward compatible (except CSP version 2 where there are some explicitly-mentioned inconsistencies in backward compatibility; more details here section 1.1). Browsers that don't support it still work with servers that implement it, and vice-versa: browsers that don't support CSP simply ignore it, functioning as usual, defaulting to the standard same-origin policy for web content. If the site doesn't offer the CSP header, browsers likewise use the standard same-origin policy.

To enable CSP, you need to configure your web server to return the Content-Security-Policy HTTP header. (Sometimes you may see mentions of the X-Content-Security-Policy header, but that's an older version and you don't need to specify it anymore.)

Alternatively, the <meta> element can be used to configure a policy, for example: <meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src https://*; child-src 'none';">

#### Threats

Mitigating cross site scripting

A primary goal of CSP is to mitigate and report XSS attacks. XSS attacks exploit the browser's trust of the content received from the server. Malicious scripts are executed by the victim's browser because the browser trusts the source of the content, even when it's not coming from where it seems to be coming from.

CSP makes it possible for server administrators to reduce or eliminate the vectors by which XSS can occur by specifying the domains that the browser should consider to be valid sources of executable scripts. A CSP compatible browser will then only execute scripts loaded in source files received from those allowlisted domains, ignoring all other script (including inline scripts and event-handling HTML attributes).

As an ultimate form of protection, sites that want to never allow scripts to be executed can opt to globally disallow script execution.

Mitigating packet sniffing attacks

In addition to restricting the domains from which content can be loaded, the server can specify which protocols are allowed to be used; for example (and ideally, from a security standpoint), a server can specify that all content must be loaded using HTTPS. A complete data transmission security strategy includes not only enforcing HTTPS for data transfer, but also marking all cookies with the secure attribute and providing automatic redirects from HTTP pages to their HTTPS counterparts. Sites may also use the Strict-Transport-Security HTTP header to ensure that browsers connect to them only over an encrypted channel.

#### Using CSP

Configuring Content Security Policy involves adding the Content-Security-Policy HTTP header to a web page and giving it values to control what resources the user agent is allowed to load for that page. For example, a page that uploads and displays images could allow images from anywhere, but restrict a form action to a specific endpoint. A properly designed Content Security Policy helps protect a page against a cross site scripting attack. This article explains how to construct such headers properly, and provides examples.
Specifying your policy

You can use the Content-Security-Policy HTTP header to specify your policy, like this:

#### Content-Security-Policy: policy

The policy is a string containing the policy directives describing your Content Security Policy.

#### Writing a policy

A policy is described using a series of policy directives, each of which describes the policy for a certain resource type or policy area. Your policy should include a default-src policy directive, which is a fallback for other resource types when they don't have policies of their own (for a complete list, see the description of the default-src directive). A policy needs to include a default-src or script-src directive to prevent inline scripts from running, as well as blocking the use of eval(). A policy needs to include a default-src or style-src directive to restrict inline styles from being applied from a <style> element or a style attribute. There are specific directives for a wide variety of types of items, so that each type can have its own policy, including fonts, frames, images, audio and video media, scripts, and workers.
