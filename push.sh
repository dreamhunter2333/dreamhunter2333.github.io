hexo g
date=`date +"%Y-%m-%d %H:%M:%S"`
git add --all
git commit -m "update at $date"
git push
cd public
git add --all
git commit -m "update at $date"
git push
cd ..
hexo s
