#IT Society Blog
### 1. Blog structure
 \> root 
<br />
&nbsp;\>_includes
<br />
&nbsp;\>_layouts
<br />
&nbsp;\>_posts
<br />
&nbsp;\>_sass
<br />
&nbsp;\>_site
<br />
&nbsp;\>assets
<br />
&nbsp;\>blog
<br />
&nbsp;\>contact
<br />
&nbsp;\>events
<br />
&nbsp;>join
<br />
&nbsp;>MadeByStudents
<br />
&nbsp;>partners
<br />
&nbsp;>post-images
<br />
_config.yml
<br />
CNAME
<br />
Gemfile
<br />
package-lock.json

### 2. Creating blog post
1. Inside /_posts, create a new file and name it with the following format:
`YYYY-MM-DD-slug.md`
2. Include post front matter at the top of the post
![](https://i.imgur.com/YZfB768.png)
> - layout: post | page | default
> - feature_text_desc: Title on post feature image
> - categories: General | Events | Announcement | Random |Tutorial | Guides (remember to keep this list updated)
> - feature_image: Feature images can be found in /assets/bg/
> - author: Name of author
3. Write post in markdown (refer to elements.md for themed markdown elements and [here](https://github.com/adam-p/markdown
-here/wiki/Markdown-Cheatsheet#images)
for a complete markdown guide)

### 3. Editing and publishing changes to blog
Run `bundle exec jekyll serve` to view any changes made to post or page. For edits to _config.yml,the site must be re-built
 first by running `bundle exec jekyll build`
 
### 4. Creating a blog page
1. Create a new file `page-title.md`
2. Add blog page front matter
![](https://i.imgur.com/m14chBn.png)
> - title: Page title
> - layout: `page`
> - feature_image: Feature images can be found in /assets/bg/
> - feature_text: Title and description on post feature image

### 5. Adding a supporting partner logo
1. Add partner logo into /assets/logos and name the logo with format `company_name.png` to keep it consistent
2. Open _theme.scss and search for '//suuporting partners'
3. Scroll down the list and add `.img-# {background-image: url("/assets/logos/company_name.png");}`
4. Open /_layouts/partners.html
5. Add `<a href="/company-website/"><div class="img img-#"></div></a>` under `.gallery`

### 6. Blog domain
Blog domain name can be found in the CNAME file and can be managed in IT Society's Namecheap account
