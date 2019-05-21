---
layout: post
feature_text_desc: How to provide fast wi-fi to participants in MMU
categories:
- Guides
feature_image: "/assets/bg/inspiration-geometry.png"
author: Anonoz Chong
---

{% include figure.html image="/post-images/17.png" %}
**Disclaimer:** It’s against MMU’s policy to deploy your own wireless access points. Do this at your own risk.

At a meager speed of 0.5Mbps, MMU WiFi is not exactly a fast WiFi. If you are expecting a huge number of outsiders coming to your event, you can ask ITSD to open up the Open WiFi – the one with no password. But again, it’s only 0.5Mbps with terrible latency.

So how did we provide fast Internet to many people in our events?

**Ethernet port = 100Mbps**

Most ethernet ports in MMU Cyberjaya provide Internet as fast as 100Mbps. We tested this in MPH (stage’s computer), FCI labs, classrooms, and lecturers’ rooms. Unfortunately we didn’t test it in all the places, and MPH extension seems to have a terrible Internet speed of 4Mbps.

**Router’s max users count**

Most cheapo routers can only support 10 – 15 users before breaking up. If you use UniFi and Maxis Home Fiber, and you experience tons of disconnections and instability, it probably is not because of the line, it’s mostly likely because of your router not being able to support that many users.

{% include figure.html image="/post-images/18.png" %})

Currently, I stay in a Cyberia townhouse that has 9 occupants with 25 devices. Every night we have to restart the Asus router 3 – 4 times with no luck of getting a stable connection.

I ended up buying an Apple AirPort Extreme, which Apple claims to support 50 users, and put in the house. **We’ve almost never restarted the router ever since.**

{% include figure.html image="/post-images/19.png" %}

Of course, Airport Extreme is a bit of an overkill. For a much lower price, AirPort Express can support 50 users as well.

Although AirPort Express’s WAN port only supports 100Mbps, but it’s good enough for MMU, because MMU’s ethernet port is only 100Mbps too.

**How did it go?**

After the frustration of terrible Internet for first 2 classes of Ruby on Rails workshop, I decided to buy an AirPort Express and see how it fares.

**It’s solid.**

Students no longer experience disconnections and slow speed. In fact the speed we’ve got is around 90~ Mbps, well enough to perform bundle install and download vagrant boxes.

How did it perform in larger events?

To test that, I deployed it in IT Career Week, where 19 companies will be setting up booths, streaming HD recruitment videos, and giving career talks.

**With AirPort Utility app, the router peaked at 35 clients, and for 2 days, we didn’t receive a single complaint of Internet disconnection.**

**tl;dr**

[Buy AirPort Express.](https://www.apple.com/my/airport-express/) It’s awesome.
