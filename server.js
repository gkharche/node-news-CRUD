const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('hbs');

const app =  express();
const port  = 4000;


//configure template engine
app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurrentYear',function(){
  return 2017;
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));


app.get('/',function(req,res){
  res.render('home.hbs',{
    pageTitle:"Home page"
  });
});


app.listen(port,function(){
  console.log('Server Start and Bind With ' + port);
});

// NOTE: STep to GitHubs

/*
 1.  Adding a new SSH key to your GitHub account -
 2. check existing SSH key $ls -al ~/.ssh
 3. Genrate new Key : ssh-keygen -t rsa -b 4096 -C 'ganeshkharche01@gmail.com'
    a. Enter file in which to save the key (/home/admin/.ssh/id_rsa): do you want to modified the file name
    b. Enter passphrase (empty for no passphrase): password
    c. Enter same passphrase again:
    Output:  Genrate ssh key  with image box


4. $ ls -al ~/.ssh
  Output:
  total 16
  drwx------  2 admin admin 4096 Nov 24 11:58 .
  drwxrwxrwx 49 admin admin 4096 Nov 24 11:58 ..
  -rw-------  1 admin admin 3243 Nov 24 11:58 id_rsa
  -rw-r--r--  1 admin admin  751 Nov 24 11:58 id_rsa.pub

  note: id_rsa is private key and id_rsa.pub is public key

5. Start the SSH Agent and Add this Key
6. eval "$(ssh-agent -s)" - Start ssh program
  Output: Agent pid 13696

7. Tel SSH agent where the file live
    a. using $ssh-add  ~/.ssh/id_rsa
        Output : Identity added: /home/admin/.ssh/id_rsa (/home/admin/.ssh/id_rsa)
8. Go to Github and add New SSH Key
    1. Settings - Edit profile
    2. Click on SSH And GPG keys
    3. Click On News SSH key
    4. Tilte box - anything -
    5. key box - Copty the id_rsa.pub content into key textarea to comunicated our machin and Github
        a. to copy content of the id_rsa file use below command for ubuntu
            $ sudo apt-get install xclip - install
            $ xclip -sel clip < ~/.ssh/id_rsa.pub  and past into key textarea box in Github

        b. Submit Add SSH Key
9. Test ssh connection
        a. ssh -T git@github.com
          Output:
          The authenticity of host 'github.com (192.30.255.113)' can't be established.
          RSA key fingerprint is 16:27:ac:a5:76:28:2d:36:63:1b:56:4d:eb:df:a6:48.
          Are you sure you want to continue connecting (yes/no)?
          $ yes
          Hi gkharche! You've successfully authenticated, but GitHub does not provide shell access.
10. Create New Reposiritory
      a.  new Or Existing
      b. …or push an existing repository from the command line

      //you can deploye with third party like horuko ..
      $ git remote add origin https://github.com/gkharche/node-news-crud.git
      //push code to github
      $ git push -u origin master
11. $ git remote add origin https://github.com/gkharche/node-news-crud.git
12. $ git push -u origin master
13. 








*/
