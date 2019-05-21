---
layout: post
feature_text_desc: "Google Forms: How to validate MMU Student ID and phone numbers"
categories:
- Tutorial
feature_image: "/assets/bg/inspiration-geometry.png"
author: Anonoz Chong
---

{% include figure.html image="/post-images/5.png" %}
MMU students **love** Google Forms. Final year students use it to conduct surveys. Clubs and societies use it to sign up event attendees.

But, there is a problem with the phone number field. You see, if the user fills in the phone number, with a leading zero, but without a dash, Google Sheets treats it as number and will not keep the leading zero.

{% include figure.html image="/post-images/6.png" %}

Where’s the leading zero?

That’s not just it, where there is no validation, expect to see all kinds of phone numbers in your responses.

{% include figure.html image="/post-images/7.png" %}

You don’t want to see this right? Thank god we can do something about it, we are going to use Google Forms’ **data validation.** Here’s how you do it:

1.  Click on the form field you want to validate.
2.  Expand **Advanced Settings**.
3.  Check **Data Validation**.
4.  Select **Regular Expression**, **matches,** and type **0\d{1,3}-\d{7,9}** (this matches typical Malaysian phone numbers).

This is how it should look like:

{% include figure.html image="/post-images/8.png" %}

Data validation + Regular Expression = POWER OVERWHELMING

So how about MMU Student ID? Same, but the regular expression is **\d{10}**. This regular expression matches anything with 10 digits.

This is how your form should be like after you implemented data validation with regex:

{% include figure.html image="/post-images/9.png" %}

IT Society is organising a trip to Penang on 12th – 15th November 2015. We will be visiting lots of tech companies based there, such as Intel, ViTrox, Exabytes and so on. Not to mention we will embark on night time halal food adventure to find all the best foods in Penang. [Learn more about the trip.](https://www.itsociety.rocks/events/2015/learning-trip-penang-2015-tentative-agenda/)

