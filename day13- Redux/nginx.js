//nnignx
sudo apt-get install nginx
// remove default confing
sudo rm /etc/nginx/sites-enabled/default
//create a config file 
sudo nano /etc/nginx/sites-available/node


server {
    listen 80;
    server_name 35.244.56.180;

    location / {
        proxy_set_header   X-Forwarded-For $remote_addr;
        proxy_set_header   Host $http_host;
        proxy_pass         "http://127.0.0.1:3000";
    }
}


sudo ln -s /etc/nginx/sites-available/node /etc/nginx/sites-enabled/node


sudo service nginx restart

//https://github.com/mohdafzal21/reduxths19.git